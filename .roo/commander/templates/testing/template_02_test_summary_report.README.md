# Documentation: Template `template_02_test_summary_report.md`

## 1. Purpose

This template defines the standard structure for creating a **Test Summary Report document**. This report is generated at the end of a testing cycle to summarize the testing activities performed, the results obtained, and to provide an overall assessment of the quality of the unit, feature, or system that was tested.

It is a key deliverable for stakeholders to understand the testing outcomes, identified risks, and to make informed decisions (e.g., about a release).

## 2. Usage

1.  **Context:** Typically created after a significant portion or all test cases defined in a Test Plan (`template_00_test_plan.md`) have been executed.
2.  **Create Report File:**
    *   Copy `[.roo/commander/templates/testing/template_02_test_summary_report.md](.roo/commander/templates/testing/template_02_test_summary_report.md)` into a testing directory (e.g., `[.roo/commander/testing/[unit_name]/reports/](.roo/commander/testing/[unit_name]/reports/)`).
3.  **Rename File:** Rename it descriptively (e.g., `00_test_summary_report_data_product_squad_v1_cycle1.md`).
4.  **Populate TOML Frontmatter:**
    *   Fill in `id`, `title`, `reporting_period_start/end`, `tested_version_of_system`, `test_plan_id_ref`.
    *   Crucially, populate the summary metrics (`total_test_cases_planned`, `number_passed`, etc.).
5.  **Compile Report in Markdown Body:**
    *   Write the executive summary.
    *   Detail test execution, defect summaries, quality assessment, and recommendations based on the testing cycle.

## 3. TOML Frontmatter Schema

*   **`id` (String, Required):** Unique ID. Convention: `TSR-[UnitOrFeatureName]-[CycleID/Date]`.
*   **`title` (String, Required):** Title: `"Test Summary Report: [Name] - Cycle [ID/Date]"`.
*   **`status` (String, Required):** (e.g., `"draft"`, `"final"`, `"archived"`).
*   **`created_date` (String, Required):** Date.
*   **`updated_date` (String, Required):** Date.
*   **`version` (String, Required):** Version of this report.
*   **`tags` (Array of Strings, Required):** Include `"testing"`, `"test-summary"`, `"report"`, `"qa"`.
*   **`template_schema_doc` (String, Required):** `".roo/commander/templates/testing/template_02_test_summary_report.README.md"`

### Report Specifics (TOML)

*   `reporting_period_start` (String, Optional): Start date of test cycle.
*   `reporting_period_end` (String, Optional): End date of test cycle.
*   `tested_version_of_system` (String, Optional): Version(s) tested.
*   `test_plan_id_ref` (String, Optional): ID of the Test Plan this report relates to.

### Summary Metrics (TOML - CRITICAL)

*   `total_test_cases_planned` (Integer, Optional)
*   `total_test_cases_executed` (Integer, Optional)
*   `number_passed` (Integer, Optional)
*   `number_failed` (Integer, Optional)
*   `number_blocked` (Integer, Optional)
*   `pass_percentage` (String, Optional) (e.g., "95%")
*   `critical_defects_found` (Integer, Optional)
*   `high_defects_found` (Integer, Optional)

## 4. Markdown Body Structure

*   `# Test Summary Report: {{ title }}`: Main title.
*   `## 1. Introduction & Scope`: Purpose, what was tested, period.
*   `## 2. Overall Summary of Results`: Executive summary & Key Metrics table.
*   `## 3. Detailed Test Execution Summary`: More details on execution, links to test cases.
*   `## 4. Defects / Issues Summary`: Overview of bugs found.
*   `## 5. Quality Assessment & Risk Evaluation`: Qualitative assessment.
*   `## 6. Recommendations`: Go/No-Go, further actions.
*   `## 7. Appendix (Optional)`: Supporting links.

This template ensures that test summary reports are comprehensive, data-driven, and provide clear insights into product quality.