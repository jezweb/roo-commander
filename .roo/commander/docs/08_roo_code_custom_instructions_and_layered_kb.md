# Roo Commander V8.1: Roo Code Custom Instructions and Layered Knowledge Base

This document details how Roo Commander leverages Roo Code's custom instruction mechanism to implement a layered Knowledge Base (KB) strategy, optimizing for token efficiency and providing relevant context to AI modes.

## 1. The Role of Custom Instructions

Roo Code's custom instructions allow for precise control over an AI's behavior, coding style, and decision-making processes. These instructions are loaded into the AI's context, influencing its responses and actions. Roo Commander utilizes this feature to provide different layers of context, ensuring that each AI mode has access to the most relevant information without unnecessary token consumption.

## 2. Layered Knowledge Base Strategy

Roo Commander implements a three-tier layered KB approach, aligning with Roo Code's instruction loading hierarchy:

### Tier 1: Universal Rules (`.roo/rules/`)

*   **Roo Code Behavior:** All Markdown files within the `/.roo/rules/` directory (and its subdirectories) are automatically loaded into the context of *every* active mode. This also applies to global rules defined in `~/.roo/rules/`.
*   **Roo Commander Usage:** This tier contains fundamental, project-wide standards and principles that are universally applicable to all AI modes operating within the Roo Commander ecosystem. Examples include the TOML+Markdown format standard (`01-standard-toml-md-format.md`), the MDTM task standard (`02-mdtm-task-standard.md`), and the session management standard (`03-session-management-standard.md`).
*   **Principle:** Content in this tier is kept lean and high-level to avoid unnecessary token consumption for all modes, as it is always present in the context.

### Tier 2: Mode-Specific Pre-loaded Rules (`.roo/rules-[mode_slug]/`)

*   **Roo Code Behavior:** All Markdown files within the `/.roo/rules-[mode_slug]/` directory (and its subdirectories, including the `kb/` folder) are automatically loaded into the context of the AI *only when that specific mode is active*. This is a key feature for providing targeted context.
*   **Roo Commander Usage:** This tier contains the core operational principles and the primary Knowledge Base (`kb/`) for a specific mode. For example:
    *   `00-[mode_slug]-core-principles.md`: Defines the mode's fundamental operational tenets and its strategy for utilizing its `kb/`.
    *   `kb/` folder: This is where the mode's detailed, specialized knowledge resides. This includes procedures, skills, examples, and reference materials relevant only to that mode's domain (e.g., `gemini-api-guidelines.md` for the `gemini-build-agent`).
*   **Principle:** By loading this content only when the mode is active, Roo Commander ensures that the AI has immediate access to its specialized knowledge without burdening the context of other, unrelated modes. The AI is instructed (via its `roleDefinition` and `00-*-core-principles.md`) to intelligently navigate and apply this pre-loaded KB content as needed for its current task.

### Tier 3: Dynamic Access (AI's Internal Strategy)

*   **Roo Code Behavior:** While the content of `/.roo/rules-[mode_slug]/kb/` is pre-loaded when the mode is active, Roo Code does not explicitly dictate *how* the AI should use this knowledge.
*   **Roo Commander Usage:** The AI mode is explicitly guided (through its `roleDefinition` and `00-*-core-principles.md` files) to:
    1.  Understand that its `kb/` directory contains detailed, actionable knowledge.
    2.  Utilize its internal reasoning and potentially its `read` tool (if it needs to re-read parts of its own context or specific files within its KB) to dynamically retrieve and incorporate relevant information (procedures, skills, examples, references) from its pre-loaded KB *on demand* based on the current task.
    3.  The `kb/README.md` within each mode's KB acts as an index or a "KB Lookup Rule" for the AI, guiding its retrieval process and helping it find the most relevant articles.
*   **Principle:** This tier emphasizes the AI's intelligent application of its pre-loaded knowledge. It's not about *loading* the knowledge dynamically (as it's already loaded when the mode is active), but about the AI's *strategy* for accessing and applying specific pieces of that knowledge to optimize its responses and actions, thus achieving token efficiency in its reasoning process.

## 3. Benefits of the Layered KB Approach

*   **Token Efficiency:** By segmenting knowledge and loading only what's relevant to the active mode, overall token consumption is minimized, leading to faster processing and reduced costs.
*   **Contextual Relevance:** AI modes receive highly targeted information, improving their ability to understand and execute tasks within their specific domain.
*   **Scalability:** New modes and their associated knowledge can be added without significantly impacting the performance or context of existing modes.
*   **Maintainability:** Knowledge is organized logically, making it easier to update and manage specific sets of instructions and reference materials.

This layered approach ensures that Roo Commander's AI modes are both powerful and efficient, providing them with the right information at the right time to perform their specialized roles effectively.
