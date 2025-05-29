# Documentation: Prompt Template `prompt_CD_12_dockerfile_compose_generation.md`

## 1. Purpose

This prompt template is designed to request the **generation of a Dockerfile for containerizing a single application, or a `docker-compose.yml` snippet for defining and running multi-container Docker applications**. It guides the user to provide details about their application (language/framework, directory structure, dependencies, build steps, entrypoint, ports, environment variables) and, for `docker-compose`, the services to include and their basic interactions.

The goal is to receive a well-structured and functional Dockerfile or `docker-compose.yml` snippet that follows common best practices, helping to accelerate the process of containerizing applications.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_12_dockerfile_compose_generation.md](prompt_CD_12_dockerfile_compose_generation.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `generate_dockerfile_for_nodejs_app.md` or `generate_compose_for_webapp_redis.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-DockerGen-NodeAppDF-20250528170000`.
    *   `title`: Update to reflect the specific request, e.g., `"Dockerfile Generation: Node.js Express App"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Dockerfile/docker-compose] Generation for [Application Type/Service Setup]`.
    *   **Crucially, in Section 1 ("Application/Service Details for Containerization"):**
        *   Specify the `Type of File Requested` (Dockerfile or docker-compose.yml snippet).
        *   Provide `Application Language/Framework & Version`.
        *   Describe the `Project Directory Structure`.
        *   Explain `Dependency Management`.
        *   List any `Build Steps`.
        *   State the `Application Entrypoint/Start Command`.
        *   Specify `Ports Exposed by the Application`.
        *   List `Environment Variables Needed`.
        *   Describe `Volumes/Mounts` if applicable.
    *   **If requesting a `docker-compose.yml` snippet, fill out Section 2 ("Specific Requirements for `docker-compose.yml`"):**
        *   List `Services to Include`.
        *   Describe `Networking Between Services`.
        *   Specify `Port Mapping for Host`.
    *   Re-state the type of file requested in the final request paragraph.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the Docker configuration.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_12_dockerfile_compose_generation.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-DockerGen-[FileTypeShort][AppTypeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-DockerGen-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this Docker configuration request.
    *   *Placeholder in template:* `"Dockerfile / docker-compose Snippet Generation Request"`
*   **`prompt_type` (String, Fixed):** `"generation_technical_code_docker"`
*   **`domain` (String, Fixed):** `"coding_and_technical"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "coding", "docker", "dockerfile", "docker_compose", "containerization", "devops", "infrastructure_as_code"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_12_dockerfile_compose_generation.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_12_dockerfile_compose_generation.md`)

*   **Subject Line:** Pre-filled; update `[Dockerfile/docker-compose] Generation for [Application Type/Service Setup]`.
*   **Section 1: Application/Service Details for Containerization:**
    *   `Type of File Requested`: **User must specify Dockerfile or docker-compose.yml snippet.**
    *   `Application Language/Framework & Version`: **Essential for base image selection.**
    *   `Project Directory Structure`: **Important for COPY/ADD instructions.**
    *   `Dependency Management`.
    *   `Build Steps`.
    *   `Application Entrypoint/Start Command`.
    *   `Ports Exposed by the Application`.
    *   `Environment Variables Needed at Runtime`.
    *   `Volumes/Mounts`.
*   **Section 2: Specific Requirements for `docker-compose.yml` (Used if requesting docker-compose):**
    *   `Services to Include`.
    *   `Networking Between Services`.
    *   `Port Mapping for Host`.
*   **Section 3: Request for Dockerfile / docker-compose.yml Snippet:**
    *   A pre-filled section outlining the desired characteristics of the generated Dockerfile (base image, steps, best practices) or docker-compose.yml (service definitions, networking).

This structure ensures the AI receives detailed information about the application and its operational needs to generate a relevant and functional Docker configuration.