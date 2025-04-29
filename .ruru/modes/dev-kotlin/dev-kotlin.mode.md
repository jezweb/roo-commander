+++
# --- Core Identification (Required) ---
id = "MODE-dev-kotlin" # << REQUIRED >> Example: "util-text-analyzer"
name = "🟣 Kotlin Developer" # << REQUIRED >> Example: "📊 Text Analyzer"
version = "0.1.0" # << REQUIRED >> Initial version
status = "draft" # << ADDED as per instruction >>

# --- Classification & Hierarchy (Required) ---
classification = "dev" # << REQUIRED >> Options: worker, lead, director, assistant, executive
domain = "backend" # << REQUIRED >> Example: "utility", "backend", "frontend", "data", "qa", "devops", "cross-functional"
# sub_domain = "optional-sub-domain" # << OPTIONAL >> Example: "text-processing", "react-components"

# --- Description (Required) ---
summary = "Expert in Kotlin development, including Coroutines, Flow, KMP, Serialization, DSLs, and testing with Kotest." # << REQUIRED >>

# --- Base Prompting (Required) ---
system_prompt = """
You are Roo 🟣 Kotlin Developer. Your primary role and expertise is in developing applications using the Kotlin language and its ecosystem, including backend services, Android applications, and Kotlin Multiplatform (KMP) projects.

Key Responsibilities:
- Implement features and fix bugs using Kotlin for various platforms (JVM, Android, Native, JS via KMP).
- Utilize Kotlin Coroutines and Flow for efficient asynchronous programming and reactive data streams.
- Leverage Kotlin Multiplatform (KMP) to maximize code sharing across different targets.
- Implement data handling using Kotlin Serialization for formats like JSON.
- Design and implement type-safe Domain-Specific Languages (DSLs) where appropriate.
- Write unit and integration tests using frameworks like Kotest.
- Collaborate with other developers, leads, and architects.

Operational Guidelines:
- Consult and prioritize guidance, best practices, and project-specific information found in the Knowledge Base (KB) located in `.ruru/modes/dev-kotlin/kb/`. Use the KB README to assess relevance and the KB lookup rule for guidance on context ingestion.
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
# [file_access]
# read_allow = ["**/*.kt", "**/*.kts", "**/*.java", ".docs/**", "gradle/**", "*.gradle", "*.properties"] # Example: Allow Kotlin, build files, Java interop
# write_allow = ["**/*.kt", "**/*.kts", "gradle/**", "*.gradle", "*.properties"] # Example: Allow modifying Kotlin and build files

# --- Metadata (Optional but Recommended) ---
[metadata]
tags = ["kotlin", "jvm", "android", "kmp", "coroutines", "flow", "serialization", "dsl", "kotest", "backend", "multiplatform", "dev"] # << RECOMMENDED >> Lowercase, descriptive tags
categories = ["Backend Development", "Mobile Development", "Multiplatform Development"] # << RECOMMENDED >> Broader functional areas
# delegate_to = [] # << OPTIONAL >> Modes this mode might delegate specific sub-tasks to
escalate_to = ["lead-backend", "core-architect"] # << OPTIONAL >> Modes to escalate complex issues or broader concerns to
reports_to = ["lead-backend", "roo-commander"] # << OPTIONAL >> Modes this mode typically reports completion/status to
documentation_urls = [ # << OPTIONAL >> Links to relevant external documentation
  "https://kotlinlang.org/docs/home.html",
  "https://github.com/Kotlin/kotlinx.coroutines",
  "https://kotlinlang.org/docs/multiplatform-mobile-getting-started.html",
  "https://github.com/Kotlin/kotlinx.serialization",
  "https://kotest.io/docs/framework/framework.html"
]
context_files = [ # << OPTIONAL >> Relative paths to key context files within the workspace
  # ".ruru/docs/standards/coding_style_kotlin.md",
  "kb/kotlinx-coroutines/index.toml"
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

# 🟣 Kotlin Developer - Mode Documentation

## Description

You are Roo 🟣 Kotlin Developer, an expert in building modern, robust applications using the Kotlin language and its rich ecosystem. Your capabilities span backend development (JVM/Native), Android application development, and creating shared logic for various platforms (iOS, Web, Desktop, Server) using Kotlin Multiplatform (KMP). You are proficient in leveraging advanced Kotlin features like Coroutines and Flow for asynchronous programming, Kotlin Serialization for data handling, and Kotest for comprehensive testing.

## Core Knowledge & Capabilities
## Executive Summary

Official documentation comprehensively addresses the core concepts, principles, best practices, and key functionalities requested for Kotlin development. The Kotlin language reference, standard library documentation, coroutines guide, and Gradle documentation provide detailed explanations and examples for standard library usage, OOP and FP paradigms, null safety, type system, basic coroutine usage, and the Gradle Kotlin DSL. No significant documentation gaps were identified for these fundamental topics. This response synthesizes information exclusively from these official sources.

## Core Kotlin Concepts for AI Knowledge Base

This document outlines fundamental Kotlin concepts, principles, and functionalities based on official documentation, suitable for an AI assistant's internal knowledge base.

### 1. Kotlin Standard Library Usage

The Kotlin Standard Library (Stdlib) provides essential classes and functions for everyday development tasks, working seamlessly across all supported platforms (JVM, Native, JS) [1].

**Key Areas:**

*   **Basic Types & Operations:** Includes fundamental types like `Int`, `Boolean`, `Float`, `String`, `Any`, and standard operations [2].
*   **Collections:** Offers interfaces (`List`, `Set`, `Map`) and implementations (`ArrayList`, `HashSet`, `HashMap`) for grouping data. Provides a rich API for collection processing (e.g., `filter`, `map`, `reduce`, `forEach`) [3]. Supports both read-only and mutable collection interfaces.
    ```kotlin
    // Example: Collection processing
    val numbers = listOf(1, -2, 3, -4, 5) // Read-only list

    val positiveNumbers = numbers.filter { it > 0 } // [1, 3, 5]
    println(positiveNumbers)

    val doubled = numbers.map { it * 2 } // [2, -4, 6, -8, 10]
    println(doubled)

    val mutableList = mutableListOf("a", "b")
    mutableList.add("c") // ["a", "b", "c"]
    println(mutableList)
    ```
*   **Scope Functions:** Functions like `let`, `run`, `with`, `apply`, and `also` execute a block of code within the context of an object. They differ primarily in how they pass the context object (as `it` or `this`) and what they return (the context object or the lambda result) [4]. They are useful for concise null checks, object configuration, and chaining operations.

    | Function | Context Object | Return Value      | Use Case Example                     |
    | :------- | :------------- | :---------------- | :----------------------------------- |
    | `let`    | `it`           | Lambda result     | Null checks, local variable scope    |
    | `run`    | `this`         | Lambda result     | Null checks, object configuration    |
    | `with`   | `this`         | Lambda result     | Operating on non-null object         |
    | `apply`  | `this`         | Context object    | Object configuration                 |
    | `also`   | `it`           | Context object    | Side effects, logging, further steps |

    ```kotlin
    // Example: Scope functions
    data class Person(var name: String, var age: Int)

    val person: Person? = Person("Alice", 30)

    // let for null check and operation
    val nameLength = person?.let {
        println("Processing ${it.name}")
        it.name.length
    } ?: 0 // Returns length or 0 if person is null
    println("Name length: $nameLength")

    // apply for configuration
    val configuredPerson = Person("Bob", 25).apply {
        age += 1 // Modify properties within the scope
        println("Configured $name, age $age")
    }
    println("Final person: ${configuredPerson.name}, ${configuredPerson.age}")
    ```
*   **I/O & Files:** Provides basic utilities for reading/writing files and console interaction [5]. Platform-specific libraries (e.g., `java.io` on JVM) are often used for more advanced I/O.
*   **Text Processing:** Functions for string manipulation, regular expressions, etc. [6].
*   **Other Utilities:** Includes functions for lazy initialization, preconditions (`require`, `check`), and more [1].

**Best Practices:**

*   Prefer read-only collections (`List`, `Set`, `Map`) unless mutation is explicitly needed [3].
*   Use scope functions appropriately to improve code readability and conciseness [4].
*   Leverage extension functions to add utility to existing classes without inheriting from them [7].

### 2. Object-Oriented Programming (OOP) in Kotlin

Kotlin is an object-oriented language that fully supports OOP principles while offering modern features [8].

**Key Concepts:**

*   **Classes and Objects:** Defined using the `class` keyword. Objects are instances of classes [9].
    ```kotlin
    class Greeter(val name: String) { // Primary constructor with property
        fun greet() {
            println("Hello, $name!")
        }
    }

    val greeter = Greeter("Kotlin") // Create an instance (object)
    greeter.greet() // Call a method
    ```
*   **Inheritance:** Classes are final by default; use the `open` keyword to allow inheritance. Use `:` for extending a class or implementing interfaces [10].
    ```kotlin
    open class Shape(val name: String) {
        open fun area(): Double = 0.0 // Open for overriding
    }

    class Circle(name: String, val radius: Double) : Shape(name) {
        override fun area(): Double = Math.PI * radius * radius // Override method
    }
    ```
*   **Interfaces:** Define contracts that classes can implement. Can contain abstract methods, methods with default implementations, and properties [11].
    ```kotlin
    interface Clickable {
        fun click() // Abstract method
        fun showOff() = println("I'm clickable!") // Method with default implementation
    }

    class Button : Clickable {
        override fun click() { // Implement abstract method
            println("Button clicked")
        }
    }
    ```
*   **Visibility Modifiers:** `public` (default), `private`, `protected`, `internal` (visible within the same module) control access [12].
*   **Data Classes:** Automatically generate `equals()`, `hashCode()`, `toString()`, `copy()`, and component functions (`componentN()`) based on properties declared in the primary constructor. Ideal for holding data [13].
    ```kotlin
    data class User(val name: String, val id: Int)

    val user1 = User("Alex", 1)
    val user2 = User("Alex", 1)
    val user3 = User("Bob", 2)

    println(user1) // User(name=Alex, id=1)
    println(user1 == user2) // true (structural equality)
    println(user1 == user3) // false

    val updatedUser = user1.copy(id = 10) // Create a copy with modified id
    println(updatedUser) // User(name=Alex, id=10)
    ```
*   **Sealed Classes:** Represent restricted class hierarchies. All direct subclasses must be nested within or declared in the same file. Useful for representing fixed sets of types, often used with `when` expressions for exhaustive checks [14].
    ```kotlin
    sealed class Result {
        data class Success(val data: String) : Result()
        data class Error(val message: String) : Result()
        object Loading : Result() // Can be an object for singleton states
    }

    fun handleResult(result: Result) {
        when (result) { // Compiler enforces checking all subtypes
            is Result.Success -> println("Success: ${result.data}")
            is Result.Error -> println("Error: ${result.message}")
            Result.Loading -> println("Loading...")
        }
    }
    ```
*   **Objects:** Used for singleton instances, companion objects (static-like members for classes), and anonymous objects [15].

### 3. Functional Programming (FP) in Kotlin

Kotlin embraces functional programming concepts, allowing developers to write more concise, predictable, and expressive code [16].

**Key Concepts:**

*   **First-Class Functions:** Functions can be stored in variables, passed as arguments, and returned from other functions [17].
*   **Higher-Order Functions:** Functions that take other functions as parameters or return functions (e.g., `filter`, `map`, `fold` on collections) [17].
    ```kotlin
    // Example: Higher-order function
    fun calculate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
        return operation(a, b)
    }

    val sum = calculate(5, 3) { x, y -> x + y } // Pass lambda as argument
    println("Sum: $sum") // Output: Sum: 8

    val product = calculate(5, 3) { x, y -> x * y }
    println("Product: $product") // Output: Product: 15
    ```
*   **Lambda Expressions & Anonymous Functions:** Concise syntax for defining functions inline [18]. Lambdas are expressions like `{ x, y -> x + y }`.
*   **Immutability:** Encouraged through `val` (read-only variables) and immutable collections (`List`, `Set`, `Map`). Helps prevent side effects and makes code easier to reason about [3, 19].
*   **Pure Functions:** Functions whose output depends only on their input and have no side effects. While not enforced by the language, Kotlin's features facilitate writing them.
*   **Extension Functions:** Allow adding functionality to existing classes without modifying their source code, promoting a functional style of operating on data [7].
    ```kotlin
    // Example: Extension function
    fun String.addExclamation(): String {
        return this + "!"
    }

    val message = "Hello"
    println(message.addExclamation()) // Output: Hello!
    ```
*   **Collections API:** The standard library's collection functions (`map`, `filter`, `reduce`, etc.) are core FP tools [3].

**Best Practices:**

*   Prefer `val` over `var` to promote immutability [19].
*   Use immutable collections by default [3].
*   Leverage higher-order functions and lambdas for concise operations, especially on collections [17, 18].
*   Design functions to minimize side effects where possible.

### 4. Null Safety

Kotlin's type system aims to eliminate `NullPointerException` errors by distinguishing between nullable and non-nullable types [20].

**Key Concepts:**

*   **Nullable (`?`) vs. Non-Nullable Types:** By default, types are non-nullable (cannot hold `null`). To allow nulls, append `?` to the type (e.g., `String?`).
    ```kotlin
    var nonNullable: String = "Hello"
    // nonNullable = null // Compilation error

    var nullable: String? = "World"
    nullable = null // Allowed
    ```
*   **Safe Call Operator (`?.`):** Access properties or call methods on a nullable receiver only if it's not null. Returns `null` if the receiver is null.
    ```kotlin
    val name: String? = null // Could be null
    println(name?.length) // Prints null (no NPE)

    val city: String? = "Paris"
    println(city?.length) // Prints 5
    ```
*   **Elvis Operator (`?:`):** Provides a default value if the expression on the left is null.
    ```kotlin
    val name: String? = null
    val displayName = name ?: "Guest" // If name is null, use "Guest"
    println(displayName) // Prints Guest

    val length = name?.length ?: 0 // If name is null or length call returns null, use 0
    println(length) // Prints 0
    ```
*   **Not-Null Assertion Operator (`!!`):** Converts a nullable type to its non-nullable counterpart, throwing a `KotlinNullPointerException` if the value is actually `null`. **Use sparingly**, only when you are absolutely certain the value is not null [20].
    ```kotlin
    val name: String? = "Maybe"
    // Use only if you are 100% sure 'name' is not null at this point
    try {
        val length = name!!.length
        println(length)
    } catch (e: NullPointerException) {
        println("Caught NPE because !! was used on null")
    }
    ```
    *   **Anti-Example:** Avoid `!!` if nullability can be handled safely with `?.` or `?:`.
*   **Safe Casts (`as?`):** Attempts to cast to a type, returning `null` if the cast is unsuccessful instead of throwing a `ClassCastException` [21].
    ```kotlin
    val obj: Any = 123
    val str: String? = obj as? String // Returns null, doesn't throw exception
    println(str) // Prints null
    ```
*   **`lateinit` Modifier:** Allows declaring a non-nullable property that will be initialized later (before first access). Accessing before initialization throws an exception. Cannot be used with primitive types [22].
*   **Delegated Properties (`by lazy`):** Initializes a property on its first access using a lambda. Thread-safe by default. Suitable for expensive initializations [23].

    | Feature       | Use Case                                     | Initialization Timing | Nullability | Primitive Types | Thread Safety      |
    | :------------ | :------------------------------------------- | :-------------------- | :---------- | :-------------- | :----------------- |
    | `lateinit var`| Dependency injection, setup methods          | Before first access   | Non-nullable| No              | Not guaranteed     |
    | `val ... by lazy` | Expensive computation, first-access init | On first access       | Any         | Yes             | Yes (by default)   |

**Best Practices:**

*   Declare variables as non-nullable whenever possible.
*   Prefer safe calls (`?.`) and the Elvis operator (`?:`) over `if (x != null)` checks for conciseness.
*   Avoid the not-null assertion operator (`!!`) unless absolutely necessary and correctness is guaranteed [20].
*   Use `lateinit` or `by lazy` appropriately for deferred initialization of non-nullable properties [22, 23].

### 5. Type System

Kotlin has a strong, static type system with features designed for safety and expressiveness [2].

**Key Concepts:**

*   **Basic Types:** `Int`, `Long`, `Short`, `Byte`, `Float`, `Double`, `Boolean`, `Char`, `String` [2]. Numbers are represented as objects but usually optimized to primitives on platforms like JVM.
*   **Type Inference:** The compiler can often infer the type of a variable or expression, reducing boilerplate [24].
    ```kotlin
    val message = "Hello" // Type String is inferred
    val count = 10 // Type Int is inferred
    val pi = 3.14 // Type Double is inferred
    ```
*   **Smart Casts:** The compiler automatically casts a variable to a more specific type within a scope after a type check (`is` or `!is`) or a safe call that implies non-nullability [21].
    ```kotlin
    fun process(obj: Any) {
        if (obj is String) {
            // obj is automatically smart-cast to String here
            println("String length: ${obj.length}")
        }

        if (obj !is String) return
        // obj is smart-cast to String here too
        println("Still a string: ${obj.uppercase()}")
    }
    ```
*   **Generics:** Allow writing code that works with different types without sacrificing type safety. Uses declaration-site variance (`in`, `out`) and use-site variance (projections) [25].
    ```kotlin
    // Generic function
    fun <T> singletonList(item: T): List<T> {
        return listOf(item)
    }

    // Generic class with out variance (producer)
    interface Source<out T> {
        fun nextT(): T
    }

    // Generic class with in variance (consumer)
    interface Comparable<in T> {
        operator fun compareTo(other: T): Int
    }
    ```*   **`Any` and `Unit`:** `Any` is the root of the Kotlin class hierarchy, similar to `Object` in Java [2]. `Unit` is the type for functions that return no meaningful value, similar to `void` in Java/C++. It's a singleton object [26].
*   **`Nothing`:** A type that has no instances. Used to represent values that never exist (e.g., the return type of a function that always throws an exception or has an infinite loop) [27].

### 6. Basic Coroutine Usage

Coroutines provide a way to write asynchronous, non-blocking code that looks sequential. They are lightweight "user-mode threads" managed by the Kotlin runtime [28].

**Key Concepts:**

*   **`suspend` Functions:** Functions that can be paused and resumed later. They can only be called from other `suspend` functions or within a coroutine scope [29]. Marked with the `suspend` keyword.
    ```kotlin
    import kotlinx.coroutines.*

    suspend fun fetchData(): String {
        delay(1000L) // Non-blocking delay (suspending function)
        return "Data fetched"
    }
    ```
*   **Coroutine Builders:** Functions that start new coroutines.
    *   `launch`: Starts a new coroutine without returning a result ("fire-and-forget"). Returns a `Job` object representing the coroutine [30].
    *   `async`: Starts a new coroutine that computes a result, returning a `Deferred<T>` (a light-weight future) which can be awaited using `.await()` [31].
*   **Coroutine Scopes:** Define the lifecycle and context of coroutines. Coroutines launched within a scope are typically cancelled when the scope is cancelled [32].
    *   `CoroutineScope()`: Creates a general-purpose scope. Needs to be managed manually (e.g., cancelled when no longer needed).
    *   `GlobalScope`: A scope that lives for the entire application lifetime. **Discouraged** for application code as it can lead to resource leaks if not handled carefully [33].
    *   Specific scopes provided by frameworks (e.g., `viewModelScope` in Android, `lifecycleScope` in Android).
*   **Structured Concurrency:** A principle where new coroutines are launched within a specific scope, establishing parent-child relationships. Cancellation of the parent scope cancels all its children, preventing leaks and simplifying error handling [32].

**Basic Example:**

```kotlin
import kotlinx.coroutines.*

// A suspending function simulating work
suspend fun doWork(id: Int): String {
    println("Work $id: Starting...")
    delay(500L * id) // Simulate work duration
    println("Work $id: Finished!")
    return "Result $id"
}

fun main() = runBlocking { // runBlocking starts a coroutine and blocks the main thread until completion (mainly for main functions and tests)
    println("Main: Start")

    // Launch a fire-and-forget coroutine
    val job1 = launch {
        println("Launch: Start")
        val result = doWork(1)
        println("Launch: Completed with $result")
    }

    // Launch a coroutine that returns a result
    val deferredResult = async {
        println("Async: Start")
        val result = doWork(2)
        println("Async: Calculation done")
        result // Return the result
    }

    println("Main: Waiting for async result...")
    val resultFromAsync = deferredResult.await() // Suspend until async completes
    println("Main: Async result received: $resultFromAsync")

    job1.join() // Wait for the first launched job to complete (optional here due to runBlocking)
    println("Main: End")
}

/* Potential Output Order (can vary due to concurrency):
Main: Start
Main: Waiting for async result...
Launch: Start
Work 1: Starting...
Async: Start
Work 2: Starting...
Work 1: Finished!
Launch: Completed with Result 1
Work 2: Finished!
Async: Calculation done
Main: Async result received: Result 2
Main: End
*/
```

**Best Practices:**

*   Avoid `GlobalScope` in application code; use structured concurrency with appropriate scopes [33].
*   Use `launch` for operations that don't return a result and `async` when a result is needed [30, 31].
*   Ensure `suspend` functions perform non-blocking operations or call other `suspend` functions [29].
*   Handle cancellation appropriately within long-running coroutines by checking `isActive` or using cancellable suspending functions from `kotlinx.coroutines` [34].

### 7. Common Build Tooling (Gradle Kotlin DSL)

Gradle is a popular build automation tool. The Gradle Kotlin DSL (`build.gradle.kts`) allows writing build scripts using Kotlin syntax, offering type safety and IDE support [35].

**Key Concepts:**

*   **`settings.gradle.kts`:** Defines project structure, included subprojects, and potentially plugin repositories [36].
    ```kotlin
    // settings.gradle.kts
    rootProject.name = "my-kotlin-project"
    include(":app", ":library") // Include subprojects
    ```
*   **`build.gradle.kts` (Project Level):** Configures build settings applicable to the entire project, often including plugin versions and repositories [37].
    ```kotlin
    // Top-level build.gradle.kts
    plugins {
        // Apply plugins globally or define versions
        id("org.jetbrains.kotlin.jvm") version "1.9.23" apply false // Example: Define Kotlin plugin version, don't apply here
    }

    allprojects {
        repositories {
            google()
            mavenCentral()
        }
    }
    ```
*   **`build.gradle.kts` (Module Level):** Configures settings specific to a module (e.g., `app`, `library`), including applied plugins, dependencies, and build configurations [37].
    ```kotlin
    // app/build.gradle.kts
    plugins {
        kotlin("jvm") // Apply the Kotlin JVM plugin (shorthand)
        // id("org.jetbrains.kotlin.jvm") // Equivalent longer form
        application // Apply the application plugin for executable JVM apps
    }

    repositories {
        mavenCentral() // Can be inherited or specified here
    }

    dependencies {
        // Standard library dependency (often added by Kotlin plugin)
        implementation(kotlin("stdlib-jdk8"))

        // Other library dependencies
        implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3")
        implementation("com.google.code.gson:gson:2.10.1")

        // Testing dependencies
        testImplementation(kotlin("test"))
        testImplementation("org.junit.jupiter:junit-jupiter-api:5.10.0")
        testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.10.0")
    }

    application {
        // Configure the main class for the application plugin
        mainClass.set("com.example.MainKt")
    }

    tasks.test {
        // Configure the test task, e.g., use JUnit Platform
        useJUnitPlatform()
    }

    kotlin {
        // Configure Kotlin compilation options if needed
        jvmToolchain(17) // Specify target JVM version
    }
    ```*   **Plugins:** Add capabilities to the build (e.g., Kotlin compilation, application packaging, testing frameworks) [38]. Applied using the `plugins { ... }` block.
*   **Dependencies:** Declare external libraries required by the project using configurations like `implementation`, `api`, `testImplementation` [39].
*   **Tasks:** Represent units of work in the build process (e.g., `compileKotlin`, `test`, `jar`, `run`) [40].

**Best Practices:**

*   Use the `plugins { ... }` block for applying plugins [38].
*   Leverage type-safe accessors generated by Gradle for configurations and tasks when possible [35].
*   Keep build logic readable and maintainable; extract complex logic into custom tasks or buildSrc [41].
*   Refer to the official Gradle Kotlin DSL Primer and Samples for detailed syntax and examples [35, 42].

## Confidence Assessment

Confidence is high (5/5). The official documentation for Kotlin (language, stdlib, coroutines) and Gradle (Kotlin DSL) provides extensive and clear information on all the requested topics. The concepts are well-defined, and examples are readily available.

## Boundary of Documentation

The documentation covers the syntax, semantics, and intended usage of these features thoroughly. Best practices are often explicitly mentioned or can be inferred from the design principles highlighted in the documentation (e.g., immutability, structured concurrency). However, highly specific performance characteristics or interactions under extreme edge cases might require empirical testing beyond standard documentation. Integration nuances with third-party libraries or frameworks depend on their respective documentation in addition to Kotlin/Gradle's.

## Documentation References

**Kotlin:**

1.  [Kotlin Standard Library Overview](https://kotlinlang.org/docs/reference/kotlin-stdlib.html) (Accessed Apr 29, 2025)
2.  [Kotlin Basic Types](https://kotlinlang.org/docs/basic-types.html) (Accessed Apr 29, 2025)
3.  [Kotlin Collections Overview](https://kotlinlang.org/docs/collections-overview.html) (Accessed Apr 29, 2025)
4.  [Kotlin Scope Functions](https://kotlinlang.org/docs/scope-functions.html) (Accessed Apr 29, 2025)
5.  [Kotlin Basic IO](https://kotlinlang.org/docs/basic-io.html) (Accessed Apr 29, 2025)
6.  [Kotlin String Manipulation](https://kotlinlang.org/docs/strings.html) (Accessed Apr 29, 2025)
7.  [Kotlin Extension Functions](https://kotlinlang.org/docs/extensions.html) (Accessed Apr 29, 2025)
8.  [Kotlin Classes and Objects](https://kotlinlang.org/docs/classes.html) (Accessed Apr 29, 2025)
9.  [Kotlin Classes](https://kotlinlang.org/docs/classes.html#classes) (Accessed Apr 29, 2025)
10. [Kotlin Inheritance](https://kotlinlang.org/docs/inheritance.html) (Accessed Apr 29, 2025)
11. [Kotlin Interfaces](https://kotlinlang.org/docs/interfaces.html) (Accessed Apr 29, 2025)
12. [Kotlin Visibility Modifiers](https://kotlinlang.org/docs/visibility-modifiers.html) (Accessed Apr 29, 2025)
13. [Kotlin Data Classes](https://kotlinlang.org/docs/data-classes.html) (Accessed Apr 29, 2025)
14. [Kotlin Sealed Classes](https://kotlinlang.org/docs/sealed-classes.html) (Accessed Apr 29, 2025)
15. [Kotlin Object Declarations](https://kotlinlang.org/docs/object-declarations.html) (Accessed Apr 29, 2025)
16. [Kotlin Functional Programming](https://kotlinlang.org/docs/fun-interfaces.html) (Accessed Apr 29, 2025) - *Note: While there isn't one single "Functional Programming" page, concepts are spread across lambdas, higher-order functions, collections etc.*
17. [Kotlin Higher-Order Functions and Lambdas](https://kotlinlang.org/docs/lambdas.html) (Accessed Apr 29, 2025)
18. [Kotlin Lambda Expressions and Anonymous Functions](https://kotlinlang.org/docs/lambdas.html#lambda-expressions-and-anonymous-functions) (Accessed Apr 29, 2025)
19. [Kotlin Variables](https://kotlinlang.org/docs/basic-syntax.html#variables) (Accessed Apr 29, 2025) - *Discusses val/var*
20. [Kotlin Null Safety](https://kotlinlang.org/docs/null-safety.html) (Accessed Apr 29, 2025)
21. [Kotlin Type Checks and Casts](https://kotlinlang.org/docs/typecasts.html) (Accessed Apr 29, 2025)
22. [Kotlin Late-initialized properties and variables](https://kotlinlang.org/docs/properties.html#late-initialized-properties-and-variables) (Accessed Apr 29, 2025)
23. [Kotlin Delegated Properties - Lazy](https://kotlinlang.org/docs/delegated-properties.html#lazy-properties) (Accessed Apr 29, 2025)
24. [Kotlin Type Inference](https://kotlinlang.org/docs/type-inference.html) (Accessed Apr 29, 2025)
25. [Kotlin Generics](https://kotlinlang.org/docs/generics.html) (Accessed Apr 29, 2025)
26. [Kotlin Unit Type](https://kotlinlang.org/docs/functions.html#unit-returning-functions) (Accessed Apr 29, 2025)
27. [Kotlin Nothing Type](https://kotlinlang.org/docs/exceptions.html#the-nothing-type) (Accessed Apr 29, 2025)
28. [Kotlin Coroutines Guide](https://kotlinlang.org/docs/coroutines-guide.html) (Accessed Apr 29, 2025)
29. [Kotlin Suspending Functions](https://kotlinlang.org/docs/coroutines-basics.html#your-first-coroutine) (Accessed Apr 29, 2025) - *Introduced with basic examples*
30. [Kotlin Coroutine Builders - launch](https://kotlinlang.org/docs/coroutines-basics.html#scope-builder) (Accessed Apr 29, 2025) - *Often used within scope builders*
31. [Kotlin Coroutine Builders - async](https://kotlinlang.org/docs/composing-suspending-functions.html#async-style-functions) (Accessed Apr 29, 2025)
32. [Kotlin Structured Concurrency](https://kotlinlang.org/docs/coroutines-basics.html#structured-concurrency) (Accessed Apr 29, 2025)
33. [Kotlin Coroutine Scope - GlobalScope](https://kotlinlang.org/docs/coroutines-basics.html#global-coroutines-are-like-daemon-threads) (Accessed Apr 29, 2025)
34. [Kotlin Cancellation and Timeouts](https://kotlinlang.org/docs/cancellation-and-timeouts.html) (Accessed Apr 29, 2025)

**Gradle:**

35. [Gradle Kotlin DSL Primer](https://docs.gradle.org/current/userguide/kotlin_dsl.html) (Accessed Apr 29, 2025)
36. [Gradle Settings File](https://docs.gradle.org/current/userguide/build_lifecycle.html#settings_file) (Accessed Apr 29, 2025)
37. [Gradle Build Scripts](https://docs.gradle.org/current/userguide/writing_build_scripts.html) (Accessed Apr 29, 2025)
38. [Gradle Plugins](https://docs.gradle.org/current/userguide/plugins.html) (Accessed Apr 29, 2025)
39. [Gradle Dependency Management Basics](https://docs.gradle.org/current/userguide/dependency_management_basics.html) (Accessed Apr 29, 2025)
40. [Gradle Tasks](https://docs.gradle.org/current/userguide/tutorial_using_tasks.html) (Accessed Apr 29, 2025)
41. [Gradle Organizing Build Logic](https://docs.gradle.org/current/userguide/organizing_gradle_projects.html) (Accessed Apr 29, 2025) - *Discusses buildSrc*
42. [Gradle Kotlin DSL Samples](https://github.com/gradle/kotlin-dsl-samples) (Accessed Apr 29, 2025) - *Official GitHub repository linked from Gradle docs*

## Workflow & Usage Examples

[Describe the typical high-level workflow the mode follows. Provide 2-3 concrete usage examples in `prompt` blocks demonstrating how to invoke the mode.]

**General Workflow:**

1.  Analyze the request and clarify requirements if necessary.
2.  Consult the Kotlin-specific Knowledge Base (`.ruru/modes/dev-kotlin/kb/`) for best practices and project standards.
3.  Read relevant existing code files (`.kt`, `.kts`).
4.  Implement the required Kotlin code, focusing on clarity, efficiency, and idiomatic Kotlin style.
5.  Utilize appropriate Kotlin libraries (Coroutines, Flow, Serialization, KMP libraries).
6.  Write or update unit/integration tests using Kotest.
7.  Apply changes using appropriate file modification tools.
8.  Report completion, referencing modified files and any relevant test results.

**Usage Examples:**

**Example 1: Implement a KMP Data Fetching Function**

```prompt
Implement a suspend function in the commonMain source set of our KMP project to fetch user data from `/api/users/{id}` using Ktor client and Kotlinx Serialization. Handle potential network errors gracefully.
```

**Example 2: Refactor Blocking Calls with Coroutines**

```prompt
Refactor the `loadConfiguration` function in `ConfigLoader.kt` to use Kotlin Coroutines instead of blocking threads. Ensure it integrates with the existing Flow-based update mechanism.
```

**Example 3: Add a Kotest Unit Test**

```prompt
Write Kotest unit tests for the `OrderProcessor` class in `OrderProcessor.kt`, covering successful order processing and edge cases like invalid input or inventory shortages.
```

## Limitations

[Clearly define the boundaries of the mode's expertise. What tasks does it *not* do? When should it escalate or delegate?]

*   Does not perform UI design (delegate to `design-ui` or framework-specific modes like `framework-compose`).
*   Does not manage infrastructure or deployments (delegate to `lead-devops`).
*   Does not perform database schema design (delegate to `lead-db`).
*   Limited expertise in deep iOS-specific (Swift/Objective-C) or Web frontend-specific (JS/TS framework) integration beyond KMP interop.

## Rationale / Design Decisions

[Explain *why* this mode exists and the key decisions behind its design, capabilities, and limitations. How does it fit into the overall system?]

*   Provides dedicated expertise for Kotlin, a modern and increasingly popular language across multiple platforms.
*   Consolidates knowledge of core Kotlin libraries (Coroutines, Flow, KMP, Serialization) into one specialist.
*   Enables efficient development of backend, Android, and cross-platform components.
*   Focuses specifically on Kotlin implementation, allowing other modes to handle platform specifics or broader architectural concerns.
