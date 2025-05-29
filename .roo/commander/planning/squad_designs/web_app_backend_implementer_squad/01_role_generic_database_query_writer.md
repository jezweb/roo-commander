+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WEBAPPBACKENDIMPL-DBQUERYWRITER-20250515" # WEBAPPBACKENDIMPL, DBQUERYWRITER for this role
title = "Squad Member Role Definition: Generic Database Query Writer for Web App Backend Implementation Squad"
status = "draft"
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Initial creation timestamp
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "web-app-backend-implementer-squad", "database-query", "crud", "orm", "sql", "data-access-layer"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Web App Backend Implementation Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPBACKENDIMPL-20250515"

proposed_mode_slug = "generic-database-query-writer"
proposed_mode_name = "🔍 Generic Database Query Writer"
proposed_classification = "squad"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Implements data access logic (CRUD operations, complex queries) using the project's chosen ORM or query language, based on defined data models and the needs of business logic or API endpoints."
primary_output_artifact_description = "New or modified source code files (e.g., repository pattern implementations, service methods that directly query the DB, ORM query code) that perform database operations. Also, a report of queries/functions implemented."
primary_output_artifact_template_ref = "[N/A - Creates/modifies framework-specific or plain language code files.]"

# --- Skills & Knowledge ---
key_skills_required = [
    "Strong proficiency in SQL for relational databases (PostgreSQL, MySQL - via KB).",
    "Experience with query languages/APIs for NoSQL databases (MongoDB - via KB).",
    "Expertise in using common ORMs (Prisma, Django ORM, SQLAlchemy, ActiveRecord, TypeORM, Mongoose - via KB) to perform CRUD and complex queries.",
    "Ability to translate data access requirements into efficient queries.",
    "Understanding of database transaction management (basics).",
    "Knowledge of how to map query results to application data structures/objects."
]
potential_kb_skill_topics = [
    # One skill per supported DB/ORM for common query patterns, e.g.:
    "Implementing CRUD Operations with Django ORM",
    "Writing Complex Queries with Prisma Client",
    "Basic SQL SELECT, INSERT, UPDATE, DELETE Statements for PostgreSQL",
    "Querying MongoDB Collections with Mongoose",
    "Handling Database Transactions in [Framework/ORM]"
]
potential_kb_wisdom_topics = [
    "N+1 Query Problem and How to Avoid It (Conceptual)",
    "Basic Query Optimization Principles",
    "Choosing Between Raw SQL and ORM for Specific Tasks",
    "Error Handling for Database Operations"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "The `backend_feature_specification_v1.md` (for data access needs related to features) from `backend-requirements-analyzer`.",
    "Database schema information (e.g., ORM model definitions, DDL) from `generic-database-schema-modifier`.",
    "The `tech_stack_recommendation_v1.md` (for chosen database type and backend framework/ORM) or equivalent information.",
    "Path to the existing backend project directory."
]
downstream_squad_members_dependent_on_output = [
    "generic-business-logic-implementer (will call the data access functions/methods created by this mode).",
    "backend-test-writer (will write tests that may involve mocking or using these data access components)."
]
+++

# Squad Member Role Definition: {{ proposed_mode_name }}

## 1. Overview 📝

*   **Proposed Mode Name:** `{{ proposed_mode_name }}`
*   **Proposed Mode Slug:** `{{ proposed_mode_slug }}`
*   **Proposed Classification:** `{{ proposed_classification }}`
*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the `{{ proposed_mode_name }}`. This mode is responsible for writing the code that directly interacts with the database to fetch, create, update, or delete data.

## 2. Core Responsibility & Domain Focus 🎯

