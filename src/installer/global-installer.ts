import { join } from 'path';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { homedir } from 'os';
import yaml from 'yaml';
import chalk from 'chalk';

/**
 * Global Installer for Roo Commander
 *
 * Installs Roo Commander mode globally in Roo Code's settings
 * Location: ~/.config/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/
 */

interface InstallResult {
  success: boolean;
  error?: string;
}

/**
 * Get Roo Code global settings directory
 *
 * @returns Path to Roo Code global settings directory
 */
export function getRooCodeSettingsDir(): string {
  const platform = process.platform;

  let configDir: string;
  if (platform === 'win32') {
    // Windows: %APPDATA%\Code\User\globalStorage\rooveterinaryinc.roo-cline
    configDir = join(
      process.env.APPDATA || join(homedir(), 'AppData', 'Roaming'),
      'Code',
      'User',
      'globalStorage',
      'rooveterinaryinc.roo-cline',
      'settings'
    );
  } else if (platform === 'darwin') {
    // macOS: ~/Library/Application Support/Code/User/globalStorage/rooveterinaryinc.roo-cline
    configDir = join(
      homedir(),
      'Library',
      'Application Support',
      'Code',
      'User',
      'globalStorage',
      'rooveterinaryinc.roo-cline',
      'settings'
    );
  } else {
    // Linux: ~/.config/Code/User/globalStorage/rooveterinaryinc.roo-cline
    configDir = join(
      homedir(),
      '.config',
      'Code',
      'User',
      'globalStorage',
      'rooveterinaryinc.roo-cline',
      'settings'
    );
  }

  return configDir;
}

/**
 * Get global ~/.roo directory for custom instructions
 *
 * @returns Path to global .roo directory
 */
export function getGlobalRooDir(): string {
  return join(homedir(), '.roo');
}

/**
 * Install Roo Commander globally in Roo Code settings
 *
 * @param templatePath Path to .roomodes-entry.yaml template
 * @param force Force reinstall if already exists
 * @returns Install result
 */
export function installGlobalMode(templatePath: string, force: boolean = false): InstallResult {
  try {
    const settingsDir = getRooCodeSettingsDir();

    // Check if Roo Code settings directory exists
    if (!existsSync(settingsDir)) {
      return {
        success: false,
        error: `Roo Code settings directory not found at ${settingsDir}\n\nPlease install and run Roo Code extension at least once.`,
      };
    }

    // Read template file
    if (!existsSync(templatePath)) {
      return {
        success: false,
        error: `Template file not found: ${templatePath}`,
      };
    }

    const templateContent = readFileSync(templatePath, 'utf-8');

    // Find YAML content (skip comments)
    const yamlStart = templateContent.indexOf('customModes:');
    if (yamlStart === -1) {
      return {
        success: false,
        error: 'Invalid .roomodes-entry.yaml template (missing customModes key)',
      };
    }

    const yamlContent = templateContent.substring(yamlStart);

    // Parse template
    const parsedTemplate = yaml.parse(yamlContent);
    if (!parsedTemplate?.customModes || !Array.isArray(parsedTemplate.customModes)) {
      return {
        success: false,
        error: 'Invalid .roomodes-entry.yaml template (customModes must be an array)',
      };
    }

    const rooCommanderMode = parsedTemplate.customModes[0];

    // Merge with existing custom_modes.yaml
    const yamlPath = join(settingsDir, 'custom_modes.yaml');
    const jsonPath = join(settingsDir, 'custom_modes.json');

    let existingModes: any = { customModes: [] };

    // Try reading YAML first (preferred format)
    if (existsSync(yamlPath)) {
      const yamlContent = readFileSync(yamlPath, 'utf-8');
      existingModes = yaml.parse(yamlContent) || { customModes: [] };
    }

    // Ensure customModes array exists
    if (!existingModes.customModes) {
      existingModes.customModes = [];
    }

    // Check if Roo Commander already exists
    const hasRooCommander = existingModes.customModes.some(
      (mode: any) => mode.slug === 'roo-commander'
    );

    if (hasRooCommander && !force) {
      console.log(
        chalk.yellow('\n  ⚠️  Roo Commander is already installed globally')
      );
      console.log(chalk.gray('     Use --force to reinstall\n'));
      return { success: true };
    }

    if (hasRooCommander) {
      // Replace existing entry
      existingModes.customModes = existingModes.customModes.filter(
        (mode: any) => mode.slug !== 'roo-commander'
      );
      existingModes.customModes.push(rooCommanderMode);

      console.log(
        chalk.gray(`\n  Updated existing Roo Commander entry in global settings`)
      );
    } else {
      // Append to existing
      existingModes.customModes.push(rooCommanderMode);

      console.log(chalk.gray(`\n  Added Roo Commander entry to global settings`));
    }

    // Write both YAML and JSON (Roo Code uses both)
    const newYamlContent = yaml.stringify(existingModes);
    const newJsonContent = JSON.stringify(existingModes, null, 2);

    writeFileSync(yamlPath, newYamlContent, 'utf-8');
    writeFileSync(jsonPath, newJsonContent, 'utf-8');

    console.log(chalk.gray(`     Location: ${yamlPath}`));

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `Failed to install global mode: ${(error as Error).message}`,
    };
  }
}

/**
 * Install global custom instructions in ~/.roo/rules-roo-commander/
 *
 * @param rulesDir Source rules directory (src/templates/rules-roo-commander)
 * @param force Force reinstall
 * @returns Install result
 */
export function installGlobalRules(rulesDir: string, force: boolean = false): InstallResult {
  try {
    const globalRooDir = getGlobalRooDir();
    const targetDir = join(globalRooDir, 'rules-roo-commander');

    // Create ~/.roo directory if it doesn't exist
    if (!existsSync(globalRooDir)) {
      mkdirSync(globalRooDir, { recursive: true });
      console.log(chalk.gray(`\n  Created ~/.roo directory`));
    }

    // Check if already installed
    if (existsSync(targetDir) && !force) {
      console.log(
        chalk.yellow('\n  ⚠️  Global custom instructions already installed')
      );
      console.log(chalk.gray('     Use --force to reinstall\n'));
      return { success: true };
    }

    // Copy rules directory
    const fs = require('fs-extra');
    fs.copySync(rulesDir, targetDir, { overwrite: force });

    console.log(chalk.gray(`\n  Installed global custom instructions`));
    console.log(chalk.gray(`     Location: ${targetDir}`));

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: `Failed to install global rules: ${(error as Error).message}`,
    };
  }
}

/**
 * Check if Roo Code extension is installed
 *
 * @returns True if installed
 */
export function isRooCodeInstalled(): boolean {
  const settingsDir = getRooCodeSettingsDir();
  return existsSync(settingsDir);
}
