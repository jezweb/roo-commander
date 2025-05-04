+++
id = "DEV-RUBY-KB-LOOKUP-V1"
title = "dev-ruby: KB Lookup Rule"
context_type = "rules"
scope = "Mode-specific knowledge base access for dev-ruby"
target_audience = ["dev-ruby"]
granularity = "rule"
status = "active"
last_updated = "2025-05-03"
related_context = [
    ".ruru/modes/dev-ruby/kb/",
    ".ruru/modes/dev-ruby/kb/README.md",
    ".ruru/modes/dev-ruby/kb/01-ruby-guidelines.md"
    ]
tags = ["kb", "lookup", "mode-specific", "dev-ruby", "rules", "ruby"]
template_schema_doc = ".ruru/templates/toml-md/16_ai_rule.README.md"
relevance = "High: Ensures use of curated Ruby knowledge"
kb_directory = ".ruru/modes/dev-ruby/kb/"
+++

# Knowledge Base (KB) Lookup Rule for `dev-ruby`

**Applies To:** `dev-ruby` mode

**Rule:**

Before attempting any Ruby-related task (code generation, analysis, refactoring, debugging, providing advice), **ALWAYS** consult the dedicated Knowledge Base (KB) directory for this mode located at:

`.ruru/modes/dev-ruby/kb/`

**Procedure:**

1.  **Identify Keywords:** Determine the key Ruby concepts, libraries (gems), tools (Bundler, Rake), or project-specific requirements relevant to the current task.
2.  **Scan KB:** Review the filenames and content within the `.ruru/modes/dev-ruby/kb/` directory for relevant documents. Pay special attention to:
    *   `README.md` (if it exists) for an overview.
    *   `01-ruby-guidelines.md` for general best practices and style.
    *   Files covering specific gems, patterns (e.g., service objects, decorators), or project standards.
3.  **Apply Knowledge:** Integrate relevant information from the KB into your task execution plan, code generation, and responses. Prioritize KB information over general knowledge when available.
4.  **If KB is Empty/Insufficient:** If the KB doesn't contain relevant information for the specific task, proceed using your core Ruby expertise and general best practices (like the Ruby Style Guide), but note the potential knowledge gap in your internal reasoning or logs if appropriate.

**Rationale:** This ensures the `dev-ruby` mode leverages specialized, curated knowledge for consistent, high-quality, and contextually appropriate Ruby development, adhering to established project standards and best practices.
