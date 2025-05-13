+++
id = "PLAN-CLI-BUILD-TEST-V1"
title = "CLI Build Plan: Phase 5 - Build & Basic Testing Setup"
status = "draft" # Generated as draft since original was missing
created_date = "2025-05-03"
updated_date = "2025-05-03"
version = "1.0"
tags = ["plan", "cli", "build", "test", "jest", "typescript", "npm"]
related_docs = [
    ".ruru/docs/whitepapers/cli-build-npm/00-cli-build-plan.md",
    ".ruru/docs/whitepapers/cli-build-npm/04-cli-cmd-install-mcp.md"
]
objective = "Configure build scripts in `package.json`, install basic testing dependencies (Jest), create initial test configuration, and add a placeholder test."
+++

# CLI Build Plan: Phase 5 - Build & Basic Testing Setup

**Objective:** Finalize build scripts and set up the foundation for testing using Jest.

**Target Files:** `cli/package.json`, `cli/jest.config.js` (New file), `cli/src/index.test.ts` (New file)

**Procedure:**

1.  **Refine Build Scripts (Delegate to `prime-dev`):**
    *   Tool: `new_task`
    *   Mode: `prime-dev`
    *   Message: "Modify `cli/package.json`.
        *   Add a `prepublishOnly` script: `"prepublishOnly": "npm run build"`. This ensures the project is built before publishing.
        *   Verify the existing `build`, `start`, and `dev` scripts are appropriate.
        *   Update the `test` script placeholder to: `"test": "jest"`.
        *   Ensure JSON remains valid."
    *   Action: Delegate task. Await completion. Review changes.

2.  **Install Testing Dependencies (Coordinator Task):**
    *   Tool: `execute_command`
    *   Command: `npm install --save-dev jest ts-jest @types/jest`
    *   CWD: `cli/`
    *   Action: Execute command. Await confirmation. Handle errors.

3.  **Create Jest Configuration (Delegate to `util-typescript`):**
    *   Tool: `new_task`
    *   Mode: `util-typescript`
    *   Message: "Create a new file `cli/jest.config.js`. Add the following basic Jest configuration for TypeScript:
        ```javascript
        /** @type {import('ts-jest').JestConfigWithTsJest} */
        module.exports = {
          preset: 'ts-jest',
          testEnvironment: 'node',
          roots: ['<rootDir>/src'], // Look for tests in the src directory
          testMatch: [ // Pattern for test files
            '**/__tests__/**/*.+(ts|tsx|js)',
            '**/?(*.)+(spec|test).+(ts|tsx|js)'
          ],
          transform: { // Use ts-jest to transform TypeScript files
            '^.+\\.(ts|tsx)$': ['ts-jest', {
              tsconfig: 'tsconfig.json' // Specify the tsconfig file
            }]
          },
        };
        ```"
    *   Action: Delegate task. Await completion. Review file.

4.  **Create Placeholder Test File (Delegate to `util-typescript`):**
    *   Tool: `new_task`
    *   Mode: `util-typescript`
    *   Message: "Create a new file `cli/src/index.test.ts`. Add a simple placeholder test case:
        ```typescript
        describe('Initial Test Suite', () => {
          it('should pass', () => {
            expect(true).toBe(true);
          });
        });
        ```"
    *   Action: Delegate task. Await completion. Review file.

5.  **Run Build & Test Script (Coordinator Task):**
    *   Tool: `execute_command`
    *   Command: `npm run build && npm test` (Using `&&` for Linux/macOS as per Rule 05)
    *   CWD: `cli/`
    *   Action: Execute command. Verify both build and the placeholder test pass successfully (check exit code and output). If errors occur, delegate fixes.

**Completion:** Proceed to Phase 6 (`06-cli-docs-publish.md`).