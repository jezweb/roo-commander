import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import ora from 'ora';
import chalk from 'chalk';
import yaml from 'yaml';
import inquirer from 'inquirer';

/**
 * Classic Installer
 *
 * Installs the v8.1 MDTM-based Roo Commander system.
 * This is the "classic" version without Claude skills integration.
 *
 * Includes:
 * - All 9 classic modes (Roo Commander, Project Manager, Task Planner, etc.)
 * - MDTM (Markdown-Driven Task Management) system
 * - Session management
 * - Knowledge bases for each mode
 */

export interface ClassicInstallOptions {
  /** Project root directory */
  projectRoot: string;
  /** Force reinstall (overwrite existing files) */
  force?: boolean;
}

export interface ClassicInstallResult {
  success: boolean;
  filesInstalled: string[];
  errors: string[];
}

/**
 * Install Roo Commander Classic to project
 *
 * @param options Install options
 * @returns Install result with list of files installed
 */
export async function installClassic(
  options: ClassicInstallOptions
): Promise<ClassicInstallResult> {
  const { projectRoot, force = false } = options;

  const filesInstalled: string[] = [];
  const errors: string[] = [];

  // Get classic templates directory
  const templatesDir = getClassicTemplatesDir();

  if (!existsSync(templatesDir)) {
    return {
      success: false,
      filesInstalled: [],
      errors: [`Classic templates directory not found: ${templatesDir}`],
    };
  }

  // Check if already installed
  const mdtmDir = join(projectRoot, '.mdtm');
  const rooCommanderDir = join(projectRoot, '.roo', 'rules-roo-commander');

  if ((existsSync(mdtmDir) || existsSync(rooCommanderDir)) && !force) {
    console.log(
      chalk.yellow(
        `\n⚠️  Roo Commander Classic appears to already be installed`
      )
    );

    const overrideAnswer = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'shouldOverride',
        message: 'Override existing installation?',
        default: false,
      },
    ]);

    if (!overrideAnswer.shouldOverride) {
      console.log(chalk.gray('\nInstallation cancelled.\n'));
      return {
        success: false,
        filesInstalled: [],
        errors: ['Already installed (user declined override)'],
      };
    }
  }

  const spinner = ora('Installing Roo Commander Classic (MDTM system)...').start();

  try {
    // 1. Copy .mdtm directory structure
    const mdtmSource = join(templatesDir, '.mdtm');
    if (existsSync(mdtmSource)) {
      const mdtmFiles = copyDirectoryRecursive(mdtmSource, mdtmDir, filesInstalled);
      if (mdtmFiles === 0) {
        errors.push('No files copied from .mdtm directory');
      }
    } else {
      errors.push('.mdtm templates not found');
    }

    // 2. Copy .roo directory structure (rules, commander, modes, etc.)
    const rooSource = join(templatesDir, '.roo');
    const rooDest = join(projectRoot, '.roo');
    if (existsSync(rooSource)) {
      const rooFiles = copyDirectoryRecursive(rooSource, rooDest, filesInstalled);
      if (rooFiles === 0) {
        errors.push('No files copied from .roo directory');
      }
    } else {
      errors.push('.roo templates not found');
    }

    // 3. Create or merge .roomodes file with all classic modes
    const roomodesResult = await createOrMergeClassicRoomodes(projectRoot, templatesDir);
    if (roomodesResult.success) {
      filesInstalled.push('.roomodes');
    } else {
      errors.push(roomodesResult.error || 'Failed to create/merge .roomodes');
    }

    spinner.succeed(chalk.green('✅ Roo Commander Classic installed'));

    // Show summary
    console.log(chalk.white('\n📦 Installed classic MDTM system:'));
    console.log(chalk.gray('   • .mdtm/tasks/ - MDTM task files'));
    console.log(chalk.gray('   • .mdtm/sessions/ - Session logs'));
    console.log(chalk.gray('   • .roo/rules/ - Universal workspace rules'));
    console.log(chalk.gray('   • .roo/rules-*/ - Mode-specific rules and KBs'));
    console.log(chalk.gray('   • .roo/commander/ - Templates and documentation'));
    console.log(chalk.gray('   • .roomodes - 9 custom modes'));
    console.log(chalk.white('\n🚀 Switch to "👑 Roo Commander" mode to start!\n'));

    return {
      success: errors.length === 0,
      filesInstalled,
      errors,
    };
  } catch (error) {
    spinner.fail(chalk.red('Failed to install Roo Commander Classic'));
    errors.push((error as Error).message);

    return {
      success: false,
      filesInstalled,
      errors,
    };
  }
}

