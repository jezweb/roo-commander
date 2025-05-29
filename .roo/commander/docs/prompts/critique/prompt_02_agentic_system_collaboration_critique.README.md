# Documentation: Prompt Template `prompt_02_agentic_system_collaboration_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for the collaboration design of an Agentic System (a system of multiple AI agents working together)**. It guides the user to provide necessary contextual information about their multi-agent system and then directs the critiquing AI to analyze various facets of the inter-agent collaboration, including communication protocols, task allocation, shared knowledge management, conflict resolution, and overall system robustness.

The goal is to receive actionable feedback to improve the system's efficiency, scalability, reliability, and the effectiveness of agent interactions.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_02_agentic_system_collaboration_critique.md](prompt_02_agentic_system_collaboration_critique.md)` to your working directory or the location where you'll prepare the critique request.
2.  **Rename File (Instance):** Rename the copied file descriptively for your specific critique session (e.g., `critique_request_my_swarm_intelligence_system_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter of your new instance file.
    *   `id`: Generate a unique ID for this specific prompt usage, e.g., `PROMPT-Critique-AgenticSystemCollab-MySwarmSystem-20250526110000`.
    *   `title`: Update to reflect the specific agentic system being critiqued, e.g., `"Agentic System Collaboration Critique: My Swarm Intelligence System"`.
    *   `created_date` and `last_updated`: Set to the current date/timestamp.
    *   `authors`: Add your name or mode slug.
    *   Adjust `tags` if needed, though the defaults are generally suitable.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   In the main Markdown body of the prompt, systematically replace all bracketed placeholders (e.g., `[Name of Your Agentic System]`, `[Clearly state what the entire multi-agent system is intended to achieve...]`) with the specific details of the agentic system design you want critiqued.
    *   The more detailed and specific the information you provide in Section 1 ("System Overview & Purpose") and Section 2 ("Collaboration Design Details & Current Specifications"), the more targeted and valuable the AI's critique will be.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model you are using for the critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_02_agentic_system_collaboration_critique.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Critique-AgenticSystemCollab-[SpecificSystemName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-AgenticSystemCollab-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Agentic System Collaboration Design Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** Type of prompt.
    *   *Value:* `"critique_and_improvement"`
*   **`domain` (String, Fixed):** Primary domain of the prompt.
    *   *Value:* `"agentic_systems_collaboration"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "agentic_systems", "multi_agent_systems", "collaboration_design", "ai_systems"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_02_agentic_system_collaboration_critique.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_02_agentic_system_collaboration_critique.md`)

The Markdown body of the prompt instance is structured to guide the user in providing comprehensive information for the critique:

*   **Subject Line:** Pre-filled, but the `[Name of Your Agentic System]` placeholder needs to be updated.
*   **Section 1: System Overview & Purpose:**
    *   `Overall System Goal(s)`: User defines the collective objective.
    *   `Number of Agents & Their Primary Roles`: User lists agents and their specializations.
*   **Section 2: Collaboration Design Details & Current Specifications:**
    *   `Key Collaborative Tasks/Workflows`: User describes inter-agent dependencies.
    *   `Communication Protocols & Mechanisms`: User details how agents communicate.
    *   `Task Allocation & Distribution Strategy`: User explains task assignment logic.
    *   `Shared Knowledge/Context Management`: User describes shared information handling.
    *   `Conflict Resolution Mechanisms (if any)`: User outlines conflict management.
    *   `Coordination & Synchronization Strategies`: User details timing/sequencing.
    *   *(Optional) Attachment/link to system diagrams.*
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   This section is pre-filled with detailed questions categorized by aspects (A-J) like "Clarity of Roles & Responsibilities," "Communication Effectiveness & Efficiency," "System Scalability & Resilience," etc. The user does not typically modify this section.

This structured approach ensures that the critiquing AI receives consistent and thorough information about the inter-agent dynamics, leading to higher quality feedback on the collaboration design.