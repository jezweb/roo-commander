+++
id = "KB-JAVA-JVM-INTERNALS-V1"
title = "Java Knowledge Base: JVM Internals"
context_type = "knowledge_base"
scope = "Overview of the Java Virtual Machine (JVM) architecture including Classloaders, Runtime Data Areas, Execution Engine (Interpreter, JIT, GC), JNI, and relation to JMM."
target_audience = ["dev-java"]
granularity = "detailed_summary"
status = "active"
last_updated = "2025-04-29"
tags = ["java", "jvm", "internals", "classloader", "heap", "stack", "gc", "jit", "jni", "jmm", "kb"]
relevance = "High: Understanding JVM internals aids in performance tuning and debugging."
target_mode_slug = "dev-java"
+++

# JVM Internals Overview

## 1. Classloader Subsystem
Responsible for loading, linking, and initializing classes.
*   **Loading:** Finds and imports class binary data via Bootstrap, Extension, Application, or User-defined loaders. Uses delegation model.
*   **Linking:** Integrates the type into JVM runtime state.
    *   **Verification:** Ensures correctness and security of bytecode.
    *   **Preparation:** Allocates memory for static fields with default values.
    *   **Resolution:** Converts symbolic references to direct references (optional, can be lazy).
*   **Initialization:** Executes static initializers (`<clinit>`) and assigns static variable values. Triggered on first active use, thread-safe.

## 2. Runtime Data Areas
Memory areas used during execution.
*   **Method Area (Shared):** Stores per-class data (runtime constant pool, field/method data, code). Implemented as Metaspace (native memory) in HotSpot since Java 8.
*   **Heap (Shared):** Stores all class instances and arrays. Managed by Garbage Collector.
*   **JVM Stacks (Per-Thread):** Stores frames for method calls (local variables, operand stack, constant pool reference). `StackOverflowError` if exceeded.
*   **PC Registers (Per-Thread):** Holds address of current JVM instruction.
*   **Native Method Stacks (Per-Thread):** Used for native method execution.

## 3. Execution Engine
Executes loaded bytecode.
*   **Interpreter:** Executes bytecode instruction by instruction (slower).
*   **Just-In-Time (JIT) Compiler:** Compiles frequently executed bytecode ("hotspots") into native code for faster execution. HotSpot uses tiered compilation (C1/Client, C2/Server).
*   **Garbage Collector (GC):** Automatically reclaims memory in the Heap used by unreachable objects.
    *   **Concepts:** Reachability, Mark-Sweep-Compact, Generational Hypothesis (Young/Old Gen).
    *   **Collectors (HotSpot):** Serial, Parallel (Throughput), CMS (Deprecated), G1 (Default since JDK 9), ZGC (Low Latency), Shenandoah (Low Latency).

## 4. JNI (Java Native Interface)
Framework enabling Java code to interact with native code (C/C++).

## 5. Java Memory Model (JMM) Relationship
Defines how threads interact through memory, guaranteeing visibility and ordering via concepts like `happens-before`. Keywords `volatile` and `synchronized` rely on JMM guarantees. JVM ensures execution adheres to JMM rules.

*(Source: Synthesized from `.ruru/docs/vertex/research/dev-java/explanations/20250429125244-jvm_internals_deep_dive.md`)*