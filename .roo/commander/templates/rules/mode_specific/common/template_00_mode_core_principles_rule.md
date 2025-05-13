+++
# --- Basic Metadata (Required for Mode Core Principles Rule) ---
id = "[MODE_SLUG_UPPERCASE]-RULE-CORE-PRINCIPLES-V[Version]" # e.g., RC-RULE-CORE-PRINCIPLES-V1, MDP-RULE-CORE-PRINCIPLES-V1
title = "[Mode Name]: Rule - Core Operational Principles & KB Usage"
context_type = "rules" # Fixed for rule documents
scope = "Defines foundational operational principles and Knowledge Base (KB) usage for the '[Mode Name]' ([mode_slug]) mode."
target_audience = ["[mode_slug]"] # MUST be the slug of the mode this rule applies to
granularity = "procedure" # Contains procedural elements for KB lookup and core operations
status = "draft" # Initial status: "draft", "active"
last_updated = "{{YYYYMMDD}}" # Placeholder for date of last update
version = "1.0" # Initial version of this rule document when instantiated
tags = ["rules", "mode-specific", "[mode_slug_tag]", "core-principles", "kb-lookup"] # Add role archetype tag e.g., "orchestrator", "manager", "squad-member"
related_context = [
    ".roo/commander/modes/[mode_slug]/[mode_slug].mode.md", # Link to the mode definition
    ".roo/commander/modes/[mode_slug]/kb/README.md" # Link to its KB Index
    # Add paths to key workspace rules this mode must adhere to (e.g., MDTM, Session Management)
]
template_schema_doc = ".roo/commander/templates/rules/template_00_mode_core_principles_rule.README.md" # Path to its own schema

# --- Rule Specific Fields (Optional) ---
# enforcement_level = "critical"
# rationale_summary = "Ensures the [Mode Name] operates consistently, effectively, and leverages its KB appropriately in its designed role."
# trigger_conditions = "Applied continuously during the mode's operation."
+++

# [Mode Name]: Rule - Core Operational Principles & KB Usage

## 1. Objective

To establish the fundamental operational principles and the standard procedure for Knowledge Base (KB) consultation that the **`[Mode Name]`** (`[mode_slug]`) mode **MUST** follow to successfully execute its designated role and responsibilities within the Roo Commander V8 ecosystem.

## 2. Scope & Applicability

*   **Scope:** These principles and procedures govern all key aspects of the `[Mode Name]` mode's behavior, including its primary functions, decision-making logic, and how it utilizes its dedicated KB.
*   **Applies To:** This rule applies exclusively to the `[Mode Name]` (`[mode_slug]`) mode.

## 3. Core Operational Principles for `[Mode Name]`

*(This section MUST be customized for each mode based on its archetype: Orchestrator, Manager, or Squad Member. It should outline 3-7 critical, high-level principles guiding its operation. Refer to the mode's `.mode.md` system prompt for its core responsibilities.)*

1.  **Principle 1: [e.g., Role Adherence & Task Focus]**
    *   [Detail specific to the mode's primary function, e.g., "Strictly adhere to the objectives and checklist of your assigned MDTM task."]
2.  **Principle 2: [e.g., Adherence to Workspace Standards]**
    *   [Detail, e.g., "All created artifacts MUST conform to `.roo/rules/01-standard-toml-md-format.md`. All MDTM task interactions MUST conform to `.roo/rules/02-mdtm-task-standard.md`."]
3.  **Principle 3: [e.g., Communication & Reporting Protocol]**
    *   [Detail, e.g., "Report completion, errors, or blockers promptly to your designated coordinator as specified in your MDTM task."]
4.  **Principle 4: [e.g., Session Context Awareness - if applicable]**
    *   [Detail, e.g., "Operate within the active `RooComSessionID` provided. Ensure all created artifacts are correctly associated with the session."]
5.  **Principle 5: [Add more as needed for the specific mode's core functions]**

## 4. Knowledge Base (KB) Utilization Procedure for `[Mode Name]`

1.  **Mandatory KB Consultation:** You **MUST** consult your own Knowledge Base (KB) located at `.roo/commander/modes/[mode_slug]/kb/` for your specific operational procedures, reference materials, examples, skills, and wisdom relevant to your tasks and role.
2.  **Primary Entry Point (KB Index):** Always begin your KB consultation by reading your KB Index file:
    *   `kb/README.md` (located at `.roo/commander/modes/[mode_slug]/kb/README.md`).
    This file provides an overview of your KB structure and links to key documents within the standard subdirectories (`prompts/`, `procedures/`, `reference/`, `examples/`, `skills/`, `wisdom/`).
3.  **Targeted Information Retrieval:**
    *   Based on your current task and the guidance in your KB `README.md`, identify and read the most relevant file(s) from your KB subdirectories.
    *   *(This section can be further customized for each mode archetype to point to typical KB sections it would use, e.g., Managers prioritize `kb/procedures/01-main-orchestration-flow.md`)*
4.  **Apply Information:** Integrate the information, procedures, or reference data obtained from your KB directly into your operational logic, decision-making, and interactions.
5.  **Handling Missing KB Information:**
    *   If required information is not found within your KB after a reasonable search:
        *   Log this knowledge gap (e.g., in your MDTM task log or session log via your coordinator).
        *   Report to your coordinator that you lack specific KB guidance for the current step and may need to rely on your general training or request clarification/further instructions.

## 5. Rationale

These core principles and KB usage procedures ensure that the `[Mode Name]` mode:
*   Operates consistently and reliably according to its designed role.
*   Effectively leverages its specialized knowledge codified in its KB.
*   Adheres to essential workspace standards.
*   Maintains clear lines of responsibility and communication.

**Adherence to these core principles and KB usage procedures is critical for the `[Mode Name]` mode to function correctly and contribute effectively to the overall system.**