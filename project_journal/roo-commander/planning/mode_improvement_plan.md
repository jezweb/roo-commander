# Custom Mode Improvement Implementation Plan

**Goal:** Enhance the robustness, clarity, and consistency of Roo Code custom modes based on provided suggestions, improving overall system reliability and user experience.

**Target Location:** `project_journal/roo-commander/planning/mode_improvement_plan.md`

## Improvement Areas & Tasks

### 1. Error Handling & Robustness (Priority: High ❗)

*   **Task 1.1: Handle Delegated Task Failures (Management Modes)**
    *   **Description:** Define and implement standard procedures for Management Modes (`roo-commander`, `project-manager`, `technical-architect`, `devops-manager`) to handle failures reported by delegated tasks (e.g., `new_task` failures or specialist `attempt_completion` errors). Instructions should cover logging the failure, analyzing the cause, and determining next steps (retry, re-delegate, consult another role, escalate, ask user).
    *   **Affected Modes:** `roo-commander`, `project-manager`, `technical-architect`, `devops-manager`
    *   **Implementer Mode:** `technical-writer` (to draft instructions), `code` (to update mode JSONs)
*   **Task 1.2: Handle Missing Context Files**
    *   **Description:** Implement checks within all modes that reference specific `project_journal` documents (requirements, architecture, designs, etc.). If a required file is missing, the mode should state this, log the issue, and request clarification from the appropriate role (PM, TA, Commander, User) before proceeding.
    *   **Affected Modes:** All modes referencing specific `project_journal` documents.
    *   **Implementer Mode:** `technical-writer` (to draft instructions), `code` (to update mode JSONs)
*   **Task 1.3: Standardize `execute_command` Failure Handling**
    *   **Description:** Ensure all modes utilizing the `execute_command` tool have explicit instructions to report the full command output/error upon failure, log the failure in technical notes, and halt the current operation pending resolution or user guidance. This is especially critical for `git-manager`.
    *   **Affected Modes:** Modes in `command` group (e.g., `git-manager`, `cicd-specialist`, `infrastructure-specialist`, `containerization-developer`, specialists using build/test/deploy commands).
    *   **Implementer Mode:** `technical-writer` (to draft instructions), `code` (to update mode JSONs)
*   **Task 1.4: Add Specific Tool/API/Framework Error Handling**
    *   **Description:** Enhance specialist modes with instructions for handling common errors specific to their domain tools/APIs/frameworks (e.g., API rate limits, SDK errors, DB connection issues, framework exceptions). Include guidance on logging, reporting, or appropriate retry logic.
    *   **Affected Modes:** `openai-api-developer`, `google-gemini-api-developer`, `vertex-ai-developer`, `firebase-specialist`, `supabase-developer`, `rag-database-developer`, `agentic-ai-developer`, `ci/cd-specialist`, `infrastructure-specialist`, `security-specialist`, etc.
    *   **Implementer Mode:** `technical-writer` (to draft instructions), `code` (to update mode JSONs)
*   **Task 1.5: Clarify Error Handling for Initial Modes**
    *   **Description:** Refine error handling for `discovery-agent` (handling unclear goals, missing project slug confirmation) and `project-initializer` (handling failures during delegated file/directory creation).
    *   **Affected Modes:** `discovery-agent`, `project-initializer`
    *   **Implementer Mode:** `technical-writer`, `code`

### 2. Clarity & Consistency (Priority: Medium 💡)

*   **Task 2.1: Standardize Delegation Mechanism Specification**
    *   **Description:** Ensure all mode instructions consistently specify the intended delegation mechanism (primarily `new_task` directed at the `code` mode) for saving technical notes and formal documents.
    *   **Affected Modes:** All modes performing journaling or saving formal documents.
    *   **Implementer Mode:** `technical-writer`, `code` (audit and update JSONs)
*   **Task 2.2: Reinforce Timestamp Format Consistency**
    *   **Description:** Ensure instructions and examples consistently use the `YYYY-MM-DD_HH-MM-SS` format for technical note filenames.
    *   **Affected Modes:** All modes saving technical notes.
    *   **Implementer Mode:** `technical-writer`, `code` (audit and update JSONs)
*   **Task 2.3: Standardize `attempt_completion` Content**
    *   **Description:** Reinforce across all modes that the `result` field in `attempt_completion` must include both a concise summary of the work done *and* explicit paths to any saved notes or documents.
    *   **Affected Modes:** All modes using `attempt_completion` after saving notes/docs.
    *   **Implementer Mode:** `technical-writer`, `code` (audit and update JSONs)
*   **Task 2.4: Verify Shell Command Warning Consistency**
    *   **Description:** Audit all mode definitions to ensure the "Shell Command Generation" warning is present if and only if the mode includes the `command` group, and that the warning text is consistent.
    *   **Affected Modes:** All modes.
    *   **Implementer Mode:** `code` (audit JSONs)
*   **Task 2.5: Add Mode-Specific Reminders/Clarifications**
    *   **Description:** Incorporate specific reminders or clarifications into relevant mode instructions (e.g., WCAG compliance for Frontend/Accessibility, PSR standards for PHP, Mermaid format preference for TA/DB diagrams, constructive feedback tone for Code Reviewer, audience adaptation for Tech Writer).
    *   **Affected Modes:** `frontend-developer`, `accessibility-specialist`, `php-laravel-developer`, `technical-architect`, `database-specialist`, `code-reviewer`, `technical-writer`.
    *   **Implementer Mode:** `technical-writer`, `code`

### 3. Advanced Features / Minor Improvements (Priority: Low 📄)

*   **Task 3.1: Evaluate `apiConfiguration` Usage**
    *   **Description:** Evaluate modes where defining `apiConfiguration` could optimize performance or cost by specifying different LLM models for certain sub-tasks. Implement where beneficial.
    *   **Affected Modes:** Potentially `complex-problem-solver`, modes performing summarization.
    *   **Implementer Mode:** `technical-architect` (to evaluate), `code` (to implement)
*   **Task 3.2: Review Emoji Consistency**
    *   **Description:** Review mode emojis for uniqueness and clear representation. Update as needed.
    *   **Affected Modes:** All modes.
    *   **Implementer Mode:** `code` (audit JSONs)
*   **Task 3.3: Clarify/Expand Placeholder Text**
    *   **Description:** Review placeholder text (e.g., `[... Core Knowledge sections remain unchanged ...]`) in specialist mode definitions. Expand or remove for better clarity if feasible without excessive length.
    *   **Affected Modes:** `react-specialist`, `material-ui-specialist`, `tailwind-specialist`, `firebase-specialist`.
    *   **Implementer Mode:** `technical-writer`, `code`

## Implementation Notes

*   All changes involve modifying the custom mode definition `.json` files, likely located within the `tools/mode_configurator/public/mode_templates/` directory.
*   The `code` mode should be used for the actual editing and saving of the JSON files.
*   The `technical-writer` mode can be delegated tasks to draft the specific wording for updated instructions within the JSON files.
*   The `git-manager` mode will be needed to stage and commit the updated mode definition files once changes are complete and verified.
*   Consider implementing these tasks in batches, potentially grouped by priority (High, Medium, Low) or by theme (e.g., all Error Handling tasks).