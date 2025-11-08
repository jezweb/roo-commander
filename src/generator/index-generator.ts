/**
 * Skills Index Generator
 *
 * Generates markdown index files for Roo Code custom instructions
 * Categorizes skills by domain and formats them for easy reference
 */

import { ClaudeSkill } from '../parser/types.js';

/**
 * Skill categories with emoji icons
 */
const CATEGORIES = {
  'AI & LLM Integration': '🤖',
  'Cloudflare Platform': '☁️',
  'Frontend Stack': '⚛️',
  'Authentication': '🔐',
  'Forms & Validation': '📝',
  'State Management': '🗄️',
  'Data & Scraping': '📊',
  'Content Management': '📄',
  'Testing & Quality': '🧪',
  'Project Planning': '📋',
  'Other': '📦',
};

/**
 * Generate skills index markdown
 *
 * @param skills - Array of parsed skills
 * @returns Markdown content for index file
 */
export function generateSkillsIndex(skills: ClaudeSkill[]): string {
  // Categorize skills
  const categorized = categorizeSkills(skills);

  // Build markdown
  let markdown = '# Skills Index\n\n';
  markdown += '> Auto-generated skills reference for Roo Code\n';
  markdown += `> Total Skills: ${skills.length}\n\n`;
  markdown += '---\n\n';

  // Add each category
  for (const [category, categorySkills] of Object.entries(categorized)) {
    if (categorySkills.length === 0) continue;

    const emoji = CATEGORIES[category as keyof typeof CATEGORIES] || '📦';
    markdown += `## ${emoji} ${category}\n\n`;

    // Sort skills alphabetically within category
    categorySkills.sort((a, b) =>
      a.metadata.name.localeCompare(b.metadata.name, undefined, {
        sensitivity: 'base',
      })
    );

    // Add each skill
    for (const skill of categorySkills) {
      markdown += formatSkillEntry(skill);
    }

    markdown += '\n';
  }

  // Add usage instructions
  markdown += '---\n\n';
  markdown += generateUsageInstructions();

  return markdown;
}

/**
 * Categorize skills by domain
 *
 * @param skills - Array of skills to categorize
 * @returns Object mapping category names to skills
 */
function categorizeSkills(
  skills: ClaudeSkill[]
): Record<string, ClaudeSkill[]> {
  const categories: Record<string, ClaudeSkill[]> = {};

  // Initialize all categories
  for (const category of Object.keys(CATEGORIES)) {
    categories[category] = [];
  }

  // Categorize each skill
  for (const skill of skills) {
    const category = determineCategory(skill);
    categories[category].push(skill);
  }

  return categories;
}

/**
 * Determine which category a skill belongs to
 *
 * @param skill - Skill to categorize
 * @returns Category name
 */
function determineCategory(skill: ClaudeSkill): string {
  const name = skill.metadata.name.toLowerCase();
  const keywords = skill.metadata.keywords.map((k) => k.toLowerCase());
  const description = skill.metadata.description.toLowerCase();

  // AI & LLM Integration
  if (
    name.includes('openai') ||
    name.includes('claude') ||
    name.includes('gemini') ||
    name.includes('ai-sdk') ||
    name.includes('elevenlabs') ||
    name.includes('agents') ||
    keywords.some((k) => k.includes('ai') || k.includes('llm') || k.includes('openai') || k.includes('claude'))
  ) {
    return 'AI & LLM Integration';
  }

  // Cloudflare Platform
  if (
    name.includes('cloudflare') ||
    name.includes('workers') ||
    name.includes('wrangler') ||
    keywords.some((k) => k.includes('cloudflare') || k.includes('workers'))
  ) {
    return 'Cloudflare Platform';
  }

  // Authentication
  if (
    name.includes('auth') ||
    name.includes('clerk') ||
    keywords.some((k) => k.includes('auth') || k.includes('authentication'))
  ) {
    return 'Authentication';
  }

  // Frontend Stack
  if (
    name.includes('react') ||
    name.includes('nextjs') ||
    name.includes('tailwind') ||
    name.includes('shadcn') ||
    name.includes('vite') ||
    name.includes('base-ui') ||
    name.includes('tanstack') ||
    keywords.some((k) => k.includes('react') || k.includes('nextjs') || k.includes('tailwind') || k.includes('shadcn'))
  ) {
    return 'Frontend Stack';
  }

  // Forms & Validation
  if (
    name.includes('form') ||
    name.includes('zod') ||
    name.includes('validation') ||
    keywords.some((k) => k.includes('form') || k.includes('validation') || k.includes('zod'))
  ) {
    return 'Forms & Validation';
  }

  // State Management
  if (
    name.includes('zustand') ||
    name.includes('query') ||
    name.includes('state') ||
    keywords.some((k) => k.includes('state') || k.includes('zustand') || k.includes('tanstack query'))
  ) {
    return 'State Management';
  }

  // Data & Scraping
  if (
    name.includes('firecrawl') ||
    name.includes('scraper') ||
    name.includes('drizzle') ||
    keywords.some((k) => k.includes('scraping') || k.includes('orm') || k.includes('database'))
  ) {
    return 'Data & Scraping';
  }

  // Content Management
  if (
    name.includes('cms') ||
    name.includes('tina') ||
    name.includes('sveltia') ||
    name.includes('hugo') ||
    name.includes('content-collections') ||
    keywords.some((k) => k.includes('cms') || k.includes('content management'))
  ) {
    return 'Content Management';
  }

  // Testing & Quality
  if (
    name.includes('test') ||
    name.includes('review') ||
    keywords.some((k) => k.includes('test') || k.includes('testing') || k.includes('quality'))
  ) {
    return 'Testing & Quality';
  }

  // Project Planning
  if (
    name.includes('planning') ||
    name.includes('project') ||
    keywords.some((k) => k.includes('planning') || k.includes('project management'))
  ) {
    return 'Project Planning';
  }

  // Default to Other
  return 'Other';
}

