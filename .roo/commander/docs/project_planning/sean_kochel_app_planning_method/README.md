+++
# --- Basic Metadata ---
id = "DIR-README-SeanKochelAppPlanningMethod-20240516"
title = "Index/README: Sean Kochel's AI-Assisted App Planning Method Documentation"
context_type = "directory_index"
scope = "Provides an overview and index for the documentation detailing Sean Kochel's AI-Assisted App Planning Method, a three-stage process for comprehensive application development planning."
target_audience = ["all"]
granularity = "index"
status = "active"
last_updated = "20240516"
version = "1.0"
tags = ["readme", "index", "documentation", "app-planning", "ai-assisted-planning", "sean-kochel-method"]
related_context = [
    # "[Link to the original video if available, or a high-level project overview]"
]
template_schema_doc = ".roo/commander/templates/documentation/template_00_directory_readme.README.md"
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "App Planning Process Documentation"
key_subdirectories_summary = [
    "Stage 1: Architecture & Core Definition",
    "Stage 2: Design & User Experience",
    "Stage 3: Detailed Implementation Plan"
    ]
+++

# README: Sean Kochel's AI-Assisted App Planning Method Documentation

## 1. Purpose of this Directory

This directory, `./` (relative to `.roo/commander/docs/project_planning/sean_kochel_app_planning_method/`), houses all documentation related to the comprehensive AI-assisted application planning method demonstrated and discussed by Sean Kochel. This method breaks down the planning process into three distinct stages, each producing specific, detailed artifacts to guide development.

## 2. Overview of Contents / Key Files & Subdirectories

This directory is organized into three main subdirectories, each representing a stage in the planning process:

*   **[./stage_01/](./stage_01/)**: **Stage 1 - Architecture & Core Definition**
    *   Focuses on defining the project's foundational elements, core features, technical architecture, and identifying key questions.
    *   See [./stage_01/README.md](./stage_01/README.md) for a detailed list of documents.
*   **[./stage_02/](./stage_02/)**: **Stage 2 - Design & User Experience**
    *   Focuses on translating architectural decisions into a comprehensive design brief, style guide, and detailed screen specifications for UI/UX.
    *   See [./stage_02/README.md](./stage_02/README.md) for a detailed list of documents.
*   **[./stage_03/](./stage_03/)**: **Stage 3 - Detailed Implementation Plan**
    *   Focuses on creating granular technical specifications, file structures, and implementation guides for each feature, bridging the gap between planning and coding.
    *   See [./stage_03/README.md](./stage_03/README.md) for a detailed list of documents.

## 3. Usage Notes / How to Contribute (If Applicable)

*   These documents are intended to be used sequentially, with outputs from earlier stages informing later ones.
*   When adapting this method for a new project, start by creating instances of the documents in `stage_01`, followed by `stage_02`, and then `stage_03`.
*   The templates used (`template_00_directory_readme.md` and `template_02_rich_document.md`) are located in `[.roo/commander/templates/documentation/](.roo/commander/templates/documentation/)`.

## 4. Related Documents

*   This planning method is based on the principles discussed in Sean Kochel's video demonstrations on AI-assisted vibe planning.

## 5. Maintenance

This `README.md` and the stage-specific `README.md` files should be updated if the overall structure of this planning method or the key documents within each stage are significantly altered.