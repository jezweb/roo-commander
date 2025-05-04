+++
id = "KB-DEV-RUBY-GUIDELINES-V1"
title = "Ruby Development Guidelines"
context_type = "knowledge_base"
scope = "General Ruby coding standards, best practices, and conventions for dev-ruby mode"
target_audience = ["dev-ruby"]
granularity = "reference"
status = "active"
last_updated = "2025-05-03"
tags = ["kb", "ruby", "development", "coding-standards", "best-practices", "style-guide", "standardrb", "gems", "bundler", "testing"]
template_schema_doc = ".ruru/templates/toml-md/15_knowledge_base.README.md"
relevance = "High: Core guidelines for Ruby development"
+++

# Knowledge Base: Ruby Development Guidelines

This document outlines standard practices and conventions for Ruby development.

## Style Guide

*   **Adhere to the [Standard Ruby Style Guide](https://github.com/standardrb/standard).** This is the enforced style for this project.
    *   Use the `standard` gem for automatic checking and formatting. It wraps RuboCop with a specific, non-configurable ruleset.
*   **Naming:**
    *   Use `snake_case` for methods and variables.
    *   Use `CamelCase` for classes and modules.
    *   Use `SCREAMING_SNAKE_CASE` for constants.
*   **Syntax:**
    *   Use `%()` for multi-line strings requiring interpolation, `%q()` for single-quoted multi-line strings, and `%Q()` for double-quoted multi-line strings.
    *   Use the `_` prefix for unused block parameters or local variables (e.g., `arr.each { |_item, index| puts index }`).
    *   Use `&&`/`||` for boolean logic control flow. Avoid `and`/`or` unless their lower precedence is specifically required (which is rare).
    *   Use the stabby lambda syntax `->` for lambdas (e.g., `my_lambda = ->(x) { x * 2 }`).
    *   Prefer `do...end` for multi-line blocks and `{...}` for single-line blocks.
*   **Methods:**
    *   Use parentheses for method calls with arguments (e.g., `my_method(arg1, arg2)`). Omit parentheses for methods without arguments.
    *   Use `!` suffix for methods that modify the receiver object (mutate state) or raise an exception on failure instead of returning `nil` or `false` (e.g., `user.save!`).
    *   Use `?` suffix for predicate methods that return a boolean value (e.g., `user.valid?`, `items.empty?`).

## Best Practices

*   **Keep Methods Short and Focused:** Aim for methods that perform a single, well-defined task (Single Responsibility Principle). Ideally, methods should be easy to understand and test.
*   **Use Descriptive Names:** Choose clear and meaningful names for variables, methods, classes, and modules. Avoid overly short or cryptic names.
*   **Prefer Immutability:** Where practical, favor immutable objects and data structures to reduce side effects and make code easier to reason about. Use methods that return new objects instead of modifying existing ones when possible.
*   **Write Tests:** Employ testing frameworks like RSpec or Minitest to write unit, integration, and potentially feature tests. Aim for good test coverage.
*   **Handle Exceptions Gracefully:**
    *   Avoid rescuing the generic `Exception` class. Rescue specific `StandardError` subclasses relevant to the potential failure.
    *   Use `begin...rescue...ensure...end` blocks appropriately. `ensure` blocks are crucial for cleanup operations (e.g., closing files).
*   **Dependency Management:**
    *   Use **Bundler** (`Gemfile`, `Gemfile.lock`) to manage gem dependencies.
    *   Specify gem versions appropriately in the `Gemfile` (e.g., using `~>` for pessimistic version constraints).
    *   Keep `Gemfile.lock` checked into version control to ensure consistent dependencies across environments.
*   **Avoid Monkey Patching:** Refrain from modifying core Ruby classes or standard library classes directly (monkey patching). If extending functionality is needed, prefer using modules and mixins (`include`, `extend`, `prepend`) or subclassing. If monkey patching is unavoidable, clearly document the reason and scope.
*   **Use Modules for Namespacing and Mixins:** Organize related classes and methods within modules to prevent naming conflicts. Use mixins (`include`, `extend`) to share behavior between classes (composition over inheritance).
*   **Leverage the Standard Library:** Familiarize yourself with and utilize Ruby's rich standard library (e.g., `Enumerable`, `File`, `Net::HTTP`, `JSON`, `CSV`, `DateTime`) before reaching for external gems for common tasks.
*   **Code Comments:** Write comments to explain *why* something is done, not *what* it does (the code should explain the 'what'). Explain complex logic, assumptions, or workarounds. Use YARD syntax for documenting methods and classes if generating documentation.
