+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPSCAFFOLD-AUTHSTUB-20250515" # WEBAPPSCAFFOLD, AUTHSTUB for this role
title = "Squad Member Role Definition: Auth Placeholder Inserter for Web App Scaffolding Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-scaffolding-squad", "authentication", "placeholders", "stubs", "security-scaffolding"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"

proposed_mode_slug = "auth-placeholder-inserter"
proposed_mode_name = "🛡️ Auth Placeholder Inserter"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Adds comments, code stubs, and example environment variables to guide the developer in integrating a chosen authentication method (e.g., Clerk, Firebase Auth, Supabase Auth) into the scaffolded project."
primary_output_artifact_description = "Modified project files (e.g., root layout component, example API route, `.env.example`) containing placeholders and instructional comments for authentication setup. Also, a report of modifications made."
primary_output_artifact_template_ref = "[N/A - Modifies existing code/config files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Basic understanding of common authentication patterns in web apps (e.g., provider wrapping, protected routes, API authentication).",
    "Familiarity with where auth setup typically occurs for different frontend frameworks (e.g., root layout, middleware - via KB).",
    "Knowledge of common environment variables needed for auth providers (e.g., `CLERK_PUBLISHABLE_KEY`, `FIREBASE_API_KEY` - via KB).",
    "Ability to insert code comments and simple stubs into existing files accurately."
]
potential_kb_skill_topics = [
    # One skill per supported auth provider for placeholder insertion, e.g.:
    "Inserting Clerk Auth Placeholders in a Next.js App",
    "Inserting Firebase Auth Placeholders in a React (Vite) App",
    "Inserting Supabase Auth Placeholders in a SvelteKit App",
    "Common .env.example Variables for Auth Providers",
    "Identifying Files for Auth Provider Setup (e.g., _app.js, main.jsx)"
]
potential_kb_wisdom_topics = [
    "Importance of Guiding Secure Auth Setup Early",
    "Keeping Auth Placeholders Generic and Informative",
    "Directing Users to Official Auth Provider Documentation"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `tech_stack_recommendation_v1.md` (for chosen frontend/backend frameworks and potentially a preferred auth provider) from `web-app-tech-stack-advisor`.",
    "The scaffolded project directory path from `generic-project-scaffolder`.",
    "List of key component/route files created by `generic-component-stubber` and `generic-routing-configurator`."
]
downstream_squad_members_dependent_on_output = [
    "readme-and-run-guide-writer (may mention that auth placeholders are included and point to next steps).",
    "Human developers (who will use these placeholders to implement full authentication).",
    "(Future) `manager-auth-integrator` could potentially use these placeholders as starting points for a full implementation."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode provides initial guidance within the scaffolded codebase for integrating an authentication solution.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-scaffolder` including:
        *   The chosen technology stack and potentially a preferred authentication provider (from `tech_stack_recommendation_v1.md`).
        *   The root path to the scaffolded project directory.
        *   Paths to key files where auth integration typically begins (e.g., root layout component, main server file).
    *   Consult its Knowledge Base for common integration points and required environment variables for the specified (or a common default) authentication provider (e.g., Clerk, Firebase Auth, Supabase Auth).
    *   Modify relevant files in the scaffolded project to:
        *   Add comments indicating where to initialize the auth provider's SDK (e.g., in `_app.js`, `main.jsx`, or a root layout).
        *   Add placeholder stubs for common auth UI components (e.g., `<SignInButtonPlaceholder />`, `<UserProfilePlaceholder />`) in appropriate locations (e.g., a header component).
        *   Add comments to example API routes or server-side functions indicating where to add auth protection middleware or session checks.
        *   Update/create an `.env.example` file with placeholder environment variables required by the chosen auth provider (e.g., `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here`).
    *   Ensure placeholders clearly instruct the developer on what to replace or implement.
    *   Report the files modified and the type of placeholders added.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to existing code files (`.jsx`, `.vue`, `.svelte`, `.js`, `.ts`) and `.env.example` (plain text).
*   **Key Characteristics of Output:** The scaffolded project will contain clear, commented guidance and stubs that make it easier for a developer to subsequently integrate a full authentication solution. No actual authentication logic is implemented by this mode.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per auth provider/framework combination.)*
        *   `inserting_clerk_placeholders_nextjs.md`
        *   `inserting_firebase_auth_placeholders_react_vite.md`
        *   `adding_auth_env_vars_to_example.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (To know which auth provider patterns to suggest, if specified).
*   `{{ typical_input_artifacts_expected[1] }}` (The project to modify).
*   `{{ typical_input_artifacts_expected[2] }}` (Key files like root app component, example API routes).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will note in the `README.md` that auth placeholders are present and guide the user to the auth provider's documentation.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will use these stubs and comments as a guide when implementing the actual authentication.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Could use these placeholders as specific targets if a full `manager-auth-integrator` is invoked later.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `auth-placeholder-inserter` should emphasize its role in *guiding* future auth integration by adding comments and stubs, not implementing auth itself. It should highlight its KB-driven knowledge of common auth patterns for different providers.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Scaffolding Squad"`
    *   `primary_output_description = "Modified project files with comments and stubs for guiding authentication setup."`
    *   `primary_output_template = "N/A (modifies code and .env.example files)"`
    *   `reports_to = "manager-web-app-scaffolder"`
*   It will primarily use file reading and precise file editing tools (`apply_diff`, `search_and_replace`).

## 7. Open Questions / Further Definition Needed ❓

*   Which auth providers should be prioritized for its initial KB (e.g., Clerk, Firebase Auth, Supabase Auth)?
*   How deep should the stubs be? (e.g., just comments, or empty function shells for `signIn`, `signOut`?). Minimal but helpful comments are probably best for a scaffolder.
*   Should it create a placeholder "auth context" or similar common pattern in frontend frameworks? (Potentially, a very basic commented-out stub).