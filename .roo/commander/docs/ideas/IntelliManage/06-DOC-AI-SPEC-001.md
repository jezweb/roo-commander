# --- Basic Metadata ---
id = "DOC-AI-SPEC-001"
title = "IntelliManage: AI Integration Specification"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["developers", "architects", "contributors", "ai_modes"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md" # Assuming this is the schema doc template
tags = ["intellimanage", "architecture", "specification", "ai", "llm", "automation", "integration"]
related_docs = ["DOC-ARCH-001", "DOC-FS-SPEC-001", "DOC-SCHEMA-001", "DOC-FUNC-SPEC-001", "DOC-METHODOLOGY-GUIDE-001"] # Link to relevant docs
+++

# IntelliManage: AI Integration Specification

## 1. Introduction / Overview 🎯

This document specifies the role, capabilities, architecture, and interaction patterns of the **AI Engine** within the IntelliManage project management framework. The AI Engine is a core component designed to automate tasks, provide intelligent insights, enhance user interaction, and adapt to project-specific workflows.

It builds upon the IntelliManage architecture (`DOC-ARCH-001`), leveraging the defined file structures (`DOC-FS-SPEC-001`), TOML schemas (`DOC-SCHEMA-001`), core functionalities (`DOC-FUNC-SPEC-001`), and methodology implementations (`DOC-METHODOLOGY-GUIDE-001`).

## 2. Core Principles of AI Integration 💡

The integration of AI into IntelliManage follows these guiding principles:

1.  **Assistant, Not Autocrat:** The AI assists users and automates processes but does not make final decisions without confirmation (especially for status changes or deletions). User override is always possible.
2.  **Context-Driven:** AI actions and suggestions are based on the information stored within the `.ruru/projects/` structure (artifacts, configuration) and potentially external integrations (Git, GitHub).
3.  **Methodology-Aware:** The AI adapts its analysis, reporting, and guidance based on the `methodology` defined in the active project's `project_config.toml`.
4.  **Proactive but Unobtrusive:** The AI should offer timely suggestions (e.g., linking related tasks, suggesting status updates) but avoid interrupting the user's flow unnecessarily.
5.  **Transparency:** AI-driven actions or suggestions should be clearly identifiable to the user.
6.  **Learning & Adaptation:** The AI should learn project-specific terminology and adapt to custom workflows defined in configuration files.

## 3. AI Engine Architecture & Interactions 🏗️

As outlined in `DOC-ARCH-001`, the AI Engine interacts with several components:

*   **Interaction Layer (User Interface):**
    *   Receives natural language queries and commands from the user.
    *   Provides natural language responses, reports, visualizations, and suggestions back to the user.
*   **Core Logic Engine (CLE):**
    *   Receives structured requests from the AI Engine to perform CRUD operations or retrieve data (e.g., `CLE.createArtifact(data)`, `CLE.getTasks(query)`).
    *   Sends data retrieved from the File System Store to the AI Engine for processing or reporting.
    *   Forwards parsed user commands relevant to AI functions (e.g., "generate report") to the AI Engine.
*   **File System Store (Indirectly via CLE):**
    *   The AI Engine requests data reads *through* the CLE.
    *   The AI Engine sends generated artifact content *to* the CLE for writing.
*   **External LLM Services:**
    *   Sends formatted prompts (instructions + context) to external Large Language Models (e.g., OpenAI, Vertex AI).
    *   Receives generated text, code, analysis, or suggestions from the LLM.
*   **Integration Layer (Indirectly via CLE):**
    *   Receives notifications about external events (e.g., Git commits, PR merges) via the CLE.
    *   Can request data from external systems (e.g., GitHub issue details) via the CLE.

## 4. Specific AI Capabilities & Functions 🤖

The AI Engine provides the following core capabilities:

### 4.1. Artifact Generation & Enhancement

*   **Function:** Creates draft Initiatives, Epics, Features, Tasks, Stories, or Bugs based on high-level user goals or natural language descriptions provided via chat.
*   **Process:**
    1.  AI Engine receives user request (e.g., "!pm create feature 'User Login with Google OAuth' for project 'frontend-app' under epic EPIC-001").
    2.  AI Engine parses the request, identifies required fields (title, project, type, parent links).
    3.  AI Engine generates draft TOML metadata and potentially a basic Markdown description/AC outline using an LLM.
    4.  AI Engine sends a `CLE.createArtifact(data)` request to the Core Logic Engine.
    5.  CLE validates schema, creates the file, and returns success/failure + path.
    6.  AI Engine confirms creation to the user.
*   **Enhancement:** Can enrich existing artifacts by adding suggested Acceptance Criteria, breaking down descriptions into subtasks (checklist items), or suggesting relevant tags based on content analysis.

### 4.2. Automated Linking

*   **Function:** Suggests and optionally creates hierarchical links (`parent_id`, `epic_id`, `feature_id`) or dependency links (`depends_on`) between artifacts.
*   **Process:**
    1.  During artifact creation or update, AI Engine analyzes the artifact's content and context (e.g., keywords, parent folder).
    2.  AI Engine queries the CLE (`CLE.findRelatedArtifacts(query)`) for potential parent/child/dependent items.
    3.  AI Engine presents suggested links to the user for confirmation via the Interaction Layer.
    4.  If confirmed, AI Engine sends `CLE.updateArtifact(id, { field: value })` requests to add the relevant ID fields.
*   **Duplicate Detection:** Can analyze new artifact descriptions against existing ones (within the project) to flag potential duplicates.

### 4.3. Status Tracking & Inference

*   **Function:** Monitors external events (Git, GitHub via Integration Layer) and chat context to suggest artifact status updates.
*   **Process:**
    1.  Integration Layer notifies CLE of relevant events (e.g., commit message "Fixes TASK-123 merged to main").
    2.  CLE forwards event details to AI Engine.
    3.  AI Engine parses the event, identifies the related artifact ID (e.g., TASK-123), and infers a potential status change (e.g., to "🟣 Review" or "🟢 Done").
    4.  AI Engine **suggests** the status change to the user via the Interaction Layer, requiring confirmation.
    5.  If confirmed, AI Engine sends `CLE.updateArtifact(id, { status: new_status })` request.
*   **Chat Context:** Can infer status updates from user chat (e.g., "I just finished working on TASK-456") and prompt for confirmation to update the status.

### 4.4. Reporting & Visualization

*   **Function:** Generates project status reports, summaries, and visualizations based on artifact data and methodology.
*   **Process:**
    1.  AI Engine receives user request for a report (e.g., "!pm report sprint 1 summary --project frontend-app").
    2.  AI Engine queries the CLE (`CLE.getArtifacts(query)`) for relevant data based on project, status, type, sprint ID, dates, etc.
    3.  AI Engine processes the retrieved data.
    4.  AI Engine generates the report in the requested format (Markdown summary, textual Kanban board, Mermaid chart for burndown/CFD).
    5.  AI Engine either displays the report directly via the Interaction Layer or sends it to the CLE (`CLE.saveReport(data)`) to be saved in the `.ruru/projects/[project_slug]/reports/` directory.
*   **Methodology-Aware:** Report generation adapts to the project's methodology (burndown for Scrum, CFD/bottleneck analysis for Kanban).

### 4.5. Guidance & Refinement

*   **Function:** Provides contextual help and suggestions to improve project management practices.
*   **Process:**
    *   Analyzes artifact content (e.g., task descriptions, ACs) for clarity and completeness, suggesting improvements.
    *   Identifies potentially oversized tasks/stories and suggests breaking them down.
    *   Provides guidance on using Scrum/Kanban based on the project's configuration.
    *   Suggests adding relevant tags or links to artifacts.

### 4.6. Natural Language Interaction

*   **Function:** Understands user queries and commands expressed in natural language.
*   **Process:**
    1.  AI Engine receives user input from the Interaction Layer.
    2.  Uses NLP/NLU techniques (potentially via external LLM) to parse intent and extract entities (artifact IDs, project names, statuses, fields, values).
    3.  Translates the parsed intent into structured requests for the Core Logic Engine (CRUD operations, data queries) or performs internal actions (report generation, guidance).

### 4.7. Learning & Adaptation

*   **Function:** Adapts to project-specific configurations and potentially learns patterns over time.
*   **Process:**
    *   Reads `project_config.toml` to understand custom statuses, workflows, and other settings. Uses this information for validation and reporting.
    *   (Future) Analyze historical data (task completion times, estimation accuracy) to improve AI-assisted estimation or identify recurring process issues.

## 5. Interaction Patterns 🔄

*   **AI -> LLM:**
    *   **Input:** System Prompt (defining AI Engine's role), Task Instruction (e.g., "Generate acceptance criteria for...", "Summarize these tasks..."), Context (relevant artifact content, schemas, configuration).
    *   **Output:** Generated text, analysis, suggestions, structured data (e.g., JSON for artifact fields).
    *   **Context Management:** Employ techniques like Retrieval-Augmented Generation (RAG) where feasible, providing only the most relevant snippets of context retrieved via the CLE to the LLM to manage token limits.
*   **AI -> Core Logic Engine (CLE):**
    *   Uses a defined set of commands/API calls representing CRUD operations and data queries (e.g., `CLE.createArtifact`, `CLE.updateArtifact`, `CLE.deleteArtifact`, `CLE.getArtifactById`, `CLE.findArtifacts`).
    *   Passes structured data (e.g., JSON representing TOML fields).
    *   Receives confirmation messages or retrieved data structures.
*   **AI -> User (via Interaction Layer):**
    *   Presents information clearly using Markdown.
    *   Prefixes suggestions/inferences (e.g., `[AI Suggestion]: ...`).
    *   Uses confirmation prompts (`ask_followup_question` equivalent) before performing actions like status changes based on inference.

## 6. Data Requirements 💾

To function effectively, the AI Engine requires access (primarily via the CLE) to:

*   All IntelliManage artifact files within `.ruru/projects/`.
*   Workspace (`projects_config.toml`) and Project (`project_config.toml`) configuration files.
*   TOML Schema definitions (`DOC-SCHEMA-001`).
*   (Optional) Git commit/PR data via the Integration Layer.
*   (Optional) Historical project data for advanced learning features.

## 7. Configuration & Customization 🔧

*   The primary mechanism for customizing AI behavior per project is the `project_config.toml` file, especially the `methodology` and `custom_statuses` fields.
*   Future enhancements could include user preferences for AI proactivity, reporting frequency, or specific guidance modules.

## 8. AI-Specific Error Handling ⚠️

*   **LLM API Errors:** Implement retry logic with backoff for transient errors. Log persistent errors. Report failures clearly to the user/CLE ("Unable to generate content due to AI service error.").
*   **Content Quality Issues:** If LLM output is irrelevant, nonsensical, or potentially harmful (hallucinations), implement internal checks or prompt the user for feedback/correction. Report low confidence in generated content.
*   **Parsing/NLU Failures:** If unable to understand user intent, ask clarifying questions rather than making assumptions.
*   **Context Limitations:** If required context exceeds LLM limits, prioritize essential information or inform the user that the analysis/generation might be incomplete.

## 9. Conclusion ✅

The AI Engine is a pivotal component of IntelliManage, transforming it from a static file structure into a dynamic, intelligent project management assistant. By handling artifact generation, linking, status tracking, reporting, and providing guidance – all while adapting to the chosen methodology – the AI Engine significantly reduces manual overhead and enhances the overall effectiveness of the project management process within the development environment. Careful implementation of its interactions, data handling, and error management is key to realizing its full potential.