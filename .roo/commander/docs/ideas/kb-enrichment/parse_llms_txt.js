#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const process = require('process');

// --- Argument Parsing ---
if (process.argv.length !== 4) {
  console.error('Usage: node parse_llms_txt.js <path_to_llms.txt> <library_name>');
  process.exit(1);
}

const inputFile = process.argv[2];
const libraryName = process.argv[3];

if (!fs.existsSync(inputFile)) {
  console.error(`Error: Input file not found at ${inputFile}`);
  process.exit(1);
}

if (!libraryName || !/^[a-zA-Z0-9_-]+$/.test(libraryName)) {
    console.error(`Error: Invalid library name "${libraryName}". Use only alphanumeric characters, underscores, or hyphens.`);
    process.exit(1);
}
// --- End Argument Parsing ---

const outputBaseDir = 'kb';
const outputDir = path.join(outputBaseDir, libraryName); // Base dir for the library KB

// --- Configuration for Categorization (Copied from create_kb_from_json.js) ---
const categoryKeywords = {
  'guide': ['guide', 'introduction', 'essentials', 'components', 'reusability', 'composition', 'reactivity', 'rendering', 'list', 'event', 'form', 'lifecycle', 'watchers', 'template', 'provide', 'inject', 'async', 'suspense', 'transitions', 'animation', 'scaling', 'routing', 'state management', 'testing', 'ssr', 'typescript', 'composition api', 'options api', 'built-ins', 'sfc', 'performance', 'security', 'deployment', 'best practices', 'style', 'start', 'usage', 'basic', 'core', 'concept', 'feature'],
  'api': ['api', 'reference', 'application', 'global', 'component instance', 'function', 'directive', 'special attribute', 'ref', 'reactive', 'computed', 'effect', 'defineprops', 'defineemits', 'defineslots', 'defineexpose', 'defineoptions', 'definemodel', 'createapp', 'nexttick', 'set', 'del', 'version', 'utility', 'interface', 'type', 'props', 'methods', 'events', 'slots'],
  'tutorial': ['tutorial', 'step', 'learn', 'example walkthrough'],
  'cookbook': ['cookbook', 'recipe', 'pattern'],
  'examples': ['example', 'demo'],
  'migration': ['migration', 'upgrade', 'v2', 'v3', 'v4', 'v5'], // Add more versions as needed
  'concepts': ['concept', 'mechanism', 'deep dive', 'architecture', 'philosophy'],
  'internals': ['internals', 'source', 'contribution', 'contributing'],
  'about': ['about', 'team', 'faq', 'community', 'release', 'changelog', 'sponsor', 'partner'],
  'config': ['config', 'configuration', 'options', 'settings', 'setup', 'install', 'installation'],
};

// Function to determine category (Copied from create_kb_from_json.js)
function determineCategory(pageTitle, tags = []) { // Accept tags for potentially better categorization
  if (!pageTitle) return 'misc';
  const lowerTitle = pageTitle.toLowerCase();
  const lowerTags = tags.map(t => t.toLowerCase());

  // Prioritize tags if available (though llms.txt doesn't seem to have explicit tags per snippet)
  for (const category in categoryKeywords) {
    if (categoryKeywords[category].some(keyword => lowerTags.includes(keyword))) {
      return category;
    }
  }
  // Fallback to title
  for (const category in categoryKeywords) {
    if (categoryKeywords[category].some(keyword => lowerTitle.includes(keyword))) {
      return category;
    }
  }
  const titleParts = pageTitle.split(':');
  if (titleParts.length > 1) {
      const potentialCat = titleParts[0].trim().toLowerCase();
      if (Object.keys(categoryKeywords).includes(potentialCat)) {
          return potentialCat;
      }
  }
  return 'misc'; // Default category
}
// --- End Configuration ---

