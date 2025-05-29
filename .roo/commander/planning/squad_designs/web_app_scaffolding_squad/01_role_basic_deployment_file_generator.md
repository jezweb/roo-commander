+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-DEPLOYFILEGEN-20250515" # WEBAPPSCAFFOLD, DEPLOYFILEGEN for this role
title = "Squad Member Role Definition: Basic Deployment File Generator for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "deployment", "dockerfile", "static-hosting", "devops-light"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"

proposed_mode_slug = "basic-deployment-file-generator"
proposed_mode_name = "🚀 Basic Deployment File Generator"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Generates a minimal, common deployment configuration file (e.g., a basic Dockerfile, or a simple config for Vercel/Netlify) suitable for the scaffolded project's tech stack."
primary_output_artifact_description = "A deployment configuration file (e.g., `Dockerfile`, `vercel.json`, `netlify.toml`) added to the root of the scaffolded project, and a report of the file created."
primary_output_artifact_template_ref = "[N/A - Creates specific config files like Dockerfile, not a single TOML+MD artifact from a specific template for its *entire* output, though it uses internal templates/snippets from its KB.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of basic Dockerfile syntax and common patterns for Node.js/Python web apps.",
    "Familiarity with configuration files for popular static hosting / serverless platforms (Vercel, Netlify - via KB).",
    "Knowledge of build commands and output directories for common web frameworks (Next.js, Vite, SvelteKit, Astro - via KB).",
    "Ability to create simple, functional deployment configuration files."
]
potential_kb_skill_topics = [
    # One skill per target deployment environment/framework, e.g.:
    "Generating a Basic Dockerfile for a Next.js App",
    "Generating a Basic Dockerfile for a Vite (Node server) App",
    "Creating a Minimal vercel.json for a Static/Next.js App",
    "Creating a Minimal netlify.toml for a Static/Jamstack App",
    "Identifying Build Commands and Output Directories for [Framework]"
]
potential_kb_wisdom_topics = [
    "Principles of Minimal Viable Deployment Configs for Scaffolds",
    "When to Choose Docker vs. Platform-Specific Config for Initial Deployment",
    "Security Considerations for Basic Dockerfiles (e.g., non-root user)"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `tech_stack_recommendation_v1.md` (for chosen frontend/backend frameworks) from `web-app-tech-stack-advisor`.",
    "The scaffolded project directory path from `generic-project-scaffolder` (to place the deployment file and understand build outputs).",
    "(Optional) User preference for a specific deployment target (e.g., Docker, Vercel), if provided via requirements."
]
downstream_squad_members_dependent_on_output = [
    "readme-and-run-guide-writer (may include basic instructions on using the generated deployment file).",
    "Human developers (who will use this as a starting point for actual deployment)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode provides a very basic starting point for deploying the scaffolded web application.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` including:
        *   The chosen technology stack (from `tech_stack_recommendation_v1.md`).
        *   The root path to the scaffolded project directory.
        *   (Optional) User preference for a deployment target.
    *   Consult its Knowledge Base for common deployment patterns for the specified tech stack and target.
    *   Based on the framework (e.g., Next.js, Vite, Astro) and deployment target preference (or a sensible default like Docker):
        *   Generate a minimal `Dockerfile` suitable for building and running the application (e.g., multi-stage build for Node.js apps).
        *   OR, generate a basic configuration file for a common static/serverless platform (e.g., `vercel.json` with build commands, `netlify.toml`).
    *   The generated file should include placeholders or comments for any environment variables that would be needed at runtime (e.g., `PORT`, database URLs, API keys).
    *   Place the generated file in the root of the scaffolded project directory.
    *   Report the type of deployment file created and its path.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Specific configuration files like `Dockerfile` (plain text), `vercel.json` (JSON), `netlify.toml` (TOML).
*   **Key Characteristics of Output:** A functional, minimal configuration file that provides a starting point for containerizing the application or deploying it to a common platform. It is not intended to be a production-ready, hardened configuration.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per target/framework combination.)*
        *   `generating_dockerfile_nextjs.md`
        *   `generating_vercel_json_nextjs.md`
        *   `generating_netlify_toml_astro.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (To understand build commands, output directories, runtime environment).
*   `{{ typical_input_artifacts_expected[1] }}` (The project to add the deployment file to).
*   `{{ typical_input_artifacts_expected[2] }}`

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: May include a section in the main project `README.md` on "Basic Deployment" referencing the generated file.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will use this file as a starting point for setting up actual deployment pipelines or environments.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `basic-deployment-file-generator` should emphasize its ability to create *minimal starting point* deployment configurations for common stacks/platforms, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "A minimal deployment configuration file (e.g., Dockerfile, vercel.json) for the scaffolded project."`
    *   `primary_output_template = "N/A (generates specific config files like Dockerfile)"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It will primarily use file creation tools. Its KB will contain templates/snippets for different deployment files.

## 7. Open Questions / Further Definition Needed ❓

*   Which deployment targets should be prioritized for its initial KB (e.g., Docker, Vercel, Netlify)?
*   How opinionated should it be if no deployment target is specified by the user? (Defaulting to a simple Dockerfile might be a good generic start).
*   Should it attempt to detect necessary build commands and output directories from `package.json` or framework defaults, or will these need to be explicitly provided/known via its KB for each framework? (A mix is likely; KB provides defaults, it can try to verify from `package.json`).