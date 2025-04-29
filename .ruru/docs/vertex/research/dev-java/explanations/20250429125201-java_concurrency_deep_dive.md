Java Concurrency provides mechanisms for writing programs that perform multiple operations simultaneously. This is crucial for leveraging modern multi-core processors and building responsive applications. [33]

### Core Concepts

#### 1. Threads

*   **Definition:** Threads are the basic unit of execution within a Java program. The Java Virtual Machine (JVM) allows an application to have multiple threads of execution running concurrently. [9] Each thread has its own program counter, stack, and local variables, but threads within the same process share heap memory. [9, 42]
*   **Creating Threads:** Threads are represented by the `Thread` class. A thread can be created by instantiating `Thread` or a subclass, or by implementing the `Runnable` interface and passing it to the `Thread` constructor. A thread starts execution when its `start()` method is invoked. [9, 34]

#### 2. Synchronization

Synchronization controls the access of multiple threads to shared resources to prevent issues like thread interference and memory consistency errors. [12, 27]

*   **`synchronized` Keyword:** Java provides synchronization through the `synchronized` keyword, which can be applied to methods or blocks of code. [12, 13, 28]
    *   **Synchronized Methods:** When a thread invokes a `synchronized` method, it automatically acquires the intrinsic lock (also called a monitor lock) for that method's object (or for the `Class` object if the method is static). It releases the lock when the method returns. While a thread owns the lock, no other thread can execute *any* `synchronized` method on the same object. [12, 28]
    *   **Synchronized Statements/Blocks:** Allows synchronization on any object, not just `this`. This enables more fine-grained locking than synchronizing entire methods. The lock is acquired when entering the block and released when exiting. [13, 28, 35]
    ```java
    public void add(int value){
        synchronized(this) { // Synchronized block using the instance as monitor
           this.count += value;
        }
    }
    ```
    *(Example adapted from [28])*
*   **Intrinsic Locks:** Every Java object has an associated intrinsic lock. `synchronized` methods and blocks use these locks. [12]
*   **`java.util.concurrent.locks.Lock` Interface:** Provides more extensive locking operations than `synchronized`. Implementations like `ReentrantLock` offer more flexibility, separate conditions, interruptible lock acquisition, and try-lock capabilities. [7, 26]
*   **`ReentrantLock`:** A mutual exclusion lock with the same basic behavior as `synchronized` but with extended features. It's called "reentrant" because a thread that already holds the lock can acquire it again without blocking itself. It also supports fairness policies (favoring the longest-waiting thread) and interruptible lock acquisition (`lockInterruptibly()`). [43, 48, 15]
    ```java
    Lock lock = new ReentrantLock();
    // ...
    lock.lock(); // Acquire the lock
    try {
        // Access shared resources protected by the lock
    } finally {
        lock.unlock(); // Release the lock in a finally block
    }
    ```
    *(Conceptual example based on [7, 15, 43])*

### Java Memory Model (JMM)

The JMM (defined in Chapter 17 of the Java Language Specification) describes how threads interact through memory and specifies the conditions under which the actions of one thread (like writing to a variable) become visible to another. [9, 29, 17] It addresses issues arising from compiler optimizations (like instruction reordering) and complexities of modern hardware memory architectures (caches, etc.). [4, 9]

*   **Key Concepts:**
    *   **Visibility:** Ensures that writes made by one thread are visible to reads by other threads.
    *   **Ordering:** Defines constraints on the apparent order in which actions occur.
*   **Happens-Before Relationship:** The core concept guaranteeing visibility and ordering. If action A *happens-before* action B, then the results of A are guaranteed to be visible to B, and A is ordered before B. [4, 9, 10, 14] Key happens-before rules include:
    *   **Program Order Rule:** Actions within a single thread happen-before subsequent actions in that same thread's program order. [9, 14]
    *   **Monitor Lock Rule:** An unlock on a monitor lock happens-before every subsequent lock on that *same* monitor lock. [4, 14] This applies to `synchronized` methods/blocks.
    *   **Volatile Variable Rule:** A write to a `volatile` field happens-before every subsequent read of that *same* `volatile` field. [4, 14]
    *   **Thread Start Rule:** A call to `Thread.start()` happens-before any action in the started thread. [4, 14]
    *   **Thread Join Rule:** All actions in a thread happen-before any other thread successfully returns from a `join()` on that thread. [4, 14]
    *   **Transitivity:** If A happens-before B, and B happens-before C, then A happens-before C. [9]
