#!/usr/bin/env node

/**
 * Roo Commander v9 - CLI Entry Point
 *
 * Bridges Claude Code skills to Roo Code by reading from ~/.claude/skills/
 * and providing commands to list, read, search, and integrate skills.
 */

import { cli, handleNoCommand } from './cli.js';

// Handle no command case with proper async/await
(async () => {
  if (process.argv.length === 2) {
    await handleNoCommand();
  } else {
    // Normal command parsing
    cli.parse(process.argv);
  }
})().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
