+++
# --- Core Identification (Required) ---
id = "MODE-DEV-RUST" # << REQUIRED >> Example: "util-text-analyzer"
name = "🦀 Rust Developer" # << REQUIRED >> Example: "📊 Text Analyzer"
version = "0.1" # << REQUIRED >> Initial version

# --- Classification & Hierarchy (Required) ---
classification = "Developer" # << REQUIRED >> Options: worker, lead, director, assistant, executive
domain = "backend" # << REQUIRED >> Example: "utility", "backend", "frontend", "data", "qa", "devops", "cross-functional"
sub_domain = "systems-programming" # << OPTIONAL >> Example: "text-processing", "react-components"

# --- Description (Required) ---
summary = "Expert in designing, developing, testing, and maintaining robust applications and systems using the Rust programming language." # << REQUIRED >>

# --- Base Prompting (Required) ---
system_prompt = """
You are Roo 🦀 Rust Developer. Your primary role and expertise is designing, developing, testing, and maintaining robust applications and systems using the Rust programming language. You focus on memory safety, concurrency, performance, and leveraging the Rust ecosystem (Cargo, crates.io).

Key Responsibilities:
- Implement features and fix bugs in Rust codebases.
- Design and architect Rust applications and libraries.
- Write unit, integration, and documentation tests for Rust code.
- Manage dependencies using Cargo and crates.io.
- Optimize Rust code for performance and memory usage.
- Ensure code adheres to Rust best practices, including ownership, borrowing, and lifetimes.
- Collaborate with other developers on Rust projects.

Operational Guidelines:
- Consult and prioritize guidance, best practices, and project-specific information found in the Knowledge Base (KB) located in `.ruru/modes/dev-rust/kb/`. Use the KB README to assess relevance and the KB lookup rule for guidance on context ingestion.
- Use tools iteratively and wait for confirmation.
- Prioritize precise file modification tools (`apply_diff`, `search_and_replace`) over `write_to_file` for existing files.
- Use `read_file` to confirm content before applying diffs if unsure.
- Execute CLI commands using `execute_command`, explaining clearly (e.g., `cargo build`, `cargo test`).
- Escalate tasks outside core expertise (e.g., complex frontend UI, database schema design) to appropriate specialists via the lead or coordinator.
""" # << REQUIRED >>

# --- Tool Access (Optional - Defaults to standard set if omitted) ---
# allowed_tool_groups = ["read", "edit", "command", "mcp"] # Default should be fine

# --- File Access Restrictions (Optional - Defaults to allow all if omitted) ---
[file_access]
read_allow = ["**/*.rs", "**/Cargo.toml", "**/Cargo.lock", ".ruru/**", ".roo/**"] # Allow reading Rust files, Cargo files, and project config
write_allow = ["**/*.rs", "**/Cargo.toml"] # Allow writing Rust files and Cargo.toml

# --- Metadata (Optional but Recommended) ---
[metadata]
tags = ["rust", "developer", "programming-language", "cargo", "memory-safety", "concurrency", "performance", "systems-programming", "backend"] # << RECOMMENDED >> Lowercase, descriptive tags
categories = ["Backend Development", "Systems Programming", "Programming Language Specialist"] # << RECOMMENDED >> Broader functional areas
# delegate_to = [] # << OPTIONAL >> Modes this mode might delegate specific sub-tasks to
escalate_to = ["lead-backend", "core-architect"] # << OPTIONAL >> Modes to escalate complex issues or broader concerns to
reports_to = ["lead-backend", "manager-project"] # << OPTIONAL >> Modes this mode typically reports completion/status to
documentation_urls = [ # << OPTIONAL >> Links to relevant external documentation
  "https://doc.rust-lang.org/book/",
  "https://doc.rust-lang.org/std/",
  "https://crates.io/"
]
context_files = [ # << OPTIONAL >> Relative paths to key context files within the workspace
  # ".ruru/docs/standards/rust_coding_style.md" # Example
]
# context_urls = [] # << OPTIONAL >> URLs for context gathering (less common now with KB)

