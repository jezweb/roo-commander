+++
# --- Squad Planning: Knowledge & Research Plan ---
id = "SQUAD-KRP-[SquadUnitNameShort]-[YYYYMMDD]" # Placeholder: e.g., SQUAD-KRP-WEBAPP-20250719
title = "Squad Knowledge & Research Plan: [Squad Unit Name]" # Placeholder
status = "draft" # Default. Options: draft, proposed, research-in-progress, research-complete
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
version = "1.0" # Version of this planning document instance
tags = ["squad-planning", "knowledge-management", "research-plan", "kb-bootstrap", "[squad_name_tag]", "mcp"] # Placeholder: Add specific tags
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_03_squad_knowledge_and_research_plan.README.md"

# --- Squad & Plan Identification ---
squad_unit_name_ref = "[Full Name of the Squad Unit]" # REQUIRED - Placeholder: Matches 'squad_unit_name' from 00_squad_concept_and_mission.md
squad_concept_doc_id = "[ID of the parent squad concept document. Or remove field.]" # OPTIONAL - Placeholder: e.g., "SQUAD-CONCEPT-[SquadUnitNameShort]-[YYYYMMDD]" or remove
research_coordinator_proposed = "[Human/Role or AI Mode slug (e.g., agent-research) responsible for overseeing research. Or remove field.]" # OPTIONAL - Placeholder or remove
overall_knowledge_goal = "[e.g., To equip the squad with foundational knowledge in X, Y, Z to effectively perform their roles. Or remove field.]" # RECOMMENDED - Placeholder or remove

# --- Key Knowledge Areas (Summary - details in Markdown) ---
key_knowledge_domains = [ # RECOMMENDED - Placeholder: List key domains or remove array field
    # "[Domain 1, e.g., Modern Frontend Frameworks]",
    # "[Domain 2, e.g., API Design Best Practices]"
]
+++

# Squad Knowledge & Research Plan: {{ squad_unit_name_ref | default: "[Squad Unit Name]" }}

## 1. Overview & Purpose 🎯

*   **Squad Unit:** `{{ squad_unit_name_ref | default: "[Squad Unit Name]" }}`
*   **Purpose of this Document:** To identify the key knowledge domains and specific information required for the `{{ squad_unit_name_ref }}` to operate effectively. This plan outlines potential internal and external sources of information and proposes a research strategy, including the potential use of Mode Control Protocol (MCP) tools, to gather and synthesize this knowledge for bootstrapping the squad members' Knowledge Bases (KBs).
*   **Overall Knowledge Goal:** `{{ overall_knowledge_goal | default: "[State the main objective of this knowledge gathering effort for the squad.]" }}`
*   **(Optional) Research Coordinator:** `{{ research_coordinator_proposed | default: "N/A" }}`

## 2. Key Knowledge Domains & Requirements 🧠

