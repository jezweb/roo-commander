## Rust: Basic Setup Summary

Rust development primarily revolves around the **Cargo** build system and package manager. Basic setup and workflow involve:

1.  **Installation:** Install Rust, which includes Cargo (details not in provided context, but assumed prerequisite).
2.  **Create Project:** Use `cargo new <project_name>` to create a new binary package or `cargo new <project_name> --lib` for a library package. This generates a standard project structure including `Cargo.toml` and `src/`.
3.  **Add Dependencies:** Edit the `Cargo.toml` file and add required external crates (libraries) from `crates.io` under the `[dependencies]` section, specifying the crate name and version (e.g., `regex = "1.5.4"`).
4.  **Build:** Compile the project using `cargo build` (for development) or `cargo build --release` (for optimized release builds).
5.  **Run:** Execute a binary crate using `cargo run` (or `cargo run --release`).
6.  **Test:** Run unit, integration, and documentation tests using `cargo test`.

Cargo automatically downloads and compiles dependencies listed in `Cargo.toml`, tracking exact versions in `Cargo.lock` for reproducible builds.