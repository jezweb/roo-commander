const fs = require('fs').promises;
const path = require('path');

const MODES_DIR = '.ruru/modes';
const OUTPUT_FILE = '.roomodes';
const SUMMARY_OUTPUT_FILE = '.ruru/modes/roo-commander/kb/kb-available-modes-summary.md'; // Added
const DEFAULT_GROUPS = ["read", "edit", "browser", "command", "mcp"];

let tomlParser = null;
let TomlError = Error; // Generic error if no parser found

// --- Attempt to import TOML parsers ---
try {
    const jToml = require('@ltd/j-toml');
    // j-toml parse returns an array for tables, we need the object directly
    tomlParser = (tomlString) => jToml.parse(tomlString, { joiner: '\n' });
    console.log("Using '@ltd/j-toml' for TOML parsing.");
} catch (_error) { // Prefixed unused 'error'
    console.log("Info: '@ltd/j-toml' not found. Trying '@iarna/toml'.");
    try {
        const iarnaToml = require('@iarna/toml');
        tomlParser = iarnaToml.parse;
        TomlError = Error; // Use generic Error for @iarna/toml
        console.log("Using '@iarna/toml' for TOML parsing.");
    } catch (_error2) { // Prefixed unused 'error2'
        console.warn("Warning: Neither '@ltd/j-toml' nor '@iarna/toml' found. Will attempt regex fallback for TOML parsing (less reliable).");
        // No specific TomlError class available for regex fallback
    }
}

// --- Regex Fallback Functions ---
function extractTomlFrontmatterRegex(content) {
    const match = content.match(/^\+\+\+\s*([\s\S]*?)\s*\+\+\+/m);
    return match ? match[1] : null;
}

function parseTomlWithRegex(tomlContent, filePath) {
    const data = {};
    let success = true;

    const idMatch = tomlContent.match(/^\s*id\s*=\s*"(.*?)"/m);
    if (idMatch) {
        data.id = idMatch[1];
    } else {
        console.warn(`  Warning: Regex failed to find 'id' in ${filePath}.`);
        success = false;
    }

    const nameMatch = tomlContent.match(/^\s*name\s*=\s*"(.*?)"/m);
    if (nameMatch) {
        data.name = nameMatch[1];
    } else {
        console.warn(`  Warning: Regex failed to find 'name' in ${filePath}.`);
        success = false;
    }

    // Regex for potentially multiline system_prompt
    const promptMatch = tomlContent.match(/^\s*system_prompt\s*=\s*"""([\s\S]*?)"""/m);
    if (promptMatch) {
        data.system_prompt = promptMatch[1];
    } else {
        // Try single line prompt match as fallback
        const singleLinePromptMatch = tomlContent.match(/^\s*system_prompt\s*=\s*"(.*?)"/m);
         if (singleLinePromptMatch) {
             data.system_prompt = singleLinePromptMatch[1];
         } else {
            console.warn(`  Warning: Regex failed to find 'system_prompt' (multiline or single) in ${filePath}.`);
            success = false;
         }
    }

    // Regex for description (optional)
    const descriptionMatch = tomlContent.match(/^\s*description\s*=\s*"(.*?)"/m);
    if (descriptionMatch) {
        data.description = descriptionMatch[1];
    } // No warning if missing, it's optional

    return success ? data : null;
}


