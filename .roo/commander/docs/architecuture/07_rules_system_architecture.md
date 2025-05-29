+++
# --- Basic Metadata ---
id = "ARCHITECTURE-RULES-SYSTEM-V1"
title = "Architecture: Rules System - Guiding AI Behavior"
context_type = "architectural_document"
scope = "Explains the architecture and function of the rules system in Roo Commander, covering Workspace Rules and Mode-Specific Rules, and their role in defining AI mode operational logic and interaction with Knowledge Bases."
target_audience = ["developers", "system_architects"]
granularity = "detailed_system_component_description"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "1.0"
tags = ["architecture", "rules-system", "mode-specific-rules", "workspace-rules", "ai-behavior", "governance"]
related_context = [
    ".roo/commander/docs/architecture/README.md", # Parent index
    ".roo/commander/docs/standards/01-naming-conventions.md", # For rule file naming
    ".roo/commander/docs/standards/02-toml-md-document-format.md", # Rules use this format
    ".roo/commander/templates/rules/workspace/template_00_workspace_rule.md",
    ".roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.md",
    ".roo/commander/templates/rules/mode_specific/manager/template_01_manager_squad_orchestration_rule.md",
    ".roo/commander/docs/architecture/06_knowledge_base_philosophy.md" # Relationship between rules and KBs
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "Semi-Annually"
+++

# Architecture: Rules System - Guiding AI Behavior

## 1. Introduction

The Roo Commander system employs a hierarchical rules system to define and govern the behavior of its AI modes. This system is fundamental to ensuring consistent, predictable, and standardized operations across the workspace. Rules provide the primary operational instructions and "instant context" that AI modes use when activated, complementing their core `roleDefinition` (from `.mode.md`) and their more extensive Knowledge Bases (KBs).

This document details the architecture of this rules system, covering Workspace Rules and Mode-Specific Rules. All paths referenced herein **MUST** be workspace-root-relative (starting with `.roo/`).

## 2. Purpose of the Rules System

*   **Define Core Operational Logic:** Provide explicit instructions on how modes should perform key tasks and make decisions.
*   **Ensure Consistency:** Standardize common behaviors and interactions across different modes or within a mode's repeated operations.
*   **Enforce Workspace Standards:** Translate high-level standards (e.g., for MDTM usage, session management, file formats) into actionable directives for AI modes.
*   **Facilitate Modularity:** Allow for specific behaviors to be defined for individual modes without cluttering their core `.mode.md` definition.
*   **Guide KB Usage:** Instruct modes on when and how to consult their Knowledge Bases for more detailed information or procedures.

## 3. Types of Rules

The Roo Commander rules system comprises two main categories:

### 3.1. Workspace Rules
*   **Location:** `[.roo/rules/](.roo/rules/)`
*   **Scope:** These rules apply **globally** to all AI modes operating within the Roo Commander workspace.
*   **Purpose:** To define foundational standards and protocols that ensure interoperability and consistency across the entire system.
*   **Examples:**
    *   `[.roo/rules/01-standard-toml-md-format.md](.roo/rules/01-standard-toml-md-format.md)`: Defines the mandatory TOML+Markdown structure for all key documents.
    *   `[.roo/rules/02-mdtm-task-standard.md](.roo/rules/02-mdtm-task-standard.md)`: Governs how all modes create, use, and update MDTM task files.
    *   `[.roo/rules/03-session-management-standard.md](.roo/rules/03-session-management-standard.md)`: Defines protocols for session lifecycle and artifact management.
*   **Loading by Roo Code (Conceptual):** Workspace rules are expected to be loaded by the Roo Code platform as part of the global context or system prompt for all modes.

### 3.2. Mode-Specific Rules
*   **Location:** `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)` (e.g., `[.roo/rules-roo-commander/](.roo/rules-roo-commander/)`, `[.roo/rules-manager-data-product/](.roo/rules-manager-data-product/)`). Each mode that requires specific instructions beyond its `.mode.md` `roleDefinition` **MUST** have such a directory.
*   **Scope:** These rules apply **only to the specific mode** identified by `[mode_slug]`.
*   **Purpose:** To provide detailed operational instructions, core principles, and specialized procedures tailored to that mode's unique role and responsibilities. These form the primary "custom instructions" loaded by Roo Code for that mode.
*   **Key Standard Files within `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)`:**
    *   **`00-[mode_slug]-core-principles.md` (Mandatory for modes with rules):**
        *   **Template:** `[.roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.md](.roo/commander/templates/rules/mode_specific/common/template_00_mode_core_principles_rule.md)`
        *   **Content:** Defines the mode's fundamental operational tenets AND, crucially, **how it consults and utilizes its own Knowledge Base (KB)**. This rule acts as the bridge between the mode's general instructions and its detailed knowledge repository.
    *   **`01-[manager_slug]-squad-orchestration.md` (Mandatory for Manager modes):**
        *   **Template:** `[.roo/commander/templates/rules/mode_specific/manager/template_01_manager_squad_orchestration_rule.md](.roo/commander/templates/rules/mode_specific/manager/template_01_manager_squad_orchestration_rule.md)`
        *   **Content:** Defines the generic procedure for how a Manager mode orchestrates its specialist squad using MDTM sub-tasks, relying on its KB for the specific sequence and details for its domain.
    *   **Other Optional Rules:** Modes can have additional numbered rule files (e.g., `02-[mode_slug]-specific-behavior.md`) for other distinct operational procedures, using `[.roo/commander/templates/rules/mode_specific/common/template_00_mode_specific_rule.md](.roo/commander/templates/rules/mode_specific/common/template_00_mode_specific_rule.md)`.
*   **Loading by Roo Code (Conceptual):** When a specific mode (e.g., `manager-data-product`) is activated, Roo Code loads all instruction files from its corresponding `[.roo/rules-manager-data-product/](.roo/rules-manager-data-product/)` directory. These are typically appended to the system prompt after the mode's `roleDefinition` (from `.mode.md`) and any global workspace rules.

## 4. Interaction between Rules, `.mode.md`, and KBs

1.  **`.mode.md` (`roleDefinition`):** Provides the concise, core identity of the mode to the Roo Code platform. It's the "who I am and what I generally do."
2.  **Workspace Rules (`[.roo/rules/](.roo/rules/)/`):** Provide global operational constraints and standards all modes must follow (e.g., "all MDTM tasks MUST have an ID").
3.  **Mode-Specific Rules (`[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)`):** Provide the detailed "how I operate" instructions for a specific mode.
    *   The `00-[mode_slug]-core-principles.md` is foundational, establishing core tenets and the critical link: "When you need to know *how* to do [complex step X mentioned in these rules], consult your KB procedure `kb/procedures/procedure_for_x.md`."
4.  **Knowledge Base (`[.roo/commander/modes/[mode_slug]/kb/](.roo/commander/modes/[mode_slug]/kb/)`):** Contains the detailed, domain-specific knowledge, procedures, skills, wisdom, references, and examples that the mode's rules will direct it to use. The KB is the "library" the mode consults when its rules tell it to.

**Analogy:**
*   `.mode.md` `roleDefinition`: Your job title and a one-sentence job description.
*   Workspace Rules: Company-wide policies everyone must follow.
*   Mode-Specific Rules: Your personal detailed job manual and key operational checklists.
*   Knowledge Base: The technical library, best practice guides, and case studies you refer to when your job manual tells you to look up specific information to complete a step.

## 5. Benefits of this Rules Architecture

*   **Clarity and Separation of Concerns:** Different types of instructions are housed in appropriate locations.
*   **Maintainability:**
    *   Global standards can be updated in one place (`[.roo/rules/](.roo/rules/)`).
    *   Specific mode behavior can be refined in its `[.roo/rules-[mode_slug]/](.roo/rules-[mode_slug]/)` directory without altering its core `.mode.md` or affecting other modes.
    *   Deep domain knowledge can be updated in the KB without changing the rules that *point* to that knowledge.
*   **Scalability:** New modes can be added with their own specific rules without bloating a central instruction set.
*   **AI Readability:** Provides structured, file-based instructions that are more easily processed by AI than monolithic prompts.
*   **Reduced Prompt Length in `.mode.md`:** The `.mode.md` `roleDefinition` remains concise for Roo Code's initial understanding, while detailed instructions are loaded from rule files.

This rules system provides a robust framework for guiding AI mode behavior in a structured, maintainable, and scalable manner within the Roo Commander ecosystem.