+++
id = "AGENT-MCP-MANAGER-RULE-INIT-V1"
title = "MCP Manager Agent: Rule - Initial Request Processing"
context_type = "rules"
scope = "Initial user interaction handling for MCP installation and management and management"
target_audience = ["agent-mcp-manager"]
granularity = "procedure"
status = "active"
last_updated = "2025-05-05" # Updated date
tags = ["rules", "workflow", "initialization", "mcp", "install", "manage", "update", "agent-mcp-manager"]
related_context = [
    ".ruru/modes/agent-mcp-manager/agent-mcp-manager.mode.md",
    # Specific KB Action files
    ".ruru/modes/agent-mcp-manager/kb/install-vertex-ai.md",
    ".ruru/modes/agent-mcp-manager/kb/install-unsplash.md",
    ".ruru/modes/agent-mcp-manager/kb/install-custom-url.md",
    ".ruru/modes/agent-mcp-manager/kb/remove-mcp-server.md", # Added remove KB
    ".ruru/modes/agent-mcp-manager/kb/prompts/01-initial-options-prompt.md" # Added prompt KB
    ]
template_schema_doc = ".ruru/templates/toml-md/16_ai_rule.README.md"
relevance = "Critical: Defines the entry point for the MCP installer mode"
readme_url = "" # Optional URL to the MCP server's primary README/documentation
+++

# Rule: Initial Request Processing (MCP Manager Agent)

This rule governs how you handle the initial interaction when activated, presenting MCP server installation and management options and routing to specific KB procedures.

**Procedure:**

1.  **Present Options:** Load the standard initial prompt content from the KB file `.ruru/modes/agent-mcp-manager/kb/prompts/01-initial-options-prompt.md`. Present this prompt to the user using the `ask_followup_question` tool.
2.  **Await User Selection:** Wait for the user's choice.
3.  **Handle User Selection:**
    *   Once the user selects an option:
        1.  Identify the selected option.
        2.  Log the chosen installation path.
        3.  **Execute the detailed procedure defined in the corresponding KB file (adding placeholders for new options) (adding placeholders for new options)**:
            *   Option 1 (Vertex AI): Execute KB `.ruru/modes/agent-mcp-manager/kb/install-vertex-ai.md`.
            *   Option 2 (Unsplash): Execute KB `.ruru/modes/agent-mcp-manager/kb/install-unsplash.md`. (Currently a placeholder).
            *   Option 3 (Custom URL): Execute KB `.ruru/modes/agent-mcp-manager/kb/install-custom-url.md`.
            *   Option 4 (Other Servers):
                1. Use the `list_files` tool on path `.ruru/modes/agent-mcp-manager/kb/` to get all `install-*.md` files.
                2. Parse the list, extracting server names (e.g., "atlassian" from "install-atlassian.md"). Exclude "install-custom-url.md" if present as it's handled separately.
                3. Construct a *new* question for the `ask_followup_question` tool:
                   *   Question: "Which specific MCP server would you like to install?"
                   *   Follow-up suggestions: Dynamically generate suggestions like "Install Atlassian Server", "Install Brave Search Server", etc., based on the parsed filenames. Include a "Cancel" option.
                4. Await user selection from this second prompt.
                5. If user selects a server: Map the selection back to the corresponding KB filename (e.g., "Install Atlassian Server" -> `install-atlassian.md`). Execute the selected KB file: `.ruru/modes/agent-mcp-manager/kb/[filename]`.
                6. If user selects Cancel: Report cancellation to the coordinator (`roo-commander`) using the `attempt_completion` tool. **Stop.**
            *   Option 5 (Remove): Execute KB `.ruru/modes/agent-mcp-manager/kb/remove-mcp-server.md`.
            *   Option 6 (Update): Execute KB `.ruru/modes/agent-mcp-manager/kb/check-updates.md`. (Placeholder).
            *   Option 7 (Cancel): Report cancellation to the coordinator (`roo-commander`) using the `attempt_completion` tool. **Stop.**
        4.  Follow the steps within that specific KB procedure. **End this initialization workflow** upon completion or cancellation of the KB procedure.

**Key Objective:** To provide clear installation and management options and route the user interaction to the precise, detailed procedure stored in the relevant Knowledge Base file for the selected MCP server or management task.
