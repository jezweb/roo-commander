# Documentation: Prompt Template `prompt_08_server_config_deployment_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a server's configuration and its associated deployment plan**. It guides the user to provide details about the server's purpose, technologies, configuration files (or IaC scripts), network topology, deployment process, backup strategy, and monitoring setup. The critiquing AI is then directed to analyze aspects such as security hardening, performance, scalability, resilience, backup/DR, monitoring, deployment automation, cost-effectiveness, and maintainability.

The goal is to receive actionable feedback to create a more secure, performant, scalable, resilient, and maintainable server environment and deployment process.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_08_server_config_deployment_critique.md](prompt_08_server_config_deployment_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_webapp_prod_server_v1.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-ServerConfigDeploy-WebAppProd-20250526170000`.
    *   `title`: Update to reflect the specific server/deployment, e.g., `"Server Config & Deployment Critique: WebApp Production Environment"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of Server/Application/Service]`.
    *   In Section 1 ("Server/Deployment Overview & Purpose"), provide context about the server's role, environment, technologies, expected load, and criticality.
    *   **Crucially, in Section 2 ("Configuration & Deployment Details"):**
        *   Provide **links to or paste relevant configuration files / Infrastructure as Code (IaC) scripts**. This is vital for a detailed review.
        *   Describe the `Network Topology`, `Deployment Process`, `Backup & Recovery Strategy`, and `Monitoring & Logging Setup`.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_08_server_config_deployment_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-ServerConfigDeploy-[ServerNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-ServerConfigDeploy-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Server Configuration & Deployment Plan Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"infrastructure_devops"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "server_configuration", "deployment", "devops", "infrastructure", "security", "scalability"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_08_server_config_deployment_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_08_server_config_deployment_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name of Server/Application/Service]`.
*   **Section 1: Server/Deployment Overview & Purpose:**
    *   `Primary Purpose`: Role of the server/deployment.
    *   `Environment`: e.g., Prod, Staging, Dev.
    *   `Key Technologies`: OS, web server, DB, stack, cloud provider.
    *   `Expected Load/Traffic Profile`.
    *   `Criticality`.
*   **Section 2: Configuration & Deployment Details:**
    *   `Configuration Files / Infrastructure as Code (IaC)`: **User must provide links to or paste relevant config files/scripts.**
    *   `Network Topology`.
    *   `Deployment Process`.
    *   `Backup & Recovery Strategy`.
    *   `Monitoring & Logging Setup`.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-K) like "Security Hardening," "Performance & Optimization," "Scalability & Elasticity," "Resilience & High Availability (HA)," "Backup & Disaster Recovery (DR)," "Deployment Process & Automation," and "Cost-Effectiveness." The user typically does not modify this section.

This structure ensures the AI receives the necessary technical configurations and procedural information to conduct a thorough infrastructure and deployment review.