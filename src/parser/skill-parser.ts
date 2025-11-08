/**
 * Claude Code Skill Parser
 *
 * Core parsing library for reading skills from ~/.claude/skills/ directory.
 * Provides functions to parse individual skills and scan for all available skills.
 */

import { join, relative } from 'path';
import { homedir } from 'os';
import { pathExists, readdir, stat } from 'fs-extra';
import {
  ClaudeSkill,
  SkillMetadata,
  ValidationResult,
  SkillParseError,
  SkillValidationError,
  ParseOptions,
} from './types.js';
import {
  parseFrontmatter,
  extractKeywords,
  extractUseWhen,
} from './yaml-parser.js';

/**
 * Default skills directory path
 */
export const DEFAULT_SKILLS_DIR = join(homedir(), '.claude', 'skills');

/**
 * Parse a single skill from its directory
 *
 * Reads SKILL.md, extracts metadata, discovers templates and reference files.
 *
 * @param skillPath - Absolute path to skill directory
 * @param options - Parse options
 * @returns Parsed ClaudeSkill object
 * @throws SkillParseError if SKILL.md missing or malformed
 * @throws SkillValidationError if validation enabled and fails
 */
export async function parseSkill(
  skillPath: string,
  options: ParseOptions = {}
): Promise<ClaudeSkill> {
  const { validate = true } = options;

  // Construct path to SKILL.md
  const skillFilePath = join(skillPath, 'SKILL.md');

  // Check if SKILL.md exists
  if (!(await pathExists(skillFilePath))) {
    throw new SkillParseError(
      `SKILL.md not found in ${skillPath}`,
      skillPath
    );
  }

  // Parse frontmatter and content
  const parsed = await parseFrontmatter(skillFilePath);

  // Extract required fields
  const name = parsed.data.name;
  const description = parsed.data.description;

  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    throw new SkillParseError(
      `Missing or invalid 'name' field in ${skillFilePath}`,
      skillPath
    );
  }

  if (
    !description ||
    typeof description !== 'string' ||
    description.trim().length === 0
  ) {
    throw new SkillParseError(
      `Missing or invalid 'description' field in ${skillFilePath}`,
      skillPath
    );
  }

  // Extract keywords and "use when" from description
  const keywords = extractKeywords(description);
  const useWhen = extractUseWhen(description);

  // Build metadata object
  const metadata: SkillMetadata = {
    name: name.trim(),
    description: description.trim(),
    keywords,
    useWhen,
    // Include any additional frontmatter fields
    ...parsed.data,
  };

  // Discover template files
  const templatesDir = join(skillPath, 'templates');
  const templates = (await pathExists(templatesDir))
    ? await listFilesRecursive(templatesDir, skillPath)
    : undefined;

  // Discover reference files
  const referenceDir = join(skillPath, 'reference');
  const referenceFiles = (await pathExists(referenceDir))
    ? await listFilesRecursive(referenceDir, skillPath)
    : undefined;

  // Check for README.md
  const readmePath = join(skillPath, 'README.md');
  const readmeExists = await pathExists(readmePath);

  // Build skill object
  const skill: ClaudeSkill = {
    metadata,
    content: parsed.content,
    path: skillPath,
    skillFilePath,
    templates,
    referenceFiles,
    readmeExists,
  };

  // Validate if requested
  if (validate) {
    const validationResult = await validateSkill(skill);
    if (!validationResult.valid) {
      throw new SkillValidationError(
        `Skill validation failed for ${skillPath}`,
        skillPath,
        validationResult.errors
      );
    }
  }

  return skill;
}

/**
 * Validate skill structure and content
 *
 * Checks required fields, file existence, and reports warnings for missing optional elements.
 *
 * @param skill - Parsed skill object
 * @returns Validation result with errors and warnings
 */
