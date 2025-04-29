+++
# --- Core Identification (Required) ---
id = "MODE-DEV-JAVA" # << REQUIRED >> Example: "util-text-analyzer"
name = "☕️ Java Developer" # << REQUIRED >> Example: "📊 Text Analyzer"
version = "1.0.0" # << REQUIRED >> Initial version

# --- Classification & Hierarchy (Required) ---
classification = "developer" # << REQUIRED >> Options: worker, lead, director, assistant, executive
domain = "backend" # << REQUIRED >> Example: "utility", "backend", "frontend", "data", "qa", "devops", "cross-functional"
# sub_domain = "optional-sub-domain" # << OPTIONAL >> Example: "text-processing", "react-components"

# --- Description (Required) ---
summary = "Develops robust, scalable, and performant applications using the Java language and its ecosystem." # << REQUIRED >>

# --- Base Prompting (Required) ---
system_prompt = """
You are Roo ☕️ Java Developer. Your primary role and expertise is developing robust, scalable, and performant applications using the Java language and its ecosystem.

Key Responsibilities:
- Implement features and fix bugs in Java applications.
- Write clean, maintainable, and efficient Java code following best practices.
- Leverage core Java features (Generics, Lambdas, Streams, I/O, Concurrency).
- Understand and apply concepts related to JVM internals (Classloaders, GC, JIT).
- Utilize frameworks like Spring Boot and Jakarta EE where appropriate.
- Write unit and integration tests for Java code.
- Participate in code reviews.

Operational Guidelines:
- Consult and prioritize guidance, best practices, and project-specific information found in the Knowledge Base (KB) located in `.ruru/modes/dev-java/kb/`. Use the KB README to assess relevance and the KB lookup rule for guidance on context ingestion.
- Use tools iteratively and wait for confirmation.
- Prioritize precise file modification tools (`apply_diff`, `search_and_replace`) over `write_to_file` for existing files.
- Use `read_file` to confirm content before applying diffs if unsure.
- Execute CLI commands using `execute_command`, explaining clearly.
- Escalate tasks outside core expertise to appropriate specialists via the lead or coordinator.
""" # << REQUIRED >>

# --- Tool Access (Optional - Defaults to standard set if omitted) ---
# If omitted, assumes access to: ["read", "edit", "browser", "command", "mcp"]
# allowed_tool_groups = ["read", "edit", "command"] # Example: Specify if different from default

# --- File Access Restrictions (Optional - Defaults to allow all if omitted) ---
[file_access]
read_allow = ["**/*.java", "**/*.xml", "**/*.properties", "**/*.gradle", "**/*.pom", ".ruru/**", ".roo/**"] # Allow reading Java, config, build files, and ruru/roo dirs
write_allow = ["**/*.java", "**/*.xml", "**/*.properties", "**/*.gradle", "**/*.pom", ".ruru/tasks/**"] # Allow writing Java, config, build files, and task files

# --- Metadata (Optional but Recommended) ---
[metadata]
tags = ["java", "backend", "developer", "spring", "jakarta-ee", "jvm", "lts", "concurrency"] # << RECOMMENDED >> Lowercase, descriptive tags
categories = ["Backend Development", "Java Ecosystem", "Software Development"] # << RECOMMENDED >> Broader functional areas
# delegate_to = [] # << OPTIONAL >> Modes this mode might delegate specific sub-tasks to
escalate_to = ["lead-backend", "core-architect"] # << OPTIONAL >> Modes to escalate complex issues or broader concerns to
reports_to = ["lead-backend", "manager-project"] # << OPTIONAL >> Modes this mode typically reports completion/status to
documentation_urls = [ # << OPTIONAL >> Links to relevant external documentation
  "https://dev.java/",
  "https://docs.oracle.com/en/java/",
  "https://spring.io/projects/spring-boot",
  "https://jakarta.ee/specifications/"
]
context_files = [ # << OPTIONAL >> Relative paths to key context files within the workspace
  # ".ruru/docs/standards/coding_style_java.md" # Example
]
context_urls = [] # << OPTIONAL >> URLs for context gathering (less common now with KB)

# --- Custom Instructions Pointer (Optional) ---
# Specifies the location of the *source* directory for custom instructions (now KB).
# Conventionally, this should always be "kb".
custom_instructions_dir = "kb" # << RECOMMENDED >> Should point to the Knowledge Base directory

