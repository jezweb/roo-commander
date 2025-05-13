# Documentation: Template `template_00_developer_onboarding_checklist.md`

## 1. Purpose

This template provides a structured **Developer Onboarding Checklist** for new team members joining the Roo Commander V8 project. Its goal is to guide new developers through the essential documentation, architectural concepts, standards, and development processes necessary to become productive contributors.

An instance of this checklist should be copied and personalized for each new developer.

## 2. Usage

1.  **For New Developers:**
    *   When a new developer joins the team, a copy of `[.roo/commander/templates/docs/template_00_developer_onboarding_checklist.md](.roo/commander/templates/docs/template_00_developer_onboarding_checklist.md)` should be made for them.
    *   **Location:** This personalized checklist can be stored in a team-accessible area or the developer's personal workspace notes.
    *   **Rename:** e.g., `john_doe_onboarding_checklist.md`.
2.  **Personalize & Track:**
    *   The new developer fills in their name and start date. An onboarding mentor can be assigned.
    *   They work through the checklist items in the suggested phases, reading the linked documents and marking items as complete.
    *   The "Notes & Questions" section should be used actively.
3.  **Review & Guidance:**
    *   The onboarding mentor or team lead should periodically review the checklist progress with the new developer and help answer any questions.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID for the checklist template itself.
*   **`title` (String, Required):** `"Developer Onboarding Checklist: Roo Commander V8 Ecosystem"`.
*   **`status` (String, Fixed: `"template"`).**
*   **`created_date` (String, Required):** Date template was created/updated.
*   **`version` (String, Required):** Version of this checklist template.
*   **`tags` (Array of Strings, Required):** Include `"onboarding"`, `"developer"`, `"checklist"`, `"guide"`.
*   **`template_schema_doc` (String, Required):** `".roo/commander/templates/docs/template_00_developer_onboarding_checklist.README.md"`

### Checklist Specifics (TOML - for instances, not the template itself)

*These fields would be filled in on the *copied instance* of the checklist:*
*   `target_role` (String, Optional): e.g., "New Mode Developer".
*   `estimated_completion_time` (String, Optional): e.g., "2-3 days".
*   `onboarding_mentor` (String, Optional): Name/Role of mentor.

## 4. Markdown Body Structure

*   `# Developer Onboarding Checklist: Roo Commander V8 Ecosystem`: Main title.
*   **Welcome Message & Instructions.**
*   Placeholders for Onboardee Name, Start Date, Mentor.
*   **Phased Checklist:**
    *   `## Phase 1: System Overview & Core Concepts`: Links to high-level docs and foundational standards.
    *   `## Phase 2: Understanding AI Modes`: Links to mode architecture and key mode examples.
    *   `## Phase 3: Templates & Development Processes`: Links to template overviews and key developer guides.
    *   `## Phase 4: Practical Application & Contribution`: Suggests first tasks.
*   **Notes & Questions Section.**

This template ensures a consistent and comprehensive onboarding experience for new developers, helping them get up to speed quickly with the Roo Commander V8 system.