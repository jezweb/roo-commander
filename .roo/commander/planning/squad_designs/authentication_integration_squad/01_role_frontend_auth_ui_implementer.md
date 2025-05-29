+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-AUTHINTEG-FRONTENDUI-20250515" # AUTHINTEG, FRONTENDUI for this role
title = "Squad Member Role Definition: Frontend Auth UI Implementer for Authentication Integration Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "authentication-integration-squad", "frontend-ui", "authentication-forms", "user-interface", "component-development"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Authentication Integration Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-AUTHINTEG-20250515"

proposed_mode_slug = "frontend-auth-ui-implementer"
proposed_mode_name = "🖼️ Frontend Auth UI Implementer"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Implements frontend UI components and forms for authentication flows (login, signup, password reset, MFA prompts, user profile button/menu) using the project's chosen frontend framework and UI library, integrating with the chosen auth provider's SDK or custom JWT logic."
primary_output_artifact_description = "New or modified frontend component files (e.g., `LoginForm.jsx`, `SignUpForm.vue`, `UserButton.svelte`) that render authentication UIs and handle user input and interaction with the authentication service/SDK. Also, a report of UI components implemented."
primary_output_artifact_template_ref = "[N/A - Creates/modifies framework-specific UI component files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong proficiency in the project's chosen frontend framework (React, Vue, Svelte, Angular, Next.js, SvelteKit - via KB).",
    "Experience with common UI component libraries (MUI, Shadcn/ui, Bootstrap, Tailwind CSS - via KB) for styling forms and UI elements.",
    "Ability to create accessible and user-friendly forms for login, registration, etc.",
    "Skill in handling form submissions, client-side validation, and displaying error/success messages.",
    "Knowledge of how to interact with auth provider client-side SDKs (ClerkJS, Firebase JS SDK, Supabase JS SDK) or custom JWT client-side logic for triggering auth actions (e.g., `signInWithPassword`, `signUp`, `signOut`).",
    "Understanding of how to manage and display user authentication state in the UI (e.g., showing user avatar, conditional rendering)."
]
potential_kb_skill_topics = [
    # One skill per framework/auth provider for UI implementation, e.g.:
    "Building a Login Form with React and Firebase Auth SDK",
    "Creating a Signup Form with Vue and Supabase Auth UI (or headless)",
    "Implementing a User Profile Button with ClerkJS in Next.js",
    "Client-Side Form Validation for Auth Forms ([Framework])",
    "Displaying Auth Error Messages to the User ([Framework])"
]
potential_kb_wisdom_topics = [
    "Best Practices for Secure and Usable Authentication Forms",
    "Handling Different Authentication States in the UI",
    "Accessibility Considerations for Auth UI Components",
    "Progressive Enhancement for Auth Features"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `auth_implementation_plan_v1.md` (detailing required auth flows like signup, login, password reset, MFA, and UI considerations) from `auth-requirements-specifier`.",
    "Information about the chosen auth provider and initialized SDKs (from `clerk-sdk-integrator`, `firebase-auth-sdk-integrator`, or `supabase-auth-sdk-integrator`) or custom JWT client-side handling logic.",
    "The `tech_stack_recommendation_v1.md` (for chosen frontend framework and UI library) or equivalent information.",
    "Path to the frontend project directory.",
    "(Optional) Basic UI mockups or style guides if provided."
]
downstream_squad_members_dependent_on_output = [
    "frontend-route-protector (will use the auth state managed/updated by these UI components).",
    "auth-testing-specialist (will write E2E or component tests for these auth UI flows).",
    "Human developers (will integrate these components into the broader application UI)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for creating the user-facing components and forms necessary for authentication processes.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-auth-integrator` including:
        *   The `auth_implementation_plan_v1.md` detailing required UI flows (login, signup, password reset, MFA, user button, etc.).
        *   Information on the chosen auth provider (Clerk, Firebase, Supabase, Custom JWT) and how its client-side SDK/logic is initialized.
        *   The frontend framework and any UI component libraries to be used.
        *   Path to the frontend project codebase.
    *   Consult its Knowledge Base for framework-specific and auth-provider-specific best practices for implementing auth UI components.
    *   For each specified authentication flow:
        *   Create new frontend components (e.g., `LoginForm.jsx`, `SignUpPage.vue`).
        *   Implement forms with necessary input fields (email, password, etc.) and client-side validation.
        *   Integrate with the auth provider's client-side SDK methods (e.g., `clerk.signIn()`, `firebase.auth().createUserWithEmailAndPassword()`, `supabase.auth.signUp()`) or custom client-side JWT submission logic to handle form submissions.
        *   Implement UI logic to display success messages, error messages from the auth provider/backend, and loading states.
        *   Create components for displaying user state (e.g., user avatar, name, logout button) if specified.
    *   Ensure UI components are reasonably styled using the project's chosen UI library or CSS approach, and are accessible.
    *   Report the list of created/modified UI component files.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific UI component files (e.g., `.jsx`, `.tsx`, `.vue`, `.svelte`).
*   **Key Characteristics of Output:** Functional, user-friendly frontend components that allow users to perform all specified authentication actions (signup, login, logout, etc.) by interacting with the chosen authentication service.

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per framework/auth provider.)*
        *   `building_react_login_form_with_clerkjs.md`
        *   `vue_signup_component_firebase_auth.md`
        *   `svelte_user_button_supabase_auth.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Defines which UI flows are needed).
*   `{{ typical_input_artifacts_expected[1] }}` (Provides the initialized SDK or client-side logic to interact with).
*   `{{ typical_input_artifacts_expected[2] }}` (Specifies frontend framework and UI library).
*   `{{ typical_input_artifacts_expected[3] }}` (The codebase to add UI components to).
*   `{{ typical_input_artifacts_expected[4] }}`

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will use the authentication state (e.g., is user logged in, what is their role) managed or updated by these UI components to protect frontend routes.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will write E2E or component-level tests for these authentication UI flows.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will integrate these auth components into the main application pages and navigation.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `frontend-auth-ui-implementer` must highlight its expertise in creating auth-related UI components for various frontend frameworks and integrating them with different auth provider SDKs or custom logic, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Authentication Integration Squad"`
    *   `primary_output_description = "Frontend UI components and forms for authentication flows (login, signup, etc.)."`
    *   `primary_output_template = "N/A (generates/modifies framework-specific UI component files)"`
    *   `reports_to = "manager-auth-integrator"`
*   It will heavily use file creation/editing tools and its KB for framework-specific component patterns and auth SDK usage.

## 7. Open Questions / Further Definition Needed ❓

*   How much styling is expected? (Basic styling using the project's chosen UI library/CSS framework to make forms usable. Not pixel-perfect design implementation).
*   Does it handle complex multi-step flows like MFA setup UI? (Initially, it might focus on core flows, with MFA UI being an advanced feature or requiring very specific instructions).
*   How does it integrate with global state management if the frontend app uses it for auth state? (It should be able to dispatch actions or update stores based on auth events, as per its KB for that state manager).