/**
 * Copy directory recursively
 *
 * @param src Source directory
 * @param dest Destination directory
 * @param filesInstalled Array to track installed files
 * @returns Number of files copied
 */
function copyDirectoryRecursive(
  src: string,
  dest: string,
  filesInstalled: string[]
): number {
  let count = 0;

  // Create destination directory if it doesn't exist
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src);

  for (const entry of entries) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    const stat = statSync(srcPath);

    if (stat.isDirectory()) {
      // Recursively copy subdirectory
      count += copyDirectoryRecursive(srcPath, destPath, filesInstalled);
    } else {
      // Copy file
      copyFileSync(srcPath, destPath);

      // Track relative path from project root
      const relativePath = destPath.split('/').slice(-3).join('/');
      filesInstalled.push(relativePath);
      count++;
    }
  }

  return count;
}

/**
 * Create or merge .roomodes file with all classic modes
 *
 * @param projectRoot Project root directory
 * @param templatesDir Classic templates directory
 * @returns Result with success status
 */
async function createOrMergeClassicRoomodes(
  projectRoot: string,
  templatesDir: string
): Promise<{ success: boolean; error?: string }> {
  const roomodesPath = join(projectRoot, '.roomodes');
  const templatePath = join(templatesDir, '.roomodes');

  // Read classic .roomodes template
  if (!existsSync(templatePath)) {
    return {
      success: false,
      error: 'Classic .roomodes template not found',
    };
  }

  const templateContent = readFileSync(templatePath, 'utf-8');

  try {
    const parsedTemplate = yaml.parse(templateContent);
    if (!parsedTemplate?.customModes || !Array.isArray(parsedTemplate.customModes)) {
      return {
        success: false,
        error: 'Invalid classic .roomodes template (customModes must be an array)',
      };
    }

    // Check if .roomodes exists
    if (existsSync(roomodesPath)) {
      // Merge with existing
      const existingContent = readFileSync(roomodesPath, 'utf-8');
      const existingData = yaml.parse(existingContent) || {};

      // Ensure customModes array exists
      if (!existingData.customModes) {
        existingData.customModes = [];
      }

      // Check if any classic modes already exist
      const classicSlugs = parsedTemplate.customModes.map((m: any) => m.slug);
      const existingSlugs = existingData.customModes
        .filter((m: any) => classicSlugs.includes(m.slug))
        .map((m: any) => m.slug);

      if (existingSlugs.length > 0) {
        // Prompt user before overriding
        console.log(chalk.yellow(`\n⚠️  Found existing modes: ${existingSlugs.join(', ')}`));

        const overrideAnswer = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'shouldOverride',
            message: 'Override existing mode configurations?',
            default: false,
          },
        ]);

        if (!overrideAnswer.shouldOverride) {
          console.log(chalk.gray('\nSkipping .roomodes update (existing configurations preserved)\n'));
          return { success: true };
        }

        // Remove existing classic modes before adding new ones
        existingData.customModes = existingData.customModes.filter(
          (mode: any) => !classicSlugs.includes(mode.slug)
        );
      }

      // Add all classic modes
      existingData.customModes.push(...parsedTemplate.customModes);

      const newContent = yaml.stringify(existingData);
      writeFileSync(roomodesPath, newContent, 'utf-8');

      console.log(chalk.gray(`\n  Added ${parsedTemplate.customModes.length} classic modes to .roomodes`));
    } else {
      // Create new .roomodes file
      writeFileSync(roomodesPath, templateContent, 'utf-8');
      console.log(chalk.gray(`\n  Created .roomodes with ${parsedTemplate.customModes.length} classic modes`));
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `Failed to parse/merge .roomodes: ${(error as Error).message}`,
    };
  }
}

/**
 * Get classic templates directory path
 *
 * @returns Path to src/templates-classic/ directory
 */
function getClassicTemplatesDir(): string {
  // __dirname is dist/installer/, templates are in src/templates-classic/
  return join(__dirname, '..', '..', 'src', 'templates-classic');
}

/**
 * Check if Roo Commander Classic is installed
 *
 * @param projectRoot Project root directory
 * @returns True if classic version is installed
 */
export function isClassicInstalled(projectRoot: string): boolean {
  const mdtmDir = join(projectRoot, '.mdtm');
  return existsSync(mdtmDir);
}
