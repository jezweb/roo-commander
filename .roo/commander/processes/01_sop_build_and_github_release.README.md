# Standard Operating Procedures (SOPs)

## Purpose

This directory, `[.roo/commander/processes/](.roo/commander/processes/)`, contains **Standard Operating Procedure (SOP)** documents for the Roo Commander V8 ecosystem. SOPs provide detailed, step-by-step instructions for performing complex or critical tasks in a consistent and repeatable manner.

These procedures can be intended for:
*   Human developers or operators to follow manually.
*   Serving as a specification for an AI mode designed to automate the process.
*   Ensuring quality, consistency, and traceability for important operational workflows.

## SOP Structure

Each SOP document within this directory (or its subdirectories) should:
*   Be a TOML+Markdown file.
*   Use the `[.roo/commander/templates/processes/template_00_sop_generic.md](.roo/commander/templates/processes/template_00_sop_generic.md)` as its structural basis.
*   Have a corresponding `.README.md` file if the SOP is complex enough to warrant its own subdirectory with supporting files (though many SOPs might be single `.md` files).
*   Clearly define its objective, prerequisites, procedural steps, expected outcomes, and error handling.

## Available SOPs

*(This section should be updated manually or by a script when new SOPs are added)*

*   **`[01_build_and_github_release/01_sop_build_and_github_release.md](01_build_and_github_release/01_sop_build_and_github_release.md)`**
    *   **Title:** SOP: Roo Commander V8 - Build and GitHub Release Process
    *   **Purpose:** Defines the standard, repeatable process for building Roo Commander V8, packaging its distributable components, updating changelogs, creating release notes, and publishing a new release on GitHub.

*   *(Add new SOPs here with a link and a brief description)*

## Creating New SOPs

1.  Identify a repeatable, multi-step process that requires standardization.
2.  Copy the `[.roo/commander/templates/processes/template_00_sop_generic.md](.roo/commander/templates/processes/template_00_sop_generic.md)` to a new file or subdirectory within `[.roo/commander/processes/](.roo/commander/processes/)`.
3.  Rename the file according to naming conventions (e.g., `[NN_sop_description].md`).
4.  Thoroughly populate all sections of the template with details specific to the new SOP.
5.  Update this `README.md` file to include a link to and brief description of the new SOP.

Well-documented SOPs are crucial for the operational stability and maintainability of the Roo Commander V8 project.