*   **Summary:** `{{ core_responsibility_summary }}`
*   **Detailed Responsibilities:**
    *   Receive an MDTM task from `manager-web-app-backend-implementer` including:
        *   Specific data access requirements (e.g., "fetch user by ID," "create new product record," "find all orders matching criteria") often derived from `backend_feature_specification_v1.md`.
        *   Database schema information (ORM models or DDL).
        *   The chosen database type and ORM/query language.
        *   Path to the project codebase.
    *   Consult its Knowledge Base for framework/ORM/database-specific syntax and best practices for querying.
    *   Write functions, methods, or queries within the appropriate data access layer files (e.g., repositories, services that directly use the ORM) to fulfill the specified requirements.
    *   Implement logic for:
        *   Basic CRUD (Create, Read, Update, Delete) operations.
        *   Filtering, sorting, and pagination of data.
        *   Joining related data (if applicable for relational DBs).
        *   Aggregations (e.g., count, sum, average).
    *   Ensure queries are written efficiently (at a basic level) and securely (e.g., avoiding SQL injection if writing raw SQL, though ORMs largely handle this).
    *   Handle mapping of database results to application-level data structures or objects if necessary.
    *   Implement basic transaction management for operations that require atomicity (e.g., creating multiple related records).
    *   Write clean, maintainable, and well-commented data access code.
    *   Report the list of implemented/modified data access functions/files.

## 3. Primary Output Artifact(s) 📄➡️

*   **Description:** `{{ primary_output_artifact_description }}`
*   **Format/Template:** Framework-specific or plain language code files (e.g., `.js`, `.ts`, `.py`, `.rb`) containing data access logic.
*   **Key Characteristics of Output:** Functional and reasonably efficient code for interacting with the database according to specified requirements and the defined schema.

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
        *   *(Corresponds to `potential_kb_skill_topics` in TOML. One per DB/ORM for common operations.)*
        *   `performing_crud_with_django_orm.md`
        *   `complex_select_queries_with_prisma.md`
        *   `mongodb_find_and_update_mongoose.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `{{ potential_kb_wisdom_topics[0] }}`
        *   `{{ potential_kb_wisdom_topics[1] }}`
        *   `{{ potential_kb_wisdom_topics[2] }}`
        *   `{{ potential_kb_wisdom_topics[3] }}`

## 5. Interactions & Dependencies within the Squad Workflow 🔄

### 5.1. Typical Input Artifacts Expected
*   `{{ typical_input_artifacts_expected[0] }}` (Specifies what data operations are needed).
*   `{{ typical_input_artifacts_expected[1] }}` (The schema it will be querying against).
*   `{{ typical_input_artifacts_expected[2] }}` (To know which database type, ORM, and KB procedures to use).
*   `{{ typical_input_artifacts_expected[3] }}` (The codebase to add/modify data access logic).

### 5.2. Downstream Dependencies (Who uses its output?)
*   `{{ downstream_squad_members_dependent_on_output[0] }}`: The business logic layer will use the functions/methods created by this mode to interact with the database.
*   `{{ downstream_squad_members_dependent_on_output[1] }}`: Tests for business logic will indirectly test this data access layer, or specific tests might target these data access components.

## 6. Considerations for `.mode.md` & System Prompt 💡

*   The `roleDefinition` for `generic-database-query-writer` must emphasize its KB-driven ability to write data access code for various specified database systems and ORMs.
*   Its `[metadata]` should include:
    *   `squad_name = "Web App Backend Implementation Squad"`
    *   `primary_output_description = "Source code files containing data access logic (queries, CRUD operations) for a specified database/ORM."`
    *   `primary_output_template = "N/A (generates/modifies framework-specific or plain language code files)"`
    *   `reports_to = "manager-web-app-backend-implementer"`
*   It will heavily use file creation/editing tools and its KB for database/ORM-specific query syntax and patterns.

## 7. Open Questions / Further Definition Needed ❓

*   How does it handle complex joins or aggregations that might require optimization? (Initially, it would implement them based on requirements; optimization might be a separate, more advanced task or mode).
*   What's its role in defining or using data transfer objects (DTOs) if the project uses them? (It would likely consume DTO definitions for request/response mapping if provided by `backend-requirements-analyzer` or `generic-business-logic-implementer`).
*   How deeply should it be involved in transaction management beyond basic atomicity for a single operation? (Complex, multi-step transactions might be orchestrated by the `generic-business-logic-implementer` which then calls individual query methods from this mode).