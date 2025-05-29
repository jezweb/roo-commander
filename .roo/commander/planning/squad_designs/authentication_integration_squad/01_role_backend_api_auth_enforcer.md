+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-AUTHINTEG-BACKENDAPIENFORCER-20250515" # AUTHINTEG, BACKENDAPIENFORCER for this role
title = "Squad Member Role Definition: Backend API Auth Enforcer for Authentication Integration Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "authentication-integration-squad", "backend-security", "api-security", "authentication", "authorization", "middleware", "jwt-validation"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Authentication Integration Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-AUTHINTEG-20250515"

proposed_mode_slug = "backend-api-auth-enforcer"
proposed_mode_name = "🛡️🔗 Backend API Auth Enforcer" # Combined emojis
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Implements server-side authentication and authorization mechanisms (e.g., middleware, decorators) to protect API endpoints, by validating tokens from the chosen auth provider (Clerk, Firebase, Supabase, Custom JWT) and checking user roles/permissions."
primary_output_artifact_description = "Modified API endpoint/controller/route handler files or new middleware/decorator files that integrate token validation and permission checks for the specified backend framework and authentication provider. Also, a report of endpoints secured."
primary_output_artifact_template_ref = "[N/A - Modifies existing framework-specific code files or creates new middleware/decorator files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Deep understanding of token-based authentication (JWTs primarily).",
    "Proficiency in implementing middleware or decorators for request interception in common backend frameworks (Node.js/Express, Python/Django/Flask, Next.js API routes - via KB).",
    "Experience with server-side SDKs or libraries for validating tokens from specific auth providers (Clerk Backend SDK, Firebase Admin SDK, Supabase server-side helpers, common JWT libraries - via KB).",
    "Ability to extract user identity and claims from validated tokens.",
    "Skill in implementing role-based or permission-based authorization checks against user claims.",
    "Knowledge of secure error handling for authentication/authorization failures (e.g., returning 401/403 status codes)."
]
potential_kb_skill_topics = [
    # One skill per supported backend framework/auth provider combination, e.g.:
    "Securing Express.js API Routes with Clerk Backend SDK",
    "Validating Firebase ID Tokens in a Python Flask API",
    "Protecting Next.js API Routes with Supabase JWT Verification",
    "Implementing Custom JWT Validation Middleware in [Framework]",
    "Role-Based Authorization Checks in [Framework] Middleware"
]
potential_kb_wisdom_topics = [
    "Best Practices for Backend API Authentication",
    "Securely Handling and Verifying JWTs on the Server",
    "Defense in Depth for API Security (beyond just token auth)",
    "Idempotency Considerations for Authenticated Endpoints"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `auth_implementation_plan_v1.md` (detailing which API endpoints need protection, the required auth/role levels, and the chosen auth provider/strategy) from `auth-requirements-specifier`.",
    "Information on how to access server-side auth provider SDKs or JWT secrets (e.g., environment variable names, assuming SDKs are initialized by provider-specific integrators or custom JWT implementer).",
    "The `tech_stack_recommendation_v1.md` (for chosen backend framework) or equivalent information.",
    "Path to the backend project directory and its API route/controller files."
]
downstream_squad_members_dependent_on_output = [
    "auth-testing-specialist (will write tests for secured API endpoints, including various auth scenarios).",
    "Frontend developers/modes (need to ensure their API calls include valid auth tokens to access protected backend resources).",
    "api-documentation-stubber (will document the security requirements for these endpoints)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for implementing the server-side logic that secures API endpoints based on the project's chosen authentication and authorization strategy.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-auth-integrator` including:
        *   The `auth_implementation_plan_v1.md` specifying which API endpoints to protect, the required authentication method (e.g., "Clerk JWT," "Firebase ID Token," "Custom JWT"), and any authorization rules (e.g., "admin role required").
        *   Paths to the relevant backend API endpoint/controller/route handler files.
        *   Information about the backend framework and how the chosen auth provider's server-side SDK is initialized or how custom JWTs are signed/verified.
    *   Consult its Knowledge Base for framework-specific and auth-provider-specific procedures for implementing token validation and permission checks (e.g., as middleware, decorators, or direct checks in handlers).
    *   For each specified protected API endpoint:
        *   Implement logic to extract the authentication token (e.g., from Authorization header, cookies).
        *   Validate the token using the appropriate auth provider's server-side SDK (e.g., `clerkClient.authenticateRequest`, `firebaseAdmin.auth().verifyIdToken()`, `supabase.auth.api.getUserByCookie()`) or custom JWT validation logic.
        *   If token validation is successful, extract user identity and any relevant claims (like roles or permissions).
        *   If specific authorization rules are defined (e.g., role checks), implement logic to verify these claims.
        *   Ensure that requests failing authentication or authorization are rejected with appropriate HTTP status codes (e.g., 401 Unauthorized, 403 Forbidden) and clear error messages (as per `[.roo/commander/docs/standards/09-error-handling-and-reporting-standard.md]`).
        *   If authentication is successful, make user identity information available to the downstream request handler (e.g., by attaching it to the request object).
    *   Write clean, secure, and maintainable code for these security mechanisms.
    *   Report the list of secured endpoints and the specific protection methods applied.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Modifications to existing backend framework-specific code files (e.g., route handlers, controllers, server entry points) or creation of new middleware/decorator files.
*   **Key Characteristics of Output:** Backend API endpoints that robustly enforce the specified authentication and authorization policies, protecting server-side resources from unauthorized access.

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per backend framework/auth provider.)*
        *   `express_middleware_for_clerk_jwt_validation.md`
        *   `django_rest_permissions_with_firebase_tokens.md`
        *   `supabase_rls_and_api_route_protection_nextjs.md` (if it also advises on RLS setup based on auth)
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Defines which endpoints to secure and the rules/provider).
*   `{{ typical_input_artifacts_expected[1] }}` (How the chosen auth provider's server-side validation works or where JWT secrets are).
*   `{{ typical_input_artifacts_expected[2] }}` (To apply framework-specific security patterns).
*   `{{ typical_input_artifacts_expected[3] }}` (The codebase to modify).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will write tests to verify that API endpoints are correctly protected, including scenarios for valid/invalid tokens and different permission levels.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Need to be aware of these security measures to make authenticated requests.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will need to document which endpoints require authentication and what kind of credentials/tokens are expected.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `backend-api-auth-enforcer` must emphasize its expertise in server-side API security, specifically token validation and permission checks for various auth providers and backend frameworks, guided by its KB.
*   Its `[metadata]` should include:
    *   `squad_name = "Authentication Integration Squad"`
    *   `primary_output_description = "Modified backend API files or new middleware incorporating token validation and permission checks."`
    *   `primary_output_template = "N/A (modifies/creates framework-specific code files)"`
    *   `reports_to = "manager-auth-integrator"`
*   It will primarily use file reading and precise file editing tools.

## 7. Open Questions / Further Definition Needed ❓

*   How does it handle the secure retrieval of JWT secrets or auth provider service account keys needed for server-side validation? (It should assume these are securely configured in the server environment, e.g., via environment variables, and its KB would guide on how to access them using standard environment variable practices for the given language/framework).
*   Does it set up basic API rate limiting or other general API security headers as part of its task? (Initially, focus purely on authN and authZ. Other API gateway-like security features could be separate).
*   How deeply does it go into defining complex permission logic if ABAC is needed? (Initially, it would focus on implementing checks for roles/permissions defined in the `auth_implementation_plan_v1.md`. Very complex custom permission logic might require input from `generic-business-logic-implementer`).