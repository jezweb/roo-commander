+++
id = "agent-mcp-manager-kb-lookup"
title = "KB Lookup Rule for agent-mcp-manager"
context_type = "rules"
scope = "Mode-specific knowledge base access"
target_audience = ["agent-mcp-manager"]
granularity = "rule"
status = "active"
last_updated = "2025-05-04" # Placeholder for dynamic date
# version = "3.0" # Optional: Indicate version change
# related_context = []
tags = ["kb-lookup", "knowledge-base", "rule", "template", "conditional", "research", "mcp", "agent-mcp-manager"] # Added tags
# relevance = ""
kb_directory = ".ruru/modes/agent-mcp-manager/kb/"
+++

# Knowledge Base (KB) Lookup Rule (Conditional + Info Gathering)

**Applies To:** `agent-mcp-manager` mode

**Rule:**

Before attempting a task, assess its complexity and novelty.

1.  **Task Assessment:**
    *   Briefly evaluate the task: Is it simple, routine, and low-risk (e.g., standard command, minor text edit)? Or is it complex, novel, high-risk, or ambiguous?
    *   Consider your confidence level in executing the task without specific guidance.

2.  **Conditional KB Consultation:**
    *   **IF** the task is assessed as **complex, novel, high-risk, or uncertain**:
        *   **MUST** consult the dedicated Knowledge Base (KB) directory for this mode located at: `.ruru/modes/agent-mcp-manager/kb/`
        *   Follow the KB Scan Procedure below. If the KB is insufficient, proceed to Step 4 (Information Gathering).
    *   **ELSE IF** the task is assessed as **simple, routine, and low-risk**:
        *   KB consultation is **OPTIONAL**. Proceed directly to Step 3 (Apply Knowledge / Execute).
        *   *(Optional but Recommended):* Briefly note in logs/reasoning that KB was skipped due to task simplicity.
    *   **ELSE IF** assessment is **unclear**:
        *   Ask the coordinator/user for guidance on whether KB consultation is needed before proceeding. If directed to consult and KB is insufficient, proceed to Step 4.

**KB Scan Procedure (If Triggered by Step 2):**

1.  **Identify Keywords:** Determine the key concepts, tools, or procedures relevant to the current task.
2.  **Scan KB:**
    *   a. **Read `README.md`:** Always start by reading the `.ruru/modes/agent-mcp-manager/kb/README.md` for an overview and structure guidance.
    *   b. **List Contents:** Identify relevant files and subdirectories within `.ruru/modes/agent-mcp-manager/kb/`.
    *   c. **Prioritize Top-Level:** Review relevant top-level `.md` files first.
    *   d. **Explore Subdirectories:** If keywords, task context, or the `README.md` suggest relevance, explore pertinent subdirectories. Look for `README.md` or index files within them.
    *   e. **Review Content:** Read the content of potentially relevant files identified.
3.  **Apply Knowledge / Execute:**
    *   **IF** sufficient information was found in the KB: Integrate it into your task execution plan and response. Proceed with execution.
    *   **ELSE IF** KB was consulted but insufficient (and task was complex/uncertain): Proceed to Step 4.
    *   **ELSE (KB was skipped for simple task):** Proceed with execution using core capabilities and general knowledge.

**4. Information Gathering (If KB Insufficient for Complex/Uncertain Task):**
    *   **Identify Information Need:** Clearly state what specific information or clarification is missing to proceed reliably.
    *   **Propose Next Steps:** Use `ask_followup_question` to propose information-gathering actions to the coordinator/user. Suggestions **MUST** include context-appropriate options like:
        *   "Search external documentation/web using [Specific MCP Tool, e.g., `vertex-ai-mcp-server/answer_query_websearch`] for [topic/error]." (Mention specific tool and query).
        *   "Read a specific file if you can provide the path."
        *   "Ask for clarification on [specific aspect of the task]."
        *   "Attempt the task using general knowledge (state potential risks/uncertainties)."
    *   **Await Guidance:** Do not proceed with the original task until guidance is received on how to gather the missing information.

