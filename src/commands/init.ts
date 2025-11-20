import { existsSync } from 'fs';
import { join } from 'path';
import ora from 'ora';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { cloneSkills, getDefaultSkillsDir, isValidSkillsDirectory, detectNestedSkills, fixNestedSkills, normalizeRepoUrl } from '../installer/github-cloner.js';
import { installTemplates, isInstalled } from '../installer/template-installer.js';
import { installGlobalMode, installGlobalRules, isRooCodeInstalled } from '../installer/global-installer.js';
import { installClassic } from '../installer/classic-installer.js';
import { generateSkillsIndex } from '../generator/index-generator.js';
import { findAllSkills } from '../parser/skill-parser.js';
import { writeFileSync } from 'fs';

/**
 * Init Command
 *
 * Initialize Roo Commander globally (default) or per-project:
 *
 * Global Mode (default):
 * 1. Check for ~/.claude/skills/, prompt to clone if missing
 * 2. Install mode to Roo Code global settings (custom_modes.yaml)
 * 3. Copy rules to ~/.roo/rules-roo-commander/
 * 4. Mode appears in ALL projects
 *
 * Project Mode (--project flag):
 * 1. Check for ~/.claude/skills/, prompt to clone if missing
 * 2. Generate skills index (.roo/rules/01-skills-index.md)
 * 3. Copy all template files to .roo/
 * 4. Create/merge .roomodes file
 * 5. Mode appears only in this project
 */

export interface InitOptions {
  /** Custom skills directory (default: ~/.claude/skills/) */
  source?: string;
  /** Custom GitHub repository URL for skills */
  repo?: string;
  /** Force reinstall (overwrite existing) */
  force?: boolean;
  /** Install to project directory instead of globally (default: false) */
  project?: boolean;
  /** Install classic MDTM-based version instead of modern skills-integrated version */
  classic?: boolean;
}

