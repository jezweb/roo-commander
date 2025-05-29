+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-AUTHINTEG-CUSTOMJWT-20250515" # AUTHINTEG, CUSTOMJWT for this role
title = "Squad Member Role Definition: Custom JWT Auth Implementer for Authentication Integration Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "authentication-integration-squad", "custom-auth", "jwt", "security", "token-management", "backend-auth"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Authentication Integration Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-AUTHINTEG-20250515"

proposed_mode_slug = "custom-jwt-auth-implementer"
proposed_mode_name = "⚙️ Custom JWT Auth Implementer"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Designs and implements a custom JWT-based authentication system, including token generation (on login/signup), token validation middleware, refresh token mechanisms, secure cookie/storage strategies, and password hashing for user models."
primary_output_artifact_description = "New backend modules/services for JWT generation, validation, and refresh logic; modified user model for password hashing; authentication middleware for protecting API endpoints; and updates to `.env.example` for JWT secrets. Also, a report detailing the custom JWT setup."
primary_output_artifact_template_ref = "[N/A - Creates/modifies framework-specific or plain language code files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Deep understanding of JSON Web Tokens (JWT) structure, claims (standard and custom), signing algorithms (HS256, RS256).",
    "Proficiency in implementing secure password hashing and verification (e.g., bcrypt, Argon2).",
    "Skill in creating token generation logic (access tokens, refresh tokens) upon successful login/signup.",
    "Ability to implement JWT validation middleware for backend frameworks (Node.js/Express, Python/Django/Flask - via KB).",
    "Knowledge of secure token storage strategies (HttpOnly cookies, secure browser storage - understanding trade-offs).",
    "Understanding of refresh token rotation and blacklisting concepts (basics).",
    "Secure management of JWT signing secrets."
]
potential_kb_skill_topics = [
    "Implementing JWT Generation with [Library] in [Language/Framework]",
    "Creating JWT Validation Middleware for Express.js",
    "Secure Password Hashing with Bcrypt in Node.js",
    "Setting HttpOnly Cookies for JWTs in [Framework]",
    "Basic Refresh Token Rotation Strategy",
    "Managing JWT Signing Secrets via Environment Variables"
]
potential_kb_wisdom_topics = [
    "Security Best Practices for Custom JWT Implementations",
    "Pros and Cons of Different JWT Signing Algorithms",
    "Understanding JWT Lifespans (Access vs. Refresh Tokens)",
    "Preventing Common JWT Vulnerabilities (e.g., XSS, CSRF if tokens in local storage)"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `auth_implementation_plan_v1.md` (specifying a custom JWT strategy and detailing required flows, user model fields for password) from `auth-requirements-specifier`.",
    "Path to the backend project directory.",
    "Information on the backend tech stack (language/framework)."
]
downstream_squad_members_dependent_on_output = [
    "frontend-auth-ui-implementer (will need to implement UI to send credentials and handle/store received JWTs).",
    "backend-api-auth-enforcer (will use the JWT validation middleware created by this mode).",
    "auth-session-manager (will build upon the JWT-based session handling).",
    "auth-testing-specialist (will test all custom JWT flows and security)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode specializes in building a custom JWT-based authentication system when a third-party provider is not used.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-auth-integrator` including:
        *   The `auth_implementation_plan_v1.md` specifying the need for a custom JWT solution and detailing user flows, password policies, and any specific claims for JWTs.
        *   Path to the backend project codebase and tech stack information.
    *   Consult its Knowledge Base for secure JWT implementation patterns, password hashing techniques, and framework-specific middleware creation for the project's stack.
    *   **User Model Modification:**
        *   Update or guide the creation of user models to include secure password hash storage (e.g., adding a `hashedPassword` field).
    *   **Password Hashing:**
        *   Implement functions for securely hashing new user passwords during signup and verifying passwords during login (e.g., using bcrypt or Argon2).
    *   **Token Generation:**
        *   Implement logic to generate JWT access tokens (and potentially refresh tokens) upon successful user authentication (login) or registration. Define appropriate token expiry times.
        *   Include standard claims (iss, sub, aud, exp, iat) and any custom claims specified in the plan.
    *   **Token Validation Middleware:**
        *   Create middleware for the backend framework to intercept requests to protected routes.
        *   This middleware must validate incoming JWTs (checking signature, expiry, issuer, audience).
        *   If valid, extract user identity from the token and attach it to the request object for use by downstream controllers/services.
    *   **Refresh Token Mechanism (Basic):**
        *   Implement basic logic for issuing and validating refresh tokens to allow users to obtain new access tokens without re-authenticating, if specified in the plan.
    *   **Secure Token Handling:**
        *   Advise on or implement secure ways to transmit tokens to the client (e.g., via HttpOnly cookies for web applications).
    *   **Secret Management:**
        *   Ensure JWT signing secrets are not hardcoded. Guide the setup of these secrets via environment variables (updating `.env.example`).
    *   Report on the implemented modules, middleware, and configuration.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** New or modified backend code files (e.g., `authService.js`, `jwtMiddleware.py`, user model files) and updates to `.env.example`.
*   **Key Characteristics of Output:** A functional custom JWT authentication system providing core capabilities for user registration, login, token issuance, token validation, and secure password management.

## 4. Key Skills & Knowledge Required 🧠

*   **Essential Skills/Technologies:**
    *   `{{ key_skills_required[0] }}`
    *   `{{ key_skills_required[1] }}`
    *   `{{ key_skills_required[2] }}`
    *   `{{ key_skills_required[3] }}`
    *   `{{ key_skills_required[4] }}`
    *   `{{ key_skills_required[5] }}`
    *   `{{ key_skills_required[6] }}`
*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   *(Corresponds to `potential_kb_skill_topics` in TOML.)*
        *   `jwt_access_refresh_token_generation_nodejs.md`
        *   `bcrypt_password_hashing_python.md`
        *   `express_jwt_validation_middleware.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Primary specification for the custom auth system).
*   `{{ typical_input_artifacts_expected[1] }}` (The codebase to modify/add to).
*   `{{ typical_input_artifacts_expected[2] }}` (To apply framework-specific patterns).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will need to adapt UI flows to interact with the custom JWT mechanism (e.g., sending credentials, storing/using tokens).
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will use the JWT validation middleware to protect API endpoints.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will build upon the JWT-based session handling.
*   `{{ downstream_squad_members_dependent_on_output[3] }}`: Will write extensive tests for all aspects of the custom JWT system.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `custom-jwt-auth-implementer` must strongly emphasize its expertise in securely designing and implementing JWT-based authentication from scratch, guided by its KB and security best practices.
*   Its `[metadata]` should include:
    *   `squad_name = "Authentication Integration Squad"`
    *   `primary_output_description = "Backend modules for custom JWT generation, validation, password hashing, and associated middleware."`
    *   `primary_output_template = "N/A (generates/modifies framework-specific code files)"`
    *   `reports_to = "manager-auth-integrator"`
*   It will heavily use file creation/editing tools and its KB for secure coding patterns related to JWTs and password management.

## 7. Open Questions / Further Definition Needed ❓

*   How are JWT signing secrets generated and managed? (This mode should guide setting them as environment variables and ensure `.env.example` lists them, but not generate or store the actual secrets).
*   What is the scope of refresh token implementation? (Basic rotation, or more advanced features like detection of compromised refresh tokens?). Initially, basic rotation.
*   Does it handle token blacklisting for logout scenarios? (This is an advanced feature; initially, it might rely on short-lived access tokens and client-side token deletion for logout).