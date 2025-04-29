Here is a deep dive explanation of the key features finalized (standard) in Java 21 LTS, based on official documentation:

### Virtual Threads (JEP 444)

*   **What it is:** Virtual threads are lightweight threads managed by the Java Virtual Machine (JVM) rather than the operating system (OS). Unlike traditional "platform threads," which are typically mapped one-to-one with OS threads, many virtual threads can run their Java code on the same OS thread, effectively sharing it. When code running in a virtual thread encounters a blocking I/O operation, the JVM suspends the virtual thread and allows the underlying OS thread to perform work for other virtual threads.
*   **Why it was introduced:** Traditional platform threads are a limited resource because they correspond directly to OS threads. Applications using a thread-per-request model (where each incoming request is handled by a dedicated thread) can struggle to scale efficiently, as creating too many platform threads consumes significant resources and can lead to performance degradation or crashes. Virtual threads aim to dramatically reduce the effort of writing, maintaining, and observing high-throughput concurrent applications by allowing developers to create a vast number of threads (potentially millions) without overwhelming the system. This enables applications written in the simple thread-per-request style to scale with near-optimal hardware utilization.
*   **Basic Usage Example:** The primary way to create virtual threads is using `Executors.newVirtualThreadPerTaskExecutor()`. This creates an `ExecutorService` that starts a new virtual thread for each submitted task.

    ```java
    try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
        IntStream.range(0, 10_000).forEach(i -> {
            executor.submit(() -> {
                Thread.sleep(Duration.ofSeconds(1)); // Example blocking operation
                System.out.println("Task " + i + " completed by " + Thread.currentThread());
                return i;
            });
        });
    } // executor.close() is called implicitly, waits for tasks to complete
    ```
    This example submits 10,000 tasks, each sleeping for a second. With virtual threads, the JDK can run these concurrently on a small number of OS threads.

*   **Key Points from JEP 444:**
    *   Virtual threads are instances of `java.lang.Thread` just like platform threads.
    *   They are intended for I/O-bound tasks or tasks that spend significant time waiting, not CPU-intensive operations.
    *   Existing code using the `java.lang.Thread` API can adopt virtual threads with minimal changes.
    *   Virtual threads fully support thread-local variables (`ThreadLocal`).
    *   Debugging and profiling tools work with virtual threads.
    *   Synchronized blocks cause a virtual thread to be "pinned" to its carrier (platform) thread for the duration of the block, which can limit concurrency if not used carefully.

*   **Sources:** JEP 444, Oracle Virtual Threads Documentation

### Sequenced Collections (JEP 431)

*   **What it is:** Sequenced Collections introduce new interfaces into the Java Collections Framework to represent collections with a defined encounter order (where elements have a specific sequence from first to last). The three new interfaces are `SequencedCollection`, `SequencedSet`, and `SequencedMap`. These interfaces provide standardized methods for accessing the first and last elements, adding/removing elements at either end, and obtaining a reversed view of the collection.
*   **Why it was introduced:** Before Java 21, there was no universal type in the collections hierarchy solely representing a sequence. While types like `List` and `Deque` had an order, their common supertype `Collection` did not. Similarly, `Set` had unordered semantics, but subtypes like `LinkedHashSet` and `SortedSet` maintained order. This inconsistency led to non-uniform APIs for common operations like getting the first/last element or reversing the collection. JEP 431 aimed to rectify this by providing a clear type hierarchy and consistent methods for ordered collections.
*   **Basic Usage Example:** Existing ordered collections like `ArrayList`, `LinkedHashSet`, and `LinkedHashMap` now implement these new interfaces.

    ```java
    // Using ArrayList (implements SequencedCollection)
    List<String> list = new ArrayList<>(List.of("A", "B", "C"));
    SequencedCollection<String> seqList = list; // Can assign to the new interface

    String first = seqList.getFirst(); // "A"
    String last = seqList.getLast();   // "C"

    seqList.addFirst("X"); // List becomes ["X", "A", "B", "C"]
    seqList.addLast("Y");  // List becomes ["X", "A", "B", "C", "Y"]

    SequencedCollection<String> reversedList = seqList.reversed(); // Returns a reversed view
    System.out.println(reversedList); // Output depends on the underlying collection's toString

    // Using LinkedHashSet (implements SequencedSet)
    Set<String> set = new LinkedHashSet<>(List.of("One", "Two", "Three"));
    SequencedSet<String> seqSet = (SequencedSet<String>) set;

    String firstSet = seqSet.getFirst(); // "One"
    String lastSet = seqSet.getLast();   // "Three"
    SequencedSet<String> reversedSet = seqSet.reversed(); // Reversed view
    ```

