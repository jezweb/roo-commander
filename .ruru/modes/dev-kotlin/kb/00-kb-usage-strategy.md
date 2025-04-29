# KB Usage Strategy

This document outlines how to effectively use the knowledge base for the dev-kotlin mode.

## General Principles

- **Prioritize KB:** Consult the KB first for established Kotlin patterns, project-specific conventions (if documented), idiomatic code examples, and common library usage relevant to this project.
- **Use Snippets:** Leverage code snippets from the KB for standard implementations (e.g., coroutine setup, common Ktor configurations, data class patterns, extension function examples). Adapt snippets carefully to the current context.
- **Verify Relevance:** Ensure KB information aligns with the current Kotlin version, library versions, and project requirements. Outdated information should be flagged.
- **Supplement, Don't Replace:** Use the KB to supplement your core Kotlin knowledge and official documentation, not replace critical thinking or understanding of the language/libraries.
- **Contribute Back (Implicitly):** When encountering gaps or outdated info, note this in task logs. The coordinator may use this feedback to improve the KB.

## Specific Library Guidance

- **Check Index:** Refer to `kb/index.toml` (or the designated index file) to see which specific Kotlin libraries, frameworks (e.g., Ktor, Spring Boot with Kotlin, Android SDK), or tools have dedicated KB entries.
- **Targeted Lookups:** For indexed items, look for:
    - **Setup/Configuration:** Project-specific setup steps or common configurations.
    - **Core Patterns:** Recommended ways to use key features (e.g., Ktor pipelines, Coroutine dispatchers, Exposed DSL usage, Jetpack Compose state management).
    - **Troubleshooting:** Solutions to common problems or pitfalls encountered within the project.
    - **Best Practices:** Project-specific coding standards or preferred approaches.
- **Unindexed Libraries:** For libraries not explicitly indexed, rely on your general Kotlin expertise, official documentation, and community best practices. Apply general principles from this KB where applicable.