[Based on the squad's mission (from `00_squad_concept_and_mission.md`) and the roles of its members (from `01_squad_member_role_definition.md` files), list the critical areas of knowledge or expertise the squad (or specific members) will need. For each domain, detail specific information or skills.]

*   **Knowledge Domain 1: `[Name of Domain 1, e.g., Core Technology Stack - Specific Framework]`**
    *   **Relevance to Squad:** `[Why is this domain critical for the squad's success?]`
    *   **Specific Information/Skills Needed:**
        *   `[Specific question or skill 1.1, e.g., "Best practices for state management in [Framework X]"]`
        *   `[Specific question or skill 1.2, e.g., "How to integrate with [API Y] using [Framework X]"]`
    *   **Target Squad Member(s) requiring this knowledge:** `[List relevant squad member slugs, e.g., "[squad_member_A_slug]", "[squad_member_B_slug]"]`

*   **Knowledge Domain 2: `[Name of Domain 2, e.g., Relevant Workspace Standards]`**
    *   **Relevance to Squad:** `[e.g., "All squad members must understand and adhere to core workspace standards for MDTM, file formats, and pathing."]`
    *   **Specific Information/Skills Needed:**
        *   `[Specific standard 2.1, e.g., "Full understanding of `.roo/commander/docs/standards/03-mdtm-task-files.md`"]`
        *   `[Specific standard 2.2, e.g., "Proficiency in using `.roo/` anchored paths as per `.roo/commander/docs/standards/01-naming-conventions.md`"]`
    *   **Target Squad Member(s) requiring this knowledge:** `all` (or specific members if applicable)

*   *(Add more Knowledge Domains as needed)*

## 3. Information Gathering & Research Strategy 🔍

[For each key piece of information or skill identified in Section 2, outline the plan for acquiring it. This section should be detailed and actionable.]

### 3.1. Information/Skill: `[Specific Info/Skill from Section 2, e.g., "Best practices for state management in React"]`

*   **Targeted For:** `[Squad Member Slug(s) or general squad KB, e.g., "[react_specialist_slug]/kb/skills/react_state_management.md"]`
*   **Internal Sources Review:**
    *   Are there existing documents in `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`, `[.roo/commander/docs/architecture/](.roo/commander/docs/architecture/)`, or other mode KBs that cover this?
        *   `[.roo/path/to/internal_doc_1.md (if any)]` - Relevance/Action: `[Review, Summarize, Adapt]`
*   **User-Provided Context (If applicable for this squad's domain):**
    *   Has the user provided specific files, URLs, or direct input on this topic?
        *   `[User source 1 (if any)]` - Relevance/Action: `[Incorporate]`
*   **External Research Plan (MCP & Manual):**
    *   **Key Questions for Research:**
        *   `[Question 1 related to this info/skill, e.g., "What are current best practices for managing complex state in React applications?"]`
        *   `[Question 2, e.g., "Compare Redux, Zustand, and Context API for this use case."]`
    *   **Suggested MCP Tools & Queries (if applicable):**
        *   `[Tool: e.g., vertex-ai-mcp-server/answer_query_websearch]` - Query: `"[Specific search query, e.g., 'React state management 2025 best practices']"`
        *   `[Tool: e.g., perplexity-mcp/research]` - Topic: `"[Research topic, e.g., 'Comparison of React state management libraries']"`
        *   `[Tool: e.g., fetch-mcp/get_url_content]` - URL: `[Specific documentation URL if known, e.g., official React docs on state]`
        *   `[Tool: e.g., crawl4ai-mcp/crawl_website]` - Target: `[Documentation site for a framework]` - Scope: `[Specific sections]`
    *   **Repomix Consideration (if applicable for extracting patterns from existing code):**
        *   Target Repository: `[URL or Path to relevant codebase]`
        *   Key insights to extract: `[e.g., "Common state management patterns used in similar projects."]`
*   **Expected Output of this Research:**
    *   `[e.g., "A new article in `[.roo/commander/modes/[TargetModeSlug]/kb/skills/react_state_management.md]`. ", "A summary document in session artifacts: `[.roo/commander/sessions/[SESSION_ID]/artifacts/research/react_state_research.md]`"]`

---
*(Repeat Section 3.1 for each key piece of information/skill needed)*
---

## 4. Proposed Knowledge Base (KB) Structure for the Squad 🏗️

[Based on the identified knowledge domains and skills, propose an initial structure for the KBs of the new Manager and its Squad members. Which topics will go into `skills/` vs. `wisdom/` vs. `reference/` for each key mode? This helps guide the `meta-kb-editor`.]

*   **`[Proposed Manager Slug]/kb/`:**
    *   `procedures/01-main-orchestration-flow.md` (This is standard for Managers)
    *   `reference/00-[squad_name_lc]-squad-composition.md` (This is standard for Managers)
    *   `skills/`: `[e.g., managing_distributed_tasks.md, quality_assurance_for_squad_outputs.md]`
    *   `wisdom/`: `[e.g., principles_of_effective_squad_delegation.md]`
*   **`[Proposed Squad Member 1 Slug]/kb/`:**
    *   `skills/`: `[e.g., using_framework_x_for_y.md, specific_analysis_technique.md]`
    *   `wisdom/`: `[e.g., best_practices_for_secure_z.md, common_pitfalls_in_domain_a.md]`
    *   `reference/`: `[e.g., output_artifact_template_info.md, key_api_endpoints_for_tool_b.md]`
*   *(Continue for other key squad members)*

## 5. Research Execution & Coordination 🚀

*   **Responsibility:** `{{ research_coordinator_proposed | default: "[Specify who will oversee/execute this research plan - e.g., Human developer, agent-research, or specific squad members tasked by the manager]" }}`
*   **Timeline (Conceptual):** `[e.g., "To be completed before squad mode development begins", "Iterative research alongside mode development"]`
*   **Deliverables:** Synthesized information, draft KB articles (using common KB templates from `[.roo/commander/templates/modes/common/kb/]`), research summaries stored appropriately (e.g., in a dedicated research session's artifacts, or directly drafted into the target modes' KBs).

This plan will guide the foundational knowledge acquisition for the `{{ squad_unit_name_ref }}`.