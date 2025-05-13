# Documentation: Template `template_00_test_plan.md`

## 1. Purpose

This template defines the standard structure for creating a **Test Plan document**. A Test Plan outlines the strategy, scope, approach, resources, and schedule for testing a specific unit, feature, or system within the Roo Commander V8 ecosystem (e.g., a new "Manager + Squad" unit, a critical workflow, or a major new capability).

It serves as a guiding document for the entire testing effort, ensuring that testing is organized, comprehensive, and aligned with quality objectives.

## 2. Usage

1.  **Initiate Testing Phase:** When a new unit/feature is ready for formal testing, or when a testing cycle is planned:
    *   Create a new testing directory if needed (e.g., `[.roo/commander/testing/[unit_name]/](.roo/commander/testing/[unit_name]/)`).
    *   Copy `[.roo/commander/templates/testing/template_00_test_plan.md](.roo/commander/templates/testing/template_00_test_plan.md)` into this directory.
2.  **Rename File:** Rename it descriptively (e.g., `00_test_plan_data_product_squad_v1.md`).
3.  **Populate TOML Frontmatter:**
    *   Fill in all placeholders.
    *   `id`: Unique ID for this test plan.
    *   `title`: `Test Plan: [Name of Unit/Feature Being Tested]`.
    *   Define `target_unit_or_feature`, `overall_test_objective`, `test_scope_in`, `test_scope_out`, `test_approach_summary`, and `success_criteria_for_plan`.
    *   Link to planned `linked_test_case_documents`.
4.  **Define Plan in Markdown Body:**
    *   Fill in all sections, elaborating on the TOML fields and providing detailed strategies for testing.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `TESTPLAN-[UnitOrFeatureName]-[YYYYMMDD]`.
*   **`title` (String, Required):** Title: `"Test Plan: [Name of Unit/Feature]"`.
*   **`status` (String, Required):** (e.g., `"draft"`, `"active"`, `"approved"`).
*   **`created_date` (String, Required):** Date.
*   **`updated_date` (String, Required):** Date.
*   **`version` (String, Required):** Version of this test plan.
*   **`tags` (Array of Strings, Required):** Include `"testing"`, `"test-plan"`, `"quality-assurance"`, and a tag for the unit/feature.
*   **`template_schema_doc` (String, Required):** `".roo/commander/templates/testing/template_00_test_plan.README.md"`

### Test Plan Specifics (TOML)

*   `test_lead` (String, Optional): Responsible person/role.
*   **`target_unit_or_feature` (String, Required):** What is being tested.
*   **`overall_test_objective` (String, Required, Multiline):** Main goal of testing.
*   **`test_scope_in` (Array of Strings, Required):** What IS being tested.
*   **`test_scope_out` (Array of Strings, Optional):** What is NOT being tested.
*   `test_approach_summary` (String, Optional, Multiline): General methodology.
*   `success_criteria_for_plan` (Array of Strings, Optional): How success of the test *effort* is measured.
*   `linked_test_case_documents` (Array of Strings, Optional): Paths to detailed test case files.
*   `linked_test_summary_report` (String, Optional): Path to the summary report once testing is done.

## 4. Markdown Body Structure

*   `# Test Plan: {{ title }}`: Main title.
*   `## 1. Introduction & Objective`: Purpose, target.
*   `## 2. Scope of Testing`: In scope, out of scope.
*   `## 3. Test Approach & Strategy`: Methodology, levels, data, environment.
*   `## 4. Test Deliverables`: What testing will produce.
*   `## 5. Test Cases & Scenarios`: Links to or summaries of test cases.
*   `## 6. Schedule & Resources (Optional)`: Timeline, people, tools.
*   `## 7. Success Criteria for this Test Plan Execution`: How the overall testing effort is judged.
*   `## 8. Risks & Contingencies for Testing (Optional)`: Risks related to the testing process.

This template provides a comprehensive framework for planning testing activities.