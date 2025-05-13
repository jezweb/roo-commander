# Roo Commander Version Naming Convention

## Introduction

This document outlines the versioning scheme and naming convention adopted for releases of the Roo Commander mode, starting from version 7 (v7). It combines standard Semantic Versioning (SemVer) with a thematic codename for major releases.

## Core Versioning: Semantic Versioning (SemVer)

Roo Commander follows the standard [Semantic Versioning 2.0.0](https://semver.org/) specification. Versions are structured as `MAJOR.MINOR.PATCH`:

*   **MAJOR (X):** Incremented for incompatible API changes or significant feature overhauls. Each MAJOR version receives a unique codename.
*   **MINOR (Y):** Incremented for adding functionality in a backward-compatible manner.
*   **PATCH (Z):** Incremented for making backward-compatible bug fixes.

## Major Release Codenames: Australian Fauna

To enhance memorability and reinforce the unique identity of Roo Commander, each **MAJOR** release (starting from v7) is assigned a codename based on **Australian Marsupials and notable Fauna**.

This codename is *only* associated with the MAJOR version number (e.g., v7, v8).

### Rationale

The Australian Fauna theme was chosen for several reasons:

*   **Thematic Relevance:** Directly connects with the "Roo" in Roo Commander, strengthening the project's branding.
*   **Memorability:** Distinct animal names make specific major versions easier to recall and discuss than just numbers.
*   **Personality:** Adds a unique and engaging character to the release cycle.
*   **Longevity:** Australia's diverse fauna provides a rich source of names for future releases.

### Inaugural Release (v7)

The first version to adopt this new convention is:

**v7: Wallaby**

## Version Format Summary

*   **Major Releases:** `vX.0.0: Codename` (e.g., `v7.0.0: Wallaby`, `v8.0.0: Wombat`)
    *   When referring generally to the major version line, `vX: Codename` (e.g., "v7: Wallaby") is acceptable.
*   **Minor Releases:** `vX.Y.0` (e.g., `v7.1.0`, `v7.2.0`)
    *   These releases introduce new features within the `vX` major version line and *do not* get a new codename. They belong to the major version's codename (e.g., `v7.1.0` is part of the "Wallaby" series).
*   **Patch Releases:** `vX.Y.Z` (e.g., `v7.1.1`, `v7.1.2`)
    *   These releases provide bug fixes for a specific minor version and *do not* get a new codename. They belong to the major version's codename (e.g., `v7.1.1` is part of the "Wallaby" series).

## Pre-releases (Optional)

Pre-release versions (e.g., alpha, beta, release candidates) may be tagged using standard SemVer pre-release identifiers appended to the version number.

*   **Format:** `vX.Y.Z-[identifier]` (e.g., `v7.1.0-beta.1`, `v8.0.0-alpha.3`)
*   **Codename Inclusion (Major Pre-releases):** For pre-releases of a *new major* version, the codename *may* be included for clarity, often with a matching suffix.
    *   Example: `v8.0.0-alpha.1: Wombat-alpha.1`

## Future Releases

Subsequent major releases (v8, v9, etc.) will continue this pattern, drawing names sequentially or thematically from Australian wildlife. The version number (`vX.Y.Z`) will always be the primary identifier, with the codename serving as a memorable alias for the major version line.

## Summary

This versioning scheme aims to provide both the precision of Semantic Versioning and the memorability of codenames for major releases. Use the full `vX.Y.Z` for specific minor/patch versions and `vX: Codename` or `vX.0.0: Codename` when referring to major releases.