# --- Mode-Specific Configuration (Optional) ---
# [config]
# key = "value" # Add any specific configuration parameters the mode might need
+++

# ☕️ Java Developer - Mode Documentation

## Description

This mode focuses on developing robust, scalable, and performant applications using the Java language and its ecosystem. Key areas include core Java features (Generics, Lambdas, Streams, I/O), modern concurrency (including Virtual Threads from Java 21), JVM internals understanding (Classloaders, Runtime Data Areas, GC, JIT), performance tuning methodologies, the Java Platform Module System (JPMS), and familiarity with major enterprise frameworks like Spring (including Spring Boot) and Jakarta EE (including Servlet, JPA, CDI). The mode leverages knowledge of recent LTS versions (Java 21) and their features.

## Core Knowledge & Capabilities

## Java Developer Specialist Knowledge Base

This document outlines core concepts, principles, best practices, and key functionalities relevant to an expert Java Developer, based exclusively on official documentation.

### 1. Core Language Features (Java SE)

#### 1.1. Generics

*   **Concept:** Generics add type safety at compile time by allowing types (classes and interfaces) to operate on types specified as parameters [26]. They enable the definition of classes, interfaces, and methods that operate on types specified as parameters [26].
*   **Purpose:**
    *   Provide stronger type checks at compile time, reducing `ClassCastException`s at runtime [26].
    *   Eliminate the need for explicit casting [26].
    *   Enable programmers to implement generic algorithms that work on collections of different types [26].
*   **Key Functionality:**
    *   **Type Parameters:** Declared in angle brackets (e.g., `List<T>`).
    *   **Wildcards:**
        *   `? extends Type`: Upper Bounded Wildcard - Represents `Type` or any subtype.
        *   `? super Type`: Lower Bounded Wildcard - Represents `Type` or any supertype.
        *   `?`: Unbounded Wildcard - Represents any type.
    *   **Type Erasure:** Generic type information is primarily used by the compiler for type checking and is generally "erased" at runtime. The bytecode often contains casts inserted by the compiler.
*   **Best Practice:** Use generics to enhance type safety and code readability when working with collections or creating reusable components [26].

#### 1.2. Lambda Expressions

*   **Concept:** An anonymous function (a function without a name) that can be treated as a value [20], [33]. It provides a concise way to implement a method of a functional interface [12], [26].
*   **Purpose:**
    *   Enable functional programming paradigms in Java [20].
    *   Provide a clear and compact way to represent a single method interface (functional interface) [19], [26].
    *   Reduce boilerplate code compared to anonymous inner classes [19], [33].
*   **Syntax:** Consists of parameters, an arrow token (`->`), and a body [12], [20], [26], [33].
    *   `(parameters) -> expression`
    *   `(parameters) -> { statements; }`
    *   Parameter types can often be omitted (inferred by the compiler) [12], [26]. Parentheses can be omitted for a single inferred-type parameter [12], [26].
*   **Functional Interfaces:** An interface with exactly one abstract method. Lambdas can only provide the implementation for functional interfaces [12], [20], [26]. The `@FunctionalInterface` annotation can be used to denote an interface as functional, enabling compiler checks [20]. Common examples are found in `java.util.function` (e.g., `Predicate`, `Function`, `Consumer`, `Supplier`) [19], [26].
*   **Scope:** Lambdas have lexical scoping. They can access `final` or effectively final local variables and parameters of the enclosing scope, as well as instance and static variables [26], [33]. `this` inside a lambda refers to the enclosing class instance [33].
*   **Best Practice:** Use lambdas to simplify the implementation of functional interfaces, especially with Streams API and event handling [19], [26].

#### 1.3. Streams API

*   **Concept:** A sequence of elements supporting sequential and parallel aggregate operations [47], [50]. Streams are not data structures; they carry values from a source (like a collection, array, or I/O channel) through a pipeline of computational steps [47], [50].
*   **Purpose:**
    *   Enable functional-style operations on collections and other data sources [47], [49].
    *   Provide a way to process data declaratively (focusing on *what* to do, not *how*) [47].
    *   Support parallel processing with minimal code changes [47].
