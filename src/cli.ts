import { Command } from 'commander';
import chalk from 'chalk';
import { listCommand } from './commands/list.js';
import { readCommand } from './commands/read.js';
import { searchCommand } from './commands/search.js';

/**
 * Main CLI Program
 *
 * Defines all commands and global options for roo-commander.
 */

const cli = new Command();

cli
  .name('roo-commander')
  .description('CLI tool to bridge Claude Code skills with Roo Code')
  .version('9.0.0');

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
  .option('-o, --output <path>', 'Output file path', '.roo/rules/01-skills-index.md')
  .action(async (options) => {
    console.log(chalk.yellow(`generate-index command - coming in Phase 4`));
  });

/**
 * Command: sync-index
 * Update existing skills index
 */
cli
  .command('sync-index')
  .description('Update skills index after skills change')
  .option('-o, --output <path>', 'Output file path', '.roo/rules/01-skills-index.md')
  .action(async (options) => {
    console.log(chalk.yellow(`sync-index command - coming in Phase 4`));
  });

/**
 * Command: init
 * Initialize Roo Commander setup in project
 */
cli
  .command('init')
  .description('Initialize Roo Commander system in current project')
  .action(async () => {
    console.log(chalk.yellow('init command - coming in Phase 9'));
  });

// Handle unknown commands
cli.on('command:*', () => {
  console.error(chalk.red(`\nError: Unknown command '${cli.args.join(' ')}'`));
  console.log(chalk.gray('\nRun \'roo-commander --help\' for available commands.\n'));
  process.exit(1);
});

// Show help if no command provided
if (process.argv.length === 2) {
  cli.help();
}

export { cli };
