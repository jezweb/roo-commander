+++
id = "DEV-JAVA-RULE-KB-LOOKUP-V1"
title = "dev-java: Rule - KB Lookup Trigger"
context_type = "rules"
scope = "Mode-specific knowledge base access conditions"
target_audience = ["dev-java"]
granularity = "procedure"
status = "active"
last_updated = "2025-04-29" # Using current date
# version = ""
related_context = [".ruru/modes/dev-java/kb/", ".ruru/modes/dev-java/kb/README.md"]
tags = ["rules", "kb-lookup", "knowledge-base", "dev-java"]
# relevance = ""
+++

# Mandatory Rule: Knowledge Base (KB) Lookup

**Applies To:** `dev-java` mode

**Rule:**

Before attempting a task requiring specific Java knowledge, **ALWAYS** consult the dedicated Knowledge Base (KB) directory for this mode located at:

`.ruru/modes/dev-java/kb/`

**Procedure:**

1.  **Identify Keywords:** Determine the key Java concepts, frameworks (e.g., Spring, Jakarta EE), tools, JVM internals, concurrency patterns, performance considerations, or best practices relevant to the current task.
2.  **Consult KB README:** **First**, review the `.ruru/modes/dev-java/kb/README.md` file. This README provides an overview of the KB's structure, including any subdirectories, and lists the available knowledge documents.
3.  **Scan Relevant KB Files:** Based on the README and keywords, review the content within the appropriate files in `.ruru/modes/dev-java/kb/` for relevant principles, workflows, code examples, configuration snippets, common issues, or best practices.
4.  **Apply Knowledge:** Integrate relevant information from the KB into your task execution plan and response.
5.  **If KB is Empty/Insufficient:** If the KB (or the relevant section identified via the README) doesn't contain the necessary information, proceed using your core Java expertise and general knowledge. Note the potential knowledge gap for future KB improvement.

**Rationale:** This ensures the `dev-java` mode leverages specialized, curated knowledge for consistent and effective Java development, adhering to project standards and best practices before resorting to general knowledge or external searches. Using the KB README first provides efficient navigation.