*   **Key Characteristics:**
    *   **Pipeline:** Operations are chained together (source -> intermediate operations -> terminal operation) [47], [50].
    *   **Internal Iteration:** Iteration logic is handled by the Stream API itself.
    *   **Laziness:** Intermediate operations are not executed until a terminal operation is invoked [47], [50]. Computation happens only as needed.
    *   **Consumable:** Streams can typically be traversed only once.
    *   **No Source Modification:** Operations produce new streams or results without modifying the original data source [47].
*   **Key Operations:**
    *   **Intermediate:** Transform a stream into another stream (e.g., `filter(Predicate)`, `map(Function)`, `flatMap(Function)`, `sorted()`, `peek(Consumer)`) [47], [48], [50]. These are lazy.
    *   **Terminal:** Produce a result or side-effect (e.g., `forEach(Consumer)`, `collect(Collector)`, `reduce()`, `count()`, `anyMatch(Predicate)`, `findFirst()`, `toArray()`) [47], [48], [50]. These trigger processing.
*   **Primitive Streams:** Specialized streams for `int`, `long`, `double` (`IntStream`, `LongStream`, `DoubleStream`) to avoid boxing/unboxing overhead [50].
*   **Best Practice:** Use Streams for processing collections or sequences of data, especially when filtering, mapping, or reducing. Consider parallel streams (`parallelStream()`) for performance gains on large datasets if the operations are safe for parallel execution, but be mindful of potential overhead and ordering issues [47].

### 2. Concurrency

#### 2.1. Traditional Concurrency (`java.util.concurrent`)

*   **Concept:** Java provides built-in support for concurrent programming via `Thread` objects and the `synchronized` keyword for basic locking. The `java.util.concurrent` package offers higher-level abstractions [Oracle Concurrency Tutorial].
*   **Key Functionality:**
    *   **`Thread` & `Runnable`:** Basic units of execution. `Runnable` is preferred for defining tasks [Oracle Concurrency Tutorial].
    *   **Synchronization:** `synchronized` methods/blocks provide mutual exclusion using intrinsic locks. `volatile` ensures visibility of variable changes across threads [JLS - Threads and Locks].
    *   **Executors (`ExecutorService`):** Decouple task submission from execution mechanics (thread management). Provides thread pools for efficient resource usage [Oracle Concurrency Tutorial].
    *   **Locks (`Lock`, `ReentrantLock`):** More flexible locking mechanisms than `synchronized` (e.g., timed waits, interruptible locks, fairness policies) [Oracle Concurrency Tutorial].
    *   **Concurrent Collections:** Thread-safe collections (e.g., `ConcurrentHashMap`, `CopyOnWriteArrayList`) designed for concurrent access [Oracle Concurrency Tutorial].
    *   **Atomics (`AtomicInteger`, etc.):** Support lock-free, thread-safe programming on single variables [Oracle Concurrency Tutorial].
    *   **Synchronizers:** Coordination utilities like `CountDownLatch`, `CyclicBarrier`, `Semaphore`, `Phaser` [Oracle Concurrency Tutorial].
*   **Best Practice:** Prefer `java.util.concurrent` utilities over low-level `Thread` manipulation and `synchronized` where applicable, as they offer better performance, flexibility, and robustness [Oracle Concurrency Tutorial]. Understand potential issues like deadlocks, livelocks, and race conditions.

#### 2.2. Virtual Threads (Project Loom - JEP 444, Finalized in Java 21)

*   **Concept:** Lightweight threads provided by the JDK, not directly mapped 1:1 to operating system (OS) threads [5], [9], [17]. They are managed by the Java Virtual Machine (JVM) scheduler [5], [9].
*   **Purpose:** Dramatically increase the throughput of concurrent applications, especially those with high I/O wait times (network calls, file operations, database queries), by allowing a massive number of virtual threads to run on a small number of OS threads [5], [9], [17]. Reduce the effort of writing, maintaining, and observing high-throughput concurrent applications [9], [17].
*   **Mechanism:**
    *   The JVM scheduler mounts a virtual thread onto an OS thread (called a "carrier thread") to execute its code [5], [9].
    *   When a virtual thread performs a blocking I/O operation (or other blocking operations supported by Loom), it *unmounts* from its carrier thread, making the carrier available to run other virtual threads [1], [5]. The virtual thread's state is saved (typically in the heap) [1].
    *   Once the blocking operation completes, the virtual thread becomes eligible for scheduling again and will be mounted on an available carrier thread [1], [5].
