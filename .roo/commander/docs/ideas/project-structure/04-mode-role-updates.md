+++
# --- Metadata ---
id = "PLAN-PROJECT-STRUCTURE-PHASE4-V1"
title = "Project Structure Plan: Phase 4 - Mode Role & Rule Updates"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "phase4", "modes", "roles", "rules", "update", "integration"]
related_docs = [
    ".ruru/planning/project-structure/00-epic-feature-task-plan.md",
    ".roo/rules/04-mdtm-workflow-initiation.md"
]
objective = "Identify and plan necessary updates to existing mode definitions, rules, and KBs to support the new Epic-Feature-Task hierarchy."
scope = "Covers changes needed for modes to understand, create, link, and query the new artifacts."
# --- Plan Specific Fields ---
modes_to_update = [
    "roo-commander",
    "manager-product",
    "manager-project",
    "core-architect",
    "agent-context-resolver",
    # Add specific Lead modes as needed
    "lead-frontend",
    "lead-backend"
]
rules_to_update = [
    ".roo/rules/04-mdtm-workflow-initiation.md", # To mandate adding feature_id/epic_id
    ".roo/rules-roo-commander/03-delegation-simplified.md", # To mention feature/epic context
    ".roo/rules-roo-commander/09-review-status.md" # (If this exists/is recreated) or equivalent KB
]
+++

# Project Structure Plan: Phase 4 - Mode Role & Rule Updates

**Objective:** Update relevant modes and rules to integrate the new Epic-Feature-Task hierarchy.

**1. Rule Updates:**

*   **`.roo/rules/04-mdtm-workflow-initiation.md`:**
    *   **Change:** Modify Section 2 (Procedure for Initiator), Step 4 (Prepare Content - TOML). Mandate adding `feature_id` (required) and `epic_id` (recommended) when creating a task associated with a Feature. Explain that these IDs should be obtained from the parent Feature artifact.
*   **`.roo/rules-roo-commander/03-delegation-simplified.md`:**
    *   **Change:** Update Step 4 (Prepare Context) to explicitly mention including relevant `epic_id` or `feature_id` when delegating tasks that fall under these structures.
*   **Status Review Logic (e.g., KB `09-review-status.md` or `agent-context-resolver` logic):**
    *   **Change:** Update the logic to allow filtering/querying by Epic or Feature ID. Instruct the relevant mode (`manager-project` or `agent-context-resolver`) how to use the new metadata fields (`epic_id`, `feature_id` in tasks/features) for reporting.

**2. Mode Definition Updates (`.mode.md` files):**

*   **`roo-commander`:**
    *   Update `system_prompt`/role description to mention its oversight of the Epic/Feature/Task hierarchy.
    *   Update `related_context` to include paths to the new planning directories (`.ruru/epics/`, `.ruru/features/`) and relevant workflow KBs.
*   **`manager-product`:**
    *   Update role description to explicitly mention responsibility for defining Epics and decomposing them into Features.
    *   Add `related_context` for Epic/Feature directories and templates.
*   **`manager-project`:**
    *   Update role description to mention responsibility for managing Features (possibly shared with Leads) and decomposing them into MDTM Tasks, ensuring correct linking.
    *   Add `related_context` for Feature/Task directories and templates.
*   **`core-architect`:**
    *   Update role to mention contribution to Epic/Feature definition regarding technical feasibility and design.
*   **Leads (e.g., `lead-frontend`, `lead-backend`):**
    *   Update role to mention potential responsibility for decomposing Features within their domain into Tasks and overseeing their execution.
*   **`agent-context-resolver`:**
    *   Update role/instructions to include searching/summarizing Epics and Features based on ID or keywords, and understanding the links between artifacts.

**3. Knowledge Base Updates:**

*   Create new KB files detailing the specific workflows for creating Epics and Features, and for decomposing them (as defined in Phase 2 plan).
*   Update existing KB files (like the MDTM delegation details) to reflect the requirement for linking IDs.
*   Update the main KB README (`.ruru/modes/roo-commander/kb/README.md`) to include new sections/links for Epic/Feature management.

**Implementation Actions:**

*   Delegate modifications of rules and mode files to `prime-coordinator` or `util-mode-maintainer`.
*   Delegate creation/modification of KB documents to `util-writer` or handle directly.