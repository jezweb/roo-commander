+++
id = "KB-UTIL-WORKFLOW-MANAGER-README"
title = "Knowledge Base README: util-workflow-manager"
context_type = "knowledge_base_readme"
scope = "Index and overview of the util-workflow-manager mode's knowledge base"
target_audience = ["util-workflow-manager", "coordinators", "developers"]
tags = ["workflow", "manager", "kb", "readme", "index"]
+++

# Knowledge Base: util-workflow-manager

This README provides an overview and index for the knowledge base (KB) files associated with the `util-workflow-manager` mode.

## Overview

The `util-workflow-manager` mode is a utility responsible for managing workflow definitions located within the `.ruru/workflows/` directory. Its primary function is to perform Create, Read, Update, and Delete (CRUD) operations on workflow structures. These structures consist of a main directory (`WF-[NAME]-V[VERSION]/`), a `README.md` defining the overall workflow, and numbered step files (`NN_description.md`), all adhering to the standard TOML+MD format.

The knowledge base documents provide detailed information on the mode's functionality, setup, and operational procedures.

## KB Files

This directory contains the following knowledge base files:

*   `general-summary.md`
*   `setup-summary.md`

### `general-summary.md`

*   **Summary:** Provides a high-level overview of the `util-workflow-manager` mode, focusing on its role in managing workflow definitions (CRUD operations) within `.ruru/workflows/` using the standard TOML+MD format.
*   **Line Count:** 12

### `setup-summary.md`

*   **Summary:** Outlines prerequisites and core concepts for using the mode, including directory structure (`.ruru/workflows/WF-...`), TOML+MD file format adherence, core file types (`README.md`, `NN_*.md`), relevant templates, and how CRUD operations are performed using file system tools.
*   **Line Count:** 23
