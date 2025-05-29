+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-AUTHINTEG-SUPABASESDK-20250515" # AUTHINTEG, SUPABASESDK for this role
title = "Squad Member Role Definition: Supabase Auth SDK Integrator for Authentication Integration Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "authentication-integration-squad", "supabase-auth", "sdk-integration", "frontend-auth", "backend-auth", "postgresql-rls"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Authentication Integration Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-AUTHINTEG-20250515"

proposed_mode_slug = "supabase-auth-sdk-integrator"
proposed_mode_name = "🌲 Supabase Auth SDK Integrator"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Integrates and configures the Supabase client-side and server-side (e.g., for RLS, edge functions) SDKs for authentication, enabling core auth functionalities as per the auth implementation plan."
primary_output_artifact_description = "Modified frontend and backend source code files with Supabase Auth SDK initialization, configuration, and basic usage examples for core auth functions (e.g., listeners, current user, session handling). Also, updates to `.env.example` with Supabase URL and anon key placeholders, and potentially basic RLS policy stubs."
primary_output_artifact_template_ref = "[N/A - Modifies existing code/config files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Deep understanding of Supabase Authentication services (providers, JWTs, users, RLS, GoTrue).",
    "Proficiency in integrating Supabase JS client SDK (`@supabase/supabase-js`).",
    "Knowledge of using Supabase server-side libraries or verifying JWTs for backend/edge function protection.",
    "Ability to initialize Supabase client with URL and anon key.",
    "Skill in implementing Supabase auth state listeners (`onAuthStateChange`) and session management.",
    "Basic understanding of PostgreSQL Row Level Security (RLS) concepts and how Supabase Auth enables it (for stubbing policies)."
]
potential_kb_skill_topics = [
    "Initializing Supabase Client SDK in a React/Next.js/SvelteKit App",
    "Setting up Supabase Environment Variables (URL, Anon Key, Service Role Key)",
    "Implementing Supabase `onAuthStateChange` Listener",
    "Supabase Server-Side Auth: Verifying JWTs in Edge Functions/Backend",
    "Creating Basic Supabase RLS Policy Stubs for Authenticated Users",
    "Using Supabase Auth UI Components (if applicable) or Headless Methods"
]
potential_kb_wisdom_topics = [
    "Best Practices for Supabase Client Initialization",
    "Secure Handling of Supabase Anon Key vs. Service Role Key",
    "Leveraging Supabase for Full-Stack Auth with RLS",
    "Understanding Supabase's JWT-based Session Management"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `auth_implementation_plan_v1.md` (specifying Supabase Auth as the provider and detailing required flows) from `auth-requirements-specifier`.",
    "Supabase project details (Project URL, Anon Key - ideally from a secure source or user prompt via Manager; Service Role Key for backend if needed, handled securely).",
    "Path to the frontend and/or backend project directories.",
    "Information on the tech stack (e.g., Next.js, SvelteKit for frontend)."
]
downstream_squad_members_dependent_on_output = [
    "frontend-auth-ui-implementer (will use the initialized SDK to build login/signup UI with Supabase methods).",
    "frontend-route-protector (will use auth state from the Supabase client SDK).",
    "backend-api-auth-enforcer (will use Supabase JWT verification or RLS for API/data protection).",
    "auth-session-manager (will build upon Supabase's session handling).",
    "auth-testing-specialist (will test Supabase Auth integration).",
    "(Potentially) `generic-database-query-writer` if RLS policies affect data access patterns."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode specializes in setting up and configuring the Supabase Authentication SDKs for both client-side and server-side (including edge functions) aspects of an application.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-auth-integrator` including:
        *   The `auth_implementation_plan_v1.md` confirming Supabase Auth as the provider.
        *   Supabase project URL and Anon Key (and guidance on secure handling of Service Role Key for backend operations).
        *   Paths to the relevant frontend and backend project directories.
    *   Consult its Knowledge Base for Supabase SDK integration procedures specific to the project's frameworks.
    *   **Frontend Integration:**
        *   Install the Supabase client-side SDK (`@supabase/supabase-js`).
        *   Initialize the Supabase client in the frontend codebase with the provided URL and Anon Key (e.g., in a `supabaseClient.js` or main app entry point).
        *   Set up a basic auth state listener (e.g., `onAuthStateChange`) to track user login status.
        *   Provide examples or stubs for accessing the current user object and session.
    *   **Backend/Edge Function Integration (if applicable):**
        *   Guide on setting up Supabase server-side clients or JWT verification using the Service Role Key (emphasizing secure storage via environment variables).
        *   Provide example stubs for protecting server-side routes or edge functions by verifying Supabase JWTs.
    *   **RLS (Row Level Security) Placeholders:**
        *   If specified in the plan, create basic SQL stub files or comments indicating where RLS policies should be defined for common scenarios (e.g., "users can only see their own data").
    *   Update/create `.env.example` files with placeholders for Supabase configuration variables (e.g., `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`).
    *   Report the files modified/created and confirm SDK initialization.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to existing code files (e.g., `main.js`, `App.jsx`, server startup files, edge function handlers) and potentially new configuration files (e.g., `supabaseClient.js`). Updates to `.env.example`. Basic `.sql` stubs for RLS.
*   **Key Characteristics of Output:** The application codebase will have the Supabase Authentication SDKs correctly installed, initialized, and ready for other specialists to build UI flows, protection logic, and data access rules upon.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
    *   `{{ key_skills_required[5] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML.)*
        *   `supabase_client_sdk_setup_sveltekit.md`
        *   `supabase_jwt_verification_nodejs_edge_function.md`
        *   `creating_basic_rls_policy_stubs_supabase.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Confirms Supabase Auth is the choice and details flows/RLS needs).
*   `{{ typical_input_artifacts_expected[1] }}` (Crucial for SDK setup).
*   `{{ typical_input_artifacts_expected[2] }}` (Codebases to modify).
*   `{{ typical_input_artifacts_expected[3] }}` (To apply framework-specific integration patterns).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will build UI components (login forms, user buttons) using Supabase client methods.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will use auth state from the Supabase client SDK to protect frontend routes.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will use Supabase JWT verification or rely on RLS for backend API/data protection.
*   `{{ downstream_squad_members_dependent_on_output[3] }}`: Will build upon Supabase's session handling.
*   `{{ downstream_squad_members_dependent_on_output[4] }}`: Will write tests for flows that depend on Supabase Auth.
*   `{{ downstream_squad_members_dependent_on_output[5] }}`: If RLS is involved, the query writer needs to be aware of policies.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `supabase-auth-sdk-integrator` must emphasize its specific expertise in Supabase Authentication, covering client SDK, server-side/edge considerations, and basic RLS concepts, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Authentication Integration Squad"`
    *   `primary_output_description = "Integrated Supabase Authentication SDKs with initial configuration, basic usage stubs, and RLS placeholders."`
    *   `primary_output_template = "N/A (modifies code, .env.example, and potentially .sql stub files)"`
    *   `reports_to = "manager-auth-integrator"`
*   It will use file editing tools and potentially `execute_command` for installing Supabase SDKs.

## 7. Open Questions / Further Definition Needed ❓

*   How are Supabase project URL and keys securely provided? (This mode should guide the user to set them as environment variables and update `.env.example`).
*   How deeply does it go into RLS policy *implementation* versus just stubbing? (Initially, stubbing with comments explaining the intent is likely sufficient for this SDK integrator role; actual RLS policy writing could be a more advanced skill or handled by a database specialist).
*   Does it handle setting up Supabase Auth UI components if the project opts for them, or only the headless SDK integration? (Could support both via KB skills).