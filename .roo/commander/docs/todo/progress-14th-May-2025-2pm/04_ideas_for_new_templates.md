# Roo Commander V8: Brainstorming Ideas for New System Templates

## 1. Purpose of this Document

This document serves as a living list for brainstorming and tracking ideas for **new TOML+Markdown templates** that could enhance the Roo Commander V8 system. As new workflows, modes, or documentation needs arise, new standardized templates can help maintain consistency and improve efficiency.

The current overview of existing templates is in `[.roo/commander/docs/developer_guides/04_template_overview.md](.roo/commander/docs/developer_guides/04_template_overview.md)`.
The process for creating new templates is outlined in `[.roo/commander/docs/developer_guides/08_creating_and_managing_system_templates.md](.roo/commander/docs/developer_guides/08_creating_and_managing_system_templates.md)`.

## 2. Criteria for a New Template

A new template might be beneficial when:
*   A new type of structured document is frequently created.
*   Ensuring consistent metadata (TOML) and content structure (Markdown) for a new document type is important.
*   AI modes need a predictable format to parse or generate a new type of artifact.

## 3. Brainstormed Template Ideas

---
### **A. Deployment & Operations Templates**
*   **Location:** `[.roo/commander/templates/deployment/](.roo/commander/templates/deployment/)` (New Category)

    1.  **`template_00_deployment_plan.md`**
        *   **Purpose:** To outline the strategy, steps, resources, and rollback procedures for deploying an application or system update.
        *   **Key TOML:** `deployment_id`, `target_environment` (dev, staging, prod), `application_version`, `deployment_type` (blue/green, canary, full), `downtime_expected`, `rollback_plan_summary`.
        *   **Markdown:** Detailed pre-deployment checks, deployment steps, post-deployment verification, rollback procedure.
        *   **Used by:** `manager-cloud-infrastructure`, `web-app-deployment-specialist`, `release-process-assistant`.

    2.  **`template_01_server_configuration_doc.md`**
        *   **Purpose:** To document the configuration of a specific server or service instance.
        *   **Key TOML:** `server_id`, `hostname`, `ip_address`, `os_version`, `primary_role`, `environment`.
        *   **Markdown:** Sections for installed software, network configuration, security settings, resource allocation, key config file paths and their summaries.
        *   **Used by:** `cloud-infra-*` specialists, `infra-mcp-setup-specialist`.

    3.  **`template_02_incident_postmortem_report.md`**
        *   **Purpose:** To document an incident, its impact, root cause analysis, resolution steps, and lessons learned.
        *   **Key TOML:** `incident_id`, `start_time`, `end_time`, `severity`, `services_affected`, `status` (open, resolved, monitoring).
        *   **Markdown:** Timeline, impact analysis, root cause, resolution, action items.
        *   **Used by:** (Future) `incident-response-manager` or `devops-lead`.

---
### **B. AI Model Development Templates (for a future AI Model Dev Squad)**
*   **Location:** `[.roo/commander/templates/ai_models/](.roo/commander/templates/ai_models/)` (New Category)

    1.  **`template_00_model_training_log.md`**
        *   **Purpose:** To log the parameters, dataset, and results of an AI model training run.
        *   **Key TOML:** `training_run_id`, `model_architecture`, `dataset_version`, `hyperparameters` (as a nested table or string), `start_time`, `end_time`, `final_accuracy_metric`.
        *   **Markdown:** Training environment details, epoch-by-epoch metrics (if applicable), notes on convergence or issues.
        *   **Used by:** `ai-model-training-scripter`.

    2.  **`template_01_model_evaluation_report.md`**
        *   **Purpose:** To report the performance of a trained model against various metrics and test datasets.
        *   **Key TOML:** `evaluation_id`, `model_version_tested`, `test_dataset_id`, `key_performance_metrics` (e.g., accuracy, precision, recall, F1, AUC as key-value pairs).
        *   **Markdown:** Detailed breakdown of metrics, confusion matrix (if applicable), qualitative analysis, comparison against benchmarks, go/no-go recommendation for deployment.
        *   **Used by:** `ai-model-evaluation-analyst`.

    3.  **`template_02_data_preprocessing_pipeline.md`**
        *   **Purpose:** To document the steps involved in preparing raw data for model training.
        *   **Key TOML:** `pipeline_id`, `source_data_description`, `output_data_format`, `version`.
        *   **Markdown:** Sequential steps (cleaning, transformation, feature engineering, splitting), tools/libraries used.
        *   **Used by:** `ai-data-preparation-specialist`.

