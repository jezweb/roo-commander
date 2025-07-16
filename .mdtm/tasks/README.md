# .mdtm/tasks/ - MDTM Task Files

This directory contains individual Markdown-Driven Task Management (MDTM) files. Each file represents a specific task delegated by a Manager mode to a Squad Member, or a top-level task delegated by the Orchestrator to a Manager.

## File Naming Convention

Task files follow the convention: `TASK-[TEAM_PREFIX]-[YYYYMMDD-HHMMSS].md`

*   `[TEAM_PREFIX]`: A short, relevant prefix (e.g., `RC` for Orchestrator, `PM` for Project Manager, `TP` for Task Planner).
*   `[YYYYMMDD-HHMMSS]`: Timestamp of creation.

## Structure

Tasks may be organized into subdirectories within this folder, typically by project, feature, or assignee (e.g., `project-alpha/feature-login/TASK-PM-XYZ.md`).

## Purpose

*   **Work Orders:** Each file serves as a detailed work order for an AI mode, outlining the task's description, acceptance criteria, and checklist.
*   **Progress Reports:** Modes update these files to log progress, mark checklist items complete, and report status.

## Usage

Users can inspect these files to understand the details of ongoing tasks and their current progress. For a comprehensive understanding of the MDTM task format, refer to the `02-mdtm-task-standard.md` rule in `/.roo/rules/`.
