# Documentation: Prompt Template `prompt_27_workplace_safety_procedure_critique.md`

## 1. Purpose

This prompt template is designed to elicit a comprehensive **critique and enhancement suggestions for a specific workplace safety procedure or protocol document**. It guides the user to provide the document itself, along with context about its goals, target audience, the hazards it addresses, and the workplace environment. The critiquing AI is then directed to analyze aspects such as clarity, completeness of steps, identification of responsibilities, practicality, use of visuals, and overall effectiveness in promoting safety.

The goal is to receive actionable feedback to refine the safety procedure, making it clearer, more actionable, and more effective in preventing incidents and ensuring correct responses during safety-related situations. This critique is for informational and improvement purposes and does not constitute legal or certified safety compliance advice.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/critique/prompt_27_workplace_safety_procedure_critique.md](prompt_27_workplace_safety_procedure_critique.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `critique_request_chemical_spill_protocol_v2.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Critique-WorkplaceSafetyProc-ChemSpill-20250527230000`.
    *   `title`: Update to reflect the specific procedure, e.g., `"Safety Protocol Critique: Chemical Spill Response"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with `[Name of Procedure/Protocol]`.
    *   In Section 1 ("Procedure/Protocol Overview & Context"), provide details about the procedure's name, goals, target audience, hazards addressed, workplace environment, and any known review history.
    *   **Crucially, in Section 2 ("The Safety Procedure/Protocol Document for Review"):**
        *   Provide a **direct link to the document** or **paste key sections/full text** into the designated area. Full text is often most useful for procedures.
        *   Mention any associated materials like checklists or diagrams.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model for critique.

## 3. TOML Frontmatter Schema (for an instance of `prompt_27_workplace_safety_procedure_critique.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Critique-WorkplaceSafetyProc-[ProcedureNameShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Critique-WorkplaceSafetyProc-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this critique request.
    *   *Placeholder in template:* `"Workplace Safety Procedure/Protocol Critique & Enhancement Request"`
*   **`prompt_type` (String, Fixed):** `"critique_and_improvement"`
*   **`domain` (String, Fixed):** `"workplace_safety_compliance"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "critique", "workplace_safety", "safety_procedure", "emergency_protocol", "risk_assessment", "health_and_safety"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/critique/prompt_27_workplace_safety_procedure_critique.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_27_workplace_safety_procedure_critique.md`)

*   **Subject Line:** Pre-filled; update `[Name of Procedure/Protocol]`.
*   **Section 1: Procedure/Protocol Overview & Context:**
    *   `Procedure/Protocol Name`.
    *   `Primary Goal(s) of this Procedure`.
    *   `Target Audience for this Procedure`.
    *   `Specific Hazards or Risks Addressed`.
    *   `Workplace Environment`.
    *   `Relevant Regulations or Standards (General Awareness)`.
    *   `Last Review/Update Date (if known)`.
*   **Section 2: The Safety Procedure/Protocol Document for Review:**
    *   `Link to the Document` (Preferred).
    *   `Paste Key Sections or the Full Text` (Alternative): **Crucial for providing the procedure to be critiqued.**
    *   `Associated Materials (if any)`.
*   **Section 3: Request for Critical Analysis & Improvement Suggestions:**
    *   Pre-filled with detailed questions for the AI, categorized by aspects (A-L) like "Clarity & Understandability," "Completeness & Thoroughness of Steps," "Identification of Responsibilities," "Practicality & Realism," and "Overall Effectiveness." The user typically does not modify this section.

This structure ensures the AI receives the actual safety procedure and sufficient context to provide a thorough critique focused on clarity, completeness, and practicality from an end-user perspective.