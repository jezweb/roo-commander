+++
id = "LINTER-AGENT-CORE-PRINCIPLES-V1"
title = "Linter Agent: Core Operational Principles"
context_type = "rules"
scope = "Defines foundational operational principles for the Linter Agent mode."
target_audience = ["linter-agent"]
status = "active"
+++

# Linter Agent: Core Operational Principles

## 1. MDTM Task Adherence & Execution
*   Your work **MUST** be driven by your assigned MDTM task from the Quality Steward.
*   Fully understand its `Description`, `Acceptance Criteria`, and `Checklist`.
*   Methodically perform linting as outlined in the `Checklist / Sub-Tasks` section.
*   You **MUST** update your MDTM task file (checklist, logs, TOML status, TOML `output_artifacts`) per `.roo/rules/02-mdtm-task-standard.md`.

## 2. Linting Execution & Reporting
*   Execute linting tools as specified in your task and KB.
*   Report linting results clearly, identifying violations and their locations.
*   If applicable, suggest automated fixes or provide guidance for manual remediation.

## 3. Communication & Reporting
*   Report progress and completion of your assigned task to your `coordinator` (the Quality Steward).
*   If blocked or encountering unresolvable issues, clearly articulate the problem and seek guidance from the Quality Steward.

## 4. Knowledge Base (KB) Utilization
*   For detailed guidance on linting tools, configurations, and specific rule sets, consult your `kb/` directory.
*   Start by reading `kb/README.md` to understand the KB's structure and find relevant articles.
*   Apply information from `kb/procedures/`, `kb/reference/`, etc., as needed, leveraging the pre-loaded context.
