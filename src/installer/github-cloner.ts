import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { moveSync, removeSync } from 'fs-extra';
import ora from 'ora';
import chalk from 'chalk';

/**
 * GitHub Cloner
 *
 * Clones skills repositories from GitHub to a target directory.
 * Supports custom repositories or defaults to jezweb/claude-skills.
 */

const DEFAULT_SKILLS_REPO_URL = 'https://github.com/jezweb/claude-skills.git';

export interface CloneOptions {
  /** Target directory to clone into */
  targetDir: string;
  /** Custom GitHub repository URL (defaults to jezweb/claude-skills) */
  repoUrl?: string;
  /** Prompt user for confirmation before cloning */
  promptUser?: boolean;
}

/**
 * Normalize GitHub repository URL to full git clone URL
 * Supports: user/repo, https://github.com/user/repo, git@github.com:user/repo.git
 */
export function normalizeRepoUrl(input: string): string {
  if (!input || input.trim() === '') {
    return DEFAULT_SKILLS_REPO_URL;
  }

  let url = input.trim();

  // Already a full URL
  if (url.startsWith('https://') || url.startsWith('git@')) {
    // Ensure .git suffix
    if (!url.endsWith('.git')) {
      url = url + '.git';
    }
    return url;
  }

  // Shorthand format: user/repo
  if (url.match(/^[^\/]+\/[^\/]+$/)) {
    return `https://github.com/${url}.git`;
  }

  // Assume it's a full URL without protocol
  if (url.startsWith('github.com/')) {
    return `https://${url}.git`;
  }

  // Return as-is and let git handle validation
  return url;
}

export interface CloneResult {
  success: boolean;
  targetDir: string;
  error?: string;
}

/**
 * Clone skills repository from GitHub
 *
 * @param options Clone options
 * @returns Clone result with success status
 */
export async function cloneSkills(
  options: CloneOptions
): Promise<CloneResult> {
  const { targetDir, repoUrl, promptUser = true } = options;
  const normalizedUrl = normalizeRepoUrl(repoUrl || '');

  // Check if directory already exists
  if (existsSync(targetDir)) {
    return {
      success: false,
      targetDir,
      error: `Directory ${targetDir} already exists`,
    };
  }

  // Prompt user for confirmation if requested
  if (promptUser) {
    console.log(
      chalk.yellow(
        `\n⚠️  Skills directory not found at: ${chalk.cyan(targetDir)}`
      )
    );
    console.log(
      chalk.white(
        `\nWould you like to clone skills from GitHub?\nRepo: ${normalizedUrl}`
      )
    );
    console.log(
      chalk.white(
        `This will download skills to ${targetDir}\n`
      )
    );

    // In real CLI, would use readline for y/n prompt
    // For now, assuming user wants to proceed
    // TODO: Add readline prompt in production
  }

  // Ensure parent directory exists
  const parentDir = dirname(targetDir);
  if (!existsSync(parentDir)) {
    try {
      mkdirSync(parentDir, { recursive: true });
    } catch (error) {
      return {
        success: false,
        targetDir,
        error: `Failed to create parent directory: ${
          (error as Error).message
        }`,
      };
    }
  }

  // Clone repository with spinner
  const spinner = ora(
    `Cloning skills from ${chalk.cyan(normalizedUrl)} to ${chalk.cyan(targetDir)}...`
  ).start();

  // Use temp directory to clone, then move skills/ contents to target
  const tempDir = join(dirname(targetDir), '.claude-skills-temp');

  try {
    // Use --depth 1 for faster clone (only latest commit)
    // Use --quiet to reduce output noise
    execSync(`git clone --depth 1 --quiet "${normalizedUrl}" "${tempDir}"`, {
      stdio: ['inherit', 'pipe', 'pipe'],
      encoding: 'utf-8',
    });

    // The repo has a skills/ subdirectory - move its contents to target
    const skillsSource = join(tempDir, 'skills');

    if (existsSync(skillsSource)) {
      // Move skills directory contents to target
      moveSync(skillsSource, targetDir);
    } else {
      // Fallback: move entire temp dir if no skills/ subdirectory found
      moveSync(tempDir, targetDir);
    }

    // Clean up temp directory if it still exists
    if (existsSync(tempDir)) {
      removeSync(tempDir);
    }

    spinner.succeed(
      chalk.green(`✅ Skills cloned successfully to ${chalk.cyan(targetDir)}`)
    );

    // Show what was cloned
    console.log(
      chalk.gray(`\n📦 Skills available at: ${chalk.cyan(targetDir)}`)
    );
    console.log(
      chalk.gray(`Run ${chalk.cyan('roocommander list')} to see all skills.\n`)
    );

    return {
      success: true,
      targetDir,
    };
  } catch (error) {
    spinner.fail(chalk.red('Failed to clone skills from GitHub'));

    // Clean up temp directory on error
    try {
      if (existsSync(tempDir)) {
        removeSync(tempDir);
      }
    } catch {
      // Ignore cleanup errors
    }

    const errorMessage = (error as Error).message;

    // Provide helpful error messages
    if (errorMessage.includes('not found')) {
      console.error(
        chalk.red(
          '\n❌ Git is not installed or not in PATH. Install git and try again.'
        )
      );
    } else if (errorMessage.includes('Permission denied')) {
      console.error(
        chalk.red(
          `\n❌ Permission denied writing to ${targetDir}. Check directory permissions.`
        )
      );
    } else if (errorMessage.includes('Could not resolve host')) {
      console.error(
        chalk.red(
          '\n❌ Network error. Check your internet connection and try again.'
        )
      );
    } else {
      console.error(chalk.red(`\n❌ Error: ${errorMessage}`));
    }

    return {
      success: false,
      targetDir,
      error: errorMessage,
    };
  }
}

