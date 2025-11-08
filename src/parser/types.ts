/**
 * TypeScript Type Definitions for Claude Code Skill Parser
 *
 * Defines the structure of parsed skills from ~/.claude/skills/ directory.
 * Each skill consists of:
 * - YAML frontmatter (metadata)
 * - Markdown content (documentation)
 * - Optional template files
 * - Optional reference documentation
 */

/**
 * Complete parsed skill structure from SKILL.md file
 */
export interface ClaudeSkill {
  // Metadata from YAML frontmatter
  metadata: SkillMetadata;

  // Markdown content (everything after frontmatter)
  content: string;

  // File paths
  path: string; // Absolute path to skill directory
  skillFilePath: string; // Absolute path to SKILL.md

  // Optional components
  templates?: string[]; // Relative paths to template files (from skill root)
  referenceFiles?: string[]; // Relative paths to reference docs (from skill root)
  readmeExists: boolean; // Whether README.md exists
}

/**
 * YAML frontmatter structure
 *
 * Required fields: name, description
 * Description often contains structured sections:
 * - "Use when:" - Trigger conditions
 * - "Keywords:" - Search terms (comma-separated)
 */
export interface SkillMetadata {
  // Required fields (must be present in frontmatter)
  name: string;
  description: string;

  // Extracted/derived fields (parsed from description text)
  keywords: string[]; // Parsed from "Keywords:" section
  useWhen?: string; // Parsed from "Use when:" section

  // Extensible for additional frontmatter fields
  [key: string]: any;
}

/**
 * Result of parsing frontmatter from markdown file
 *
 * Output from gray-matter library
 */
export interface ParsedFrontmatter {
  data: Record<string, any>; // YAML object (frontmatter)
  content: string; // Markdown content after frontmatter
}

/**
 * Validation result for skill structure
 *
 * Used by validateSkill() to report issues
 */
export interface ValidationResult {
  valid: boolean; // Overall validation status
  errors: string[]; // Critical errors (missing required fields, etc.)
  warnings: string[]; // Non-critical issues (missing keywords, etc.)
}

/**
 * Options for parsing skills
 */
export interface ParseOptions {
  // Whether to validate the skill after parsing
  validate?: boolean;

  // Whether to include template file contents (not just paths)
  includeTemplateContents?: boolean;

  // Base directory for skills (default: ~/.claude/skills/)
  skillsDir?: string;
}

/**
 * Error thrown when skill parsing fails
 */
export class SkillParseError extends Error {
  constructor(
    message: string,
    public skillPath: string,
    public cause?: Error
  ) {
    super(message);
    this.name = 'SkillParseError';
  }
}

/**
 * Error thrown when skill validation fails
 */
export class SkillValidationError extends Error {
  constructor(
    message: string,
    public skillPath: string,
    public errors: string[]
  ) {
    super(message);
    this.name = 'SkillValidationError';
  }
}
