+++
# --- Basic Metadata ---
id = "STANDARDS-DIRECTORY-README-V1"
title = "Index: Roo Commander Workspace Standards"
context_type = "documentation_index"
scope = "Provides an overview and index of all standard documents governing the development, structure, and operation of the Roo Commander system."
target_audience = ["all"] # Developers, AI Modes, System Architects
granularity = "index"
status = "active"
last_updated = "20250515"
version = "1.0"
tags = ["standards", "index", "readme", "documentation", "governance", "roo-commander"]
related_context = [
    ".roo/commander/docs/README.md", # Parent documentation index
    ".roo/rules/" # Location of formal workspace rules that these standards often explain
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md" # Assuming a generic standard doc template for this index
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Quarterly"
+++

# Index: Roo Commander Workspace Standards

## 1. Purpose of this Directory

This directory, `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`, contains all the definitive **Standard Documents** for the Roo Commander system. These documents outline the conventions, formats, best practices, and operational protocols that **MUST** or **SHOULD** be followed by human developers and AI modes to ensure consistency, quality, maintainability, and interoperability within the workspace.

These standards are critical for:
*   Guiding the development of new modes, rules, templates, and KBs.
*   Ensuring reliable interaction between different system components.
*   Facilitating easier onboarding for new developers.
*   Enabling effective automation and AI-driven development/maintenance tasks.

Many of these standards provide human-readable explanations for the formal workspace rules found in `[.roo/rules/](.roo/rules/)`. All path references within these documents and throughout the workspace **MUST** adhere to the workspace-root-relative path convention (starting with `.roo/`).

## 2. Available Standard Documents

The following standard documents are defined for the Roo Commander system:

*   **`[00-directory-structure.md](./00-directory-structure.md)`**
    *   **Title:** Standard: Roo Commander Workspace Directory Structure
    *   **Purpose:** Overview and explanation of the standard directory structure for the Roo Commander workspace, anchored at the `.roo/` root.

*   **`[01-naming-conventions.md](./01-naming-conventions.md)`**
    *   **Title:** Standard: Naming, Path Referencing, and Content Conventions
    *   **Purpose:** Defines all standard naming conventions for files, folders, TOML IDs; the mandatory convention for referencing file paths; and conventions for tags, status fields, placeholders, and emoji usage.

*   **`[02-toml-md-document-format.md](./02-toml-md-document-format.md)`**
    *   **Title:** Standard: TOML+Markdown Document Format & Conventions
    *   **Purpose:** Defines the workspace-wide standard for the structure, syntax, data types, and interaction patterns for all documents combining TOML frontmatter with Markdown content. Explains `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)`.

*   **`[03-mdtm-task-files.md](./03-mdtm-task-files.md)`**
    *   **Title:** Standard: MDTM Task Files - Structure & Usage
    *   **Purpose:** Explains the standard structure, content, and lifecycle of Markdown-Driven Task Management (MDTM) task files. Explains `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`.

*   **`[04-session-logs-and-artifacts.md](./04-session-logs-and-artifacts.md)`**
    *   **Title:** Standard: Session Logs & Artifact Management
    *   **Purpose:** Explains the standard structure, content, and lifecycle for Roo Commander Session Logs (`session_log.md`) and their associated Session Artifacts (`artifacts/` directory). Explains `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`.

*   **`[05-kb-structuring-best-practices.md](./05-kb-structuring-best-practices.md)`**
    *   **Title:** Standard: Knowledge Base (KB) Structuring Best Practices
    *   **Purpose:** Defines best practices for structuring and populating AI Mode Knowledge Bases (KBs).

*   **`[06-documentation-style-guide.md](./06-documentation-style-guide.md)`**
    *   **Title:** Standard: Documentation Style Guide
    *   **Purpose:** Defines the writing style, tone, voice, formatting conventions, referencing standards, and emoji usage for all human-readable documentation.

*   **`[07-template-authoring-guide.md](./07-template-authoring-guide.md)`**
    *   **Title:** Standard: Template Authoring Guide
    *   **Purpose:** Provides guidelines and best practices for creating new TOML+Markdown templates and their accompanying schema documentation (`.README.md` files).

*   **`[08-mdtm-task-checklist-authoring-best-practices.md](./08-mdtm-task-checklist-authoring-best-practices.md)`**
    *   **Title:** Standard: MDTM Task Checklist Authoring Best Practices
    *   **Purpose:** Provides best practices for authoring effective and actionable checklist items within MDTM task files, particularly for AI modes.

*   **`[09-error-handling-and-reporting-standard.md](./09-error-handling-and-reporting-standard.md)`**
    *   **Title:** Standard: AI Mode Error Handling and Reporting
    *   **Purpose:** Defines workspace-wide standards for how AI modes should identify, handle, log, and report errors.

*   **`[10-roo-commander-version-naming-convention.md](./10-roo-commander-version-naming-convention.md)`**
    *   **Title:** Standard: Roo Commander Version Naming Convention
    *   **Purpose:** Defines the versioning scheme and naming convention for releases of the Roo Commander mode and system.

*   **`[11-git-workflow-and-branching-strategy.md](./11-git-workflow-and-branching-strategy.md)`**
    *   **Title:** Standard: Git Workflow and Branching Strategy
    *   **Purpose:** Defines the standard Git workflow, branching model, commit message conventions, and Pull Request (PR) process for the development of the Roo Commander system itself.

*   **`[12-security-best-practices-for-mode-development.md](./12-security-best-practices-for-mode-development.md)`**
    *   **Title:** Standard: Security Best Practices for AI Mode Development
    *   **Purpose:** Defines security best practices for developers creating AI modes, especially those interacting with file systems, external APIs, or executing commands.

*   **`[13-inter-mode-communication-protocol.md](./13-inter-mode-communication-protocol.md)`**
    *   **Title:** Standard: Inter-Mode Communication Protocol (Beyond MDTM)
    *   **Purpose:** Outlines conceptual guidelines for direct or specialized communication between AI modes, supplementing MDTM. (Status: `draft`)

*   **`[20-standard-compliance-checklist.md](./20-standard-compliance-checklist.md)`**
    *   **Title:** Workspace Standards Compliance Checklist
    *   **Purpose:** Provides a checklist to verify adherence to established workspace standards when creating or reviewing components.

## 3. Using These Standards

All developers and AI modes contributing to or operating within the Roo Commander system are expected to be familiar with and adhere to these standards. When a new type of document, mode, or process is being designed, these standards should be consulted first.

## 4. Proposing New Standards or Changes

Proposals for new standards or significant changes to existing ones should be discussed with the Core Architecture Team (or designated maintainers) and may involve creating an Architecture Decision Record (ADR) or a formal proposal document.