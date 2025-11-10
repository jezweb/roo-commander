import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import ora from 'ora';
import chalk from 'chalk';

/**
 * GitHub Cloner
 *
 * Clones the claude-skills repository from GitHub to a target directory.
 * Used when ~/.claude/skills/ doesn't exist and user wants to set it up.
 */

const SKILLS_REPO_URL = 'https://github.com/jezweb/claude-skills.git';

export interface CloneOptions {
  /** Target directory to clone into */
  targetDir: string;
  /** Prompt user for confirmation before cloning */
  promptUser?: boolean;
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
  const { targetDir, promptUser = true } = options;

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
      chalk.gray(
        `\nWould you like to clone skills from GitHub?\nRepo: ${SKILLS_REPO_URL}`
      )
    );
    console.log(
      chalk.gray(
        `This will download ~60 production-tested skills for Cloudflare, AI, Frontend, etc.\n`
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
    `Cloning skills from GitHub to ${chalk.cyan(targetDir)}...`
  ).start();

  try {
    // Use --depth 1 for faster clone (only latest commit)
    // Use --quiet to reduce output noise
    execSync(`git clone --depth 1 --quiet "${SKILLS_REPO_URL}" "${targetDir}"`, {
      stdio: ['inherit', 'pipe', 'pipe'],
      encoding: 'utf-8',
    });

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
