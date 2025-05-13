+++
# --- Squad Planning: Knowledge & Research Plan ---
id = "SQUAD-KRP-[SquadUnitNameShort]-[YYYYMMDD]" # e.g., SQUAD-KRP-WEBAPP-20250719
title = "Squad Knowledge & Research Plan: [Squad Unit Name]"
status = "draft" # Options: draft, proposed, research-in-progress, research-complete
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0" # Version of this planning document
tags = ["squad-planning", "knowledge-management", "research-plan", "kb-bootstrap", "[squad_name_tag]", "mcp"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_03_squad_knowledge_and_research_plan.README.md"

# --- Squad & Plan Identification ---
squad_unit_name_ref = "[Full Name of the Squad Unit (matches 'squad_unit_name' from 00_squad_concept_and_mission.md)]"
# squad_concept_doc_id = "SQUAD-CONCEPT-[SquadUnitNameShort]-[YYYYMMDD]" # ID of the parent squad concept document
# research_coordinator_proposed = "[Human/Role or AI Mode (e.g., agent-research) responsible for overseeing research]"
# overall_knowledge_goal = "[e.g., To equip the squad with foundational knowledge in X, Y, Z to effectively perform their roles.]"

# --- Key Knowledge Areas (Summary - details in Markdown) ---
# key_knowledge_domains = [
#    "[Domain 1, e.g., Modern Frontend Frameworks]",
#    "[Domain 2, e.g., API Design Best Practices]",
#    "[Domain 3, e.g., Specific 3rd Party Service Integration]"
# ]
+++

# Squad Knowledge & Research Plan: {{ squad_unit_name_ref | default: "[Squad Unit Name]" }}

## 1. Overview & Purpose 🎯

*   **Squad Unit:** `{{ squad_unit_name_ref | default: "[Squad Unit Name]" }}`
*   **Purpose of this Document:** To identify the key knowledge domains and specific information required for the `[Squad Unit Name]` to operate effectively. This plan outlines potential internal and external sources of information and proposes a research strategy, including the use of Mode Control Protocol (MCP) tools, to gather and synthesize this knowledge for bootstrapping the squad's KBs (Knowledge Bases).
*   **Overall Knowledge Goal:** `{{ overall_knowledge_goal | default: "[State the main objective of this knowledge gathering effort.]" }}`

## 2. Key Knowledge Domains & Requirements 🧠

[Based on the squad's mission (from `00_squad_concept_and_mission.md`) and the roles of its members (from `01_squad_member_role_definition.md` files), list the critical areas of knowledge or expertise the squad will need.]

*   **Knowledge Domain 1: `[Name of Domain 1, e.g., Core Technology Stack - Frontend]`**
    *   **Relevance to Squad:** [Why is this domain critical for the squad's success?]
    *   **Specific Information/Skills Needed:**
        *   [Specific question or skill 1.1, e.g., "Best practices for state management in [Framework X]"]
        *   [Specific question or skill 1.2, e.g., "How to integrate with [API Y]"]
    *   **Target Squad Member(s) requiring this knowledge:** `[List relevant squad member slugs]`

*   **Knowledge Domain 2: `[Name of Domain 2, e.g., Domain-Specific Regulations - Australian Health Data Privacy]`**
    *   **Relevance to Squad:** ...
    *   **Specific Information/Skills Needed:**
        *   [Specific question or skill 2.1, e.g., "Key requirements of APPs for handling patient data"]
        *   [Specific question or skill 2.2, e.g., "De-identification techniques suitable for [Dataset Z]"]
    *   **Target Squad Member(s) requiring this knowledge:** ...

*   *(Add more Knowledge Domains as needed)*

## 3. Information Gathering & Research Strategy 🔍

[For each key piece of information or skill identified above, outline the plan for acquiring it.]

### 3.1. Information/Skill: `[Specific Info/Skill from Section 2, e.g., "Best practices for React state management"]`

*   **Targeted For:** `[Squad Member Slug(s) or general squad KB]`
*   **Internal Sources Review:**
    *   Are there existing documents in `[.roo/commander/docs/standards/](.roo/commander/docs/standards/)`, `[.roo/commander/docs/architecture/](.roo/commander/docs/architecture/)`, or other mode KBs that cover this?
        *   `[Path to internal doc 1 (if any)]` - [Relevance/Action: Review, Summarize]
        *   `[Path to internal doc 2 (if any)]` - [Relevance/Action: Adapt for this squad]
*   **User-Provided Context:**
    *   Has the user provided specific files, URLs, or direct input on this topic?
        *   `[User source 1 (if any)]` - [Relevance/Action: Incorporate]
*   **External Research Plan (MCP & Manual):**
    *   **Key Questions for Research:**
        *   `[Question 1 related to this info/skill]`
        *   `[Question 2 related to this info/skill]`
    *   **Suggested MCP Tools & Queries (if applicable):**
        *   `[Tool: e.g., vertex-ai-mcp-server/answer_query_websearch]` - Query: `"[Specific search query]"`
        *   `[Tool: e.g., perplexity-mcp/research]` - Topic: `"[Research topic]"`
        *   `[Tool: e.g., fetch-mcp/get_url_content]` - URL: `[Specific documentation URL if known]`
        *   `[Tool: e.g., crawl4ai-mcp/crawl_website]` - Target: `[Documentation site for a framework]` - Scope: `[Specific sections]`
    *   **Repomix Consideration (if applicable):**
        *   Is there an existing codebase that should be analyzed using Repomix to extract patterns or knowledge related to this skill?
        *   Target Repository: `[URL or Path]`
        *   Key insights to extract: `[...]`
*   **Expected Output of this Research:**
    *   [e.g., "A new article in `[TargetModeSlug]/kb/skills/[skill_name].md`", "A summary document in session artifacts", "A set of key principles for `[TargetModeSlug]/kb/wisdom/[principle_name].md`"]

---
*(Repeat Section 3.1 for each key piece of information/skill needed)*
---

## 4. Proposed Knowledge Base (KB) Structure for the Squad

[Based on the identified knowledge domains and skills, propose an initial structure for the KBs of the new Manager and its Squad members. Which topics will go into `skills/` vs. `wisdom/` for each key mode?]

*   **`[Proposed Manager Slug]/kb/`:**
    *   `skills/`: [e.g., `managing_agile_squads.md`, `cross_functional_communication.md`]
    *   `wisdom/`: [e.g., `principles_of_effective_delegation.md`]
*   **`[Proposed Squad Member 1 Slug]/kb/`:**
    *   `skills/`: [e.g., `using_framework_x_for_y.md`]
    *   `wisdom/`: [e.g., `best_practices_for_secure_z.md`]
*   *(Continue for other key squad members)*

## 5. Research Execution & Coordination

*   **Responsibility:** `{{ research_coordinator_proposed | default: "[Specify who will oversee/execute this research plan - e.g., Human developer, agent-research]" }}`
*   **Timeline (Conceptual):** [e.g., "To be completed before squad mode development begins"]
*   **Deliverables:** Synthesized information, draft KB articles, research summaries stored appropriately (e.g., in a dedicated research session's artifacts, or directly drafted into the target modes' KBs).

This plan will guide the foundational knowledge acquisition for the `[Squad Unit Name]`.