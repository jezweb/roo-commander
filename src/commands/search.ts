/**
 * Search Command
 *
 * Find skills by keyword - searches in name, description, and keywords
 * Supports case-insensitive fuzzy matching
 */

import chalk from 'chalk';
import ora from 'ora';
import { findAllSkills, DEFAULT_SKILLS_DIR } from '../parser/skill-parser.js';
import { ClaudeSkill } from '../parser/types.js';

/**
 * Search command options
 */
export interface SearchOptions {
  source?: string; // Custom skills directory
  verbose?: boolean; // Show full descriptions
}

/**
 * Execute the search command
 *
 * @param keyword - Search keyword
 * @param options - Command options
 */
export async function searchCommand(
  keyword: string,
  options: SearchOptions = {}
): Promise<void> {
  const skillsDir = options.source || DEFAULT_SKILLS_DIR;
  const verbose = options.verbose || false;

  // Show loading spinner
  const spinner = ora('Searching skills...').start();

  try {
    // Find all skills
    const allSkills = await findAllSkills(skillsDir, { validate: false });

    // Search and score skills
    const results = searchSkills(keyword, allSkills);

    spinner.stop();

    // Handle no results
    if (results.length === 0) {
      console.log(chalk.yellow(`\n⚠️  No skills found matching: "${keyword}"`));
      console.log(chalk.gray('\nTry:'));
      console.log(chalk.gray('  • Different keywords'));
      console.log(chalk.gray('  • Broader search terms'));
      console.log(
        chalk.gray(
          `  • List all skills: ${chalk.white('roo-commander list')}`
        )
      );
      console.log();
      return;
    }

    // Display header
    console.log(
      chalk.bold.cyan(`\n🔍 Search Results for "${keyword}" (${results.length})`)
    );
    console.log(chalk.gray(`Source: ${skillsDir}\n`));

    // Display results
    if (verbose) {
      displayVerboseResults(results);
    } else {
      displayCompactResults(results);
    }

    // Display footer
    console.log(chalk.gray('\n─────────────────────────────────────────────'));
    console.log(
      chalk.gray(
        `\nTo read a skill: ${chalk.white('roo-commander read <skill-name>')}`
      )
    );
    console.log(
      chalk.gray(`For verbose output: ${chalk.white(`roo-commander search "${keyword}" --verbose`)}\n`)
    );
  } catch (error) {
    spinner.fail('Search failed');
    console.error(chalk.red(`\n❌ Error: ${(error as Error).message}\n`));
    process.exit(1);
  }
}

/**
 * Search skills by keyword with scoring
 *
 * @param keyword - Search keyword
 * @param skills - All available skills
 * @returns Matching skills sorted by relevance
 */
function searchSkills(keyword: string, skills: ClaudeSkill[]): ClaudeSkill[] {
  const keywordLower = keyword.toLowerCase();

  // Score each skill
  const scored = skills
    .map((skill) => {
      let score = 0;
      const nameLower = skill.metadata.name.toLowerCase();
      const descriptionLower = skill.metadata.description.toLowerCase();

      // Score: Name matches (highest priority)
      if (nameLower === keywordLower) {
        score += 1000;
      } else if (nameLower.includes(keywordLower)) {
        score += 100;
      } else if (fuzzyMatch(keywordLower, nameLower)) {
        score += 50;
      }

      // Score: Keyword exact matches
      if (skill.metadata.keywords) {
        for (const kw of skill.metadata.keywords) {
          const kwLower = kw.toLowerCase();
          if (kwLower === keywordLower) {
            score += 200;
          } else if (kwLower.includes(keywordLower)) {
            score += 75;
          }
        }
      }

      // Score: Description matches
      if (descriptionLower.includes(keywordLower)) {
        score += 25;
      }

      // Score: Use when matches
      if (skill.metadata.useWhen) {
        const useWhenLower = skill.metadata.useWhen.toLowerCase();
        if (useWhenLower.includes(keywordLower)) {
          score += 15;
        }
      }

      return { skill, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.skill);

  return scored;
}

/**
 * Display search results in compact format
 */
function displayCompactResults(skills: ClaudeSkill[]): void {
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
 * Display search results in verbose format
 */
function displayVerboseResults(skills: ClaudeSkill[]): void {
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

/**
 * Check if query characters appear in target string in order (fuzzy match)
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
