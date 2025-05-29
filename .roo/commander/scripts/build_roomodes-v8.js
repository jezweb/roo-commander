const fs = require('fs').promises;
const path = require('path');

// --- Configuration ---
const MODE_FILE_PATHS = [
    '.roo/commander/modes/roo-commander/roo-commander.mode.md',
    '.roo/commander/modes/manager-data-product/manager-data-product.mode.md',
    '.roo/commander/modes/data-product-strategist/data-product-strategist.mode.md'
];
const OUTPUT_DIR = '.';
const OUTPUT_FILENAME = '.roomodes';
const DEFAULT_GROUPS = ["read", "edit", "browser", "command", "mcp"];

let tomlParser = null;
let TomlError = Error; // Generic error if no parser found

// --- Attempt to import TOML parsers (same as v7) ---
try {
    const jToml = require('@ltd/j-toml');
    tomlParser = (tomlString) => jToml.parse(tomlString, { joiner: '\n' });
    console.log("Using '@ltd/j-toml' for TOML parsing.");
} catch (_error) {
    console.log("Info: '@ltd/j-toml' not found. Trying '@iarna/toml'.");
    try {
        const iarnaToml = require('@iarna/toml');
        tomlParser = iarnaToml.parse;
        TomlError = Error; // Use generic Error for @iarna/toml
        console.log("Using '@iarna/toml' for TOML parsing.");
    } catch (_error2) {
        console.warn("Warning: Neither '@ltd/j-toml' nor '@iarna/toml' found. Will attempt regex fallback for TOML parsing (less reliable).");
    }
}

// --- Helper Functions ---

/**
 * Extracts TOML frontmatter and Markdown content from a file's content string.
 * @param {string} content - The full content of the .mode.md file.
 * @returns {{tomlString: string, markdownContent: string}|null} - Object with tomlString and markdownContent, or null.
 */
function extractTomlAndMarkdown(content) {
    const match = content.match(/^\+\+\+\s*([\s\S]*?)\s*\+\+\+([\s\S]*)/m);
    if (match && match.length === 3) {
        return {
            tomlString: match[1].trim(),
            markdownContent: match[2].trim()
        };
    }
    console.warn("Could not find TOML frontmatter delimiters (+++ ... +++).");
    return null;
}

/**
 * Fallback TOML parser using regex.
 * @param {string} tomlContent - The TOML string.
 * @param {string} filePath - Path to the file for logging.
 * @returns {object|null} - Parsed data object or null on failure.
 */
function parseTomlWithRegex(tomlContent, filePath) {
    const data = {};
    let success = true;

    const nameMatch = tomlContent.match(/^\s*name\s*=\s*"(.*?)"/m);
    if (nameMatch) {
        data.name = nameMatch[1];
    } else {
        console.warn(`  Warning: Regex failed to find 'name' in TOML of ${filePath}.`);
        // Not strictly required for the script to fail, but name will be missing.
    }

    const customInstructionsMatch = tomlContent.match(/^\s*custom_instructions\s*=\s*"""([\s\S]*?)"""/m) ||
                                  tomlContent.match(/^\s*custom_instructions\s*=\s*'''([\s\S]*?)'''/m) ||
                                  tomlContent.match(/^\s*custom_instructions\s*=\s*"(.*?)"/m);
    if (customInstructionsMatch) {
        data.custom_instructions = customInstructionsMatch[1].trim();
    } else {
        data.custom_instructions = ""; // Default to empty string if not found
        console.log(`  Info: 'custom_instructions' not found via regex in TOML of ${filePath}. Defaulting to empty.`);
    }
    
    // Add other fields if needed by regex, but 'title' and 'custom_instructions' are key for this script.
    // For this script, if a proper TOML parser is not available, we primarily care about title and custom_instructions.
    // The roleDefinition comes from Markdown. Slug from path. Groups are default.

    return data; // Return even if some fields are missing, main parser will handle overall failure.
}