/**
 * Format a single skill entry
 *
 * @param skill - Skill to format
 * @returns Markdown string for skill entry
 */
function formatSkillEntry(skill: ClaudeSkill): string {
  let entry = `- **${skill.metadata.name}**: `;

  // Add description (first line only, truncated)
  const description = getShortDescription(skill.metadata.description);
  entry += description;

  // Add keywords if available
  if (skill.metadata.keywords && skill.metadata.keywords.length > 0) {
    const keywords = skill.metadata.keywords.slice(0, 5).join(', ');
    const moreCount = skill.metadata.keywords.length - 5;
    const moreText = moreCount > 0 ? ` (+${moreCount} more)` : '';
    entry += `\n  - *Keywords: ${keywords}${moreText}*`;
  }

  // Add templates indicator
  if (skill.templates && skill.templates.length > 0) {
    entry += `\n  - *Templates: ${skill.templates.length} files available*`;
  }

  entry += '\n\n';

  return entry;
}

/**
 * Get short description (first sentence or first line)
 *
 * @param description - Full description
 * @returns Shortened description
 */
function getShortDescription(description: string): string {
  // Get first line
  const firstLine = description.split('\n')[0].trim();

  // Truncate at sentence boundary if too long
  if (firstLine.length > 120) {
    const sentences = firstLine.match(/[^.!?]+[.!?]+/g);
    if (sentences && sentences.length > 0) {
      return sentences[0].trim();
    }
    return firstLine.substring(0, 120) + '...';
  }

  return firstLine;
}

/**
 * Generate usage instructions section
 *
 * @returns Markdown for usage instructions
 */
function generateUsageInstructions(): string {
  let instructions = '## 📖 Usage Instructions\n\n';

  instructions += '### Loading Skills\n\n';
  instructions += 'Before implementing features from scratch, check if a skill exists:\n\n';
  instructions += '```bash\n';
  instructions += '# List all available skills\n';
  instructions += 'roo-commander list\n\n';
  instructions += '# Search for specific skills\n';
  instructions += 'roo-commander search <keyword>\n\n';
  instructions += '# Read a specific skill\n';
  instructions += 'roo-commander read <skill-name>\n';
  instructions += '```\n\n';

  instructions += '### When to Use Skills\n\n';
  instructions += '- **Before starting new features**: Check if a skill covers it\n';
  instructions += '- **When encountering errors**: Search for relevant skills\n';
  instructions += '- **During architecture planning**: Review related skills\n';
  instructions += '- **For best practices**: Skills include production-tested patterns\n\n';

  instructions += '### Skill Benefits\n\n';
  instructions += '- ✅ **Prevents known errors** - Skills include fixes for common issues\n';
  instructions += '- ✅ **Saves tokens** - Loads context only when needed\n';
  instructions += '- ✅ **Official patterns** - Based on current documentation\n';
  instructions += '- ✅ **Templates included** - Ready-to-use code files\n\n';

  instructions += '---\n\n';
  instructions += '*This index is auto-generated by roo-commander. Run `roo-commander sync-index` to update.*\n';

  return instructions;
}
