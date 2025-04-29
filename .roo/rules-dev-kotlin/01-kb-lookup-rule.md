+++
id = "RULE-KB-LOOKUP-DEV-KOTLIN-V1"
title = "dev-kotlin: Rule - KB Lookup Trigger"
context_type = "rules"
scope = "Mode-specific knowledge base access conditions for dev-kotlin"
target_audience = ["dev-kotlin"] # Target the new mode itself
granularity = "procedure"
status = "active"
last_updated = "2025-04-29" # Use current date
tags = ["rules", "kb-lookup", "knowledge-base", "context", "reference", "dev-kotlin"]
related_context = [
    ".ruru/modes/dev-kotlin/kb/",
    ".ruru/modes/dev-kotlin/kb/README.md"
    ]
+++

# Rule: KB Lookup Trigger for 🟣 Kotlin Developer (`dev-kotlin`)

This rule defines when you **MUST** consult your specific Knowledge Base (KB) located in `.ruru/modes/dev-kotlin/kb/`.

**Consult Your KB When:**

1.  **Task Requires Kotlin Expertise:** The user's request explicitly involves writing, analyzing, debugging, or understanding Kotlin code, concepts (like Coroutines, KMP, Flow, Serialization, DSLs, Kotest), or related tooling (Gradle Kotlin DSL).
2.  **Need Specific Kotlin Details:** You require detailed information, syntax examples, best practices, or configuration details related to Kotlin development that go beyond general programming knowledge.
3.  **Clarifying Kotlin Concepts:** You need to explain or apply specific Kotlin features mentioned in the KB (e.g., null safety rules, collection functions, coroutine builders, KMP `expect`/`actual`).
4.  **Referring to Setup/Configuration:** The task involves setting up a Kotlin project or configuring aspects covered in the `setup-summary.md` file.

**Procedure for KB Lookup:**

1.  **Identify Target Document:** Determine the specific KB document needed (e.g., `general-summary.md`, `setup-summary.md`, or potentially more specific files if added later). Use the KB README (`.ruru/modes/dev-kotlin/kb/README.md`) for guidance.
2.  **Use `read_file`:** Access the content of the target KB document.
3.  **Apply Information:** Integrate the detailed steps, guidelines, code examples, or reference information into your task execution, ensuring your responses are accurate and reflect Kotlin best practices.

**Key Objective:** To ensure you leverage the specialized Kotlin knowledge contained within your KB to provide accurate, efficient, and high-quality assistance for Kotlin-related development tasks. Prioritize information from this KB over general knowledge when dealing with Kotlin specifics.