*   **Key Functionality:**
    *   Created via `Thread.startVirtualThread(Runnable)` or `Thread.ofVirtual().start(Runnable)` or using `Executors.newVirtualThreadPerTaskExecutor()` [JEP 444].
    *   Behave largely like traditional platform threads from the application code perspective (support thread-local variables, synchronization, etc.) [17].
*   **Pinning:** A situation where a virtual thread cannot unmount from its carrier thread during a blocking operation. This can happen inside `synchronized` blocks/methods or when executing native (JNI) code [5]. Pinning limits scalability as it holds onto the carrier OS thread.
    *   **Note (JEP 491 - Proposed for JDK 24):** Aims to eliminate pinning within `synchronized` blocks by reimplementing monitor locking [5], [15].
*   **Best Practice:** Use virtual threads for tasks that spend significant time blocking on I/O. Avoid them for CPU-intensive tasks, as they don't offer performance benefits over platform threads in that scenario. Be mindful of potential pinning, especially with `synchronized` blocks (until JEP 491 is integrated) and native code [5], [15]. Use `java.util.concurrent.locks.ReentrantLock` instead of `synchronized` if pinning is a concern [15].

### 3. JVM Understanding

#### 3.1. Garbage Collection (GC)

*   **Concept:** The process by which the JVM automatically manages memory by reclaiming heap space occupied by objects that are no longer referenced by the application [2], [21], [30], [38].
*   **Purpose:** Frees developers from manual memory deallocation, reducing memory leaks and dangling pointer issues common in languages like C/C++ [2], [32].
*   **Basic Process (Conceptual):**
    *   **Mark:** Identify all objects that are still reachable ("live") starting from GC Roots (e.g., stack variables, static fields, JNI references) [38], [42].
    *   **Sweep/Delete:** Remove unreachable ("dead") objects [38], [42].
    *   **Compact (Optional):** Move live objects together to reduce fragmentation and improve allocation speed [21], [38].
*   **Heap Generations (Common Strategy):** The heap is often divided into generations (e.g., Young Generation - Eden, Survivor spaces; Old Generation/Tenured) based on the hypothesis that most objects die young. GC occurs more frequently in the Young Generation [21], [JVM Spec - Heap].
*   **Common GC Algorithms (Implementations vary):**
    *   **Serial GC:** Single-threaded, stops all application threads ("Stop-The-World") [42]. Suitable for single-processor machines or small heaps.
    *   **Parallel GC (Throughput Collector):** Multi-threaded version of Serial GC for the Young Generation, still Stop-The-World [42]. Default up to Java 8. Aims for high application throughput.
    *   **G1 GC (Garbage-First):** Divides heap into regions. Aims for more predictable pause times by collecting regions with the most garbage first. Concurrent marking phases reduce pause lengths [42]. Default from Java 9.
    *   **ZGC / Shenandoah:** Low-latency collectors aiming for very short pause times, largely concurrent with application threads [42]. Suitable for large heaps and applications sensitive to pauses. (ZGC is not default) [42].
*   **Key Tuning Flags:** `-Xms` (initial heap size), `-Xmx` (max heap size), `-XX:+UseG1GC`, `-XX:+UseZGC`, etc. [2], [28], [30].
*   **Best Practice:** Understand the GC algorithm in use and its characteristics. Monitor GC activity using tools (JMX, GC logs) and tune parameters based on application requirements (throughput vs. latency) and observed behavior [23], [32]. The JVM specification does not mandate a specific GC algorithm, leaving it to the implementor [35], [37].

#### 3.2. Just-In-Time (JIT) Compilation

*   **Concept:** A component of the JVM that improves performance by compiling frequently executed Java bytecode into native machine code at runtime [44], [45].
*   **Purpose:** Bridge the performance gap between interpreted bytecode and native code execution [44], [45].
*   **Mechanism:**
    *   The JVM initially interprets bytecode [44], [45].
    *   It monitors method execution frequency (invocation counts or other heuristics) [44], [46].
    *   When a method becomes "hot" (frequently executed), the JIT compiler compiles its bytecode into optimized native machine code [29], [43], [44].
    *   Subsequent calls to the method execute the faster native code directly [44], [46].
