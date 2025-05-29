# Documentation: Prompt Template `prompt_ID_07_what_if_scenario_exploration.md`

## 1. Purpose

This prompt template is designed to facilitate **strategic thinking and contingency planning by exploring the potential implications of a specific "what if" scenario**. It guides the user to define a scenario trigger, provide context about their current business/product and its strengths/weaknesses, and state the desired outcome of the exploration. The AI is then tasked with brainstorming potential negative implications (threats), positive implications (opportunities), proactive/adaptive strategies, key indicators to monitor, and an unconventional response idea related to the given scenario.

The goal is to enhance strategic preparedness, identify potential risks and opportunities proactively, and stimulate innovative thinking about future challenges and directions.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/ideation/prompt_ID_07_what_if_scenario_exploration.md](prompt_ID_07_what_if_scenario_exploration.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `ideation_request_scenario_ai_automation_impact.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Ideation-WhatIfScenario-AIAutomation-20250528120000`.
    *   `title`: Update to reflect the specific scenario, e.g., `"Scenario Exploration: Impact of AI Automating Core Tasks"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with a `[Brief Description of Scenario Trigger]`.
    *   **Crucially, in Section 1 ("Scenario Context & Our Current Situation"):**
        *   Provide an **expanded description of the "What If" Scenario Trigger**.
        *   Describe your business/product/service most affected, and its current strengths and weaknesses relevant to the scenario.
        *   Specify the time horizon and desired outcome of the exploration.
    *   Specify the `[Number]` of implications and strategies requested in Section 2.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for exploration.

## 3. TOML Frontmatter Schema (for an instance of `prompt_ID_07_what_if_scenario_exploration.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Ideation-WhatIfScenario-[ScenarioShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Ideation-WhatIfScenario-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this ideation request.
    *   *Placeholder in template:* `"\"What If\" Scenario Exploration & Strategic Thinking Request"`
*   **`prompt_type` (String, Fixed):** `"ideation_and_brainstorming"`
*   **`domain` (String, Fixed):** `"strategic_thinking_risk_assessment_opportunity_identification"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "ideation", "brainstorming", "scenario_planning", "strategic_thinking", "risk_management", "opportunity_analysis", "future_proofing"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/ideation/prompt_ID_07_what_if_scenario_exploration.README.md"` (adjust path if necessary).

## 4. Markdown Body Structure (for an instance of `prompt_ID_07_what_if_scenario_exploration.md`)

*   **Subject Line:** User provides a brief description of the scenario trigger.
*   **Section 1: Scenario Context & Our Current Situation:**
    *   `The "What If" Scenario Trigger (Expanded)`: **Crucial for defining the core of the exploration.**
    *   `Our Business/Product/Service Most Affected`.
    *   `Our Current Strengths Relevant to this Scenario`.
    *   `Our Current Weaknesses/Vulnerabilities Relevant to this Scenario`.
    *   `Time Horizon for Consideration (Optional)`.
    *   `Desired Outcome of this Exploration`.
*   **Section 2: Request for Scenario Implication & Response Brainstorming:**
    *   This section outlines the specific areas for the AI to brainstorm:
        *   `A. Potential Negative Implications / Threats` (with Likelihood/Severity).
        *   `B. Potential Positive Implications / Opportunities` (with Attractiveness/Ability to Capitalize).
        *   `C. Proactive/Adaptive Strategies`.
        *   `D. Key Indicators/Signposts to Monitor`.
        *   `E. Most Unconventional/Innovative Response Idea`.
*   **Guidelines for Generation:** Pre-filled instructions for the AI to think broadly and consider various impacts.

This structure ensures the AI receives a well-defined scenario and sufficient business context to generate a comprehensive and strategically valuable exploration of its potential consequences and response options.