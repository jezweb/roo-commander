+++
# --- Squad Planning: Workflow & Artifact Flow ---
id = "SQUAD-WORKFLOW-WEBAPPBACKENDIMPL-20250515"
title = "Squad Workflow & Artifact Flow: Web App Backend Implementation Squad"
status = "defined" # Finalizing this now
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Reflects this finalization
version = "1.0"
tags = ["squad-planning", "workflow-design", "artifact-flow", "orchestration-planning", "web-app-backend-implementer-squad", "api-development"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_02_squad_workflow_and_artifact_flow.README.md"

# --- Squad & Workflow Identification ---
squad_unit_name_ref = "Web App Backend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPBACKENDIMPL-20250515"
managing_mode_slug_ref = "manager-web-app-backend-implementer"

workflow_name = "Backend Feature Implementation Workflow"
workflow_version = "1.0"
estimated_total_phases = 6 # Analyzer -> API Dev -> Logic Impl -> DB Schema/Query -> Auth Enforcer -> Test Writer -> Doc Stubber (can be somewhat parallel) - let's say 6 core sequential + parallelizable test/doc

# --- Key Workflow Characteristics ---
overall_workflow_objective = "To implement specific backend features, including API endpoints, business logic, database interactions, security, tests, and basic API documentation stubs, based on provided requirements and within an existing or scaffolded project."
key_input_to_workflow_start = "A detailed feature requirement or user story, specifying the backend functionality needed, along with the target project codebase and tech stack information, passed via an MDTM task to `manager-web-app-backend-implementer`."
final_output_of_workflow = "Implemented and unit/integration tested backend feature code (APIs, logic, data access), secured endpoints, and initial API documentation stubs, all integrated into the target project codebase."
+++

# Squad Workflow & Artifact Flow: {{ squad_unit_name_ref }}

## 1. Overview 🗺️

*   **Workflow Name:** `{{ workflow_name }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Managing Mode (Conceptual):** `{{ managing_mode_slug_ref }}`
*   **Purpose of this Document:** To define the typical operational flow for the `{{ squad_unit_name_ref }}` when tasked with implementing a backend feature. This includes identifying each phase, the responsible squad member, their key input artifacts, and their primary output artifacts. This document guides the main orchestration procedure of the `{{ managing_mode_slug_ref }}`.

## 2. Overall Workflow Objective 🎯

*   `{{ overall_workflow_objective }}`

## 3. Sequential & Parallel Phase Breakdown & Artifact Flow 🔄

*(The `manager-web-app-backend-implementer` (Mgr) receives an MDTM task for a new backend feature. All artifact paths are conceptual target locations within the project or session artifacts, e.g., `[ProjectPath]/src/api/`, `[ActiveSessionPath]/artifacts/specifications/`. The Mgr will construct precise paths for MDTM sub-tasks.)*

---
### **Phase 1: Backend Requirements Analysis**

*   **Responsible Squad Member (Slug):** `backend-requirements-analyzer`
*   **Input Artifact(s) for this Phase:**
    *   "Feature requirements/user stories (from Mgr's MDTM task)."
    *   "Path to existing project codebase (if applicable)."
    *   "Tech stack information (framework, database, ORM)."
*   **Key Activities / Purpose of this Phase:**
    *   "Analyze feature requirements to define detailed backend tasks."
    *   "Specify API endpoint contracts (methods, paths, request/response bodies)."
    *   "Identify necessary data model entities/attributes or changes."
    *   "Outline key business logic points and non-functional requirements."
*   **Primary Output Artifact(s) from this Phase:**
    *   `backend_feature_specification_v1.md`
        *   *Conceptual Target Path:* `[ActiveSessionPath]/artifacts/specifications/[FeatureName]/backend_feature_specification_v1.md`
        *   *Template Used:* `[.roo/commander/templates/design_artifacts/web_app_dev/template_backend_feature_specification.md]`

---
### **Phase 2: API Endpoint Development**

*   **Responsible Squad Member (Slug):** `generic-api-endpoint-developer`
*   **Input Artifact(s) for this Phase:**
    *   `backend_feature_specification_v1.md` (from Phase 1).
    *   "Tech stack information (backend framework)."
    *   "Path to project codebase."
*   **Key Activities / Purpose of this Phase:**
    *   "Implement API endpoint routes/controllers/resolvers as per specification."
    *   "Handle request parsing, basic validation, and response formatting."
    *   "Stub out calls to business logic services."
*   **Primary Output Artifact(s) from this Phase:**
    *   New/modified API endpoint source code files (e.g., `[ProjectPath]/src/routes/feature_routes.js`, `[ProjectPath]/src/controllers/feature_controller.py`).
    *   Report of implemented endpoints.

---
### **Phase 3: Business Logic Implementation**

*   **Responsible Squad Member (Slug):** `generic-business-logic-implementer`
*   **Input Artifact(s) for this Phase:**
    *   `backend_feature_specification_v1.md` (for business logic points).
    *   "Tech stack information (language/framework)."
    *   "Path to project codebase."
    *   (Potentially) API endpoint files (from Phase 2) for context on how logic will be invoked.
*   **Key Activities / Purpose of this Phase:**
    *   "Implement server-side business logic, service functions, data transformations."
    *   "Integrate with data access layer stubs/interfaces."
*   **Primary Output Artifact(s) from this Phase:**
    *   New/modified service layer files/modules (e.g., `[ProjectPath]/src/services/feature_service.js`).
    *   Report of implemented logic.

---
### **Phase 4: Database Schema Modification & Query Writing**
*(This phase might have two specialists working closely or in sequence: Schema Modifier first, then Query Writer, or Query Writer implementing based on models defined by Schema Modifier)*

*   **Sub-Phase 4a: Schema Modification**
    *   **Responsible Squad Member (Slug):** `generic-database-schema-modifier`
    *   **Input Artifact(s):** `backend_feature_specification_v1.md` (data model parts), Tech stack (DB type, ORM), Project path.
    *   **Activities:** Define/update ORM models, generate migration files or write DDL.
    *   **Output:** ORM model files, migration files, or DDL scripts.
*   **Sub-Phase 4b: Query Writing**
    *   **Responsible Squad Member (Slug):** `generic-database-query-writer`
    *   **Input Artifact(s):** `backend_feature_specification_v1.md` (data access needs), Schema info (from 4a), Tech stack (DB type, ORM), Project path.
    *   **Activities:** Implement CRUD operations and complex queries using ORM or SQL.
    *   **Output:** Data access layer code/functions.

---
### **Phase 5: Backend Authentication Enforcement**

*   **Responsible Squad Member (Slug):** `backend-auth-enforcer`
*   **Input Artifact(s) for this Phase:**
    *   `backend_feature_specification_v1.md` (auth requirements for endpoints).
    *   Implemented API endpoint files (from Phase 2).
    *   "Project's authentication strategy/provider information."
    *   "Path to project codebase."
*   **Key Activities / Purpose of this Phase:**
    *   "Implement authentication and authorization middleware/checks for specified API endpoints."
*   **Primary Output Artifact(s) from this Phase:**
    *   Modified API endpoint/controller files or new middleware files with auth logic.

---
### **Phase 6: Backend Test Writing**
*(Can often run in parallel with or immediately after Phases 2, 3, 4b, and 5 for the respective components)*

*   **Responsible Squad Member (Slug):** `backend-test-writer`
*   **Input Artifact(s) for this Phase:**
    *   `backend_feature_specification_v1.md`.
    *   Implemented API endpoint, business logic, and data access code files.
    *   "Testing framework information."
    *   "Path to project codebase."
*   **Key Activities / Purpose of this Phase:**
    *   "Write unit and integration tests for new/modified backend components."
*   **Primary Output Artifact(s) from this Phase:**
    *   New test files (e.g., `*.test.js`, `*_spec.py`).

---
### **Phase 7: API Documentation Stubbing**
*(Can often run in parallel with or immediately after Phase 2 and 5)*

*   **Responsible Squad Member (Slug):** `api-documentation-stubber`
*   **Input Artifact(s) for this Phase:**
    *   `backend_feature_specification_v1.md`.
    *   Implemented and secured API endpoint files.
*   **Key Activities / Purpose of this Phase:**
    *   "Generate basic API documentation stubs (OpenAPI snippets or code comments)."
*   **Primary Output Artifact(s) from this Phase:**
    *   Modified source code with documentation comments or separate API documentation snippet files.

---

## 4. Visual Workflow & Artifact Flow Diagram (Conceptual) 📊

```mermaid
graph TD
    FeatureReq["Feature Requirements (MDTM to Mgr)"] --> Mgr["manager-web-app-backend-implementer"];

    subgraph BackendImplementationSquadWorkflow
        Mgr -- Task1 --> ReqA["backend-requirements-analyzer"];
        ReqA -- backend_feature_spec.md --> Mgr;

        Mgr -- Task2 (Input: spec) --> APIDev["generic-api-endpoint-developer"];
        APIDev -- API_Code --> Mgr;

        Mgr -- Task3 (Input: spec) --> LogicImpl["generic-business-logic-implementer"];
        LogicImpl -- Logic_Code --> Mgr;
        
        Mgr -- Task4a (Input: spec) --> DBSchema["generic-database-schema-modifier"];
        DBSchema -- Schema_Files/Migrations --> Mgr;
        Mgr -- Task4b (Input: spec, schema_files) --> DBQuery["generic-database-query-writer"];
        DBQuery -- Data_Access_Code --> Mgr;

        LogicImpl --> DBQuery; # Logic uses Query Writer's functions/ORM

        Mgr -- Task5 (Input: spec, API_Code, Auth_Strategy) --> AuthE["backend-auth-enforcer"];
        AuthE -- Secured_API_Code --> Mgr;

        Mgr -- Task6 (Input: spec, All_Backend_Code) --> TestW["backend-test-writer"];
        TestW -- Test_Files --> Mgr;
        
        Mgr -- Task7 (Input: spec, Secured_API_Code) --> APIDoc["api-documentation-stubber"];
        APIDoc -- Doc_Stubs --> Mgr;
    end

    Mgr -- Implemented Backend Feature --> FinalOutput["Updated Project Codebase"];
```
*(Note: Some tasks like Test Writing and Doc Stubbing can be parallelized after their core dependencies are met.)*

## 5. Key Dependencies & Handoff Points 🔗

*   The `backend_feature_specification_v1.md` from `backend-requirements-analyzer` is the foundational artifact for most subsequent phases.
*   API endpoints developed by `generic-api-endpoint-developer` are then secured by `backend-auth-enforcer` and documented by `api-documentation-stubber`.
*   Business logic implemented by `generic-business-logic-implementer` will utilize data access functions from `generic-database-query-writer` (which relies on schema from `generic-database-schema-modifier`).
*   `backend-test-writer` depends on the implemented code from API, logic, and data access layers.
*   The `manager-web-app-backend-implementer` must ensure that the correct versions of artifacts and code files are passed as inputs to each specialist.

## 6. Considerations for the Managing Mode (`{{ managing_mode_slug_ref }}`) 🧠

*   The `{{ managing_mode_slug_ref }}`'s main KB procedure will detail this workflow, including logic for handling potential parallel execution of testing/documentation alongside core implementation phases.
*   It needs to manage the state of multiple ongoing sub-tasks and consolidate their outputs into the main project codebase.
*   Clear definition of API contracts and data models early in the process (by `backend-requirements-analyzer`) is crucial to minimize rework.
*   It will need to ensure that all code modifications are applied to the correct files in the target project directory.

This document provides the blueprint for the operational sequence of the `{{ squad_unit_name_ref }}`.