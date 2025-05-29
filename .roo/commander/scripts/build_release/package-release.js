const fs = require('fs-extra');
const path = require('path');
const archiver = require('archiver');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { execSync } = require('child_process'); // For calling the other script

// --- Configuration ---
const CONFIG_PATH = path.join(__dirname, 'build-config.json');
const PROJECT_ROOT = path.resolve(__dirname, '../../../../'); // Assumes script is in .roo/commander/scripts/build_release/
const ROOMODES_BUILD_SCRIPT_PATH = path.join(PROJECT_ROOT, '.roo', 'commander', 'scripts', 'build_roomodes-v8.js');

async function main() {
    const argv = yargs(hideBin(process.argv))
        .option('releaseVersion', {
            alias: 'v',
            type: 'string',
            description: 'The release version (e.g., 8.1.0)',
            demandOption: true,
        })
        .option('skipRoomodes', {
            type: 'boolean',
            description: 'Skip running the build_roomodes-v8.js script',
            default: false,
        })
        .help()
        .argv;

    const version = argv.releaseVersion; 
    const skipRoomodesBuild = argv.skipRoomodes;

    console.log(`Starting packaging process for version: ${version}`);

    // 1. Load Configuration
    let config;
    try {
        config = await fs.readJson(CONFIG_PATH);
        console.log('Successfully loaded build-config.json');
    } catch (err) {
        console.error(`Error loading build-config.json: ${err.message}`);
        process.exit(1);
    }

    // 2. Define Paths
    // Corrected version string handling from previous step
    const packageDirName = config.packageDirNameTemplate.replace('{VERSION}', version.startsWith('v') ? version.substring(1) : version);
    const fullPackagePath = path.join(PROJECT_ROOT, config.outputBuildRootDir, packageDirName);
    const sourceRooPath = path.join(PROJECT_ROOT, config.sourceRooDir);

    console.log(`Package will be created at: ${fullPackagePath}`);

    try {
        // 3. Clean/Create Output Directory
        await fs.emptyDir(fullPackagePath);
        console.log(`Cleaned/created package directory: ${fullPackagePath}`);

        // 4. Run build_roomodes-v8.js (unless skipped)
        if (!skipRoomodesBuild) {
            console.log(`Running build_roomodes-v8.js script from: ${ROOMODES_BUILD_SCRIPT_PATH}...`);
            try {
                execSync(`node "${ROOMODES_BUILD_SCRIPT_PATH}"`, { stdio: 'inherit' });
                console.log('.roomodes file generated successfully.');
            } catch (err) {
                console.error(`Error running build_roomodes-v8.js: ${err.message}`);
                process.exit(1);
            }
        } else {
            console.log('Skipping .roomodes file generation as per --skipRoomodes flag.');
        }
        
        const roomodesSource = path.join(PROJECT_ROOT, config.roomodesSourceFile);
        if (!await fs.pathExists(roomodesSource) && !skipRoomodesBuild) {
            console.error(`Error: ${config.roomodesSourceFile} not found after script execution. Ensure build_roomodes-v8.js creates it at the configured path.`);
            process.exit(1);
        }


        // 5. Copy .roo structure
        const targetRooPathInPackage = path.join(fullPackagePath, config.sourceRooDir);
        await fs.copy(sourceRooPath, targetRooPathInPackage, {
            filter: (src, dest) => {
                // sourceRooPath is PROJECT_ROOT + '/.roo'
                // We want to exclude PROJECT_ROOT + '/.build'
                const buildsDirToExclude = path.join(sourceRooPath, 'commander', 'builds');
                
                if (src.startsWith(buildsDirToExclude)) {
                    return false; 
                }
                return true; 
            }
        });
        console.log(`Copied ${config.sourceRooDir} structure to package (with filter).`);

        // 6. Empty specified folders within the packaged .roo/commander
        const packagedCommanderDir = path.join(targetRooPathInPackage, 'commander');
        for (const folderToEmpty of config.foldersToEmptyInPackagedCommanderDir) {
            const fullPathToEmpty = path.join(packagedCommanderDir, folderToEmpty);
            if (await fs.pathExists(fullPathToEmpty)) {
                await fs.emptyDir(fullPathToEmpty);
                console.log(`  Emptied: .roo/commander/${folderToEmpty}`);
            } else {
                // If the folder to empty was 'builds', it wouldn't exist due to the filter, which is fine.
                if (folderToEmpty !== 'builds') { // Only warn if it's not the 'builds' folder we intentionally excluded
                    console.warn(`  Warning: Folder to empty not found in package: .roo/commander/${folderToEmpty}`);
                }
            }
        }

        // 7. Copy root files
        for (const rootFile of config.rootFilesToCopyToPackage) {
            const sourceFile = path.join(PROJECT_ROOT, rootFile);
            const targetFile = path.join(fullPackagePath, rootFile);
            if (await fs.pathExists(sourceFile)) {
                await fs.copyFile(sourceFile, targetFile);
                console.log(`Copied root file: ${rootFile} to package.`);
            } else {
                console.warn(`Warning: Root file ${rootFile} not found at project root. Skipping.`);
            }
        }

        // 8. Copy .roomodes file to its final place in the package
        const roomodesTargetInPackagePath = path.join(PROJECT_ROOT, config.roomodesTargetInPackage);
        const finalRoomodesPathInPackage = path.join(fullPackagePath, config.roomodesTargetInPackage);

        if (await fs.pathExists(roomodesSource)) {
            await fs.ensureDir(path.dirname(finalRoomodesPathInPackage)); 
            await fs.copyFile(roomodesSource, finalRoomodesPathInPackage);
            console.log(`Copied .roomodes to ${config.roomodesTargetInPackage} in package.`);
        } else if (!skipRoomodesBuild) {
             console.warn(`Warning: ${config.roomodesSourceFile} (expected output of build_roomodes-v8.js) was not found. .roomodes file will be missing in the package.`);
        }


        // 9. Create Archive (Optional)
        if (config.createArchive) {
            const archiveName = `${packageDirName}.${config.archiveType === 'tar' ? 'tar.gz' : 'zip'}`;
            const archivePath = path.join(PROJECT_ROOT, config.outputBuildRootDir, archiveName);
            const output = fs.createWriteStream(archivePath);
            const archive = archiver(config.archiveType, {
                zlib: { level: 9 } 
            });

            output.on('close', function () {
                console.log(`Successfully created archive: ${archivePath} (${(archive.pointer() / 1024 / 1024).toFixed(2)} MB)`);
            });
            archive.on('warning', function (err) {
                if (err.code === 'ENOENT') {
                    console.warn(`Archiver warning: ${err.message}`);
                } else {
                    throw err;
                }
            });
            archive.on('error', function (err) {
                throw err;
            });

            archive.pipe(output);
            archive.directory(fullPackagePath, false); 
            await archive.finalize();
        }

        console.log(`\nPackaging for ${version} completed successfully!`); // Corrected to use original version string with 'v'
        console.log(`Output located at: ${fullPackagePath}`);
        if (config.createArchive) {
            console.log(`Archive located at: ${path.join(PROJECT_ROOT, config.outputBuildRootDir, `${packageDirName}.${config.archiveType === 'tar' ? 'tar.gz' : 'zip'}`)}`);
        }

    } catch (err) {
        console.error(`\nAn error occurred during the packaging process: ${err.message}`);
        console.error(err.stack);
        process.exit(1);
    }
}

main();