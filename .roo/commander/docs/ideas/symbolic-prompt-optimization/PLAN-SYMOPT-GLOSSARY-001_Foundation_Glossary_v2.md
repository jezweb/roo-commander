+++
# --- Basic Metadata ---
id = "PLAN-SYMOPT-GLOSSARY-001"
title = "V2 Foundation Glossary for Roo Commander Symbolic Prompt Optimization" # Updated Title
status = "draft" # Start as draft
created_date = "2025-04-18" # Original date
updated_date = "2025-04-22" # Revision date
version = "0.2" # Updated Version
tags = ["glossary", "optimization", "prompt-engineering", "symbolic-language", "reference", "roo-commander", "foundation"] # Added foundation
template_schema_doc = ".ruru/templates/toml-md/09_documentation.README.md" # Using general doc template schema

# --- Ownership & Context ---
# author = "AI Assistant"
owner = "core-architect"
related_docs = [
    "PLAN-SYMOPT-001_Symbolic_Prompt_Optimization_v2.md",
    ".ruru/docs/standards/symbolic_syntax.md" # Link to the future standard doc
    ]
# related_tasks = []

# --- AI Interaction Hints (Optional) ---
context_type = "reference"
target_audience = ["all"]
granularity = "detailed"
+++

# V2 Foundation Glossary for Roo Commander Symbolic Optimization (Draft v0.2)

## 1. Introduction / Purpose 🎯

*   This document provides a foundational glossary of symbols intended for use within the Roo Commander system to enhance prompt efficiency, density, and precision.
*   **CRITICAL:** These symbols require explicit definition and consistent usage interpretation, primarily within mode-specific Knowledge Bases (`.ruru/modes/<slug>/kb/`) referencing a central standard (`.ruru/docs/standards/symbolic_syntax.md`). AI modes should be instructed to consult their KB for interpretation guidance.
*   **Goal:** Replace common verbose phrases with concise symbols, primarily within Markdown content (rules, KB articles, task notes, logs, system prompts).

## 2. Guiding Principles 🤔

*   **Clarity:** Each symbol should have a reasonably unambiguous primary meaning within the Roo context.
*   **Conciseness:** Symbols should be shorter than the phrases they replace. Aim for likely single-token representations where possible.
*   **Relevance:** Focus on frequently used concepts, actions, entities, states, and constraints within Roo Commander's operational domain.
*   **Readability:** Balance density with human readability. Use mnemonic symbols where practical.
*   **Consistency:** Define usage patterns (e.g., `Symbol⟨Entity⟩{Param="Value"}`).

## 3. Syntax Conventions (Proposed)

*   **Symbols:** Standalone characters (Unicode preferred).
*   **Entities/Concepts:** Enclosed in angle brackets `⟨EntityName⟩` (e.g., `⟨File⟩`, `⟨Task⟩`, `⟨Rule⟩`).
*   **Parameters/Details:** Enclosed in curly braces `{Detail="Value"}` or `{flag}` (e.g., `{path="src/file.js"}`, `{status="Done"}`, `{recursive}`).

## 4. Proposed Foundation Symbols ✨

*(This is a significantly expanded list based on repo analysis. Needs review, refinement, and testing.)*

