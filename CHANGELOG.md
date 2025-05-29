# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [2.2.0] - 2025-04-02

### Added
- New `project-onboarding` mode to differentiate and handle new vs. existing project workflows (Addresses Issue #2).
- Standard Operating Procedure (SOP) for mode template versioning (`tools/mode_configurator/docs/mode_versioning_sop.md`).

### Changed
- Updated `roo-commander` workflow to delegate initial project requests to the new `project-onboarding` mode.
- Refined `roo-commander` journaling strategy to create daily, timestamped log files instead of appending to a single log (Addresses Issue #13).
- Updated `mode_versions.json` to include `v2.1.3` archive details.
- Updated `manifest.json` files in `mode_templates` and `archived_mode_templates/v2.1.3`.



### Changed
- **Workflow Refinement:** Updated instructions across most modes to emphasize saving critical outputs (notes, documents, analysis) to the `project_journal` via delegation before completing tasks (`attempt_completion`). This improves the robustness of information handoffs between modes.
- **Workflow Refinement:** Updated management modes (`project-manager`, `technical-architect`, `devops-manager`) to explicitly require referencing relevant saved documents from `project_journal` when delegating tasks to specialists.
- **Workflow Refinement:** Clarified the purpose of `attempt_completion` messages across modes to focus on summaries and references to saved artifacts.
- **Permissions:** Added restricted `edit` permissions (`project_journal/*.md`) to `discovery-agent`, `project-initializer`, `second-opinion`, and `mcp-installer` to allow delegation of note saving.
- **Permissions:** Removed unnecessary `edit` permissions from `research-context-builder`, `complex-problem-solver`, `code-reviewer`, and `git-manager`.
- **Tools:** Added the `browser` tool group to numerous specialist and management modes to enhance research capabilities. (See individual mode files or README for specifics).

## [1.0.0] - 2025-03-30

First stable release of Roo Commander Modes! 🎉

### Changed
- Corrected schema issues in several mode templates (`customInstructions` format, invalid `groups`, removed `source` field).
- Updated management modes (`project-manager`, `technical-architect`, `devops-manager`, `roo-chief-executive`) with documentation responsibilities and permissions.
- Added a link to the main README in the Mode Configurator UI (`App.vue`).
- Moved `mode_templates` directory into `tools/mode_configurator/public/` to allow serving via Vite dev server and static hosting.

### Added
- Added new modes: `discovery-agent` and `project-initializer`.
- Set up GitHub Actions workflow for automated deployment of the Mode Configurator.
- **Mode Configurator Tool:** Added a web-based tool (`tools/mode_configurator/`) built with Vue.js and Vite. This tool allows users to select desired mode templates and generates the corresponding JSON configuration array for use in Roo Commander's `cline_custom_modes.json`. It fetches mode definitions dynamically from `tools/mode_configurator/public/mode_templates/`. Includes a `manifest.json` in the templates directory.
- Updated main `README.md` with instructions for using the Mode Configurator tool.

### Removed
- Removed unused `mode_collections` directory.