*   **Key Points from JEP 431:**
    *   `SequencedCollection<E>` extends `Collection<E>` and adds methods like `getFirst()`, `getLast()`, `addFirst(E)`, `addLast(E)`, `removeFirst()`, `removeLast()`, and `reversed()`.
    *   `SequencedSet<E>` extends `Set<E>` and `SequencedCollection<E>`, ensuring uniqueness while providing sequenced operations. Its `reversed()` method returns a `SequencedSet`.
    *   `SequencedMap<K, V>` extends `Map<K, V>` (but *not* `SequencedCollection`) and provides methods like `firstEntry()`, `lastEntry()`, `pollFirstEntry()`, `pollLastEntry()`, `putFirst(K, V)`, `putLast(K, V)`, and `reversed()`.
    *   The `reversed()` method provides a view; modifications to the view affect the original collection and vice-versa.

*   **Sources:** JEP 431, Baeldung: Sequenced Collections, JavaDZone: Sequenced Collections

### Record Patterns (JEP 440)

*   **What it is:** Record Patterns extend Java's pattern matching capabilities to allow for the deconstruction of `record` instances. This means you can match an object against a record type and simultaneously extract its components into pattern variables within the same expression, typically used with `instanceof` or `switch`.
*   **Why it was introduced:** Records provide a concise way to declare immutable data carriers. Before record patterns, accessing the components of a record after an `instanceof` check required explicit calls to the accessor methods. Record patterns streamline this process, making code more declarative, readable, and less error-prone, especially when dealing with nested data structures.
*   **Basic Usage Example:**

    ```java
    record Point(int x, int y) {}

    // Before Record Patterns
    static void printSumOld(Object obj) {
        if (obj instanceof Point p) {
            int x = p.x();
            int y = p.y();
            System.out.println(x + y);
        }
    }

    // With Record Patterns (Java 21)
    static void printSumNew(Object obj) {
        if (obj instanceof Point(int x, int y)) { // Deconstruction happens here
            System.out.println(x + y); // x and y are directly available
        }
    }

    // Nested Record Patterns
    enum Color { RED, GREEN, BLUE }
    record ColoredPoint(Point p, Color c) {}

    static void printColorOfPoint(Object obj) {
        if (obj instanceof ColoredPoint(Point(int x, int y), Color c)) {
             System.out.println("Color: " + c + " at coordinates (" + x + "," + y + ")");
        }
    }

    // Using 'var' for type inference
    static void printXCoordinate(Object obj) {
        if (obj instanceof Point(var x, var y)) { // Compiler infers x and y are int
            System.out.println("X coordinate: " + x);
        }
    }
    ```

*   **Key Points from JEP 440:**
    *   Allows deconstruction of records directly in `instanceof` and `switch` patterns.
    *   Supports nested patterns for deconstructing nested records.
    *   Supports type inference using `var` for record components.
    *   Enhances composable data queries and navigation.
    *   `null` values do not match any record pattern.

*   **Sources:** JEP 440, Baeldung: New Features in Java 21, DZone: Java 21 Record and Pattern Matching

### Pattern Matching for switch (JEP 441)

