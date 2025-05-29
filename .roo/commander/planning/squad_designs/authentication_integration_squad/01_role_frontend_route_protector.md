+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-AUTHINTEG-FRONTENDROUTEPROT-20250515" # AUTHINTEG, FRONTENDROUTEPROT for this role
title = "Squad Member Role Definition: Frontend Route Protector for Authentication Integration Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "authentication-integration-squad", "frontend-routing", "route-guards", "access-control", "security"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Authentication Integration Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-AUTHINTEG-20250515"

proposed_mode_slug = "frontend-route-protector"
proposed_mode_name = "🛡️ Frontend Route Protector"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Implements client-side route protection mechanisms (e.g., route guards, higher-order components) to ensure that only authenticated users, and users with specific roles/permissions if applicable, can access certain frontend routes/pages."
primary_output_artifact_description = "Modified frontend routing configuration files and/or new route guard components/functions that enforce access control based on authentication status and user roles/permissions. Also, a report of routes secured."
primary_output_artifact_template_ref = "[N/A - Modifies existing framework-specific code files or creates new guard/HOC files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of client-side routing principles in SPA frameworks (React Router, Vue Router, Next.js Router, SvelteKit Router - via KB).",
    "Knowledge of how to implement route guards, protected route components, or higher-order components for access control.",
    "Ability to integrate with the auth provider's client-side SDK or custom auth logic to check authentication status and user roles/permissions.",
    "Skill in redirecting unauthenticated/unauthorized users to appropriate pages (e.g., login page, unauthorized page).",
    "Understanding of how to handle loading states while checking auth status for routes."
]
potential_kb_skill_topics = [
    # One skill per supported framework/router for route protection, e.g.:
    "Implementing Protected Routes with React Router v6",
    "Creating Navigation Guards in Vue Router",
    "Securing Next.js Pages/App Routes based on Auth State (Client-Side)",
    "SvelteKit Route Protection using Layout Guards and Auth Stores",
    "Handling Redirects for Unauthenticated Users in [Framework]"
]
potential_kb_wisdom_topics = [
    "Best Practices for Client-Side Route Protection",
    "UX Considerations for Protected Routes (Loading States, Redirects)",
    "Combining Client-Side and Server-Side Route Protection",
    "Managing Roles and Permissions for Frontend Access Control"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `auth_implementation_plan_v1.md` (detailing which frontend routes need protection and the required auth/role levels) from `auth-requirements-specifier`.",
    "Information about how to access the current user's authentication status and roles/permissions from the client-side auth SDK/logic (output from SDK integrator or custom JWT implementer).",
    "The `tech_stack_recommendation_v1.md` (for chosen frontend framework and its router) or equivalent information.",
    "Path to the frontend project directory and its routing configuration files."
]
downstream_squad_members_dependent_on_output = [
    "frontend-auth-ui-implementer (may need to link to protected routes or display UI based on access).",
    "auth-testing-specialist (will write E2E tests to verify route protection).",
    "Human developers (will build features within these protected routes)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode specializes in securing client-side navigation by implementing route protection based on user authentication and authorization status.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-auth-integrator` including:
        *   The `auth_implementation_plan_v1.md` specifying which frontend routes require protection and the necessary authentication/authorization levels (e.g., "authenticated only," "admin role").
        *   Details on how to access the client-side authentication state (e.g., from Firebase Auth listener, Clerk's `useUser`, Supabase session, custom JWT context).
        *   The frontend framework and routing library in use.
        *   Path to the frontend project codebase, especially routing configuration files.
    *   Consult its Knowledge Base for framework-specific patterns for implementing route guards or protected route components.
    *   For each route specified for protection:
        *   Implement logic that checks the user's authentication status before allowing navigation.
        *   If specific roles or permissions are required, implement checks against the authenticated user's profile/claims.
        *   Redirect unauthenticated users to a login page.
        *   Redirect authenticated but unauthorized users to an "unauthorized" page or a default page.
        *   Handle loading states gracefully while auth status is being determined.
    *   This might involve creating higher-order components (HOCs), wrapper components, or modifying router configuration files with navigation guards.
    *   Report the list of routes secured and the files modified/created.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to existing frontend routing configuration files or creation of new files for route guards, protected route components, or HOCs (e.g., `.js`, `.jsx`, `.ts`, `.tsx`, `.vue`, `.svelte`).
*   **Key Characteristics of Output:** The frontend application will have client-side routing logic that prevents unauthorized access to specified pages, redirecting users appropriately based on their authentication and authorization status.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per framework/router.)*
        *   `react_router_v6_private_route_component.md`
        *   `vue_router_navigation_guards_for_auth.md`
        *   `nextjs_middleware_for_route_protection.md` (if client-side checks are also done via hooks)
        *   `sveltekit_layout_guards_for_auth.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Defines which routes to protect and with what rules).
*   `{{ typical_input_artifacts_expected[1] }}` (How to check if a user is logged in, their role, etc.).
*   `{{ typical_input_artifacts_expected[2] }}` (To apply framework-specific routing protection patterns).
*   `{{ typical_input_artifacts_expected[3] }}` (The codebase to modify).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: The UI components for login/redirects will be part of the protected navigation flow.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will test that route protection works as expected for various user states and roles.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will build features assuming these routes are correctly protected.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `frontend-route-protector` must highlight its expertise in implementing client-side access control for routes in various frontend frameworks, using auth state information provided by SDKs or custom logic, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Authentication Integration Squad"`
    *   `primary_output_description = "Modified frontend routing configurations or new guard components to enforce route protection."`
    *   `primary_output_template = "N/A (modifies/creates framework-specific code files)"`
    *   `reports_to = "manager-auth-integrator"`
*   It will primarily use file reading and precise file editing tools.

## 7. Open Questions / Further Definition Needed ❓

*   How does it handle scenarios where roles/permissions might change dynamically during a session? (Initially, it might focus on auth status and roles determined at the point of auth state check).
*   Does it create placeholder "Unauthorized" or "LoginRequired" pages if they don't exist, or assume they are provided/handled by `frontend-auth-ui-implementer`? (It should probably assume a standard login page path and could create a very basic "Unauthorized" component if needed).
*   How are server-side rendered (SSR) routes protected if the framework uses them extensively (e.g., Next.js Pages Router `getServerSideProps`)? (This mode focuses on client-side. SSR protection would typically be handled by `backend-api-auth-enforcer` or specific Next.js middleware logic, which this mode might coordinate with or assume is in place for API calls made during SSR).