*   **Tiered Compilation (Common Strategy):** Uses multiple levels of compilation. Methods might first be compiled quickly with limited optimizations (e.g., by C1 compiler in HotSpot) and later recompiled with more aggressive optimizations (e.g., by C2 compiler) if they remain hot [45].
*   **Optimizations:** JIT compilers perform various optimizations, such as method inlining, loop unrolling, dead code elimination, escape analysis, etc. [29], [43].
*   **Deoptimization:** Compiled code may be discarded if assumptions made during optimization become invalid (e.g., due to dynamic class loading).
*   **Best Practice:** Generally, rely on the JIT compiler to optimize performance automatically. Understand that there's a warm-up phase as methods get compiled. Avoid premature manual optimization that might hinder the JIT compiler.

#### 3.3. Memory Management & Structure

*   **Concept:** How the JVM organizes and manages memory during program execution [2], [30].
*   **Key Memory Areas (HotSpot JVM perspective):**
    *   **Heap:** Runtime data area where memory for all class instances and arrays is allocated [2], [30], [35]. Shared among all threads [35]. Managed by the Garbage Collector [2], [35]. Often divided into Young and Old generations [21]. Configurable size (`-Xms`, `-Xmx`) [30], [32].
    *   **Method Area (Metaspace from Java 8+):** Stores per-class structures like the runtime constant pool, field and method data, and the code for methods and constructors [2], [30], [35]. Logically part of the heap but often managed separately [35]. In Java 8+, PermGen was replaced by Metaspace, which is allocated from native memory by default (size controlled by `-XX:MaxMetaspaceSize`).
    *   **JVM Stacks:** Created per thread [2]. Stores frames for each method invocation. Each frame contains local variables, operand stack, and reference to the runtime constant pool for the method's class [2], [JVM Spec - Runtime Data Areas]. Stack size configurable (`-Xss`).
    *   **PC Registers:** Created per thread [2]. Contains the address of the JVM instruction currently being executed (undefined for native methods) [2], [JVM Spec - Runtime Data Areas].
    *   **Native Method Stacks:** Created per thread [2]. Used for native method execution [2], [JVM Spec - Runtime Data Areas].
*   **Object Allocation:** Typically occurs in the Eden space of the Young Generation within the heap [21]. Small objects may be allocated in Thread-Local Allocation Buffers (TLABs) for efficiency [21].
*   **Potential Issues:** `OutOfMemoryError` can occur if the heap, metaspace, or stack space is exhausted [JVM Spec - Errors].
*   **Best Practice:** Understand the different memory areas and their purpose. Monitor memory usage (heap, metaspace) using profiling tools. Size the heap and metaspace appropriately for the application's needs [28], [32]. Be aware of potential memory leaks (objects unintentionally retained).

### 4. Performance Tuning

*   **Concept:** The process of identifying and eliminating bottlenecks to improve application responsiveness, throughput, or resource utilization.
*   **Principles:**
    *   **Measure First:** Use profiling tools (e.g., JFR, VisualVM, JProfiler - *Note: Specific tools often mentioned in guides, not specs*) to identify actual bottlenecks before attempting optimization [Oracle Performance Tuning Guide]. Don't guess.
    *   **Focus on Hotspots:** Concentrate optimization efforts on the most frequently executed or resource-intensive parts of the code identified during profiling [46].
    *   **Understand Trade-offs:** Optimizations often involve trade-offs (e.g., increased memory usage for reduced CPU time, increased startup time for better peak performance) [44].
*   **Common Areas:**
    *   **GC Tuning:** Selecting the right GC algorithm and tuning heap/generation sizes to minimize pause times or maximize throughput based on application needs [23], [28].
    *   **Code Optimization:** Improving algorithm efficiency, using appropriate data structures, reducing object allocation rate, optimizing loops.
    *   **Concurrency Tuning:** Optimizing thread pool sizes, choosing appropriate locking strategies (or lock-free approaches), leveraging virtual threads for I/O-bound tasks [5], [29].
    *   **JVM Options:** Using flags to control JIT compilation, heap size, GC behavior, etc. [28], [43].
    *   **I/O Optimization:** Using buffering, asynchronous I/O (NIO), efficient serialization.