| Category           | Symbol | Proposed Meaning (Roo Context)                   | Potential Usage Example                                       | Notes / Caveats                                    |
| :----------------- | :----- | :------------------------------------------------ | :---------------------------------------------------------- | :--------------------------------------------------- |
| **Core Concepts**  | `🎯`   | Goal, Objective, Purpose                          | `# 1. Objective 🎯`                                         | Already used. Formalize meaning.                   |
|                    | `💡`   | Idea, Suggestion, Rationale, Learning             | `## Rationale / Justification 💡`                             | Already used. Formalize meaning.                   |
|                    | `🤔`   | Question, Problem Statement, Context Needed       | `## Problem Statement 🤔`, `🤔 {Clarification needed}`      | Already used. Formalize meaning.                   |
|                    | `⚠️`    | Warning, Risk, Potential Issue, Caution           | `⚠️ {High Complexity}`, `## Risks ⚠️`                       | Already used. Formalize meaning.                   |
|                    | `🔗`   | Link, Relationship, Dependency                    | `# 5. Related Links 🔗`, `🔗⟨Task⟩{id="TASK-123"}`          | Already used. Formalize meaning.                   |
|                    | `⚙️`    | Process, Workflow, Configuration, Generation      | `⚙️ ACQA Process`, `⚙️ {config="tailwind.config.js"}`       | Used in ACQA. Broad, needs context.                 |
|                    | `Σ`    | Summary, Synthesis, Aggregation                   | `<result>Σ: [Summary text]</result>`                      | Greek Sigma. Potential ambiguity.                  |
|                    | `Δ`    | Change, Modification, Diff                        | `Δ {file="xyz.md"}`, `apply_diff Δ`                       | Greek Delta. Common for change.                    |
|                    | `⊕`    | Integration, Combine, Add                         | `⊕⟨API⟩{endpoint="/users"}`                               | Math symbol for direct sum.                        |
| **Rules/Policies** | `⊢`    | Adhere to, Must follow, Based on, Conforms to     | `⊢⟨Rule⟩{id="RULE-X"}`, `⊢ {Standard="PEP8"}`            | Logic symbol (Turnstile). Strong scent.           |
|                    | `¬`    | Avoid, Not, Do not include, Exclude               | `¬{Hardcoding}`, `¬⟨File⟩{pattern="*.log"}`              | Logic symbol (Negation). Strong scent.           |
|                    | `‼️`   | Mandatory, Required, Critical                     | `‼️ {Confirm Write}`, `‼️⟨Parameter⟩{name="path"}`           | Emphasis. Likely single token.                    |
|                    | `❓`   | Optional, Query, Clarification Needed             | `❓⟨Parameter⟩{name="limit"}`, `❓ {Needs User Input}`      | Standard punctuation. Context dependent.         |
|                    | `✅`   | Acceptance Criteria, Success, Pass, Confirmed     | `## Acceptance Criteria ✅`, `Test: ✅`                   | Already used. Formalize operational meaning.       |
|                    | `❌`   | Non-Goal, Failure, Reject, Error                  | `## Non-Goals ❌`, `Test: ❌ {Reason="Timeout"}`           | Already used. Formalize operational meaning.       |
|                    | `🧱`   | Blocker, Dependency Issue                         | `Status: 🧱 {Reason="Waiting for API Spec"}`            | Emoji. Needs clear definition.                     |
| **Actions**        | `✨`   | Create, Generate, Implement, Develop              | `✨⟨Component⟩{name="Login"}`, `✨ {File="README.md"}`       | Emoji. Ambiguous but common for generation.        |
|                    | `✍️`    | Write, Edit, Update, Document                     | `✍️⟨File⟩{path="doc.md"}`, `✍️ {ADR}`                      | Emoji. Needs context (Write vs Edit).              |
|                    | `🔍`   | Analyze, Search, Investigate, Read, Review        | `🔍⟨File⟩{path="*.log"}`, `🔍 {Context}`                  | Emoji. Broad, needs context (Read vs Search).       |
|                    | `🗑️`   | Delete, Remove, Clean up                          | `🗑️⟨File⟩{path="tmp/"}`                                   | Emoji. Clear meaning.                              |
|                    | `🚀`   | Deploy, Release, Execute, Run                     | `🚀 {Script="build.js"}`, `🚀 {Workflow="Deploy"}`        | Emoji. Common for deploy/run.                   |
|                    | `🔄`   | Refactor, Iterate, Repeat, Synchronize, Update      | `🔄⟨Code⟩`, `🔄 {Status}`                                | Emoji. Needs context (Refactor vs Iterate).       |
|                    | `📦`   | Package, Build Artifact, Bundle                   | `📦 {Target="v1.1.zip"}`                                | Emoji. Relates to packaging.                    |
|                    | `🛡️`   | Secure, Harden, Add Security Check                | `🛡️ {Check="Input Validation"}`, `🛡️⟨API⟩`                 | Emoji. Relates to security.                     |
|                    | `🧪`   | Test, Validate, Verify                            | `🧪 {Type="Unit"}`, `🧪⟨Feature⟩{name="Login"}`             | Emoji. Relates to testing.                      |
|                    | `🤝`   | Collaborate, Coordinate, Delegate                 | `🤝⟨Mode⟩{slug="backend-lead"}`, `🤝 {User}`              | Emoji. Relates to collaboration.                   |
| **Entities**       | `⟨File⟩` | File artifact                                     | `✍️⟨File⟩{path="src/main.js"}`                           | Requires specific parameters (path, pattern).      |
|                    | `⟨Dir⟩`  | Directory artifact                                | `🔍⟨Dir⟩{path="src/"}`                                   | Requires specific parameters (path).             |
|                    | `⟨Mode⟩` | AI Agent / Roo Mode                             | `🤝⟨Mode⟩{slug="react-dev"}`                            | Refers to specific agent.                        |
|                    | `⟨User⟩` | Human User                                      | `Ask ❓⟨User⟩{confirm=true}`                             | Represents the human operator.                   |
|                    | `⟨Task⟩` | MDTM Task                                       | `🔗⟨Task⟩{id="TASK-123"}`                               | Specific reference.                              |
|                    | `⟨Rule⟩` | Operational Rule (`.roo/rules/`)                | `⊢⟨Rule⟩{id="RULE-COMMIT-STD"}`                         | Specific reference.                              |
|                    | `⟨KB⟩`   | Knowledge Base (`.modes/<slug>/kb/`)            | `🔍⟨KB⟩{mode="react-dev"}`                              | Reference to mode's KB.                          |
|                    | `⟨Code⟩` | Section of source code                          | `🔄⟨Code⟩{function="getUser"}`                           | General code reference.                          |
|                    | `⟨API⟩`  | Application Programming Interface               | `✨⟨API⟩{endpoint="/users"}`                             | API reference.                                 |
|                    | `⟨DB⟩`   | Database                                        | `Need 🤝⟨DB⟩ Lead`                                      | General DB reference.                          |
|                    | `⟨UI⟩`   | User Interface                                  | `✨⟨UI⟩{component="Button"}`                             | General UI reference.                          |
|                    | `⟨Doc⟩`  | Documentation file                              | `✍️⟨Doc⟩{path="README.md"}`                             | Documentation entity.                            |
|                    | `⟨Commit⟩`| Git Commit                                      | `Log ⟨Commit⟩{hash="abc123"}`                          | Git entity.                                    |
|                    | `⟨Branch⟩`| Git Branch                                      | `Create ⟨Branch⟩{name="feat/xyz"}`                    | Git entity.                                    |
| **States**         | `🟡`   | To Do / Pending                                   | `⟨Task⟩{status=🟡}`                                       | Emoji for status.                              |
|                    | `🔵`   | In Progress (Human/Lead assigned)                 | `⟨Task⟩{status=🔵}`                                       | Emoji for status.                              |
|                    | `⚙️`    | In Progress (AI actively working/generating)      | `⟨Task⟩{status=⚙️}`                                       | Alternative/Specific In Progress.                  |
|                    | `🟣`   | Review Needed                                     | `⟨Task⟩{status=🟣}`                                       | Emoji for status.                              |
|                    | `🟢`   | Done / Complete / Success                         | `⟨Task⟩{status=🟢}`                                       | Alias for ✅? Consistency needed.                |
|                    | `⚪`   | Blocked                                           | `⟨Task⟩{status=⚪}`                                       | Alias for 🧱? Consistency needed.                |
|                    | `🧊`   | Archived / Icebox / Deferred                      | `⟨Task⟩{status=🧊}`                                       | Emoji for status.                              |
| **Constraints**    | `≤`    | Less than or equal to, Maximum                    | `{lines≤350}`, `{tokens≤4k}`                             | Math symbol. Strong scent.                       |
|                    | `≥`    | Greater than or equal to, Minimum                 | `{coverage≥80%}`                                          | Math symbol. Strong scent.                       |
|                    | `≠`    | Not equal to, Exclude                             | `{status≠Done}`                                           | Math symbol. Strong scent.                       |
|                    | `⊂`    | Subset of, Contained within                       | `{tags⊂["backend", "api"]}`                              | Set theory symbol. Needs clear definition.      |
|                    | `∀`    | For All, Universal                                | `∀ ⟨File⟩ in ⟨Dir⟩`                                     | Logic symbol. Needs clear definition.         |
|                    | `∃`    | Exists, At least one                              | `∃ ⟨Error⟩ in ⟨Log⟩`                                    | Logic symbol. Needs clear definition.         |

