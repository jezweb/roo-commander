# Available Manager Workflows Summary

## Purpose

This document serves as a reference for `roo-commander` to identify available "Manager" modes and the primary user intents or workflow descriptions that should trigger delegation to them.

When `roo-commander` processes user input from its initial options prompt (specifically the "Start New Design / Workflow Session..." category) or interprets a general user goal, it consults this summary to determine which Manager mode is appropriate for the requested task.

## Manager Mode Mappings

The following list maps user-facing workflow descriptions (as might be presented in a menu) to their corresponding Manager mode slugs.

*   **Workflow Description:** "📊 Data Product Design PoC"
    *   **Manager Mode Slug:** `manager-data-product`
    *   **Brief Domain:** Orchestrates the end-to-end design process for a data product Proof of Concept, managing a squad of specialist data product design modes.
    *   **Typical High-Level Goal for Manager:** "Design a complete Proof of Concept plan for a new data product based on initial user ideas."

*   **Workflow Description:** "🌐 Web Application Development"
    *   **Manager Mode Slug:** `manager-web-application` (Hypothetical - Example for future expansion)
    *   **Brief Domain:** Manages the full lifecycle of developing a new web application, coordinating frontend, backend, database, and testing squads.
    *   **Typical High-Level Goal for Manager:** "Develop and deploy version 1.0 of the [Web App Name] application."

*   **Workflow Description:** "☁️ Cloud Infrastructure Setup"
    *   **Manager Mode Slug:** `manager-cloud-infrastructure` (Hypothetical - Example for future expansion)
    *   **Brief Domain:** Oversees the design, provisioning, and configuration of cloud infrastructure resources.
    *   **Typical High-Level Goal for Manager:** "Provision and configure the necessary cloud infrastructure for Project X as per architectural design Y."

---
**(Internal Note for Roo Commander: When presenting options to the user for starting a new managed workflow, use the "Workflow Description" text. When delegating, use the "Manager Mode Slug".)**

**(Maintenance Note: This file MUST be updated whenever a new Manager mode is added to the system and `roo-commander` needs to be able_to delegate to it.)**