*   **Best Practice:** Follow a systematic approach: measure, identify bottleneck, hypothesize cause, implement change, measure again to verify improvement. Leverage JVM features like JIT and GC effectively rather than fighting against them.

### 5. Modules (JPMS - Java Platform Module System)

*   **Concept:** Introduced in Java 9 (Project Jigsaw), JPMS provides a mechanism for organizing code and dependencies into distinct modules [6], [7], [11], [34].
*   **Purpose:**
    *   **Reliable Configuration:** Explicitly declare dependencies between modules (`requires` clause) [6]. The module system ensures required modules are present at compile/launch time, avoiding "classpath hell" issues like `NoClassDefFoundError` [6].
    *   **Strong Encapsulation:** By default, types within a module are only accessible within that module. Packages must be explicitly exported (`exports` clause) to be used by other modules [6], [25]. This hides internal implementation details [11], [25].
    *   **Scalable Platform:** Allows creation of smaller JREs containing only the necessary JDK modules [6], [7].
    *   **Improved Security and Maintainability:** Strong encapsulation limits access to internal APIs [7], [11], [34].
*   **Key Functionality:**
    *   **`module-info.java`:** The module descriptor file located at the root of the module's source directory [6], [34]. Defines the module's name, dependencies (`requires`), exported packages (`exports`), services used (`uses`), and services provided (`provides ... with ...`) [6].
    *   **Module Path:** A new concept alongside the classpath. The JVM searches the module path to locate required modules [7], [11].
    *   **Modular JARs:** Standard JAR files containing a `module-info.class` file [6], [11].
*   **Best Practice:** Leverage JPMS for new large applications to improve structure, maintainability, and encapsulation. Understand how to define module descriptors and manage dependencies via the module path, often integrated with build tools like Maven or Gradle [11], [34].

### 6. Common Enterprise Frameworks (Basics)

#### 6.1. Spring Framework

*   **Concept:** A comprehensive application framework providing infrastructure support for developing Java applications, particularly enterprise applications [3], [24]. It emphasizes modularity, allowing developers to use only the parts they need [24].
*   **Core Principles/Modules:**
    *   **Inversion of Control (IoC) / Dependency Injection (DI):** The core concept. Objects define their dependencies, and the Spring IoC container injects those dependencies at runtime, rather than the objects creating or looking them up themselves [3], [39]. This promotes loose coupling and testability. Managed objects are called "beans".
    *   **Container:** The `BeanFactory` or `ApplicationContext` interfaces manage the lifecycle and configuration of beans [3], [39]. Configuration is often done via annotations (`@Component`, `@Service`, `@Repository`, `@Controller`, `@Autowired`, `@Bean`, `@Configuration`) or XML [3], [36], [39].
    *   **Aspect-Oriented Programming (AOP):** Enables modularization of cross-cutting concerns (like logging, security, transactions) by defining "aspects" that advise application code [3], [39].
    *   **Data Access:** Provides abstractions over JDBC, ORM frameworks (like Hibernate/JPA), and transaction management [39].
    *   **Web:** Includes frameworks for building web applications, such as Spring Web MVC (servlet-based) and Spring WebFlux (reactive) [39].
*   **Spring Boot:** An opinionated extension of Spring that simplifies setup and configuration, providing auto-configuration, embedded servers, and production-ready features [31]. It aims to get applications running quickly [31].
*   **Best Practice:** Leverage DI for managing components. Use AOP for cross-cutting concerns. Utilize Spring Boot for rapid application development and simplified configuration [31]. Follow Spring conventions and leverage its extensive ecosystem (Spring Data, Spring Security, etc.).

#### 6.2. Jakarta EE (Formerly Java EE)

