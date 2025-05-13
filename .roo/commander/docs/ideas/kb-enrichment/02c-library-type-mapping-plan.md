+++
# --- Metadata ---
id = "PLAN-KB-ENRICH-LIB-MAPPING-V1"
title = "Plan: Create Library Type Mapping File"
status = "draft"
created_date = "2025-04-24"
updated_date = "2025-04-24"
version = "1.0"
tags = ["plan", "kb", "enrichment", "mapping", "configuration", "types"]
related_docs = [".ruru/planning/kb-enrichment/00-kb-enrichment-plan.md", ".ruru/planning/kb-enrichment/02b-customizable-synthesis-plan.md"]
objective = "Define the process for creating and maintaining the library-to-type mapping file (`library-types.json`) required for the customizable synthesis workflow."
scope = "Specifies the format, location, initial population strategy, and maintenance process for the mapping file."
# --- Plan Specific Fields ---
mapping_file_path = "scripts/library-types.json"
initial_library_list_file = "library-list.txt" # Or path to the list used by batch processor
defined_task_set_dir = ".ruru/templates/synthesis-task-sets/"
default_type = "generic"
known_types = ["generic", "frontend-framework", "backend-framework", "ui-library", "css-utility", "state-management", "database", "database-orm", "ai-sdk", "devops-tool", "testing-library", "utility"] # Example initial types
+++

# Plan: Create Library Type Mapping File

**1. Objective:**
Establish and maintain a mapping between library names (as used in the `kb/` directory structure) and standardized library type identifiers. This mapping is essential for selecting the correct Synthesis Task Set during KB enrichment.

**2. File Specification:**
*   **Path:** `[mapping_file_path]` (e.g., `scripts/library-types.json`)
*   **Format:** JSON Object. Keys are the library names (e.g., `vuejs-docs`, `tailwindlabs-tailwindcss.com`), and values are the corresponding library type strings (e.g., `frontend-framework`, `css-utility`).
    ```json
    {
      "vuejs-docs": "frontend-framework",
      "tailwindlabs-tailwindcss.com": "css-utility",
      "spatie-laravel-permission": "backend-framework-plugin",
      "openai-openai-python": "ai-sdk",
      "some-unknown-lib": "generic"
      // ... more entries
    }
    ```

**3. Standard Library Types:**
A predefined list of library types should be used consistently. The initial set should include (but can be expanded):
*   `generic` (Fallback)
*   `frontend-framework` (React, Vue, Angular, SvelteKit, Next.js, Remix, Astro)
*   `backend-framework` (Laravel, Django, FastAPI, Flask, Express, NestJS)
*   `ui-library` (MUI, Ant Design, Bootstrap, Tailwind (as base), Shadcn, Headless UI)
*   `css-utility` (Tailwind CSS itself)
*   `state-management` (Redux, Zustand, Pinia)
*   `database` (PostgreSQL, MongoDB, Supabase DB, Neon)
*   `database-orm` (Prisma, TypeORM, SQLAlchemy, Django ORM)
*   `ai-sdk` (OpenAI SDK, Anthropic SDK, LangChain, LlamaIndex)
*   `devops-tool` (Docker, Kubernetes, Terraform, Ansible, Grafana)
*   `testing-library` (Jest, Vitest, Pytest, Playwright, Cypress, Testing Library family)
*   `utility` (Lodash, date-fns, fs-extra, libraries not fitting elsewhere)
*   *(Potentially more specific types like `backend-framework-plugin`, `build-tool`, `static-site-generator` etc.)*

**4. Initial Population Process:**

*   **Input:** List of libraries processed by `batch_process_kbs.js` (derived from `[initial_library_list_file]`).
*   **Method:** Requires **Manual Curation** or **Semi-Automated Review**.
    1.  Generate a list of all unique library names currently present in the `kb/` directory or planned in `library-list.txt`.
    2.  For each library name, manually assign one of the standard library types from the list above. Use `generic` if unsure or if it doesn't fit well.
    3.  Create the initial `library-types.json` file with these mappings.
    *   **(Optional AI Assist):** An AI agent could *suggest* types based on library names or descriptions (if available), but **human review is essential** for accuracy.

**5. Maintenance Process:**

*   **When Adding New Libraries:** Whenever a new library URL is added to `library-list.txt` for processing:
    1.  Determine the library name that will be generated (e.g., `some-new-lib`).
    2.  Manually determine its appropriate type from the standard list.
    3.  Manually add the new entry `"some-new-lib": "selected-type"` to `library-types.json`.
*   **When Adding New Library Types:** If a new category of library requires a unique set of synthesis tasks:
    1.  Define the new type string (e.g., `static-site-generator`). Add it to the standard list (in documentation/this plan).
    2.  Create the corresponding task set file (e.g., `static-site-generator-tasks.toml`) in `[defined_task_set_dir]`.
    3.  Update `library-types.json` for any relevant libraries to use the new type.

**6. Responsibility:**
The creation and maintenance of `library-types.json` is primarily a **manual configuration task**, potentially assisted by AI suggestions but requiring human oversight to ensure accuracy, as it directly impacts the quality of the KB enrichment process.

**Completion:** The `library-types.json` file is created and populated, enabling the customizable synthesis workflow.