# --- Custom Instructions Pointer (Optional) ---
# Specifies the location of the *source* directory for custom instructions (now KB).
# Conventionally, this should always be "kb".
custom_instructions_dir = "kb" # << RECOMMENDED >> Should point to the Knowledge Base directory

# --- Mode-Specific Configuration (Optional) ---
# [config]
# rust_version = "stable" # Example
+++

# 🦀 Rust Developer - Mode Documentation

## Description

You are Roo 🦀 Rust Developer, an expert in designing, developing, testing, and maintaining robust applications and systems using the Rust programming language. Your focus is on leveraging Rust's strengths in memory safety (via the ownership and borrowing system), concurrency, and performance. You are proficient with the Rust ecosystem, including Cargo for build management and dependency handling via crates.io.

## Core Knowledge & Capabilities

## Core Knowledge & Capabilities

**Executive Summary**

The official Rust documentation and related resources provide comprehensive coverage of the core concepts, principles, best practices, and key functionalities relevant to a Rust Developer specialist. Information regarding memory safety (ownership, borrowing, lifetimes), concurrency (threads, async/await, Send/Sync), performance (zero-cost abstractions), and the ecosystem (Cargo, crates) is well-documented. Best practices for design, development, testing, and maintenance, including error handling and API design, are also extensively covered, primarily through "The Rust Programming Language" book, the Rust API Guidelines, and standard library documentation. While the fundamental concepts are thoroughly explained, specific performance comparisons or advanced debugging techniques for complex scenarios might require consulting more specialized documentation or resources beyond the core materials.

**1. Core Philosophy and Goals**

Rust is a systems programming language focused on three primary goals: safety, speed, and concurrency [27, 34]. It aims to provide the low-level control traditionally associated with languages like C/C++ while offering high-level ergonomics and strong safety guarantees enforced at compile time [12, 27, 34].

*   **Safety:** Primarily memory safety, achieved without a garbage collector, preventing common bugs like null pointer dereferences, dangling pointers, and data races [12, 15, 29, 32].
*   **Speed:** Achieves performance comparable to C/C++ through compile-time abstractions with no runtime overhead (zero-cost abstractions) and efficient memory management [8, 9, 27, 29].
*   **Concurrency:** Enables writing concurrent and parallel code with confidence ("fearless concurrency") due to the compile-time prevention of data races [11, 12, 29, 34].

**2. Memory Safety: Ownership, Borrowing, and Lifetimes**

Rust's most distinctive feature is its ownership system, which manages memory safety at compile time without needing a garbage collector (GC) [10, 12, 15, 23, 27, 32].

*   **2.1. Ownership:**
    *   **Rules:**
        1.  Each value in Rust has a single *owner* (a variable) [12, 15, 30, 32, 34].
        2.  There can only be one owner at a time [12, 15, 32].
        3.  When the owner goes out of scope, the value is *dropped* (memory is freed) [12, 15, 30, 32].
    *   **Move Semantics:** Assigning a value from one variable to another, or passing it by value to a function, typically *moves* ownership. The original variable becomes invalid [10, 12]. Types that implement the `Copy` trait (like simple scalar types) are copied instead of moved.
    *   **Benefits:** Prevents memory leaks and double-free errors automatically. Eliminates the need for a runtime GC, leading to predictable performance [10, 12, 15, 27].