/**
 * Check if skills directory exists and is valid
 *
 * @param skillsDir Path to skills directory
 * @returns True if valid skills directory
 */
export function isValidSkillsDirectory(skillsDir: string): boolean {
  if (!existsSync(skillsDir)) {
    return false;
  }

  // Check if it looks like a skills directory
  // (has multiple subdirectories, some with SKILL.md files)
  try {
    const { readdirSync, statSync } = require('fs');
    const { join } = require('path');

    const entries = readdirSync(skillsDir);
    let skillCount = 0;

    for (const entry of entries) {
      const entryPath = join(skillsDir, entry);
      try {
        const stat = statSync(entryPath);
        if (stat.isDirectory()) {
          const skillFile = join(entryPath, 'SKILL.md');
          if (existsSync(skillFile)) {
            skillCount++;
          }
        }
      } catch {
        // Skip entries we can't stat
        continue;
      }
    }

    // Consider it valid if we found at least 10 skills
    if (skillCount < 10) {
      // Check for common nested skills directory issue
      const nestedPath = join(skillsDir, 'skills');
      if (existsSync(nestedPath)) {
        console.log(chalk.yellow('\n⚠️  Skills directory appears to have incorrect structure'));
        console.log(chalk.gray(`   Expected: ${chalk.cyan(skillsDir + '/<skill-name>/SKILL.md')}`));
        console.log(chalk.gray(`   Found: ${chalk.cyan(nestedPath + '/<skill-name>/SKILL.md')}`));
        console.log(chalk.gray(`\n   This may be due to an older installation bug.`));
        console.log(chalk.gray(`   Run ${chalk.cyan('roocommander init')} to fix this issue.\n`));
      }
    }

    return skillCount >= 10;
  } catch {
    return false;
  }
}

/**
 * Get recommended skills directory path
 *
 * @returns Default skills directory path (~/.claude/skills/)
 */
export function getDefaultSkillsDir(): string {
  const homeDir = process.env.HOME || process.env.USERPROFILE || '~';
  return `${homeDir}/.claude/skills`;
}

/**
 * Detect if skills are nested in a subdirectory (common installation bug)
 *
 * @param skillsDir Path to skills directory
 * @returns Path to nested skills directory if found, null otherwise
 */
export function detectNestedSkills(skillsDir: string): string | null {
  if (!existsSync(skillsDir)) {
    return null;
  }

  const nestedPath = join(skillsDir, 'skills');
  if (existsSync(nestedPath) && isValidSkillsDirectory(nestedPath)) {
    return nestedPath;
  }

  return null;
}

/**
 * Fix nested skills directory by moving contents up one level
 *
 * @param skillsDir Path to skills directory (parent)
 * @returns Success status
 */
export async function fixNestedSkills(skillsDir: string): Promise<boolean> {
  const nestedPath = detectNestedSkills(skillsDir);

  if (!nestedPath) {
    return false;
  }

  const spinner = ora('Fixing nested skills directory...').start();

  try {
    const tempDir = join(dirname(skillsDir), '.claude-skills-fix-temp');

    // Move nested skills to temp location
    moveSync(nestedPath, tempDir);

    // Remove any remaining files in parent directory
    const { readdirSync, statSync } = require('fs');
    const entries = readdirSync(skillsDir);

    for (const entry of entries) {
      const entryPath = join(skillsDir, entry);
      try {
        removeSync(entryPath);
      } catch {
        // Continue if we can't remove some files
      }
    }

    // Move skills from temp to parent
    moveSync(tempDir, skillsDir);

    spinner.succeed(chalk.green('✅ Fixed nested skills directory'));
    console.log(chalk.gray(`Skills are now correctly located at: ${chalk.cyan(skillsDir)}\n`));

    return true;
  } catch (error) {
    spinner.fail(chalk.red('Failed to fix nested skills directory'));
    console.error(chalk.red(`Error: ${(error as Error).message}`));
    return false;
  }
}