---
### **C. Enhanced MDTM & Project Management Templates**
*   **Location:** `[.roo/commander/templates/tasks/](.roo/commander/templates/tasks/)` or a new `project_management/` folder.

    1.  **`template_01_mdtm_epic_definition.md`**
        *   **Purpose:** For defining larger "Epics" that might encompass multiple feature-level MDTM tasks.
        *   **Key TOML:** `epic_id`, `title`, `status`, `owner`, `related_features` (array of MDTM Task IDs for features).
        *   **Markdown:** Epic description, business goals, high-level requirements.
        *   **Used by:** `manager-product` (if we create one), `roo-commander` for very large initiatives.

    2.  **`template_02_mdtm_user_story.md`**
        *   **Purpose:** A more formal template for capturing user stories if needed, potentially linked to MDTM feature tasks.
        *   **Key TOML:** `story_id`, `title` (As a [type of user], I want [an action] so that [a benefit/value]), `status`, `priority`, `assigned_feature_task_id`.
        *   **Markdown:** Acceptance criteria for the story, notes.
        *   **Used by:** `manager-product`, requirements analysts.

---
### **D. Workspace Maintenance & Governance Templates**
*   **Location:** `[.roo/commander/templates/workspace_maintenance/](.roo/commander/templates/workspace_maintenance/)` (New Category)

    1.  **`template_00_standards_compliance_report.md`**
        *   **Purpose:** For the `standards-guardian` mode to report its findings after reviewing components.
        *   **Key TOML:** `report_id`, `review_date`, `components_reviewed` (array of paths), `overall_compliance_status` (pass/fail/warnings).
        *   **Markdown:** List of standards checked, specific deviations found (with paths/line numbers), recommendations.
        *   **Used by:** `standards-guardian`.

    2.  **`template_01_mcp_server_config_record.md`**
        *   **Purpose:** For `infra-mcp-setup-specialist` to document the configuration of a successfully set up MCP server.
        *   **Key TOML:** `mcp_server_name`, `type` (e.g., Vertex, Ollama), `endpoint_url`, `status` (active, inactive), `notes_on_auth`.
        *   **Markdown:** Setup steps followed, key configuration parameters, troubleshooting notes.
        *   **Used by:** `infra-mcp-setup-specialist`.

---
### **E. Refinements or Specializations of Existing Templates**

*   **Specialized KB Article Templates:**
    *   While we have generic `skill`, `wisdom`, etc., templates, a very complex mode might benefit from a more specialized version. For example, a `template_kb_api_documentation_skill.md` for a mode that writes API docs, pre-filled with sections specific to OpenAPI specs.
    *   **Thought:** Defer this until a clear need arises to avoid over-proliferation. The generic ones are quite flexible.

*   **More Granular Session Artifacts:**
    *   We have a good set. If specific, recurring types of information are frequently captured in general `NOTE-*.md` files, a dedicated template might emerge.
    *   **Thought:** Current set is likely sufficient for now.

## 4. Process for Adding New Templates

1.  Identify a recurring need for a new structured document type.
2.  Draft the template `.md` file, defining its TOML frontmatter and Markdown structure.
3.  Draft its corresponding `.README.md` file, detailing the schema and usage.
4.  Place both files in the appropriate subdirectory of `[.roo/commander/templates/](.roo/commander/templates/)`.
5.  Update the `[.roo/commander/docs/developer_guides/04_template_overview.md](.roo/commander/docs/developer_guides/04_template_overview.md)` to include the new template.
6.  Announce the new template to relevant developers/modes.

This document serves as a living list for brainstorming future template needs.