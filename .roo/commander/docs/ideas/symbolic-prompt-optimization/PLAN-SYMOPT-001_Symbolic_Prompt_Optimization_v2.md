+++
# --- Basic Metadata ---
id = "PLAN-SYMOPT-001"
title = "V2 Proposal: Symbolic Prompt Optimization for Roo Commander" # Updated Title
status = "proposed"
created_date = "2025-04-18" # Original date
updated_date = "2025-04-22" # Revision date
version = "2.0" # Updated Version
tags = ["planning", "proposal", "optimization", "prompt-engineering", "symbolic-language", "token-efficiency", "roo-commander", "refactoring"] # Added roo-commander, refactoring
template_schema_doc = ".ruru/templates/toml-md/17_feature_proposal.README.md"

# --- Ownership & Context ---
proposed_by = "AI Assistant (based on user request & repo analysis)"
# owner = ""
related_docs = [
    "PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md", # Updated Glossary Name
    ".ruru/decisions/ADR-001_mode_source_reorganisation.md", # Relevant ADR
    ".roo/rules/01-standard-toml-md-format.md",
    ".roo/rules/03-standard-tool-use-xml-syntax.md",
    ".ruru/docs/standards/mdtm_standard.md"
    ]
related_tasks = []
# parent_doc = "ADR-001_mode_source_reorganisation.md" # Optional link back

# --- Proposal Specific Fields ---
priority = "medium" # Adjusted priority - significant effort but foundational
estimated_effort = "Large" # Revised effort estimate - impacts many files
# target_release = ""

# --- AI Interaction Hints (Optional) ---
context_type = "planning"
target_audience = ["core-architect", "roo-commander", "prime-coordinator", "ai_dev_team"] # More specific audience
granularity = "detailed"
+++

# V2 Proposal: Symbolic Prompt Optimization for Roo Commander

## 1. Overview / Purpose 🎯

*   **Summary:** This revised proposal outlines a strategy to develop and implement a custom symbolic language and associated techniques to significantly reduce the token count of prompts, rules, knowledge base articles, logs, and potentially task descriptions used within the Roo Commander multi-agent system.
*   **Goal:** To improve operational efficiency by lowering token consumption (reducing costs, enabling larger context windows), increase instruction density and precision, enhance consistency across modes and documentation, and maintain or improve the quality and reliability of AI agent output through concise, unambiguous instructions.

## 2. Problem Statement 🤔

*   **Current Situation:** The Roo Commander system, including mode definitions (`.mode.md`), rules (`.roo/rules/`), knowledge bases (`.ruru/modes/<slug>/kb/`), process/workflow definitions (`.ruru/processes/`, `.ruru/workflows/`), and MDTM task files (`.ruru/tasks/`), relies heavily on natural language descriptions and instructions within Markdown content.
*   **Problems:**
    *   **Verbosity & Token Cost:** Natural language is inherently verbose, leading to high token counts, particularly in complex system prompts incorporating multiple rules and KB articles. This increases operational costs and limits the amount of *other* relevant context (like source code) that can be included in prompts.
    *   **Context Limits:** As the system grows (more modes, rules, KBs), the combined size of foundational instructions risks exceeding context window limits for effective operation.
    *   **Ambiguity:** Natural language instructions can sometimes be interpreted inconsistently by different agents or even the same agent in different contexts.
    *   **Repetitive Instructions:** Common actions, concepts, constraints, or states (e.g., "use `read_file`", "log completion", "status is `🟢 Done`", "adhere to standard X") are frequently repeated across multiple documents.
    *   **Maintainability:** Updating frequently used instructions across many files is cumbersome.

## 3. Proposed Solution ✨

This solution involves developing a dedicated symbolic shorthand tailored to Roo Commander's concepts and integrating it systematically, primarily within Markdown content sections, alongside existing structured data formats (TOML, XML).

