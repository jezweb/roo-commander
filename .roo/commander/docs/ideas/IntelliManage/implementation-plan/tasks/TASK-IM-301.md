+++
# --- Task/Story/Bug Metadata ---
id = "TASK-IM-301"
title = "Define AI Engine interfaces and interaction points with CLE and Coordinators"
status = "⚪️ Planned"
type = "🛠️ Task" # Primarily a design/architecture task
created_date = "2025-04-28" # Use current date
updated_date = "2025-04-28" # Use current date
project_name = "intellimanage_implementation"
feature_id = "FEAT-IM-003"
# epic_id = "EPIC-IM-001" # Implied via Feature
# assigned_to = "..." # Likely Architect/Senior Dev
# reporter = "..."
priority = "🔥 Highest" # Foundational for all AI features
# estimated_effort = "..."
# due_date = "YYYY-MM-DD"
# sprint_id = "..."
tags = ["design", "architecture", "ai", "interface", "cle", "coordination", "api"]
related_docs = ["DOC-AI-SPEC-001", "DOC-ARCH-001", "MODE-SPEC-SESSION-MANAGER-001", "MODE-SPEC-ROO-DISPATCH-001"]
depends_on = ["TASK-IM-104"] # Depends on CLE base interface definition
# related_commits = []
# related_prs = []
# related_issues = []
+++

# Task: Define AI Engine interfaces and interaction points with CLE and Coordinators

## Description ✍️

Define the specific software interfaces (e.g., function signatures, API endpoints, class methods, event types) that the AI Engine will use to communicate with the Core Logic Engine (CLE) and the coordination modes (`session-manager`, `roo-dispatch`, `roo-commander`). Also define the interfaces the coordinators/CLE will use to invoke AI Engine capabilities.

This involves specifying the data structures for requests and responses for key AI functions like artifact generation, linking suggestions, status inference, reporting, guidance, and NLP parsing.

## Acceptance Criteria ✅

*   - [ ] A clear interface definition exists for how the AI Engine requests data from the CLE (e.g., `CLE.getArtifactById(id)`, `CLE.findArtifacts(query)`).
*   - [ ] A clear interface definition exists for how the AI Engine sends requests *to* the CLE (e.g., `CLE.createArtifact(data)`, `CLE.updateArtifact(id, data)` - likely reusing existing CLE interfaces).
*   - [ ] A clear interface definition exists for how Coordinators invoke AI artifact generation (e.g., `AIEngine.generateDraftArtifact(prompt, context)`).
*   - [ ] A clear interface definition exists for how Coordinators/CLE invoke AI linking suggestions (e.g., `AIEngine.suggestLinks(artifactId)`).
*   - [ ] A clear interface definition exists for how the Integration Layer/CLE notifies the AI Engine of relevant events (e.g., `AIEngine.processEvent(eventData)` for Git/Chat).
*   - [ ] A clear interface definition exists for how the AI Engine provides status update suggestions back to a Coordinator (e.g., return value from `processEvent`, or a callback/event).
*   - [ ] A clear interface definition exists for how Coordinators request reports from the AI Engine (e.g., `AIEngine.generateReport(reportType, options)`).
*   - [ ] A clear interface definition exists for how Coordinators request guidance from the AI Engine (e.g., `AIEngine.getGuidance(context)`).
*   - [ ] A clear interface definition exists for how Coordinators request NLP parsing of user input (e.g., `AIEngine.parseNaturalLanguage(text)`).
*   - [ ] Data structures (e.g., TypeScript interfaces, Python TypedDicts/dataclasses) for requests and responses are defined for each interface point.
*   - [ ] The defined interfaces align with the capabilities outlined in `DOC-AI-SPEC-001`.
*   - [ ] The design document/code comments clearly explain each interface's purpose and parameters.

## Implementation Notes / Details 📝

*   This is primarily a design task, resulting in interface definitions (in code comments, separate design docs, or interface files depending on the language/architecture).
*   Consider whether interactions will be synchronous or asynchronous (async is likely required for LLM calls).
*   Define error handling patterns for AI Engine interactions (e.g., specific error types for LLM failures, parsing failures, etc.).
*   Ensure interfaces are granular enough to support specific AI capabilities but cohesive enough to manage complexity.
*   Think about how context (e.g., active project slug, relevant artifact data) is passed efficiently between components.

## Subtasks / Checklist ☑️

*   - [ ] Define AI -> CLE data request interface(s).
*   - [ ] Define AI -> CLE action request interface(s) (likely reusing CLE's own interface).
*   - [ ] Define Coordinator -> AI artifact generation interface.
*   - [ ] Define Coordinator/CLE -> AI linking suggestion interface.
*   - [ ] Define Event -> AI notification interface.
*   - [ ] Define AI -> Coordinator status suggestion mechanism (return value, event, callback).
*   - [ ] Define Coordinator -> AI reporting interface.
*   - [ ] Define Coordinator -> AI guidance interface.
*   - [ ] Define Coordinator -> AI NLP parsing interface.
*   - [ ] Define request/response data structures for each interface.
*   - [ ] Document the defined interfaces clearly.
*   - [ ] Review interfaces for consistency and completeness against `DOC-AI-SPEC-001`.