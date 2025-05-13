+++
id = "PLAN-RELEASE-NOTES-TRIGGERS-V1"
title = "Planning: Release Notes Generation Triggering Mechanisms"
context_type = "planning"
scope = "Analyzes options for initiating the release notes generation workflow"
target_audience = ["prime-coordinator", "roo-commander", "core-architect", "lead-devops"]
granularity = "analysis"
status = "draft"
last_updated = "2025-04-25" # Use current date
tags = ["planning", "release-notes", "changelog", "trigger", "automation", "workflow"]
related_context = [
    "[.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-WHITEPAPER.md](.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-WHITEPAPER.md)",
    "[.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-MCP-WORKFLOW.md](.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-MCP-WORKFLOW.md)",
    "[.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-LOCAL-WORKFLOW.md](.roo/commander/docs/ideas/github-deeper-integration/PLAN-RELEASE-NOTES-LOCAL-WORKFLOW.md)"
    ]
template_schema_doc = "BROKEN_LINK_NEEDS_MANUAL_REVIEW_.roo/commander/templates/toml-md/17_feature_proposal.README.md" # Using feature proposal as a base
+++

# Planning: Release Notes Generation Triggering Mechanisms

This document explores potential ways to initiate the automated release notes generation workflow (either Option A - MCP or Option B - Local File).

## 1. Manual Trigger (User Command)

*   **Concept:** The user explicitly tells `roo-commander` (or another designated mode) to generate release notes for a specific version.
    *   Example: "Generate release notes for v1.3.0 based on changes since v1.2.0."
*   **Pros:**
    *   Simple to implement initially.
    *   Gives the user full control over when notes are generated.
    *   Allows specifying the exact tag range.
*   **Cons:**
    *   Requires manual intervention for every release.
    *   Potential for inconsistency if not done regularly.
*   **Implementation:** Requires `roo-commander` to parse the request, extract tags, and initiate the chosen release notes workflow (MCP or Local).

## 2. Semi-Automated Trigger (Part of Broader Workflow)

*   **Concept:** The release notes generation is a step within a larger, potentially user-initiated workflow, such as a "Prepare Release" or "Deploy" workflow.
    *   Example: A `WF-PREPARE-RELEASE.md` workflow might include steps for:
        1.  Running final tests.
        2.  Creating the Git tag (via `dev-git`).
        3.  Generating release notes (triggering the dedicated workflow).
        4.  (If using MCP) Creating the draft GitHub Release.
        5.  (If local) Committing the generated release notes file.
*   **Pros:**
    *   Integrates naturally into the release process.
    *   Ensures notes are generated at the appropriate time (e.g., after tagging).
    *   Still allows user control over initiating the overall release process.
*   **Cons:**
    *   Requires defining and implementing the broader release workflow.
*   **Implementation:** Modify existing or create new `.ruru/workflows/` files. The workflow executor (`roo-commander` or `lead-devops`) would coordinate the steps, including calling the release notes generation sub-workflow.

## 3. Fully Automated Trigger (Post-Tag Hook - Advanced)

*   **Concept:** Automatically trigger the release notes generation immediately after a new version tag (matching `vX.Y.Z` pattern) is pushed to the remote repository (e.g., using GitHub Actions or similar CI/CD mechanisms).
*   **Pros:**
    *   Fully automated, minimal user intervention needed for generation.
    *   Ensures notes are always generated upon tagging a release.
*   **Cons:**
    *   Requires external CI/CD setup (e.g., GitHub Actions) capable of triggering Roo Commander or a script that performs the logic. This is likely outside the current scope of Roo Commander's direct control.
    *   Less flexibility if manual review/editing of notes is desired before publishing.
    *   More complex error handling if the automated process fails.
*   **Implementation:** Would involve setting up a GitHub Action that checks out the code, runs a script (Node.js?) to perform the Git log parsing and summarization, and then either creates a local file and commits it, or uses the GitHub API/CLI (or potentially calls an MCP endpoint if exposed) to create the release.

## 4. Recommendation

*   **Short-term:** Implement the **Manual Trigger (Option 1)** first. This provides the core functionality and allows testing the generation logic.
*   **Medium-term:** Integrate this into a **Semi-Automated Trigger (Option 2)** as part of a broader "Prepare Release" workflow defined in `.ruru/workflows/`. This offers a good balance of automation and control.
*   **Long-term:** Consider the **Fully Automated Trigger (Option 3)** if robust CI/CD integration becomes a priority and the workflow proves reliable, but this likely requires external tooling beyond Roo Commander itself.

The initial focus should be on enabling manual generation, followed by integrating it into a standard release preparation workflow managed within the Roo system.