## Knowledge Base Index

*This section provides an overview and index of the knowledge base documents available for the `agent-mcp-manager` mode. Use this index to quickly locate relevant information for the task at hand.*

*   **`install-atlassian.md`**: Procedure for installing the Atlassian (sooperset) MCP server. (Status: `active`)
*   **`install-brave-search.md`**: Procedure for installing the Brave Search MCP server. (Status: `active`)
*   **`install-cloudflare.md`**: Procedure for installing the official Cloudflare MCP server. (Status: `active`)
*   **`install-crawl4ai.md`**: Procedure for installing the crawl4ai MCP server (pip/docker). (Status: `active`)
*   **`standard-npm-install-procedure.md`**: Procedure for installing NPM-based MCP servers into custom subdirectories. (Status: `active`)
*   **`install-custom-url.md`**: Placeholder for installing a custom MCP server from a Git URL. (Status: `placeholder`)
*   **`install-discord-slim.md`**: Placeholder procedure for installing the Discord (slimslenderslacks) MCP server. (Status: `placeholder`)
*   **`install-duckduckgo.md`**: Procedure for installing the DuckDuckGo (nickclyde) MCP server. (Status: `active`)
*   **`install-elevenlabs.md`**: Procedure for installing the official ElevenLabs MCP server. (Status: `active`)
*   **`install-fetch.md`**: Procedure for installing the official MCP Fetch server. (Status: `active`)
*   **`install-firecrawl.md`**: Procedure for installing the Firecrawl MCP server from Mendable.ai. (Status: `active`)
*   **`install-gdrive.md`**: Procedure for installing the official Google Drive MCP server. (Status: `active`)
*   **`install-github.md`**: Procedure for installing the official GitHub MCP server. (Status: `active`)
*   **`install-google-maps.md`**: Procedure for installing the Google Maps MCP server. (Status: `active`)
*   **`install-magic.md`**: Procedure for installing the Magic MCP server from 21st.dev. (Status: `active`)
*   **`install-mailgun.md`**: Procedure for installing the official Mailgun MCP server. (Status: `active`)
*   **`install-memory.md`**: Procedure for installing the official MCP Memory server. (Status: `active`)
*   **`install-notion.md`**: Procedure for installing the Notion (makenotion) MCP server. (Status: `active`)
*   **`install-obsidian.md`**: Procedure for installing the Obsidian (MarkusPfundstein) MCP server. (Status: `active`)
*   **`install-perplexity.md`**: Procedure for installing the Perplexity Ask MCP server. (Status: `active`)
*   `install-repomix.md`: Procedure for configuring the `repomix` MCP server (via npx). (Status: `active`)
*   **`install-sentry.md`**: Procedure for installing the official Sentry MCP server. (Status: `active`)
*   **`install-sequentialthinking.md`**: Procedure for installing the Sequential Thinking MCP server. (Status: `active`)
*   **`install-slack.md`**: Procedure for installing the official Slack MCP server. (Status: `active`)
*   **`install-stripe.md`**: Procedure for installing the Stripe Agent Toolkit MCP server. (Status: `active`)
*   **`install-tavily.md`**: Procedure for installing the Tavily Search MCP server. (Status: `active`)
*   **`install-unsplash.md`**: Procedure for installing the Unsplash MCP server. (Status: `active`)
*   **`install-vertex-ai.md`**: Procedure for installing the recommended Vertex AI MCP server. (Status: `active`)

*(Maintainers: Keep this index up-to-date as KB files are added, removed, or reorganized. Provide a concise, informative summary for each entry to aid AI navigation.)*


**Rationale:** This rule balances efficiency for simple tasks with robust handling of complex/uncertain tasks. It mandates KB consultation when needed and provides a structured way to seek further information (internally or externally via MCP/user) when the KB is insufficient, reducing errors and improving task success rates.
