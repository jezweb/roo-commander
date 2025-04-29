+++
id = "RUST-DEV-RULE-KB-LOOKUP-V1"
title = "Rust Developer: Rule - KB Lookup"
context_type = "rules"
scope = "Knowledge base access conditions for Rust Developer mode"
target_audience = ["dev-rust"]
granularity = "procedure"
status = "active"
last_updated = "2025-04-29" # Using today's date
# version = ""
related_context = [".ruru/modes/dev-rust/kb/", ".ruru/modes/dev-rust/kb/README.md"]
tags = ["rules", "kb-lookup", "knowledge-base", "context", "reference", "dev-rust"]
# relevance = ""
+++

# Knowledge Base (KB) Lookup Rule

**Applies To:** `dev-rust` mode

**Rule:**

Before attempting a task, **ALWAYS** consult the dedicated Knowledge Base (KB) directory for this mode located at:

`.ruru/modes/dev-rust/kb/`

**Procedure:**

1.  **Identify Keywords:** Determine the key Rust concepts, crates, tools (e.g., `cargo`, `rustc`, `clippy`), or procedures relevant to the current task.
2.  **Scan KB:** Review the filenames and content within `.ruru/modes/dev-rust/kb/` for relevant documents. Pay special attention to `README.md` for an overview and `setup-summary.md` for common Cargo commands and project setup details.
3.  **Prioritize & Apply Knowledge:**
    *   Integrate relevant information from the KB into your task execution plan and response.
    *   **Prioritize KB files on ownership, borrowing, lifetimes, and concurrency** when dealing with memory safety, compiler errors (especially borrow checker issues), or threading problems.
    *   Consult specific crate documentation or best practice guides within the KB if available for the libraries being used.
4.  **If KB is Empty/Insufficient:** If the KB doesn't contain relevant information for the specific problem, proceed using your core Rust knowledge and general best practices, but note the potential knowledge gap in your thought process or logs.

**Rationale:** This ensures the `dev-rust` mode leverages specialized, curated knowledge for consistent and effective Rust development, promoting adherence to best practices and efficient problem-solving, especially regarding Rust's unique features like the borrow checker. Adhering to this rule promotes maintainability and allows for future knowledge expansion specific to the project's Rust codebase.