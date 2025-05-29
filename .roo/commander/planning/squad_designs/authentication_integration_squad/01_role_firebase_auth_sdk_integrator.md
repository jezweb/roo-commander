+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-AUTHINTEG-FIREBASESDK-20250515" # AUTHINTEG, FIREBASESDK for this role
title = "Squad Member Role Definition: Firebase Auth SDK Integrator for Authentication Integration Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "authentication-integration-squad", "firebase-auth", "sdk-integration", "frontend-auth", "backend-auth"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Authentication Integration Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-AUTHINTEG-20250515"

proposed_mode_slug = "firebase-auth-sdk-integrator"
proposed_mode_name = "🔥 Firebase Auth SDK Integrator"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Integrates and configures the Firebase Authentication SDKs (client-side and Admin SDK for backend) into a web application, enabling core authentication functionalities as per the auth implementation plan."
primary_output_artifact_description = "Modified frontend and backend source code files with Firebase Auth SDK initialization, configuration, and basic usage examples for core auth functions (e.g., listeners, current user). Also, updates to `.env.example` with Firebase config placeholders."
primary_output_artifact_template_ref = "[N/A - Modifies existing code/config files, not a single TOML+MD artifact from a specific template for its *entire* output.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Deep understanding of Firebase Authentication services and concepts (providers, tokens, users, rules).",
    "Proficiency in integrating Firebase SDKs (JavaScript for client, Admin SDK for Node.js/Python/Java for backend - via KB).",
    "Knowledge of Firebase project setup and configuration (API keys, service account keys).",
    "Ability to initialize Firebase apps on both frontend and backend.",
    "Skill in implementing Firebase auth state listeners and retrieving current user information.",
    "Understanding of how Firebase Auth integrates with frontend frameworks and backend APIs."
]
potential_kb_skill_topics = [
    "Initializing Firebase Client SDK in a React/Next.js App",
    "Initializing Firebase Admin SDK in a Node.js Backend",
    "Setting up Firebase Project Configuration and API Keys",
    "Implementing Firebase Auth State Observers (onAuthStateChanged)",
    "Retrieving Firebase ID Tokens on the Client",
    "Verifying Firebase ID Tokens on the Backend (Admin SDK)"
]
potential_kb_wisdom_topics = [
    "Best Practices for Firebase SDK Initialization (Client vs. Server)",
    "Secure Handling of Firebase Service Account Keys",
    "Firebase Auth UI vs. Custom UI with Firebase SDK",
    "Understanding Firebase Security Rules for Auth-Protected Data (Conceptual)"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `auth_implementation_plan_v1.md` (specifying Firebase Auth as the provider and detailing required flows) from `auth-requirements-specifier`.",
    "Firebase project configuration details (API key, authDomain, projectId, etc. - ideally from a secure source or user prompt via Manager).",
    "Path to the frontend and/or backend project directories.",
    "Information on the tech stack (e.g., React frontend, Node.js backend)."
]
downstream_squad_members_dependent_on_output = [
    "frontend-auth-ui-implementer (will use the initialized SDK to build login/signup UI).",
    "frontend-route-protector (will use auth state from the SDK).",
    "backend-api-auth-enforcer (will use the Admin SDK or token verification logic).",
    "auth-session-manager (will build upon Firebase's session handling).",
    "auth-testing-specialist (will test Firebase Auth integration)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode specializes in setting up and configuring the Firebase Authentication SDKs in both frontend and backend parts of an application.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-auth-integrator` including:
        *   The `auth_implementation_plan_v1.md` confirming Firebase Auth as the provider.
        *   Firebase project configuration details (API key, authDomain, etc.).
        *   Paths to the relevant frontend and backend project directories.
    *   Consult its Knowledge Base for Firebase SDK integration procedures specific to the project's frameworks.
    *   **Frontend Integration:**
        *   Install the Firebase client-side SDK (`firebase` npm package or script include).
        *   Initialize the Firebase app in the frontend codebase with the provided project configuration (e.g., in `firebase.js` or main app entry point).
        *   Set up a basic auth state listener (e.g., `onAuthStateChanged`) to demonstrate how to track user login status.
        *   Provide examples or stubs for accessing the current user object.
    *   **Backend Integration (if applicable):**
        *   Install the Firebase Admin SDK (e.g., `firebase-admin` npm package).
        *   Initialize the Firebase Admin app with appropriate service account credentials (guiding the user on secure handling if needed, or assuming credentials are in a secure environment variable).
        *   Provide example stubs or utility functions for verifying Firebase ID tokens received from the frontend.
    *   Update/create `.env.example` files with placeholders for Firebase configuration variables (e.g., `FIREBASE_API_KEY`, `FIREBASE_PROJECT_ID`, `GOOGLE_APPLICATION_CREDENTIALS` path for backend).
    *   Report the files modified/created and confirm SDK initialization.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to existing code files (e.g., `main.js`, `App.jsx`, server startup files) and potentially new configuration files (e.g., `firebaseConfig.js`). Updates to `.env.example`.
*   **Key Characteristics of Output:** The application codebase will have the Firebase Authentication SDKs correctly installed, initialized, and ready for other specialists to build UI flows and protection logic upon.

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
        *   `firebase_client_sdk_setup_nextjs.md`
        *   `firebase_admin_sdk_setup_expressjs.md`
        *   `verifying_firebase_id_tokens_nodejs_backend.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Confirms Firebase Auth is the choice and details flows).
*   `{{ typical_input_artifacts_expected[1] }}` (Crucial for SDK setup).
*   `{{ typical_input_artifacts_expected[2] }}` (Codebases to modify).
*   `{{ typical_input_artifacts_expected[3] }}` (To apply framework-specific integration patterns).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will build UI components (login forms, user buttons) that use the initialized Firebase client SDK.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will use the Firebase auth state (e.g., `currentUser`) from the client SDK to protect frontend routes.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will use the Firebase Admin SDK (or token verification logic) to protect backend API endpoints.
*   `{{ downstream_squad_members_dependent_on_output[3] }}`: Will build session management logic on top of Firebase's built-in session handling.
*   `{{ downstream_squad_members_dependent_on_output[4] }}`: Will write tests for flows that depend on Firebase Auth being integrated.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `firebase-auth-sdk-integrator` must emphasize its specific expertise in Firebase Authentication, covering both client and admin SDK setup and core functionalities, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Authentication Integration Squad"`
    *   `primary_output_description = "Integrated Firebase Authentication SDKs (client & admin) with initial configuration and basic usage stubs."`
    *   `primary_output_template = "N/A (modifies code and .env.example files)"`
    *   `reports_to = "manager-auth-integrator"`
*   It will use file editing tools and potentially `execute_command` for installing Firebase SDKs via package managers.

## 7. Open Questions / Further Definition Needed ❓

*   How are Firebase project credentials (especially service account keys for Admin SDK) securely provided or handled? (This mode should guide the user to set them as environment variables and update `.env.example`, not handle raw keys itself).
*   Does it set up basic Firebase Security Rules stubs for Firestore/Realtime Database if those are also part of the project stack? (Initially, probably focus only on Auth setup. Database rules could be a separate concern or handled by a BaaS data integrator).
*   How does it handle different Firebase Auth features like email link sign-in, phone auth, etc., if requested in the plan? (Its KB would need specific skills for these; initial version might focus on common email/password and social provider setup).