// --- Main Build Function ---
async function buildRoomodesV8() {
    const customModes = [];

    for (const modeFilePath of MODE_FILE_PATHS) {
        console.log(`Processing file: ${modeFilePath}`);
        try {
            const fileContent = await fs.readFile(modeFilePath, 'utf-8');
            const extracted = extractTomlAndMarkdown(fileContent);

            if (!extracted) {
                console.warn(`  Warning: Could not extract TOML and Markdown from ${modeFilePath}. Skipping.`);
                continue;
            }

            const { tomlString, markdownContent } = extracted;
            let tomlData = null;
            let parseError = null;

            if (tomlParser) {
                try {
                    tomlData = tomlParser(tomlString);
                } catch (e) {
                    if (e instanceof TomlError || (e.name && e.name.includes('Toml'))) {
                        parseError = e;
                    } else {
                        throw e; // Re-throw unexpected errors
                    }
                }
            }

            // Fallback to regex if dedicated parser failed or wasn't available
            if (!tomlData && (!tomlParser || parseError)) {
                 if (parseError) console.warn(`  Warning: TOML parser failed for ${modeFilePath}: ${parseError.message}. Attempting regex fallback.`);
                 else console.log(`  Info: No dedicated TOML parser. Attempting regex fallback for ${modeFilePath}.`);
                 
                 tomlData = parseTomlWithRegex(tomlString, modeFilePath);
                 if (!tomlData || !tomlData.name) { // Name is crucial
                    console.warn(`  Warning: Regex fallback failed to extract sufficient TOML data (especially 'name') from ${modeFilePath}. Skipping.`);
                    continue;
                 }
            }
            
            if (!tomlData) {
                console.warn(`  Warning: Could not parse TOML data from ${modeFilePath} using any method. Skipping.`);
                continue;
            }

            // --- Extract data for .roomodes structure ---
            const slug = path.basename(path.dirname(modeFilePath));
            const name = tomlData.name; // Use 'name' from TOML
            const roleDefinition = markdownContent; // As per user request: roleDefinition from Markdown body
            const customInstructions = tomlData.custom_instructions || ""; // As per user request

            if (!name) {
                console.warn(`  Warning: Missing 'name' in TOML (for mode name) in ${modeFilePath}. Skipping.`);
                continue;
            }
            if (!roleDefinition) { // Should generally not be empty if Markdown part exists
                console.warn(`  Warning: Markdown content (for roleDefinition) is empty in ${modeFilePath}. Skipping.`);
                continue;
            }
             if (!slug) { // Should always be derived
                console.warn(`  Warning: Could not derive slug for ${modeFilePath}. Skipping.`);
                continue;
            }


            customModes.push({
                slug,
                name,
                roleDefinition,
                groups: DEFAULT_GROUPS,
                customInstructions
            });
            console.log(`  Successfully processed: ${slug}`);

        } catch (err) {
            if (err.code === 'ENOENT') {
                console.error(`  Error: Mode file ${modeFilePath} not found. Skipping.`);
            } else {
                console.error(`  Error processing file ${modeFilePath}:`, err);
            }
        }
    }

    if (customModes.length === 0) {
        console.log("\nNo modes were processed successfully. Output file will not be generated.");
        return;
    }

    // --- Generate and Write JSON Output ---
    const outputJson = {
        customModes: customModes
    };

    try {
        await fs.mkdir(OUTPUT_DIR, { recursive: true });
        const outputFilePath = path.join(OUTPUT_DIR, OUTPUT_FILENAME);
        const finalJsonString = JSON.stringify(outputJson, null, 2);
        
        console.log(`\nWriting ${customModes.length} modes to ${outputFilePath}...`);
        await fs.writeFile(outputFilePath, finalJsonString, 'utf-8');
        console.log(`Successfully generated ${outputFilePath} with ${customModes.length} modes.`);
    } catch (err) {
        console.error(`Error writing output file to ${path.join(OUTPUT_DIR, OUTPUT_FILENAME)}:`, err);
    }
}

// --- Execute Main Function ---
buildRoomodesV8();