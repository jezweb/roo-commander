+++
# --- Basic Metadata ---
id = "STANDARD-MDTM-CHECKLIST-AUTHORING-V1"
title = "Standard: MDTM Task Checklist Authoring Best Practices"
context_type = "standards_document"
scope = "Provides best practices for authoring effective and actionable checklist items within MDTM task files, particularly when the task is assigned to an AI mode."
target_audience = ["all"] # Anyone creating MDTM tasks (human developers, Orchestrator modes, Manager modes)
granularity = "best_practice_guide"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "1.0"
tags = ["standards", "mdtm", "task-management", "checklist", "ai-instruction", "best-practices"]
related_context = [
    ".roo/commander/docs/standards/03-mdtm-task-files.md", # Overall MDTM task structure
    ".roo/rules/02-mdtm-task-standard.md", # Formal rule for MDTM tasks
    ".roo/commander/templates/tasks/template_00_mdtm_task_generic.md" # The template being populated
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "As needed"
+++

# Standard: MDTM Task Checklist Authoring Best Practices

## 1. Purpose

The `Checklist / Sub-Tasks 📝` section within an MDTM (Markdown-Driven Task Management) task file is the primary set of instructions for the AI mode assigned to that task. This standard outlines best practices for authoring these checklist items to ensure they are clear, actionable, unambiguous, and lead to reliable task execution by AI modes.

Effective checklist items are crucial for the success of the MDTM system and the overall performance of Roo Commander's delegated workflows.

## 2. General Principles for Checklist Items

*   **Action-Oriented:** Each checklist item should start with a clear action verb describing what the AI mode needs to *do*.
    *   *Good:* `- [ ] Read the input artifact specified in TOML: input_artifacts[0].`
    *   *Less Good:* `- [ ] Input artifact processing.`
*   **Clarity and Unambiguity:** Instructions should be precise and leave no room for misinterpretation by the AI. Avoid vague language.
*   **Appropriate Granularity:**
    *   Break down complex operations into a sequence of manageable steps.
    *   Avoid making checklist items too high-level (e.g., `- [ ] Design the entire system.`) or too micro-managed (e.g., `- [ ] Type the letter 'A'.`). Find a balance that represents a logical unit of work or thought for the AI.
*   **Sequential (Usually):** Checklist items are typically executed in order. If order doesn't matter for a subset of items, this can be noted, but a default sequential assumption is safest.
*   **Testable/Verifiable:** It should be clear when a checklist item is completed. This often ties into the overall task's Acceptance Criteria.
*   **Reference Inputs Explicitly:** If a step requires using specific `input_artifacts` (defined in the TOML), the checklist item should clearly reference them.
    *   *Example:* `- [ ] Analyze the 'product_strategy.md' (from input_artifacts[0]) to identify key objectives.`
*   **Specify Outputs Clearly:** If a step involves creating or modifying a file, clearly state the expected filename and target path (using workspace-root-relative paths starting with `.roo/`).
    *   *Example:* `- [ ] Create the `product_strategy_v1.md` document in `[ActiveSessionPath]/artifacts/design_outputs/[ProductName]/` using `template_product_strategy.md`.`
*   **Tool Usage (Abstract vs. Specific):**
    *   Whenever possible, describe the *function* to be performed rather than a specific tool name, unless that tool is intrinsic to the mode's role (e.g., `data-product-strategist` *uses* `template_product_strategy.md`).
    *   *Good (Abstract):* `- [ ] Save the generated content to '[path/to/file.md]' using appropriate file system tools.`
    *   *Acceptable (Specific if intrinsic):* `- [ ] Execute the build script located at 'scripts/build.js' using Node.js.`
    *   This allows the AI mode or the underlying Roo Code platform to choose the best available tool for the action.

## 3. Structuring Checklist Items

### 3.1. Simple Actions
For straightforward actions:
```markdown
- [ ] [Action Verb] [Object/Target] [Context/Parameters].
```
*   *Example:* `- [ ] Read the file specified in 'input_artifacts[0]'.`
*   *Example:* `- [ ] Update the 'status' field in this MDTM task's TOML to "🔵 In Progress".`

### 3.2. Actions with Sub-Steps
For more complex actions that have a clear internal sequence:
```markdown
- [ ] [Main Action for this Checklist Item]:
    - [ ] Sub-step 1: [Detail]
    - [ ] Sub-step 2: [Detail]
```
*   The AI should complete all sub-steps before marking the main checklist item as done.
*   *Example:*
    ```markdown
    - [ ] Populate the "Strategy Section" of `output_artifact_A.md`:
        - [ ] Summarize the 'Vision' from `input_artifact_B.md`.
        - [ ] List 2-3 SMART objectives derived from `input_artifact_B.md`.
    ```

### 3.3. Conditional Logic
While complex branching logic is better handled by the mode's internal reasoning (guided by its rules and KB), simple conditional guidance can be included in checklists if it helps clarify the flow for common scenarios.
```markdown
- [ ] Analyze user sentiment in `input_feedback.md`.
- [ ] If sentiment is predominantly positive, proceed to document key positive themes.
- [ ] If sentiment is predominantly negative, proceed to identify primary pain points.
```
(The AI would still need to make the judgment call on "predominantly positive/negative".)

### 3.4. Referencing Other Documents/Standards
Explicitly tell the AI when to consult other documents.
```markdown
- [ ] Ensure the created artifact adheres to the format defined in `.roo/rules/01-standard-toml-md-format.md`.
- [ ] For detailed orchestration steps, consult your KB procedure: `kb/procedures/01-main-orchestration-flow.md`.```

## 4. Content of Checklist Items

*   **Be Specific about Artifacts:**
    *   When referring to input or output artifacts, use the exact names or clearly describe how to identify them (e.g., "the `product_strategy.md` file provided as the first item in `input_artifacts`").
    *   Specify target paths for new artifacts using placeholders understood by the mode (e.g., `[ActiveSessionPath]/artifacts/design_outputs/[ProductName]/`).
*   **Instructions for MDTM Self-Update:**
    *   Include explicit checklist items for the AI to update its own MDTM task file, especially:
        *   `- [ ] Update this task's 'output_artifacts' TOML field with the path(s) to created file(s).`
        *   `- [ ] Update this task's 'status' TOML field to '🟢 Done' (or other appropriate status).`
        *   `- [ ] Append a final summary to this task's 'Log Entries / Notes 🪵' section.`
*   **Reporting to Coordinator:**
    *   Include a final step for the AI to report completion (or issues) to its coordinator.
        *   `- [ ] Report completion of this MDTM task (ID: {{MDTM_TASK_ID}}) to coordinator: '[coordinator_slug_or_task_id]'.`

## 5. What to Avoid in Checklists

*   **Ambiguity:** Avoid terms like "handle," "manage," "process" without further specification.
*   **Overly Complex Logic:** Do not try to encode complex conditional branching or loops that are better suited for the mode's internal programming or KB procedures. The checklist is a sequence of primary actions.
*   **Assuming Implicit Knowledge:** Don't assume the AI knows about unstated conventions unless they are part of its core `roleDefinition` or widely established workspace rules.
*   **Prescribing Specific Low-Level Tool Usage (unless necessary):** As mentioned, prefer functional descriptions. For example, instead of `- [ ] Use the 'apply_diff' tool to insert text...`, prefer `- [ ] Insert the following text into section X of file Y...`. The mode can then decide if `apply_diff` is appropriate.

## 6. Example of a Good Checklist Section (Conceptual)

For a `data-product-strategist` task:
```markdown
## 3. Checklist / Sub-Tasks 📝

*   - [ ] Read and analyze the initial PoC goal from `input_artifacts` (e.g., user brief).
*   - [ ] Consult KB skill `kb/skills/01-defining-smart-objectives.md` for guidance.
*   - [ ] Draft the "Product Vision" section for `product_strategy_v1.md`.
*   - [ ] Define 2-3 SMART objectives for the PoC and add them to `product_strategy_v1.md`.
*   - [ ] Identify the primary target audience based on inputs and document in `product_strategy_v1.md`.
*   - [ ] Articulate the core value proposition in `product_strategy_v1.md`.
*   - [ ] Save the completed `product_strategy_v1.md` to `[ActiveSessionPath]/artifacts/design_outputs/[ProductName]/product_strategy_v1.md`.
*   - [ ] Update this MDTM task's `output_artifacts` TOML field with the path to `product_strategy_v1.md`.
*   - [ ] Update this MDTM task's `status` TOML field to "🟢 Done".
*   - [ ] Append a summary of actions taken to the 'Log Entries / Notes 🪵' section of this task.
*   - [ ] Report completion of this task (ID: {{MDTM_TASK_ID}}) to `manager-data-product`.
```

## 7. Rationale

Well-authored checklists are fundamental to the "Management by Delegation via MDTM" paradigm. They:
*   Provide clear, step-by-step instructions to AI modes.
*   Enable effective progress tracking.
*   Reduce ambiguity and the likelihood of errors.
*   Form a contract between the delegating mode and the executing mode.

By following these best practices, task creators can significantly improve the reliability and efficiency of AI-driven workflows in Roo Commander.