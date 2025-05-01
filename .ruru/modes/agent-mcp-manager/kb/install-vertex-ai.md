+++
id = "KB-MCP-VERTEX-INSTALL-V2"
title = "Installing and Configuring the Vertex AI MCP Server (NPM Method)"
context_type = "knowledge_base"
scope = "Instructions for setting up the Vertex AI MCP server"
target_audience = ["prime-coordinator", "developer"]
granularity = "procedure"
status = "active"
last_updated = "2025-04-27" # Use current date
tags = ["kb", "mcp", "vertex-ai", "installation", "configuration", "npm", "mcp.json"]
related_context = [
    ".roo/mcp.json",
    ".roo/rules/10-vertex-mcp-usage-guideline.md"
    ]
template_schema_doc = ".ruru/templates/toml-md/15_kb_article.README.md"
relevance = "High: Core setup for Vertex AI integration"
+++

# Installing and Configuring the Vertex AI MCP Server (NPM Method)

This document outlines the simplified process for installing and configuring the `vertex-ai-mcp-server` using NPM and the central `.roo/mcp.json` configuration file. This method replaces older approaches involving repository cloning and local `.env` files.

## 1. Installation via NPM

Install the server as a development dependency in your Roo Commander project:

```bash
npm install vertex-ai-mcp-server --save-dev
```

This command downloads and installs the necessary package into your `node_modules` directory.

## 2. Configuration via `.roo/mcp.json`

All configuration for the `vertex-ai-mcp-server` is now managed centrally within the main Roo Commander MCP configuration file: `.roo/mcp.json`.

Locate or add the `vertex-ai-mcp-server` entry within the `servers` object in `.roo/mcp.json`. Configure it as follows, ensuring you replace placeholder values with your actual Google Cloud Platform (GCP) project details and credentials path.

**IMPORTANT:** The following JSON structure is **mandatory**. You **MUST** ensure the configuration entry for `vertex-ai-mcp-server` in `.roo/mcp.json` exactly matches this structure, including all specified keys within the `env` object. If an entry already exists, update it to conform to this example, replacing only the placeholder values (like `YOUR_PROJECT_ID`, `YOUR_GCP_REGION`, `/path/to/your/gcp_credentials.json`) with your actual details.

```json
// Example within .roo/mcp.json
{
  "mcpServers": {
    "vertex-ai-mcp-server": {
      "command": "node",
      "args": [
      ],
      "env": {
        // --- Required GCP/Vertex Config ---
        // Replace with your actual GCP Project ID
        "GOOGLE_CLOUD_PROJECT": "YOUR_PROJECT_ID", 
        // Replace with the GCP region for your Vertex AI resources (e.g., "us-central1")
        "GOOGLE_CLOUD_LOCATION": "YOUR_GCP_REGION", 
        // Replace with the absolute or relative path to your GCP service account key file
        "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/your/gcp_credentials.json",
        
        // --- Vertex AI Model Config ---
        // Specify the desired Vertex AI model ID 
        "VERTEX_MODEL_ID": "gemini-2.5-pro-exp-03-25", // Or your preferred model like gemini-1.5-pro-preview-0409 etc.
        // Controls randomness (0.0 = deterministic)
        "AI_TEMPERATURE": "0.0",
        // Enable/disable streaming responses
        "AI_USE_STREAMING": "true",
        // Maximum tokens for the model's response
        "AI_MAX_OUTPUT_TOKENS": "65535", // Adjust based on model limits/needs
        
        // --- Optional Retry Config ---
        // Number of times to retry failed API calls
        "AI_MAX_RETRIES": "3",
        // Initial delay between retries in milliseconds
        "AI_RETRY_DELAY_MS": "1000"
      },
      // Set to true to temporarily disable this server without removing the config
      "disabled": false, 
      // List tools allowed to run without explicit user approval per call (use with caution)
      "alwaysAllow": [ 
        "answer_query_websearch",
        "answer_query_direct",
        "explain_topic_with_docs",
        "get_doc_snippets",
        "generate_project_guidelines",
        "read_file_content",
        "read_multiple_files_content",
        "write_file_content",
        "edit_file_content",
        "create_directory",
        "list_directory_contents",
        "get_directory_tree",
        "move_file_or_directory",
        "search_filesystem",
        "get_filesystem_info",
        "save_generate_project_guidelines",
        "save_doc_snippet",
        "save_topic_explanation",
        "save_answer_query_direct",
        "save_answer_query_websearch"
       ], 
      // Maximum time in seconds to wait for the server to respond to a tool request
      "timeout": 3600 
    }
    // ... other server configurations ...
  }
}
```

**Key Configuration Points:**

*   **`args`**: Ensure the path points correctly to `node_modules/vertex-ai-mcp-server/build/index.js`.
*   **`env`**:
    *   Provide your valid GCP `PROJECT_ID`, `LOCATION` (region), and the path to your `GOOGLE_APPLICATION_CREDENTIALS` JSON key file. **These are essential.**
    *   Adjust `VERTEX_AI_MODEL_ID`, `TEMPERATURE`, `MAX_OUTPUT_TOKENS`, etc., based on your specific needs and the models available in your GCP project/region.
    *   Retry settings (`MAX_RETRIES`, `RETRY_DELAY_MS`) can be adjusted for network reliability.
*   **`disabled`**: Set to `false` to enable the server.
*   **`alwaysAllow`**: Carefully consider which tools should bypass per-call user confirmation.
*   **`timeout`**: Adjust if you expect very long-running tool operations.

## 3. Activating

To activate the server:

1.  Ensure the configuration in `.roo/mcp.json` is correct and `disabled` is set to `false`.
2.  **Restart or Reload Roo Commander:** If Roo Commander is already running, you may need to restart it or trigger a configuration reload (if available) for it to pick up the changes in `.roo/mcp.json` and launch the server process.
