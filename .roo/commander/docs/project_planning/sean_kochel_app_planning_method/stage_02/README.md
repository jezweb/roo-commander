+++
# --- Basic Metadata ---
id = "DIR-README-Stage02DesignUX-20240516"
title = "Index/README: Stage 2 - Design & User Experience"
context_type = "directory_index"
scope = "Provides an overview and index for Stage 2: Design & User Experience documents of the Sean Kochel AI-Assisted App Planning Method. This stage focuses on defining the app's visual identity, user interaction patterns, and detailed screen specifications."
target_audience = ["all"]
granularity = "index"
status = "active"
last_updated = "20240516"
version = "1.0"
tags = ["readme", "index", "documentation", "stage-02", "design", "user-experience", "ui-ux", "app-planning"]
related_context = [
    "[../README.md](./../README.md)" # Link to parent README
]
template_schema_doc = ".roo/commander/templates/documentation/template_00_directory_readme.README.md"
# --- Directory Specific Fields (Optional) ---
primary_artifact_type_contained = "Design & UI/UX Specification Documents"
# key_subdirectories_summary = []
+++

# README: Stage 2 - Design & User Experience

## 1. Purpose of this Directory

This directory, `./` (relative to `.roo/commander/docs/project_planning/sean_kochel_app_planning_method/stage_02/`), contains all documents related to **Stage 2: Design & User Experience** of the Sean Kochel AI-Assisted App Planning Method. The goal of this stage is to take the architectural and feature definitions from Stage 1 and translate them into a comprehensive vision for the app's look, feel, and interaction. This involves defining design principles, creating a style guide, and specifying the UI/UX for each screen and its states. This stage corresponds to the AI prompt for "Features" which in Sean's revised method, focuses on design.

## 2. Overview of Contents / Key Files & Subdirectories

The key documents produced during this stage are:

*   **[./01_comprehensive_design_brief_style_guide.md](./01_comprehensive_design_brief_style_guide.md)**: Establishes the overall design vision, key design principles, target audience personas (from a design perspective), brand identity, color palette, typography, iconography, and general UX guidelines.
*   **[./02_screen_states_ui_ux_specification_per_feature_screen.md](./02_screen_states_ui_ux_specification_per_feature_screen.md)**: Provides a detailed breakdown of each screen within each MVP feature. For every screen, it describes its purpose, various states (e.g., empty, loading, error, populated), UI elements present in each state, and the UX flow associated with interactions. This document heavily references the Design Brief & Style Guide for visual consistency.

## 3. Usage Notes / How to Contribute (If Applicable)

*   The "Comprehensive Design Brief & Style Guide" should be established first as it will guide the creation of the more detailed "Screen States & UI/UX Specification."
*   Visual mockups/wireframes (e.g., from Figma) are essential companions to the "Screen States & UI/UX Specification" document, though not directly stored here as Markdown.

## 4. Related Documents

*   Parent Method Overview: [../README.md](./../README.md)
*   Stage 1 Documents: [../stage_01/README.md](../stage_01/README.md) (as the design is based on the defined architecture and features)

## 5. Maintenance

This `README.md` should be updated if the list or purpose of the Stage 2 documents changes.