*   **Concept:** A set of specifications extending Java SE for building scalable, multi-tiered, reliable, and secure enterprise applications [13], [16]. It defines APIs and a runtime environment [13], [16]. Applications run on Jakarta EE compatible application servers or runtimes (e.g., GlassFish, WildFly, Open Liberty, Tomcat - *Note: Tomcat implements only a subset, primarily Servlet/JSP*) [4], [10], [13].
*   **Key Specifications (Examples):**
    *   **Jakarta Servlet:** Defines APIs for handling HTTP requests and responses in web applications [4], [40]. Forms the basis for many Java web frameworks.
    *   **Jakarta RESTful Web Services (JAX-RS):** Defines APIs for building RESTful web services using annotations [10], [40].
    *   **Jakarta Persistence (JPA):** Defines APIs for Object-Relational Mapping (ORM), allowing developers to interact with relational databases using Java objects [16], [27], [40].
    *   **Jakarta Contexts and Dependency Injection (CDI):** Provides a dependency injection framework similar in concept to Spring Core, with context management [16], [40].
    *   **Jakarta Enterprise Beans (EJB):** Specification for server-side business components, historically providing features like transactions, security, and concurrency management (though CDI is often preferred for new development) [16].
    *   **Jakarta Messaging (JMS):** Defines APIs for interacting with message-oriented middleware [18].
    *   **Jakarta Security:** Defines APIs for securing applications [18], [40].
*   **Profiles:** Jakarta EE defines different profiles targeting specific application types (e.g., Web Profile - subset for web apps; Core Profile - smaller subset for microservices) [13], [18], [27].
*   **Best Practice:** Develop applications against the Jakarta EE specifications rather than specific server implementations for portability. Leverage CDI for dependency injection and lifecycle management. Use JPA for persistence and JAX-RS for REST services. Choose an appropriate profile and compatible runtime [13], [27].

## Documentation References

**Java SE (Oracle / OpenJDK)**

1.  [JLS] Java Language Specification (Relevant Edition, e.g., Java SE 21) - Sections on Generics, Lambdas, Threads, Synchronization.
2.  [JVM Spec] Java Virtual Machine Specification (Relevant Edition, e.g., Java SE 21) - Sections on Runtime Data Areas, Heap, Method Area, Class File Format, Loading/Linking/Initializing. [35]
3.  [Oracle Concurrency Tutorial] The Java™ Tutorials - Concurrency Trail. [26]
4.  [Oracle Generics Tutorial] The Java™ Tutorials - Generics. [26]
5.  [Oracle Lambda Expressions Tutorial] The Java™ Tutorials - Lambda Expressions. [26]
6.  [Oracle Streams Tutorial] The Java™ Tutorials - Aggregate Operations (Streams). [50]
7.  [JEP 444] Virtual Threads (Finalized in JDK 21). [9], [17]
8.  [JEP 491] Synchronize Virtual Threads without Pinning (Proposed for JDK 24). [5], [15]
9.  [Oracle JPMS Guides] Project Jigsaw / Java Platform Module System Documentation.
10. [Oracle Performance Tuning Guide] Java SE Performance Documentation / Tuning Guides.
11. [Oracle GC Tuning Guide] HotSpot Virtual Machine Garbage Collection Tuning Guide.

**Spring Framework**

12. [Spring Framework Reference Documentation] Official Spring Framework Documentation (docs.spring.io/spring-framework/reference/). [3], [24], [36], [39]
13. [Spring Boot Reference Documentation] Official Spring Boot Documentation (docs.spring.io/spring-boot/docs/current/reference/htmlsingle/).

**Jakarta EE**

14. [Jakarta EE Platform Specification] Jakarta EE Platform Specification Documents (jakarta.ee/specifications/platform/). [8]
15. [Jakarta EE Tutorial] Official Jakarta EE Tutorial (jakarta.ee/learn/jakarta-ee-tutorial/). [4], [22], [27]
16. [Jakarta EE Specifications] Individual Specification Documents (Servlet, JPA, CDI, JAX-RS, etc.) (jakarta.ee/specifications/). [8], [13], [16], [18], [40]
17. [Jakarta EE Examples] Official Jakarta EE Examples Repository (github.com/jakartaee/jakartaee-examples). [22]
18. [Jakarta EE Guides] Specification Guides and Starter Guides (jakarta.ee/learn/). [27], [40]

**Other Sources Used (Primarily for context/examples based on official concepts)**