**Phase 1: Glossary Foundation & Definition (Led by `core-architect`/`roo-commander`)**
1.  **Analyze Core Concepts:** Systematically review repository artifacts (`.roo/rules/`, `.processes/`, `.workflows/`, common mode KBs, `repomix-output.xml`) to identify frequently recurring:
    *   **Actions:** (e.g., read file, write file, execute command, delegate task, request confirmation, log entry, commit changes).
    *   **Entities:** (e.g., file, directory, task, rule, KB article, mode, user, commit, ADR, workflow, process, prompt, context).
    *   **States/Statuses:** (e.g., To Do, In Progress, Done, Blocked, Active, Draft, Success, Failure).
    *   **Modifiers/Constraints:** (e.g., mandatory, optional, adhere to, avoid, maximum, minimum, requires confirmation, specific tool).
2.  **Develop Foundation Glossary:** Create `PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md`.
    *   Assign unique, concise symbols (prioritizing Unicode characters with relevant "scent" and single-token potential) to the core concepts identified above.
    *   Include existing emojis used symbolically (✅, ❌, 🧱, 🎯, etc.) and assign precise operational definitions.
    *   Define basic syntax conventions (e.g., `Symbol⟨Entity⟩{Parameter="Value"}`).
3.  **Document Glossary:** Create a central reference document for the symbolic language standard (e.g., in `.ruru/docs/standards/symbolic_syntax.md`).
4.  **AI Collaboration:** Leverage AI modes (`roo-commander`, `second-opinion`) to brainstorm symbols, check for ambiguities, analyze tokenization potential (if possible), and refine definitions.

**Phase 2: Integration Strategy & Tooling (Led by `core-architect`, Implemented via Delegation)**
1.  **Primary Integration Point:** Define **Mode-Specific KBs (`.modes/<slug>/kb/`)** as the primary location for *interpreting* and *applying* the symbolic language. Each mode's KB should include:
    *   A reference to the global glossary standard (`.ruru/docs/standards/symbolic_syntax.md`).
    *   Specific instructions on how *that mode* should use symbols in its operations or interpret them in instructions received.
2.  **Global Rule Integration:** Introduce a core rule (e.g., in `.roo/rules/`) mandating awareness and basic interpretation of the symbolic standard for all modes.
3.  **Usage Location:** Target the use of symbols primarily within:
    *   **Markdown Content:** Rules, KB articles, SOPs, Workflows, Task descriptions/notes, Commit message bodies.
    *   **System Prompts:** Concisely represent core operational guidelines.
    *   **Logging:** Use symbols for status indicators or action types in logs.
    *   **AVOID** injecting complex symbols directly into structured data where they might break parsers (e.g., TOML keys, mandatory XML tags). Use within TOML string values or Markdown sections only.
4.  **Tooling Adaptation (Minimal Initial):** Initially, focus on AI interpretation. Future enhancements could involve scripts or tools that:
    *   Validate symbolic syntax.
    *   Expand symbols into full text for human readability if needed.
    *   (Advanced) Partially automate prompt generation using symbols.

**Phase 3: Refactoring & Adaptation (Led by `roo-commander`, Delegated)**
1.  **Identify Target Documents:** Prioritize refactoring core rules (`.roo/rules/`), shared processes/workflows (`.ruru/processes/`, `.ruru/workflows/`), and high-usage mode KBs.
2.  **Delegate Refactoring:** Assign tasks to relevant modes (`prime-txt`, `util-writer`, `mode-maintainer`) to:
    *   Read target documents (`read_file`).
    *   Replace verbose natural language instructions with their symbolic equivalents based on the glossary.
    *   Use `apply_diff` or `search_and_replace` for modifications.
    *   Ensure changes maintain document clarity and don't break formatting.
3.  **Review (ACQA):** Apply the ACQA process (`.ruru/processes/acqa-process.md`) to review refactored documents for correctness and clarity.

**Phase 4: Testing, Iteration & Refinement (Led by `roo-commander`, `qa-lead`)**
1.  **Token Count Measurement:** Measure token counts for standard system prompts and common task descriptions before and after symbolic integration.
2.  **Workflow Testing:** Execute core workflows (onboarding, delegation, ADR creation, etc.) using the refactored rules/KBs.
3.  **Output Quality Assessment:** Evaluate if AI modes correctly interpret symbolic instructions and if output quality is maintained/improved. Specifically check for misinterpretations.
4.  **Iterative Refinement:** Adjust the glossary, syntax conventions, and integration points based on testing results and user feedback. Refine unclear symbols or definitions.

