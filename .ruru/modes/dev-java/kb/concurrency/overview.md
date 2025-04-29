+++
id = "KB-JAVA-CONCURRENCY-V1"
title = "Java Knowledge Base: Concurrency Overview"
context_type = "knowledge_base"
scope = "Core concepts of Java concurrency including threads, synchronization, memory model, atomic variables, concurrent collections, Executor framework, and modern features."
target_audience = ["dev-java"]
granularity = "detailed_summary"
status = "active"
last_updated = "2025-04-29"
tags = ["java", "concurrency", "threads", "synchronization", "jmm", "executors", "virtual-threads", "kb"]
relevance = "High: Essential for building multi-threaded applications."
target_mode_slug = "dev-java"
+++

# Java Concurrency Overview

Java concurrency enables simultaneous operations, leveraging multi-core processors.

## Core Concepts
*   **Threads:** Basic execution units (`Thread` class, `Runnable` interface). Share heap, have own stack.
*   **Synchronization:** Controls access to shared resources.
    *   **`synchronized` Keyword:** Uses intrinsic locks (monitors) on objects for methods or blocks. Ensures mutual exclusion.
    *   **`java.util.concurrent.locks.Lock`:** More flexible locking (`ReentrantLock`, `ReadWriteLock`). Supports fairness, interruptible locking, try-locks.

## Java Memory Model (JMM)
*   Defines how threads interact via memory, ensuring visibility and ordering.
*   **Happens-Before Relationship:** Guarantees that results of action A are visible to action B if A happens-before B (e.g., monitor unlock happens-before subsequent lock, volatile write happens-before subsequent read, `Thread.start()` happens-before thread actions, `join()` completion happens-after thread actions).
*   Without happens-before, reordering and visibility issues can occur.

## `volatile` Keyword
*   Ensures visibility of variable updates across threads and limits reordering.
*   Reads/writes go to main memory.
*   Does *not* guarantee atomicity for compound operations (e.g., `count++`).

## Atomic Variables (`java.util.concurrent.atomic`)
*   Classes like `AtomicInteger`, `AtomicReference` provide lock-free, thread-safe operations on single variables using hardware primitives (e.g., CAS - Compare-And-Swap).
*   Often more performant than locks under high contention for simple updates.

## Concurrent Collections (`java.util.concurrent`)
*   Thread-safe collections optimized for concurrency (e.g., `ConcurrentHashMap`, `CopyOnWriteArrayList`, `BlockingQueue`).
*   Offer better scalability than externally synchronized standard collections.
*   `BlockingQueue` is key for producer-consumer patterns.

## Executor Framework (`java.util.concurrent`)
*   Decouples task submission from thread management.
*   **Interfaces:** `Executor`, `ExecutorService`, `ScheduledExecutorService`.
*   **Implementations:** `ThreadPoolExecutor` (configurable), `ForkJoinPool` (work-stealing, for divide-and-conquer tasks, used by parallel streams).
*   **`Executors`:** Factory class for common pool types (`newFixedThreadPool`, `newCachedThreadPool`, `newVirtualThreadPerTaskExecutor`).

## Modern Concurrency (Java 21+)
*   **Virtual Threads (Project Loom):** Lightweight, JVM-managed threads ideal for high I/O-bound concurrency. Don't map 1:1 to OS threads. Blocked virtual threads release their OS carrier thread.
*   **Structured Concurrency (Preview):** Treats groups of concurrent tasks (often virtual threads) as a single unit using `StructuredTaskScope`, simplifying lifecycle management, error handling, and cancellation.
*   **Scoped Values (Preview):** Alternative to thread-locals, suitable for virtual threads. Share immutable data within a thread and its children for a specific scope.

*(Source: Synthesized from `.ruru/docs/vertex/research/dev-java/explanations/20250429125201-java_concurrency_deep_dive.md`)*