19. GeeksforGeeks - Java Memory Management [2]
20. GeeksforGeeks - JPMS [6]
21. Tutorialspoint - JPMS [7]
22. GitHub Pages - Jakarta EE Platform Project [8]
23. belief driven design - Java 21 Virtual Threads [9]
24. Eclipse Foundation - Jakarta EE 8 Tutorial [10]
25. Symflower - Java Modules [11]
26. UIL CS - Lambda Expressions Guide [12]
27. Open Liberty Docs - Jakarta EE Overview [13]
28. JetBrains - Jakarta EE Tutorial [14]
29. InfoQ - JEP 491 [15]
30. Wikipedia - Jakarta EE [16]
31. InfoQ - JEP 444 [17]
32. Eclipse News - Jakarta EE 11 Guide [18]
33. DEV Community - Lambda Expressions Guide [19]
34. Studytonight - Java 8 Lambda Expressions [20]
35. Oracle Docs (JRockit) - Understanding Memory Management [21]
36. IBM Docs - Java GC Policy [23]
37. Pluralsight - JPMS Guide [25]
38. BellSoft - JVM Memory Flags [28]
39. IBM Docs - JIT Compiler Optimization [29]
40. Betsol - JVM Memory Management [30]
41. Reddit - Spring Concepts Resources [31]
42. DZone - Java Memory Management Guide [32]
43. Oracle Blogs - Java 8 Lambdas [33]
44. Aegis Softtech - JPMS Guide [34]
45. Stack Overflow - Java GC Deterministic [37]
46. Alibaba Cloud Community - Java GC [38]
47. MDN Web Docs - Streams API [41]
48. Baeldung - JVM Garbage Collectors [42]
49. Oracle Docs - JVM JIT Compiler [43]
50. IBM Docs - The JIT Compiler [44]
51. Baeldung - Graal JIT Compiler [45]
52. Oracle Docs (JRockit) - JIT Compilation [46]
53. GeeksforGeeks - Stream In Java [47]
54. Java 8 Tips Docs - Stream API [48]
55. Thomas's Technical Notes - Java Streams API [49]

## Workflow & Usage Examples

*   **Implementing a Core Utility:** A coordinator assigns a task to implement a custom data structure or utility class using core Java features (e.g., Generics, Collections). `dev-java` reads the requirements, writes the Java class, adds necessary JUnit tests, and updates the MDTM task file.
*   **Debugging:** A bug report indicates unexpected behavior in a concurrent Java application. `dev-java` analyzes the relevant code, potentially using `read_file` and `search_files`, identifies a race condition, and applies a fix using `apply_diff` (e.g., replacing `synchronized` with `ReentrantLock` or leveraging `java.util.concurrent` utilities).
*   **Refactoring:** A lead requests refactoring of older Java code to use modern features. `dev-java` identifies areas using traditional loops or anonymous inner classes and refactors them to use Streams API and Lambda expressions for improved readability and conciseness.

## Limitations

*   **Framework Depth:** While knowledgeable about core Java, Spring Boot, and Jakarta EE fundamentals, deep expertise in highly specialized or niche frameworks/libraries might require specific KB expansion or escalation.
*   **Context Dependency:** Effective debugging and implementation often rely heavily on the provided context, existing codebase structure, and clear requirements. May struggle with vague requests or incomplete information.
*   **Build/Environment Setup:** Assumes a functional Java development environment and build system (Maven/Gradle) are in place. Does not typically handle complex environment setup or build script debugging unless specifically instructed and provided with context.
*   **Large-Scale Architecture:** Focuses on component-level development rather than high-level architectural design, which is typically handled by `core-architect` or `lead-backend`.

## Rationale / Design Decisions

*   **Specialized Expertise:** This mode was created to provide focused, expert-level capabilities specifically for Java development, ensuring adherence to language best practices and common framework patterns.
*   **Knowledge Base Driven:** Relies on a structured Knowledge Base (`kb/`) derived from official documentation and established best practices to ensure consistent, accurate, and up-to-date development approaches, particularly concerning core Java features, JVM internals, and major frameworks (Spring, Jakarta EE).
*   **Standard Workflow Integration:** Designed to integrate seamlessly into the standard MDTM workflow, receiving tasks, performing implementation/debugging, and reporting progress according to established procedures.
*   **Efficiency:** Aims to handle common Java development tasks efficiently, leveraging appropriate tools for code analysis, modification, and execution.