+++
# --- Basic Metadata ---
id = "KB-OUTLINE-ROO-DISPATCH-001"
title = "Knowledge Base Outline: roo-dispatch"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["roo-dispatch", "developers", "architects"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md" # Using the guide template schema
tags = ["intellimanage", "kb", "outline", "roo-dispatch", "documentation", "specification", "coordination", "delegation"]
related_docs = ["MODE-SPEC-ROO-DISPATCH-001", "RULES-ROO-DISPATCH-001"]
+++

# Knowledge Base Outline: `roo-dispatch`

## 1. Introduction / Overview 🎯

This document outlines the planned structure and content for the Knowledge Base (KB) located at `.ruru/modes/roo-dispatch/kb/`. The KB provides the `roo-dispatch` mode with detailed procedures, reference information, and guidelines necessary to fulfill its role as an efficient, lightweight task execution coordinator within the IntelliManage framework.

Given `roo-dispatch`'s focused, stateless nature, its KB primarily contains information related to **specialist selection logic** and **delegation patterns**.

## 2. KB Directory Structure 📂

```
.ruru/modes/roo-dispatch/kb/
├── README.md                     # Overview of KB contents
├── 00-kb-usage-strategy.md       # Standard KB usage strategy
├── 01-specialist-selection.md    # Logic for choosing the right specialist mode
├── 02-context-extraction.md      # Guidelines for reading artifacts and extracting context for delegates
└── 03-delegation-messaging.md    # Templates and examples for `new_task` messages
```

## 3. KB File Content Outlines 📝

### `README.md`

*   **Purpose:** Overview of the `roo-dispatch` KB.
*   **Content:**
    *   Brief description of the `roo-dispatch` role (lightweight, stateless task coordinator).
    *   Index of the KB files (listing filenames below with brief descriptions).
    *   Instructions on how the `roo-dispatch` mode should use this KB.

### `00-kb-usage-strategy.md`

*   **Purpose:** Define how `roo-dispatch` uses its own KB.
*   **Content:**
    *   Standard procedure for consulting the KB based on task type (primarily for specialist selection and delegation formatting).
    *   How to reference KB documents in internal reasoning or logs.
    *   *(Based on standard KB usage rule template)*

### `01-specialist-selection.md`

*   **Purpose:** Provide detailed logic and heuristics for selecting the optimal specialist mode for a given task.
*   **Content:**
    *   **Input Analysis:** How to analyze the task description, acceptance criteria, and checklist items from the IntelliManage artifact.
    *   **Context Consultation:** Procedure for reading the project's Stack Profile (`.ruru/context/stack_profile.json`) and the available modes summary (`.ruru/modes/roo-commander/kb/kb-available-modes-summary.md`).
    *   **Matching Logic:** Guidelines for matching task keywords, required technologies (from stack profile), and artifact type (`type` field) to specialist mode `tags` and capabilities.
    *   **Prioritization:** Rules for prioritizing specific specialists over generalists (e.g., `framework-react` vs. `lead-frontend`).
    *   **Handling Ambiguity:** Procedure for when multiple specialists seem suitable or none seem appropriate (reporting back to `session-manager`).
    *   **Examples:** Concrete examples of task descriptions mapped to selected specialists.

### `02-context-extraction.md`

*   **Purpose:** Guide the process of reading IntelliManage artifacts and extracting only the necessary context for delegation.
*   **Content:**
    *   **Reading Artifacts:** Standard procedure for using CLE/`read_file` to access the content of the primary task artifact (e.g., `TASK-ID.md`).
    *   **Identifying Key Sections:** How to locate and extract relevant information from the artifact's TOML (e.g., `title`, `related_docs`) and Markdown (e.g., `Description`, `Acceptance Criteria`, specific checklist items).
    *   **Context Minimization:** Principle of extracting *only* the context directly needed by the specialist for their specific sub-task, avoiding passing excessive or irrelevant information.
    *   **Handling Linked Artifacts:** Procedure for reading related artifacts (e.g., parent Feature, linked requirements doc) if necessary for context, based on the `related_docs` field.

### `03-delegation-messaging.md`

*   **Purpose:** Provide templates and best practices for formulating the `<message>` content when delegating via `new_task`.
*   **Content:**
    *   **Standard Message Structure:** Template for `new_task` messages, including:
        *   Clear statement of the specific sub-task goal.
        *   Extracted context (from KB `02-context-extraction.md`).
        *   Reference to the original IntelliManage artifact ID (`TASK-ID`, `FEAT-ID`).
        *   Reference to the `roo-dispatch` task ID (for traceability).
        *   Explicit request for the specialist to report completion or blockers via `attempt_completion`.
    *   **Examples:** Sample messages for different types of tasks delegated to various specialists (e.g., coding task for `dev-python`, testing task for `test-integration`).
    *   **Clarity Guidelines:** Emphasize providing unambiguous instructions and clear acceptance criteria within the message or by referencing the artifact.

## 4. Conclusion ✅

This KB outline provides the essential knowledge structure for the `roo-dispatch` mode. Focusing on specialist selection, context handling, and delegation formatting equips the mode to perform its role as an efficient, lightweight task coordinator within the IntelliManage framework.