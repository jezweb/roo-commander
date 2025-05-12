import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { fileURLToPath } from 'url';

// Helper to get directory name in ES Module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Handles the logic for the 'init' command.
 * Copies template .roo and .ruru directories to the current working directory.
 * Prompts for overwrite if directories already exist.
 */
export async function handleInitCommand(): Promise<void> {
  console.log(chalk.blue('Initializing Roo configuration...'));

  // Source paths relative to the compiled JS file in dist/commands/
  // Go up three levels to reach the project root where templates/ should be
  const templateBaseDir = path.resolve(__dirname, '..', 'templates'); // Path relative to dist/commands/, assuming templates is in dist/templates/
  const rooSource = path.join(templateBaseDir, '.roo');
  const ruruSource = path.join(templateBaseDir, '.ruru');

  // Target paths in the current working directory
  const rooTarget = path.join(process.cwd(), '.roo');
  const ruruTarget = path.join(process.cwd(), '.ruru');

  const targets = [
    { name: '.roo', source: rooSource, target: rooTarget },
    { name: '.ruru', source: ruruSource, target: ruruTarget },
  ];

  let overwrite = false;
  const existingTargets = [];

  try {
    // Check which targets already exist
    for (const item of targets) {
      if (await fs.pathExists(item.target)) {
        existingTargets.push(item.name);
      }
    }

    // If any targets exist, prompt for overwrite
    if (existingTargets.length > 0) {
      const answers = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirmOverwrite',
          message: `The following directories already exist: ${chalk.yellow(existingTargets.join(', '))}. Do you want to overwrite them?`,
          default: false,
        },
      ]);
      overwrite = answers.confirmOverwrite;

      if (!overwrite) {
        console.log(chalk.yellow('Initialization cancelled. No files were changed.'));
        return;
      }
    }

    // Copy files (either because they didn't exist or overwrite was confirmed)
    for (const item of targets) {
        // Only copy if it didn't exist or overwrite is true
        if (!existingTargets.includes(item.name) || overwrite) {
            console.log(`Copying ${item.name}...`);
            await fs.copy(item.source, item.target, { overwrite: overwrite, errorOnExist: false }); // Ensure overwrite works as expected
            console.log(chalk.green(`Successfully copied ${item.name} to ${item.target}`));
        }
    }

    console.log(chalk.green.bold('Roo configuration initialized successfully!'));

  } catch (error: unknown) {
    console.error(chalk.red('Error during initialization:'));
    if (error instanceof Error) {
      console.error(chalk.red(error.message));
      // console.error(error.stack); // Optional: for more detailed debugging
    } else {
      console.error(chalk.red('An unknown error occurred.'));
    }
    process.exit(1); // Exit with error code
  }
}