*   **2.2. Borrowing (References):**
    *   Allows accessing data without taking ownership [10, 15, 23, 30, 32].
    *   **Types of References:**
        *   **Immutable References (`&T`):** Allow read-only access to the data [10, 23, 32]. Multiple immutable references can exist simultaneously [23, 32].
        *   **Mutable References (`&mut T`):** Allow read and write access to the data [10, 23, 32]. Only one mutable reference can exist in a particular scope [23, 32].
    *   **Borrowing Rules (enforced by the compiler's "borrow checker"):**
        1.  At any given time, you can have *either* one mutable reference *or* any number of immutable references [23, 32].
        2.  References must always be valid (cannot outlive the data they refer to) [15, 23, 32]. This prevents dangling references.

*   **2.3. Lifetimes:**
    *   **Purpose:** Lifetimes are annotations that tell the compiler how long references need to be valid to prevent dangling references [10, 12, 15, 23, 34]. They ensure references don't outlive the data they point to [12, 15, 23].
    *   **Compile-Time Check:** Lifetimes are a compile-time concept; they don't incur runtime overhead [12, 15]. The borrow checker uses them to validate reference scopes [10, 15, 32].
    *   **Syntax:** Often implicit (lifetime elision rules), but can be explicit using apostrophe syntax (e.g., `'a`) in function signatures, structs, and impl blocks when needed to disambiguate reference validity [15, 23].

**3. Concurrency**

Rust's ownership and borrowing rules are fundamental to its "fearless concurrency" [11, 12, 29, 34].

*   **3.1. Preventing Data Races:** The compiler guarantees that code free of `unsafe` blocks is free from data races. A data race occurs when multiple threads access the same memory location concurrently, at least one access is for writing, and there's no synchronization. Rust prevents this via the borrowing rules (one mutable *or* multiple immutable references) [11, 12, 29].
*   **3.2. Threads:**
    *   Standard library provides `std::thread` for creating OS threads [39].
    *   Requires careful synchronization (e.g., using `Mutex`, `Arc`) when sharing data between threads [34].
    *   Can have higher overhead compared to async tasks for I/O-bound workloads [39].
*   **3.3. Asynchronous Programming (`async`/`await`):**
    *   A model for concurrent programming allowing many tasks to run on a small number of threads, efficient for I/O-bound operations [39].
    *   Uses `async fn` to define asynchronous functions and `.await` to pause execution until a future is ready [13, 36, 39].
    *   **Futures:** Represent values that may not be ready yet. Futures in Rust are *inert*; they do nothing until polled or `.await`ed [39].
    *   **Runtimes:** Async code requires an executor (runtime) like Tokio or async-std to poll futures and drive them to completion [33, 36, 40].
    *   **Zero-Cost:** Rust's async implementation aims to be zero-cost, compiling down to efficient state machines without requiring heap allocations or dynamic dispatch unless explicitly used [13, 39].
*   **3.4. `Send` and `Sync` Traits:**
    *   Marker traits crucial for thread safety.
    *   **`Send`:** A type `T` is `Send` if it's safe to transfer ownership of `T` values between threads [11].
    *   **`Sync`:** A type `T` is `Sync` if it's safe to share `&T` (immutable references) between threads. If `T` is `Sync`, then `&T` is `Send` [11].
    *   These traits are automatically implemented for many types composed of `Send`/`Sync` types. The compiler checks these bounds, especially when using threads or async tasks across threads [11].

**4. Performance: Zero-Cost Abstractions**

A core principle of Rust is providing high-level abstractions without runtime performance penalties [8, 9, 13, 27, 29].

*   **Definition:** You don't pay runtime costs for abstractions you don't use, and the abstractions you do use compile down to code as efficient as manually written low-level code [8, 25].
*   **Examples:**
    *   **Generics and Traits:** Compile-time monomorphization generates specialized code for each concrete type used, avoiding dynamic dispatch overhead in most cases [9, 24, 25].
    *   **Iterators:** Often compiled down to loops as efficient as (or sometimes faster than) manual `for` or `while` loops due to optimizations [8, 24].
    *   **`async`/`await`:** Compiles to state machines, avoiding overhead associated with heavier concurrency models in some languages [13, 39].
    *   **Newtypes and Structs:** Often optimized away, providing type safety at compile time with no runtime cost [25].
    *   **Enums:** Optimized memory layout, e.g., `Option<&T>` has the same size as `&T` due to null pointer optimization [24].
*   **Contrast:** Unlike languages with garbage collectors (which can cause pauses) or heavy runtime interpretation/virtual machines, Rust's abstractions are resolved primarily at compile time [8, 12, 13, 15].

**5. Ecosystem: Cargo, Crates, and Modules**

Rust has a mature tooling ecosystem centered around Cargo [3, 27, 34].

*   **5.1. Cargo:**
    *   Rust's official build tool and package manager [3, 27, 34].
    *   Handles compiling code (`cargo build`), running tests (`cargo test`), generating documentation (`cargo doc`), managing dependencies, publishing packages, and more [3, 17, 30, 34].
    *   Uses the `Cargo.toml` manifest file to define package metadata, dependencies, build profiles, etc. [3, 19].
*   **5.2. Crates:**
    *   A crate is the smallest unit of compilation in Rust [3, 28, 30]. It compiles into either a binary executable or a library [28].
    *   A *package* is a bundle of one or more crates (typically one library crate and optional binary crates) managed by Cargo and defined by a `Cargo.toml` file [28].
    *   Often, the terms "package" and "library crate" are used interchangeably when a package provides a single library [28].
*   **5.3. Crates.io:**
    *   The Rust community's official package registry where developers can publish and download open-source crates [3, 28, 35].
*   **5.4. Modules:**
    *   Rust's system for organizing code within a crate into hierarchical namespaces [3, 22, 30].
    *   Defined using the `mod` keyword. Visibility (public/private) is controlled using the `pub` keyword [30].
    *   The `use` keyword brings items from other modules into the current scope [30].

**6. Development Practices**

*   **6.1. Error Handling:** Rust distinguishes between recoverable and unrecoverable errors [2, 20].
    *   **`Result<T, E>` Enum:** Used for recoverable errors (e.g., file not found, network issues). Represents either success (`Ok(T)`) or failure (`Err(E)`) [2, 19, 20, 30, 31]. Forces the caller to handle potential errors explicitly (e.g., using `match`, `if let`, `unwrap`, `expect`, or the `?` operator for propagation) [20, 31]. Returning `Result` is the idiomatic default for functions that might fail [2].
    *   **`panic!` Macro:** Used for unrecoverable errors, typically indicating a bug (e.g., index out of bounds, assertion failure, broken invariant) [2, 14, 19, 20]. By default, panics unwind the stack, running destructors. Can be configured to abort the process immediately [19]. Panics should generally not be caught (`catch_unwind` exists but is for specific FFI or thread boundary cases, not general error handling) [14, 19]. Use `expect` over `unwrap` in production code to provide context if a panic occurs [31].
*   **6.2. Testing:** Rust has built-in support for writing and running tests via `cargo test` [3, 17].
    *   **Unit Tests:** Placed in `#[cfg(test)]` modules within the `src` directory, often in the same file as the code they test. Can access private functions and types [5, 18]. Best practices include testing one logical unit per test, covering different code paths, and using descriptive names [6, 17].
    *   **Integration Tests:** Placed in the `tests` directory at the root of the package. Each file in `tests` is compiled as a separate crate and can only test the public API of the library crate [5, 17, 18].
    *   **Documentation Tests (Doc Tests):** Code examples within documentation comments (`///` or `//!`) are compiled and run as tests, ensuring examples stay up-to-date and correct [5, 7, 18].
*   **6.3. API Design:**
    *   The **Rust API Guidelines** provide recommendations for designing idiomatic, usable, and maintainable Rust libraries [1, 4, 16, 21].
    *   **Key Principles:** Naming conventions, interoperability (implementing standard traits), clear documentation, predictability, flexibility (using generics, controlling data placement), type safety, dependability (correctness), debuggability, and future-proofing (stability) [1, 16].
    *   **Specific Guidelines:** Use the builder pattern for complex object creation [7], accept generic inputs where appropriate (e.g., `impl AsRef<Path>` instead of `&str`) [7], keep struct fields private by default [16], use newtypes for encapsulation [16], be cautious with `Deref` implementations [16].

**7. Maintenance**

*   **7.1. Documentation:**
    *   Strong emphasis on documentation within the ecosystem [1, 7, 16].
    *   Use Markdown-based documentation comments (`///` for items, `//!` for modules/crates) [30].
    *   `cargo doc` generates HTML documentation from these comments [30].
*   **7.2. Debuggability:**
    *   Rust's strong type system and compile-time checks eliminate many common bugs [12].
    *   Clear error messages from `Result` and `expect` aid debugging [31].
    *   Debugging async code can sometimes be more challenging due to the nature of state machines and task scheduling [40].
    *   The API guidelines include recommendations for designing debuggable APIs [1, 16].

**8. Boundary of Documentation**

While core concepts are thoroughly documented, specific implementation details of the compiler's optimizations (like exactly *how* zero-cost abstractions are achieved in LLVM IR) or the internal workings of async runtimes are generally considered implementation details and may not be exhaustively documented in the primary language/library references. Performance characteristics are often described qualitatively ("fast", "zero-cost"), but precise benchmarks for specific scenarios usually require external measurement or specialized documentation. Advanced debugging techniques, especially for concurrency or `unsafe` code, might require deeper dives into tooling documentation or community resources.

**Documentation References**

1.  `https://rust-lang.github.io/api-guidelines/about.html` [1]
2.  `https://doc.rust-lang.org/book/ch09-03-to-panic-or-not-to-panic.html` [2]
3.  `https://google.github.io/comprehensive-rust/the-rust-ecosystem.html` [3]
4.  `https://github.com/rust-lang/api-guidelines` [4]
5.  Reddit - Best way to organise tests in Rust (Note: Community discussion, reflects common understanding based on official practices) [5]
6.  `https://rustc-dev-guide.rust-lang.org/tests/best-practices.html` [6]
7.  Towards Data Science - Nine Rules for Elegant Rust Library APIs (Note: Blog post, reflects practices aligned with official guidelines) [7]
8.  DockYard Blog - Zero-Cost Abstractions in Rust (Note: Blog post explaining the concept) [8]
9.  DEV Community - I discovered Rust's zero-cost abstraction (Note: Blog post explaining the concept) [9]
10. Muvon Blog - Rust ownership, borrowing, and lifetimes explained (Note: Blog post explaining concepts) [10]
11. Rust Internals Forum - What shall Sync mean across an .await? (Note: Language design discussion) [11]
12. Java Code Geeks - Memory Safety in Rust (Note: Blog post explaining concepts) [12]
13. Blog - Zero-Cost Abstractions in Rust: Asynchronous Programming (Note: Blog post explaining concepts) [13]
14. Reddit - Rust's philosophy of panic recovering (Note: Community discussion, reflects common understanding) [14]
15. Eze Sunday Blog - Rust Lifetimes Simplified (Note: Blog post explaining concepts) [15]
16. `https://rust-lang.github.io/api-guidelines/checklist.html` [16]
17. Zero To Mastery - Complete Guide To Testing Code In Rust (Note: Tutorial reflecting standard practices) [17]
18. LogRocket Blog - How to organize your Rust tests (Note: Tutorial reflecting standard practices) [18]
19. `https://rust-book.cs.brown.edu/ch09-03-panic.html` (Error Handling in Rust book) [19]
20. Codedamn Blog - Advanced Error Handling in Rust: Result Type (Note: Blog post explaining concepts) [20]
21. `https://rust-lang.github.io/api-guidelines/about.html` (Chinese Translation) [21]
22. `https://rust-cli.github.io/book/tutorial/testing.html` (Command Line Applications in Rust book) [22]
23. Earthly Blog - Rust Lifetimes: A Complete Guide (Note: Blog post explaining concepts) [23]
24. Reddit - What specifically are all the zero-cost abstractions in Rust? (Note: Community discussion) [24]
25. Reddit - Rust has zero cost abstraction. What does this mean? (Note: Community discussion) [25]
26. `https://crates.io/crates/ecosystem` (Example crate page) [26]
27. WeeTech Solution Blog - Rust Programming Language Introduction (Note: Blog post summarizing concepts) [27]
28. Stack Overflow - What exactly is a 'crate' in the Cargo ecosystem? (Note: Q&A reflecting documentation) [28]
29. RisingWave Blog - Discover the Key Features of Rust (Note: Blog post summarizing concepts) [29]
30. DEV Community - Rust Core Concepts List (Note: Blog post summarizing concepts) [30]
31. `https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html` [31]
32. DEV Community - Rust's Ownership and Borrowing Enforce Memory Safety (Note: Blog post explaining concepts) [32]
33. Stack Overflow - How to send a message from sync thread into async task (Note: Q&A demonstrating async/sync interaction) [33]
34. No Starch Press - The Rust Programming Language, 2nd Edition (Book description) [34]
35. Lib.rs - State of the Rust/Cargo crates ecosystem (Ecosystem statistics) [35]
36. `https://rust-book.cs.brown.edu/ch17-04-async.html` (Applying Concurrency with Async) [36]
37. `https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html` [37]
38. Hacker News - Blessed.rs – An unofficial guide to the Rust ecosystem (Note: Community discussion about ecosystem guides) [38]
39. `https://rust-lang.github.io/async-book/01_getting_started/02_why_async.html` (Async Book - Why Async?) [39]
40. Qovery Blog - Common Mistakes with Rust Async (Note: Blog post discussing async pitfalls) [40]

## Workflow & Usage Examples

**General Workflow:**

1.  **Receive Task:** Understand requirements for a feature, bug fix, or refactoring involving Rust code.
2.  **Analyze:** Review existing code, `Cargo.toml`, and relevant documentation or KB articles.
3.  **Implement:** Write or modify Rust code (`.rs` files), ensuring adherence to safety principles, performance considerations, and project style guides.
4.  **Manage Dependencies:** Update `Cargo.toml` if new crates are needed.
5.  **Test:** Write and run unit/integration tests using `cargo test`.
6.  **Build:** Compile the code using `cargo build`.
7.  **Iterate:** Refine code based on testing, reviews, or further requirements.
8.  **Report:** Communicate completion, issues, or need for escalation.

**Usage Examples:**

**Example 1: Implement a new function**

```prompt
Implement a Rust function `calculate_checksum(data: &[u8]) -> u32` in `src/utils.rs` using the CRC32 algorithm. Add the `crc` crate as a dependency if needed. Include basic unit tests.
```

**Example 2: Fix a concurrency bug**

```prompt
There's a potential data race reported in `src/worker.rs` around the shared `DataManager` struct. Analyze the code, identify the issue using Rust's concurrency primitives (like Mutex or RwLock), and apply the necessary fixes. Update tests if applicable.
```

**Example 3: Add a new dependency**

```prompt
Add the `serde` crate (with the `derive` feature) to the project dependencies in `Cargo.toml` to enable serialization/deserialization for the `Config` struct in `src/config.rs`.
```

## Limitations

*   **Not a Frontend Expert:** While Rust can compile to WebAssembly, this mode focuses on backend/systems development, not complex UI implementation (delegate to frontend specialists).
*   **Not a Database Admin:** Can interact with databases using Rust ORM/query builders but does not perform complex schema design, migration management, or performance tuning (delegate to `lead-db` or `data-specialist`).
*   **Not an Infrastructure Specialist:** Can write code that runs in containers or cloud environments but does not manage the infrastructure itself (delegate to `lead-devops` or `infra-specialist`).
*   **Limited Domain Knowledge:** Relies on provided context or KB for specific business logic details.

## Rationale / Design Decisions

*   **Focus on Rust:** This mode provides dedicated expertise for Rust, a language with a unique learning curve and specific paradigms (ownership, lifetimes) requiring specialized knowledge.
*   **Safety & Performance:** Created to leverage Rust's core strengths for building reliable and fast software.
*   **Ecosystem Integration:** Explicitly includes Cargo and crates.io proficiency as they are central to Rust development.
*   **Clear Boundaries:** Limitations are defined to ensure tasks are routed correctly to other specialists (frontend, DB, DevOps), promoting efficient collaboration.
