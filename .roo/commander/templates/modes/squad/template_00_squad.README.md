# Documentation: Template `02_squad_member_mode_template.md`

## 1. Purpose

This template defines the standard structure for creating **Squad Member modes** within the Roo Commander V8 ecosystem. Squad Member modes are specialist worker AIs designed to perform a specific, well-defined task as part of a larger workflow orchestrated by a "Manager" mode (e.g., `manager-data-product`).

Their primary interaction pattern involves receiving an MDTM (Markdown-Driven Task Management) task file, executing the instructions within it, producing a specific output artifact (typically a structured TOML+MD document), and updating the MDTM task file to reflect their progress and completion.

## 2. Usage

1.  **Copy Template:** When creating a new Squad Member mode (e.g., `data-product-strategist`):
    *   Copy `.roo/commander/templates/modes/02_squad_member_mode_template.md` to the new mode's directory (e.g., `.roo/commander/modes/data-product-strategist/data-product-strategist.mode.md`).
2.  **Populate TOML Frontmatter in the `.mode.md` file:**
    *   Fill in all placeholders marked with `[...]` in the copied `.mode.md` file.
    *   Pay close attention to `id`, `name`, `classification` (should be "worker" or "specialist"), `domain`, and `summary`.
    *   The `system_prompt` provides a strong boilerplate; customize the bracketed placeholders like `[Squad Member Mode Name]` and `[specific-domain-of-expertise]`. The core responsibilities (Task Ingestion, Execution, Artifact Creation, MDTM Updates, Reporting) should generally be preserved as they define the standard interaction pattern for squad members.
    *   Update `[metadata].tags`, `[metadata].categories`, and `[metadata].reports_to` (which should be the slug of its managing "Manager" mode).
3.  **Customize Markdown Body (Mode Documentation) in the `.mode.md` file:**
    *   Fill in the sections under `# [Squad Member Mode Name] - Mode Documentation` to describe the mode's specific expertise, capabilities, typical inputs/outputs, and its role within its squad.
4.  **Knowledge Base (KB) Creation & Structure:**
    *   Create a `kb/` subdirectory for the mode: `.roo/commander/modes/[squad-member-mode-slug]/kb/`.
    *   While a Squad Member's KB might be minimal initially, it **SHOULD** follow this standard structure for future scalability and consistency. Not all subdirectories need to be created if empty, but this is the recommended organization:
        *   **`README.md` (KB Index):**
            *   **Purpose:** Overview of this Squad Member's KB. Briefly state its core function and link to any critical documents within its `skills/` or `wisdom/` if they exist. For very simple squad members, this might be the only KB file initially.
        *   **`procedures/` (Optional, for complex internal logic):**
            *   `01-core-task-execution-flow.md`: If the squad member has a standard internal multi-step process to arrive at its output (beyond just following the MDTM checklist), document it here. Many simple squad members may not need this if their system prompt and MDTM checklist are sufficient.
        *   **`reference/` (Optional):**
            *   `00-output-artifact-template.md`: A note pointing to, or containing an example of, the primary TOML+MD template it uses for its output artifact (e.g., for `data-product-strategist`, it would reference `template_product_strategy.md`).
        *   **`examples/` (Optional):**
            *   `01-sample-input-task.md`: An example of a well-formed MDTM task it expects to receive.
            *   `02-sample-output-artifact.md`: An example of its typical primary output artifact.
        *   **`skills/` (Optional, for "how-to" knowledge):**
            *   Purpose: To store specific, actionable techniques, "how-to" guides for tools or methodologies relevant to this mode's function.
            *   Structure: May contain subdirectories for categories of skills.
            *   Example: `skills/data_analysis_techniques/interpreting_correlation_matrices.md`
        *   **`wisdom/` (Optional, for guiding principles):**
            *   Purpose: To store higher-level insights, best practices, anti-patterns, design principles, or strategic considerations relevant to this mode's domain.
            *   Structure: May contain subdirectories for topics.
            *   Example: `wisdom/strategic_thinking/common_biases_in_strategy.md`
    *   The mode's `system_prompt` (in its `.mode.md` file) will instruct it to consult its KB. The mode's own KB lookup rule (`99-[squad-member-slug]-kb-lookup.md`, if created, or a general squad member KB lookup rule) would guide *how* it navigates these KB sections.

## 3. TOML Frontmatter Schema (for the `.mode.md` file)

*   **`id` (String, Required):** Unique slug for the mode (e.g., `"data-product-strategist"`).
*   **`name` (String, Required):** Human-friendly name (e.g., `"📊 Data Product Strategist"`).
*   **`version` (String, Required):** Version of this mode definition (e.g., `"1.0.0"`).
*   **`classification` (String, Required):** Typically `"worker"` or `"specialist"`.
*   **`domain` (String, Required):** The specific area of expertise (e.g., `"data-product-strategy"`).
*   `sub_domain` (String, Optional): Further specialization if needed.
*   **`summary` (String, Required):** One-sentence description of its function.
*   **`system_prompt` (String, Required, Multiline):**
    *   Defines the mode's identity, core responsibilities (MDTM task handling, artifact creation, status reporting), and operational guidelines.
    *   The template provides a standard structure; specific details like the mode's name and domain need to be filled in.
    *   Emphasizes tool-agnostic instructions, focusing on outcomes.
*   `allowed_tool_groups` (Array of Strings, Optional):
    *   **Default:** Permissive (commented out in template, implying Roo Code default access). Define explicitly if restrictions are needed later.
*   `file_access` (Table, Optional):
    *   **Default:** Permissive (commented out). Define `read_allow` and `write_allow` glob patterns if restrictions are needed.
*   **`[metadata]` (Table, Optional):**
    *   `tags` (Array of Strings, Required): Keywords for discoverability. Include domain-specific tags and `"squad-member"`.
    *   `categories` (Array of Strings, Required): Broader functional grouping.
    *   `delegate_to` (Array of Strings, Optional): Usually empty for squad members.
    *   `reports_to` (String, Required): The slug of the Manager mode this squad member reports to (e.g., `"manager-data-product"`).
    *   `documentation_urls` (Array of Strings, Optional): Links to external docs relevant to its expertise.
    *   `context_files` (Array of Strings, Optional): Key reference files (rarely needed if all input comes via MDTM task `input_artifacts`).
*   **`custom_instructions_dir` (String, Required):** Standard value: `"kb"`. Points to the mode's own knowledge base directory: `.roo/commander/modes/[squad-member-mode-slug]/kb/`.

## 4. Markdown Body Structure (for the `.mode.md` file's documentation section)

The Markdown section of the `.mode.md` file serves as its own documentation:

*   **`# [Squad Member Mode Name] - Mode Documentation`**: Main title.
*   **`## 1. Description & Expertise`**: What this mode is and does.
*   **`## 2. Core Capabilities`**: Bullet list of its key functions.
*   **`## 3. Typical Inputs (from MDTM Task)`**: What it expects in its assigned MDTM task.
*   **`## 4. Primary Outputs`**: The main artifact it produces and its updated MDTM task.
*   **`## 5. Workflow within the Squad`**: Its position in the sequence of squad operations.
*   **`## 6. Limitations`**: What it doesn't do.

## 5. Role in the "Manager + Squad" Architecture

Squad Member modes are the workhorses. They are directed by a Manager mode through MDTM tasks. They perform a focused piece of work, generate a specific output (usually a design artifact for the Data Product Squad), and report back. This modularity allows for complex workflows to be built from specialized, single-responsibility modes. Their internal knowledge, if needed beyond the MDTM task instructions, is stored in their dedicated, structured KB.