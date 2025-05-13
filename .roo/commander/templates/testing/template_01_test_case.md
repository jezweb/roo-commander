+++
# --- Testing: Test Case ---
id = "TC-[UnitShortCode]-[NNN]-[YYYYMMDD]" # e.g., TC-MDP-001-20250720
title = "Test Case: [Descriptive Name of Test Case]"
status = "draft" # Options: draft, ready-for-execution, in-progress, pass, fail, blocked, deferred
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0" # Version of this test case
tags = ["testing", "test-case", "[unit_or_feature_tag]", "[functionality_tag]"]
template_schema_doc = ".roo/commander/templates/testing/template_01_test_case.README.md"

# --- Test Case Specifics ---
# parent_test_plan_id = "TESTPLAN-[UnitOrFeatureName]-[YYYYMMDD]" # Link to the overarching Test Plan
# tested_by = "[Role/Name]"
# execution_date = "" # YYYY-MM-DD
# actual_result_summary = "" # Populated after execution
# defect_ids_logged = [] # Links to bug reports if any

# --- Test Design ---
# test_objective = "[What specific functionality or requirement does this test case verify?]"
# prerequisites = [ # Conditions that must be met before this test can be run
#    "Prerequisite 1 (e.g., System is in X state)",
#    "Prerequisite 2 (e.g., Test data set Y is loaded)"
# ]
# test_data_references = [ # Specific data to be used
#    "User account: testuser01",
#    "Input file: sample_input_A.json"
# ]
# test_priority = "high" # e.g., critical, high, medium, low
+++

# Test Case: {{ title | default: "[Specify Test Case Title]" }}

## 1. Objective
`{{ test_objective | default: "[State the specific purpose of this test case]" }}`

## 2. Test Priority
`{{ test_priority | default: "Medium" }}`

## 3. Prerequisites
[List all conditions that must be met and setup required before executing this test case.]
*   *(Corresponds to `prerequisites` in TOML)*
    *   Prerequisite 1
    *   Prerequisite 2

## 4. Test Data
[Reference any specific test data to be used. This might be user accounts, input files, database states, etc.]
*   *(Corresponds to `test_data_references` in TOML)*
    *   Data Item 1
    *   Data Item 2

## 5. Test Steps (Execution Procedure)
[Provide clear, sequential steps to execute the test. Each step should be an unambiguous action.]
1.  **Step 1:** [Action to perform]
    *   *Expected Result for Step 1 (Optional):* [Observable outcome]
2.  **Step 2:** [Action to perform]
    *   *Expected Result for Step 2 (Optional):*
3.  **Step N:** [Action to perform]

## 6. Expected Overall Result(s)
[Describe the overall expected outcome(s) if the test case passes. This should directly relate to the test objective and acceptance criteria of the feature being tested.]
*   Expected Outcome 1:
*   Expected Outcome 2:

## 7. Actual Result & Status (To be filled after execution)

*   **Execution Date:** `{{ execution_date | default: "[YYYY-MM-DD]" }}`
*   **Tested By:** `{{ tested_by | default: "[Tester Name/Role]" }}`
*   **Actual Result:**
    `{{ actual_result_summary | default: "[Record detailed observations and outcomes here after test execution.]" }}`
*   **Status:** `{{ status | default: "[Pass/Fail/Blocked]" }}`
*   **Defects Logged (IDs):** `{{ defect_ids_logged | join: ", " | default: "None" }}`
*   **Notes/Evidence:** [Links to screenshots, logs, or other evidence]

This Test Case helps verify `[link back to specific requirement or feature being tested]`.