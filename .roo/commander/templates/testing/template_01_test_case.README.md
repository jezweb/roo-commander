# Documentation: Template `template_01_test_case.md`

## 1. Purpose

This template defines the standard structure for creating individual **Test Case documents**. A Test Case specifies the inputs, execution steps, and expected results for a single test scenario designed to verify a particular aspect of a feature, mode, or system interaction within Roo Commander V8.

Well-defined test cases are essential for systematic testing, reproducibility, and tracking the quality of the system.

## 2. Usage

1.  **Context:** Test cases are typically defined as part of a broader Test Plan (`template_00_test_plan.md`).
2.  **Create Test Case File:**
    *   Copy `[.roo/commander/templates/testing/template_01_test_case.md](.roo/commander/templates/testing/template_01_test_case.md)` into a testing directory (e.g., `[.roo/commander/testing/[unit_name]/test_cases/](.roo/commander/testing/[unit_name]/test_cases/)`).
3.  **Rename File:** Rename it descriptively with a unique ID (e.g., `TC_MDP_StrategyInput_001.md`).
4.  **Populate TOML Frontmatter (Design Time):**
    *   Fill in `id`, `title`, `test_objective`, `prerequisites`, `test_data_references`, `test_priority`.
    *   Link to `parent_test_plan_id`.
    *   Initial `status` is usually `"draft"` or `"ready-for-execution"`.
5.  **Define Test in Markdown Body (Design Time):**
    *   Detail `Test Steps (Execution Procedure)` and `Expected Overall Result(s)`.
6.  **Update After Execution (Execution Time):**
    *   Fill in `execution_date`, `tested_by`, `actual_result_summary`, final `status` (Pass/Fail/Blocked), and any `defect_ids_logged`.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `TC-[UnitShortCode]-[NNN]-[YYYYMMDD]`.
*   **`title` (String, Required):** Descriptive title of the test case.
*   **`status` (String, Required):** Lifecycle status (e.g., `"draft"`, `"ready-for-execution"`, `"pass"`, `"fail"`).
*   **`created_date` (String, Required):** Date.
*   **`updated_date` (String, Required):** Date.
*   **`version` (String, Required):** Version of this test case.
*   **`tags` (Array of Strings, Required):** Include `"testing"`, `"test-case"`, and tags for the feature/unit.
*   **`template_schema_doc` (String, Required):** `".roo/commander/templates/testing/template_01_test_case.README.md"`

### Test Case Specifics (TOML)

*   `parent_test_plan_id` (String, Optional): ID of the Test Plan this case belongs to.
*   `tested_by` (String, Optional): Who executed the test.
*   `execution_date` (String, Optional): Date of execution.
*   `actual_result_summary` (String, Optional, Multiline): Summary of what actually happened.
*   `defect_ids_logged` (Array of Strings, Optional): Links to bug reports.

### Test Design (TOML)

*   **`test_objective` (String, Required, Multiline):** What this test aims to verify.
*   `prerequisites` (Array of Strings, Optional): Conditions needed before test execution.
*   `test_data_references` (Array of Strings, Optional): Specific data used.
*   `test_priority` (String, Optional): (e.g., `"critical"`, `"high"`, `"medium"`, `"low"`).

## 4. Markdown Body Structure

*   `# Test Case: {{ title }}`: Main title.
*   `## 1. Objective`: Purpose of the test.
*   `## 2. Test Priority`: Urgency.
*   `## 3. Prerequisites`: Setup needed.
*   `## 4. Test Data`: Data to be used.
*   `## 5. Test Steps (Execution Procedure)`: **Detailed actions to perform.**
*   `## 6. Expected Overall Result(s)`: What should happen if it passes.
*   `## 7. Actual Result & Status (To be filled after execution)`: Records the outcome.

This template ensures each test case is clearly defined, executable, and its results are properly documented.