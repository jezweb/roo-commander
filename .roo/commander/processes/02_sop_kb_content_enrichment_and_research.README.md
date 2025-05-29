# README for SOP: Mode KB Content Enrichment via Research & Synthesis

## 1. SOP Document

*   **Primary SOP File:** `[02_sop_kb_content_enrichment_and_research.md](./02_sop_kb_content_enrichment_and_research.md)`
    *   **ID:** `SOP-KB-ENRICHMENT-V2`
    *   **Title:** SOP: Mode KB Content Enrichment via Research & Synthesis (with Specific MCP Usage)

## 2. Purpose of this SOP

This Standard Operating Procedure (SOP) defines the systematic process for enriching existing AI Mode Knowledge Base (KB) articles or creating new ones within the Roo Commander V8 ecosystem. It emphasizes a structured approach that includes:

*   Identifying knowledge gaps or content objectives for a mode's KB.
*   Conducting thorough internal knowledge scans within the workspace.
*   Performing targeted external research utilizing a suite of available Mode Control Protocol (MCP) services (Context7, Vertex AI, Perplexity, Brave Search, Firecrawl, Crawl4AI).
*   Synthesizing gathered information into high-quality, actionable KB content.
*   Drafting and finalizing KB articles using standard templates and best practices.
*   Integrating new or updated articles into the target mode's KB structure, including updating its KB Index (`README.md`).

The goal is to continuously improve the "intelligence" and effectiveness of AI modes by providing them with rich, accurate, and well-organized knowledge.

## 3. Key Phases of the SOP

The SOP is typically executed in the following phases:

1.  **Phase 1: Planning & Scope Definition:** Understanding the objective and identifying knowledge gaps.
2.  **Phase 2: Research & Information Gathering:** Systematically querying internal and external sources (including specific MCP tool usage).
3.  **Phase 3: Drafting & Refining the KB Article:** Authoring content using appropriate KB article templates.
4.  **Phase 4: Finalization & Integration:** Saving the article and updating the target mode's KB index.

## 4. Primary Audience / Executor

This SOP is primarily intended to be followed by:

*   `meta-kb-editor` (a specialist squad member in the Workspace Maintenance Squad).
*   `agent-research` (if delegated the research-specific phases).
*   Any developer or AI mode tasked with creating or significantly improving KB content for a mode.

The `manager-workspace-maintenance` mode typically initiates and oversees the execution of this SOP by assigning MDTM tasks to the relevant executor.

## 5. Key Inputs & Outputs

*   **Inputs:** A clear objective for KB content, target mode slug, specific KB article topic/path, and optional initial pointers to information.
*   **Outputs:** A new or updated `.md` KB article, an updated KB `README.md` for the target mode, and potentially a research summary artifact.

## 6. Related Standards and Templates

This SOP operates in conjunction with and requires adherence to:

*   **KB Structuring Best Practices:** `[.roo/commander/docs/standards/05-kb-structuring-best-practices.md](.roo/commander/docs/standards/05-kb-structuring-best-practices.md)`
*   **KB Article Templates:** Located in `[.roo/commander/templates/modes/common/kb/](.roo/commander/templates/modes/common/kb/)` (for procedures, skills, wisdom, etc.)
*   **Naming Conventions:** `[.roo/commander/docs/standards/01-naming-conventions.md](.roo/commander/docs/standards/01-naming-conventions.md)`
*   **TOML+MD Format:** `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)`
*   **Vertex AI MCP Usage Guidelines:** `[.roo/rules/10-vertex-mcp-usage-guideline.md](.roo/rules/10-vertex-mcp-usage-guideline.md)` (especially regarding `save_*` variants).

## 7. Importance

A robust KB enrichment process is vital for:
*   Ensuring AI modes have the knowledge they need to perform their tasks effectively.
*   Keeping mode expertise up-to-date.
*   Facilitating the continuous improvement of the Roo Commander V8 system.

Refer to the main SOP document (`[02_sop_kb_content_enrichment_and_research.md](./02_sop_kb_content_enrichment_and_research.md)`) for detailed procedural steps.