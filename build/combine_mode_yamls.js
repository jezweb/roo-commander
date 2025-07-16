const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

// MODES_DIR is now relative to the new script location (build/)
const MODES_DIR = path.join(__dirname, '..', '.roo', 'commander', 'modes');
// OUTPUT_FILE is now relative to the new script location (build/)
const OUTPUT_FILE = path.join(__dirname, '..', '.roomodes'); // Project root

async function combineModeYamls() {
    const customModes = [];
    try {
        const files = await fs.readdir(MODES_DIR);
        for (const file of files) {
            if (file.endsWith('.yaml')) {
                const filePath = path.join(MODES_DIR, file);
                const fileContent = await fs.readFile(filePath, 'utf8');
                const modeConfig = yaml.load(fileContent);
                customModes.push(modeConfig);
            }
        }

        const finalYaml = yaml.dump({ customModes: customModes }, { indent: 2 });
        await fs.writeFile(OUTPUT_FILE, finalYaml, 'utf8');
        console.log(`Successfully combined ${customModes.length} modes into ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error combining mode YAMLs:', error);
    }
}

combineModeYamls();