*   **Importance:** Without a happens-before relationship between two actions (especially across threads), the JVM is free to reorder them, and visibility of changes is not guaranteed. [14, 6] Correctly synchronized programs (those without data races) exhibit sequential consistency, making them easier to reason about. [4, 17]

### `volatile` Keyword

*   **Purpose:** Declaring a variable `volatile` ensures visibility and limits reordering of accesses involving that variable. [4, 5] It guarantees that any read of a `volatile` variable sees the most recent write to that variable by any thread (establishing a happens-before relationship). [4, 5, 14, 41]
*   **Mechanism:** It ensures that reads and writes go directly to main memory, bypassing local thread caches. [5, 39]
*   **Limitations:** `volatile` guarantees visibility but *not* atomicity for compound operations (like `count++`, which is actually read-modify-write). For atomic compound operations, use `synchronized` or atomic variables. [4]

### Atomic Variables (`java.util.concurrent.atomic`)

*   **Purpose:** Provides classes (`AtomicInteger`, `AtomicLong`, `AtomicBoolean`, `AtomicReference`, etc.) that support lock-free, thread-safe programming on single variables. [21, 25, 38, 44]
*   **Mechanism:** They rely on low-level atomic hardware primitives like compare-and-swap (CAS). The `compareAndSet(expectedValue, newValue)` method atomically sets the variable to `newValue` only if its current value equals `expectedValue`. [38]
*   **Benefits:** Often offer better performance than lock-based synchronization under high contention for simple atomic updates. [38]
*   **Updaters:** Classes like `AtomicIntegerFieldUpdater` allow atomic updates on selected `volatile` fields of existing classes using reflection. [25, 38, 44]

### Concurrent Collections (`java.util.concurrent`)

*   **Purpose:** Provides thread-safe collection implementations optimized for concurrent access. [21, 26] Examples include `ConcurrentHashMap`, `CopyOnWriteArrayList`, `BlockingQueue` implementations (like `ArrayBlockingQueue`, `LinkedBlockingQueue`).
*   **Benefits:** Offer better scalability and performance than synchronizing access to standard collections (e.g., using `Collections.synchronizedMap`) externally. `ConcurrentHashMap`, for instance, uses fine-grained locking (locking segments or nodes rather than the whole map) to allow a higher degree of concurrency.
*   **`BlockingQueue`:** A queue that supports operations that wait for the queue to become non-empty when retrieving an element, and wait for space to become available in the queue when storing an element. Essential for producer-consumer patterns. [26]

### Executor Framework (`java.util.concurrent`)

*   **Purpose:** Decouples task submission from task execution mechanics (thread management). Provides a flexible way to manage thread pools. [26, 31, 36]
*   **Core Interfaces/Classes:**
    *   **`Executor`:** A simple interface with a single `execute(Runnable command)` method. [36]
    *   **`ExecutorService`:** Extends `Executor`, adding lifecycle management (`shutdown()`, `shutdownNow()`, `awaitTermination()`) and methods for handling `Callable` tasks (which return results) via `Future` objects (`submit()`, `invokeAny()`, `invokeAll()`). [11, 31, 36]
    *   **`ScheduledExecutorService`:** Extends `ExecutorService` to support delayed and periodic task execution. [31]
    *   **`Executors`:** A utility class providing factory methods for creating common `ExecutorService` types (e.g., `newFixedThreadPool`, `newCachedThreadPool`, `newSingleThreadExecutor`, `newScheduledThreadPool`). [8, 31, 36]
    *   **`ThreadPoolExecutor`:** A common, highly configurable implementation of `ExecutorService`, allowing fine control over pool size, queueing policies, rejection handlers, etc. [11, 31]
    *   **`ForkJoinPool`:** An `ExecutorService` specialized for running `ForkJoinTask`s. It uses a work-stealing algorithm where idle worker threads "steal" tasks from the queues of busy threads, making it efficient for recursive, divide-and-conquer algorithms. [20, 45, 18, 47] It's the default pool used by parallel streams. [18]

### Modern Concurrency (Java 21+)

*   **Virtual Threads (Project Loom):** Introduced as a final feature in Java 21 (JEP 444). Virtual threads are lightweight threads managed by the Java runtime, not directly mapped 1:1 to OS threads. [1, 2, 3, 24]
    *   **Benefit:** Allows for a massive number of concurrent tasks (potentially millions) without the high memory footprint and context-switching overhead associated with traditional "platform" threads. Ideal for applications with high I/O-bound concurrency (e.g., web servers handling many concurrent requests). [1, 24]
    *   **Mechanism:** When a virtual thread blocks on I/O, its underlying OS thread (carrier thread) is released to run other virtual threads. [24]
    *   **Usage:** Can be created via `Thread.startVirtualThread(Runnable)` or `Thread.ofVirtual().start(Runnable)`, or using `Executors.newVirtualThreadPerTaskExecutor()`, which creates a new virtual thread for each submitted task. [3]
