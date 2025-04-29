+++
id = "KB-JAVA-LAMBDAS-STREAMS-V1"
title = "Java Knowledge Base: Lambdas & Streams API Overview"
context_type = "knowledge_base"
scope = "Explanation of Java Functional Interfaces, Lambda Expressions, Method References, and the Streams API (creation, pipeline, operations, parallel streams, collectors)."
target_audience = ["dev-java"]
granularity = "detailed_summary"
status = "active"
last_updated = "2025-04-29"
tags = ["java", "lambda", "streams", "functional-interface", "method-reference", "collector", "parallel-stream", "java8", "kb"]
relevance = "High: Core features for modern functional-style Java programming."
target_mode_slug = "dev-java"
+++

# Java Lambdas & Streams API Overview

Introduced in Java 8, enabling functional programming paradigms.

## Functional Interfaces
*   Interface with exactly one abstract method (SAM). Can have default/static methods.
*   Target type for lambdas and method references.
*   `@FunctionalInterface` annotation (optional) for compiler checks.
*   `java.util.function` package provides common interfaces: `Predicate<T>`, `Consumer<T>`, `Function<T, R>`, `Supplier<T>`, `UnaryOperator<T>`, `BinaryOperator<T>`, etc.

## Lambda Expressions
*   Concise implementation of a functional interface.
*   **Syntax:** `(parameters) -> expression` or `(parameters) -> { statements; }`.
*   Parameter types often inferred (target typing).
*   Can capture `final` or effectively final local variables.
*   Example: `s -> s.isEmpty()` (implements `Predicate<String>`).

## Method References
*   Shorthand for lambdas that call an existing method.
*   **Syntax:** `::` operator.
*   **Types:** Static (`ClassName::staticMethod`), Bound Instance (`instance::method`), Unbound Instance (`ClassName::instanceMethod`), Constructor (`ClassName::new`).
*   Example: `System.out::println` (equivalent to `x -> System.out.println(x)`).

## Streams API (`java.util.stream`)
*   Represents a sequence of elements supporting aggregate operations.
*   **Characteristics:** No storage, functional (non-mutating source), lazy (intermediate ops), possibly unbounded, consumable (single traversal).
*   **Creation:** From Collections (`.stream()`, `.parallelStream()`), Arrays (`Arrays.stream()`), static factories (`Stream.of()`, `Stream.generate()`, `Stream.iterate()`), primitives (`IntStream.range()`), files (`Files.lines()`).

### Stream Pipeline
*   Source -> Zero or more Intermediate Operations -> Terminal Operation.

### Intermediate Operations (Lazy, return Stream)
*   **Stateless:** `filter()`, `map()`, `flatMap()`, `peek()`.
*   **Stateful:** `distinct()`, `sorted()`, `limit()`, `skip()`.

### Terminal Operations (Eager, consume Stream, produce result/side-effect)
*   **Result/Side-Effect:** `forEach()`, `forEachOrdered()`, `toArray()`, `reduce()`, `collect()`, `min()`, `max()`, `count()`.
*   **Short-Circuiting:** `anyMatch()`, `allMatch()`, `noneMatch()`, `findFirst()`, `findAny()`.

### Parallel Streams
*   Process elements concurrently (`collection.parallelStream()`, `stream.parallel()`).
*   Uses common `ForkJoinPool` by default.
*   **Considerations:** Not always faster (overhead), requires stateless operations for correctness, ordering may differ (`findAny` preferred over `findFirst`).

### Collectors (`java.util.stream.Collectors`)
*   Used with `Stream.collect()` for mutable reduction.
*   **Common Collectors:**
    *   To Collections: `toList()`, `toSet()`, `toCollection()`, `toMap()`.
    *   Joining Strings: `joining()`, `joining(delimiter)`.
    *   Summarizing: `counting()`, `summingInt()`, `averagingInt()`, `summarizingInt()`, `minBy()`, `maxBy()`, `reducing()`.
    *   Grouping/Partitioning: `groupingBy()`, `partitioningBy()` (can use downstream collectors).

## Best Practices
*   Prefer stateless lambdas, especially in parallel streams.
*   Avoid side-effects in intermediate operations.
*   Use parallel streams judiciously; profile performance.
*   Understand laziness and non-interference.
*   Use method references for clarity.

*(Source: Synthesized from `.ruru/docs/vertex/research/dev-java/explanations/20250429125450-java_lambdas_streams_deep_dive.md`)*