export async function initCommand(options: InitOptions = {}): Promise<void> {
  const projectRoot = process.cwd();
  let skillsDir = options.source || getDefaultSkillsDir();
  const { force = false } = options;
  let { project = false } = options;
  let { classic = false } = options;

  console.log(chalk.bold.cyan('\n👑 Roo Commander Initialization\n'));

  // Version selection: Modern (skills-integrated) vs Classic (MDTM)
  if (!options.hasOwnProperty('classic')) {
    const versionAnswer = await inquirer.prompt([
      {
        type: 'list',
        name: 'version',
        message: 'Which version would you like to install?',
        choices: [
          {
            name: 'Modern (v9 - Skills-integrated orchestrator)',
            value: 'modern',
            short: 'Modern',
          },
          {
            name: 'Classic (v8 - MDTM-based multi-agent orchestrator)',
            value: 'classic',
            short: 'Classic',
          },
        ],
        default: 'modern',
      },
    ]);

    classic = versionAnswer.version === 'classic';
  }

  // CLASSIC VERSION: Install MDTM-based system
  if (classic) {
    console.log(chalk.gray('  Installing: Classic MDTM-based orchestrator\n'));

    // For classic, we only support project-scoped installation
    const result = await installClassic({
      projectRoot,
      force,
    });

    if (!result.success) {
      console.error(chalk.red('\n❌ Failed to install Roo Commander Classic:'));
      for (const error of result.errors) {
        console.error(chalk.red(`  - ${error}`));
      }
      console.log();
      process.exit(1);
    }

    // Success - exit early, classic installer handles messaging
    return;
  }

  // MODERN VERSION: Continue with skills-integrated installation
  console.log(chalk.gray('  Installing: Modern skills-integrated orchestrator\n'));

  // Interactive mode selection if not specified via flag
  if (!options.hasOwnProperty('project')) {
    const modeAnswer = await inquirer.prompt([
      {
        type: 'list',
        name: 'installMode',
        message: 'Where should Roo Commander be installed?',
        choices: [
          {
            name: 'Global (available in all projects)',
            value: 'global',
            short: 'Global',
          },
          {
            name: 'Project-specific (this project only)',
            value: 'project',
            short: 'Project',
          },
        ],
        default: 'global',
      },
    ]);

    project = modeAnswer.installMode === 'project';
  }

  if (project) {
    console.log(chalk.gray('  Installation mode: Project-scoped (.roomodes)\n'));
  } else {
    console.log(chalk.gray('  Installation mode: Global (all projects)\n'));
  }

  // Check if already installed (only for project mode)
  if (project && isInstalled(projectRoot) && !force) {
    console.log(chalk.yellow('⚠️  Roo Commander is already installed in this project.'));
    console.log(
      chalk.gray(
        `\nRun ${chalk.cyan('roocommander init --project --force')} to reinstall.\n`
      )
    );
    return;
  }

  // For global mode, check if Roo Code is installed
  if (!project && !isRooCodeInstalled()) {
    console.error(chalk.red('\n❌ Roo Code extension not found\n'));
    console.log(chalk.gray('  Roo Code must be installed and run at least once.\n'));
    console.log(chalk.gray('  Install from: VS Code Extensions → Search "Roo Code"\n'));
    console.log(chalk.gray('  Alternative: Use --project flag for project-scoped installation\n'));
    process.exit(1);
  }

  // Step 1: Check skills directory
  console.log(chalk.bold('Step 1: Skills Directory\n'));

  // Check for nested skills directory (common bug from older versions)
  const nestedSkillsPath = detectNestedSkills(skillsDir);
  if (nestedSkillsPath) {
    console.log(chalk.yellow(`⚠️  Nested skills directory detected!`));
    console.log(chalk.white(`  Expected: ${chalk.cyan(skillsDir)}`));
    console.log(chalk.white(`  Found at: ${chalk.cyan(nestedSkillsPath)}\n`));

    const fixAnswer = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'shouldFix',
        message: 'Fix nested directory by moving skills up one level?',
        default: true,
      },
    ]);

    if (fixAnswer.shouldFix) {
      const fixed = await fixNestedSkills(skillsDir);
      if (!fixed) {
        console.error(chalk.red('\n❌ Failed to fix nested directory\n'));
        process.exit(1);
      }
    } else {
      console.log(chalk.white('\nSkipping fix. You can run this command again to fix later.\n'));
    }
  }

  // Count existing skills if directory exists
  const existingSkillsValid = isValidSkillsDirectory(skillsDir);
  let existingSkillsCount = 0;

  if (existingSkillsValid) {
    try {
      const existingSkills = await findAllSkills(skillsDir, { validate: false });
      existingSkillsCount = existingSkills.length;
    } catch {
      // Ignore errors counting skills
    }
  }

  // Smart detection: check if skills already exist
  if (existingSkillsValid && existingSkillsCount > 0) {
    console.log(chalk.green(`✅ Found existing skills at ${chalk.cyan(skillsDir)} (${existingSkillsCount} skills detected)\n`));

    const skillsAnswer = await inquirer.prompt([
      {
        type: 'list',
        name: 'skillsAction',
        message: 'What would you like to do with skills?',
        choices: [
          {
            name: `Use existing skills at ${skillsDir}`,
            value: 'use-existing',
            short: 'Use existing',
          },
          {
            name: 'Clone skills from a GitHub repository',
            value: 'clone',
            short: 'Clone',
          },
          {
            name: 'Use skills from a different directory (specify path)',
            value: 'custom',
            short: 'Custom path',
          },
          {
            name: 'Skip skills setup (orchestration only)',
            value: 'skip',
            short: 'Skip',
          },
        ],
        default: 'use-existing',
      },
    ]);

    if (skillsAnswer.skillsAction === 'use-existing') {
      console.log(chalk.green(`\n✅ Using existing skills directory: ${chalk.cyan(skillsDir)}\n`));
    } else if (skillsAnswer.skillsAction === 'clone') {
      // Ask for repo URL
      const repoAnswer = await inquirer.prompt([
        {
          type: 'input',
          name: 'repoUrl',
          message: 'Enter GitHub repository URL:',
          default: 'jezweb/claude-skills',
        },
      ]);

      const cloneResult = await cloneSkills({
        targetDir: skillsDir,
        repoUrl: repoAnswer.repoUrl,
        promptUser: false,
      });

      if (!cloneResult.success) {
        console.error(chalk.red(`\n❌ Failed to clone skills: ${cloneResult.error}\n`));
        process.exit(1);
      }
    } else if (skillsAnswer.skillsAction === 'custom') {
      const customAnswer = await inquirer.prompt([
        {
          type: 'input',
          name: 'customPath',
          message: 'Enter path to skills directory:',
          validate: (input: string) => {
            if (!input.trim()) {
              return 'Path cannot be empty';
            }
            if (!isValidSkillsDirectory(input)) {
              return `Directory not found or invalid: ${input}`;
            }
            return true;
          },
        },
      ]);

      skillsDir = customAnswer.customPath;
      console.log(chalk.green(`\n✅ Using skills directory: ${chalk.cyan(skillsDir)}\n`));
    } else {
      console.log(chalk.yellow('\n⚠️  Skipping skills setup.'));
      console.log(chalk.white(`You can set up skills later by running: ${chalk.cyan('roocommander init')}\n`));
    }
  } else {
    // No existing skills found
    console.log(chalk.yellow(`⚠️  No skills directory found at ${chalk.cyan(skillsDir)}\n`));

    const skillsAnswer = await inquirer.prompt([
      {
        type: 'list',
        name: 'skillsAction',
        message: 'What would you like to do?',
        choices: [
          {
            name: 'Clone skills from a GitHub repository',
            value: 'clone',
            short: 'Clone',
          },
          {
            name: 'I have skills in a custom directory (specify path)',
            value: 'custom',
            short: 'Custom path',
          },
          {
            name: 'Skip skills setup (orchestration only)',
            value: 'skip',
            short: 'Skip',
          },
        ],
        default: 'clone',
      },
    ]);

    if (skillsAnswer.skillsAction === 'clone') {
      // Ask for repo URL
      const repoAnswer = await inquirer.prompt([
        {
          type: 'input',
          name: 'repoUrl',
          message: 'Enter GitHub repository URL:',
          default: 'jezweb/claude-skills',
        },
      ]);

      const cloneResult = await cloneSkills({
        targetDir: skillsDir,
        repoUrl: repoAnswer.repoUrl,
        promptUser: false,
      });

      if (!cloneResult.success) {
        console.error(chalk.red(`\n❌ Failed to clone skills: ${cloneResult.error}\n`));
        process.exit(1);
      }
    } else if (skillsAnswer.skillsAction === 'custom') {
      const customAnswer = await inquirer.prompt([
        {
          type: 'input',
          name: 'customPath',
          message: 'Enter path to skills directory:',
          validate: (input: string) => {
            if (!input.trim()) {
              return 'Path cannot be empty';
            }
            if (!isValidSkillsDirectory(input)) {
              return `Directory not found or invalid: ${input}`;
            }
            return true;
          },
        },
      ]);

      skillsDir = customAnswer.customPath;
      console.log(chalk.green(`\n✅ Using skills directory: ${chalk.cyan(skillsDir)}\n`));
    } else {
      console.log(chalk.yellow('\n⚠️  Skipping skills setup.'));
      console.log(chalk.white(`You can set up skills later by running: ${chalk.cyan('roocommander init')}\n`));
    }
  }

  // GLOBAL MODE: Install to Roo Code settings
  if (!project) {
    // Step 2: Install global mode
    console.log(chalk.bold('Step 2: Installing Roo Commander Mode\n'));

    const modeSpinner = ora('Installing to Roo Code settings...').start();

    // Template path: dist/commands -> ../../src/templates (during dev) or ../templates (production)
    const templatePath = existsSync(join(__dirname, '../../src/templates/.roomodes-entry.yaml'))
      ? join(__dirname, '../../src/templates/.roomodes-entry.yaml')
      : join(__dirname, '../templates/.roomodes-entry.yaml');

    modeSpinner.stop();
    const modeResult = await installGlobalMode(templatePath, force);

    if (!modeResult.success) {
      console.error(chalk.red(`\n❌ Failed to install mode`));
      console.error(chalk.red(`Error: ${modeResult.error}\n`));
      process.exit(1);
    }

    console.log(chalk.green('✅ Installed mode to Roo Code settings\n'));

    // Step 3: Install global rules
    console.log(chalk.bold('Step 3: Installing Custom Instructions\n'));

    const rulesSpinner = ora('Copying rules to ~/.roo/...').start();

    // Rules path: dist/commands -> ../../src/templates (during dev) or ../templates (production)
    const rulesSourceDir = existsSync(join(__dirname, '../../src/templates/rules-roo-commander'))
      ? join(__dirname, '../../src/templates/rules-roo-commander')
      : join(__dirname, '../templates/rules-roo-commander');
    const rulesResult = installGlobalRules(rulesSourceDir, force);

    if (!rulesResult.success) {
      rulesSpinner.fail(chalk.red('Failed to install rules'));
      console.error(chalk.red(`\nError: ${rulesResult.error}\n`));
      process.exit(1);
    }

    rulesSpinner.succeed(chalk.green('✅ Installed custom instructions to ~/.roo/\n'));
  }
  // PROJECT MODE: Install to project directory
  else {
    // Step 2: Load and count skills
    console.log(chalk.bold('Step 2: Loading Skills\n'));

    const spinner = ora('Discovering skills...').start();

    let skills;
    try {
      skills = await findAllSkills(skillsDir, { validate: false });
      spinner.succeed(
        chalk.green(`✅ Found ${chalk.bold(skills.length)} skills\n`)
      );
    } catch (error) {
      spinner.fail(chalk.red('Failed to load skills'));
      console.error(
        chalk.red(`\nError: ${(error as Error).message}`)
      );
      console.error(
        chalk.gray(
          `\nCheck that ${skillsDir} contains valid skill directories with SKILL.md files.\n`
        )
      );
      process.exit(1);
    }

    // Step 3: Generate skills index
    console.log(chalk.bold('Step 3: Generating Skills Index\n'));

    const indexSpinner = ora('Generating .roo/rules/01-skills-index.md...').start();

    try {
      const markdown = generateSkillsIndex(skills);

      // Ensure .roo/rules/ directory exists
      const rulesDir = join(projectRoot, '.roo', 'rules');
      if (!existsSync(rulesDir)) {
        const { mkdirSync } = require('fs');
        mkdirSync(rulesDir, { recursive: true });
      }

      // Write index file
      const indexPath = join(projectRoot, '.roo', 'rules', '01-skills-index.md');
      writeFileSync(indexPath, markdown, 'utf-8');

      indexSpinner.succeed(
        chalk.green(`✅ Generated skills index (${skills.length} skills)\n`)
      );
    } catch (error) {
      indexSpinner.fail(chalk.red('Failed to generate index'));
      console.error(chalk.red(`\nError: ${(error as Error).message}\n`));
      process.exit(1);
    }

    // Step 4: Install templates
    console.log(chalk.bold('Step 4: Installing Templates\n'));

    const installResult = await installTemplates({
      projectRoot,
      force,
    });

    if (!installResult.success) {
      console.error(chalk.red('\n❌ Failed to install templates:'));
      for (const error of installResult.errors) {
        console.error(chalk.red(`  - ${error}`));
      }
      console.log();
      process.exit(1);
    }

    // Show what was installed
    console.log(chalk.green(`\n✅ Installed ${installResult.filesInstalled.length} files:\n`));

    const filesByDir: Record<string, string[]> = {};
    for (const file of installResult.filesInstalled) {
      const dir = file.split('/').slice(0, -1).join('/');
      if (!filesByDir[dir]) {
        filesByDir[dir] = [];
      }
      filesByDir[dir].push(file);
    }

    for (const [dir, files] of Object.entries(filesByDir)) {
      console.log(chalk.cyan(`  ${dir}/`));
      for (const file of files) {
        const filename = file.split('/').pop();
        console.log(chalk.gray(`    - ${filename}`));
      }
    }
  }

  // Step 5: Success message with next steps
  console.log(chalk.bold.green('\n🎉 Roo Commander Initialization Complete!\n'));

  if (!project) {
    // Global installation success message
    console.log(chalk.bold('What was installed:\n'));
    console.log(chalk.gray('  ✅ Roo Commander mode (available in ALL projects)'));
    console.log(chalk.gray('  ✅ Custom instructions (~/.roo/rules-roo-commander/)'));

    console.log(chalk.bold('\n⚠️  IMPORTANT:\n'));
    console.log(chalk.yellow('  Reload VS Code to see Roo Commander in the mode selector'));
    console.log(chalk.gray('  Command Palette (Cmd/Ctrl+Shift+P) → "Developer: Reload Window"\n'));

    console.log(chalk.bold('📖 Next Steps:\n'));
    console.log(chalk.cyan('  1. Reload VS Code (required for mode to appear)'));
    console.log(chalk.gray('     Cmd/Ctrl+Shift+P → Developer: Reload Window\n'));

    console.log(chalk.cyan('  2. Open any project and switch to Roo Commander:'));
    console.log(chalk.gray('     /mode roo-commander\n'));

    console.log(chalk.cyan('  3. List available skills:'));
    console.log(chalk.gray('     roocommander list\n'));

    console.log(chalk.cyan('  4. Load a skill before implementing:'));
    console.log(chalk.gray('     roocommander read "Cloudflare D1 Database"\n'));

    console.log(chalk.bold('🔗 Resources:\n'));
    console.log(chalk.gray('  Mode config: ~/.config/Code/User/globalStorage/.../custom_modes.yaml'));
    console.log(chalk.gray('  Custom instructions: ~/.roo/rules-roo-commander/'));
  } else {
    // Project installation success message
    console.log(chalk.bold('What was installed:\n'));
    console.log(chalk.gray(`  ✅ Skills index (${(await findAllSkills(skillsDir, { validate: false })).length} skills available)`));
    console.log(chalk.gray('  ✅ CLI usage templates (how to use roo-commander)'));
    console.log(chalk.gray('  ✅ Skill patterns guide (when to check skills)'));
    console.log(chalk.gray('  ✅ Roo Commander mode configuration'));
    console.log(chalk.gray('  ✅ 9 slash commands (session management, planning, release)'));

    console.log(chalk.bold('\n⚠️  IMPORTANT:\n'));
    console.log(chalk.yellow('  Reload VS Code to see Roo Commander in the mode selector'));
    console.log(chalk.gray('  Command Palette (Cmd/Ctrl+Shift+P) → "Developer: Reload Window"\n'));

    console.log(chalk.bold('📖 Next Steps:\n'));
    console.log(chalk.cyan('  1. Reload VS Code (required for mode to appear)'));
    console.log(chalk.gray('     Cmd/Ctrl+Shift+P → Developer: Reload Window\n'));

    console.log(chalk.cyan('  2. Switch to Roo Commander mode:'));
    console.log(chalk.gray('     /mode roo-commander\n'));

    console.log(chalk.cyan('  3. List available skills:'));
    console.log(chalk.gray('     /list-skills'));
    console.log(chalk.gray('     or: roocommander list\n'));

    console.log(chalk.cyan('  4. Load a skill before implementing:'));
    console.log(chalk.gray('     /load-skill "Cloudflare D1 Database"'));
    console.log(chalk.gray('     or: roocommander read "Cloudflare D1 Database"\n'));

    console.log(chalk.cyan('  5. Start project planning:'));
    console.log(chalk.gray('     /plan-project\n'));

    console.log(chalk.bold('🔗 Resources:\n'));
    console.log(
      chalk.gray(`  Skills index: ${chalk.cyan('.roo/rules/01-skills-index.md')}`)
    );
    console.log(
      chalk.gray(`  CLI usage: ${chalk.cyan('.roo/rules/02-cli-usage.md')}`)
    );
    console.log(
      chalk.gray(`  Skill patterns: ${chalk.cyan('.roo/rules/03-skill-patterns.md')}`)
    );

    console.log(
      chalk.gray(`\n  Commands: ${chalk.cyan('.roo/commands/')} (9 slash commands)`)
    );
    console.log(
      chalk.gray(`  Mode config: ${chalk.cyan('.roomodes')} (Roo Commander entry)`)
    );
  }

  console.log();
}