*   **Structured Concurrency (Preview in Java 21/22 - JEP 453):** Aims to simplify concurrent programming by treating multiple tasks running in different threads as a single unit of work. [1, 2, 16]
    *   **Concept:** Uses `StructuredTaskScope` to manage the lifecycle of a group of related concurrent tasks (often running in virtual threads). Ensures that if a task spawns subtasks, they all complete (or are cancelled) before the main task proceeds. Simplifies error handling and cancellation. [1, 16]
    *   **Benefit:** Improves reliability and maintainability by enforcing a clear structure and lifetime for concurrent operations, preventing thread leaks. [2, 16]
*   **Scoped Values (Preview in Java 21/22 - JEP 446):** Offer an alternative to thread-local variables, especially suited for virtual threads. [1, 3]
    *   **Concept:** Allow sharing data within a thread and its child threads (including virtual threads created within a structured scope) immutably for the duration of a specific operation (scope). [1, 3]
    *   **Benefit:** Safer and potentially more efficient than thread-locals when used with large numbers of virtual threads. [1]

**Sources:**

*   [4] Confluence - Concurrency, Visibility, and Memory
*   [5] Stack Overflow - Volatile keyword in java under the hood
*   [6] Stack Overflow - Happens before and program order in Java Memory Model
*   [7] Java Platform SE 6 - Lock Interface Documentation
*   [8] Kavin's Rambling - Using Java ExecutorService
*   [9] Java Language Specification (JLS) - Chapter 17. Threads and Locks
*   [10] LogicBig - Java - Understanding Happens-before relationship
*   [11] Oracle Help Center - ExecutorService (Java Platform SE 8)
*   [12] The Java™ Tutorials - Synchronized Methods
*   [13] DataCamp - synchronized Keyword in Java
*   [14] LogicBig - Java - Understanding Happens-before relationship (Duplicate of 10, used for cross-ref)
*   [15] Java Tech Blog - Deadlock Prevention with Reentrant Locks
*   [16] belief driven design - Looking at Java 21: Structured Concurrency
*   [17] JSR-133: Java Memory Model and Thread Specification
*   [18] Stack Overflow - Where does official documentation say that Java's parallel stream operations use fork/join?
*   [20] Oracle Help Center - ForkJoinPool (Java Platform SE 8)
*   [21] DevDocs - OpenJDK 8 documentation (Package descriptions)
*   [22] Andreas Lochbihler - Java and the Java Memory Model — a Unified, Machine-Checked Formalisation?
*   [24] DEV Community - Java 21 Virtual Threads: Revolutionizing Concurrency!
*   [25] Oracle Help Center - Uses of Package java.util.concurrent.atomic
*   [26] Oracle - Java Concurrency Utilities Overview
*   [27] eG Innovations - Java Synchronization and Thread Issues
*   [28] Jenkov.com - Java Synchronized Blocks
*   [29] UMD CS - The Java Memory Model
*   [31] Baeldung - A Guide to the Java ExecutorService
*   [33] The Java™ Tutorials - Lesson: Concurrency
*   [34] ParallelStaff - Concurrency in Java: Essential Guide
*   [35] Simplilearn - An Ultimate Tutorial to Synchronization in Java
*   [36] DZone - Deep Dive Into Java Executor Framework
*   [38] Oracle Help Center - Package java.util.concurrent.atomic Description (Java SE 11)
*   [39] W3Schools - Java volatile Keyword
*   [41] DataCamp - volatile Keyword in Java
*   [42] FIS Universität Bamberg - Lecture Notes : Concurrency Topics in Java
*   [43] Oracle Help Center - ReentrantLock (Java Platform SE 8)
*   [44] Oracle Help Center - Package java.util.concurrent.atomic (Java SE 21)
*   [45] Oracle Help Center - ForkJoinPool (Java SE 11)
*   [47] Stack Overflow - Fork Join pool understanding - java
*   [48] docs.oracle.com - ReentrantLock (Java SE 21)
*   [1, 2, 3] Various Blogs/Articles discussing Java 21 features (Scalable Human, SoftwareMill, Red Hat Developer) - Used for context on newer features like Virtual Threads, Structured Concurrency, Scoped Values.