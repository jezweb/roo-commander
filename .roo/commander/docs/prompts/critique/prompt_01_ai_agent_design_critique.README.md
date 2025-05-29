# Documentation: Prompt Template `prompt_01_ai_agent_design_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for an AI Agent's design**. It guides the user to provide necessary contextual information about their AI agent and then directs the critiquing AI to analyze various facets of the design, including purpose, capabilities, persona, interaction model, error handling, ethical considerations, and integration points.

The goal is to receive actionable feedback to improve the agent's robustness, effectiveness, user-friendliness, and responsibility.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_01_ai_agent_design_critique.md](prompt_01_ai_agent_design_critique.md)` to your working directory or the location where you'll prepare the critique request.
2.  **Rename File (Instance):** Rename the copied file descriptively for your specific critique session (e.g., `critique_request_my_support_agent_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter of your new instance file.
    *   `id`: Generate a unique ID for this specific prompt usage, e.g., `PROMPT-Critique-AIAgentDesign-MySupportAgent-20250526100000`.
    *   `title`: Update to reflect the specific agent being critiqued, e.g., `"AI Agent Design Critique: My Support Agent"`.
    *   `created_date` and `last_updated`: Set to the current date/timestamp.
    *   `authors`: Add your name or mode slug.
    *   Adjust `tags` if needed, though the defaults are generally suitable.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   In the main Markdown body of the prompt, systematically replace all bracketed placeholders (e.g., `[Name of Your AI Agent]`, `[Clearly state what the agent is intended to achieve...]`) with the specific details of the AI agent design you want critiqued.
    *   The more detailed and specific the information you provide in Section 1 ("Agent Overview & Purpose") and Section 2 ("Design Details & Current Specifications"), the more targeted and valuable the AI's critique will be.
5.  **Submit to AI:** Provide the completed Markdown content (your instance file) to the AI model you are using for the critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_01_ai_agent_design_critique.md`)

*   **`id` (String, Required):** Unique ID for this specific prompt usage instance.
    *   *Convention:* `PROMPT-Critique-AIAgentDesign-[SpecificAgentName]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-AIAgentDesign-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"AI Agent Design Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** Type of prompt.
    *   *Value:* `"critique_and_improvement"`
*   **`domain` (String, Fixed):** Primary domain of the prompt.
    *   *Value:* `"ai_agent_design"`
*   **`version` (String, Required):** Version of the prompt template itself (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Date this specific prompt instance is filled out (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Timestamp of the last update to this specific prompt instance (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** Name or mode slug of the user/agent filling out the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "ai_agent", "design_review", "agentic_systems"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema documentation file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_01_ai_agent_design_critique.README.md"` (adjust path if necessary based on where the instance file is saved relative to this README).

## 4. Markdown Body Structure (for an instance of `prompt_01_ai_agent_design_critique.md`)

The Markdown body of the prompt instance is structured to guide the user in providing comprehensive information for the critique:

*   **Subject Line:** Pre-filled, but the `[Name of Your AI Agent]` placeholder needs to be updated.
*   **Section 1: Agent Overview & Purpose:**
    *   `Primary Goal(s)`: User defines the agent's core objectives.
    *   `Target Users/Systems`: User specifies who/what interacts with the agent.
    *   `Core Domain/Area of Operation`: User details the agent's operational context.
*   **Section 2: Design Details & Current Specifications:**
    *   `Key Capabilities & Features`: User lists main functions.
    *   `Proposed Persona & Tone`: User describes the agent's communication style.
    *   `Interaction Model(s)`: User explains how interaction occurs.
    *   `Core Logic/Decision-Making Process (High-Level)`: User outlines processing logic.
    *   `Error Handling & Fallback Strategy (Initial Thoughts)`: User describes error management.
    *   `Integration Points (if any)`: User lists system connections.
    *   `Key Technologies/Platforms (if decided)`: User specifies tech stack.
    *   *(Optional) Attachment/link to design documents.*
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   This section is pre-filled with detailed questions categorized by aspects (A-J) like "Purpose & Goal Alignment," "Capabilities & Scope," "Ethical Considerations & Safety," etc. The user does not typically modify this section, as it contains the instructions for the critiquing AI.

This structured approach ensures that the critiquing AI receives consistent and thorough information, leading to higher quality feedback.