/**
 * Sync Index Command
 *
 * Update existing skills index (alias to generate-index)
 * Ensures index stays up-to-date when skills are added/removed/modified
 */

import { generateIndexCommand, GenerateIndexOptions } from './generate-index.js';

/**
 * Execute the sync-index command
 *
 * This is essentially an alias to generate-index, as regenerating
 * the entire index is the most reliable way to ensure it's up-to-date.
 *
 * @param options - Command options
 */
export async function syncIndexCommand(
  options: GenerateIndexOptions = {}
): Promise<void> {
  // Simply call generate-index command
  await generateIndexCommand(options);
}
