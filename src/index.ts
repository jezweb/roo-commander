#!/usr/bin/env node

/**
 * Roo Commander v9 - CLI Entry Point
 *
 * Bridges Claude Code skills to Roo Code by reading from ~/.claude/skills/
 * and providing commands to list, read, search, and integrate skills.
 */

import { cli } from './cli.js';

// Execute CLI
cli.parse(process.argv);
