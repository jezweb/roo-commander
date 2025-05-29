+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-AUTHINTEG-SESSIONMGR-20250515" # AUTHINTEG, SESSIONMGR for this role
title = "Squad Member Role Definition: Auth Session Manager for Authentication Integration Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "authentication-integration-squad", "session-management", "token-handling", "logout", "security"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Authentication Integration Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-AUTHINTEG-20250515"

proposed_mode_slug = "auth-session-manager"
proposed_mode_name = "🔄 Auth Session Manager"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Implements and configures robust user session management logic, including session creation upon login, session persistence, secure logout/invalidation, handling of token expiry and refresh (if applicable), based on the chosen auth provider or custom JWT strategy."
primary_output_artifact_description = "Modified frontend and/or backend code to correctly handle user session lifecycle events. This may include client-side token storage/clearing logic, backend session invalidation mechanisms, or refresh token endpoint logic. Also, a report on session management strategies implemented."
primary_output_artifact_template_ref = "[N/A - Modifies existing framework-specific code files or creates new utility/service files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of web session management concepts (cookies, tokens, client-side storage, server-side sessions).",
    "Knowledge of session handling mechanisms for specific auth providers (Clerk, Firebase, Supabase - via KB).",
    "Experience with JWT access and refresh token patterns if implementing custom JWT sessions.",
    "Ability to implement secure logout procedures (client-side token clearing, server-side session invalidation/token blacklisting if applicable).",
    "Skill in handling token expiry and implementing refresh token flows.",
    "Understanding of secure cookie settings (HttpOnly, Secure, SameSite) if tokens are cookie-based."
]
potential_kb_skill_topics = [
    # One skill per supported auth provider/strategy for session management, e.g.:
    "Implementing Client-Side Session Management with Firebase Auth",
    "Handling Supabase Auth Session Persistence and Logout",
    "Securely Managing JWTs (Access & Refresh Tokens) in Browser Storage/Cookies",
    "Implementing a Refresh Token Endpoint for Custom JWT Auth",
    "Server-Side Session Invalidation Techniques for [Framework]"
]
potential_kb_wisdom_topics = [
    "Best Practices for Secure Web Session Management",
    "Understanding Token Lifespan Trade-offs (Security vs. UX)",
    "Strategies for Mitigating Session Hijacking Risks (Conceptual)",
    "Stateless vs. Stateful Session Management for APIs"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `auth_implementation_plan_v1.md` (detailing session management policies, token lifespans, refresh requirements) from `auth-requirements-specifier`.",
    "Information about the chosen auth provider and how its SDKs/tokens are handled (from SDK integrators or custom JWT implementer).",
    "The `tech_stack_recommendation_v1.md` (for chosen frontend/backend frameworks).",
    "Path to the frontend and/or backend project directories."
]
downstream_squad_members_dependent_on_output = [
    "frontend-auth-ui-implementer (UI components will trigger login/logout and reflect session state).",
    "frontend-route-protector (relies on accurate session state to control access).",
    "backend-api-auth-enforcer (relies on valid session tokens for API access).",
    "auth-testing-specialist (will test session creation, persistence, expiry, and logout)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode specializes in implementing the mechanisms for creating, maintaining, and terminating user authentication sessions.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-auth-integrator` including:
        *   The `auth_implementation_plan_v1.md` detailing session policies (e.g., token lifespans, refresh token strategy, cookie requirements).
        *   Information on the chosen auth provider (Clerk, Firebase, Supabase, Custom JWT) and how tokens/sessions are initially established.
        *   Paths to relevant frontend and backend project codebases.
    *   Consult its Knowledge Base for framework-specific and auth-provider-specific best practices for session management.
    *   **Client-Side Session Handling:**
        *   Implement logic for securely storing authentication tokens (e.g., JWTs in localStorage, sessionStorage, or managed by the provider's SDK).
        *   Implement logic for clearing tokens and local user state upon logout.
        *   If using refresh tokens, implement the client-side logic to request new access tokens when they expire.
    *   **Server-Side Session Handling (if applicable, especially for custom JWT or stateful sessions):**
        *   Implement or configure server-side session stores (e.g., Redis, database-backed sessions).
        *   Implement server-side logout logic (e.g., invalidating session IDs, blacklisting JWTs if using a blacklist strategy for custom JWTs).
        *   If applicable, implement a refresh token endpoint that validates refresh tokens and issues new access tokens.
    *   Ensure secure cookie settings (HttpOnly, Secure, SameSite) are used if tokens are managed via cookies.
    *   Handle session expiry gracefully on both client and server.
    *   Report on the session management mechanisms implemented and any relevant configuration files modified.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to existing frontend or backend code files (e.g., auth services, API utility modules, client-side auth contexts/stores) or creation of new files for session-specific logic.
*   **Key Characteristics of Output:** A robust session management system that securely maintains user authentication state across requests and browser sessions, handles token expiry and refresh correctly, and provides secure logout functionality.

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per auth provider/strategy.)*
        *   `client_side_jwt_management_react.md` (localStorage vs. cookies)
        *   `firebase_auth_session_persistence_and_logout.md`
        *   `implementing_httpOnly_cookies_for_jwt_express.md`
        *   `supabase_auth_onauthstatechange_handling.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Defines how sessions should behave).
*   `{{ typical_input_artifacts_expected[1] }}` (Provides context on how tokens are issued/validated by the chosen provider or custom logic).
*   `{{ typical_input_artifacts_expected[2] }}` (To apply framework-specific session patterns).
*   `{{ typical_input_artifacts_expected[3] }}` (The codebases to modify).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: The UI will reflect the session state (e.g., logged in/out) and trigger session actions like logout.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Relies on the session being correctly established and maintained to determine if a user can access a route.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Relies on the presence and validity of session tokens (often passed in headers or cookies) to grant access.
*   `{{ downstream_squad_members_dependent_on_output[3] }}`: Will test all aspects of session lifecycle: creation, persistence, expiry, refresh, and invalidation.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `auth-session-manager` must highlight its expertise in implementing secure and robust session lifecycle management for various authentication strategies (provider-based, custom JWT) and web frameworks, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Authentication Integration Squad"`
    *   `primary_output_description = "Implemented client-side and/or server-side logic for user session creation, persistence, expiry, refresh, and logout."`
    *   `primary_output_template = "N/A (modifies/creates framework-specific code files)"`
    *   `reports_to = "manager-auth-integrator"`
*   It will primarily use file reading and precise file editing tools.

## 7. Open Questions / Further Definition Needed ❓

*   How does it handle "remember me" functionality? (This would need to be specified in the `auth_implementation_plan_v1.md` and would likely involve longer-lived refresh tokens or persistent session cookies).
*   Does it deal with server-side session stores (like Redis) if a stateful session approach is chosen for custom JWTs? (Yes, its KB would need skills for setting up and interacting with common session stores for relevant backend frameworks).
*   How are concurrent sessions for a single user handled (e.g., logout from all devices)? (This is an advanced feature; initially, it would focus on managing the current session. "Logout everywhere" often requires server-side invalidation of all active tokens/sessions for a user).