export async function validateSkill(
  skill: ClaudeSkill
): Promise<ValidationResult> {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required fields
  if (!skill.metadata.name || skill.metadata.name.trim().length === 0) {
    errors.push('Missing or empty name field');
  }

  if (
    !skill.metadata.description ||
    skill.metadata.description.trim().length === 0
  ) {
    errors.push('Missing or empty description field');
  }

  // Check SKILL.md file exists
  if (!(await pathExists(skill.skillFilePath))) {
    errors.push(`SKILL.md file not found at ${skill.skillFilePath}`);
  }

  // Validate template file paths
  if (skill.templates) {
    for (const templatePath of skill.templates) {
      const fullPath = join(skill.path, templatePath);
      if (!(await pathExists(fullPath))) {
        errors.push(`Template file not found: ${templatePath}`);
      }
    }
  }

  // Validate reference file paths
  if (skill.referenceFiles) {
    for (const refPath of skill.referenceFiles) {
      const fullPath = join(skill.path, refPath);
      if (!(await pathExists(fullPath))) {
        errors.push(`Reference file not found: ${refPath}`);
      }
    }
  }

  // Warnings for missing optional elements
  if (!skill.metadata.keywords || skill.metadata.keywords.length === 0) {
    warnings.push('No keywords found in description');
  }

  if (!skill.metadata.useWhen) {
    warnings.push('No "Use when:" section found in description');
  }

  if (!skill.templates || skill.templates.length === 0) {
    warnings.push('No template files found');
  }

  if (!skill.readmeExists) {
    warnings.push('No README.md found');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Find and parse all skills in a directory
 *
 * Scans skillsDir for subdirectories containing SKILL.md files.
 * Skips invalid skills and continues processing.
 *
 * @param skillsDir - Path to skills directory (default: ~/.claude/skills/)
 * @param options - Parse options
 * @returns Array of successfully parsed skills
 */
export async function findAllSkills(
  skillsDir: string = DEFAULT_SKILLS_DIR,
  options: ParseOptions = {}
): Promise<ClaudeSkill[]> {
  const skills: ClaudeSkill[] = [];

  // Check if skills directory exists
  if (!(await pathExists(skillsDir))) {
    console.warn(`Skills directory not found: ${skillsDir}`);
    return [];
  }

  // List all subdirectories
  const entries = await readdir(skillsDir);

  for (const entry of entries) {
    const entryPath = join(skillsDir, entry);

    // Check if it's a directory (skip if stat fails - broken symlinks, etc.)
    try {
      const stats = await stat(entryPath);
      if (!stats.isDirectory()) {
        continue;
      }
    } catch (error) {
      console.warn(`Skipping ${entry}: Unable to stat (${(error as Error).message})`);
      continue;
    }

    // Check for SKILL.md
    const skillFilePath = join(entryPath, 'SKILL.md');
    if (!(await pathExists(skillFilePath))) {
      console.warn(`Skipping ${entry}: No SKILL.md found`);
      continue;
    }

    // Try to parse the skill
    try {
      const skill = await parseSkill(entryPath, options);
      skills.push(skill);
    } catch (error) {
      // Log error but continue processing other skills
      if (error instanceof SkillParseError) {
        console.error(`Failed to parse skill ${entry}: ${error.message}`);
      } else if (error instanceof SkillValidationError) {
        console.error(
          `Validation failed for skill ${entry}: ${error.errors.join(', ')}`
        );
      } else {
        console.error(`Unexpected error parsing skill ${entry}:`, error);
      }
    }
  }

  return skills;
}

/**
 * List all files in a directory recursively
 *
 * Returns paths relative to the baseDir.
 *
 * @param dir - Directory to scan
 * @param baseDir - Base directory for relative paths
 * @returns Array of relative file paths
 */
async function listFilesRecursive(
  dir: string,
  baseDir: string
): Promise<string[]> {
  const files: string[] = [];

  const entries = await readdir(dir);

  for (const entry of entries) {
    const entryPath = join(dir, entry);
    const stats = await stat(entryPath);

    if (stats.isDirectory()) {
      // Recurse into subdirectories
      const subFiles = await listFilesRecursive(entryPath, baseDir);
      files.push(...subFiles);
    } else {
      // Add file with relative path
      const relativePath = relative(baseDir, entryPath);
      files.push(relativePath);
    }
  }

  return files;
}

/**
 * Get skill by name
 *
 * Convenience function to find a skill by its name.
 *
 * @param skillName - Name of skill to find
 * @param skillsDir - Skills directory (default: ~/.claude/skills/)
 * @returns Parsed skill or undefined if not found
 */
export async function getSkillByName(
  skillName: string,
  skillsDir: string = DEFAULT_SKILLS_DIR
): Promise<ClaudeSkill | undefined> {
  const skills = await findAllSkills(skillsDir, { validate: false });
  return skills.find(
    (skill) => skill.metadata.name.toLowerCase() === skillName.toLowerCase()
  );
}
