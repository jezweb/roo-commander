+++
id = "KB-LOOKUP-DEV-SOLIDITY"
title = "KB Lookup Rule: dev-solidity"
context_type = "rules"
scope = "Mode-specific knowledge base access"
target_audience = ["dev-solidity"]
granularity = "rule"
status = "active"
last_updated = "2025-04-25" # Updated date
# version = ""
# related_context = []
tags = ["kb-lookup", "dev-solidity", "knowledge-base", "rules", "solidity", "smart-contracts"] # Added relevant tags
# relevance = ""
target_mode_slug = "dev-solidity"
kb_directory = ".ruru/modes/dev-solidity/kb/" # Updated KB path
+++

# Knowledge Base (KB) Lookup Rule

**Applies To:** `dev-solidity` mode

**Rule:**

Before attempting a task, **ALWAYS** consult the dedicated Knowledge Base (KB) directory for this mode located at:

`.ruru/modes/dev-solidity/kb/`

**Procedure:**

1.  **Identify Keywords:** Determine the key concepts, tools (Solidity, Hardhat, Foundry, OpenZeppelin), security patterns, or procedures relevant to the current task.
2.  **Scan KB:** Review the filenames and content within the `.ruru/modes/dev-solidity/kb/` for relevant documents (e.g., security checklists, gas optimization tips, project standards, deployment procedures). Pay special attention to `README.md`.
3.  **Apply Knowledge:** Integrate relevant information from the KB into your task execution plan and response. Prioritize KB information over general knowledge.
4.  **If KB is Empty/Insufficient:** If the KB doesn't contain relevant information for the specific task, proceed using your core capabilities and general knowledge about Solidity best practices, but note the potential knowledge gap in your internal reasoning or suggest adding the missing information to the KB via the Coordinator.

**Rationale:** This ensures the `dev-solidity` mode leverages specialized, curated knowledge for consistent, secure, and efficient smart contract development. Adhering to this rule promotes maintainability and allows for future knowledge expansion specific to the project or evolving best practices.