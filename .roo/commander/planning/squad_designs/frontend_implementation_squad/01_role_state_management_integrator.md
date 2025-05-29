+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-FEIMPLEMENT-STATEMGMTINT-20250515" # FEIMPLEMENT for Frontend Implementation, STATEMGMTINT for this role
title = "Squad Member Role Definition: State Management Integrator for Frontend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "frontend-implementation-squad", "state-management", "redux", "zustand", "pinia", "vuex", "svelte-stores", "context-api"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Frontend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-FEIMPLEMENT-20250515"

proposed_mode_slug = "state-management-integrator"
proposed_mode_name = "💾 State Management Integrator"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Sets up and integrates global or shared state management solutions (e.g., Redux, Zustand, Pinia, Svelte Stores, Context API) into the frontend application, connecting components to the store and defining actions/reducers/mutations as needed."
primary_output_artifact_description = "State management configuration files (e.g., store setup, reducers, actions), and modified component files that are connected to and interact with the global/shared state. Also, a report of the setup and integrations."
primary_output_artifact_template_ref = "[N/A - Creates/modifies framework-specific code and configuration files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Deep understanding of state management principles (e.g., single source of truth, unidirectional data flow).",
    "Proficiency in one or more specified state management libraries (Redux, Zustand, Pinia, Vuex, Svelte Stores, React Context API - via KB).",
    "Ability to structure state, define actions/mutations/reducers, and create selectors/getters.",
    "Skill in connecting UI components to the state store for data display and updates.",
    "Understanding of asynchronous operations within state management (e.g., for API calls handled by `api-client-integrator` that update state).",
    "Knowledge of best practices for organizing state management logic."
]
potential_kb_skill_topics = [
    # One skill per supported state library/framework combination, e.g.:
    "Setting up a Redux Toolkit Store for a React App",
    "Creating Slices and AsyncThunks in Redux Toolkit",
    "Integrating Zustand for Global State in Next.js",
    "Setting up Pinia Stores in a Vue/Nuxt Application",
    "Using Svelte Stores for Shared State",
    "Connecting React Components to a Redux Store with `useSelector` and `useDispatch`"
]
potential_kb_wisdom_topics = [
    "When to Use Global State vs. Local Component State",
    "Structuring State for Scalability and Maintainability",
    "Best Practices for Asynchronous Actions in State Management",
    "Debugging State Management Issues in [Library]"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `frontend_feature_specification_v1.md` (detailing data that needs to be shared across components or persisted globally) from `feature-requirements-analyzer`.",
    "The `tech_stack_recommendation_v1.md` (if a specific state management library was chosen) from `web-app-tech-stack-advisor`.",
    "Component/page files from `ui-component-developer` and `page-view-assembler` that need to be connected to global state.",
    "Path to the existing scaffolded/implemented project."
]
downstream_squad_members_dependent_on_output = [
    "client-logic-implementer (may need to dispatch actions or read from the store based on user interactions it implements)",
    "api-client-integrator (may dispatch actions to update the store after API calls)",
    "frontend-test-writer (will write tests for state logic and connected components)"
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode specializes in implementing and integrating shared or global state management solutions within the frontend application.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-frontend-implementer` specifying the need for global/shared state management for certain features or data. Inputs will include:
        *   Relevant sections of `frontend_feature_specification_v1.md` detailing shared data requirements.
        *   The chosen state management library (e.g., Redux, Zustand, Pinia) if specified by `web-app-tech-stack-advisor`, or a recommendation to choose one based on project needs.
        *   Paths to components/pages that need to interact with this state.
    *   Consult its Knowledge Base for setup procedures, best practices, and patterns for the chosen state management library and frontend framework.
    *   Set up the core state management store/architecture (e.g., creating Redux store, slices, reducers; Zustand store; Pinia store).
    *   Define state structure, actions, mutations, getters/selectors as required by the feature specifications.
    *   Refactor or update specified UI components and page/view components to:
        *   Read data from the global/shared state.
        *   Dispatch actions or call mutations to update the state.
    *   Handle asynchronous logic within the state management solution if it's responsible for fetching initial state or handling side effects (though primary API calls might be by `api-client-integrator`, which then updates state via this mode's setup).
    *   Ensure the state management implementation is clean, maintainable, and follows best practices for the chosen library.
    *   Report the files created/modified and a summary of the state management setup.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** New or modified framework-specific code files (e.g., `store/index.js`, `features/userSlice.js`, updated component files).
*   **Key Characteristics of Output:** A functional shared/global state management system integrated into the application, allowing components to access and update shared data consistently.

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per state library/framework.)*
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (To understand what data needs to be managed globally/shared).
*   `{{ typical_input_artifacts_expected[1] }}` (To know which library to implement, if pre-decided).
*   `{{ typical_input_artifacts_expected[2] }}` (The components that will consume or update the state).
*   `{{ typical_input_artifacts_expected[3] }}`

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: Will write client-side logic that dispatches actions to, or selects data from, the stores set up by this mode.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Will often update the state (via actions defined by this mode) after successfully fetching or mutating data on the backend.
*   `{{ downstream_squad_members_dependent_on_output[2] }}`: Will write tests for the state management logic (actions, reducers, selectors) and for components connected to the state.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `state-management-integrator` should highlight its expertise in various state libraries (via KB) and its role in structuring shared application data flow.
*   Its `[metadata]` should include:
    *   `squad_name = "Frontend Implementation Squad"`
    *   `primary_output_description = "Integrated global/shared state management solution with connected components."`
    *   `primary_output_template = "N/A (creates/modifies framework-specific code and config files)"`
    *   `reports_to = "manager-web-app-frontend-implementer"`
*   It will primarily use file creation and editing tools, with a strong reliance on its KB for library-specific implementations.

## 7. Open Questions / Further Definition Needed ❓

*   Which state management libraries should be prioritized for its initial KB? (e.g., Redux Toolkit, Zustand for React; Pinia/Vuex for Vue; Svelte Stores).
*   How does it handle initial state hydration, especially if data comes from server-side rendering or an initial API call? (It might set up the structure, and `api-client-integrator` might be responsible for the initial fetch that populates it).
*   What's its role in data persistence for state (e.g., using `redux-persist`)? (Could be an advanced skill in its KB).