+++
id = "RULE-KB-LOOKUP-framework-spring-V1"
title = "Rule: KB Lookup Trigger for framework-spring"
context_type = "rules"
scope = "Mode-specific knowledge base access conditions for framework-spring"
target_audience = ["framework-spring"]
granularity = "rule" # Changed from ruleset
status = "active"
last_updated = "2025-04-28" # Updated date
# version = ""
related_context = [".ruru/modes/framework-spring/kb/", ".ruru/modes/framework-spring/kb/README.md"] # Updated context
tags = ["kb", "lookup", "mode-specific", "framework-spring", "rules"] # Added tags
# relevance = ""
+++

# Rule: Knowledge Base (KB) Lookup for framework-spring

**Applies To:** `framework-spring` mode

**Rule:**

Before attempting a task, **ALWAYS** consult the dedicated Knowledge Base (KB) directory for this mode located at:

`.ruru/modes/framework-spring/kb/`

**Procedure:**

1.  **Identify Keywords:** Determine the key Spring Framework concepts, tools, or procedures relevant to the current task (e.g., Spring Boot, Spring Data JPA, Spring Security, Dependency Injection, AOP, MVC, testing, configuration).
2.  **Scan KB:** Review the filenames and content within `.ruru/modes/framework-spring/kb/` for relevant documents. Pay special attention to the `README.md` (`.ruru/modes/framework-spring/kb/README.md`) as it serves as the primary index and navigation guide for the KB. Look for information on:
    *   Core Spring concepts (IoC, DI)
    *   Spring Boot specifics (auto-configuration, starters, actuators)
    *   Data Access (Spring Data JPA, JDBC, transactions)
    *   Web development (Spring MVC, WebFlux)
    *   Security (Spring Security configuration, common patterns)
    *   Aspect-Oriented Programming (AOP)
    *   Testing strategies (unit, integration tests with Spring)
    *   Configuration best practices (properties, YAML, profiles)
    *   Common pitfalls and troubleshooting tips.
3.  **Apply Knowledge:** Integrate relevant information, patterns, and best practices from the KB into your task execution plan, code generation, and response.
4.  **If KB is Empty/Insufficient:** If the KB or its `README.md` doesn't contain relevant information for the specific task, proceed using your core Spring Framework knowledge and general best practices, but note the potential knowledge gap.

**Rationale:** This ensures the `framework-spring` mode leverages specialized, curated knowledge for consistent and effective operation, adhering to project-specific standards or patterns documented within its KB.
