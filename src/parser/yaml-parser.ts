/**
 * YAML Frontmatter Parser
 *
 * Wraps gray-matter library to extract YAML frontmatter from markdown files.
 * Provides error handling and validation for skill files.
 */

import matter from 'gray-matter';
import { readFile } from 'fs-extra';
import { ParsedFrontmatter, SkillParseError } from './types.js';

/**
 * Parse YAML frontmatter from a markdown file
 *
 * @param filePath - Absolute path to markdown file
 * @returns Parsed frontmatter data and content
 * @throws SkillParseError if file can't be read or YAML is malformed
 */
export async function parseFrontmatter(
  filePath: string
): Promise<ParsedFrontmatter> {
  try {
    // Read file contents
    const fileContent = await readFile(filePath, 'utf-8');

    // Parse with gray-matter
    const parsed = matter(fileContent);

    return {
      data: parsed.data,
      content: parsed.content,
    };
  } catch (error) {
    // Distinguish between file read errors and YAML parse errors
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new SkillParseError(
        `SKILL.md file not found: ${filePath}`,
        filePath,
        error as Error
      );
    }

    // Check if it's a YAML parsing error from gray-matter
    if (error instanceof Error && error.message.includes('can not read')) {
      throw new SkillParseError(
        `Malformed YAML frontmatter in ${filePath}: ${error.message}`,
        filePath,
        error
      );
    }

    // Generic error
    throw new SkillParseError(
      `Failed to parse ${filePath}: ${error instanceof Error ? error.message : String(error)}`,
      filePath,
      error instanceof Error ? error : undefined
    );
  }
}

/**
 * Extract keywords from description text
 *
 * Looks for "Keywords:" line in description and extracts comma-separated values.
 * Example: "Keywords: react, typescript, vite" → ["react", "typescript", "vite"]
 *
 * @param description - Full description text
 * @returns Array of keywords (empty if not found)
 */
export function extractKeywords(description: string): string[] {
  const keywordsMatch = description.match(/Keywords:\s*(.+)/i);
  if (!keywordsMatch) {
    return [];
  }

  // Split by comma and trim whitespace
  return keywordsMatch[1]
    .split(',')
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword.length > 0);
}

/**
 * Extract "Use when:" section from description
 *
 * Extracts text after "Use when:" up to next section or end of paragraph.
 *
 * @param description - Full description text
 * @returns "Use when" text, or undefined if not found
 */
export function extractUseWhen(description: string): string | undefined {
  const useWhenMatch = description.match(/Use when:\s*(.+?)(?:\n\n|\nKeywords:|\n[A-Z]|$)/is);
  if (!useWhenMatch) {
    return undefined;
  }

  return useWhenMatch[1].trim();
}
