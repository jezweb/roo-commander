import { Command } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { listCommand } from './commands/list.js';
import { readCommand } from './commands/read.js';
import { searchCommand } from './commands/search.js';
import { generateIndexCommand } from './commands/generate-index.js';
import { syncIndexCommand } from './commands/sync-index.js';
import { initCommand } from './commands/init.js';
import { isGloballyInstalled } from './installer/global-installer.js';
import { isInstalled } from './installer/template-installer.js';

/**
 * Main CLI Program
 *
 * Defines all commands and global options for roocommander.
 */

const cli = new Command();

cli
  .name('roocommander')
  .description('CLI tool to bridge Claude Code skills with Roo Code')
  .version('9.3.0');

/**
 * Command: list
 * Show all available skills with descriptions
 */
cli
  .command('list')
  .description('List all available skills from ~/.claude/skills/')
  .option('-s, --source <path>', 'Custom skills directory path')
  .option('-v, --verbose', 'Show full descriptions and details')
  .action(async (options) => {
    await listCommand(options);
  });

/**
 * Command: read <skill>
 * Output skill content to stdout
 */
cli
  .command('read <skill>')
  .description('Read and output a specific skill content')
  .option('-s, --source <path>', 'Custom skills directory path')
  .option('-r, --raw', 'Output raw markdown without formatting')
  .action(async (skill: string, options) => {
    await readCommand(skill, options);
  });

/**
 * Command: search <keyword>
 * Find skills matching keyword
 */
cli
  .command('search <keyword>')
  .description('Search for skills by keyword')
  .option('-s, --source <path>', 'Custom skills directory path')
  .option('-v, --verbose', 'Show full descriptions and details')
  .action(async (keyword: string, options) => {
    await searchCommand(keyword, options);
  });

/**
 * Command: generate-index
 * Generate skills index markdown file
 */
cli
  .command('generate-index')
  .description('Generate skills index for custom instructions')
  .option('-s, --source <path>', 'Custom skills directory path')
  .option('-o, --output <path>', 'Output file path', '.roo/rules/01-skills-index.md')
  .action(async (options) => {
    await generateIndexCommand(options);
  });

/**
 * Command: sync-index
 * Update existing skills index
 */
cli
  .command('sync-index')
  .description('Update skills index after skills change')
  .option('-s, --source <path>', 'Custom skills directory path')
  .option('-o, --output <path>', 'Output file path', '.roo/rules/01-skills-index.md')
  .action(async (options) => {
    await syncIndexCommand(options);
  });

/**
 * Command: init
 * Initialize Roo Commander setup (global by default)
 */
cli
  .command('init')
  .description('Initialize Roo Commander (global by default, use --project for local)')
  .option('-s, --source <path>', 'Custom skills directory path')
  .option('--force', 'Force reinstall (overwrite existing files)')
  .option('--project', 'Install to current project only (not globally)')
  .action(async (options) => {
    await initCommand(options);
  });

// Handle unknown commands
cli.on('command:*', () => {
  console.error(chalk.red(`\nError: Unknown command '${cli.args.join(' ')}'`));
  console.log(chalk.gray('\nRun \'roocommander --help\' for available commands.\n'));
  process.exit(1);
});

/**
 * Smart auto-init when no command provided
 * Detects installation status and offers appropriate actions
 */
async function handleNoCommand() {
  const projectRoot = process.cwd();
  const globalInstalled = isGloballyInstalled();
  const projectInstalled = isInstalled(projectRoot);

  // Case D: Both global AND project installed - show help
  if (globalInstalled && projectInstalled) {
    cli.help();
    return;
  }

  // Case A: Nothing installed - first time setup
  if (!globalInstalled && !projectInstalled) {
    console.log(chalk.bold.cyan('\n👋 Welcome to Roo Commander!\n'));
    console.log(chalk.gray('Roo Commander bridges Claude Code skills to Roo Code with intelligent orchestration.\n'));
    console.log(chalk.gray('It looks like this is your first time running Roo Commander.'));
    console.log(chalk.gray('Let\'s get you set up with an interactive installation.\n'));

    const { proceed } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'proceed',
        message: 'Continue with setup?',
        default: true,
      },
    ]);

    if (proceed) {
      await initCommand({});
    } else {
      console.log(chalk.gray('\nSetup cancelled. Run \'roocommander init\' when you\'re ready.\n'));
    }
    return;
  }

  // Case B: Global installed, but NOT in current project
  if (globalInstalled && !projectInstalled) {
    console.log(chalk.bold.cyan('\n👋 Roo Commander is installed globally\n'));

    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          { name: 'View available commands (help)', value: 'help', short: 'Help' },
          { name: 'Install to this project as well', value: 'install-project', short: 'Install to project' },
          { name: 'Exit', value: 'exit', short: 'Exit' },
        ],
        default: 'help',
      },
    ]);

    if (action === 'help') {
      console.log(); // blank line
      cli.help();
    } else if (action === 'install-project') {
      await initCommand({ project: true });
    } else {
      console.log(chalk.gray('\nExiting...\n'));
    }
    return;
  }

  // Case C: Project installed (current directory)
  if (projectInstalled) {
    console.log(chalk.bold.cyan('\n👋 Roo Commander is installed in this project\n'));

    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          { name: 'View available commands (help)', value: 'help', short: 'Help' },
          { name: 'Reinstall/reconfigure this project', value: 'reinstall', short: 'Reinstall' },
          { name: 'Install to a different folder', value: 'install-other', short: 'Install elsewhere' },
          { name: 'Exit', value: 'exit', short: 'Exit' },
        ],
        default: 'help',
      },
    ]);

    if (action === 'help') {
      console.log(); // blank line
      cli.help();
    } else if (action === 'reinstall') {
      await initCommand({ project: true, force: true });
    } else if (action === 'install-other') {
      console.log(chalk.yellow('\n💡 Tip: Navigate to the target folder and run \'roocommander init --project\'\n'));
    } else {
      console.log(chalk.gray('\nExiting...\n'));
    }
    return;
  }
}

// Handle no command provided
if (process.argv.length === 2) {
  handleNoCommand().catch((error) => {
    console.error(chalk.red(`\nError: ${error.message}\n`));
    process.exit(1);
  });
}

export { cli };
