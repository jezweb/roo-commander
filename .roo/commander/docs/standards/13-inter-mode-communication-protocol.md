+++
# --- Basic Metadata ---
id = "STANDARD-INTER-MODE-COMM-V1"
title = "Standard: Inter-Mode Communication Protocol (Beyond MDTM)"
context_type = "standards_document"
scope = "Outlines conceptual guidelines and potential future mechanisms for direct or specialized communication between AI modes within Roo Commander, supplementing the primary MDTM task-based interaction."
target_audience = ["developers", "system_architects", "ai_modes"]
granularity = "conceptual_standard" # As it may rely on future platform features
status = "draft" # This is more forward-looking
created_date = "20250515"
last_updated = "20250515"
version = "1.0"
tags = ["standards", "communication-protocol", "inter-mode-interaction", "mcp", "api", "future-capability"]
related_context = [
    ".roo/commander/docs/standards/03-mdtm-task-files.md", # Primary communication is MDTM
    ".roo/rules/02-mdtm-task-standard.md"
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "As new platform capabilities emerge"
+++

# Standard: Inter-Mode Communication Protocol (Beyond MDTM)

## 1. Purpose

The primary mechanism for structured delegation, work assignment, and detailed progress tracking in Roo Commander is the **Markdown-Driven Task Management (MDTM)** system. However, there may be scenarios where more direct, lightweight, or specialized forms of communication between AI modes could enhance efficiency or enable more dynamic collaboration, especially within a Manager-led squad.

This document outlines conceptual guidelines and potential future considerations for such inter-mode communication protocols, intended to *supplement*, not replace, the formal MDTM system. The implementation of these protocols may depend on future capabilities of the Roo Code platform or specific MCP tool developments.

## 2. Guiding Principles for Inter-Mode Communication

*   **MDTM Primacy for Formal Tasks:** MDTM remains the standard for:
    *   Assigning significant units of work with defined objectives and deliverables.
    *   Tracking the lifecycle and detailed progress of these formal tasks.
    *   Official handoff of artifacts that are inputs/outputs of formal tasks.
*   **Clarity of Purpose:** Any non-MDTM communication should have a clearly defined purpose that MDTM cannot efficiently address (e.g., quick status checks, requests for non-critical auxiliary data, notifications of minor events).
*   **Atomicity & Statelessness (Preferred):** Direct interactions should ideally be atomic and stateless where possible, or rely on shared, well-defined state managed elsewhere (e.g., within a session artifact or a Manager's internal state representation).
*   **Traceability:** Even for non-MDTM communication, significant interactions or information exchanges **SHOULD** still be logged by the involved modes, typically within their active MDTM task logs or, if highly significant and coordinated by a Manager, summarized in the Manager's MDTM task log.
*   **Security & Permissions:** All inter-mode communication **MUST** respect the tool access (`groups`) and file access permissions defined for each mode. Modes cannot compel other modes to perform actions outside their permitted capabilities.
*   **Standardized Formats (Future):** If direct messaging or API-like calls between modes become a feature, standardized message formats (e.g., JSON-based payloads with defined schemas) would be essential.

## 3. Potential Scenarios & Mechanisms (Conceptual)

### 3.1. Scenario: Quick Status Inquiry within a Squad
*   **Need:** A Manager mode (`manager-data-product`) wants to get a quick, informal progress update from a squad member (`data-product-strategist`) on a long-running sub-task without waiting for a formal MDTM log update, perhaps to decide if it can prepare the next sub-task in parallel.
*   **Conceptual Mechanism (Future - Platform Dependent):**
    *   A dedicated "query_mode_status" tool that takes a `target_mode_slug` and a `task_id` and returns a brief status string (e.g., "Checklist item 3/5 complete", "Currently processing X").
    *   The target mode would need a way to respond to such queries without interrupting its primary task flow.
*   **Logging:** The Manager would log "Queried status of `data-product-strategist` for task `TASK-XYZ`." The strategist might not need to log receiving the query unless it's a significant event.

### 3.2. Scenario: Requesting Auxiliary, Non-Critical Data
*   **Need:** `data-product-poc-interface-architect` needs a list of common UI color palettes that `design-style-guide-keeper` (a hypothetical utility mode) maintains, but this isn't a formal input artifact for its MDTM task.
*   **Conceptual Mechanism (Future - Platform Dependent):**
    *   An "invoke_mode_function" or "request_data_from_mode" tool where `data-product-poc-interface-architect` could send a structured request (e.g., `{"request_type": "get_color_palettes", "category": "data_visualization"}`) to `design-style-guide-keeper`.
    *   `design-style-guide-keeper` would process the request (e.g., by reading its KB) and return the data in a structured format.
*   **Logging:** Both modes would log the request and response in their respective MDTM task logs.

### 3.3. Scenario: Event Notification / Pub-Sub (Advanced Future Concept)
*   **Need:** Multiple squad members need to be notified when a critical shared resource (e.g., a central data schema definition) is updated by another mode.
*   **Conceptual Mechanism (Future - Platform Dependent):**
    *   A lightweight publish-subscribe system managed by Roo Code or a dedicated "event-bus" mode.
    *   Modes could subscribe to specific event types.
    *   When an event occurs (e.g., "SCHEMA_UPDATED: `[schema_path]`"), subscribed modes receive a notification.
*   **Logging:** The publishing mode logs the event. Subscribing modes log receipt and any action taken.

### 3.4. Using Shared Session Artifacts for Indirect Communication
*   **Current Viable Mechanism:**
    *   A mode can write information to a designated session artifact (e.g., `artifacts/context/shared_status.md`).
    *   Another mode, aware of this convention, can read this artifact to get updates.
    *   This requires careful coordination by the Manager to define the artifact, its schema, and access patterns.
*   **Logging:** Both modes log their read/write operations to this shared artifact in their MDTM task logs. The Manager logs the establishment of this shared artifact.

## 4. Current Best Practices (Given Existing Platform Capabilities)

Given that direct, real-time messaging or function calls between modes might not be standard Roo Code features yet, the following are current best practices:

*   **MDTM for All Formal Work:** Continue to use MDTM tasks for all formal delegation and artifact handoffs.
*   **MDTM Task Logs for Status:** Encourage modes to provide frequent and detailed updates in their MDTM task logs. Coordinators can read these logs for progress.
*   **Clearly Defined Output Artifacts:** Ensure `output_artifacts` from one task are clearly defined and become `input_artifacts` for the next.
*   **Manager as Central Hub:** For communication within a squad, the Manager mode acts as the central communication hub. If `SquadMemberA` needs information from `SquadMemberB` (or its output), this is typically orchestrated by the Manager through the sequence of MDTM tasks.
*   **Shared Session Artifacts (Coordinated):** If truly necessary, a Manager can define a specific session artifact to be used as a shared communication point for its squad, with clear rules on how it's updated and read. This should be explicitly managed and logged.

## 5. Considerations for Designing Modes with Inter-Communication in Mind

*   **Granularity of MDTM Tasks:** If tasks are too large, the need for intermediate status updates increases. Consider if tasks can be broken down further.
*   **Mode Autonomy vs. Chattiness:** Modes should be autonomous enough to complete their MDTM tasks with the provided inputs. Overly "chatty" modes can complicate the workflow and logging.
*   **Data Consistency:** If modes are sharing data outside of formal artifact handoffs, mechanisms for ensuring data consistency become important.

## 6. Future Evolution

As the Roo Code platform evolves, more sophisticated inter-mode communication tools or protocols may become available. This standard document will be updated to reflect such capabilities. The focus will remain on ensuring that any communication method supports clarity, traceability, and the overall goals of the Roo Commander system.

This document serves as a starting point for thinking about how modes can and should interact beyond the fundamental MDTM framework, preparing us for more advanced collaborative AI workflows.