// Function to sanitize filenames (Copied from create_kb_from_json.js)
function sanitizeFilename(name) {
  if (!name) return 'untitled_page.md';
  return name
    .toLowerCase()
    .replace(/[:/\\?*|"<>&\s+]+/g, '_') // Replace spaces and invalid chars with underscore
    .replace(/_+/g, '_') // Collapse multiple underscores
    .replace(/^_|_$/g, '') // Trim leading/trailing underscores
    .substring(0, 100) + '.md';
}

// --- Parsing Logic for llms.txt format ---
function parseLlmsTxt(content) {
    const snippets = [];
    const blocks = content.split('----------------------------------------');

    console.log(`Parsing ${blocks.length} potential blocks...`);

    blocks.forEach((block, index) => {
        const trimmedBlock = block.trim();
        if (!trimmedBlock) return; // Skip empty blocks

        const snippet = {
            TITLE: '',
            DESCRIPTION: '',
            SOURCE: '',
            LANGUAGE: '',
            CODE: ''
        };
        let _currentField = null; // eslint-disable-line no-unused-vars
        let codeContent = [];
        let inCodeBlock = false;
        let expectingCodeStart = false; // New state: true after 'CODE:' is found, waiting for ```

        trimmedBlock.split('\n').forEach(line => {
            const titleMatch = line.match(/^TITLE:\s*(.*)/);
            const descMatch = line.match(/^DESCRIPTION:\s*(.*)/);
            const sourceMatch = line.match(/^SOURCE:\s*(.*)/);
            const langMatch = line.match(/^LANGUAGE:\s*(.*)/);
            const codeMarkerMatch = line.match(/^CODE:\s*$/);       // Match only "CODE:"
            const codeStartFenceMatch = line.match(/^```(\w*)/);    // Match opening fence ```opt_lang
            const codeEndFenceMatch = line.match(/^```\s*$/);       // Match closing fence ```

            if (inCodeBlock) {
                // Currently inside a code block
                if (codeEndFenceMatch) {
                    // Found the closing fence
                    snippet.CODE = codeContent.join('\n').trim(); // Assign collected code
                    inCodeBlock = false;
                    currentField = null;
                    codeContent = []; // Reset
                } else {
                    // Still inside, collect the line
                    codeContent.push(line);
                }
            } else if (expectingCodeStart) {
                // Found 'CODE:', now expecting the opening fence ```
                if (codeStartFenceMatch) {
                    // Found the opening fence
                    inCodeBlock = true;
                    expectingCodeStart = false;
                    // Use language hint from ``` if LANGUAGE field wasn't set
                    if (!snippet.LANGUAGE && codeStartFenceMatch[1]) {
                        snippet.LANGUAGE = codeStartFenceMatch[1].trim();
                    }
                    // Do not add the fence itself to codeContent
                } else if (line.trim() !== '') {
                    // Found non-empty line that isn't the expected ``` fence
                    // Reset expectation - might be a malformed block
                    expectingCodeStart = false;
                    currentField = null;
                    // console.warn(`Warning: Expected code fence '```' after 'CODE:' but found: "${line}"`);
                }
                // Ignore empty lines between CODE: and ```
            } else if (titleMatch) {
                snippet.TITLE = titleMatch[1].trim();
                _currentField = 'TITLE'; // eslint-disable-line no-unused-vars
            } else if (descMatch) {
                snippet.DESCRIPTION = descMatch[1].trim();
                _currentField = 'DESCRIPTION'; // eslint-disable-line no-unused-vars
                // Future: Add multi-line DESCRIPTION handling here if needed
            } else if (sourceMatch) {
                snippet.SOURCE = sourceMatch[1].trim();
                _currentField = 'SOURCE'; // eslint-disable-line no-unused-vars
            } else if (langMatch) {
                snippet.LANGUAGE = langMatch[1].trim();
                _currentField = 'LANGUAGE'; // eslint-disable-line no-unused-vars
            } else if (codeMarkerMatch) {
                // Found the 'CODE:' marker, prepare for the opening fence
                _currentField = 'CODE'; // eslint-disable-line no-unused-vars
                expectingCodeStart = true;
                codeContent = []; // Ensure code content is reset
            }
            // Lines that don't match any pattern and are not within code/expecting code start are ignored
        });

        // Handle case where code block might not have closing ``` at the very end
        if (inCodeBlock && codeContent.length > 0) {
             // Handle case where code block might not have closing ``` at the very end
             snippet.CODE = codeContent.join('\n').trim();
        }

        if (snippet.TITLE && snippet.CODE) { // Require at least TITLE and CODE
            snippets.push(snippet);
        } else {
            console.warn(`Skipping block ${index + 1} due to missing TITLE or CODE.`);
        }
    });

    console.log(`Successfully parsed ${snippets.length} snippets.`);
    return snippets;
}
// --- End Parsing Logic ---


// --- Main Processing Logic ---
function processInputFile() {
  // Ensure base output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created base directory: ${outputDir}`);
  }

  // Read the input llms.txt file
  console.log(`Reading input file: ${inputFile}`);
  const rawData = fs.readFileSync(inputFile, 'utf-8');
  const snippets = parseLlmsTxt(rawData);

  if (snippets.length === 0) {
      console.log("No valid snippets found in the input file. Exiting.");
      return;
  }

  // Group snippets by pageTitle (using the parsed TITLE field)
  const snippetsByPage = {};
  snippets.forEach(snippet => {
    const pageTitle = snippet.TITLE || 'Untitled Page'; // Use the main TITLE as the page grouping key
    if (!snippetsByPage[pageTitle]) {
      snippetsByPage[pageTitle] = [];
    }
    snippetsByPage[pageTitle].push(snippet);
  });

  let totalFilesCreated = 0;
  const pageTitles = Object.keys(snippetsByPage);
  console.log(`Found ${pageTitles.length} unique page titles to process.`);

  // Process each page group to create markdown files and update category indexes
  for (const pageTitle of pageTitles) {
    const pageSnippets = snippetsByPage[pageTitle];
    // Determine category based on the page title
    const category = determineCategory(pageTitle);
    const categoryDir = path.join(outputDir, category);
    const categoryIndexFile = path.join(categoryDir, 'index.json');

    // Ensure category directory exists
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
      console.log(`Created category directory: ${categoryDir}`);
    }

    const filename = sanitizeFilename(pageTitle);
    const relativeFilePathInCategory = filename;
    const absoluteFilePath = path.join(categoryDir, filename);

    let snippetTitlesForIndex = []; // Collect snippet titles for the index summary
    let pageMarkdownContent = '';

    pageSnippets.forEach((snippet, _index) => { // eslint-disable-line no-unused-vars
      const snippetTitle = snippet.TITLE; // Use the snippet's own TITLE for the ## heading
      snippetTitlesForIndex.push(snippetTitle);

      pageMarkdownContent += `## ${snippetTitle}\n\n`;
      if (snippet.DESCRIPTION) {
          pageMarkdownContent += `**Description:** ${snippet.DESCRIPTION}\n\n`;
      }
      // Add SOURCE if available
      if (snippet.SOURCE) {
          pageMarkdownContent += `**Source:** ${snippet.SOURCE}\n\n`;
      }

      const language = snippet.LANGUAGE || ''; // Use parsed language or default to empty
      pageMarkdownContent += `\`\`\`${language}\n${snippet.CODE}\n\`\`\`\n\n`;
      pageMarkdownContent += `---\n\n`;
    });

    // Generate file summary (for the top of the markdown file)
    const fileSummaryDetailed = `Covers topics related to "${pageTitle}".`; // Simpler summary
    const finalMarkdownContent = `# ${pageTitle}\n\n**Summary:** ${fileSummaryDetailed}\n\n---\n\n${pageMarkdownContent.trim()}`;

    // Generate concise summary for the category index
    const indexSummary = `${pageTitle} (Snippets: ${pageSnippets.length})`; // Simpler index summary

    try {
      // Write the markdown file
      fs.writeFileSync(absoluteFilePath, finalMarkdownContent);
      console.log(`Wrote file: ${absoluteFilePath}`);
      totalFilesCreated++;

      // --- Update Category Index File (Append/Update Logic) ---
      let categoryIndexData = [];
      if (fs.existsSync(categoryIndexFile)) {
        try {
          const indexContent = fs.readFileSync(categoryIndexFile, 'utf-8');
          if (indexContent.trim()) { // Avoid parsing empty files
              categoryIndexData = JSON.parse(indexContent);
              if (!Array.isArray(categoryIndexData)) categoryIndexData = [];
          }
        } catch (e) {
          console.warn(`Warning: Could not parse existing category index ${categoryIndexFile}. Overwriting. Error: ${e.message}`);
          categoryIndexData = [];
        }
      }

      const existingEntryIndex = categoryIndexData.findIndex(entry => entry.filename === relativeFilePathInCategory);
      const newEntry = {
        filename: relativeFilePathInCategory,
        title: pageTitle,
        summary: indexSummary,
        snippet_count: pageSnippets.length // Count of snippets grouped under this page title
      };

      if (existingEntryIndex > -1) {
        categoryIndexData[existingEntryIndex] = newEntry; // Update existing entry
      } else {
        categoryIndexData.push(newEntry); // Add new entry
      }

      // Sort the index alphabetically by title before writing
      categoryIndexData.sort((a, b) => a.title.localeCompare(b.title));

      fs.writeFileSync(categoryIndexFile, JSON.stringify(categoryIndexData, null, 2));
      console.log(`Updated category index: ${categoryIndexFile}`);
      // --- End Update Category Index File ---

    } catch (writeError) {
        console.error(`Error writing file ${absoluteFilePath} or its category index:`, writeError);
    }
  }
  console.log(`\nProcessing complete. Created/updated ${totalFilesCreated} markdown files for library "${libraryName}".`);
}
// --- End Main Processing Logic ---

// --- Execute Main Logic ---
try {
  processInputFile();
} catch (error) {
  console.error(`An unexpected error occurred during processing for library "${libraryName}":`, error);
  process.exit(1);
}
// --- End Execute Main Logic ---