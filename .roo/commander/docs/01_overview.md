# Roo Commander V8.1: Lean & Efficient AI Orchestration

## Purpose & Vision

Roo Commander V8.1 is a streamlined, intelligent orchestration system designed to manage complex workflows by leveraging specialized AI modes within the Roo Code environment. Our vision is to provide a powerful yet intuitive system that assists users in achieving complex goals by intelligently coordinating a team of specialized AI agents, while prioritizing token efficiency and clarity.

This iteration focuses on:
*   **Lean Core:** Minimizing overhead and unnecessary abstractions.
*   **Token Efficiency:** Optimizing context provided to the LLM.
*   **Clarity & Maintainability:** Ensuring the system is easy to understand, extend, and maintain.
*   **Native Roo Code Integration:** Leveraging Roo Code's built-in features for custom modes and custom instructions.

## Core Architectural Concepts

Roo Commander operates on a hierarchical "Orchestrator + Manager + Squad" model, with Markdown-Driven Task Management (MDTM) as the communication backbone and a layered approach to Knowledge Bases (KBs).

### Orchestrator (`roo-commander`)
The primary user-facing AI. It initiates sessions, understands high-level user goals, and delegates to the appropriate Manager mode. It manages overall session context and traceability.

### Manager Modes (e.g., `project-manager`)
Domain-specific orchestrators. They receive a high-level objective from the Orchestrator and manage a "squad" of specialist modes to achieve it. They break down complex goals into granular MDTM sub-tasks.

### Squad Modes (e.g., `task-planner`, `task-executor`)
Specialist worker AIs that perform specific, focused tasks assigned by their Manager mode, typically producing a defined artifact.

### MDTM (Markdown-Driven Task Management)
The standardized, file-based system for defining, delegating, executing, and tracking units of work across all levels of the system. MDTM tasks are TOML+Markdown files that serve as both "work order" and "progress report."

### Layered Knowledge Bases (KBs)
A strategic approach to providing context to AI modes, optimizing for relevance and token efficiency.
