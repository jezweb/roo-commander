+++
# --- Basic Metadata ---
id = "DIR-README-Stage01Architecture-20240516"
title = "Index/README: Stage 1 - Architecture & Core Definition"
context_type = "directory_index"
scope = "Provides an overview and index for Stage 1: Architecture & Core Definition documents of the Sean Kochel AI-Assisted App Planning Method. This stage focuses on defining the project's foundation, core features, and technical architecture."
target_audience = ["all"]
granularity = "index"
status = "active"
last_updated = "20240516"
version = "1.0"
tags = ["readme", "index", "documentation", "stage-01", "architecture", "core-definition", "app-planning"]
related_context = [
    "[../README.md](./../README.md)" # Link to parent README
]
template_schema_doc = ".roo/commander/templates/documentation/template_00_directory_readme.README.md"
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "Architectural & Foundational Planning Documents"
# key_subdirectories_summary = [] # No further subdirectories in this example
+++

# README: Stage 1 - Architecture & Core Definition

## 1. Purpose of this Directory

This directory, `./` (relative to `.roo/commander/docs/project_planning/sean_kochel_app_planning_method/stage_01/`), contains all documents related to **Stage 1: Architecture & Core Definition** of the Sean Kochel AI-Assisted App Planning Method. The primary goal of this stage is to establish a clear understanding of what the application is, who it's for, its core features, the underlying technical architecture, and to identify critical questions and considerations early in the process. This stage heavily utilizes AI prompting (e.g., Claude's "Architect" prompt from the video).

## 2. Overview of Contents / Key Files & Subdirectories

The key documents produced during this stage are:

*   **[./01_project_definition.md](./01_project_definition.md)**: Defines the core "What, Who, Why, How" of the application.
*   **[./02_mvp_flow.md](./02_mvp_flow.md)**: Outlines the step-by-step core user journey for the Minimum Viable Product.
*   **[./03_mvp_feature_list_requirements.md](./03_mvp_feature_list_requirements.md)**: Lists all MVP features with their summaries, core requirements, and involved technology.
*   **[./04_post_mvp_feature_list_requirements.md](./04_post_mvp_feature_list_requirements.md)**: Outlines features planned for development after the MVP launch.
*   **[./05_system_architecture_diagram.md](./05_system_architecture_diagram.md)**: Describes the system's layers, components, interactions, and includes a (textual representation of the) visual architecture diagram.
*   **[./06_clarifying_questions_architectural_consideration_log.md](./06_clarifying_questions_architectural_consideration_log.md)**: A living document tracking questions and key architectural decisions to be made or that have been made.

## 3. Usage Notes / How to Contribute (If Applicable)

*   These documents should be completed sequentially as much as possible, as information from earlier documents (e.g., Project Definition) feeds into later ones (e.g., MVP Features).
*   The "Clarifying Questions & Architectural Considerations Log" should be actively updated throughout this stage.

## 4. Related Documents

*   Parent Method Overview: [../README.md](./../README.md)

## 5. Maintenance

This `README.md` should be updated if the list or purpose of the Stage 1 documents changes.