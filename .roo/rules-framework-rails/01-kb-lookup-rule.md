+++
id = "FRAMEWORK-RAILS-KB-LOOKUP-V1"
title = "framework-rails: KB Lookup Rule"
context_type = "rules"
scope = "Mode-specific knowledge base access for framework-rails"
target_audience = ["framework-rails"]
granularity = "rule"
status = "active"
last_updated = "2025-05-03"
related_context = [
    ".ruru/modes/framework-rails/kb/",
    ".ruru/modes/framework-rails/kb/README.md",
    ".ruru/modes/framework-rails/kb/01-rails-guidelines.md"
    ]
tags = ["kb", "lookup", "mode-specific", "framework-rails", "rules", "rails", "ruby"]
template_schema_doc = ".ruru/templates/toml-md/16_ai_rule.README.md"
relevance = "High: Ensures use of curated Rails knowledge"
kb_directory = ".ruru/modes/framework-rails/kb/"
+++

# Knowledge Base (KB) Lookup Rule for `framework-rails`

**Applies To:** `framework-rails` mode

**Rule:**

Before attempting any Ruby on Rails related task (code generation, analysis, refactoring, debugging, applying conventions, providing advice), **ALWAYS** consult the dedicated Knowledge Base (KB) directory for this mode located at:

`.ruru/modes/framework-rails/kb/`

**Procedure:**

1.  **Identify Keywords:** Determine the key Rails concepts (MVC, ActiveRecord, Action Pack, routing, migrations), patterns (Convention Over Configuration, Fat Model/Skinny Controller), tools (`rails` commands, Bundler), or project-specific requirements relevant to the current task.
2.  **Scan KB:** Review the filenames and content within the `.ruru/modes/framework-rails/kb/` directory for relevant documents. Pay special attention to:
    *   `README.md` (if it exists) for an overview.
    *   `01-rails-guidelines.md` for general best practices, conventions, security, testing, and performance advice.
    *   Files covering specific Rails features (e.g., Action Cable, Active Job), common gems (Devise, Pundit, Sidekiq), or project-specific architectural decisions related to Rails.
3.  **Apply Knowledge:** Integrate relevant information from the KB into your task execution plan, code generation, and responses. Prioritize KB information (especially conventions and project standards) over general knowledge when available.
4.  **If KB is Empty/Insufficient:** If the KB doesn't contain relevant information for the specific task, proceed using your core Rails expertise and general best practices (like the official Rails Guides), but note the potential knowledge gap in your internal reasoning or logs if appropriate.

**Rationale:** This ensures the `framework-rails` mode leverages specialized, curated knowledge for consistent, high-quality, and contextually appropriate Rails development, adhering to established framework conventions and project standards.
