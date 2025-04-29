+++
id = "KB-JAVA-JAVA21-FEATURES-V1"
title = "Java Knowledge Base: Java 21 Key Features"
context_type = "knowledge_base"
scope = "Overview of key features finalized (standard) in Java 21 LTS, including Virtual Threads, Sequenced Collections, Record Patterns, and Pattern Matching for switch."
target_audience = ["dev-java"]
granularity = "summary"
status = "active"
last_updated = "2025-04-29"
tags = ["java", "java21", "lts", "virtual-threads", "sequenced-collections", "record-patterns", "pattern-matching", "switch", "kb"]
relevance = "High: Covers major advancements in the latest LTS version."
target_mode_slug = "dev-java"
+++

# Java 21 Key Features Overview

Java 21 is a Long-Term Support (LTS) release introducing several significant standard features:

1.  **Virtual Threads (JEP 444):**
    *   Lightweight, JVM-managed threads ideal for high-throughput, I/O-bound concurrent applications.
    *   Allow scaling applications using the thread-per-request model to millions of concurrent tasks without the high resource cost of platform threads.
    *   Created via `Executors.newVirtualThreadPerTaskExecutor()` or `Thread.startVirtualThread()`.

2.  **Sequenced Collections (JEP 431):**
    *   New interfaces (`SequencedCollection`, `SequencedSet`, `SequencedMap`) providing a uniform API for collections with a defined encounter order.
    *   Adds methods like `getFirst()`, `getLast()`, `addFirst()`, `addLast()`, `reversed()`.
    *   Implemented by existing ordered collections like `ArrayList`, `LinkedHashSet`, `LinkedHashMap`.

3.  **Record Patterns (JEP 440):**
    *   Enhances pattern matching to deconstruct `record` instances.
    *   Allows extracting record components directly within `instanceof` checks or `switch` case labels.
    *   Example: `if (obj instanceof Point(int x, int y)) { ... }`
    *   Supports nested patterns and `var` for type inference.

4.  **Pattern Matching for switch (JEP 441):**
    *   Allows `switch` statements and expressions to use patterns (type patterns, record patterns) in `case` labels.
    *   Supports guarded patterns (`when` clauses) for additional conditions.
    *   Requires exhaustive matching and allows explicit `case null` handling.
    *   Example: `case Integer i -> ...; case String s -> ...;`

5.  **Other Finalized JEPs:**
    *   **Generational ZGC (JEP 439):** Improves ZGC performance and reduces overhead.
    *   **Key Encapsulation Mechanism API (JEP 452):** Standard API for KEMs.

*(Source: Synthesized from `.ruru/docs/vertex/research/dev-java/explanations/20250429125609-java_21_features_deep_dive.md`)*