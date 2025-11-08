/**
 * Generate Index Command
 *
 * Generate skills index markdown file for Roo Code custom instructions
 * Creates .roo/rules/01-skills-index.md with categorized skill listings
 */

import chalk from 'chalk';
import ora from 'ora';
import { join } from 'path';
import { ensureDir, writeFile } from 'fs-extra';
import { findAllSkills, DEFAULT_SKILLS_DIR } from '../parser/skill-parser.js';
import { generateSkillsIndex } from '../generator/index-generator.js';

/**
 * Generate index command options
 */
export interface GenerateIndexOptions {
  source?: string; // Custom skills directory
  output?: string; // Custom output path (default: .roo/rules/01-skills-index.md)
}

/**
 * Execute the generate-index command
 *
 * @param options - Command options
 */
export async function generateIndexCommand(
  options: GenerateIndexOptions = {}
): Promise<void> {
  const skillsDir = options.source || DEFAULT_SKILLS_DIR;
  const outputPath =
    options.output || join(process.cwd(), '.roo', 'rules', '01-skills-index.md');

  // Show loading spinner
  const spinner = ora('Loading skills...').start();

  try {
    // Find all skills
    const skills = await findAllSkills(skillsDir, { validate: false });

    if (skills.length === 0) {
      spinner.fail('No skills found');
      console.log(chalk.yellow(`\n⚠️  No skills found in ${skillsDir}`));
      console.log(chalk.gray('\nCannot generate index without skills.\n'));
      process.exit(1);
    }

    spinner.text = `Generating index for ${skills.length} skills...`;

    // Generate markdown
    const markdown = generateSkillsIndex(skills);

    // Ensure output directory exists
    const outputDir = join(outputPath, '..');
    await ensureDir(outputDir);

    // Write file
    await writeFile(outputPath, markdown, 'utf-8');

    spinner.succeed('Index generated successfully');

    // Display success message
    console.log(chalk.bold.green(`\n✅ Skills index created`));
    console.log(chalk.gray(`Location: ${outputPath}`));
    console.log(chalk.gray(`Skills: ${skills.length}`));
    console.log(chalk.gray(`\nThe index is now available to all Roo Code modes.\n`));

    // Show helpful next steps
    console.log(chalk.cyan('Next steps:'));
    console.log(chalk.gray('  1. The index is automatically loaded by Roo Code'));
    console.log(
      chalk.gray('  2. Update the index when skills change: ') +
        chalk.white('roo-commander sync-index')
    );
    console.log(
      chalk.gray('  3. View the index: ') +
        chalk.white(`cat ${outputPath}`)
    );
    console.log();
  } catch (error) {
    spinner.fail('Failed to generate index');
    console.error(chalk.red(`\n❌ Error: ${(error as Error).message}\n`));
    process.exit(1);
  }
}