## 5. Domain-Specific Symbols (To Be Developed)

*   This glossary is foundational. Modes may define or utilize more specific symbols within their KBs for domain-specific concepts (e.g., framework names, database types, specific tools).
*   Consider establishing conventions for creating domain-specific symbols (e.g., using prefixes, specific Unicode ranges).

## 6. Next Steps ✅

1.  **Review & Refine:** Review this list for clarity, potential conflicts, and missing core concepts.
2.  **Select Initial Set:** Choose a subset of high-value symbols for Phase 1 implementation.
3.  **Tokenization Testing:** (If possible) Test how target LLMs tokenize these symbols.
4.  **Documentation:** Create the formal standard document (`.ruru/docs/standards/symbolic_syntax.md`).
5.  **Mode KB Integration:** Define how modes will reference and interpret these symbols in their KBs.
```

---

**Summary of Changes:**

*   **V2 Titles:** Added "V2" to titles for clarity.
*   **Contextualized Proposal:** Updated problem statement and solution phases to specifically mention Roo Commander structures (`.roo/rules/`, `.modes/`, KBs, MDTM, TOML+MD, etc.) and roles.
*   **Expanded Glossary:** Significantly increased the number of symbols based on analyzing the repository context, including actions, entities, states, and constraints relevant to Roo Commander's operations. Included existing emojis and gave them operational definitions.
*   **Implementation Strategy:** Focused integration on mode KBs and core rules, emphasizing usage within Markdown content.
*   **Refined Risks:** Added risks specific to the Roo ecosystem (parsing conflicts, AI interpretation consistency, onboarding).
*   **Glossary Syntax:** Proposed a basic syntax convention `Symbol⟨Entity⟩{Parameter}`.
*   **Next Steps:** Made glossary next steps more concrete.