// --- Main Build Function ---
async function buildRoomodes() {
    let modes_data = [];
    // No need for processed_count here, use modes_data.length at the end

    try {
        console.log(`Scanning directory: ${MODES_DIR}`);
        const entries = await fs.readdir(MODES_DIR, { withFileTypes: true });

        const processingPromises = entries.map(async (entry) => {
            if (entry.isDirectory()) {
                const slug = entry.name;
                const mode_dir_path = path.join(MODES_DIR, slug);
                // Use the slug (directory name) to find the mode file
                const mode_file_path = path.join(mode_dir_path, `${slug}.mode.md`);

                try {
                    // Check existence using stat, avoids needing separate access call
                    await fs.stat(mode_file_path);
                    console.log(`  Processing file: ${mode_file_path}`);
                    const file_content = await fs.readFile(mode_file_path, 'utf-8');
                    const toml_content = extractTomlFrontmatterRegex(file_content);

                    if (!toml_content) {
                        console.warn(`  Warning: Could not find TOML frontmatter in ${mode_file_path}. Skipping.`);
                        return null;
                    }

                    let data = null;
                    let parseError = null;
                    if (tomlParser) {
                        try {
                            data = tomlParser(toml_content);
                        } catch (e) {
                            // Check if it's the specific TOML error class if available
                            if (e instanceof TomlError || (e.name && e.name.includes('Toml'))) { // Check name as fallback
                                parseError = e;
                            } else {
                                throw e; // Re-throw unexpected errors
                            }
                        }
                    }

                    // Fallback to regex if parser failed or wasn't available
                    if (!data && !tomlParser) {
                         console.log(`  Info: Attempting regex fallback for ${mode_file_path}.`);
                         data = parseTomlWithRegex(toml_content, mode_file_path);
                         if (!data) parseError = new Error("Regex parsing failed to extract required fields."); // Simulate an error for logging
                    } else if (!data && parseError) {
                         console.warn(`  Warning: Failed to parse TOML in ${mode_file_path}: ${parseError}. Skipping.`);
                         return null;
                    }


                    if (!data) {
                         console.warn(`  Warning: Could not parse TOML data from ${mode_file_path} using any method. Skipping.`);
                         return null;
                    }


                    // Extract required fields
                    const mode_slug_from_toml = data.id; // Use 'id' from TOML
                    const mode_name = data.name;
                    const system_prompt = data.system_prompt;
                    const description = data.description || "[No description provided]"; // Extract description, provide default

                    // Validate required fields
                    const missing_fields = [];
                    if (!mode_slug_from_toml) missing_fields.push('id');
                    if (!mode_name) missing_fields.push('name');
                    if (!system_prompt) missing_fields.push('system_prompt');

                    if (missing_fields.length > 0) {
                        console.warn(`  Warning: Missing required field(s) ${missing_fields.join(', ')} in ${mode_file_path}. Skipping.`);
                        return null;
                    }

                    // Check slug consistency
                    if (mode_slug_from_toml !== slug) {
                        console.warn(`  Warning: Slug mismatch! Directory is '${slug}' but TOML 'id' is '${mode_slug_from_toml}' in ${mode_file_path}. Using TOML 'id'.`);
                    }

                    // Return the successfully processed mode data
                    return {
                        slug: mode_slug_from_toml, // Use slug from TOML id
                        name: mode_name,
                        roleDefinition: system_prompt.trim(),
                        description: description.trim(), // Add description
                        groups: DEFAULT_GROUPS
                    };

                } catch (err) {
                    if (err.code === 'ENOENT') {
                        // File doesn't exist - potentially expected if dir != slug
                         console.log(`  Info: Mode definition file ${mode_file_path} not found. Skipping directory '${slug}'.`);
                    } else {
                        console.error(`  Error processing directory ${slug} or file ${mode_file_path}:`, err);
                    }
                    return null;
                }
            } else {
                return null; // Not a directory
            }
        });

        const results = await Promise.all(processingPromises);
        modes_data = results.filter(result => result !== null); // Filter out nulls from skipped/failed entries

    } catch (err) {
        console.error(`Error reading modes directory ${MODES_DIR}:`, err);
        return; // Stop if we can't read the main directory
    }

    // Define level order and names
    const levelOrder = [
        'roo',
        'core',
        'manager',
        'lead',
        'agent',
        'spec',
        'framework',
        'design',
        'data',
        'infra',
        'edge',
        'test',
        'auth',
        'baas',
        'cloud',
        'cms',
        'dev',
        'util',
        'prime'
        // Add other levels as needed, 'unknown' will go last
    ];
    const levelNames = {
'roo': '👑 Roo Commander',
        'core': '🏗️ Core Modes',
        'manager': '🚦 Manager Modes',
        'lead': '🧑‍✈️ Lead Roles',
        'agent': '🤖 Agent Modes',
        'spec': '⭐ Specialist Modes',
        'framework': '🏗️ Framework Developers',
        'design': '🎨 Design Specialists',
        'data': '🗄️ Data Specialists',
        'infra': '🚀 Infrastructure Specialists',
        'edge': '⚡ Edge Compute Specialists',
        'test': '🧪 Testing Specialists',
        'auth': '🔑 Auth Specialists',
        'baas': '☁️ BaaS Developers',
        'cloud': '🌐 Cloud Architects',
        'cms': '📰 CMS Specialists',
        'dev': '💻 Development Modes',
        'util': '🔧 Utility Modes',
        'prime': '🚜 Prime Coordinator Modes',
        'unknown': '❓ Other Modes'
    };


    // Function to get level and assign order index
    const getSortParams = (slug) => {
        if (slug === 'roo-commander') {
            return { level: 'roo', levelIndex: 0, slug }; // Ensure roo-commander is first
        }
        const parts = slug.split('-');
        const level = parts[0];
        const levelIndex = levelOrder.indexOf(level);
        return {
            level: levelIndex === -1 ? 'unknown' : level, // Assign 'unknown' level if not found
            levelIndex: levelIndex === -1 ? levelOrder.length : levelIndex, // Put unknown levels last
            slug
        };
    };

    // Sort modes by level, then slug
    modes_data.sort((a, b) => {
        const paramsA = getSortParams(a.slug);
        const paramsB = getSortParams(b.slug);

        if (paramsA.levelIndex !== paramsB.levelIndex) {
            return paramsA.levelIndex - paramsB.levelIndex;
        }
        return paramsA.slug.localeCompare(paramsB.slug);
    });

    // --- Generate and Write JSON Output ---
    // Create JSON output object *without* description
    const outputJson = {
        customModes: modes_data.map(({ slug, name, roleDefinition, groups }) => ({
            slug,
            name,
            roleDefinition,
            groups
        }))
    };

    try {
        const finalJsonString = JSON.stringify(outputJson, null, 2);
        console.log(`\nWriting ${outputJson.customModes.length} modes to ${OUTPUT_FILE}...`);
        await fs.writeFile(OUTPUT_FILE, finalJsonString, 'utf-8');
        console.log(`Successfully generated ${OUTPUT_FILE} with ${outputJson.customModes.length} modes.`);
    } catch (err) {
        console.error(`Error writing output file ${OUTPUT_FILE}:`, err);
    }

    // --- Generate and Write Markdown Summary ---
    try {
        console.log(`\nWriting mode summary to ${SUMMARY_OUTPUT_FILE}...`);
        const today = new Date().toISOString().split('T')[0];
        let markdownContent = `+++
id = "kb-available-modes-summary"
title = "Available Modes Summary"
context_type = "summary"
target_audience = ["roo-commander"]
status = "generated"
last_generated = "${today}"
+++

# Available Modes Summary

This document provides a summary of available specialist modes for delegation.
`;

        // Group modes by level
        const modesByLevel = {};
        modes_data.forEach(mode => {
            const { level } = getSortParams(mode.slug);
            if (!modesByLevel[level]) {
                modesByLevel[level] = [];
            }
            modesByLevel[level].push(mode);
        });

        // Iterate through levels in defined order + unknown
        const allLevels = [...levelOrder, 'unknown'];
        allLevels.forEach(level => {
            if (modesByLevel[level] && modesByLevel[level].length > 0) {
                const levelName = levelNames[level] || levelNames['unknown'];
                markdownContent += `\n## ${levelName}\n\n`;
                modesByLevel[level].forEach(mode => {
                    // Escape potential markdown in description (basic escaping for brackets/backticks)
                    const escapedDescription = mode.description.replace(/([`[\]])/g, '$1'); // Removed unnecessary backslash
                    markdownContent += `- **${mode.slug}** (${mode.name}): ${escapedDescription}\n`;
                });
            }
        });

        await fs.writeFile(SUMMARY_OUTPUT_FILE, markdownContent.trim() + '\n', 'utf-8');
        console.log(`Successfully generated mode summary ${SUMMARY_OUTPUT_FILE}.`);

    } catch (err) {
        console.error(`Error writing mode summary file ${SUMMARY_OUTPUT_FILE}:`, err);
    }
}

// --- Execute Main Function ---
buildRoomodes();