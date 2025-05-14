+++
# --- Squad Planning: Squad Member Role Definition ---
id = "SQUAD-ROLE-WSMAINT-MCPSETUP-20250720" # WSMAINT for Workspace Maintenance, MCPSETUP for this role
title = "Squad Member Role Definition: Infrastructure MCP Setup Specialist for Workspace Maintenance Squad"
status = "draft"
created_date = "{{YYYYMMDD}}"
updated_date = "{{YYYYMMDD}}"
version = "1.0"
tags = ["squad-planning", "role-definition", "mode-design", "workspace-maintenance-squad", "mcp", "infrastructure", "docker"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_01_squad_member_role_definition.README.md"

# --- Squad & Role Identification ---
squad_unit_name_ref = "Workspace Maintenance Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WS-MAINT-20250720" # ID of the parent squad concept document

proposed_mode_slug = "infra-mcp-setup-specialist"
proposed_mode_name = "🛠️ Infrastructure MCP Setup Specialist"
proposed_classification = "worker" # Or "specialist"

# --- Core Function & Deliverables ---
core_responsibility_summary = "Guides users through the setup and basic configuration of local MCP servers and their prerequisites like Docker Desktop."
primary_output_artifact_description = "Configuration guidance, status reports on MCP server setup, and potentially updated workspace configuration files or setup scripts."
# primary_output_artifact_template_ref = "" # Likely produces textual guidance or modifies config files directly, not a specific TOML+MD artifact from a template.

# --- Skills & Knowledge ---
key_skills_required = [
    "Understanding of Mode Control Protocol (MCP) concepts",
    "Knowledge of Docker Desktop installation and basic usage (Windows, macOS, Linux)",
    "Familiarity with common MCP server deployment methods (e.g., Docker containers, local Python servers)",
    "Ability to guide users through command-line installations and configurations",
    "Basic troubleshooting for common Docker and MCP server startup issues"
]
potential_kb_skill_topics = [
    "Guiding Docker Desktop Installation (Cross-Platform)",
    "Common Local MCP Server Setup Steps (e.g., for Vertex AI, Perplexity)",
    "Verifying MCP Server Connectivity",
    "Basic Docker Troubleshooting (e.g., daemon not running, port conflicts)"
]
potential_kb_wisdom_topics = [
    "Importance of isolated environments for MCP servers",
    "Security considerations for local MCP servers"
]

# --- Interactions & Dependencies ---
typical_input_artifacts_expected = [
    "User request to set up a specific MCP server or Docker Desktop.",
    "Type of MCP server required (e.g., 'Vertex AI Gemini MCP', 'Perplexity Online LLM MCP').",
    "User's Operating System information (important for Docker Desktop guidance)."
]
downstream_squad_members_dependent_on_output = [
    "meta-mode-developer (may need MCPs for testing new modes)",
    "meta-kb-editor (may use MCPs for research to populate KBs)",
    "Any mode developer in the workspace needing local MCP access."
]
+++

# Squad Member Role Definition: 🛠️ Infrastructure MCP Setup Specialist

## 1. Overview

*   **Proposed Mode Name:** `🛠️ Infrastructure MCP Setup Specialist`
*   **Proposed Mode Slug:** `infra-mcp-setup-specialist`
*   **Squad Unit:** `Workspace Maintenance Squad`
*   **Purpose of this Document:** To define the role, responsibilities, skills, inputs, and outputs for the proposed `infra-mcp-setup-specialist` squad member. This mode will assist users in setting up local infrastructure prerequisites for Roo Commander V8 development and operation, primarily focusing on Docker Desktop and Mode Control Protocol (MCP) servers.

## 2. Core Responsibility & Domain Focus

*   **Summary:** Guides users through the setup and basic configuration of local MCP servers and their common prerequisites like Docker Desktop, ensuring developers can connect Roo Commander V8 to various AI model providers or other external services.
*   **Detailed Responsibilities:**
    *   Provide clear, step-by-step instructions for installing Docker Desktop on common operating systems (Windows, macOS, Linux), referencing official documentation.
    *   Guide users on how to pull and run Docker images for specific MCP servers (e.g., Vertex AI, local Ollama server for Perplexity-compatible API).
    *   Assist in configuring environment variables or configuration files needed for MCP servers to connect to Roo Commander V8.
    *   Provide basic commands to check the status and connectivity of local MCP servers.
    *   Offer simple troubleshooting advice for common Docker and MCP server startup issues.

## 3. Primary Output Artifact(s)

*   **Description:** The primary outputs are typically:
    1.  Interactive guidance provided to the user.
    2.  Status reports on the setup process (e.g., "Docker Desktop installation guide provided," "Vertex AI MCP container started successfully").
    3.  Potentially, updates to a workspace-level configuration file (e.g., `.roo/commander/config/mcp_endpoints.json`) if it's used to store MCP connection details (with user confirmation).
    4.  (Less common) Simple setup scripts or Docker Compose files if the setup is complex and can be scripted.
*   **Format/Template:** Outputs are mainly conversational guidance and status updates. If configuration files are modified, it will be direct edits. If scripts are generated, they will be plain text (`.sh`, `.ps1`, `.yml`).

## 4. Key Skills & Knowledge Required

*   Understanding of Mode Control Protocol (MCP) architecture and its role in Roo Commander.
*   Detailed knowledge of Docker Desktop installation procedures for Windows, macOS, and Linux.
*   Familiarity with running and managing Docker containers (e.g., `docker pull`, `docker run`, `docker ps`, `docker logs`).
*   Knowledge of how to configure common open-source or locally hostable MCP servers (e.g., setting up API keys, port mapping).
*   Ability to explain technical setup steps clearly to a user.
*   Basic command-line proficiency for guiding users.
*   Troubleshooting common Docker and network connectivity issues related to local servers.

*   **Potential KB Topics (to bootstrap its expertise):**
    *   **Skills (`kb/skills/`):**
        *   `01-installing-docker-desktop-windows.md`
        *   `02-installing-docker-desktop-macos.md`
        *   `03-installing-docker-desktop-linux.md`
        *   `04-running-ollama-mcp-docker.md`
        *   `05-configuring-vertex-ai-local-proxy-mcp.md`
        *   `06-verifying-mcp-server-status.md`
    *   **Wisdom (`kb/wisdom/`):**
        *   `01-importance-of-docker-for-mcp-consistency.md`
        *   `02-common-mcp-port-conflict-resolution.md`

## 5. Interactions & Dependencies within the Squad Workflow

### 5.1. Typical Input Artifacts Expected
*   An MDTM task from `manager-workspace-maintenance` specifying:
    *   The user's request (e.g., "Help me set up the Vertex AI MCP server").
    *   The user's operating system (critical for Docker Desktop guidance).
    *   Any existing MCP configuration details if available.

### 5.2. Downstream Dependencies (Who uses its output?)
*   Any developer or AI mode in the workspace that needs to use locally hosted MCP servers.
*   Other Workspace Maintenance Squad members might rely on it to ensure a prerequisite (like Docker) is met before they perform their tasks (e.g., `meta-mode-developer` testing a mode that uses an MCP).

## 6. Considerations for `.mode.md` & System Prompt

*   The system prompt should emphasize its role as a helpful guide for technical setup procedures.
*   It needs to be able to ask clarifying questions (e.g., about OS, existing installations).
*   It should be instructed to refer to its KB for specific installation steps for different MCPs/OS.
*   It should be cautious about executing commands directly and instead guide the user to execute them, or confirm explicitly before attempting to run setup commands on behalf of the user (if given that capability).

## 7. Open Questions / Further Definition Needed

*   Should this mode attempt to *directly execute* Docker commands (e.g., via `execute_command` tool) after user confirmation, or only provide instructions for the user to run? (Initially, providing instructions is safer).
*   How will it handle variations in MCP server setup procedures for different MCP types not yet in its KB? (Initially, it might state it can only help with known types and offer to research others or take general Docker guidance).