## 4. Goals ✅

*   **Primary:** Achieve a measurable reduction (target >20%) in average token count for core system prompts, shared rules, and representative KB articles/workflows.
*   **Secondary:**
    *   Improve the precision and reduce ambiguity of instructions within rules and KBs.
    *   Establish a documented symbolic glossary standard for the Roo Commander ecosystem.
    *   Maintain or improve the accuracy and reliability of AI agent responses and actions.
    *   Lay the groundwork for potential future automation based on symbolic representation.

## 5. Non-Goals ❌

*   Creating a fully machine-executable symbolic language (initial focus is on AI interpretation within prompts/docs).
*   Replacing TOML metadata or XML tool calls with symbols (focus is on Markdown content).
*   Completely eliminating natural language. Symbols augment, not replace entirely.
*   Achieving perfect token reduction in all cases (some concepts may not lend themselves well to symbolization).
*   Implementing advanced tooling for symbol expansion/validation in Phase 1.

## 6. Technical Design / Implementation Sketch 🛠️

*   **Step 1: Define Glossary:** Create `PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md` and `.ruru/docs/standards/symbolic_syntax.md`.
*   **Step 2: Core Rule Integration:** Add/update a rule in `.roo/rules/` referencing the standard.
*   **Step 3: Mode KB Adaptation:** Define standard section in mode KBs (e.g., `symbol_usage.md`) referencing the global standard and adding mode-specific interpretations. Create KB lookup rules referencing this.
*   **Step 4: Pilot Refactoring:** Select a core process (e.g., ACQA) and its related rules/KB files. Delegate refactoring to `prime-txt`.
*   **Step 5: Pilot Testing:** Execute workflows involving the refactored process. Evaluate AI comprehension and token usage.
*   **Step 6: Broader Rollout:** Iteratively refactor other rules, KBs, workflows, templates based on pilot results.
*   **Step 7: Documentation Update:** Update relevant documentation (`README.md`, guides) to explain the symbolic language.

**Example Conceptual Flow:**

```mermaid
graph TD
    A[Analyze Repo Concepts] --> B(Define Glossary & Standard);
    B --> C[Integrate Standard into Core Rules];
    B --> D[Define Mode KB Integration Pattern];
    C & D --> E{Select Pilot Process/Mode};
    E --> F[Delegate Refactoring to prime-txt];
    F -- Needs Review --> G[Review Refactored Docs (ACQA)];
    G -- Approved --> H[Test Workflows with Symbols];
    H --> I{Evaluate Results (Tokens/Accuracy)};
    I -- Refinements Needed --> B;
    I -- Looks Good --> J[Broader Rollout & Documentation];
```

## 7. Alternatives Considered 🔄

*   **Keyword-Only System:** Using defined keywords (e.g., `[ACTION:READ_FILE]`, `[STATUS:DONE]`) instead of symbols. (Less dense than symbols).
*   **JSON/YAML Instructions:** Embedding instructions as structured data within Markdown (more verbose, potentially harder for AI flow).
*   **No Optimization:** Continue using only natural language (higher token cost, potential ambiguity).

## 8. Open Questions / Risks ❓

*   **AI Interpretation Consistency:** Will different models or even the same model consistently interpret the defined symbols correctly across various contexts? Requires thorough testing.
*   **Readability Trade-off:** Overuse of symbols could decrease human readability of rules and KBs. Requires finding a balance.
*   **Complexity vs. Benefit:** Is the effort of defining, integrating, and maintaining the symbolic language justified by the token savings and precision gains? (Ongoing evaluation needed).
*   **Parsing Conflicts:** Risk of symbols interfering with Markdown rendering or other parsing logic (low if used carefully in Markdown body).
*   **Onboarding:** New users/contributors need to learn the symbolic language. Requires good documentation.
*   **Glossary Maintenance:** Keeping the glossary and its usage consistent across the growing system.

## 9. Diagrams / Visuals 📊 (Optional)

*(See Mermaid diagram in Section 6)*

## 10. Related Links 🔗

*   [Foundation Glossary Document](PLAN-SYMOPT-GLOSSARY-001_Foundation_Glossary_v2.md)