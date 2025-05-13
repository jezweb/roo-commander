# Documentation: Template `template_03_squad_knowledge_and_research_plan.md`

## 1. Purpose

This template is used during the **Squad Planning & Design phase** to create a **Squad Knowledge & Research Plan**. Its purpose is to systematically identify:
*   The key knowledge domains and specific information/skills required for a new "Manager + Squad" unit to operate effectively.
*   Existing internal or user-provided resources that can furnish this knowledge.
*   Gaps where external research is needed.
*   A plan for conducting this research, including the potential use of Mode Control Protocol (MCP) tools (e.g., web search, content fetching, code analysis via Repomix).
*   An initial proposal for structuring the Knowledge Bases (KBs) of the new Manager and its Squad members based on the findings.

This document helps ensure that new squads are "bootstrapped" with the necessary foundational knowledge to perform their roles.

## 2. Usage

1.  **Context:** This template is typically used after `template_00_squad_concept_and_mission.md` and `template_01_squad_member_role_definition.md` files have identified the squad's purpose and the roles/skills of its members.
2.  **Copy Template:**
    *   Copy `[.roo/commander/templates/planning/squad_design/template_03_squad_knowledge_and_research_plan.md](.roo/commander/templates/planning/squad_design/template_03_squad_knowledge_and_research_plan.md)` into the new squad's planning directory.
3.  **Rename File:** Rename it descriptively (e.g., `03_research_plan_web_app_squad.md`).
4.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique ID for this research plan.
    *   `title`: `Squad Knowledge & Research Plan: [Squad Unit Name]`.
    *   `squad_unit_name_ref`: Must match the `squad_unit_name` from the corresponding `00_squad_concept_and_mission.md`.
    *   Define `overall_knowledge_goal` and optionally `research_coordinator_proposed` and `key_knowledge_domains`.
    *   Add relevant `tags`.
5.  **Define Plan in Markdown Body:**
    *   Replace all bracketed placeholders.
    *   **Section 2 (Key Knowledge Domains):** Detail the critical knowledge areas.
    *   **Section 3 (Information Gathering & Research Strategy):** For each key piece of information/skill, outline internal sources, user context, and a plan for external research (including specific questions and suggested MCP tools).
    *   **Section 4 (Proposed KB Structure):** Suggest how the gathered knowledge might be organized into the `skills/` and `wisdom/` sections of the new modes' KBs.
    *   **Section 5 (Research Execution):** Note who is responsible for the research.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `SQUAD-KRP-[SquadUnitNameShort]-[YYYYMMDD]`.
*   **`title` (String, Required):** Title: `"Squad Knowledge & Research Plan: [Squad Unit Name]"`.
*   **`status` (String, Required):** Lifecycle status (e.g., `"draft"`, `"proposed"`, `"research-in-progress"`).
*   **`created_date` (String, Required):** Date of creation.
*   **`updated_date` (String, Required):** Date of last update.
*   **`version` (String, Required):** Version of this planning document.
*   **`tags` (Array of Strings, Required):** Include `"squad-planning"`, `"knowledge-management"`, `"research-plan"`, `"kb-bootstrap"`, `"[squad_name_tag]"`. Add `"mcp"` if MCP tools are planned.
*   **`template_schema_doc` (String, Required):** Path to this schema doc: `".roo/commander/templates/planning/squad_design/template_03_squad_knowledge_and_research_plan.README.md"`

### Squad & Plan Identification (TOML)

*   **`squad_unit_name_ref` (String, Required):** Full name of the Squad Unit.
*   `squad_concept_doc_id` (String, Optional): ID of the `00_squad_concept_and_mission.md` document.
*   `research_coordinator_proposed` (String, Optional): Human role or AI mode slug to oversee research.
*   `overall_knowledge_goal` (String, Optional, Multiline): Main objective of the knowledge gathering.

### Key Knowledge Areas (Summary - TOML)

*   `key_knowledge_domains` (Array of Strings, Optional): A summary list of the main knowledge areas detailed in the Markdown.

## 4. Markdown Body Structure

*   `# Squad Knowledge & Research Plan: {{ squad_unit_name_ref }}`: Main title.
*   `## 1. Overview & Purpose 🎯`: Explains the document's goal.
*   `## 2. Key Knowledge Domains & Requirements 🧠`: Identifies critical knowledge areas and specific info/skills needed.
*   `## 3. Information Gathering & Research Strategy 🔍`: **The core section.** For each info/skill, details internal sources, user context, and external research plans (including MCP tool suggestions, Repomix, Crawl/Scrape).
*   `## 4. Proposed Knowledge Base (KB) Structure for the Squad`: Suggests how gathered knowledge will populate the new modes' KBs.
*   `## 5. Research Execution & Coordination`: Notes on responsibility and timeline for the research.

This template provides a structured approach to planning the knowledge acquisition necessary to make a new squad effective from its inception, explicitly incorporating advanced research and context-gathering tools.