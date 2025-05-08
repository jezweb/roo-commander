+++
id = "KB-MCP-VERTEX-INSTALL-V2"
title = "Installing and Configuring the Vertex AI MCP Server (NPM Method)"
context_type = "knowledge_base"
scope = "Instructions for setting up the Vertex AI MCP server"
target_audience = ["prime-coordinator", "developer"]
granularity = "procedure"
status = "active"
last_updated = "2025-05-05" # Updated date
tags = ["kb", "mcp", "vertex-ai", "installation", "configuration", "npm", "mcp.json"]
related_context = [
    ".roo/mcp.json",
    ".roo/rules/10-vertex-mcp-usage-guideline.md",
    ".ruru/modes/agent-mcp-manager/kb/data/03-vertex-ai-mcp-json-example.md" # Added reference to example
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

Locate or add the `vertex-ai-mcp-server` entry within the `servers` object in `.roo/mcp.json`. Configure it according to the example structure provided in the KB article:
**`.ruru/modes/agent-mcp-manager/kb/data/03-vertex-ai-mcp-json-example.md`**

Ensure you replace placeholder values in the example with your actual Google Cloud Platform (GCP) project details and credentials path.

**Key Configuration Points:**

*   **`args`**: Ensure the path points correctly to `node_modules/vertex-ai-mcp-server/build/index.js`.
*   **`env`**:
    *   Provide your valid GCP `PROJECT_ID`, `LOCATION` (region), and the path to your `GOOGLE_APPLICATION_CREDENTIALS` JSON key file. **These are essential.**
    *   Adjust `VERTEX_AI_MODEL_ID`, `TEMPERATURE`, `MAX_OUTPUT_TOKENS`, etc., based on your specific needs and the models available in your GCP project/region.
    *   Retry settings (`MAX_RETRIES`, `RETRY_DELAY_MS`) can be adjusted for network reliability.
*   **`disabled`**: Set to `false` to enable the server.
*   **`alwaysAllow`**: Carefully consider which tools should bypass per-call user confirmation.
*   **`timeout`**: Adjust if you expect very long-running tool operations.

## 3. Restart Roo Commander

After modifying `.roo/mcp.json`, restart Roo Commander to ensure it picks up the new configuration and attempts to connect to the Vertex AI MCP server. Check the Roo Commander logs or MCP status indicators for successful connection.
