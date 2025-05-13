+++
# --- Testing: Test Summary Report ---
id = "TSR-[UnitOrFeatureName]-[YYYYMMDD]" # e.g., TSR-MDP-SQUAD-V1-20250720
title = "Test Summary Report: [Name of Unit, Feature, or System Tested] - Cycle [Cycle ID/Date]"
status = "draft" # Options: draft, under-review, final, archived
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0" # Version of this report
tags = ["testing", "test-summary", "report", "quality-assurance", "[unit_or_feature_tag]"]
template_schema_doc = ".roo/commander/templates/testing/template_02_test_summary_report.README.md"

# --- Report Specifics ---
# reporting_period_start = "[YYYY-MM-DD]"
# reporting_period_end = "[YYYY-MM-DD]"
# tested_version_of_system = "[e.g., Roo Commander V8.0.1, Manager Data Product V1.0]"
# test_plan_id_ref = "TESTPLAN-[UnitOrFeatureName]-[YYYYMMDD]" # Link to the Test Plan

# --- Summary Metrics ---
# total_test_cases_planned = 0
# total_test_cases_executed = 0
# number_passed = 0
# number_failed = 0
# number_blocked = 0
# pass_percentage = "0%"
# critical_defects_found = 0
# high_defects_found = 0
+++

# Test Summary Report: {{ title | default: "[Specify Report Title]" }}

## 1. Introduction & Scope

*   **Purpose of this Report:** To summarize the testing activities, results, and overall quality assessment for the `[Name of Unit/Feature Tested]` during the test cycle ending `{{ reporting_period_end | default: "[Date]" }}`.
*   **Tested Version(s):** `{{ tested_version_of_system | default: "[Specify version(s) tested]" }}`
*   **Based on Test Plan:** `{{ test_plan_id_ref | default: "[Link to Test Plan ID/Document]" }}`
*   **Testing Period:** `{{ reporting_period_start | default: "[Start Date]" }}` to `{{ reporting_period_end | default: "[End Date]" }}`

## 2. Overall Summary of Results

[Provide a high-level executive summary of the testing outcomes. Was the testing successful? What is the overall quality assessment? Any major concerns?]

### 2.1. Key Metrics
*   **Total Test Cases Planned:** `{{ total_test_cases_planned | default: "N/A" }}`
*   **Total Test Cases Executed:** `{{ total_test_cases_executed | default: "N/A" }}`
*   **Number Passed:** `{{ number_passed | default: "N/A" }}`
*   **Number Failed:** `{{ number_failed | default: "N/A" }}`
*   **Number Blocked/Skipped:** `{{ number_blocked | default: "N/A" }}`
*   **Pass Percentage:** `{{ pass_percentage | default: "N/A" }}`
*   **Critical Defects Found:** `{{ critical_defects_found | default: "N/A" }}`
*   **High Defects Found:** `{{ high_defects_found | default: "N/A" }}`

## 3. Detailed Test Execution Summary

[This section can provide more detail, perhaps by linking to test execution logs or a summary table of test cases and their statuses if not too extensive.]

*   Reference to detailed test case results: [e.g., "See individual `TEST_CASE_*.md` files in `testing/[unit]/test_cases/`"]
*   Summary of areas with most failures (if any):
*   Summary of blocked tests and reasons:

## 4. Defects / Issues Summary

*   **New Defects Logged:** [Number, and link to defect tracking system or list of MDTM Bug Task IDs]
*   **Critical/High Severity Defects Outstanding:** [List key ones]
*   **Trend (if applicable):** [Is defect discovery rate increasing/decreasing?]

## 5. Quality Assessment & Risk Evaluation

*   **Overall Quality Assessment:** [Based on the results, provide a qualitative assessment of the tested unit/feature's stability, reliability, and adherence to requirements.]
*   **Key Risks Identified:** [Any quality risks or concerns highlighted by the testing?]
*   **Coverage Achieved:** [Was the planned test scope adequately covered?]

## 6. Recommendations

[Based on the test results and quality assessment, provide recommendations.]
*   **Go/No-Go for Release (if applicable):**
*   **Areas Requiring Further Testing:**
*   **Specific Components/Features Needing Rework:**
*   **Process Improvements for Future Testing Cycles:**

## 7. Appendix (Optional)

*   Links to detailed test logs.
*   List of all executed test cases (if not too long).

This Test Summary Report provides an overview of the quality status for `[Name of Unit/Feature Tested]`.