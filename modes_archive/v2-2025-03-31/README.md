# Roo Mode Templates

This directory contains the canonical JSON template definitions for individual Roo modes.

## Purpose

- These files serve as the master source or "job descriptions" for each available Roo mode.
- They define the core configuration, role description, and custom instructions for each specialized persona Roo can adopt.

## Usage

- **These files are NOT directly loaded by the system at runtime.** They are intended as reference templates.
- Users typically configure their active modes by copying definitions from the `mode_collections/` directory (which contain pre-packaged sets of these templates for convenience) or individual files from this directory into their specific runtime configuration file (e.g., `context/cline_custom_modes.json` or a global settings file).

See the main project `README.md` for more details on configuring and using Roo modes.