+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-DEPMGR-20250720" # WSMAINT for Workspace Maintenance, DEPMGR for Dependency Manager
title = "Squad Member Role Definition: DevOps Dependency Manager for Workspace Maintenance Squad"
status = "draft"
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "dependencies", "npm", "devops"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720"

proposed_mode_slug = "devops-dependency-manager"
proposed_mode_name = "📦 DevOps Dependency Manager"
proposed_classification = "worker" # Or "specialist"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Manages project-level software dependencies (e.g., NPM packages) for Roo Commander V8's own scripts and tooling."
primary_output_artifact_description = "Updated package management files (e.g., package.json, package-lock.json), installation/update status reports, and guidance on resolving dependency conflicts."
# primary_output_artifact_template_ref = "" # Primarily modifies existing files or provides reports.

# --- Skills & Knowledge ---
key_skills_required = [
    "Proficiency with NPM (Node Package Manager) CLI commands (install, update, audit, list).",
    "Understanding of semantic versioning (SemVer) for dependencies.",
    "Ability to read and interpret package.json and package-lock.json files.",
    "Basic troubleshooting of NPM installation and dependency conflict issues.",
    "Knowledge of common Node.js project structures."
    # "(Optional) Familiarity with other package managers if RCv8 expands (e.g., pip for Python scripts)."
]
potential_kb_skill_topics = [
    "Safely Updating NPM Dependencies (npm update)",
    "Installing New NPM Packages (npm install)",
    "Understanding and Resolving Peer Dependency Warnings",
    "Using 'npm audit' to Check for Vulnerabilities",
    "Best Practices for Managing package-lock.json"
]
potential_kb_wisdom_topics = [
    "Importance of Regular Dependency Updates for Security & Stability",
    "Strategies for Minimizing Dependency Bloat"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "User request to install a new NPM package for a workspace script.",
    "User request to update existing NPM dependencies.",
    "Path to the relevant package.json file (e.g., for .roo/commander/scripts/build_release/)."
]
downstream_squad_members_dependent_on_output = [
    "Any developer or script relying on the workspace's Node.js tooling.",
    "release-process-assistant (needs correct dependencies for build scripts)."
]
+++

# Squad Member Role Definition: 📦 DevOps Dependency Manager

## 1. Overview

*   **Proposed Mode Name:** `📦 DevOps Dependency Manager`
*   **Proposed Mode Slug:** `devops-dependency-manager`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `devops-dependency-manager` squad member. This mode will focus on managing software dependencies (primarily NPM packages) for the Roo Commander V8 workspace's internal scripts and tooling.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Manages project-level software dependencies (e.g., NPM packages) for Roo Commander V8's own scripts and tooling, ensuring they are up-to-date, secure, and correctly installed.
*   **Detailed Responsibilities:**
    *   Install new NPM packages as required for workspace scripts (e.g., build scripts, utility scripts).
    *   Update existing NPM dependencies to their latest compatible versions.
    *   Run `npm audit` to check for vulnerabilities in dependencies and report findings.
    *   Assist in troubleshooting NPM installation errors or dependency conflicts.
    *   Provide guidance on best practices for managing `package.json` and `package-lock.json` files within the workspace.
    *   (Future) Potentially extend to manage other types of dependencies if workspace tooling expands (e.g., Python pip packages).

## 3. Primary Output Artifact(s)

*   **Description:** The primary outputs are typically:
    1.  Modified `package.json` and `package-lock.json` files reflecting added or updated dependencies.
    2.  Status reports on installation/update processes (success, errors, vulnerabilities found).
    3.  Guidance or commands for the user to execute if direct CLI interaction is preferred for installations.
*   **Format/Template:** Direct file modifications. Reports will be textual.

## 4. Key Skills & Knowledge Required

*   Deep understanding of NPM CLI: `npm install <package>`, `npm install --save-dev <package>`, `npm update`, `npm outdated`, `npm audit`, `npm list`.
*   Thorough knowledge of `package.json` (dependencies, devDependencies, scripts) and `package-lock.json` (or `yarn.lock`) purpose and management.
*   Understanding of Semantic Versioning (SemVer) and how it applies to dependency ranges (e.g., `^`, `~`).
*   Ability to diagnose common NPM errors (e.g., ERESOLVE, peer dependency conflicts, permission issues).
*   Awareness of Node.js and NPM ecosystem best practices.

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-npm-install-save-vs-save-dev.md`
        *   `02-interpreting-npm-update-output.md`
        *   `03-resolving-common-npm-dependency-conflicts.md`
        *   `04-using-npm-audit-effectively.md`
        *   `05-understanding-npm-version-specifiers.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-when-to-update-major-versions-of-dependencies.md`
        *   `02-the-role-of-package-lock-json.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   The action required (e.g., "Install package X," "Update all devDependencies," "Audit dependencies").
    *   The target `package.json` file path (if multiple exist, e.g., for different script sets).
    *   Specific package names and versions if installing/updating a particular package.

### 5.2. Downstream Dependencies (Who uses its output?)
*   Any script or tool within the Roo Commander V8 workspace that relies on NPM packages (e.g., the build/packaging scripts).
*   Developers who need to ensure their local environment has the correct dependencies installed.
*   The `release-process-assistant` will depend on this mode to ensure build script dependencies are functional before a release.

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt should define its expertise in NPM and dependency management.
*   It needs to be able to execute `npm` commands (likely via the `execute_command` tool, with clear instructions on `cwd` if necessary).
*   It should be instructed to report the outcome of commands (stdout, stderr, exit code) clearly.
*   It should be able to parse `package.json` to identify outdated packages or confirm installations.

## 7. Open Questions / Further Definition Needed

*   How will it handle global NPM packages if ever needed (generally discouraged in favor of project dependencies)?
*   Will it manage dependencies for different parts of the workspace (e.g., core scripts vs. potential future mode-specific Node.js tools) independently or via a single root `package.json`? (Assume project-level `package.json` files for now).