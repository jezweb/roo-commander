+++
id = "PLAN-CLI-BUILD-V1"
title = "Plan: Build `roocommander` CLI Tool"
status = "active"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "cli", "npm", "roocommander", "build"]
related_docs = [
    ".roo/commander/docs/ideas/cli-build-npm/01-cli-project-setup.md",
    ".roo/commander/docs/ideas/cli-build-npm/02-cli-core-structure.md",
    ".roo/commander/docs/ideas/cli-build-npm/03-cli-cmd-init.md",
    ".roo/commander/docs/ideas/cli-build-npm/04-cli-cmd-install-mcp.md",
    ".roo/commander/docs/ideas/cli-build-npm/05-cli-build-test.md",
    "BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/docs/ideas/cli-build-npm/06-cli-docs-publish.md"
]
objective = "Outline the phases and sub-tasks required to develop, build, and prepare the `roocommander` CLI tool for npm publishing, using Roo Commander itself for implementation where possible."
+++

# Plan: Build `roocommander` CLI Tool

This document outlines the high-level plan for building the `roocommander` CLI tool. Each major phase has a dedicated planning document detailing the specific steps.

**Assumed Project Location:** The CLI tool will be developed within a new subdirectory of the current workspace, e.g., `cli/`.

**Phases:**

1.  **Project Setup:** Initialize the Node.js project structure, `package.json`, TypeScript configuration, and essential directories.
    *   **Details:** See `[.roo/commander/docs/ideas/cli-build-npm/01-cli-project-setup.md](.roo/commander/docs/ideas/cli-build-npm/01-cli-project-setup.md)`

2.  **Core CLI Structure:** Implement the basic CLI entry point, argument parsing, and command registration framework using `commander.js`. Install core dependencies.
    *   **Details:** See `[.roo/commander/docs/ideas/cli-build-npm/02-cli-core-structure.md](.roo/commander/docs/ideas/cli-build-npm/02-cli-core-structure.md)`

3.  **Implement `init` Command:** Develop the logic for the `roo init` command to copy the boilerplate `.roo`/`.ruru` configuration files into a user's project.
    *   **Details:** See `[.roo/commander/docs/ideas/cli-build-npm/03-cli-cmd-init.md](.roo/commander/docs/ideas/cli-build-npm/03-cli-cmd-init.md)`

4.  **Implement `install-mcp` Command:** Develop the interactive logic for installing and configuring specific MCP servers (starting with Vertex AI). This involves cloning, dependency installation, prompting, `.env` creation, and `.roo/mcp.json` modification.
    *   **Details:** See `[.roo/commander/docs/ideas/cli-build-npm/04-cli-cmd-install-mcp.md](.roo/commander/docs/ideas/cli-build-npm/04-cli-cmd-install-mcp.md)`

5.  **Build & Basic Testing Setup:** Configure build scripts in `package.json` and outline the approach for future testing.
    *   **Details:** See `[.roo/commander/docs/ideas/cli-build-npm/05-cli-build-test.md](.roo/commander/docs/ideas/cli-build-npm/05-cli-build-test.md)`

6.  **Documentation & Publishing Prep:** Create the README for the CLI tool and outline the steps required for publishing to npm.
    *   **Details:** See `BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/docs/ideas/cli-build-npm/06-cli-docs-publish.md`

**Execution:**

Roo Commander will execute the steps detailed in each sub-plan sequentially, delegating coding tasks to appropriate modes (`util-senior-dev`, `util-typescript`) and executing commands (`execute_command`) as needed. Human review and potential intervention will be required, especially for complex logic and testing.