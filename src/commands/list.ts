/**
 * List Command
 *
 * Display all available skills from ~/.claude/skills/ directory
 * Shows name, description preview, and keywords in a formatted table
 */

import chalk from 'chalk';
import ora from 'ora';
import { findAllSkills, DEFAULT_SKILLS_DIR } from '../parser/skill-parser.js';
import { ClaudeSkill } from '../parser/types.js';

/**
 * List command options
 */
export interface ListOptions {
  source?: string; // Custom skills directory
  verbose?: boolean; // Show full descriptions
}

/**
 * Execute the list command
 *
 * @param options - Command options
 */
export async function listCommand(options: ListOptions = {}): Promise<void> {
  const skillsDir = options.source || DEFAULT_SKILLS_DIR;
  const verbose = options.verbose || false;

  // Show loading spinner
  const spinner = ora('Loading skills...').start();

  try {
    // Find all skills
    const skills = await findAllSkills(skillsDir, { validate: false });

    spinner.stop();

    // Handle empty results
    if (skills.length === 0) {
      console.log(chalk.yellow('\n⚠️  No skills found'));
      console.log(chalk.gray(`\nSearched in: ${skillsDir}`));
      console.log(chalk.gray('\nTo add skills:'));
      console.log(chalk.gray('  1. Create skills in ~/.claude/skills/<skill-name>/'));
      console.log(chalk.gray('  2. Each skill needs a SKILL.md file'));
      console.log(chalk.gray('  3. Or specify custom location: --source <path>\n'));
      return;
    }

    // Sort skills alphabetically by name
    skills.sort((a, b) =>
      a.metadata.name.localeCompare(b.metadata.name, undefined, {
        sensitivity: 'base',
      })
    );

    // Display header
    console.log(chalk.bold.cyan(`\n📚 Available Skills (${skills.length})`));
    console.log(chalk.gray(`Source: ${skillsDir}\n`));

    // Display skills
    if (verbose) {
      // Verbose mode: Show full details
      displayVerboseList(skills);
    } else {
      // Compact mode: Show name, short description, keywords
      displayCompactList(skills);
    }

    // Display footer
    console.log(chalk.gray('\n─────────────────────────────────────────────'));
    console.log(
      chalk.gray(
        `\nTo read a skill: ${chalk.white('roo-commander read <skill-name>')}`
      )
    );
    console.log(
      chalk.gray(`To search skills: ${chalk.white('roo-commander search <keyword>')}`)
    );
    console.log(
      chalk.gray(`For verbose output: ${chalk.white('roo-commander list --verbose')}\n`)
    );
  } catch (error) {
    spinner.fail('Failed to load skills');
    console.error(chalk.red(`\n❌ Error: ${(error as Error).message}`));

    // Provide helpful error messages
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      console.log(chalk.gray('\nSkills directory not found.'));
      console.log(chalk.gray(`Tried: ${skillsDir}`));
      console.log(chalk.gray('\nCreate the directory or specify a custom location:'));
      console.log(chalk.gray('  roo-commander list --source <path>\n'));
    }

    process.exit(1);
  }
}

/**
 * Display skills in compact format
 */
function displayCompactList(skills: ClaudeSkill[]): void {
  for (const skill of skills) {
    // Skill name (bold, cyan)
    console.log(chalk.bold.cyan(`  ${skill.metadata.name}`));

    // Description (truncate to 80 chars if needed)
    const description = truncateDescription(skill.metadata.description, 80);
    console.log(chalk.gray(`    ${description}`));

    // Keywords (if available)
    if (skill.metadata.keywords && skill.metadata.keywords.length > 0) {
      const keywords = skill.metadata.keywords.slice(0, 5).join(', ');
      const moreCount = skill.metadata.keywords.length - 5;
      const moreText = moreCount > 0 ? ` (+${moreCount} more)` : '';
      console.log(chalk.dim(`    Keywords: ${keywords}${moreText}`));
    }

    // Templates indicator
    if (skill.templates && skill.templates.length > 0) {
      console.log(chalk.dim(`    📄 ${skill.templates.length} template files`));
    }

    console.log(); // Blank line between skills
  }
}

/**
 * Display skills in verbose format
 */
function displayVerboseList(skills: ClaudeSkill[]): void {
  for (const skill of skills) {
    console.log(chalk.bold.cyan(`\n  ${skill.metadata.name}`));
    console.log(chalk.gray('  ─────────────────────────────────────────'));

    // Full description
    const descLines = skill.metadata.description.split('\n');
    descLines.forEach((line) => {
      if (line.trim()) {
        console.log(chalk.white(`    ${line.trim()}`));
      }
    });

    // Use when section
    if (skill.metadata.useWhen) {
      console.log(chalk.gray(`\n    Use when: ${skill.metadata.useWhen}`));
    }

    // Keywords
    if (skill.metadata.keywords && skill.metadata.keywords.length > 0) {
      console.log(chalk.dim(`    Keywords: ${skill.metadata.keywords.join(', ')}`));
    }

    // Templates
    if (skill.templates && skill.templates.length > 0) {
      console.log(chalk.dim(`    Templates: ${skill.templates.length} files`));
    }

    // Path
    console.log(chalk.dim(`    Path: ${skill.path}`));
  }

  console.log(); // Final blank line
}

/**
 * Truncate description to specified length
 *
 * @param description - Full description text
 * @param maxLength - Maximum length
 * @returns Truncated description with ellipsis
 */
function truncateDescription(description: string, maxLength: number): string {
  // Get first line only for compact view
  const firstLine = description.split('\n')[0].trim();

  if (firstLine.length <= maxLength) {
    return firstLine;
  }

  // Truncate at word boundary
  const truncated = firstLine.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace) + '...';
  }

  return truncated + '...';
}
