import { existsSync } from 'fs';
import { join } from 'path';
import ora from 'ora';
import chalk from 'chalk';
import { cloneSkills, getDefaultSkillsDir, isValidSkillsDirectory } from '../installer/github-cloner.js';
import { installTemplates, isInstalled } from '../installer/template-installer.js';
import { installGlobalMode, installGlobalRules, isRooCodeInstalled } from '../installer/global-installer.js';
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
  /** Force reinstall (overwrite existing) */
  force?: boolean;
  /** Install to project directory instead of globally (default: false) */
  project?: boolean;
}

export async function initCommand(options: InitOptions = {}): Promise<void> {
  const projectRoot = process.cwd();
  const skillsDir = options.source || getDefaultSkillsDir();
  const { force = false, project = false } = options;

  console.log(chalk.bold.cyan('\n👑 Roo Commander Initialization\n'));

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

  if (!isValidSkillsDirectory(skillsDir)) {
    console.log(
      chalk.yellow(`Skills directory not found or invalid: ${chalk.cyan(skillsDir)}`)
    );

    // Offer to clone from GitHub
    console.log(
      chalk.gray(
        `\nWould you like to clone skills from GitHub?\nRepo: https://github.com/jezweb/claude-skills`
      )
    );
    console.log(
      chalk.gray(`This will download ~60 production-tested skills to ${skillsDir}\n`)
    );

    // In production, would use readline for y/n prompt
    // For now, attempting to clone
    console.log(chalk.gray('Proceeding with clone...\n'));

    const cloneResult = await cloneSkills({
      targetDir: skillsDir,
      promptUser: false, // Already prompted above
    });

    if (!cloneResult.success) {
      console.error(
        chalk.red(
          `\n❌ Failed to clone skills. Please set up skills directory manually.`
        )
      );
      console.error(
        chalk.gray(
          `\nAlternatives:\n1. Clone manually: git clone https://github.com/jezweb/claude-skills ${skillsDir}\n2. Use custom directory: roo-commander init --source /path/to/skills\n`
        )
      );
      process.exit(1);
    }
  } else {
    console.log(
      chalk.green(`✅ Skills directory found: ${chalk.cyan(skillsDir)}\n`)
    );
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
    const modeResult = installGlobalMode(templatePath, force);

    if (!modeResult.success) {
      modeSpinner.fail(chalk.red('Failed to install mode'));
      console.error(chalk.red(`\nError: ${modeResult.error}\n`));
      process.exit(1);
    }

    modeSpinner.succeed(chalk.green('✅ Installed mode to Roo Code settings\n'));

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
