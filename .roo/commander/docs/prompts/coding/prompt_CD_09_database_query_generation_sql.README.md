# Documentation: Prompt Template `prompt_CD_09_database_query_generation_sql.md`

## 1. Purpose

This prompt template is designed to request the **generation of an SQL query** (SELECT, INSERT, UPDATE, DELETE) for a specific data operation. It guides the user to provide details about the SQL dialect (if specific), the type of query, its objective, the relevant table schemas (key columns and data types), filtering conditions, joining conditions, data for insertion/update, and any sorting or grouping requirements.

The goal is to receive a correctly formulated SQL query that achieves the desired data manipulation or retrieval task, helping to accelerate database interaction development and data analysis.

## 2. Usage

1.  **Copy Template:**
    *   Copy `[.roo/commander/docs/prompts/coding/prompt_CD_09_database_query_generation_sql.md](prompt_CD_09_database_query_generation_sql.md)` to your working directory.
2.  **Rename File (Instance):** Rename the copied file descriptively (e.g., `generate_sql_select_recent_orders.md`).
3.  **Populate TOML Frontmatter (of the instance file):**
    *   Replace placeholders in the TOML frontmatter.
    *   `id`: Generate a unique ID, e.g., `PROMPT-Coding-SQLQueryGen-SelectRecentOrders-20250528140000`.
    *   `title`: Update to reflect the specific request, e.g., `"SQL Query Gen: Select Recent Customer Orders"`.
    *   `created_date`, `last_updated`: Set current date/timestamp.
    *   `authors`: Add your name/mode slug.
4.  **Fill in Markdown Body Placeholders (of the instance file):**
    *   Update the `Subject` line with a `[Brief Description of Desired Data Operation]`.
    *   **Crucially, in Section 1 ("Database & Query Specifications"):**
        *   Specify the `SQL Dialect` (or assume ANSI SQL).
        *   State the `Type of Query` (SELECT, INSERT, etc.).
        *   Clearly describe the `Objective of the Query`.
        *   **Provide `Relevant Table(s) & Their Schemas (Key Columns)`**. This is essential.
        *   Detail `Filtering Conditions`, `Joining Conditions`, `Data to be Inserted/Updated`, `Sorting Requirements`, `Grouping & Aggregation`, and `Specific Columns to Select` as applicable to the query type.
    *   Optionally, provide examples in Section 2 for complex SELECT queries.
    *   Re-state the SQL dialect in the final request paragraph.
5.  **Submit to AI:** Provide the completed Markdown content to the AI model to generate the SQL query.

## 3. TOML Frontmatter Schema (for an instance of `prompt_CD_09_database_query_generation_sql.md`)

*   **`id` (String, Required):** Unique ID for this prompt usage instance.
    *   *Convention:* `PROMPT-Coding-SQLQueryGen-[QueryType][PurposeShort]-[YYYYMMDDHHMMSS]`
    *   *Placeholder in template:* `"PROMPT-Coding-SQLQueryGen-[YYYYMMDDHHMMSS]"`
*   **`title` (String, Required):** Title for this SQL query generation request.
    *   *Placeholder in template:* `"Database Query Generation (SQL) Request"`
*   **`prompt_type` (String, Fixed):** `"generation_technical_code_sql"`
*   **`domain` (String, Fixed):** `"coding_and_technical"`
*   **`version` (String, Required):** Template version (e.g., "1.0").
    *   *Value in template:* `"1.0"`
*   **`created_date` (String, Required):** Instance creation date (`YYYY-MM-DD`).
    *   *Placeholder in template:* `"{{YYYYMMDD}}"`
*   **`last_updated` (String, Required):** Instance last update timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
    *   *Placeholder in template:* `"{{TIMESTAMP_ISO_Z}}"`
*   **`authors` (Array of Strings, Required):** User/agent filling the prompt.
    *   *Placeholder in template:* `["[Your Name/Mode Slug]"]`
*   **`tags` (Array of Strings, Required):** Keywords.
    *   *Default in template:* `["prompt", "coding", "sql", "database_query", "data_retrieval", "select_statement", "insert_statement", "update_statement", "delete_statement"]`
*   `related_schema_doc` (String, Optional but Recommended): Path to this schema file.
    *   *Value in template:* `".roo/commander/docs/prompts/coding/prompt_CD_09_database_query_generation_sql.README.md"`

## 4. Markdown Body Structure (for an instance of `prompt_CD_09_database_query_generation_sql.md`)

*   **Subject Line:** Pre-filled; update `[Brief Description of Desired Data Operation]`.
*   **Section 1: Database & Query Specifications:**
    *   `SQL Dialect`.
    *   `Type of Query`: **User must specify.**
    *   `Objective of the Query`: **Crucial for understanding intent.**
    *   `Relevant Table(s) & Their Schemas (Key Columns)`: **Essential for query construction.**
    *   `Filtering Conditions`.
    *   `Joining Conditions`.
    *   `Data to be Inserted/Updated`.
    *   `Sorting Requirements`.
    *   `Grouping & Aggregation`.
    *   `Specific Columns to Select`.
*   **Section 2: Example (Optional but helpful for complex SELECTs):**
    *   `Simplified Sample Data (Conceptual)`.
    *   `Desired Output Structure (for SELECT queries)`.
*   **Section 3: Request for SQL Query:**
    *   A pre-filled section outlining the desired characteristics of the generated SQL query (accuracy, formatting, common practices).

This structure ensures the AI receives detailed information about the database schema and the specific data operation required, leading to the generation of more accurate and relevant SQL queries.