*   **What it is:** This feature enhances `switch` expressions and statements to allow `case` labels to use patterns (including type patterns and record patterns) instead of just constants. It also introduces features like guarded patterns (`when` clauses) and improved null handling.
*   **Why it was introduced:** Traditional `switch` statements were limited to specific types (primitives, their wrappers, enums, String) and could only check for exact equality against constants. This often forced developers to use chains of `if-else if` statements for more complex conditional logic involving type checks and deconstruction. Pattern matching for `switch` makes these scenarios more concise, readable, safe, and expressive by allowing direct pattern matching within `case` labels.
*   **Basic Usage Example:**

    ```java
    // Before Pattern Matching for switch
    static String formatterOld(Object obj) {
        String formatted = "unknown";
        if (obj instanceof Integer i) {
            formatted = String.format("int %d", i);
        } else if (obj instanceof Long l) {
            formatted = String.format("long %d", l);
        } else if (obj instanceof Double d) {
            formatted = String.format("double %f", d);
        } else if (obj instanceof String s) {
            formatted = String.format("String %s", s);
        }
        return formatted;
    }

    // With Pattern Matching for switch (Java 21)
    static String formatterNew(Object obj) {
        return switch (obj) {
            case Integer i -> String.format("int %d", i);
            case Long l    -> String.format("long %d", l);
            case Double d  -> String.format("double %f", d);
            case String s  -> String.format("String %s", s);
            default        -> "unknown";
        };
    }

    // Using Record Patterns and Guarded Patterns
    record Point(int x, int y) {}
    enum Color { RED, GREEN, BLUE }
    record ColoredPoint(Point p, Color c) {}

    static void processShape(Object shape) {
        switch (shape) {
            case Point(int x, int y) -> System.out.printf("Point at (%d, %d)%n", x, y);
            case ColoredPoint(Point p, Color c) when c == Color.RED -> // Guarded pattern
                System.out.printf("Red colored point at (%d, %d)%n", p.x(), p.y());
            case ColoredPoint(Point p, Color c) ->
                System.out.printf("Other colored point at (%d, %d)%n", p.x(), p.y());
            case null -> System.out.println("Null shape"); // Explicit null handling
            default -> System.out.println("Unknown shape");
        }
    }
    ```

*   **Key Points from JEP 441:**
    *   Allows patterns (type patterns, record patterns) in `case` labels.
    *   Works with both `switch` statements and expressions.
    *   Supports guarded patterns using the `when` keyword for additional conditions.
    *   Requires pattern `switch` statements/expressions to be exhaustive (cover all possible inputs), often requiring a `default` case or cases covering all subtypes.
    *   Allows explicit handling of `null` with a `case null` label.
    *   Improves safety and conciseness compared to `if-else` chains.
    *   Allows qualified enum constants as case constants even if the selector type isn't the enum type.

*   **Sources:** JEP 441, Oracle Pattern Matching for switch Documentation, Baeldung: Pattern Matching for switch

### Other Significant Finalized JEPs in Java 21

Besides the features above, Java 21 finalized other important JEPs:

1.  **JEP 439: Generational ZGC:** Introduces generational collection capabilities to the Z Garbage Collector (ZGC). This aims to improve application performance by lowering required heap memory overhead, reducing GC CPU overhead, and decreasing the risks of allocation stalls, all without significantly compromising ZGC's characteristic low pause times. It achieves this by collecting young objects (which tend to die young) more frequently.
    *   **Source:** JEP 439 (via search results)
2.  **JEP 452: Key Encapsulation Mechanism API:** Introduces an API for Key Encapsulation Mechanisms (KEMs), an encryption technique used to secure symmetric keys using asymmetric (public key) cryptography. This provides a standardized way for applications to use KEM algorithms like RSA-KEM, ECIES, and others for secure key exchange.
    *   **Source:** JEP 452 (via search results)

These features, along with several preview and incubator features (like String Templates, Scoped Values, Structured Concurrency, Foreign Function & Memory API, Vector API), make Java 21 a significant Long-Term Support (LTS) release.