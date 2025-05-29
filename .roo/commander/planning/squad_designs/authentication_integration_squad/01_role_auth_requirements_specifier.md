+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-AUTHINTEG-REQSPECIFIER-20250515" # AUTHINTEG for Authentication Integration, REQSPECIFIER for this role
title = "Squad Member Role Definition: Auth Requirements Specifier for Authentication Integration Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "authentication-integration-squad", "requirements-specification", "auth-planning", "security-requirements"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Authentication Integration Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-AUTHINTEG-20250515" # ID of the parent squad concept

proposed_mode_slug = "auth-requirements-specifier"
proposed_mode_name = "📜 Auth Requirements Specifier"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Analyzes project needs to define specific authentication provider/strategy, user flows (signup, login, MFA, etc.), session management requirements, and authorization rules (protected routes/endpoints, roles/permissions)."
primary_output_artifact_description = "An `auth_implementation_plan_v1.md` document detailing: chosen auth provider/strategy, required user authentication flows, session management policies, and a list of resources (frontend routes, API endpoints) with their required authorization levels (e.g., public, authenticated, admin-only)."
primary_output_artifact_template_ref = "[.roo/commander/templates/design_artifacts/auth/template_auth_implementation_plan.md]" # Needs a new template

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of common authentication providers (Clerk, Firebase Auth, Supabase Auth, Okta, Auth0) and custom JWT patterns.",
    "Knowledge of authentication flows (OAuth2, OpenID Connect basics, passwordless, MFA).",
    "Ability to define authorization requirements (RBAC, ABAC concepts).",
    "Skill in identifying protectable resources (frontend routes, API endpoints).",
    "Clear technical writing for specifying security requirements.",
    "Understanding of session management strategies (tokens, cookies, server-side sessions)."
]
potential_kb_skill_topics = [
    "Eliciting Authentication Flow Requirements (Signup, Login, Reset Password, MFA)",
    "Defining Authorization Rules for Web Applications (RBAC)",
    "Specifying Protected Routes and API Endpoints",
    "Comparing Common Authentication Providers for Specific Needs",
    "Documenting Session Management Policies",
    "Using the 'template_auth_implementation_plan.md'"
]
potential_kb_wisdom_topics = [
    "Principle of Least Privilege in Authorization Design",
    "Security vs. User Experience Trade-offs in Auth Flows",
    "Importance of Specifying MFA and Password Policies Early",
    "Common Pitfalls in Defining Auth Requirements"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "High-level project requirements or feature descriptions needing authentication.",
    "Information about the target application's tech stack (frontend/backend frameworks).",
    "(Optional) User preference for a specific authentication provider or strategy.",
    "(Optional) Existing user roles or permission structures if augmenting a system."
]
downstream_squad_members_dependent_on_output = [
    "All other members of the Authentication Integration Squad will use the `auth_implementation_plan_v1.md` as their primary specification.",
    "manager-auth-integrator (uses the plan to orchestrate the squad)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is the first specialist engaged by the `manager-auth-integrator` to create a detailed plan for how authentication and authorization will be implemented.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-auth-integrator` containing high-level auth needs, project context, and tech stack info.
    *   If not already specified, interact (via Manager) with the user/requester to determine or recommend an authentication provider (e.g., Clerk, Firebase Auth, Supabase Auth, custom JWT) based on project needs and constraints.
    *   Define all required user authentication flows:
        *   Sign-up (including required user attributes).
        *   Sign-in (methods: email/password, social logins, passwordless).
        *   Sign-out.
        *   Password reset / account recovery.
        *   Multi-Factor Authentication (MFA) setup and verification (if required).
    *   Specify session management policies (e.g., token lifespan, refresh mechanisms, cookie settings if applicable).
    *   Identify all frontend routes and backend API endpoints that require protection.
    *   For each protected resource, define the required authorization level (e.g., "authenticated users only," "admin role required," "owner of resource").
    *   Document any specific requirements for user profile management post-authentication.
    *   Compile all these details into a structured `auth_implementation_plan_v1.md` document.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** TOML+Markdown, using a new template: `{{ primary_output_artifact_template_ref }}`.
    *   *(We will need to define `template_auth_implementation_plan.md`. It would include sections for: Chosen Auth Provider/Strategy, User Authentication Flows (Signup, Login, etc.), Session Management Policies, Protected Resources & Authorization Rules, User Profile Management Notes.)*
*   **Key Characteristics of Output:** A clear, comprehensive, and actionable plan that guides the entire authentication and authorization integration process for the rest of the squad.

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
        *   `eliciting_mfa_requirements.md`
        *   `defining_rbac_for_api_endpoints.md`
        *   `comparing_clerk_firebase_supabase_auth.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (The "why" and "what" for auth).
*   `{{ typical_input_artifacts_expected[1] }}` (To understand where auth will be integrated).
*   `{{ typical_input_artifacts_expected[2] }}`
*   `{{ typical_input_artifacts_expected[3] }}`

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: The entire "Authentication Integration Squad" uses this plan as the blueprint for their respective implementation tasks.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Uses the plan to guide the overall integration and to create sub-tasks for other specialists.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `auth-requirements-specifier` should emphasize its analytical skills in understanding security needs and translating them into a detailed implementation plan for authentication and authorization.
*   Its `[metadata]` should include:
    *   `squad_name = "Authentication Integration Squad"`
    *   `primary_output_description = "An auth_implementation_plan_v1.md detailing chosen provider, user flows, session policies, and authorization rules."`
    *   `primary_output_template = ".roo/commander/templates/design_artifacts/auth/template_auth_implementation_plan.md"`
    *   `reports_to = "manager-auth-integrator"`
*   It will primarily use document analysis and structured writing skills. It may need to formulate questions for the Manager to ask the user.

## 7. Open Questions / Further Definition Needed ❓

*   The exact structure of `template_auth_implementation_plan.md` needs to be defined.
*   How does it handle complex, fine-grained permission models if required? (Initially, it might focus on common RBAC, escalating very complex ABAC to human review or a future specialist).
*   What's the process if the user has no preference for an auth provider? (This mode would need KB wisdom to recommend one based on project type, tech stack, and common requirements like social logins, MFA, etc.).