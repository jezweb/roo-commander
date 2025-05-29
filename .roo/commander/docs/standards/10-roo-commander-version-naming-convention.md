+++
# --- Basic Metadata ---
id = "STANDARD-RC-VERSION-NAMING-V2" # Updated version
title = "Standard: Roo Commander Version Naming Convention"
context_type = "standards_document"
scope = "Defines the versioning scheme and naming convention for releases of the Roo Commander mode and system."
target_audience = ["all"] # Developers, Release Managers, Users
granularity = "standard"
status = "active"
created_date = "20250515"
last_updated = "20250515"
version = "2.0" # Incremented due to naming refinement
tags = ["standards", "versioning", "naming-convention", "semantic-versioning", "release-management", "roo-commander"]
related_context = [
    ".roo/commander/templates/releases/template_00_release_notes.md", # Release notes will use this versioning
    ".roo/commander/processes/01_sop_build_and_github_release.md" # SOP for releases will follow this
]
template_schema_doc = ".roo/commander/templates/docs/template_00_standard_document.README.md"
# --- Document Specific Fields ---
# maintainer = "Core Architecture Team"
# review_cycle = "As needed"
+++

# Standard: Roo Commander Version Naming Convention

## 1. Introduction

This document outlines the versioning scheme and naming convention adopted for releases of the **Roo Commander** mode and the overall Roo Commander system, starting from the major version line historically referred to as "V7". It combines standard Semantic Versioning (SemVer) with a thematic codename for major releases.

## 2. Core Versioning: Semantic Versioning (SemVer)

Roo Commander follows the standard [Semantic Versioning 2.0.0](https://semver.org/) specification. Versions are structured as `MAJOR.MINOR.PATCH` (e.g., `8.0.0`, `8.1.0`, `8.1.1`).

*   **MAJOR (X):** Incremented for incompatible API changes (if applicable to a system like this) or significant architectural overhauls and feature sets that represent a new generation of the system. Each MAJOR version receives a unique codename.
*   **MINOR (Y):** Incremented for adding functionality in a backward-compatible manner within a MAJOR version series.
*   **PATCH (Z):** Incremented for making backward-compatible bug fixes or minor improvements within a MINOR version series.

## 3. Major Release Codenames: Australian Fauna

To enhance memorability and reinforce the unique identity of Roo Commander, each **MAJOR** release (e.g., version 7.x.x, version 8.x.x) is assigned a codename based on **Australian Marsupials and notable Fauna**.

This codename is primarily associated with the MAJOR version number.

### 3.1. Rationale for Codenames

*   **Thematic Relevance:** Directly connects with the "Roo" in Roo Commander, strengthening the project's branding.
*   **Memorability:** Distinct animal names make specific major version lines easier to recall and discuss than just numbers.
*   **Personality:** Adds a unique and engaging character to the release cycle.
*   **Longevity:** Australia's diverse fauna provides a rich source of names for future major releases.

### 3.2. Example Major Release (Version 7)

*   **Version:** `7.x.x`
*   **Codename:** `Wallaby`

### 3.3. Example Major Release (Version 8 - Current Focus)

*   **Version:** `8.x.x`
*   **Codename:** `Wombat` (Assuming "Wombat" is the chosen codename for V8, replace if different)

## 4. Version Format Summary

*   **Major Releases (Initial):** `vX.0.0: Codename` (e.g., `v7.0.0: Wallaby`, `v8.0.0: Wombat`)
    *   When referring generally to the major version line, `vX: Codename` (e.g., "v7: Wallaby", "v8: Wombat") is acceptable.
*   **Minor Releases:** `vX.Y.0` (e.g., `v8.1.0`, `v8.2.0`)
    *   These releases introduce new features within the `vX` major version line and *do not* get a new codename. They belong to the major version's codename (e.g., `v8.1.0` is part of the "Wombat" series).
*   **Patch Releases:** `vX.Y.Z` (e.g., `v8.1.1`, `v8.1.2`)
    *   These releases provide bug fixes for a specific minor version and *do not* get a new codename. They belong to the major version's codename (e.g., `v8.1.1` is part of the "Wombat" series).

## 5. Pre-releases (Optional)

Pre-release versions (e.g., alpha, beta, release candidates) may be tagged using standard SemVer pre-release identifiers appended to the version number.

*   **Format:** `vX.Y.Z-[identifier].[number]` (e.g., `v8.1.0-beta.1`, `v9.0.0-alpha.3`)
*   **Codename Inclusion (Major Pre-releases):** For pre-releases of a *new major* version, the codename *may* be included for clarity, often with a matching suffix.
    *   Example: `v9.0.0-alpha.1: [NextCodename]-alpha.1`

## 6. Future Releases

Subsequent major releases (v9, v10, etc.) will continue this pattern, drawing names sequentially or thematically from Australian wildlife. The version number (`vX.Y.Z`) will always be the primary identifier, with the codename serving as a memorable alias for the major version line.

## 7. Application in Documentation and Communication

*   When referring to a specific release, use the full `vX.Y.Z` number.
*   When discussing a major series of releases or its overarching features, `vX: Codename` can be used.
*   The `CHANGELOG.md` and `release_notes.md` files **MUST** use this versioning convention.

This versioning scheme aims to provide both the precision of Semantic Versioning and the memorability of codenames for major releases of Roo Commander.