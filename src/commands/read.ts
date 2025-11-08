/**
 * Read Command
 *
 * Output the full content of a specific skill's SKILL.md file
 * Useful for piping to other tools or inspecting skill details
 */

import chalk from 'chalk';
import ora from 'ora';
import { readFile } from 'fs-extra';
import { findAllSkills, DEFAULT_SKILLS_DIR } from '../parser/skill-parser.js';

/**
 * Read command options
 */
export interface ReadOptions {
  source?: string; // Custom skills directory
  raw?: boolean; // Output raw markdown without formatting
}

/**
 * Execute the read command
 *
 * @param skillName - Name of skill to read
 * @param options - Command options
 */
export async function readCommand(
  skillName: string,
  options: ReadOptions = {}
): Promise<void> {
  const skillsDir = options.source || DEFAULT_SKILLS_DIR;
  const raw = options.raw || false;

  // Show loading spinner (only if not raw mode)
  const spinner = !raw ? ora('Finding skill...').start() : null;

  try {
    // Find all skills
    const skills = await findAllSkills(skillsDir, { validate: false });

    // Find matching skill (case-insensitive)
    const skill = skills.find(
      (s) => s.metadata.name.toLowerCase() === skillName.toLowerCase()
    );

    if (spinner) spinner.stop();

    if (!skill) {
      // Skill not found - show helpful error
      if (!raw) {
        console.error(chalk.red(`\n❌ Skill not found: ${skillName}`));
        console.log(chalk.gray('\nAvailable skills:'));

        // Show similar skills (fuzzy match)
        const similar = findSimilarSkills(skillName, skills, 5);
        if (similar.length > 0) {
          similar.forEach((s) => {
            console.log(chalk.gray(`  • ${s.metadata.name}`));
          });
          console.log(
            chalk.gray(
              `\nTry: ${chalk.white(`roo-commander read ${similar[0].metadata.name}`)}`
            )
          );
        } else {
          console.log(chalk.gray('  (run "roo-commander list" to see all)'));
        }
        console.log();
      } else {
        console.error(`Skill not found: ${skillName}`);
      }
      process.exit(1);
    }

    // Read the SKILL.md file
    const content = await readFile(skill.skillFilePath, 'utf-8');

    // Output content
    if (raw) {
      // Raw mode: Just output the content
      console.log(content);
    } else {
      // Formatted mode: Add header
      console.log(chalk.bold.cyan(`\n📄 ${skill.metadata.name}`));
      console.log(chalk.gray(`Path: ${skill.skillFilePath}`));
      console.log(chalk.gray('─────────────────────────────────────────────\n'));
      console.log(content);
      console.log(
        chalk.gray('\n─────────────────────────────────────────────')
      );

      // Show metadata footer
      if (skill.metadata.keywords && skill.metadata.keywords.length > 0) {
        console.log(
          chalk.dim(`Keywords: ${skill.metadata.keywords.join(', ')}`)
        );
      }
      if (skill.templates && skill.templates.length > 0) {
        console.log(chalk.dim(`Templates: ${skill.templates.length} files`));
      }
      console.log();
    }
  } catch (error) {
    if (spinner) spinner.fail('Failed to read skill');

    if (!raw) {
      console.error(chalk.red(`\n❌ Error: ${(error as Error).message}\n`));
    } else {
      console.error(`Error: ${(error as Error).message}`);
    }

    process.exit(1);
  }
}

/**
 * Find skills with similar names (fuzzy matching)
 *
 * @param query - Search query
 * @param skills - All available skills
 * @param limit - Maximum number of results
 * @returns Array of similar skills, sorted by relevance
 */
function findSimilarSkills(
  query: string,
  skills: any[],
  limit: number
): any[] {
  const queryLower = query.toLowerCase();

  // Score skills by similarity
  const scored = skills
    .map((skill) => {
      const nameLower = skill.metadata.name.toLowerCase();
      let score = 0;

      // Exact match
      if (nameLower === queryLower) {
        score = 1000;
      }
      // Starts with query
      else if (nameLower.startsWith(queryLower)) {
        score = 100;
      }
      // Contains query
      else if (nameLower.includes(queryLower)) {
        score = 50;
      }
      // Word boundary match
      else if (nameLower.split(/[\s-_]/).some((word: string) => word.startsWith(queryLower))) {
        score = 25;
      }
      // Fuzzy match (check if query characters appear in order)
      else if (fuzzyMatch(queryLower, nameLower)) {
        score = 10;
      }

      return { skill, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.skill);

  return scored;
}

/**
 * Check if query characters appear in target string in order
 *
 * @param query - Search query
 * @param target - Target string
 * @returns True if fuzzy match
 */
function fuzzyMatch(query: string, target: string): boolean {
  let queryIndex = 0;

  for (let i = 0; i < target.length && queryIndex < query.length; i++) {
    if (target[i] === query[queryIndex]) {
      queryIndex++;
    }
  }

  return queryIndex === query.length;
}
