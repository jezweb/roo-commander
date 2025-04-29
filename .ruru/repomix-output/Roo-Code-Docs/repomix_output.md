This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.github/
  workflows/
    docusaurus-build.yml
  CODEOWNERS
docs/
  advanced-usage/
    available-tools/
      access-mcp-resource.md
      apply-diff.md
      ask-followup-question.md
      attempt-completion.md
      browser-action.md
      execute-command.md
      insert-content.md
      list-code-definition-names.md
      list-files.md
      new-task.md
      read-file.md
      search-and-replace.md
      search-files.md
      switch-mode.md
      tool-use-overview.md
      use-mcp-tool.md
      write-to-file.md
    large-projects.md
    local-models.md
    prompt-engineering.md
    prompt-structure.md
    rate-limits-costs.md
  basic-usage/
    context-mentions.md
    how-tools-work.md
    the-chat-interface.md
    typing-your-requests.md
    using-modes.md
  features/
    experimental/
      experimental-features.md
    mcp/
      mcp-vs-api.md
      overview.md
      server-transports.md
      using-mcp-in-roo.md
      what-is-mcp.md
    api-configuration-profiles.md
    auto-approving-actions.md
    boomerang-tasks.mdx
    browser-use.mdx
    checkpoints.md
    code-actions.md
    custom-instructions.md
    custom-modes.md
    enhance-prompt.md
    fast-edits.md
    footgun-prompting.md
    keyboard-shortcuts.md
    model-temperature.md
    more-features.md
    settings-management.md
    shell-integration.md
    suggested-responses.md
  getting-started/
    connecting-api-provider.md
    installing.mdx
    your-first-task.md
  providers/
    anthropic.md
    bedrock.md
    deepseek.md
    gemini.md
    glama.md
    human-relay.md
    lmstudio.md
    mistral.md
    ollama.md
    openai-compatible.md
    openai.md
    openrouter.md
    requesty.md
    unbound.md
    vertex.md
    vscode-lm.md
    xai.md
  update-notes/
    index.md
    v2.1.10.md
    v2.1.11.md
    v2.1.12.md
    v2.1.13.md
    v2.1.14.md
    v2.1.15.md
    v2.1.16.md
    v2.1.17.md
    v2.1.18.md
    v2.1.19.md
    v2.1.2.md
    v2.1.20.md
    v2.1.21.md
    v2.1.3.md
    v2.1.4.md
    v2.1.5.md
    v2.1.6.md
    v2.1.7.md
    v2.1.8.md
    v2.1.9.md
    v2.2.0.md
    v2.2.1.md
    v2.2.11.md
    v2.2.12.md
    v2.2.13.md
    v2.2.14.md
    v2.2.16.md
    v2.2.17.md
    v2.2.18.md
    v2.2.19.md
    v2.2.2.md
    v2.2.20.md
    v2.2.21.md
    v2.2.22.md
    v2.2.23.md
    v2.2.24.md
    v2.2.25.md
    v2.2.26.md
    v2.2.27.md
    v2.2.28.md
    v2.2.29.md
    v2.2.3.md
    v2.2.30.md
    v2.2.31.md
    v2.2.32.md
    v2.2.33.md
    v2.2.34.md
    v2.2.35.md
    v2.2.36.md
    v2.2.38.md
    v2.2.39.md
    v2.2.4.md
    v2.2.40.md
    v2.2.41.md
    v2.2.42.md
    v2.2.43.md
    v2.2.44.md
    v2.2.45.md
    v2.2.46.md
    v2.2.5.md
    v2.2.6.md
    v3.0.0.md
    v3.0.1.md
    v3.0.2.md
    v3.0.3.md
    v3.1.0.md
    v3.1.1.md
    v3.1.2.md
    v3.1.3.md
    v3.1.4.md
    v3.1.6.md
    v3.1.7.md
    v3.10.0.md
    v3.10.1.md
    v3.10.2.md
    v3.10.3.md
    v3.10.4.md
    v3.10.5.md
    v3.11.1.md
    v3.11.10.md
    v3.11.11.md
    v3.11.12.md
    v3.11.13.md
    v3.11.14.md
    v3.11.15.md
    v3.11.16.md
    v3.11.17.md
    v3.11.2.md
    v3.11.3.md
    v3.11.5.md
    v3.11.6.md
    v3.11.7.md
    v3.11.8.md
    v3.11.9.md
    v3.11.md
    v3.12.0.md
    v3.12.1.md
    v3.12.2.md
    v3.13.0.md
    v3.13.1.md
    v3.13.2.md
    v3.14.0.md
    v3.14.1.md
    v3.14.2.md
    v3.14.3.md
    v3.14.md
    v3.2.0.md
    v3.2.3.md
    v3.2.4.md
    v3.2.5.md
    v3.2.6.md
    v3.2.7.md
    v3.2.8.md
    v3.3.0.md
    v3.3.1.md
    v3.3.10.md
    v3.3.11.md
    v3.3.12.md
    v3.3.13.md
    v3.3.14.md
    v3.3.15.md
    v3.3.16.md
    v3.3.17.md
    v3.3.18.md
    v3.3.19.md
    v3.3.2.md
    v3.3.20.md
    v3.3.21.md
    v3.3.22.md
    v3.3.23.md
    v3.3.24.md
    v3.3.25.md
    v3.3.26.md
    v3.3.3.md
    v3.3.4.md
    v3.3.5.md
    v3.3.6.md
    v3.3.7.md
    v3.3.8.md
    v3.3.9.md
    v3.7.0.md
    v3.7.1.md
    v3.7.10.md
    v3.7.11.md
    v3.7.12.md
    v3.7.2.md
    v3.7.3.md
    v3.7.4.md
    v3.7.5.md
    v3.7.6.md
    v3.7.7.md
    v3.7.8.md
    v3.7.9.md
    v3.8.0.md
    v3.8.1.md
    v3.8.2.md
    v3.8.3.md
    v3.8.4.md
    v3.8.5.md
    v3.8.6.md
    v3.9.0.md
    v3.9.1.md
    v3.9.2.md
  community.md
  faq.md
  index.md
  tips-and-tricks.md
  tutorial-videos.json
  tutorial-videos.mdx
src/
  components/
    ReportIssue/
      index.js
      styles.module.css
    Codicon.tsx
    KangarooIcon.tsx
    VideoGrid.tsx
  css/
    custom.css
  theme/
    DocItem/
      index.js
    MDXComponents.ts
  constants.ts
static/
  downloads/
    boomerang-tasks/
      roomodes.json
.clinerules
.env.example
.gitignore
.roomodes
docusaurus.config.ts
LICENSE
package.json
Rakefile
README.md
sidebars.ts
tsconfig.json
```

# Files

## File: .github/workflows/docusaurus-build.yml
````yaml
name: Docusaurus Build Check

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read

jobs:
  build:
    name: Build Docusaurus Site
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build site
      run: npm run build
      env:
        POSTHOG_API_KEY: ${{ secrets.POSTHOG_API_KEY }}
````

## File: .github/CODEOWNERS
````
# These owners will be the default owners for everything in the repo
* @mrubens @cte @hannesrudolph
````

## File: docs/advanced-usage/available-tools/access-mcp-resource.md
````markdown
# access_mcp_resource

The `access_mcp_resource` tool retrieves data from resources exposed by connected Model Context Protocol (MCP) servers. It allows Roo to access files, API responses, documentation, or system information that provides additional context for tasks.

## Parameters

The tool accepts these parameters:

- `server_name` (required): The name of the MCP server providing the resource
- `uri` (required): The URI identifying the specific resource to access

## What It Does

This tool connects to MCP servers and fetches data from their exposed resources. Unlike `use_mcp_tool` which executes actions, this tool specifically retrieves information that serves as context for tasks.

## When is it used?

- When Roo needs additional context from external systems
- When Roo needs to access domain-specific data from specialized MCP servers
- When Roo needs to retrieve reference documentation hosted by MCP servers
- When Roo needs to integrate real-time data from external APIs via MCP

## Key Features

- Retrieves both text and image data from MCP resources
- Requires user approval before executing resource access
- Uses URI-based addressing to precisely identify resources
- Integrates with the Model Context Protocol SDK
- Displays resource content appropriately based on content type
- Supports timeouts for reliable network operations
- Handles server connection states (connected, connecting, disconnected)
- Discovers available resources from connected servers
- Processes structured response data with metadata
- Handles image content special rendering

## Limitations

- Depends on external MCP servers being available and connected
- Limited to the resources provided by connected servers
- Cannot access resources from disabled servers
- Network issues can affect reliability and performance
- Resource access subject to configured timeouts
- URI formats are determined by the specific MCP server implementation
- No offline or cached resource access capabilities

## How It Works

When the `access_mcp_resource` tool is invoked, it follows this process:

1. **Connection Validation**:
   - Verifies that an MCP hub is available and initialized
   - Confirms the specified server exists in the connection list
   - Checks if the server is disabled (returns an error if it is)

2. **User Approval**:
   - Presents the resource access request to the user for approval
   - Provides server name and resource URI for user verification
   - Proceeds only if the user approves the resource access

3. **Resource Request**:
   - Uses the Model Context Protocol SDK to communicate with servers
   - Makes a `resources/read` request to the server through the MCP hub
   - Applies configured timeouts to prevent hanging on unresponsive servers

4. **Response Processing**:
   - Receives a structured response with metadata and content arrays
   - Processes text content for display to the user
   - Handles image data specially for appropriate display
   - Returns the processed resource data to Roo for use in the current task

## Resource Types

MCP servers can provide two main types of resources:

1. **Standard Resources**:
   - Fixed resources with specific URIs
   - Defined name, description, and MIME type
   - Direct access without parameters
   - Typically represent static data or real-time information

2. **Resource Templates**:
   - Parameterized resources with placeholder values in URIs
   - Allow dynamic resource generation based on provided parameters
   - Can represent queries or filtered views of data
   - More flexible but require additional URI formatting

## Examples When Used

- When helping with API development, Roo retrieves endpoint specifications from MCP resources to ensure correct implementation.
- When assisting with data visualization, Roo accesses current data samples from connected MCP servers.
- When working in specialized domains, Roo retrieves technical documentation to provide accurate guidance.
- When generating industry-specific code, Roo references compliance requirements from documentation resources.

## Usage Examples

Accessing current weather data:
```
<access_mcp_resource>
<server_name>weather-server</server_name>
<uri>weather://san-francisco/current</uri>
</access_mcp_resource>
```

Retrieving API documentation:
```
<access_mcp_resource>
<server_name>api-docs</server_name>
<uri>docs://payment-service/endpoints</uri>
</access_mcp_resource>
```

Accessing domain-specific knowledge:
```
<access_mcp_resource>
<server_name>knowledge-base</server_name>
<uri>kb://medical/terminology/common</uri>
</access_mcp_resource>
```

Fetching system configuration:
```
<access_mcp_resource>
<server_name>infra-monitor</server_name>
<uri>config://production/database</uri>
</access_mcp_resource>
```
````

## File: docs/advanced-usage/available-tools/apply-diff.md
````markdown
# apply_diff

The `apply_diff` tool makes precise, surgical changes to files by specifying exactly what content to replace. It uses a sophisticated strategy for finding and applying changes while maintaining proper code formatting and structure.

## Parameters

The tool accepts these parameters:

- `path` (required): The path of the file to modify relative to the current working directory.
- `diff` (required): The search/replace block defining the changes using a format specific to the active diff strategy.
- `start_line` (optional): A hint for where the search content begins. _Note: This top-level parameter appears unused by the current main strategy, which relies on `:start_line:` within the diff content._
- `end_line` (optional): A hint for where the search content ends. _Note: This top-level parameter appears unused by the current main strategy._

## What It Does

This tool applies targeted changes to existing files using fuzzy matching guided by line number hints to locate and replace content precisely. Unlike simple search and replace, it identifies the exact block for replacement based on the provided content and location hints.

## When is it used?

- When Roo needs to make precise changes to existing code without rewriting entire files.
- When refactoring specific sections of code while maintaining surrounding context.
- When fixing bugs in existing code with surgical precision.
- When implementing feature enhancements that modify only certain parts of a file.

## Key Features

- Uses fuzzy matching (Levenshtein distance on normalized strings) guided by a `:start_line:` hint, with configurable confidence thresholds (typically 0.8-1.0).
- Provides context around matches using `BUFFER_LINES` (default 40).
- Performs a middle-out search within a configurable context window (`bufferLines`) around the hinted start line.
- Preserves code formatting and indentation passively by replacing exact blocks.
- Shows changes in a diff view for user review and editing before applying.
- Tracks consecutive errors per file (`consecutiveMistakeCountForApplyDiff`) to prevent repeated failures.
- Validates file access against `.rooignore` rules.
- Handles multi-line edits effectively.

## Limitations

- Works best with unique, distinctive code sections for reliable identification.
- Performance can vary with very large files or highly repetitive code patterns.
- Fuzzy matching might occasionally select incorrect locations if content is ambiguous.
- Each diff strategy has specific format requirements.
- Complex edits might require careful strategy selection or manual review.

## How It Works

When the `apply_diff` tool is invoked, it follows this process:

1.  **Parameter Validation**: Validates required `path` and `diff` parameters.
2.  **RooIgnore Check**: Validates if the target file path is allowed by `.rooignore` rules.
3.  **File Analysis**: Loads the target file content.
4.  **Match Finding**: Uses a fuzzy matching algorithm (Levenshtein on normalized strings) guided by the `:start_line:` hint within a context window (`BUFFER_LINES`), searching middle-out to locate the target content based on the confidence threshold.
5.  **Change Preparation**: Generates the proposed changes by replacing the identified block.
6.  **User Interaction**:
    *   Displays the changes in a diff view.
    *   Allows the user to review and potentially edit the proposed changes.
    *   Waits for user approval or rejection.
7.  **Change Application**: If approved, applies the changes (potentially including user edits) to the file.
8.  **Error Handling**: If errors occur (e.g., match failure, partial application), increments the `consecutiveMistakeCountForApplyDiff` for the file and reports the failure type.
9. **Feedback**: Returns the result, including any user feedback or error details.

## Diff Format Requirements

The `<diff>` parameter requires a specific format supporting one or more changes in a single request. Each change block requires a line number hint for the original content.

*   **Requires**: Exact match for the `SEARCH` block content (within the fuzzy threshold), including whitespace and indentation. The `:start_line:` number hint is mandatory within each block. The `:end_line:` hint is optional (but supported by the parser). Markers like `<<<<<<<` within the file's content must be escaped (`\\`) in the SEARCH block.

Example format for the `<diff>` block:

```diff
<<<<<<< SEARCH
:start_line:10
:end_line:12
-------
    // Old calculation logic
    const result = value * 0.9;
    return result;
=======
    // Updated calculation logic with logging
    console.log(`Calculating for value: ${value}`);
    const result = value * 0.95; // Adjusted factor
    return result;
>>>>>>> REPLACE

<<<<<<< SEARCH
:start_line:25
:end_line:25
-------
    const defaultTimeout = 5000;
=======
    const defaultTimeout = 10000; // Increased timeout
>>>>>>> REPLACE
````

## File: docs/advanced-usage/available-tools/ask-followup-question.md
````markdown
# ask_followup_question

The `ask_followup_question` tool enables interactive communication by asking specific questions to gather additional information needed to complete tasks effectively.

## Parameters

The tool accepts these parameters:

- `question` (required): The specific question to ask the user
- `follow_up` (optional): A list of 2-4 suggested answers that help guide user responses, each within `<suggest>` tags

## What It Does

This tool creates a conversational interface between Roo and the user, allowing for gathering clarification, additional details, or user preferences when facing ambiguities or decision points. Each question can include suggested responses to streamline the interaction.

## When is it used?

- When critical information is missing from the original request
- When Roo needs to choose between multiple valid implementation approaches
- When technical details or preferences are required to proceed
- When Roo encounters ambiguities that need resolution
- When additional context would significantly improve the solution quality

## Key Features

- Provides a structured way to gather specific information without breaking workflow
- Includes suggested answers to reduce user typing and guide responses
- Maintains conversation history and context across interactions
- Supports responses containing images and code snippets
- Available in all modes as part of the "always available" tool set
- Enables direct user guidance on implementation decisions
- Formats responses with `<answer>` tags to distinguish them from regular conversation
- Resets consecutive error counter when used successfully

## Limitations

- Limited to asking one specific question per tool use
- Presents suggestions as selectable options in the UI
- Cannot force structured responses – users can still respond freely
- Excessive use can slow down task completion and create a fragmented experience
- Suggested answers must be complete, with no placeholders requiring user edits
- No built-in validation for user responses
- Contains no mechanism to enforce specific answer formats

## How It Works

When the `ask_followup_question` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates the required `question` parameter and checks for optional suggestions
   - Ensures question text is provided
   - Parses any suggested answers from the `follow_up` parameter using the `fast-xml-parser` library
   - Normalizes suggestions into an array format even if there's only one suggestion

2. **JSON Transformation**: Converts the XML structure into a standardized JSON format for UI display
   ```typescript
   {
     question: "User's question here",
     suggest: [
       { answer: "Suggestion 1" },
       { answer: "Suggestion 2" }
     ]
   }
   ```

3. **UI Integration**:
   - Passes the JSON structure to the UI layer via the `ask("followup", ...)` method
   - Displays selectable suggestion buttons to the user in the interface
   - Creates an interactive experience for selecting or typing a response

4. **Response Collection and Processing**:
   - Captures user text input and any images included in the response
   - Wraps user responses in `<answer>` tags when returning to the assistant
   - Preserves any images included in the user's response
   - Maintains the conversational context by adding the response to the history
   - Resets the consecutive error counter when the tool is used successfully

5. **Error Handling**:
   - Tracks consecutive mistakes using a counter
   - Resets the counter when the tool is used successfully
   - Provides specific error messages:
     - For missing parameters: "Missing required parameter 'question'"
     - For XML parsing: "Failed to parse operations: [error message]"
     - For invalid format: "Invalid operations xml format"
   - Contains safeguards to prevent tool execution when required parameters are missing
   - Increments consecutive mistake count when errors occur

## Workflow Sequence

The question-answer cycle follows this sequence:

1. **Information Gap Recognition**: Roo identifies missing information needed to proceed
2. **Specific Question Creation**: Roo formulates a clear, targeted question
3. **Suggestion Development**: Roo creates relevant suggested answers (optional but recommended)
4. **Tool Invocation**: Assistant invokes the tool with question and optional suggestions
5. **UI Presentation**: Question and suggestions are displayed to the user as interactive elements
6. **User Response**: The user selects a suggestion or provides a custom answer
7. **Message Handling**: System handles both partial and complete messages
   - For streaming responses, processes chunks as they arrive
   - For complete messages, processes the entire response at once
   - Maintains state consistency regardless of message chunking
8. **Response Processing**: System wraps the response in `<answer>` tags and preserves images
9. **Context Integration**: Response is added to the conversation history
10. **Task Continuation**: Roo proceeds with the task using the new information

## Examples When Used

- When developing a web application, Roo might ask about preferred styling frameworks (Bootstrap, Tailwind, custom CSS)
- When creating an API, Roo might ask about authentication methods (JWT, OAuth, API keys)
- When refactoring code, Roo might ask about prioritizing performance vs. readability
- When setting up a database, Roo might ask about specific schema design preferences
- When creating a custom feature, Roo might ask about specific behavior expectations
- When troubleshooting errors, Roo might ask about specific environment details

## Response Format

When a user responds to a question, the response is formatted with `<answer>` tags for clarity and consistency. This format helps clearly separate the user's answer from other conversation elements.

Example response format:
```
<answer>
Use Tailwind CSS for utility-first styling with maximum flexibility
</answer>
```

Key characteristics of the response format:
- Surrounded by `<answer>` tags
- Preserves formatting of the original response
- Maintains images if included in the response
- Returns the complete text, even for long responses

## Usage Examples

Asking about implementation preferences:
```
<ask_followup_question>
<question>Which styling approach would you prefer for this web application?</question>
<follow_up>
<suggest>Use Bootstrap for rapid development with consistent components</suggest>
<suggest>Use Tailwind CSS for utility-first styling with maximum flexibility</suggest>
<suggest>Use vanilla CSS with custom styling for complete control and minimal dependencies</suggest>
</follow_up>
</ask_followup_question>
```


Requesting technical clarification:
```
<ask_followup_question>
<question>What database should this application use for storing user data?</question>
<follow_up>
<suggest>MongoDB for flexible schema and document-based storage</suggest>
<suggest>PostgreSQL for relational data with strong consistency guarantees</suggest>
<suggest>Firebase for real-time updates and simplified backend management</suggest>
<suggest>SQLite for lightweight local storage without external dependencies</suggest>
</follow_up>
</ask_followup_question>
```

Addressing ambiguity in requirements:
```
<ask_followup_question>
<question>How should the application handle user authentication?</question>
<follow_up>
<suggest>Implement email/password authentication with account verification</suggest>
<suggest>Use social login providers (Google, GitHub, etc.) for quick signup</suggest>
<suggest>Implement both email/password and social login options</suggest>
</follow_up>
</ask_followup_question>
```
````

## File: docs/advanced-usage/available-tools/attempt-completion.md
````markdown
# attempt_completion

The `attempt_completion` tool signals that Roo believes a task is complete and presents results to the user. It provides a summary of what was accomplished, optionally includes a command to demonstrate the result, and supports continued refinement through user feedback.

## Parameters

The tool accepts these parameters:

- `result` (required): The final result description summarizing what was accomplished
- `command` (optional): A CLI command to execute to demonstrate the result

## What It Does

This tool marks the end of a task by presenting a final summary of what was accomplished. It signals to both the user and the system that the current task is complete. When a command is provided, it can also demonstrate the result through a live execution.

## When is it used?

- When Roo believes the user's task has been completed
- When summarizing what changes or improvements were made
- When demonstrating the current result with a command execution
- When providing a checkpoint for user feedback on the solution
- When transitioning from one phase of work to potential refinements

## Key Features

- Provides a clear signal that Roo believes the task is complete
- Summarizes accomplishments in a concise message
- Optionally demonstrates results through command execution
- Enables user feedback for further refinements
- Displays results in a special UI format distinct from regular messages
- Captures task completion telemetry for system analytics
- Maintains a structured conversation flow by providing checkpoints
- Supports subtask completion within larger workflows
- Ensures users receive a clear summary of what was done
- Available in all modes as part of the "always available" tool group

## Limitations

- Should not be used until previous tool uses are confirmed successful (guideline, not enforced)
- Limited to a single command for result demonstration
- Cannot present multiple command options
- Commands require user approval before execution
- Limited to demonstrating results that can be shown via CLI commands
- Cannot be used for partial task completion or progress updates
- Result formatting strips XML closing tags through internal processing

## How It Works

When the `attempt_completion` tool is invoked, it follows this process:

1. **Safety Consideration** (guideline, not enforced):
   - The AI is instructed to confirm previous tool uses were successful
   - This is a best practice rather than a programmatically enforced mechanism

2. **Result Presentation**:
   - Displays the completion message to the user in a special "completion_result" UI format
   - Removes XML closing tags from the result text using the `removeClosingTag` function
   - Presents the result differently than regular messages for visual distinction

3. **Command Execution** (if provided):
   - Requests user approval before executing the command
   - Only executes if the user approves
   - Executes the command using the system's command execution functionality
   - Shows the result of the command to the user

4. **Feedback Collection**:
   - Waits for user feedback on the completion result
   - Processes this feedback and returns it to the AI
   - Enables continued refinement based on user input

5. **Task Completion and Continuation**:
   - Signals the task as completed in the system
   - Captures telemetry data for the completed task
   - For subtasks, offers to finish the subtask and resume the parent task
   - Supports continued conversation through the feedback mechanism

6. **Implementation Integration**:
   - Tool results are parsed through the system's parsing mechanism in `parse-assistant-message.ts`
   - The tool is part of the "ALWAYS_AVAILABLE_TOOLS" constant, making it available in all modes

## Result Formatting Guidelines

The result message should follow these guidelines:

- Clearly communicate what was accomplished
- Be concise but complete
- Focus on the value delivered to the user
- Avoid unnecessary pleasantries or filler text
- Maintain a professional, straightforward tone
- Present information in a way that's easy to scan and understand
- Acknowledge that the user may provide feedback for further refinements

Note: The system automatically strips XML closing tags from the result text through the `removeClosingTag` function.

## Command Selection Guidelines

When including a command, follow these guidelines:

- Choose commands that visually demonstrate the result
- Prefer commands that show the user what was created or modified
- Examples include:
  * `open index.html` to display a created website
  * `npm start` to launch a development server
  * `python app.py` to run a created application
- Avoid commands that merely print text (like `echo` or `cat`)
- Remember that commands require user approval before execution
- Ensure the command is valid for the user's operating system

## Feedback and UI Representation

The `attempt_completion` tool has a unique feedback mechanism:

- Results appear in a special "completion_result" UI format distinct from regular messages
- The system waits for user feedback after presenting the result
- Feedback is processed and returned to Roo for further refinements
- This creates an iterative improvement cycle rather than ending the conversation
- The UI includes special elements for providing feedback
- Results serve as clear checkpoints in the conversation flow

When used within subtasks:
- The system offers to finish the subtask and resume the parent task
- If approved, the subtask is completed with a summary
- The parent task resumes with context from the completed subtask
- This enables complex, nested workflows while maintaining context

## Examples When Used

- When creating a website, Roo presents the solution and uses `open index.html` to show the result. The user provides feedback, and Roo refines the design.
- When implementing a feature, Roo summarizes the changes and their impact. The user requests additional test coverage, and Roo continues the task.
- When fixing bugs, Roo explains what was fixed and how the solution addresses the root cause. The user confirms the fix works.
- When setting up a development environment, Roo confirms all components are installed. The user requests additional configuration, and Roo continues.
- When creating a data processing script, Roo summarizes the functionality. The user suggests performance improvements, and Roo optimizes the code.

## Usage Examples


Completing a task with just a result summary:
```
<attempt_completion>
<result>
I've updated the CSS for the navigation bar to match the design mockup. The changes include:
1. Updated color scheme to use the new brand colors
2. Added responsive behavior for mobile devices
3. Fixed the alignment issues in the dropdown menus
</result>
</attempt_completion>
```

Completing a task with a result and demonstration command:
```
<attempt_completion>
<result>
I've created a simple React application with the following features:
1. A responsive landing page with the requested hero section
2. A working contact form with validation
3. Navigation between all three requested pages
4. Styling that matches the provided design mockup
</result>
<command>npm start</command>
</attempt_completion>
```

Completing a Python script task with execution:
```
<attempt_completion>
<result>
I've created a data processing script that:
1. Reads the CSV files from the data directory
2. Cleans and normalizes the data as requested
3. Generates the summary statistics in JSON format
4. Outputs the processed data to the output directory
</result>
<command>python process_data.py</command>
</attempt_completion>
```
````

## File: docs/advanced-usage/available-tools/browser-action.md
````markdown
# browser_action

The `browser_action` tool enables web automation and interaction via a Puppeteer-controlled browser. It allows Roo to launch browsers, navigate to websites, click elements, type text, and scroll pages with visual feedback through screenshots.

## Parameters

The tool accepts these parameters:

- `action` (required): The action to perform:
  * `launch`: Start a new browser session at a URL
  * `click`: Click at specific x,y coordinates
  * `type`: Type text via the keyboard
  * `scroll_down`: Scroll down one page height
  * `scroll_up`: Scroll up one page height
  * `close`: End the browser session
- `url` (optional): The URL to navigate to when using the `launch` action
- `coordinate` (optional): The x,y coordinates for the `click` action (e.g., "450,300")
- `text` (optional): The text to type when using the `type` action

## What It Does

This tool creates an automated browser session that Roo can control to navigate websites, interact with elements, and perform tasks that require browser automation. Each action provides a screenshot of the current state, enabling visual verification of the process.

## When is it used?

- When Roo needs to interact with web applications or websites
- When testing user interfaces or web functionality
- When capturing screenshots of web pages
- When demonstrating web workflows visually

## Key Features

- Provides visual feedback with screenshots after each action and captures console logs
- Supports complete workflows from launching to page interaction to closing
- Enables precise interactions via coordinates, keyboard input, and scrolling
- Maintains consistent browser sessions with intelligent page loading detection
- Operates in two modes: local (isolated Puppeteer instance) or remote (connects to existing Chrome)
- Handles errors gracefully with automatic session cleanup and detailed messages
- Optimizes visual output with support for various formats and quality settings
- Tracks interaction state with position indicators and action history

## Browser Modes

The tool operates in two distinct modes:

### Local Browser Mode (Default)
- Downloads and manages a local Chromium instance through Puppeteer
- Creates a fresh browser environment with each launch
- No access to existing user profiles, cookies, or extensions
- Consistent, predictable behavior in a sandboxed environment
- Completely closes the browser when the session ends

### Remote Browser Mode
- Connects to an existing Chrome/Chromium instance running with remote debugging enabled
- Can access existing browser state, cookies, and potentially extensions
- Faster startup as it reuses an existing browser process
- Supports connecting to browsers in Docker containers or on remote machines
- Only disconnects (doesn't close) from the browser when session ends
- Requires Chrome to be running with remote debugging port open (typically port 9222)

## Limitations

- While the browser is active, only `browser_action` tool can be used
- Browser coordinates are viewport-relative, not page-relative
- Click actions must target visible elements within the viewport
- Browser sessions must be explicitly closed before using other tools
- Browser window has configurable dimensions (default 900x600)
- Cannot directly interact with browser DevTools
- Browser sessions are temporary and not persistent across Roo restarts
- Works only with Chrome/Chromium browsers, not Firefox or Safari
- Local mode has no access to existing cookies; remote mode requires Chrome with debugging enabled

## How It Works

When the `browser_action` tool is invoked, it follows this process:

1. **Action Validation and Browser Management**:
   - Validates the required parameters for the requested action
   - For `launch`: Initializes a browser session (either local Puppeteer instance or remote Chrome)
   - For interaction actions: Uses the existing browser session
   - For `close`: Terminates or disconnects from the browser appropriately

2. **Page Interaction and Stability**:
   - Ensures pages are fully loaded using DOM stability detection via `waitTillHTMLStable` algorithm
   - Executes requested actions (navigation, clicking, typing, scrolling) with proper timing
   - Monitors network activity after clicks and waits for navigation when necessary

3. **Visual Feedback**:
   - Captures optimized screenshots using WebP format (with PNG fallback)
   - Records browser console logs for debugging purposes
   - Tracks mouse position and maintains paginated history of actions

4. **Session Management**:
   - Maintains browser state across multiple actions
   - Handles errors and automatically cleans up resources
   - Enforces proper workflow sequence (launch → interactions → close)

## Workflow Sequence

Browser interactions must follow this specific sequence:

1. **Session Initialization**: All browser workflows must start with a `launch` action
2. **Interaction Phase**: Multiple `click`, `type`, and scroll actions can be performed
3. **Session Termination**: All browser workflows must end with a `close` action
4. **Tool Switching**: After closing the browser, other tools can be used

## Examples When Used

- When creating a web form submission process, Roo launches a browser, navigates to the form, fills out fields with the `type` action, and clicks submit.
- When testing a responsive website, Roo navigates to the site and uses scroll actions to examine different sections.
- When capturing screenshots of a web application, Roo navigates through different pages and takes screenshots at each step.
- When demonstrating an e-commerce checkout flow, Roo simulates the entire process from product selection to payment confirmation.

## Usage Examples

Launching a browser and navigating to a website:
```
<browser_action>
<action>launch</action>
<url>https://example.com</url>
</browser_action>
```

Clicking at specific coordinates (e.g., a button):
```
<browser_action>
<action>click</action>
<coordinate>450,300</coordinate>
</browser_action>
```

Typing text into a focused input field:
```
<browser_action>
<action>type</action>
<text>Hello, World!</text>
</browser_action>
```

Scrolling down to see more content:
```
<browser_action>
<action>scroll_down</action>
</browser_action>
```

Closing the browser session:
```
<browser_action>
<action>close</action>
</browser_action>
```
````

## File: docs/advanced-usage/available-tools/execute-command.md
````markdown
# execute_command

The `execute_command` tool runs CLI commands on the user's system. It allows Roo to perform system operations, install dependencies, build projects, start servers, and execute other terminal-based tasks needed to accomplish user objectives.

## Parameters

The tool accepts these parameters:

- `command` (required): The CLI command to execute. Must be valid for the user's operating system.
- `cwd` (optional): The working directory to execute the command in. If not provided, the current working directory is used.

## What It Does

This tool executes terminal commands directly on the user's system, enabling a wide range of operations from file manipulations to running development servers. Commands run in managed terminal instances with real-time output capture, integrated with VS Code's terminal system for optimal performance and security.

## When is it used?

- When installing project dependencies (npm install, pip install, etc.)
- When building or compiling code (make, npm run build, etc.)
- When starting development servers or running applications
- When initializing new projects (git init, npm init, etc.)
- When performing file operations beyond what other tools provide
- When running tests or linting operations
- When needing to execute specialized commands for specific technologies

## Key Features

- Integrates with VS Code shell API for reliable terminal execution
- Reuses terminal instances when possible through a registry system
- Captures command output line by line with real-time feedback
- Supports long-running commands that continue in the background
- Allows specification of custom working directories
- Maintains terminal history and state across command executions
- Handles complex command chains appropriate for the user's shell
- Provides detailed command completion status and exit code interpretation
- Supports interactive terminal applications with user feedback loop
- Shows terminals during execution for transparency
- Validates commands for security using shell-quote parsing
- Blocks potentially dangerous subshell execution patterns
- Integrates with RooIgnore system for file access control
- Handles terminal escape sequences for clean output

## Limitations

- Command access may be restricted by RooIgnore rules and security validations
- Commands with elevated permission requirements may need user configuration
- Behavior may vary across operating systems for certain commands
- Very long-running commands may require specific handling
- File paths should be properly escaped according to the OS shell rules
- Not all terminal features may work with remote development scenarios

## How It Works

When the `execute_command` tool is invoked, it follows this process:

1. **Command Validation and Security Checks**:
   - Parses the command using shell-quote to identify components
   - Validates against security restrictions (subshell usage, restricted files)
   - Checks against RooIgnore rules for file access permissions
   - Ensures the command meets system security requirements

2. **Terminal Management**:
   - Gets or creates a terminal through TerminalRegistry
   - Sets up the working directory context
   - Prepares event listeners for output capture
   - Shows the terminal for user visibility

3. **Command Execution and Monitoring**:
   - Executes via VS Code's shellIntegration API
   - Captures output with escape sequence processing
   - Throttles output handling (100ms intervals)
   - Monitors for command completion or errors
   - Detects "hot" processes like compilers for special handling

4. **Result Processing**:
   - Strips ANSI/VS Code escape sequences for clean output
   - Interprets exit codes with detailed signal information
   - Updates working directory tracking if changed by command
   - Provides command status with appropriate context

## Terminal Implementation Details

The tool uses a sophisticated terminal management system:

1. **First Priority: Terminal Reuse**
   - The TerminalRegistry tries to reuse existing terminals when possible
   - This reduces proliferation of terminal instances and improves performance
   - Terminal state (working directory, history) is preserved across commands

2. **Second Priority: Security Validation**
   - Commands are parsed using shell-quote for component analysis
   - Dangerous patterns like `$(...)` and backticks are blocked
   - Commands are checked against RooIgnore rules for file access control
   - A prefix-based allowlist system validates command patterns

3. **Performance Optimizations**
   - Output is processed in 100ms throttled intervals to prevent UI overload
   - Zero-copy buffer management uses index-based tracking for efficiency
   - Special handling for compilation and "hot" processes
   - Platform-specific optimizations for Windows PowerShell

4. **Error and Signal Handling**
   - Exit codes are mapped to detailed signal information (SIGTERM, SIGKILL, etc.)
   - Core dump detection for critical failures
   - Working directory changes are tracked and handled automatically
   - Clean recovery from terminal disconnection scenarios

## Examples When Used

- When setting up a new project, Roo runs initialization commands like `npm init -y` followed by installing dependencies.
- When building a web application, Roo executes build commands like `npm run build` to compile assets.
- When deploying code, Roo runs git commands to commit and push changes to a repository.
- When troubleshooting, Roo executes diagnostic commands to gather system information.
- When starting a development server, Roo launches the appropriate server command (e.g., `npm start`).
- When running tests, Roo executes the test runner command for the project's testing framework.

## Usage Examples

Running a simple command in the current directory:
```
<execute_command>
<command>npm run dev</command>
</execute_command>
```

Installing dependencies for a project:
```
<execute_command>
<command>npm install express mongodb mongoose dotenv</command>
</execute_command>
```

Running multiple commands in sequence:
```
<execute_command>
<command>mkdir -p src/components && touch src/components/App.js</command>
</execute_command>
```

Executing a command in a specific directory:
```
<execute_command>
<command>git status</command>
<cwd>./my-project</cwd>
</execute_command>
```

Building and then starting a project:
```
<execute_command>
<command>npm run build && npm start</command>
</execute_command>
```
````

## File: docs/advanced-usage/available-tools/insert-content.md
````markdown
# insert_content

The `insert_content` tool adds new lines of content into an existing file without modifying the original content. It's ideal for inserting code blocks, configuration entries, or log lines at specific locations.

## Parameters

The tool accepts these parameters:

- `path` (required): The relative path (from the workspace root) of the file to insert content into.
- `line` (required): The 1-based line number *before* which the content should be inserted. Use `0` to append the content to the end of the file.
- `content` (required): The text content to insert.

## What It Does

This tool reads the target file, identifies the specified insertion point based on the `line` parameter, and inserts the provided `content` at that location. If `line` is `0`, the content is added to the end. Changes are presented in a diff view for user approval before being saved.

## When is it used?

- When adding new import statements at the beginning of a file.
- When inserting new functions or methods into existing code.
- When adding configuration blocks to settings files.
- When appending log entries or data records.
- When adding any multi-line text block without altering existing lines.

## Key Features

- **Targeted Insertion**: Adds content precisely at the specified line number or appends to the end.
- **Preserves Existing Content**: Does not modify or delete original file lines.
- **Interactive Approval**: Shows proposed insertions in a diff view, requiring explicit user approval.
- **User Edit Support**: Allows editing the proposed content directly within the diff view before final approval.
- **Handles Line Numbers**: Correctly interprets the `line` parameter (1-based or 0 for append).
- **Context Tracking**: Records the file edit operation for context management.
- **Error Handling**: Checks for missing parameters, invalid line numbers, and file access issues.

## Limitations

- **Insert Only**: Cannot replace or delete existing content. Use `apply_diff` or `search_and_replace` for modifications.
- **Requires Existing File**: The target file specified by `path` must exist.
- **Review Overhead**: The mandatory diff view approval adds an interactive step.

## How It Works

When the `insert_content` tool is invoked, it follows this process:

1.  **Parameter Validation**: Checks for required `path`, `line`, and `content`. Validates `line` is a non-negative integer.
2.  **File Reading**: Reads the content of the target file specified by `path`.
3.  **Insertion Point Calculation**: Converts the 1-based `line` parameter to a 0-based index for internal processing (`-1` for appending).
4.  **Content Insertion**: Uses an internal utility (`insertGroups`) to merge the original file lines with the new `content` at the calculated index.
5.  **Diff View Interaction**:
    *   Opens the file in the diff view (`cline.diffViewProvider.open`).
    *   Updates the diff view with the proposed content (`cline.diffViewProvider.update`).
6.  **User Approval**: Presents the change via `askApproval`. Reverts if rejected.
7.  **Saving Changes**: If approved, saves the changes using `cline.diffViewProvider.saveChanges`.
8.  **File Context Tracking**: Tracks the edit using `cline.getFileContextTracker().trackFileContext`.
9.  **Handling User Edits**: If the user edited the content in the diff view, reports the final merged content back.
10. **Result Reporting**: Reports success (including user edits) or failure back to the AI model.

## Usage Examples

Inserting import statements at the beginning of a file (`line: 1`):

```xml
<insert_content>
<path>src/utils.ts</path>
<line>1</line>
<content>
// Add imports at start of file
import { sum } from './math';
import { parse } from 'date-fns';
</content>
</insert_content>
```

Appending content to the end of a file (`line: 0`):

```xml
<insert_content>
<path>config/routes.yaml</path>
<line>0</line>
<content>
- path: /new-feature
  component: NewFeatureComponent
  auth_required: true
</content>
</insert_content>
```

Inserting a function before line 50:

```xml
<insert_content>
<path>src/services/api.js</path>
<line>50</line>
<content>
async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
}
</content>
</insert_content>
```
````

## File: docs/advanced-usage/available-tools/list-code-definition-names.md
````markdown
# list_code_definition_names

The `list_code_definition_names` tool provides a structural overview of your codebase by listing code definitions from source files at the top level of a specified directory. It helps Roo understand code architecture by displaying line numbers and definition snippets.

## Parameters

The tool accepts these parameters:

- `path` (required): The path of the directory to list top level source code definitions for, relative to the current working directory

## What It Does

This tool scans source code files at the top level of a specified directory and extracts code definitions like classes, functions, and interfaces. It displays the line numbers and actual code for each definition, providing a quick way to map the important components of your codebase.

## When is it used?

- When Roo needs to understand your codebase architecture quickly
- When Roo needs to locate important code constructs across multiple files
- When planning refactoring or extensions to existing code
- Before diving into implementation details with other tools
- When identifying relationships between different parts of your codebase

## Key Features

- Extracts classes, functions, methods, interfaces, and other definitions from source files
- Displays line numbers and actual source code for each definition
- Supports multiple programming languages including JavaScript, TypeScript, Python, Rust, Go, C++, C, C#, Ruby, Java, PHP, Swift, and Kotlin
- Processes only files at the top level of the specified directory (not subdirectories)
- Limits processing to a maximum of 50 files for performance
- Focuses on top-level definitions to avoid overwhelming detail
- Helps identify code organization patterns across the project
- Creates a mental map of your codebase's architecture
- Works in conjunction with other tools like `read_file` for deeper analysis

## Limitations

- Only identifies top-level definitions, not nested ones
- Only processes files at the top level of the specified directory, not subdirectories
- Limited to processing a maximum of 50 files per request
- Dependent on language-specific parsers, with varying detection quality
- May not recognize all definitions in languages with complex syntax
- Not a substitute for reading code to understand implementation details
- Cannot detect runtime patterns or dynamic code relationships
- Does not provide information about how definitions are used
- May have reduced accuracy with highly dynamic or metaprogrammed code
- Limited to specific languages supported by the implemented Tree-sitter parsers

## How It Works

When the `list_code_definition_names` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates the required `path` parameter
2. **Path Resolution**: Resolves the relative path to an absolute path
3. **Directory Scanning**: Scans only the top level of the specified directory for source code files (not recursive)
4. **File Filtering**: Limits processing to a maximum of 50 files
5. **Language Detection**: Identifies file types based on extensions (.js, .jsx, .ts, .tsx, .py, .rs, .go, .cpp, .hpp, .c, .h, .cs, .rb, .java, .php, .swift, .kt, .kts)
6. **Code Parsing**: Uses Tree-sitter to parse code and extract definitions through these steps:
   - Parsing file content into an Abstract Syntax Tree (AST)
   - Creating a query using a language-specific query string
   - Sorting the captures by their position in the file
7. **Result Formatting**: Outputs definitions with line numbers and actual source code

## Output Format

The output shows file paths followed by line numbers and the actual source code of each definition. For example:

```
src/utils.js:
0--0 | export class HttpClient {
5--5 | formatDate() {
10--10 | function parseConfig(data) {

src/models/User.js:
0--0 | interface UserProfile {
10--10 | export class User {
20--20 | function createUser(data) {
```

Each line displays:
- The start and end line numbers of the definition
- The pipe symbol (|) as a separator
- The actual source code of the definition

This output format helps you quickly see both where definitions are located in the file and their implementation details.

## Examples When Used

- When starting a new task, Roo first lists key code definitions to understand the overall structure of your project.
- When planning refactoring work, Roo uses this tool to identify classes and functions that might be affected.
- When exploring unfamiliar codebases, Roo maps the important code constructs before diving into implementation details.
- When adding new features, Roo identifies existing patterns and relevant code definitions to maintain consistency.
- When troubleshooting bugs, Roo maps the codebase structure to locate potential sources of the issue.
- When planning architecture changes, Roo identifies all affected components across files.

## Usage Examples

Listing code definitions in the current directory:
```
<list_code_definition_names>
<path>.</path>
</list_code_definition_names>
```

Examining a specific module's structure:
```
<list_code_definition_names>
<path>src/components</path>
</list_code_definition_names>
```

Exploring a utility library:
```
<list_code_definition_names>
<path>lib/utils</path>
</list_code_definition_names>
```
````

## File: docs/advanced-usage/available-tools/list-files.md
````markdown
# list_files

The `list_files` tool displays the files and directories within a specified location. It helps Roo understand your project structure and navigate your codebase effectively.

## Parameters

The tool accepts these parameters:

- `path` (required): The path of the directory to list contents for, relative to the current working directory
- `recursive` (optional): Whether to list files recursively. Use `true` for recursive listing, `false` or omit for top-level only.

## What It Does

This tool lists all files and directories in a specified location, providing a clear overview of your project structure. It can either show just the top-level contents or recursively explore subdirectories.

## When is it used?

- When Roo needs to understand your project structure
- When Roo explores what files are available before reading specific ones
- When Roo maps a codebase to better understand its organization
- Before using more targeted tools like `read_file` or `search_files`
- When Roo needs to check for specific file types (like configuration files) across a project

## Key Features

- Lists both files and directories with directories clearly marked
- Offers both recursive and non-recursive listing modes
- Intelligently ignores common large directories like `node_modules` and `.git` in recursive mode
- Respects `.gitignore` rules when in recursive mode
- Marks files ignored by `.rooignore` with a lock symbol (🔒) when `showRooIgnoredFiles` is enabled
- Optimizes file listing performance by leveraging the `ripgrep` tool.
- Sorts results to show directories before their contents, maintaining a logical hierarchy
- Presents results in a clean, organized format
- Automatically creates a mental map of your project structure

## Limitations

- File listing is capped at about 200 files by default to prevent performance issues
- The underlying `ripgrep` file listing process has a 10-second timeout; if exceeded, partial results may be returned.
- When the file limit is hit, it adds a note suggesting to use `list_files` on specific subdirectories
- Not designed for confirming the existence of files you've just created
- May have reduced performance in very large directory structures
- Cannot list files in root or home directories for security reasons

## How It Works

When the `list_files` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates the required `path` parameter and optional `recursive` parameter
2. **Path Resolution**: Resolves the relative path to an absolute path
3. **Security Checks**: Prevents listing files in sensitive locations like root or home directories
4. **Directory/File Scanning**:
   - Uses the `ripgrep` tool to efficiently list files, applying a 10-second timeout.
   - Uses Node.js `fs` module to list directories.
   - Applies different filtering logic for recursive vs. non-recursive modes.
5. **Result Filtering**:
   - In recursive mode, skips common large directories like `node_modules`, `.git`, etc.
   - Respects `.gitignore` rules when in recursive mode
   - Handles `.rooignore` patterns, either hiding files or marking them with a lock symbol
6. **Formatting**:
   - Marks directories with a trailing slash (`/`)
   - Sorts results to show directories before their contents for logical hierarchy
   - Marks ignored files with a lock symbol (🔒) when `showRooIgnoredFiles` is enabled
   - Caps results at 200 files by default with a note about using subdirectories
   - Organizes results for readability

## File Listing Format

The file listing results include:

- Each file path is displayed on its own line
- Directories are marked with a trailing slash (`/`)
- Files ignored by `.rooignore` are marked with a lock symbol (🔒) when `showRooIgnoredFiles` is enabled
- Results are sorted logically with directories appearing before their contents
- When the file limit is reached, a message appears suggesting to use `list_files` on specific subdirectories

Example output format:
```
src/
src/components/
src/components/Button.tsx
src/components/Header.tsx
src/utils/
src/utils/helpers.ts
src/index.ts
...
File listing truncated (showing 200 of 543 files). Use list_files on specific subdirectories for more details.
```

When `.rooignore` files are used and `showRooIgnoredFiles` is enabled:
```
src/
src/components/
src/components/Button.tsx
src/components/Header.tsx
🔒 src/secrets.json
src/utils/
src/utils/helpers.ts
src/index.ts
```

## Examples When Used

- When starting a new task, Roo may list the project files to understand its structure before diving into specific code.
- When asked to find specific types of files (like all JavaScript files), Roo first lists directories to know where to look.
- When providing recommendations for code organization, Roo examines the current project structure first.
- When setting up a new feature, Roo lists related directories to understand the project conventions.

## Usage Examples

Listing top-level files in the current directory:
```
<list_files>
<path>.</path>
</list_files>
```

Recursively listing all files in a source directory:
```
<list_files>
<path>src</path>
<recursive>true</recursive>
</list_files>
```

Examining a specific project subdirectory:
```
<list_files>
<path>src/components</path>
<recursive>false</recursive>
</list_files>
```
````

## File: docs/advanced-usage/available-tools/new-task.md
````markdown
# new_task

The `new_task` tool creates subtasks with specialized modes while maintaining a parent-child relationship. It breaks down complex projects into manageable pieces, each operating in the mode best suited for specific work.

## Parameters

The tool accepts these parameters:

- `mode` (required): The slug of the mode to start the new task in (e.g., "code", "ask", "architect")
- `message` (required): The initial user message or instructions for this new task

## What It Does

This tool creates a new task instance with a specified starting mode and initial message. It allows complex workflows to be divided into subtasks with their own conversation history. Parent tasks are paused during subtask execution and resumed when the subtask completes, with results transferred back to the parent.

## When is it used?

- When breaking down complex projects into separate, focused subtasks
- When different aspects of a task require different specialized modes
- When different phases of work benefit from context separation
- When organizing multi-phase development workflows

## Key Features

- Creates subtasks with their own conversation history and specialized mode
- Pauses parent tasks for later resumption
- Maintains hierarchical task relationships for navigation
- Transfers results back to parent tasks upon completion
- Supports workflow segregation for complex projects
- Allows different parts of a project to use modes optimized for specific work
- Requires explicit user approval for task creation
- Provides clear task transition in the UI

## Limitations

- Cannot create tasks with modes that don't exist
- Requires user approval before creating each new task
- Task interface may become complex with deeply nested subtasks
- Subtasks inherit certain workspace and extension configurations from parents
- May require re-establishing context when switching between deeply nested tasks
- Task completion needs explicit signaling to properly return to parent tasks

## How It Works

When the `new_task` tool is invoked, it follows this process:

1. **Parameter Validation**:
   - Validates the required `mode` and `message` parameters
   - Verifies that the requested mode exists in the system

2. **Task Stack Management**:
   - Maintains a task stack that tracks all active and paused tasks
   - Preserves the current mode for later resumption
   - Sets the parent task to paused state

3. **Task Context Management**:
   - Creates a new task context with the provided message
   - Assigns unique taskId and instanceId identifiers for state management
   - Captures telemetry data on tool usage and task lifecycles

4. **Mode Switching and Integration**:
   - Switches to the specified mode with appropriate role and capabilities
   - Initializes the new task with the provided message
   - Integrates with VS Code's command palette and code actions

5. **Task Completion and Result Transfer**:
   - When subtask completes, result is passed back to parent task via `finishSubTask()`
   - Parent task resumes in its original mode
   - Task history and token usage metrics are updated
   - The `taskCompleted` event is emitted with performance data

## Examples When Used

- When a front-end developer needs to architect a new feature, implement the code, and document it, they can create separate tasks for each phase with results flowing from one phase to the next.
- When debugging an issue before implementing a fix, the debugging task can document findings that are passed to the implementation task.
- When developing a full-stack application, database schema designs from an architect-mode task inform implementation details in a subsequent code-mode task.
- When documenting a system after implementation, the documentation task can reference the completed implementation while using documentation-specific features.

## Usage Examples

Creating a new task in code mode:
```
<new_task>
<mode>code</mode>
<message>Implement a user authentication service with login, registration, and password reset functionality.</message>
</new_task>
```

Creating a documentation task after completing implementation:
```
<new_task>
<mode>docs</mode>
<message>Create comprehensive API documentation for the authentication service we just built.</message>
</new_task>
```

Breaking down a complex feature into architectural planning and implementation:
```
<new_task>
<mode>architect</mode>
<message>Design the database schema and system architecture for our new e-commerce platform.</message>
</new_task>
```
````

## File: docs/advanced-usage/available-tools/read-file.md
````markdown
# read_file

The `read_file` tool examines the contents of files in a project. It allows Roo to understand code, configuration files, and documentation to provide better assistance.

## Parameters

The tool accepts these parameters:

- `path` (required): The path of the file to read relative to the current working directory
- `start_line` (optional): The starting line number to read from (1-based indexing)
- `end_line` (optional): The ending line number to read to (1-based, inclusive)

## What It Does

This tool reads the content of a specified file and returns it with line numbers for easy reference. It can read entire files or specific sections, and even extract text from PDFs and Word documents.

## When is it used?

- When Roo needs to understand existing code structure
- When Roo needs to analyze configuration files
- When Roo needs to extract information from text files
- When Roo needs to see code before suggesting changes
- When specific line numbers need to be referenced in discussions

## Key Features

- Displays file content with line numbers for easy reference
- Can read specific portions of files by specifying line ranges
- Extracts readable text from PDF and DOCX files
- Automatically truncates large text files when no line range is specified, showing the beginning of the file
- Provides method summaries with line ranges for truncated large code files
- Efficiently streams only requested line ranges for better performance
- Makes it easy to discuss specific parts of code with line numbering

## Limitations

- May not handle extremely large files efficiently without using line range parameters
- For binary files (except PDF and DOCX), may return content that isn't human-readable

## How It Works

When the `read_file` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates the required `path` parameter and optional parameters
2. **Path Resolution**: Resolves the relative path to an absolute path
3. **Reading Strategy Selection**:
   - The tool uses a strict priority hierarchy (explained in detail below)
   - It chooses between range reading, auto-truncation, or full file reading
4. **Content Processing**:
   - Adds line numbers to the content (e.g., "1 | const x = 13") where `1 |` is the line number.
   - For truncated files, adds truncation notice and method definitions
   - For special formats (PDF, DOCX), extracts readable text

## Reading Strategy Priority

The tool uses a clear decision hierarchy to determine how to read a file:

1. **First Priority: Explicit Line Range**
   - If either `start_line` or `end_line` is provided, the tool always performs a range read
   - The implementation efficiently streams only the requested lines, making it suitable for processing large files
   - This takes precedence over all other options

2. **Second Priority: Automatic Truncation for Large Text Files**
   - This applies only when **all** of the following conditions are met:
     - Neither `start_line` nor `end_line` is specified.
     - The file is identified as a text-based file (not binary like PDF/DOCX).
     - The file's total line count exceeds an internal limit (e.g., `maxReadFileLine`, often around 500 lines).
   - When automatic truncation occurs:
     - The tool reads only the *first* `maxReadFileLine` lines.
     - It appends a notice indicating truncation (e.g., `[Showing only 500 of 1200 total lines...]`).
     - For code files, it may also append a summary of source code definitions found within the truncated portion.

3. **Default Behavior: Read Entire File**
   - If neither an explicit range is given nor automatic truncation applies (e.g., the file is within the line limit, or it's a supported binary type), the tool reads the entire content.
   - For supported formats like PDF and DOCX, it attempts to extract the full text content.

## Examples When Used

- When asked to explain or improve code, Roo first reads the relevant files to understand the current implementation.
- When troubleshooting configuration issues, Roo reads config files to identify potential problems.
- When working with documentation, Roo reads existing docs to understand the current content before suggesting improvements.

## Usage Examples

Here are several scenarios demonstrating how the `read_file` tool is used and the typical output you might receive.

### Reading an Entire File

To read the complete content of a file:

**Input:**
```xml
<read_file>
<path>src/app.js</path>
</read_file>
```

**Simulated Output (for a small file like `example_small.txt`):**
```
1 | This is the first line.
2 | This is the second line.
3 | This is the third line.
```
*(Output will vary based on the actual file content)*

### Reading Specific Lines

To read only a specific range of lines (e.g., 46-68):

**Input:**
```xml
<read_file>
<path>src/app.js</path>
<start_line>46</start_line>
<end_line>68</end_line>
</read_file>
```

**Simulated Output (for lines 2-3 of `example_five_lines.txt`):**
```
2 | Content of line two.
3 | Content of line three.
```
*(Output shows only the requested lines with their original line numbers)*

### Reading a Large Text File (Automatic Truncation)

When reading a large text file without specifying a line range, the tool automatically truncates the content if it exceeds the internal line limit (e.g., 500 lines).

**Input:**
```xml
<read_file>
<path>logs/large_app.log</path>
</read_file>
```

**Simulated Output (for a 1500-line log file with a 500-line limit):**
```
1 | Log entry 1...
2 | Log entry 2...
...
500 | Log entry 500...

[Showing only 500 of 1500 total lines. Use start_line and end_line to read specific ranges.]
// Optional: Source code definitions summary might appear here for code files
```
*(Output shows the beginning lines up to the internal limit, plus a truncation notice. Use line ranges for full access.)*

### Attempting to Read a Non-Existent File

If the specified file does not exist:

**Input:**
```xml
<read_file>
<path>non_existent_file.txt</path>
</read_file>
```

**Simulated Output (Error):**
```
Error: File not found at path 'non_existent_file.txt'.
```

### Attempting to Read a Blocked File

If the file is excluded by rules in a `.rooignore` file:

**Input:**
```xml
<read_file>
<path>.env</path>
</read_file>
```

**Simulated Output (Error):**
```
Error: Access denied to file '.env' due to .rooignore rules.
```
````

## File: docs/advanced-usage/available-tools/search-and-replace.md
````markdown
# search_and_replace

The `search_and_replace` tool finds and replaces text within a file, supporting both literal strings and regular expression patterns. It allows for targeted replacements across multiple locations, optionally within specific line ranges.

## Parameters

### Required Parameters

- `path`: The relative path (from the workspace root) of the file to modify.
- `search`: The text string or regex pattern to find.
- `replace`: The text to replace matches with.

### Optional Parameters

- `start_line`: The 1-based line number where the search scope begins.
- `end_line`: The 1-based line number where the search scope ends (inclusive).
- `use_regex`: Set to `"true"` to treat the `search` parameter as a regular expression pattern (default is `false`).
- `ignore_case`: Set to `"true"` to perform a case-insensitive search (default is `false`).

## What It Does

This tool reads the specified file and performs a search-and-replace operation based on the provided parameters. It can operate on the entire file or be restricted to a specific range of lines. Changes are presented in a diff view for user review and approval before being saved.

## When is it used?

- When renaming variables, functions, or classes across a file.
- When updating specific text strings or values consistently.
- When applying patterned changes using regular expressions.
- When refactoring code requires replacing specific patterns.
- When making targeted changes within a defined section of a file.

## Key Features

- **Flexible Searching**: Supports both literal text and regular expression patterns.
- **Case Sensitivity Control**: Option to ignore case during search.
- **Scoped Replacements**: Can limit replacements to a specific range of lines (`start_line`, `end_line`).
- **Global Replacement**: Performs replacements across the entire file (or specified range) by default.
- **Interactive Approval**: Shows proposed changes in a diff view for user review and approval.
- **User Edit Support**: Allows editing the proposed content directly within the diff view.
- **Context Tracking**: Records the file edit operation.
- **Error Handling**: Checks for missing parameters, file access issues, and invalid line numbers.

## Limitations

- **Single File Operation**: Operates on only one file at a time. Use `search_files` to find patterns across multiple files first.
- **Review Overhead**: The mandatory diff view approval adds an interactive step.
- **Regex Complexity**: Complex regex patterns might require careful construction and testing.

## How It Works

When the `search_and_replace` tool is invoked, it follows this process:

1.  **Parameter Validation**: Checks for required `path`, `search`, `replace`, and validates optional parameters like line numbers and boolean flags.
2.  **File Reading**: Reads the content of the target file specified by `path`.
3.  **Regex Construction**:
    *   If `use_regex` is `false`, the `search` string is escaped to treat it as literal text.
    *   A `RegExp` object is created with the `g` (global) flag and optionally the `i` (ignore case) flag.
4.  **Replacement Execution**:
    *   If `start_line` or `end_line` are provided, the file content is split into lines, the relevant section is isolated, the replacement is performed on that section, and the file content is reconstructed.
    *   If no line range is specified, the replacement is performed on the entire file content string.
5.  **Diff View Interaction**:
    *   Opens the file in the diff view showing original vs. proposed content.
    *   Updates the diff view with the result of the replacement.
6.  **User Approval**: Presents the change via `askApproval`. Reverts if rejected.
7.  **Saving Changes**: If approved, saves the changes (including any user edits made in the diff view).
8.  **File Context Tracking**: Tracks the edit using `cline.getFileContextTracker().trackFileContext`.
9.  **Result Reporting**: Reports success (including user edits) or failure back to the AI model.

## Usage Examples

Simple text replacement throughout a file:

```xml
<search_and_replace>
<path>src/config.js</path>
<search>API_KEY_OLD</search>
<replace>API_KEY_NEW</replace>
</search_and_replace>
```

Case-insensitive regex replacement to update function calls:

```xml
<search_and_replace>
<path>src/app.ts</path>
<search>processData\((.*?)\)</search>
<replace>handleData($1)</replace>
<use_regex>true</use_regex>
<ignore_case>true</ignore_case>
</search_and_replace>
```

Replacing text only within lines 10 to 20:

```xml
<search_and_replace>
<path>README.md</path>
<search>Draft</search>
<replace>Final</replace>
<start_line>10</start_line>
<end_line>20</end_line>
</search_and_replace>
```
````

## File: docs/advanced-usage/available-tools/search-files.md
````markdown
# search_files

The `search_files` tool performs regex searches across multiple files in your project. It helps Roo locate specific code patterns, text, or other content throughout your codebase with contextual results.

## Parameters

The tool accepts these parameters:

- `path` (required): The path of the directory to search in, relative to the current working directory
- `regex` (required): The regular expression pattern to search for (uses Rust regex syntax)
- `file_pattern` (optional): Glob pattern to filter files (e.g., '*.ts' for TypeScript files)

## What It Does

This tool searches across files in a specified directory using regular expressions, showing each match with surrounding context. It's like having a powerful "Find in Files" feature that works across the entire project structure.

## When is it used?

- When Roo needs to find where specific functions or variables are used
- When Roo helps with refactoring and needs to understand usage patterns
- When Roo needs to locate all instances of a particular code pattern
- When Roo searches for text across multiple files with filtering capabilities

## Key Features

- Searches across multiple files in a single operation using high-performance Ripgrep
- Shows context around each match (1 line before and after)
- Filters files by type using glob patterns (e.g., only TypeScript files)
- Provides line numbers for easy reference
- Uses powerful regex patterns for precise searches
- Automatically limits output to 300 results with notification
- Truncates lines longer than 500 characters with "[truncated...]" marker
- Intelligently combines nearby matches into single blocks for readability

## Limitations

- Works best with text-based files (not effective for binary files like images)
- Performance may slow with extremely large codebases
- Uses Rust regex syntax, which may differ slightly from other regex implementations
- Cannot search within compressed files or archives
- Default context size is fixed (1 line before and after)
- May display varying context sizes when matches are close together due to result grouping

## How It Works

When the `search_files` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates the required `path` and `regex` parameters
2. **Path Resolution**: Resolves the relative path to an absolute path
3. **Search Execution**:
   - Uses Ripgrep (rg) for high-performance text searching
   - Applies file pattern filtering if specified
   - Collects matches with surrounding context
4. **Result Formatting**:
   - Formats results with file paths, line numbers, and context
   - Displays 1 line of context before and after each match
   - Structures output for easy readability
   - Limits results to a maximum of 300 matches with notification
   - Truncates lines longer than 500 characters
   - Merges nearby matches into contiguous blocks

## Search Results Format

The search results include:

- Relative file paths for each matching file (prefixed with #)
- Context lines before and after each match (1 line by default)
- Line numbers padded to 3 spaces followed by ` | ` and the line content
- A separator line (----) after each match group

Example output format:
```
# rel/path/to/app.ts
 11 |   // Some processing logic here
 12 |   // TODO: Implement error handling
 13 |   return processedData;
----

# Showing first 300 of 300+ results. Use a more specific search if necessary.
```

When matches occur close to each other, they're merged into a single block rather than shown as separate results:

```
# rel/path/to/auth.ts
 13 | // Some code here
 14 | // TODO: Add proper validation
 15 | function validateUser(credentials) {
 16 |   // TODO: Implement rate limiting
 17 |   return checkDatabase(credentials);
----
```

## Examples When Used

- When asked to refactor a function, Roo first searches for all places the function is used to ensure comprehensive changes.
- When investigating bugs, Roo searches for similar patterns to identify related issues across the codebase.
- When addressing technical debt, Roo locates all TODO comments across the project.
- When analyzing dependencies, Roo finds all imports of a particular module.

## Usage Examples

Searching for TODO comments in all JavaScript files:
```
<search_files>
<path>src</path>
<regex>TODO|FIXME</regex>
<file_pattern>*.js</file_pattern>
</search_files>
```

Finding all usages of a specific function:
```
<search_files>
<path>.</path>
<regex>function\s+calculateTotal</regex>
<file_pattern>*.{js,ts}</file_pattern>
</search_files>
```

Searching for a specific import pattern across the entire project:
```
<search_files>
<path>.</path>
<regex>import\s+.*\s+from\s+['"]@components/</regex>
</search_files>
```
````

## File: docs/advanced-usage/available-tools/switch-mode.md
````markdown
# switch_mode

The `switch_mode` tool enables Roo to change between different operational modes, each with specialized capabilities for specific types of tasks. This allows seamless transitions between modes like Code, Architect, Ask, or Debug when the current task requires different expertise.

## Parameters

The tool accepts these parameters:

- `mode_slug` (required): The slug of the mode to switch to (e.g., "code", "ask", "architect")
- `reason` (optional): The reason for switching modes, providing context for the user

## What It Does

This tool requests a mode change when the current task would be better handled by another mode's capabilities. It maintains context while shifting Roo's focus and available toolsets to match the requirements of the new task phase.

## When is it used?

- When transitioning from information gathering to code implementation
- When shifting from coding to architecture or design
- When the current task requires capabilities only available in a different mode
- When specialized expertise is needed for a particular phase of a complex project

## Key Features

- Maintains context continuity across mode transitions
- Provides clear reasoning for mode switch recommendations
- Requires user approval for all mode changes
- Enforces tool group restrictions specific to each mode
- Seamlessly adapts tool availability based on the selected mode
- Works with both standard and custom modes
- Displays the mode switch and reasoning in the UI
- Uses XML-style formatting for parameter specification
- Handles file type restrictions specific to certain modes

## Limitations

- Cannot switch to modes that don't exist in the system
- Requires explicit user approval for each mode transition
- Cannot use tools specific to a mode until the switch is complete
- Applies a 500ms delay after mode switching to allow the change to take effect
- Some modes have file type restrictions (e.g., Architect mode can only edit markdown files)
- Mode preservation for resumption applies only to the `new_task` functionality, not general mode switching

## How It Works

When the `switch_mode` tool is invoked, it follows this process:

1. **Request Validation**:
   - Validates that the requested mode exists in the system
   - Checks that the `mode_slug` parameter is provided and valid
   - Verifies the user isn't already in the requested mode
   - Ensures the `reason` parameter (if provided) is properly formatted

2. **Mode Transition Preparation**:
   - Packages the mode change request with the provided reason
   - Presents the change request to the user for approval

3. **Mode Activation (Upon User Approval)**:
   - Updates the UI to reflect the new mode
   - Adjusts available tools based on the mode's tool group configuration
   - Applies the mode-specific prompt and behavior
   - Applies a 500ms delay to allow the change to take effect before executing next tool
   - Enforces any file restrictions specific to the mode

4. **Continuation**:
   - Proceeds with the task using the capabilities of the new mode
   - Retains relevant context from the previous interaction

## Tool Group Association

The `switch_mode` tool belongs to the "modes" tool group but is also included in the "always available" tools list. This means:

- It can be used in any mode regardless of the mode's configured tool groups
- It's available alongside other core tools like `ask_followup_question` and `attempt_completion`
- It allows mode transitions at any point in a workflow when task requirements change

## Mode Structure

Each mode in the system has a specific structure:

- `slug`: Unique identifier for the mode (e.g., "code", "ask")
- `name`: Display name for the mode (e.g., "Code", "Ask")
- `roleDefinition`: The specialized role and capabilities of the mode
- `customInstructions`: Optional mode-specific instructions that guide behavior
- `groups`: Tool groups available to the mode with optional restrictions

## Mode Capabilities

The core modes provide these specialized capabilities:

- **Code Mode**: Focused on coding tasks with full access to code editing tools
- **Architect Mode**: Specialized for system design and architecture planning, limited to editing markdown files only
- **Ask Mode**: Optimized for answering questions and providing information
- **Debug Mode**: Equipped for systematic problem diagnosis and resolution

## Custom Modes

Beyond the core modes, the system supports custom project-specific modes:

- Custom modes can be defined with specific tool groups enabled
- They can specify custom role definitions and instructions
- The system checks custom modes first before falling back to core modes
- Custom mode definitions take precedence over core modes with the same slug

## File Restrictions

Different modes may have specific file type restrictions:

- **Architect Mode**: Can only edit files matching the `.md` extension
- Attempting to edit restricted file types results in a `FileRestrictionError`
- These restrictions help enforce proper separation of concerns between modes

## Examples When Used

- When discussing a new feature, Roo switches from Ask mode to Architect mode to help design the system structure.
- After completing architecture planning in Architect mode, Roo switches to Code mode to implement the designed features.
- When encountering bugs during development, Roo switches from Code mode to Debug mode for systematic troubleshooting.

## Usage Examples

Switching to Code mode for implementation:
```
<switch_mode>
<mode_slug>code</mode_slug>
<reason>Need to implement the login functionality based on the architecture we've discussed</reason>
</switch_mode>
```

Switching to Architect mode for design:
```
<switch_mode>
<mode_slug>architect</mode_slug>
<reason>Need to design the system architecture before implementation</reason>
</switch_mode>
```

Switching to Debug mode for troubleshooting:
```
<switch_mode>
<mode_slug>debug</mode_slug>
<reason>Need to systematically diagnose the authentication error</reason>
</switch_mode>
```

Switching to Ask mode for information:
```
<switch_mode>
<mode_slug>ask</mode_slug>
<reason>Need to answer questions about the implemented feature</reason>
</switch_mode>
```
````

## File: docs/advanced-usage/available-tools/tool-use-overview.md
````markdown
# Tool Use Overview

Roo Code implements a sophisticated tool system that allows AI models to interact with your development environment in a controlled and secure manner. This document explains how tools work, when they're called, and how they're managed.

## Core Concepts

### Tool Groups

Tools are organized into logical groups based on their functionality:

| Category | Purpose | Tools | Common Use |
|----------|---------|-------|------------|
| **Read Group** | File system reading and searching | [read_file](/advanced-usage/available-tools/read-file), [search_files](/advanced-usage/available-tools/search-files), [list_files](/advanced-usage/available-tools/list-files), [list_code_definition_names](/advanced-usage/available-tools/list-code-definition-names) | Code exploration and analysis |
| **Edit Group** | File system modifications | [apply_diff](/advanced-usage/available-tools/apply-diff), [insert_content](/advanced-usage/available-tools/insert-content), [search_and_replace](/advanced-usage/available-tools/search-and-replace), [write_to_file](/advanced-usage/available-tools/write-to-file) | Code changes and file manipulation |
| **Browser Group** | Web automation | [browser_action](/advanced-usage/available-tools/browser-action) | Web testing and interaction |
| **Command Group** | System command execution | [execute_command](/advanced-usage/available-tools/execute-command) | Running scripts, building projects |
| **MCP Group** | External tool integration | [use_mcp_tool](/advanced-usage/available-tools/use-mcp-tool), [access_mcp_resource](/advanced-usage/available-tools/access-mcp-resource) | Specialized functionality through external servers |
| **Workflow Group** | Mode and task management | [switch_mode](/advanced-usage/available-tools/switch-mode), [new_task](/advanced-usage/available-tools/new-task), [ask_followup_question](/advanced-usage/available-tools/ask-followup-question), [attempt_completion](/advanced-usage/available-tools/attempt-completion) | Context switching and task organization |

### Always Available Tools

Certain tools are accessible regardless of the current mode:

- [ask_followup_question](/advanced-usage/available-tools/ask-followup-question): Gather additional information from users
- [attempt_completion](/advanced-usage/available-tools/attempt-completion): Signal task completion
- [switch_mode](/advanced-usage/available-tools/switch-mode): Change operational modes
- [new_task](/advanced-usage/available-tools/new-task): Create subtasks

## Available Tools

### Read Tools
These tools help Roo understand your code and project:

- [read_file](/advanced-usage/available-tools/read-file) - Examines the contents of files
- [search_files](/advanced-usage/available-tools/search-files) - Finds patterns across multiple files
- [list_files](/advanced-usage/available-tools/list-files) - Maps your project's file structure
- [list_code_definition_names](/advanced-usage/available-tools/list-code-definition-names) - Creates a structural map of your code

### Edit Tools
These tools help Roo make changes to your code:

- [apply_diff](/advanced-usage/available-tools/apply-diff) - Makes precise, surgical changes to your code
- [insert_content](/advanced-usage/available-tools/insert-content) - Adds new lines of content without modifying existing lines
- [search_and_replace](/advanced-usage/available-tools/search-and-replace) - Finds and replaces text or regex patterns within a file
- [write_to_file](/advanced-usage/available-tools/write-to-file) - Creates new files or completely rewrites existing ones

### Browser Tools
These tools help Roo interact with web applications:

- [browser_action](/advanced-usage/available-tools/browser-action) - Automates browser interactions

### Command Tools
These tools help Roo execute commands:

- [execute_command](/advanced-usage/available-tools/execute-command) - Runs system commands and programs

### MCP Tools
These tools help Roo connect with external services:

- [use_mcp_tool](/advanced-usage/available-tools/use-mcp-tool) - Uses specialized external tools
- [access_mcp_resource](/advanced-usage/available-tools/access-mcp-resource) - Accesses external data sources

### Workflow Tools
These tools help manage the conversation and task flow:

- [ask_followup_question](/advanced-usage/available-tools/ask-followup-question) - Gets additional information from you
- [attempt_completion](/advanced-usage/available-tools/attempt-completion) - Presents final results
- [switch_mode](/advanced-usage/available-tools/switch-mode) - Changes to a different mode for specialized tasks
- [new_task](/advanced-usage/available-tools/new-task) - Creates a new subtask

## Tool Calling Mechanism

### When Tools Are Called

Tools are invoked under specific conditions:

1. **Direct Task Requirements**
   - When specific actions are needed to complete a task as decided by the LLM
   - In response to user requests
   - During automated workflows

2. **Mode-Based Availability**
   - Different modes enable different tool sets
   - Mode switches can trigger tool availability changes
   - Some tools are restricted to specific modes

3. **Context-Dependent Calls**
   - Based on the current state of the workspace
   - In response to system events
   - During error handling and recovery

### Decision Process

The system uses a multi-step process to determine tool availability:

1. **Mode Validation**
   ```typescript
   isToolAllowedForMode(
       tool: string,
       modeSlug: string,
       customModes: ModeConfig[],
       toolRequirements?: Record<string, boolean>,
       toolParams?: Record<string, any>
   )
   ```

2. **Requirement Checking**
   - System capability verification
   - Resource availability
   - Permission validation

3. **Parameter Validation**
   - Required parameter presence
   - Parameter type checking
   - Value validation

## Technical Implementation

### Tool Call Processing

1. **Initialization**
   - Tool name and parameters are validated
   - Mode compatibility is checked
   - Requirements are verified

2. **Execution**
   ```typescript
   const toolCall = {
       type: "tool_call",
       name: chunk.name,
       arguments: chunk.input,
       callId: chunk.callId
   }
   ```

3. **Result Handling**
   - Success/failure determination
   - Result formatting
   - Error handling

### Security and Permissions

1. **Access Control**
   - File system restrictions
   - Command execution limitations
   - Network access controls

2. **Validation Layers**
   - Tool-specific validation
   - Mode-based restrictions
   - System-level checks

## Mode Integration

### Mode-Based Tool Access

Tools are made available based on the current mode:

- **Code Mode**: Full access to file system tools, code editing capabilities, command execution
- **Ask Mode**: Limited to reading tools, information gathering capabilities, no file system modifications
- **Architect Mode**: Design-focused tools, documentation capabilities, limited execution rights
- **Custom Modes**: Can be configured with specific tool access for specialized workflows

### Mode Switching

1. **Process**
   - Current mode state preservation
   - Tool availability updates
   - Context switching

2. **Impact on Tools**
   - Tool set changes
   - Permission adjustments
   - Context preservation

## Best Practices

### Tool Usage Guidelines

1. **Efficiency**
   - Use the most specific tool for the task
   - Avoid redundant tool calls
   - Batch operations when possible

2. **Security**
   - Validate inputs before tool calls
   - Use minimum required permissions
   - Follow security best practices

3. **Error Handling**
   - Implement proper error checking
   - Provide meaningful error messages
   - Handle failures gracefully

### Common Patterns

1. **Information Gathering**
   ```
   [ask_followup_question](/advanced-usage/available-tools/ask-followup-question) → [read_file](/advanced-usage/available-tools/read-file) → [search_files](/advanced-usage/available-tools/search-files)
   ```

2. **Code Modification**
   ```
   [read_file](/advanced-usage/available-tools/read-file) → [apply_diff](/advanced-usage/available-tools/apply-diff) → [attempt_completion](/advanced-usage/available-tools/attempt-completion)
   ```

3. **Task Management**
   ```
   [new_task](/advanced-usage/available-tools/new-task) → [switch_mode](/advanced-usage/available-tools/switch-mode) → [execute_command](/advanced-usage/available-tools/execute-command)
   ```

## Error Handling and Recovery

### Error Types

1. **Tool-Specific Errors**
   - Parameter validation failures
   - Execution errors
   - Resource access issues

2. **System Errors**
   - Permission denied
   - Resource unavailable
   - Network failures

3. **Context Errors**
   - Invalid mode for tool
   - Missing requirements
   - State inconsistencies

### Recovery Strategies

1. **Automatic Recovery**
   - Retry mechanisms
   - Fallback options
   - State restoration

2. **User Intervention**
   - Error notifications
   - Recovery suggestions
   - Manual intervention options
````

## File: docs/advanced-usage/available-tools/use-mcp-tool.md
````markdown
# use_mcp_tool

The `use_mcp_tool` tool enables interaction with external tools provided by connected Model Context Protocol (MCP) servers. It extends Roo's capabilities with domain-specific functionality through a standardized protocol.

## Parameters

The tool accepts these parameters:

- `server_name` (required): The name of the MCP server providing the tool
- `tool_name` (required): The name of the tool to execute
- `arguments` (required/optional): A JSON object containing the tool's input parameters, following the tool's input schema. May be optional for tools that require no input.

## What It Does

This tool allows Roo to access specialized functionality provided by external MCP servers. Each MCP server can offer multiple tools with unique capabilities, extending Roo beyond its built-in functionality. The system validates arguments against schemas, manages server connections, and processes responses of various content types (text, image, resource).

## When is it used?

- When specialized functionality not available in core tools is needed
- When domain-specific operations are required
- When integration with external systems or services is needed
- When working with data that requires specific processing or analysis
- When accessing proprietary tools through a standardized interface

## Key Features

- Uses the standardized MCP protocol via the `@modelcontextprotocol/sdk` library
- Supports multiple transport mechanisms (StdioClientTransport and SSEClientTransport)
- Validates arguments using Zod schema validation on both client and server sides
- Processes multiple response content types: text, image, and resource references
- Manages server lifecycle with automatic restarts when server code changes
- Provides an "always allow" mechanism to bypass approval for trusted tools
- Works with the companion `access_mcp_resource` tool for resource retrieval
- Maintains proper error tracking and handling for failed operations
- Supports configurable timeouts (1-3600 seconds, default: 60 seconds)
- Allows file watchers to automatically detect and reload server changes

## Limitations

- Depends on external MCP servers being available and connected
- Limited to the tools provided by connected servers
- Tool capabilities vary between different MCP servers
- Network issues can affect reliability and performance
- Requires user approval before execution (unless in the "always allow" list)
- Cannot execute multiple MCP tool operations simultaneously

## Server Configuration

MCP servers can be configured globally or at the project level:

- **Global Configuration**: Managed through the Roo Code extension settings in VS Code. These apply across all projects unless overridden.
- **Project-level Configuration**: Defined in a `.roo/mcp.json` file within your project's root directory.
 - This allows project-specific server setups.
 - Project-level servers take precedence over global servers if they share the same name.
 - Since `.roo/mcp.json` can be committed to version control, it simplifies sharing configurations with your team.

## How It Works

When the `use_mcp_tool` tool is invoked, it follows this process:

1. **Initialization and Validation**:
   - The system verifies that the MCP hub is available
   - Confirms the specified server exists and is connected
   - Validates the requested tool exists on the server
   - Arguments are validated against the tool's schema definition
   - Timeout settings are extracted from server configuration (default: 60 seconds)

2. **Execution and Communication**:
   - The system selects the appropriate transport mechanism:
     - `StdioClientTransport`: For communicating with local processes via standard I/O
     - `SSEClientTransport`: For communicating with HTTP servers via Server-Sent Events
   - A request is sent with validated server name, tool name, and arguments
   - Communication uses the `@modelcontextprotocol/sdk` library for standardized interactions
   - Request execution is tracked with timeout handling to prevent hanging operations

3. **Response Processing**:
   - Responses can include multiple content types:
     - Text content: Plain text responses
     - Image content: Binary image data with MIME type information
     - Resource references: URIs to access server resources (works with `access_mcp_resource`)
   - The system checks the `isError` flag to determine if error handling is needed
   - Results are formatted for display in the Roo interface

4. **Resource and Error Handling**:
   - The system uses WeakRef patterns to prevent memory leaks
   - A consecutive mistake counter tracks and manages errors
   - File watchers monitor for server code changes and trigger automatic restarts
   - The security model requires approval for tool execution unless in the "always allow" list

## Security and Permissions

The MCP architecture provides several security features:

- Users must approve tool usage before execution (by default)
- Specific tools can be marked for automatic approval in the "always allow" list
- Server configurations are validated with Zod schemas for integrity
- Configurable timeouts prevent hanging operations (1-3600 seconds)
- Server connections can be enabled or disabled through the UI

## Examples When Used

- Analyzing specialized data formats using server-side processing tools
- Generating images or other media through AI models hosted on external servers
- Executing complex domain-specific calculations without local implementation
- Accessing proprietary APIs or services through a controlled interface
- Retrieving data from specialized databases or data sources

## Usage Examples

Requesting weather forecast data with text response:
```
<use_mcp_tool>
<server_name>weather-server</server_name>
<tool_name>get_forecast</tool_name>
<arguments>
{
  "city": "San Francisco",
  "days": 5,
  "format": "text"
}
</arguments>
</use_mcp_tool>
```

Analyzing source code with a specialized tool that returns JSON:
```
<use_mcp_tool>
<server_name>code-analysis</server_name>
<tool_name>complexity_metrics</tool_name>
<arguments>
{
  "language": "typescript",
  "file_path": "src/app.ts",
  "include_functions": true,
  "metrics": ["cyclomatic", "cognitive"]
}
</arguments>
</use_mcp_tool>
```

Generating an image with specific parameters:
```
<use_mcp_tool>
<server_name>image-generation</server_name>
<tool_name>create_image</tool_name>
<arguments>
{
  "prompt": "A futuristic city with flying cars",
  "style": "photorealistic",
  "dimensions": {
    "width": 1024,
    "height": 768
  },
  "format": "webp"
}
</arguments>
</use_mcp_tool>
```

Accessing a resource through a tool that returns a resource reference:
```
<use_mcp_tool>
<server_name>database-connector</server_name>
<tool_name>query_and_store</tool_name>
<arguments>
{
  "database": "users",
  "type": "select",
  "fields": ["name", "email", "last_login"],
  "where": {
    "status": "active"
  },
  "store_as": "active_users"
}
</arguments>
</use_mcp_tool>
```

Tool with no required arguments:
```
<use_mcp_tool>
<server_name>system-monitor</server_name>
<tool_name>get_current_status</tool_name>
<arguments>
{}
</arguments>
</use_mcp_tool>
```
````

## File: docs/advanced-usage/available-tools/write-to-file.md
````markdown
# write_to_file

The `write_to_file` tool creates new files or completely replaces existing file content with an interactive approval process. It provides a diff view for reviewing changes before they're applied.

## Parameters

The tool accepts these parameters:

- `path` (required): The path of the file to write to, relative to the current working directory
- `content` (required): The complete content to write to the file
- `line_count` (required): The number of lines in the file, including empty lines

## What It Does

This tool writes content to a specified file, either creating a new file if it doesn't exist or completely overwriting an existing file. All changes require explicit user approval through a diff view interface, where users can review and even edit the proposed changes before they're applied.

## When is it used?

- When Roo needs to create a new file from scratch
- When Roo needs to completely rewrite an existing file
- When creating multiple files for a new project
- When generating configuration files, documentation, or source code
- When you need to review changes before they're applied

## Key Features

- Interactive Approval: Shows changes in a diff view requiring explicit approval before applying
- User Edit Support: Allows editing the proposed content before final approval
- Safety Measures: Detects code omission, validates paths, and prevents truncated content
- Editor Integration: Opens a diff view that scrolls to the first difference automatically
- Content Preprocessing: Handles artifacts from different AI models to ensure clean content
- Access Control: Validates against `.rooignore` restrictions before making changes
- Parent Directories: May handle directory creation through system dependencies
- Complete Replacement: Provides a fully transformed file in a single operation

## Limitations

- Not suitable for existing files: Much slower and less efficient than `apply_diff` for modifying existing files
- Performance with large files: Operation becomes significantly slower with larger files
- Complete overwrite: Replaces entire file content, cannot preserve original content
- Line count required: Needs accurate line count to detect potential content truncation
- Review overhead: The approval process adds extra steps compared to direct edits
- Interactive only: Cannot be used in automated workflows that require non-interactive execution

## How It Works

When the `write_to_file` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates the required parameters and permissions
   - Checks that `path`, `content`, and `line_count` are provided
   - If `line_count` is missing/invalid, reverts any diff view changes and returns an error suggesting alternative tools (`apply_diff`, `insert_content`, etc.) if modifying an existing file.
   - Validates the file is allowed (not restricted by `.rooignore`)
   - Ensures the path is within the workspace boundaries
   - Tracks consecutive mistake counts for missing parameters
   - Shows specific error messages for each validation failure

2. **Content Preprocessing**:
   - Removes code block markers that might be added by AI models
   - Handles escaped HTML entities (specifically for non-Claude models)
   - Strips line numbers if accidentally included in content
   - Performs model-specific processing for different AI providers

3. **Diff View Generation**:
   - Opens a diff view in the editor showing the proposed changes
   - Adds a 300ms delay to ensure UI responsiveness
   - Scrolls automatically to the first difference
   - Highlights changes for easy review

4. **User Approval Process**:
   - Waits for explicit user approval to proceed
   - Allows users to edit the content in the diff view
   - Captures any user edits for the final content
   - Provides option to reject changes entirely
   - Detects and incorporates user modifications into the final result

5. **Safety Validation**:
   - Detects potential content truncation by comparing with provided line count
   - Shows warnings if content appears incomplete
   - Validates file path and access permissions
   - Specifically checks if files are outside the workspace with `isOutsideWorkspace` flag

6. **File Writing**:
   - Writes the approved content (with any user edits) to the file
   - Provides confirmation of successful write
   - Resets the consecutive mistakes counter on success

## Examples When Used

- When creating a new project, Roo generates multiple files but lets you review each before committing changes.
- When setting up configuration files, Roo shows the proposed configuration in a diff view for approval.
- When generating documentation, Roo creates markdown files but lets you make final adjustments in the diff view.
- When developing a prototype, Roo shows complete source files in a diff view where you can fine-tune before saving.

## Usage Examples

Creating a new JSON configuration file:
```
<write_to_file>
<path>config/settings.json</path>
<content>
{
  "apiEndpoint": "https://api.example.com",
  "theme": {
    "primaryColor": "#007bff",
    "secondaryColor": "#6c757d",
    "fontFamily": "Arial, sans-serif"
  },
  "features": {
    "darkMode": true,
    "notifications": true,
    "analytics": false
  },
  "version": "1.0.0"
}
</content>
<line_count>14</line_count>
</write_to_file>
```

Creating a simple HTML file:
```
<write_to_file>
<path>src/index.html</path>
<content>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Application</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app"></div>
  <script src="app.js"></script>
</body>
</html>
</content>
<line_count>13</line_count>
</write_to_file>
```

Creating a JavaScript module:
```
<write_to_file>
<path>src/utils/helpers.js</path>
<content>
/**
 * Utility functions for the application
 */

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

export function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
</content>
<line_count>18</line_count>
</write_to_file>
```
````

## File: docs/advanced-usage/large-projects.md
````markdown
# Working with Large Projects

Roo Code can be used with projects of any size, but large projects require some extra care to manage context effectively. Here are some tips for working with large codebases:

## Understanding Context Limits

Roo Code uses large language models (LLMs) that have a limited "context window."  This is the maximum amount of text (measured in tokens) that the model can process at once.  If the context is too large, the model may not be able to understand your request or generate accurate responses.

The context window includes:

*   The system prompt (instructions for Roo Code).
*   The conversation history.
*   The content of any files you mention using `@`.
*   The output of any commands or tools Roo Code uses.

## Strategies for Managing Context

1.  **Be Specific:**  When referring to files or code, use specific file paths and function names.  Avoid vague references like "the main file."

2.  **Use Context Mentions Effectively:** Use `@/path/to/file.ts` to include specific files. Use `@problems` to include current errors and warnings.  Use `@` followed by a commit hash to reference specific Git commits.

3.  **Break Down Tasks:** Divide large tasks into smaller, more manageable sub-tasks.  This helps keep the context focused.

4.  **Summarize:**  If you need to refer to a large amount of code, consider summarizing the relevant parts in your prompt instead of including the entire code.

5.  **Prioritize Recent History:** Roo Code automatically truncates older messages in the conversation history to stay within the context window. Be mindful of this, and re-include important context if needed.

6.  **Use Prompt Caching (if available):** Some API providers like Anthropic, OpenAI, OpenRouter and Requesty support "prompt caching". This caches your prompts for use in future tasks and helps reduce the cost and latency of requests.

## Example: Refactoring a Large File

Let's say you need to refactor a large TypeScript file (`src/components/MyComponent.tsx`).  Here's a possible approach:

1.  **Initial Overview:**
    ```
    @/src/components/MyComponent.tsx List the functions and classes in this file.
    ```

2.  **Target Specific Functions:**
    ```
    @/src/components/MyComponent.tsx Refactor the `processData` function to use `async/await` instead of Promises.
    ```

3.  **Iterative Changes:**  Make small, incremental changes, reviewing and approving each step.

By breaking down the task and providing specific context, you can work effectively with large files even with a limited context window.
````

## File: docs/advanced-usage/local-models.md
````markdown
# Using Local Models

Roo Code supports running language models locally on your own machine using [Ollama](https://ollama.com/) and [LM Studio](https://lmstudio.ai/).  This offers several advantages:

*   **Privacy:** Your code and data never leave your computer.
*   **Offline Access:**  You can use Roo Code even without an internet connection.
*   **Cost Savings:**  Avoid API usage fees associated with cloud-based models.
*   **Customization:**  Experiment with different models and configurations.

**However, using local models also has some drawbacks:**

*   **Resource Requirements:**  Local models can be resource-intensive, requiring a powerful computer with a good CPU and, ideally, a dedicated GPU.
*   **Setup Complexity:**  Setting up local models can be more complex than using cloud-based APIs.
*   **Model Performance:**  The performance of local models can vary significantly. While some are excellent, they may not always match the capabilities of the largest, most advanced cloud models.
* **Limited Features**: Local models (and many online models) often do not support advanced features such as prompt caching, computer use, and others.

## Supported Local Model Providers

Roo Code currently supports two main local model providers:

1.  **Ollama:**  A popular open-source tool for running large language models locally.  It supports a wide range of models.
2.  **LM Studio:**  A user-friendly desktop application that simplifies the process of downloading, configuring, and running local models.  It also provides a local server that emulates the OpenAI API.

## Setting Up Local Models

For detailed setup instructions, see:
* [Setting up Ollama](/providers/ollama)
* [Setting up LM Studio](/providers/lmstudio)

Both providers offer similar capabilities but with different user interfaces and workflows. Ollama provides more control through its command-line interface, while LM Studio offers a more user-friendly graphical interface.

## Troubleshooting

*   **"No connection could be made because the target machine actively refused it":**  This usually means that the Ollama or LM Studio server isn't running, or is running on a different port/address than Roo Code is configured to use.  Double-check the Base URL setting.

*   **Slow Response Times:** Local models can be slower than cloud-based models, especially on less powerful hardware.  If performance is an issue, try using a smaller model.

*   **Model Not Found:** Ensure you have typed in the name of the model correctly. If you're using Ollama, use the same name that you provide in the `ollama run` command.
````

## File: docs/advanced-usage/prompt-engineering.md
````markdown
# Prompt Engineering Tips

Prompt engineering is the art of crafting effective instructions for AI models like Roo Code.  Well-written prompts lead to better results, fewer errors, and a more efficient workflow.

## General Principles

*   **Be Clear and Specific:** Clearly state what you want Roo Code to do. Avoid ambiguity.
    *   **Bad:** Fix the code.
    *   **Good:** Fix the bug in the `calculateTotal` function that causes it to return incorrect results.

*   **Provide Context:** Use [Context Mentions](/basic-usage/context-mentions) to refer to specific files, folders, or problems.
    *   **Good:** `@/src/utils.ts` Refactor the `calculateTotal` function to use async/await.

*   **Break Down Tasks:** Divide complex tasks into smaller, well-defined steps.

*   **Give Examples:** If you have a specific coding style or pattern in mind, provide examples.

*   **Specify Output Format:** If you need the output in a particular format (e.g., JSON, Markdown), specify it in the prompt.

*   **Iterate:** Don't be afraid to refine your prompt if the initial results aren't what you expect.

## Thinking vs. Doing

It's often helpful to guide Roo Code through a "think-then-do" process:

1.  **Analyze:** Ask Roo Code to analyze the current code, identify problems, or plan the approach.
2.  **Plan:**  Have Roo Code outline the steps it will take to complete the task.
3.  **Execute:**  Instruct Roo Code to implement the plan, one step at a time.
4.  **Review:**  Carefully review the results of each step before proceeding.

## Using Custom Instructions

You can provide custom instructions to further tailor Roo Code's behavior. There are two types of custom instructions:

*   **Global Custom Instructions:** Apply to all modes.
*   **Mode-Specific Custom Instructions:** Apply only to a specific mode (e.g., Code, Architect, Ask, Debug, or a custom mode).

Custom instructions are added to the system prompt, providing persistent guidance to the AI model. You can use these to:

*   Enforce coding style guidelines.
*   Specify preferred libraries or frameworks.
*   Define project-specific conventions.
*   Adjust Roo Code's tone or personality.

See the [Custom Instructions](/features/custom-instructions) section for more details.

## Handling Ambiguity

If your request is ambiguous or lacks sufficient detail, Roo Code might:

*   **Make Assumptions:**  It might proceed based on its best guess, which may not be what you intended.
*   **Ask Follow-Up Questions:** It might use the `ask_followup_question` tool to clarify your request.

It's generally better to provide clear and specific instructions from the start to avoid unnecessary back-and-forth.

## Providing Feedback

If Roo Code doesn't produce the desired results, you can provide feedback by:

*   **Rejecting Actions:** Click the "Reject" button when Roo Code proposes an action you don't want.
*   **Providing Explanations:** When rejecting, explain *why* you're rejecting the action.  This helps Roo Code learn from its mistakes.
*   **Rewording Your Request:** Try rephrasing your initial task or providing more specific instructions.
*   **Manually Correcting:** If there are a few small issues, you can also directly modify the code before accepting the changes.

## Examples

**Good Prompt:**

> `@/src/components/Button.tsx` Refactor the `Button` component to use the `useState` hook instead of the `useReducer` hook.

**Bad Prompt:**

> Fix the button.

**Good Prompt:**

> Create a new file named `utils.py` and add a function called `calculate_average` that takes a list of numbers and returns their average.

**Bad Prompt:**

> Write some Python code.

**Good Prompt:**

> `@problems` Address all errors and warnings in the current file.

**Bad Prompt:**

> Fix everything.

By following these tips, you can write effective prompts that get the most out of Roo Code's capabilities.
````

## File: docs/advanced-usage/prompt-structure.md
````markdown
# Prompt Structure

This page explains the technical structure of prompts in Roo Code - how messages are constructed and sent to the Large Language Model (LLM).

## Core Message Types

Roo Code uses three primary message types when communicating with LLMs:

- **System Prompt**: The initial instructions that define Roo's capabilities, persona, and operational rules
- **User Messages**: Content sent by you (the user) to Roo
- **Assistant Messages**: Responses generated by the LLM based on your requests

At the API level, there's also a fourth message role:

- **Tool Messages**: Results returned from tool executions, sent back to the LLM as input

Understanding these message types helps you work more effectively with Roo and can be valuable for troubleshooting or advanced customization.

## System Prompt

The system prompt is the foundation of Roo's behavior. It contains:

- **Role Definition**: The core persona instructions based on the selected mode (Code, Ask, Debug, etc.)
- **Tool Descriptions**: Detailed information about available tools, including parameters and examples
- **Tool Use Guidelines**: Rules for how tools should be used (sequential execution, waiting for results)
- **Capabilities**: Description of what Roo can do in the current environment
- **Available Modes**: List of all available modes and their descriptions
- **Operational Rules**: Critical guidelines for handling files, project structure, and user interaction
- **System Information**: Details about your environment (OS, shell, working directory)
- **Custom Instructions**: Your global and mode-specific customizations

The system prompt is generated dynamically each time you interact with Roo, adapting to your current mode, available tools, and custom settings.

### Custom System Prompts

Advanced users can create custom system prompts for specific modes by placing a `.roo/system-prompt-<mode_slug>` file in their workspace. When present, Roo uses this file instead of generating the standard system prompt sections, allowing for complete customization of Roo's behavior in that mode.

## User Messages

User messages contain your direct inputs to Roo, plus additional contextual information:

- **Your Query**: The text you type in the chat interface
- **Images**: Any images you include in your message (for supported models)
- **Environment Details**: Automatically appended information about your workspace state:
  - Open files/tabs
  - Cursor position
  - Active terminals with output
  - Recently modified files
  - Current time
  - Token/cost information
  - Current mode
  - File listing (on initial connection)

This automatic context enrichment helps Roo understand your workspace without requiring you to explicitly describe it.

## Assistant Messages

Assistant messages are the LLM's responses, which may include:

- **Text Responses**: Direct answers to your queries
- **Thinking**: Internal reasoning process (visible when enabled)
- **Tool Calls**: Requests to use specific tools like reading files or executing commands

Note that while assistant messages contain tool calls, the results of those tools are sent back to the LLM in separate tool messages, not as part of the assistant message itself.

## Message Flow

Here's how these components work together:

1. **Initial Setup**: Roo generates the system prompt based on your selected mode and configuration
2. **User Input**: You send a message, which is enriched with environment details
3. **LLM Processing**: The LLM receives all previous messages plus your new input
4. **Assistant Response**: The LLM generates a response, potentially using tools
5. **Tool Execution**: If the LLM requests a tool, Roo executes it and provides the result
6. **Conversation History**: All messages are maintained in a structured history for context

## Technical Implementation

Internally, Roo's prompt construction is handled by several components:

- **System Prompt Generation**: The `SYSTEM_PROMPT` function in `src/core/prompts/system.ts` assembles the complete system prompt
- **Section Generators**: Specialized functions create each section of the system prompt
- **Message Transformation**: Provider-specific transformers convert Roo's internal message format to the format required by each LLM API
- **Custom Prompt Loading**: The `loadSystemPromptFile` function checks for and processes custom system prompt files

## Support Prompts

Alongside the main chat flow, Roo uses specialized templates for specific code actions:

- **Code Action Prompts**: For commands like "Explain", "Fix", "Improve", or "Add to Context"
- **Template-Based**: Generated from templates in `src/shared/support-prompt.ts`
- **Independent Context**: Often operates without the main chat history
- **Task-Specific Format**: Optimized for the specific code task being performed

These support prompts work outside the normal conversation flow to provide focused assistance for specific coding tasks.

## Optimizing Your Interactions

Understanding this structure can help you:

- **Write Better Prompts**: Knowing what context Roo already has helps you avoid redundant information
- **Troubleshoot Issues**: Understanding message flow helps identify where problems might occur
- **Create Custom Modes**: With knowledge of the system prompt structure, you can create more effective custom modes
- **Use Custom System Prompts**: Advanced users can create entirely custom system prompts for specialized use cases

This technical foundation powers all of Roo's capabilities, enabling it to understand your requests and effectively utilize available tools to complete tasks.
````

## File: docs/advanced-usage/rate-limits-costs.md
````markdown
# Rate Limits and Costs

Understanding and managing API usage is crucial for a smooth and cost-effective experience with Roo Code. This section explains how to track your token usage and costs. Rate limits, which default to 0 (disabled) and typically don't need adjustment, are now configured per profile; see the [API Configuration Profiles](/features/api-configuration-profiles#creating-a-profile) documentation for details on how to set them if needed.

## Token Usage

Roo Code interacts with AI models using tokens. Tokens are essentially pieces of words. The number of tokens used in a request and response affects both the processing time and the cost.

*   **Input Tokens:** These are the tokens in your prompt, including the system prompt, your instructions, and any context provided (e.g., file contents).
*   **Output Tokens:** These are the tokens generated by the AI model in its response.

You can see the number of input and output tokens used for each interaction in the chat history.

## Cost Calculation

Most AI providers charge based on the number of tokens used. Pricing varies depending on the provider and the specific model.

Roo Code automatically calculates the estimated cost of each API request based on the configured model's pricing. This cost is displayed in the chat history, next to the token usage.

**Note:**

*   The cost calculation is an *estimate*. The actual cost may vary slightly depending on the provider's billing practices.
*   Some providers may offer free tiers or credits. Check your provider's documentation for details.
*   Some providers offer prompt caching which greatly lowers cost.

## Tips for Optimizing Token Usage

*   **Be Concise:** Use clear and concise language in your prompts. Avoid unnecessary words or details.
*   **Provide Only Relevant Context:** Use context mentions (`@file.ts`, `@folder/`) selectively. Only include the files that are directly relevant to the task.
*   **Break Down Tasks:** Divide large tasks into smaller, more focused sub-tasks.
*   **Use Custom Instructions:** Provide custom instructions to guide Roo Code's behavior and reduce the need for lengthy explanations in each prompt.
*   **Choose the Right Model:** Some models are more cost-effective than others. Consider using a smaller, faster model for tasks that don't require the full power of a larger model.
*   **Use Modes:** Different modes can access different tools, for example `Architect` can't modify code, which makes it a safe choice when analyzing a complex codebase, without worrying about accidentally allowing expensive operations.
*   **Disable MCP If Not Used:** If you're not using MCP (Model Context Protocol) features, consider [disabling it in the MCP settings](/features/mcp/using-mcp-in-roo#enabling-or-disabling-mcp-server-creation) to significantly reduce the size of the system prompt and save tokens.

By understanding and managing your API usage, you can use Roo Code effectively and efficiently.
````

## File: docs/basic-usage/context-mentions.md
````markdown
# Context Mentions

Context mentions are a powerful way to provide Roo Code with specific information about your project, allowing it to perform tasks more accurately and efficiently. You can use mentions to refer to files, folders, problems, and Git commits. Context mentions start with the `@` symbol.

<img src="/img/context-mentions/context-mentions.png" alt="Context Mentions Overview - showing the @ symbol dropdown menu in the chat interface" width="600" />

*Context mentions overview showing the @ symbol dropdown menu in the chat interface.*

## Types of Mentions

<img src="/img/context-mentions/context-mentions-1.png" alt="File mention example showing a file being referenced with @ and its contents appearing in the conversation" width="600" />

*File mentions add actual code content into the conversation for direct reference and analysis.*

| Mention Type | Format | Description | Example Usage |
|--------------|--------|-------------|--------------|
| **File** | `@/path/to/file.ts` | Includes file contents in request context | "Explain the function in @/src/utils.ts" |
| **Folder** | `@/path/to/folder` | Includes contents of all files directly in the folder (non-recursive) | "Analyze the code in @/src/components" |
| **Problems** | `@problems` | Includes VS Code Problems panel diagnostics | "@problems Fix all errors in my code" |
| **Terminal** | `@terminal` | Includes recent terminal command and output | "Fix the errors shown in @terminal" |
| **Git Commit** | `@a1b2c3d` | References specific commit by hash | "What changed in commit @a1b2c3d?" |
| **Git Changes** | `@git-changes` | Shows uncommitted changes | "Suggest a message for @git-changes" |
| **URL** | `@https://example.com` | Imports website content | "Summarize @https://docusaurus.io/" |

### File Mentions

<img src="/img/context-mentions/context-mentions-1.png" alt="File mention example showing a file being referenced with @ and its contents appearing in the conversation" width="600" />

*File mentions incorporate source code with line numbers for precise references.*
| Capability | Details |
|------------|---------|
| **Format** | `@/path/to/file.ts` (always start with `/` from workspace root) |
| **Provides** | Complete file contents with line numbers |
| **Supports** | Text files, PDFs, and DOCX files (with text extraction) |
| **Works in** | Initial requests, feedback responses, and follow-up messages |
| **Limitations** | Very large files may be truncated; binary files not supported |

### Folder Mentions

<img src="/img/context-mentions/context-mentions-2.png" alt="Folder mention example showing directory contents being referenced in the chat" width="600" />

*Folder mentions include the content of all files within the specified directory.*
| Capability | Details |
|------------|---------|
| **Format** | `@/path/to/folder` (no trailing slash) |
| **Provides** | Complete contents of all files within the directory |
| **Includes** | Contents of non-binary text files directly within the folder (not recursive) |
| **Best for** | Providing context from multiple files in a directory |
| **Tip** | Be mindful of context window limits when mentioning large directories |

### Problems Mention

<img src="/img/context-mentions/context-mentions-3.png" alt="Problems mention example showing VS Code problems panel being referenced with @problems" width="600" />

*Problems mentions import diagnostics directly from VS Code's problems panel.*
| Capability | Details |
|------------|---------|
| **Format** | `@problems` |
| **Provides** | All errors and warnings from VS Code's problems panel |
| **Includes** | File paths, line numbers, and diagnostic messages |
| **Groups** | Problems organized by file for better clarity |
| **Best for** | Fixing errors without manual copying |

### Terminal Mention
<img src="/img/context-mentions/context-mentions-4.png" alt="Terminal mention example showing terminal output being included in Roo's context" width="600" />

*Terminal mentions capture recent command output for debugging and analysis.*

| Capability | Details |
|------------|---------|
| **Format** | `@terminal` |
| **Captures** | Last command and its complete output |
| **Preserves** | Terminal state (doesn't clear the terminal) |
| **Limitation** | Limited to visible terminal buffer content |
| **Best for** | Debugging build errors or analyzing command output |

### Git Mentions

<img src="/img/context-mentions/context-mentions-5.png" alt="Git commit mention example showing commit details being analyzed by Roo" width="600" />

*Git mentions provide commit details and diffs for context-aware version analysis.*
| Type | Format | Provides | Limitations |
|------|--------|----------|------------|
| **Commit** | `@a1b2c3d` | Commit message, author, date, and complete diff | Only works in Git repositories |
| **Working Changes** | `@git-changes` | `git status` output and diff of uncommitted changes | Only works in Git repositories |

### URL Mentions
<img src="/img/context-mentions/context-mentions-6.png" alt="URL mention example showing website content being converted to Markdown in the chat" width="600" />

*URL mentions import external web content and convert it to readable Markdown format.*

| Capability | Details |
|------------|---------|
| **Format** | `@https://example.com` |
| **Processing** | Uses headless browser to fetch content |
| **Cleaning** | Removes scripts, styles, and navigation elements |
| **Output** | Converts content to Markdown for readability |
| **Limitation** | Complex pages may not convert perfectly |

## How to Use Mentions

1. Type `@` in the chat input to trigger the suggestions dropdown
2. Continue typing to filter suggestions or use arrow keys to navigate
3. Select with Enter key or mouse click
4. Combine multiple mentions in a request: "Fix @problems in @/src/component.ts"

The dropdown automatically suggests:
- Recently opened files
- Visible folders
- Recent git commits
- Special keywords (`problems`, `terminal`, `git-changes`)
- **All currently open files** (regardless of ignore settings or directory filters)

The dropdown automatically filters out common directories like `node_modules`, `.git`, `dist`, and `out` to reduce noise, even though their content could be included if manually typed.

## Important Behaviors

### Ignore File Interactions

| Behavior | Description |
|----------|-------------|
| **`.rooignore` bypass** | File and folder `@mentions` bypass `.rooignore` checks when fetching content for context. Content from ignored files will be included if directly mentioned. |
| **`.gitignore` bypass** | Similarly, file and folder `@mentions` do not respect `.gitignore` rules when fetching content. |
| **Git command respect** | Git-related mentions (`@git-changes`, `@commit-hash`) do respect `.gitignore` since they rely on Git commands. |
````

## File: docs/basic-usage/how-tools-work.md
````markdown
# How Tools Work

Roo Code uses tools to interact with your code and environment. These specialized helpers perform specific actions like reading files, making edits, running commands, or searching your codebase. Tools provide automation for common development tasks without requiring manual execution.

## Tool Workflow

Describe what you want to accomplish in natural language, and Roo Code will:

1. Select the appropriate tool based on your request
2. Present the tool with its parameters for your review
3. Execute the approved tool and show you the results
4. Continue this process until your task is complete

## Tool Categories

| Category | Purpose | Tool Names |
| :------- | :------ | :--------- |
| Read | Access file content and code structure | `read_file`, `search_files`, `list_files`, `list_code_definition_names` |
| Edit | Create or modify files and code | `write_to_file`, `apply_diff` |
| Execute | Run commands and perform system operations | `execute_command` |
| Browser | Interact with web content | `browser_action` |
| Workflow | Manage task flow and context | `ask_followup_question`, `attempt_completion`, `switch_mode`, `new_task` |

## Example: Using Tools

Here's how a typical tool interaction works:

<img src="/img/how-tools-work/how-tools-work.png" alt="Tool approval interface showing Save and Reject buttons along with Auto-approve checkbox" width="600" />

*The tool approval interface shows Save/Reject buttons and Auto-approve options.*

**User:** Create a file named `greeting.js` that logs a greeting message

**Roo Code:** (Proposes the `write_to_file` tool as shown in the image above)
```xml
<write_to_file>
<path>greeting.js</path>
<content>
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
</content>
<line_count>5</line_count>
</write_to_file>
```

**User:** (Clicks "Save" in the interface)

**Roo Code:** (Confirms file creation)

## Tool Safety and Approval


Every tool use requires your explicit approval. When Roo proposes a tool, you'll see:

* A "Save" button to approve and execute the tool
* A "Reject" button to decline the proposed tool
* An optional "Auto-approve" setting for trusted operations

This safety mechanism ensures you maintain control over which files are modified, what commands are executed, and how your codebase is changed. Always review tool proposals carefully before saving them.

## Core Tools Reference

| Tool Name | Description | Category |
| :-------- | :---------- | :------- |
| `read_file` | Reads the content of a file with line numbers | Read |
| `search_files` | Searches for text or regex patterns across files | Read |
| `list_files` | Lists files and directories in a specified location | Read |
| `list_code_definition_names` | Lists code definitions like classes and functions | Read |
| `write_to_file` | Creates new files or overwrites existing ones | Edit |
| `apply_diff` | Makes precise changes to specific parts of a file | Edit |
| `execute_command` | Runs commands in the VS Code terminal | Execute |
| `browser_action` | Performs actions in a headless browser | Browser |
| `ask_followup_question` | Asks you a clarifying question | Workflow |
| `attempt_completion` | Indicates the task is complete | Workflow |
| `switch_mode` | Changes to a different operational mode | Workflow |
| `new_task` | Creates a new subtask with a specific starting mode | Workflow |

## Learn More About Tools

For more detailed information about each tool, including complete parameter references and advanced usage patterns, see the [Tool Use Overview](/advanced-usage/available-tools/tool-use-overview) documentation.
````

## File: docs/basic-usage/the-chat-interface.md
````markdown
import KangarooIcon from '@site/src/components/KangarooIcon';

# The Chat Interface

The Roo Code chat interface is your primary way of interacting with it. It's located in the Roo Code panel, which you can open by clicking the Roo Code icon (<KangarooIcon />) in the VS Code Activity Bar.

## Components of the Chat Interface

The chat interface consists of the following main elements:

1. **Chat History:** This area displays the conversation history between you and Roo Code.  It shows your requests, Roo Code's responses, and any actions taken (like file edits or command executions).

2. **Input Field:** This is where you type your tasks and questions for Roo Code.  You can use plain English to communicate.

3. **Action Buttons:** These buttons appear above the input field and allow you to approve or reject Roo Code's proposed actions.  The available buttons change depending on the context.

4. **Send Button:** This looks like a small plane and it's located to the far right of the input field. This sends messages to Roo after you've typed them.

5. **Plus Button:** The plus button is located at the top in the header, and it resets the current session.

6. **Settings Button:** The settings button is a gear, and it's used for opening the settings to customize features or behavior.

7. **Mode Selector:** The mode selector is a dropdown located to the left of the chat input field. It is used for selecting which mode Roo should use for your tasks.

<img src="/img/the-chat-interface/the-chat-interface-1.png" alt="Chat interface components labeled with numbered callouts" width="900" />

*Numbered interface elements showing the key components of the Roo Code chat interface.*

## Interacting with Messages

* **Clickable Links:** File paths, URLs, and other mentions in the chat history are clickable.  Clicking a file path will open the file in the editor.  Clicking a URL will open it in your default browser.
* **Copying Text:** You can copy text from the chat history by selecting it and using the standard copy command (Ctrl/Cmd + C).  Some elements, like code blocks, have a dedicated "Copy" button.
* **Expanding and Collapsing**: Click on a message to expand or collapse it.

## Status Indicators

* **Loading Spinner:**  When Roo Code is processing a request, you'll see a loading spinner.
* **Error Messages:**  If an error occurs, a red error message will be displayed.
* **Success Messages:** Green messages indicate successful completion of actions.
````

## File: docs/basic-usage/typing-your-requests.md
````markdown
# Typing Your Requests

Roo Code is designed to understand natural language.  You don't need to use any special commands or syntax to communicate with it.  Just type your request in plain English, as if you were talking to a human developer.

<img src="/img/typing-your-requests/naturally.gif" alt="Example of typing a request in Roo Code" width="600" />

## Effective Request Strategies

Clearly state what you want Roo Code to do.  Avoid vague or ambiguous language.

| Strategy | Implementation |
|----------|----------------|
| **Be specific** | "Fix the bug in `calculateTotal` that returns incorrect results" instead of "Fix the code" |
| **Provide context** | Use @ [Context Mentions](/basic-usage/context-mentions) for file and code references |
| **Break down tasks** | Submit complex tasks in smaller manageable steps |
| **Include examples** | Provide sample code when you need specific formatting or style |

## Example Requests

```
create a new file named `utils.py` and add a function called `add` that takes two numbers as arguments and returns their sum
```
```
in the file @src/components/Button.tsx, change the color of the button to blue
```
```
find all instances of the variable `oldValue` in @/src/App.js and replace them with `newValue`
```
```
run the command `npm install` in the terminal
```
```
explain the function `calculateTotal` in @/src/utils.ts
```
```
@problems address all detected problems
```

## Common Pitfalls to Avoid

| DON'T | DO |
|-------|---------|
| Vague requests | Specify exactly what needs to be done |
| Assuming context | Explicitly reference files and functions |
| Excessive technical jargon | Use clear, straightforward language |
| Multiple unrelated tasks | Submit one focused request at a time |
| Proceeding without confirmation | Check the code to make sure it's complete |
````

## File: docs/basic-usage/using-modes.md
````markdown
# Using Modes

Modes in Roo Code are specialized personas that tailor the assistant's behavior to your current task. Each mode offers different capabilities, expertise, and access levels to help you accomplish specific goals.

:::info Sticky Models
Each mode remembers your last-used model. When switching modes, Roo automatically selects that model—no manual selection needed. Assign different models to different modes (e.g., Gemini 2.5 Preview for `🏗️ Architect` mode, Claude Sonnet 3.7 for `💻 Code` mode) and Roo will switch models automatically when you change modes.
:::

## Why Use Different Modes?

- **Task specialization:** Get precisely the type of assistance you need for your current task
- **Safety controls:** Prevent unintended file modifications when focusing on planning or learning
- **Focused interactions:** Receive responses optimized for your current activity
- **Workflow optimization:** Seamlessly transition between planning, implementing, debugging, and learning

## Switching Between Modes

Four ways to switch modes:

1. **Dropdown menu:** Click the selector to the left of the chat input
   
   <img src="/img/modes/modes.png" alt="Using the dropdown menu to switch modes" width="400" />

2. **Slash command:** Type `/architect`, `/ask`, `/debug`, `/code`, or `/orchestrator` in the chat input
   
   <img src="/img/modes/modes-1.png" alt="Using slash commands to switch modes" width="400" />

3. **Toggle command/Keyboard shortcut:** Use the keyboard shortcut below, applicable to your operating system. Each press cycles through the available modes in sequence, wrapping back to the first mode after reaching the end.
       
    | Operating System | Shortcut |
    |------------------|----------|
    | macOS | ⌘ + . |
    | Windows | Ctrl + . |
    | Linux | Ctrl + . |

4. **Accept suggestions:** Click on mode switch suggestions that Roo offers when appropriate
   
    <img src="/img/modes/modes-2.png" alt="Accepting a mode switch suggestion from Roo" width="400" />

## Built-in Modes

### Code Mode (Default)

| Aspect | Details |
|--------|---------|
| **Name** | `💻 Code` |
| **Description** | A skilled software engineer with expertise in programming languages, design patterns, and best practices |
| **Tool Access** | Full access to all tool groups: `read`, `edit`, `browser`, `command`, `mcp` |
| **Ideal For** | Writing code, implementing features, debugging, and general development |
| **Special Features** | No tool restrictions—full flexibility for all coding tasks |

### Ask Mode

| Aspect | Details |
|--------|---------|
| **Name** | `❓ Ask` |
| **Description** | A knowledgeable technical assistant focused on answering questions without changing your codebase |
| **Tool Access** | Limited access: `read`, `browser`, `mcp` only (cannot edit files or run commands) |
| **Ideal For** | Code explanation, concept exploration, and technical learning |
| **Special Features** | Optimized for informative responses without modifying your project |

### Architect Mode

| Aspect | Details |
|--------|---------|
| **Name** | `🏗️ Architect` |
| **Description** | An experienced technical leader and planner who helps design systems and create implementation plans |
| **Tool Access** | Access to `read`, `browser`, `mcp`, and restricted `edit` (markdown files only) |
| **Ideal For** | System design, high-level planning, and architecture discussions |
| **Special Features** | Follows a structured approach from information gathering to detailed planning |

### Debug Mode

| Aspect | Details |
|--------|---------|
| **Name** | `🪲 Debug` |
| **Description** | An expert problem solver specializing in systematic troubleshooting and diagnostics |
| **Tool Access** | Full access to all tool groups: `read`, `edit`, `browser`, `command`, `mcp` |
| **Ideal For** | Tracking down bugs, diagnosing errors, and resolving complex issues |
| **Special Features** | Uses a methodical approach of analyzing, narrowing possibilities, and fixing issues. Includes custom instructions to reflect, distill possibilities, add logs, and confirm before fixing. |

### Orchestrator Mode (aka Boomerang Mode)

| Aspect | Details |
|--------|---------|
| **Name** | `🪃 Orchestrator` |
| **Description** | A strategic workflow orchestrator (aka Boomerang Mode) that breaks down complex tasks and delegates them to specialized modes |
| **Tool Access** | Access to `read`, `browser`, `command`, `mcp`, and restricted `edit` (mode configuration files only: `.roomodes`, `custom_modes.json`) |
| **Ideal For** | Managing multi-step projects, coordinating work across different modes, and automating complex workflows |
| **Special Features** | Uses the [`new_task`](/advanced-usage/available-tools/new-task) tool to delegate subtasks to other modes. |

## Custom Modes

Create your own specialized assistants by defining tool access, file permissions, and behavior instructions. Custom modes help enforce team standards or create purpose-specific assistants. See [Custom Modes documentation](/features/custom-modes) for setup instructions.
````

## File: docs/features/experimental/experimental-features.md
````markdown
# Experimental Features

Roo Code includes experimental features that are still under development.  These features may be unstable, change significantly, or be removed in future versions.  Use them with caution and be aware that they may not work as expected.

**Warning:** Experimental features may have unexpected behavior, including potential data loss or security vulnerabilities.  Enable them at your own risk.

## Enabling Experimental Features

To enable or disable experimental features:

1.  Open the Roo Code settings (<Codicon name="gear" /> icon in the top right corner).
2.  Go to the "Advanced Settings" section.
3.  Find the "Experimental Features" section.
4.  Check or uncheck the boxes for the features you want to enable or disable.
5.  Click "Done" to save your changes.

## Current Experimental Features

The following experimental features are currently available:

### Power Steering

When enabled, Roo will remind the model about the details of its current mode definition more frequently. This will lead to stronger adherence to role definitions and custom instructions, but will use more tokens per message.

## Providing Feedback

If you encounter any issues with experimental features, or if you have suggestions for improvements, please report them on the [Roo Code GitHub Issues page](https://github.com/RooVetGit/Roo-Code/issues).

Your feedback is valuable and helps us improve Roo Code!
````

## File: docs/features/mcp/mcp-vs-api.md
````markdown
---
title: MCP vs API
sidebar_label: MCP vs API
---

# MCP vs REST APIs: A Fundamental Distinction

Comparing REST APIs to the Model Context Protocol (MCP) is a category error. They operate at different layers of abstraction and serve fundamentally different purposes in AI systems.

## Architectural Differences

| Feature | MCP | REST APIs |
|---------|-----|-----------|
| State Management | **Stateful** - maintains context across interactions | **Stateless** - each request is independent |
| Connection Type | Persistent, bidirectional connections | One-way request/response |
| Communication Style | JSON-RPC based with ongoing sessions | HTTP-based with discrete requests |
| Context Handling | Context is intrinsic to the protocol | Context must be manually managed |
| Tool Discovery | Runtime discovery of available tools | Design-time integration requiring prior knowledge |
| Integration Approach | Runtime integration with dynamic capabilities | Design-time integration requiring code changes |

## Different Layers, Different Purposes

REST APIs and MCP serve different tiers in the technology stack:

1. **REST**: Low-level web communication pattern that exposes operations on resources
2. **MCP**: High-level AI protocol that orchestrates tool usage and maintains context

MCP often uses REST APIs internally, but abstracts them away for the AI. Think of MCP as middleware that turns discrete web services into a cohesive environment the AI can operate within.

## Context Preservation: Critical for AI Workflows

MCP's stateful design solves a key limitation of REST in AI applications:

- **REST Approach**: Each call is isolated, requiring manual context passing between steps
- **MCP Approach**: One conversation context persists across multiple tool uses

For example, an AI debugging a codebase can open a file, run tests, and identify errors without losing context between steps. The MCP session maintains awareness of previous actions and results.

## Dynamic Tool Discovery

MCP enables an AI to discover and use tools at runtime:

```json
// AI discovers available tools
{
  "tools": [
    {
      "name": "readFile",
      "description": "Reads content from a file",
      "parameters": {
        "path": { "type": "string", "description": "File path" }
      }
    },
    {
      "name": "createTicket",
      "description": "Creates a ticket in issue tracker",
      "parameters": {
        "title": { "type": "string" },
        "description": { "type": "string" }
      }
    }
  ]
}
```

This "plug-and-play" capability allows new tools to be added without redeploying or modifying the AI itself.

## Real-World Example: Multi-Tool Workflow

Consider a task requiring multiple services: "Check recent commits, create a JIRA ticket for the bug fix, and post to Slack."

**REST-based approach**:
- Requires separate integrations for Git, JIRA, and Slack APIs
- Needs custom code to manage context between calls
- Breaks if any service changes its API

**MCP-based approach**:
- One unified protocol for all tools
- Maintains context across the entire workflow
- New tools can be swapped in without code changes

## Why Roo Code Uses MCP

Roo Code leverages MCP to provide:

1. **Extensibility**: Add unlimited custom tools without waiting for official integration
2. **Contextual awareness**: Tools can access conversation history and project context
3. **Simplified integration**: One standard protocol rather than numerous API patterns
4. **Runtime flexibility**: Discover and use new capabilities on-the-fly

MCP creates a universal connector between Roo Code and external services, with REST APIs often powering those services behind the scenes.

## Conclusion: Complementary, Not Competing Technologies

MCP doesn't replace REST APIs - it builds upon them. REST excels at providing discrete services, while MCP excels at orchestrating those services for AI agents.

The critical distinction is that MCP is AI-native: it treats the model as a first-class user, providing the contextual, stateful interaction layer that AI agents need to function effectively in complex environments.
````

## File: docs/features/mcp/overview.md
````markdown
---
title: MCP Overview
sidebar_label: MCP Overview
---

# Model Context Protocol (MCP)

The Model Context Protocol (MCP) is a standard for extending Roo Code's capabilities by connecting to external tools and services. MCP servers provide additional tools and resources that help Roo accomplish tasks beyond its built-in capabilities, such as accessing databases, custom APIs, and specialized functionality.

## MCP Documentation

This documentation is organized into several sections:

* [**Using MCP in Roo Code**](/features/mcp/using-mcp-in-roo) - Comprehensive guide to configuring, enabling, and managing MCP servers with Roo Code. Includes server settings, tool approval, and troubleshooting.

* [**What is MCP?**](/features/mcp/what-is-mcp) - Clear explanation of the Model Context Protocol, its client-server architecture, and how it enables AI systems to interact with external tools.

* [**STDIO & SSE Transports**](/features/mcp/server-transports) - Detailed comparison of local (STDIO) and remote (SSE) transport mechanisms with deployment considerations for each approach.

* [**MCP vs API**](/features/mcp/mcp-vs-api) - Analysis of the fundamental distinction between MCP and REST APIs, explaining how they operate at different layers of abstraction for AI systems.
````

## File: docs/features/mcp/server-transports.md
````markdown
---
title: MCP Server Transports
sidebar_label: STDIO & SSE Transports
---

# MCP Server Transports: STDIO & SSE

Model Context Protocol (MCP) supports two primary transport mechanisms for communication between Roo Code and MCP servers: Standard Input/Output (STDIO) and Server-Sent Events (SSE). Each has distinct characteristics, advantages, and use cases.

## STDIO Transport

STDIO transport runs locally on your machine and communicates via standard input/output streams.

### How STDIO Transport Works

1. The client (Roo Code) spawns an MCP server as a child process
2. Communication happens through process streams: client writes to server's STDIN, server responds to STDOUT
3. Each message is delimited by a newline character
4. Messages are formatted as JSON-RPC 2.0

```
Client                    Server
  |                         |
  |---- JSON message ------>| (via STDIN)
  |                         | (processes request)
  |<---- JSON message ------| (via STDOUT)
  |                         |
```

### STDIO Characteristics

* **Locality**: Runs on the same machine as Roo Code
* **Performance**: Very low latency and overhead (no network stack involved)
* **Simplicity**: Direct process communication without network configuration
* **Relationship**: One-to-one relationship between client and server
* **Security**: Inherently more secure as no network exposure

### When to Use STDIO

STDIO transport is ideal for:

* Local integrations and tools running on the same machine
* Security-sensitive operations
* Low-latency requirements
* Single-client scenarios (one Roo Code instance per server)
* Command-line tools or IDE extensions

### STDIO Implementation Example

```typescript
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server({name: 'local-server', version: '1.0.0'});
// Register tools...

// Use STDIO transport
const transport = new StdioServerTransport(server);
transport.listen();
```

## SSE Transport

Server-Sent Events (SSE) transport runs on a remote server and communicates over HTTP/HTTPS.

### How SSE Transport Works

1. The client (Roo Code) connects to the server's SSE endpoint via HTTP GET request
2. This establishes a persistent connection where the server can push events to the client
3. For client-to-server communication, the client makes HTTP POST requests to a separate endpoint
4. Communication happens over two channels:
   * Event Stream (GET): Server-to-client updates
   * Message Endpoint (POST): Client-to-server requests

```
Client                             Server
  |                                  |
  |---- HTTP GET /events ----------->| (establish SSE connection)
  |<---- SSE event stream -----------| (persistent connection)
  |                                  |
  |---- HTTP POST /message --------->| (client request)
  |<---- SSE event with response ----| (server response)
  |                                  |
```

### SSE Characteristics

* **Remote Access**: Can be hosted on a different machine from Roo Code
* **Scalability**: Can handle multiple client connections concurrently
* **Protocol**: Works over standard HTTP (no special protocols needed)
* **Persistence**: Maintains a persistent connection for server-to-client messages
* **Authentication**: Can use standard HTTP authentication mechanisms

### When to Use SSE

SSE transport is better for:

* Remote access across networks
* Multi-client scenarios
* Public services
* Centralized tools that many users need to access
* Integration with web services

### SSE Implementation Example

```typescript
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import express from 'express';

const app = express();
const server = new Server({name: 'remote-server', version: '1.0.0'});
// Register tools...

// Use SSE transport
const transport = new SSEServerTransport(server);
app.use('/mcp', transport.requestHandler());
app.listen(3000, () => {
  console.log('MCP server listening on port 3000');
});
```
## Local vs. Hosted: Deployment Aspects

The choice between STDIO and SSE transports directly impacts how you'll deploy and manage your MCP servers.

### STDIO: Local Deployment Model

STDIO servers run locally on the same machine as Roo Code, which has several important implications:

* **Installation**: The server executable must be installed on each user's machine
* **Distribution**: You need to provide installation packages for different operating systems
* **Updates**: Each instance must be updated separately
* **Resources**: Uses the local machine's CPU, memory, and disk
* **Access Control**: Relies on the local machine's filesystem permissions
* **Integration**: Easy integration with local system resources (files, processes)
* **Execution**: Starts and stops with Roo Code (child process lifecycle)
* **Dependencies**: Any dependencies must be installed on the user's machine

#### Practical Example

A local file search tool using STDIO would:
* Run on the user's machine
* Have direct access to the local filesystem
* Start when needed by Roo Code
* Not require network configuration
* Need to be installed alongside Roo Code or via a package manager

### SSE: Hosted Deployment Model

SSE servers can be deployed to remote servers and accessed over the network:

* **Installation**: Installed once on a server, accessed by many users
* **Distribution**: Single deployment serves multiple clients
* **Updates**: Centralized updates affect all users immediately
* **Resources**: Uses server resources, not local machine resources
* **Access Control**: Managed through authentication and authorization systems
* **Integration**: More complex integration with user-specific resources
* **Execution**: Runs as an independent service (often continuously)
* **Dependencies**: Managed on the server, not on user machines

#### Practical Example

A database query tool using SSE would:
* Run on a central server
* Connect to databases with server-side credentials
* Be continuously available for multiple users
* Require proper network security configuration
* Be deployed using container or cloud technologies

### Hybrid Approaches

Some scenarios benefit from a hybrid approach:

1. **STDIO with Network Access**: A local STDIO server that acts as a proxy to remote services
2. **SSE with Local Commands**: A remote SSE server that can trigger operations on the client machine through callbacks
3. **Gateway Pattern**: STDIO servers for local operations that connect to SSE servers for specialized functions

## Choosing Between STDIO and SSE

| Consideration | STDIO | SSE |
|---------------|-------|-----|
| **Location** | Local machine only | Local or remote |
| **Clients** | Single client | Multiple clients |
| **Performance** | Lower latency | Higher latency (network overhead) |
| **Setup Complexity** | Simpler | More complex (requires HTTP server) |
| **Security** | Inherently secure | Requires explicit security measures |
| **Network Access** | Not needed | Required |
| **Scalability** | Limited to local machine | Can distribute across network |
| **Deployment** | Per-user installation | Centralized installation |
| **Updates** | Distributed updates | Centralized updates |
| **Resource Usage** | Uses client resources | Uses server resources |
| **Dependencies** | Client-side dependencies | Server-side dependencies |

## Configuring Transports in Roo Code

For detailed information on configuring STDIO and SSE transports in Roo Code, including example configurations, see the [Understanding Transport Types](/features/mcp/using-mcp-in-roo#understanding-transport-types) section in the Using MCP in Roo Code guide.
````

## File: docs/features/mcp/using-mcp-in-roo.md
````markdown
---
title: Using MCP in Roo Code
sidebar_label: Using MCP in Roo Code
---

# Using MCP in Roo Code

Model Context Protocol (MCP) extends Roo Code's capabilities by connecting to external tools and services. This guide covers everything you need to know about using MCP with Roo Code.

## Configuring MCP Servers

MCP server configurations can be managed at two levels:

1.  **Global Configuration**: Stored in the `mcp_settings.json` file, accessible via VS Code settings (see below). These settings apply across all your workspaces unless overridden by a project-level configuration.
2.  **Project-level Configuration**: Defined in a `.roo/mcp.json` file within your project's root directory. This allows you to set up project-specific servers and share configurations with your team by committing the file to version control. Roo Code automatically detects and loads this file if it exists.

**Precedence**: If a server name exists in both global and project configurations, the **project-level configuration takes precedence**.

### Editing MCP Settings Files

You can edit both global and project-level MCP configuration files directly from the Roo Code MCP settings view:

1. Click the <Codicon name="server" /> icon in the top navigation of the Roo Code pane.

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-10.png" alt="MCP Servers interface in Roo Code" width="400" />

2. Scroll to the bottom of the MCP settings view.
3. Click the appropriate button:
    *   **`Edit Global MCP`**: Opens the global `mcp_settings.json` file.
    *   **`Edit Project MCP`**: Opens the project-specific `.roo/mcp.json` file. If this file doesn't exist, Roo Code will create it for you.

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-9.png" alt="Edit Global MCP and Edit Project MCP buttons" width="600" />

Both files use a JSON format with a `mcpServers` object containing named server configurations:

  ```json
  {
    "mcpServers": {
      "server1": {
        "command": "python",
        "args": ["/path/to/server.py"],
        "env": {
          "API_KEY": "your_api_key"
        },
        "alwaysAllow": ["tool1", "tool2"],
        "disabled": false
      }
    }
  }
    ```
    *Example of MCP Server config in Roo Code (STDIO Transport)*
  
  ### Understanding Transport Types
  
  MCP supports two transport types for server communication:
  
  #### STDIO Transport
  
  Used for local servers running on your machine:
  
  * Communicates via standard input/output streams
  * Lower latency (no network overhead)
  * Better security (no network exposure)
  * Simpler setup (no HTTP server needed)
  * Runs as a child process on your machine
  
  For more in-depth information about how STDIO transport works, see [STDIO Transport](/features/mcp/server-transports#stdio-transport).
  
  STDIO configuration parameters:

  *   `command` (required): The executable to run (e.g., `node`, `python`, `npx`, or an absolute path).
  *   `args` (optional): An array of string arguments to pass to the command.
  *   `cwd` (optional): The working directory from which to launch the server process. If omitted, defaults to the first workspace folder path or the main process's working directory. Useful if the server script relies on relative paths.
  *   `env` (optional): An object containing environment variables to set for the server process.
  *   `alwaysAllow` (optional): An array of tool names from this server to automatically approve.
  *   `disabled` (optional): Set to `true` to disable this server configuration.

  STDIO configuration example:
  ```json
  {
    "mcpServers": {
      "local-server": {
        "command": "node",
        "args": ["server.js"],
        "cwd": "/path/to/project/root", // Optional: Specify working directory
        "env": {
          "API_KEY": "your_api_key"
        },
        "alwaysAllow": ["tool1", "tool2"],
        "disabled": false
      }
    }
  }
  ```
  
  #### SSE Transport
  
  Used for remote servers accessed over HTTP/HTTPS:
  
  * Communicates via Server-Sent Events protocol
  * Can be hosted on a different machine
  * Supports multiple client connections
  * Requires network access
  * Allows centralized deployment and management
  
  For more in-depth information about how SSE transport works, see [SSE Transport](/features/mcp/server-transports#sse-transport).
  
  SSE configuration parameters:

  *   `url` (required): The full URL endpoint of the remote MCP server (e.g., `https://your-server.com/mcp`).
  *   `headers` (optional): An object containing custom HTTP headers to send with requests (e.g., for authentication tokens).
  *   `alwaysAllow` (optional): An array of tool names from this server to automatically approve.
  *   `disabled` (optional): Set to `true` to disable this server configuration.

  SSE configuration example:
  ```json
  {
    "mcpServers": {
      "remote-server": {
        "url": "https://your-server-url.com/mcp",
        "headers": {
          "Authorization": "Bearer your-token" // Example: Authentication header
        },
        "alwaysAllow": ["tool3"],
        "disabled": false
      }
    }
  }
  ```
  
  ## Enabling or Disabling MCP Servers

Disabling your MCP Servers here will remove all MCP related logic and definitions from your system prompt, reducing your token usage. This will prevent Roo Code from connecting to any MCP servers, and the `use_mcp_tool` and `access_mcp_resource` tools will not be available. Check this off if you don't intend to use MCP Servers. This is on by default.

1. Click the <Codicon name="server" /> icon in the top navigation of the Roo Code pane
2. Check/Uncheck `Enable MCP Servers` 

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-2.png" alt="Enable MCP Servers toggle" width="400" />

## Enabling or Disabling MCP Server Creation

Disabling your MCP Server Creation here will just remove the instructions from your system prompt that Roo Code uses to write MCP servers while not removing the context related to operating them. This reduces token usage. This is on by default.

1. Click the <Codicon name="server" /> icon in the top navigation of the Roo Code pane
2. Check/Uncheck `Enable MCP Server Creation` 

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-3.png" alt="Enable MCP Server Creation toggle" width="400" />

## Managing Individual MCP Servers

   <img src="/img/using-mcp-in-roo/using-mcp-in-roo-8.png" alt="Example of a configuration pane for a MCP Server" width="400" />

Each MCP server has its own configuration panel where you can modify settings, manage tools, and control its operation. To access these settings:

1. Click the <Codicon name="server" /> icon in the top navigation of the Roo Code pane
2. Locate the MCP server you want to manage in the list
   <img src="/img/using-mcp-in-roo/using-mcp-in-roo-4.png" alt="List of MCP Servers" width="400" />

### Deleting a Server

1. Press the <Codicon name="trash" /> next to the MCP server you would like to delete
2. Press the `Delete` button on the confirmation box

  <img src="/img/using-mcp-in-roo/using-mcp-in-roo-5.png" alt="Delete confirmation box" width="400" />

### Restarting a Server

1. Press the <Codicon name="refresh" /> button next to the MCP server you would like to restart

### Enabling or Disabling a Server

1. Press the <Codicon name="activate" /> toggle switch next to the MCP server to enable/disable it

### Network Timeout

To set the maximum time to wait for a response after a tool call to the MCP server:

1. Click the `Network Timeout` pulldown at the bottom of the individual MCP server's config box and change the time. Default is 1 minute but it can be set between 30 seconds and 5 minutes.

<img src="/img/using-mcp-in-roo/using-mcp-in-roo-6.png" alt="Network Timeout pulldown" width="400" />

### Auto Approve Tools

MCP tool auto-approval works on a per-tool basis and is disabled by default. To configure auto-approval:

1. First enable the global "Use MCP servers" auto-approval option in [auto-approving-actions](/features/auto-approving-actions)
2. In the MCP server settings, locate the specific tool you want to auto-approve
3. Check the `Always allow` checkbox next to the tool name

<img src="/img/using-mcp-in-roo/using-mcp-in-roo-7.png" alt="Always allow checkbox for MCP tools" width="120" />

When enabled, Roo Code will automatically approve this specific tool without prompting. Note that the global "Use MCP servers" setting takes precedence - if it's disabled, no MCP tools will be auto-approved.

## Finding and Installing MCP Servers

Roo Code does not come with any pre-installed MCP servers. You'll need to find and install them separately.

* **Community Repositories:** Check for community-maintained lists of MCP servers on GitHub
* **Ask Roo:** You can ask Roo Code to help you find or even create MCP servers (when "[Enable MCP Server Creation](#enabling-or-disabling-mcp-server-creation)" is enabled)
* **Build Your Own:** Create custom MCP servers using the SDK to extend Roo Code with your own tools

For full SDK documentation, visit the [MCP GitHub repository](https://github.com/modelcontextprotocol/).

## Using MCP Tools in Your Workflow

After configuring an MCP server, Roo will automatically detect available tools and resources. To use them:

1. Type your request in the Roo Code chat interface
2. Roo will identify when an MCP tool can help with your task
3. Approve the tool use when prompted (or use auto-approval)

Example: "Analyze the performance of my API" might use an MCP tool that tests API endpoints.

## Troubleshooting MCP Servers

Common issues and solutions:

* **Server Not Responding:** Check if the server process is running and verify network connectivity
* **Permission Errors:** Ensure proper API keys and credentials are configured in your `mcp_settings.json` (for global settings) or `.roo/mcp.json` (for project settings).
* **Tool Not Available:** Confirm the server is properly implementing the tool and it's not disabled in settings
* **Slow Performance:** Try adjusting the network timeout value for the specific MCP server

## Platform-Specific MCP Configuration Examples

### Windows Configuration Example

When setting up MCP servers on Windows, you'll need to use the Windows Command Prompt (`cmd`) to execute commands. Here's an example of configuring a Puppeteer MCP server on Windows:

```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "@modelcontextprotocol/server-puppeteer"
      ]
    }
  }
}
```

This Windows-specific configuration:
- Uses the `cmd` command to access the Windows Command Prompt
- Uses `/c` to tell cmd to execute the command and then terminate
- Uses `npx` to run the package without installing it permanently
- The `-y` flag automatically answers "yes" to any prompts during installation
- Runs the `@modelcontextprotocol/server-puppeteer` package which provides browser automation capabilities

### macOS and Linux Configuration Example

When setting up MCP servers on macOS or Linux, you can use a simpler configuration since you don't need the Windows Command Prompt. Here's an example of configuring a Puppeteer MCP server on macOS or Linux:

```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-puppeteer"
      ]
    }
  }
}
```

This configuration:
- Directly uses `npx` without needing a shell wrapper
- Uses the `-y` flag to automatically answer "yes" to any prompts during installation
- Runs the `@modelcontextprotocol/server-puppeteer` package which provides browser automation capabilities

The same approach can be used for other MCP servers on Windows, adjusting the package name as needed for different server types.

## Runtime Version Manager Configuration

When working with multiple versions of programming languages or runtimes, you may use version managers like [asdf](https://asdf-vm.com/) or [mise](https://mise.jdx.dev/) (formerly rtx). These tools help manage multiple runtime versions on a single system. Here's how to configure MCP servers to work with these version managers:

### mise Configuration Example

[mise](https://mise.jdx.dev/) is a fast, modern runtime version manager that can be used to specify which version of Node.js, Python, or other runtimes to use for your MCP server:

```json
{
  "mcpServers": {
    "mcp-batchit": {
      "command": "mise",
      "args": [
        "x",
        "--",
        "node",
        "/Users/myself/workspace/mcp-batchit/build/index.js"
      ],
      "disabled": false,
      "alwaysAllow": [
        "search",
        "batch_execute"
      ]
    }
  }
}
```

This configuration:
- Uses the `mise` command to manage runtime versions
- The `x` subcommand executes a command with the configured runtime version
- The `--` separates mise arguments from the command to run
- Runs `node` with the specific version configured in your mise settings
- Points to the MCP server JavaScript file
- Automatically allows the "search" and "batch_execute" tools

### asdf Configuration Example

[asdf](https://asdf-vm.com/) is a popular tool for managing multiple runtime versions. Here's how to configure an MCP server to use a specific Node.js version managed by asdf:

```json
{
  "mcpServers": {
    "appsignal": {
      "command": "/Users/myself/.asdf/installs/nodejs/22.2.0/bin/node",
      "args": [
        "/Users/myself/Code/Personal/my-mcp/build/index.js"
      ],
      "env": {
        "ASDF_NODE_VERSION": "22.2.0"
      },
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

This configuration:
- Directly references the Node.js executable from the asdf installations directory
- Sets the `ASDF_NODE_VERSION` environment variable to ensure consistent version use
- Points to the MCP server JavaScript file

Using version managers ensures that your MCP servers run with the correct runtime version, regardless of the system's default version, providing consistency across different environments and preventing version conflicts.
````

## File: docs/features/mcp/what-is-mcp.md
````markdown
---
title: What is MCP?
sidebar_label: What is MCP?
---

# What is MCP?

MCP (Model Context Protocol) is a standardized communication protocol for LLM systems to interact with external tools and services. It functions as a universal adapter between AI assistants and various data sources or applications.

## How It Works

MCP uses a client-server architecture:

1. The AI assistant (client) connects to MCP servers
2. Each server provides specific capabilities (file access, database queries, API integrations)
3. The AI uses these capabilities through a standardized interface
4. Communication occurs via JSON-RPC 2.0 messages

Think of MCP as similar to a USB-C port in the sense that any compatible LLM can connect to any MCP server to access its functionality. This standardization eliminates the need to build custom integrations for each tool and service.

For example, an AI using MCP can perform tasks like "search our company database and generate a report" without requiring specialized code for each database system.

## Common Questions

- **Is MCP a cloud service?** MCP servers can run locally on your computer or remotely as cloud services, depending on the use case and security requirements.

- **Does MCP replace other integration methods?** No. MCP complements existing tools like API plugins and retrieval-augmented generation. It provides a standardized protocol for tool interaction but doesn't replace specialized integration approaches.

- **How is security handled?** Users control which MCP servers they connect to and what permissions those servers have. As with any tool that accesses data or services, use trusted sources and configure appropriate access controls.

## MCP in Roo Code

Roo Code implements the Model Context Protocol to:

- Connect to both local and remote MCP servers
- Provide a consistent interface for accessing tools
- Extend functionality without core modifications
- Enable specialized capabilities on demand

MCP provides a standardized way for AI systems to interact with external tools and services, making complex integrations more accessible and consistent.

## Learn More About MCP

Ready to dig deeper? Check out these guides:

- [MCP Overview](/features/mcp/overview) - A quick glance at the MCP documentation structure
- [Using MCP in Roo Code](/features/mcp/using-mcp-in-roo) - Get started with MCP in Roo, including creating simple servers
- [MCP vs API](/features/mcp/mcp-vs-api) - Technical advantages compared to traditional APIs
- [STDIO & SSE Transports](/features/mcp/server-transports) - Local vs. hosted deployment models
````

## File: docs/features/api-configuration-profiles.md
````markdown
# API Configuration Profiles

API Configuration Profiles allow you to create and switch between different sets of AI settings. Each profile can have different configurations for each mode, letting you optimize your experience based on the task at hand.

:::info
Having multiple configuration profiles lets you quickly switch between different AI providers, models, and settings without reconfiguring everything each time you want to change your setup.
:::
## How It Works

Configuration profiles can have their own:
- API providers (OpenAI, Anthropic, OpenRouter, Glama, etc.)
- API keys and authentication details
- Model selections (o3-mini-high, Claude 3.7 Sonnet, DeepSeek R1, etc.)
- [Temperature settings](/features/model-temperature) for controlling response randomness
- Thinking budgets
- Provider-specific settings
- Diff editing configuration
- Rate limit settings

Note that available settings vary by provider and model. Each provider offers different configuration options, and even within the same provider, different models may support different parameter ranges or features.

## Creating and Managing Profiles

### Creating a Profile

1. Open Settings by clicking the gear icon <Codicon name="gear" /> → Providers
2. Click the "+" button next to the profile selector

   <img src="/img/api-configuration-profiles/api-configuration-profiles-1.png" alt="Profile selector with plus button" width="550" />
3. Enter a name for your new profile
   
   <img src="/img/api-configuration-profiles/api-configuration-profiles.png" alt="Creating a new profile dialog" width="550" />
4. Configure the profile settings:
   - Select your API provider
      
      <img src="/img/api-configuration-profiles/api-configuration-profiles-2.png" alt="Provider selection dropdown" width="550" />
   - Enter API key
   
      <img src="/img/api-configuration-profiles/api-configuration-profiles-3.png" alt="API key entry field" width="550" />
   - Choose a model
   
      <img src="/img/api-configuration-profiles/api-configuration-profiles-8.png" alt="Model selection interface" width="550" />
   - Configure the **Rate Limit** for this profile:
     - **Default is 0 (disabled), which is suitable for most users.** If needed, you can set a minimum time (in seconds) between API requests *for this profile* to help manage costs or avoid provider rate limits.
     - A value of 0 disables rate limiting (default).
     - Requests using other profiles follow their own rate limits.

         <img src="/img/api-configuration-profiles/api-configuration-profiles-12.png" alt="Rate limit slider control within API profile settings" width="550" />
   - Adjust model parameters (like [temperature](/features/model-temperature))
   
### Switching Profiles

Switch profiles in two ways:
1. From Settings panel: Select a different profile from the dropdown

   <img src="/img/api-configuration-profiles/api-configuration-profiles-7.png" alt="Profile selection dropdown in Settings" width="550" />
2. During chat: Access the API Configuration dropdown in the chat interface

   <img src="/img/api-configuration-profiles/api-configuration-profiles-6.png" alt="API Configuration dropdown in chat interface" width="550" />
### Pinning and Sorting Profiles

The API configuration dropdown now supports pinning your favorite profiles for quicker access:

1. Hover over any profile in the dropdown to reveal the pin icon
2. Click the pin icon to add the profile to your pinned list
3. Pinned profiles appear at the top of the dropdown, sorted alphabetically
4. Unpinned profiles appear below a separator, also sorted alphabetically
5. You can unpin a profile by clicking the same icon again

<img src="/img/api-configuration-profiles/api-configuration-profiles-4.png" alt="Pinning API configuration profiles" width="550" />

This feature makes it easier to navigate between commonly used profiles, especially when you have many configurations.


### Editing and Deleting Profiles

<img src="/img/api-configuration-profiles/api-configuration-profiles-10.png" alt="Profile editing interface" width="550" />
- Select the profile in Settings to modify any settings
- Click the pencil icon to rename a profile
- Click the trash icon to delete a profile (you cannot delete the only remaining profile)

## Linking Profiles to Modes
In the <Codicon name="notebook" /> Prompts tab, you can explicitly associate a specific Configuration Profile with each Mode. The system also automatically remembers which profile you last used with each mode, making your workflow more efficient.
<img src="/img/api-configuration-profiles/api-configuration-profiles-11.png" alt="Profile-Mode association interface in Prompts tab" width="550" />

## Security Note

API keys are stored securely in VSCode's Secret Storage and are never exposed in plain text.

## Related Features

- Works with [custom modes](/features/custom-modes) you create
- Integrates with [local models](/advanced-usage/local-models) for offline work
- Supports [temperature settings](/features/model-temperature) per mode
- Supports per-profile rate limits (configured here) and general [usage tracking/cost info](/advanced-usage/rate-limits-costs)
- Supports per-profile diff editing configuration (v3.12+) for tailored code editing behavior
````

## File: docs/features/auto-approving-actions.md
````markdown
# Auto-Approving Actions

> ⚠️ **SECURITY WARNING:** Auto-approve settings bypass confirmation prompts, giving Roo direct access to your system. This can result in **data loss, file corruption, or worse**. Command line access is particularly dangerous, as it can potentially execute harmful operations that could damage your system or compromise security. Only enable auto-approval for actions you fully trust.

Auto-approve settings speed up your workflow by eliminating repetitive confirmation prompts, but they significantly increase security risks.

## Quick Start Guide

1. Click the Auto-Approve Toolbar above the chat input
2. Select which actions Roo can perform without asking permission
3. Use the master toggle (leftmost checkbox) to quickly enable/disable all permissions

## Auto-Approve Toolbar

<img src="/img/auto-approving-actions/auto-approving-actions.png" alt="Auto-approve toolbar collapsed state" width="600" />

*Prompt box and Auto-Approve Toolbar showing enabled permissions*

Click the toolbar to expand it and configure individual permissions:

<img src="/img/auto-approving-actions/auto-approving-actions-1.png" alt="Auto-approve toolbar expanded state" width="600" />

*Prompt text box and Expanded toolbar with all options*

### Available Permissions

| Permission | What it does | Risk level |
|------------|--------------|------------|
| **Read files and directories** | Lets Roo access files without asking | Medium |
| **Edit files** | Lets Roo modify files without asking | **High** |
| **Execute approved commands** | Runs whitelisted terminal commands automatically | **High** |
| **Use the browser** | Allows headless browser interaction | Medium |
| **Use MCP servers** | Lets Roo use configured MCP services | Medium-High |
| **Switch modes** | Changes between Roo modes automatically | Low |
| **Create & complete subtasks** | Manages subtasks without confirmation | Low |
| **Retry failed requests** | Automatically retries failed API requests | Low |

## Master Toggle for Quick Control

The leftmost checkbox works as a master toggle:

<img src="/img/auto-approving-actions/auto-approving-actions-14.png" alt="Master toggle in Auto-approve toolbar" width="600" />

*Master toggle (checkbox) controls all auto-approve permissions at once*

Use the master toggle when:
- Working in sensitive code (turn off)
- Doing rapid development (turn on)
- Switching between exploration and editing tasks

## Advanced Settings Panel

The settings panel provides detailed control with important security context:

> **Allow Roo to automatically perform operations without requiring approval. Enable these settings only if you fully trust the AI and understand the associated security risks.**

To access these settings:

1. Click <Codicon name="gear" /> in the top-right corner
2. Navigate to Auto-Approve Settings

<img src="/img/auto-approving-actions/auto-approving-actions-4.png" alt="Settings panel auto-approve options" width="550" />

*Complete settings panel view*

### Read Operations

:::caution Read Operations
<img src="/img/auto-approving-actions/auto-approving-actions-6.png" alt="Read-only operations setting" width="550" />

**Setting:** "Always approve read-only operations"

**Description:** "When enabled, Roo will automatically view directory contents and read files without requiring you to click the Approve button."

**Risk level:** Medium

While this setting only allows reading files (not modifying them), it could potentially expose sensitive data. Still recommended as a starting point for most users, but be mindful of what files Roo can access.
:::

### Write Operations

:::caution Write Operations
<img src="/img/auto-approving-actions/auto-approving-actions-7.png" alt="Write operations setting with delay slider" width="550" />

**Setting:** "Always approve write operations"

**Description:** "Automatically create and edit files without requiring approval"

**Delay slider:** "Delay after writes to allow diagnostics to detect potential problems" (Default: 1000ms)

**Risk level:** High

This setting allows Roo to modify your files without confirmation. The delay timer is crucial:
- Higher values (2000ms+): Recommended for complex projects where diagnostics take longer
- Default (1000ms): Suitable for most projects
- Lower values: Use only when speed is critical and you're in a controlled environment
- Zero: No delay for diagnostics (not recommended for critical code)

#### Write Delay & Problems Pane Integration

<img src="/img/auto-approving-actions/auto-approving-actions-5.png" alt="VSCode Problems pane showing diagnostic information" width="600" />

*VSCode Problems pane that Roo checks during the write delay*

When you enable auto-approval for writing files, the delay timer works with VSCode's Problems pane:

1. Roo makes a change to your file
2. VSCode's diagnostic tools analyze the change
3. The Problems pane updates with any errors or warnings
4. Roo notices these issues before continuing

This works like a human developer pausing to check for errors after changing code. You can adjust the delay time based on:

- Project complexity
- Language server speed
- How important error detection is for your workflow
:::

### Browser Actions

:::info Browser Actions
<img src="/img/auto-approving-actions/auto-approving-actions-8.png" alt="Browser actions setting" width="550" />

**Setting:** "Always approve browser actions"

**Description:** "Automatically perform browser actions without requiring approval"

**Note:** "Only applies when the model supports computer use"

**Risk level:** Medium

Allows Roo to control a headless browser without confirmation. This can include:
- Opening websites
- Navigating pages
- Interacting with web elements

Consider the security implications of allowing automated browser access.
:::

### API Requests

:::info API Requests
<img src="/img/auto-approving-actions/auto-approving-actions-9.png" alt="API requests retry setting with delay slider" width="550" />

**Setting:** "Always retry failed API requests"

**Description:** "Automatically retry failed API requests when server returns an error response"

**Delay slider:** "Delay before retrying the request" (Default: 5s)

**Risk level:** Low

This setting automatically retries API calls when they fail. The delay controls how long Roo waits before trying again:
- Longer delays are gentler on API rate limits
- Shorter delays give faster recovery from transient errors
:::

### MCP Tools

:::caution MCP Tools
<img src="/img/auto-approving-actions/auto-approving-actions-10.png" alt="MCP tools setting" width="550" />

**Setting:** "Always approve MCP tools"

**Description:** "Enable auto-approval of individual MCP tools in the MCP Servers view (requires both this setting and the tool's individual 'Always allow' checkbox)"

**Risk level:** Medium-High (depends on configured MCP tools)

This setting works in conjunction with individual tool permissions in the MCP Servers view. Both this global setting and the tool-specific permission must be enabled for auto-approval.
:::

### Mode Switching

:::info Mode Switching
<img src="/img/auto-approving-actions/auto-approving-actions-11.png" alt="Mode switching setting" width="550" />

**Setting:** "Always approve mode switching"

**Description:** "Automatically switch between different modes without requiring approval"

**Risk level:** Low

Allows Roo to change between different modes (Code, Architect, etc.) without asking for permission. This primarily affects the AI's behavior rather than system access.
:::

### Subtasks

:::info Subtasks
<img src="/img/auto-approving-actions/auto-approving-actions-12.png" alt="Subtasks setting" width="550" />

**Setting:** "Always approve creation & completion of subtasks"

**Description:** "Allow creation and completion of subtasks without requiring approval"

**Risk level:** Low

Enables Roo to create and complete subtasks automatically. This relates to workflow organization rather than system access.
:::

### Command Execution

:::caution Command Execution
<img src="/img/auto-approving-actions/auto-approving-actions-13.png" alt="Command execution setting with whitelist interface" width="550" />

**Setting:** "Always approve allowed execute operations"

**Description:** "Automatically execute allowed terminal commands without requiring approval"

**Command management:** "Command prefixes that can be auto-executed when 'Always approve execute operations' is enabled. Add * to allow all commands (use with caution)."

**Risk level:** High

This setting allows terminal command execution with controls. While risky, the whitelist feature limits what commands can run. Important security features:

- Whitelist specific command prefixes (recommended)
- Never use * wildcard in production or with sensitive data
- Consider security implications of each allowed command
- Always verify commands that interact with external systems

**Interface elements:**
- Text field to enter command prefixes (e.g., 'git')
- "Add" button to add new prefixes
- Clickable command buttons with X to remove them
:::
````

## File: docs/features/boomerang-tasks.mdx
````
---
sidebar_label: 'Boomerang Tasks'
---

# Boomerang Tasks: Orchestrate Complex Workflows

Boomerang Tasks (also known as subtasks or task orchestration) allow you to break down complex projects into smaller, manageable pieces using the built-in **`🪃 Orchestrator` Mode (aka Boomerang Mode)**. Think of it like delegating parts of your work to specialized assistants. Each subtask runs in its own context, often using a different Roo Code mode tailored for that specific job (like [`💻 Code`](/basic-usage/using-modes#code-mode-default), [`🏗️ Architect`](/basic-usage/using-modes#architect-mode), or [`🪲 Debug`](/basic-usage/using-modes#debug-mode)). The Orchestrator mode manages this process.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/RX862U09fnE"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>

<br />

:::info Orchestrator Mode is Built-In
The `🪃 Orchestrator` mode (previously achieved via a custom "Boomerang Mode") is now a built-in mode specifically designed to orchestrate workflows by breaking down tasks and delegating them to other modes. You no longer need to create a custom mode for this functionality.

Learn more about [Built-in Modes](/basic-usage/using-modes#built-in-modes).
:::

## Why Use Boomerang Tasks?

-   **Tackle Complexity:** Break large, multi-step projects (e.g., building a full feature) into focused subtasks (e.g., design, implementation, documentation).
-   **Use Specialized Modes:** Automatically delegate subtasks to the mode best suited for that specific piece of work, leveraging specialized capabilities for optimal results.
-   **Maintain Focus & Efficiency:** Each subtask operates in its own isolated context with a separate conversation history. This prevents the parent (orchestrator) task from becoming cluttered with the detailed execution steps (like code diffs or file analysis results), allowing it to focus efficiently on the high-level workflow and manage the overall process based on concise summaries from completed subtasks.
-   **Streamline Workflows:** Results from one subtask can be automatically passed to the next, creating a smooth flow (e.g., architectural decisions feeding into the coding task).

## How It Works

1.  When in the [`🪃 Orchestrator`](/basic-usage/using-modes#orchestrator-mode-aka-boomerang-mode) mode (aka Boomerang Mode), Roo analyzes a complex task and suggests breaking it down into a subtask[^1].

2.  The parent task (in Orchestrator mode) pauses, and the new subtask begins in a different, specialized mode[^2].
3.  When the subtask's goal is achieved, Roo signals completion.
4.  The parent task resumes with only the summary[^3] of the subtask. The parent uses this summary to continue the main workflow.

## Key Considerations

-   **Approval Required:** By default, you must approve the creation and completion of each subtask. This can be automated via the [Auto-Approving Actions](/features/auto-approving-actions#subtasks) settings if desired.
-   **Context Isolation and Transfer:** Each subtask operates in complete isolation with its own conversation history. It does not automatically inherit the parent's context. Information must be explicitly passed:
    *   **Down:** Via the initial instructions provided when the subtask is created.
    *   **Up:** Via the final summary provided when the subtask finishes. Be mindful that only this summary returns to the parent.
-   **Navigation:** Roo's interface helps you see the hierarchy of tasks (which task is the parent, which are children). You can typically navigate between active and paused tasks.

Boomerang Tasks provide a powerful way to manage complex development workflows directly within Roo Code, leveraging specialized modes for maximum efficiency.

:::tip Keep Tasks Focused
Use subtasks (delegated via Orchestrator mode) to maintain clarity. If a request significantly shifts focus or requires a different expertise (mode), consider creating a subtask rather than overloading the current one.
:::


[^1]: This context is passed via the `message` parameter of the [`new_task`](/advanced-usage/available-tools/new-task) tool when the Orchestrator mode delegates the task.
[^2]: The mode for the subtask is specified via the `mode` parameter of the [`new_task`](/advanced-usage/available-tools/new-task) tool during initiation by the Orchestrator mode.
[^3]: This summary is passed via the `result` parameter of the [`attempt_completion`](/advanced-usage/available-tools/attempt-completion) tool when the subtask finishes.
````

## File: docs/features/browser-use.mdx
````
# Browser Use

Roo Code provides sophisticated browser automation capabilities that let you interact with websites directly from VS Code. This feature enables testing web applications, automating browser tasks, and capturing screenshots without leaving your development environment.



<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/SJae206swxA"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>

<div style={{ marginTop: '20px' }}></div>

:::caution Model Support Required
Browser Use within Roo Code requires the use of Claude Sonnet 3.5 or 3.7
:::

## How Browser Use Works

By default, Roo Code uses a built-in browser that:
- Launches automatically when you ask Roo to visit a website
- Captures screenshots of web pages
- Allows Roo to interact with web elements
- Runs invisibly in the background

All of this happens directly within VS Code, with no setup required.

## Using Browser Use

A typical browser interaction follows this pattern:

**Important:** Browser Use requires Claude Sonnet 3.5 or 3.7 model.

1. Ask Roo to visit a website
2. Roo launches the browser and shows you a screenshot
3. Request additional actions (clicking, typing, scrolling)
4. Roo closes the browser when finished

For example:

```
Open the browser and view our site.
```

```
Can you check if my website at https://roocode.com is displaying correctly?
```

```
Browse http://localhost:3000, scroll down to the bottom of the page and check if the footer information is displaying correctly.
```

<img src="/img/browser-use/browser-use-1.png" alt="Browser use example" width="300" />

## How Browser Actions Work

The browser_action tool controls a browser instance that returns screenshots and console logs after each action, allowing you to see the results of interactions.

Key characteristics:
- Each browser session must start with `launch` and end with `close`
- Only one browser action can be used per message
- While the browser is active, no other tools can be used
- You must wait for the response (screenshot and logs) before performing the next action

### Available Browser Actions

| Action | Description | When to Use |
|--------|-------------|------------|
| `launch` | Opens a browser at a URL | Starting a new browser session |
| `click` | Clicks at specific coordinates | Interacting with buttons, links, etc. |
| `type` | Types text into active element | Filling forms, search boxes |
| `scroll_down` | Scrolls down by one page | Viewing content below the fold |
| `scroll_up` | Scrolls up by one page | Returning to previous content |
| `close` | Closes the browser | Ending a browser session |

## Browser Use Configuration/Settings

:::info Default Browser Settings
- **Enable browser tool**: Enabled
- **Viewport size**: Small Desktop (900x600)
- **Screenshot quality**: 75%
- **Use remote browser connection**: Disabled
:::

### Accessing Settings

To change Browser / Computer Use settings in Roo:

1. Open Settings by clicking the gear icon <Codicon name="gear" /> → Browser / Computer Use

   <img src="/img/browser-use/browser-use.png" alt="Browser settings menu" width="600" />

### Enable/Disable Browser Use

**Purpose**: Master toggle that enables Roo to interact with websites using a Puppeteer-controlled browser.

To change this setting:
1. Check or uncheck the "Enable browser tool" checkbox within your Browser / Computer Use settings

   <img src="/img/browser-use/browser-use-2.png" alt="Enable browser tool setting" width="300" />

### Viewport Size

**Purpose**: Determines the resolution of the browser session Roo Code uses.

**Tradeoff**: Higher values provide a larger viewport but increase token usage.

To change this setting:
1. Click the dropdown menu under "Viewport size" within your Browser / Computer Use settings
2. Select one of the available options:
   - Large Desktop (1280x800)
   - Small Desktop (900x600) - Default
   - Tablet (768x1024)
   - Mobile (360x640)
2. Select your desired resolution.

   <img src="/img/browser-use/browser-use-3.png" alt="Viewport size setting" width="600" />

### Screenshot Quality

**Purpose**: Controls the WebP compression quality of browser screenshots.

**Tradeoff**: Higher values provide clearer screenshots but increase token usage.

To change this setting:
1. Adjust the slider under "Screenshot quality" within your Browser / Computer Use settings
2. Set a value between 1-100% (default is 75%)
3. Higher values provide clearer screenshots but increase token usage:
   - 40-50%: Good for basic text-based websites
   - 60-70%: Balanced for most general browsing
   - 80%+: Use when fine visual details are critical

   <img src="/img/browser-use/browser-use-4.png" alt="Screenshot quality setting" width="600" />

### Remote Browser Connection

**Purpose**: Connect Roo to an existing Chrome browser instead of using the built-in browser.

**Benefits**:
- Works in containerized environments and remote development workflows
- Maintains authenticated sessions between browser uses
- Eliminates repetitive login steps
- Allows use of custom browser profiles with specific extensions

**Requirements**: Chrome must be running with remote debugging enabled.

To enable this feature:
1. Check the "Use remote browser connection" box in Browser / Computer Use settings
2. Click "Test Connection" to verify

   <img src="/img/browser-use/browser-use-5.png" alt="Remote browser connection setting" width="600" />

#### Common Use Cases

- **DevContainers**: Connect from containerized VS Code to host Chrome browser
- **Remote Development**: Use local Chrome with remote VS Code server
- **Custom Chrome Profiles**: Use profiles with specific extensions and settings

#### Connecting to a Visible Chrome Window

Connect to a visible Chrome window to observe Roo's interactions in real-time:

**macOS**
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug --no-first-run
```

**Windows**
```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir=C:\chrome-debug --no-first-run
```

**Linux**
```bash
google-chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug --no-first-run
```
````

## File: docs/features/checkpoints.md
````markdown
# Checkpoints

Checkpoints automatically version your workspace files during Roo Code tasks, enabling non-destructive exploration of AI suggestions and easy recovery from unwanted changes.

Checkpoints let you:
- Safely experiment with AI-suggested changes
- Easily recover from undesired modifications
- Compare different implementation approaches
- Revert to previous project states without losing work

:::info Important Notes
- **Checkpoints are enabled by default.**
- **Git must be installed** for checkpoints to function - [see installation instructions](#git-installation)
- No GitHub account or repository is required
- No Git personal information configuration is needed
- The shadow Git repository operates independently from your project's existing Git configuration
:::

## Configuration Options

Access checkpoint settings in Roo Code settings under the "Checkpoints" section:

1. Open Settings by clicking the gear icon <Codicon name="gear" /> → Checkpoints
2. Check or uncheck the "Enable automatic checkpoints" checkbox

   <img src="/img/checkpoints/checkpoints.png" alt="Checkpoint settings in Roo Code configuration" width="500" />

## How Checkpoints Work

Roo Code captures snapshots of your project's state using a shadow Git repository, separate from your main version control system. These snapshots, called checkpoints, automatically record changes throughout your AI-assisted workflow—whenever tasks begin, files change, or commands run.

Checkpoints are stored as Git commits in the shadow repository, capturing:

- File content changes
- New files added
- Deleted files
- Renamed files
- Binary file changes

## Working with Checkpoints

Checkpoints are integrated directly into your workflow through the chat interface.

Checkpoints appear directly in your chat history in two forms:

- **Initial checkpoint** marks your starting project state
   <img src="/img/checkpoints/checkpoints-1.png" alt="Initial checkpoint indicator in chat" width="500" />

- **Regular checkpoints** appear after file modifications or command execution
   <img src="/img/checkpoints/checkpoints-2.png" alt="Regular checkpoint indicator in chat" width="500" />

Each checkpoint provides two primary functions:

### Viewing Differences

To compare your current workspace with a previous checkpoint:

1. Locate the checkpoint in your chat history
2. Click the checkpoint's `View Differences` button

   <img src="/img/checkpoints/checkpoints-6.png" alt="View Differences button interface" width="100" />

3. Review the differences in the comparison view:
   - Added lines are highlighted in green
   - Removed lines are highlighted in red
   - Modified files are listed with detailed changes
   - Renamed and moved files are tracked with their path changes
   - New or deleted files are clearly marked

<img src="/img/checkpoints/checkpoints-3.png" alt="View differences option for checkpoints" width="800" />

### Restoring Checkpoints

To restore a project to a previous checkpoint state:

1. Locate the checkpoint in your chat history
2. Click the checkpoint's `Restore Checkpoint` button
   <img src="/img/checkpoints/checkpoints-7.png" alt="Restore checkpoint button interface" width="100" />
3. Choose one of these restoration options:
   
   <img src="/img/checkpoints/checkpoints-4.png" alt="Restore checkpoint option" width="300" />

   - **Restore Files Only** - Reverts only workspace files to checkpoint state without modifying conversation history. Ideal for comparing alternative implementations while maintaining chat context, allowing you to seamlessly switch between different project states. This option does not require confirmation and lets you quickly switch between different implementations.
   
   - **Restore Files & Task** - Reverts both workspace files AND removes all subsequent conversation messages. Use when you want to completely reset both your code and conversation back to the checkpoint's point in time. This option requires confirmation in a dialog as it cannot be undone.

      <img src="/img/checkpoints/checkpoints-9.png" alt="Confirmation dialog for restoring checkpoint with files & task" width="300" />

### Limitations and Considerations

- **Scope**: Checkpoints only capture changes made during active Roo Code tasks
- **External changes**: Modifications made outside of tasks (manual edits, other tools) aren't included
- **Large files**: Very large binary files may impact performance
- **Unsaved work**: Restoration will overwrite any unsaved changes in your workspace

## Technical Implementation

### Checkpoint Architecture

The checkpoint system consists of:

1. **Shadow Git Repository**: A separate Git repository created specifically for checkpoint tracking that functions as the persistent storage mechanism for checkpoint state.

2. **Checkpoint Service**: Handles Git operations and state management through:
   - Repository initialization
   - Checkpoint creation and storage
   - Diff computation
   - State restoration

3. **UI Components**: Interface elements displayed in the chat that enable interaction with checkpoints.

### Restoration Process

When restoration executes, Roo Code:
- Performs a hard reset to the specified checkpoint commit
- Copies all files from the shadow repository to your workspace
- Updates internal checkpoint tracking state

### Storage Type

Checkpoints are task-scoped, meaning they are specific to a single task.

### Diff Computation

Checkpoint comparison uses Git's underlying diff capabilities to produce structured file differences:
- Modified files show line-by-line changes
- Binary files are properly detected and handled
- Renamed and moved files are tracked correctly
- File creation and deletion are clearly identified

### File Exclusion and Ignore Patterns

The checkpoint system uses intelligent file exclusion to track only relevant files:

#### Built-in Exclusions

The system has comprehensive built-in exclusion patterns that automatically ignore:
- Build artifacts and dependency directories (`node_modules/`, `dist/`, `build/`)
- Media files and binary assets (images, videos, audio)
- Cache and temporary files (`.cache/`, `.tmp/`, `.bak`)
- Configuration files with sensitive information (`.env`)
- Large data files (archives, executables, binaries)
- Database files and logs

These patterns are written to the shadow repository's `.git/info/exclude` file during initialization.

#### .gitignore Support

The checkpoint system respects `.gitignore` patterns in your workspace:
- Files excluded by `.gitignore` won't trigger checkpoint creation
- Excluded files won't appear in checkpoint diffs
- Standard Git ignore rules apply when staging file changes

#### .rooignore Behavior

The `.rooignore` file (which controls AI access to files) is separate from checkpoint tracking:
- Files excluded by `.rooignore` but not by `.gitignore` will still be checkpointed
- Changes to AI-inaccessible files can still be restored through checkpoints

This separation is intentional, as `.rooignore` limits which files the AI can access, not which files should be tracked for version history.

#### Nested Git Repositories

The checkpoint system includes special handling for nested Git repositories:
- Temporarily renames nested `.git` directories to `.git_disabled` during operations
- Restores them after operations complete
- Allows proper tracking of files in nested repositories
- Ensures nested repositories remain functional and unaffected

### Concurrency Control

Operations are queued to prevent concurrent Git operations that might corrupt repository state. This ensures that rapid checkpoint operations complete safely even when requested in quick succession.

## Git Installation

Checkpoints require Git to be installed on your system. The implementation uses the `simple-git` library, which relies on Git command-line tools to create and manage shadow repositories.

### macOS

1. **Install with Homebrew (recommended)**:
   ```
   brew install git
   ```

2. **Alternative: Install with Xcode Command Line Tools**:
   ```
   xcode-select --install
   ```

3. **Verify installation**:
   - Open Terminal
   - Type `git --version`
   - You should see a version number like `git version 2.40.0`

### Windows

1. **Download Git for Windows**:
   - Visit https://git-scm.com/download/win
   - The download should start automatically

2. **Run the installer**:
   - Accept the license agreement
   - Choose installation location (default is recommended)
   - Select components (default options are typically sufficient)
   - Choose the default editor
   - Choose how to use Git from the command line (recommended: Git from the command line and also from 3rd-party software)
   - Configure line ending conversions (recommended: Checkout Windows-style, commit Unix-style)
   - Complete the installation

3. **Verify installation**:
   - Open Command Prompt or PowerShell
   - Type `git --version`
   - You should see a version number like `git version 2.40.0.windows.1`

### Linux

**Debian/Ubuntu**:
```
sudo apt update
sudo apt install git
```

**Fedora**:
```
sudo dnf install git
```

**Arch Linux**:
```
sudo pacman -S git
```

**Verify installation**:
- Open Terminal
- Type `git --version`
- You should see a version number
````

## File: docs/features/code-actions.md
````markdown
# Code Actions

Code Actions are a powerful feature of VS Code that provide quick fixes, refactorings, and other code-related suggestions directly within the editor. Roo Code integrates with this system to offer AI-powered assistance for common coding tasks.

## What are Code Actions?

Code Actions appear as a lightbulb icon (💡) in the editor gutter (the area to the left of the line numbers). They can also be accessed via the right-click context menu, or via keyboard shortcut. They are triggered when:

*   You select a range of code.
*   Your cursor is on a line with a problem (error, warning, or hint).
*   You invoke them via command.

Clicking the lightbulb, right-clicking and selecting "Roo Code", or using the keyboard shortcut (`Ctrl+.` or `Cmd+.` on macOS, by default), displays a menu of available actions.

## Roo Code's Code Actions

Roo Code provides the following Code Actions:

*   **Add to Context:** Quickly adds the selected code to your chat with Roo, including line numbers so Roo knows exactly where the code is from. It's listed first in the menu for easy access. (More details below).
*   **Explain Code:** Asks Roo Code to explain the selected code.
*   **Fix Code:** Asks Roo Code to fix problems in the selected code (available when diagnostics are present).
*   **Improve Code:** Asks Roo Code to suggest improvements to the selected code.

### Add to Context Deep Dive

The **Add to Context** action is listed first in the Code Actions menu so you can quickly add code snippets to your conversation. When you use it, Roo Code includes the filename and line numbers along with the code.

This helps Roo understand the exact context of your code within the project, allowing it to provide more relevant and accurate assistance.

**Example Chat Input:**

```
Can you explain this function?
@myFile.js:15:25
```

*(Where `@myFile.js:15:25` represents the code added via "Add to Context")*

Each of these actions can be performed "in a new task" or "in the current task."

## Using Code Actions

There are three main ways to use Roo Code's Code Actions:

### 1. From the Lightbulb (💡)

1.  **Select Code:** Select the code you want to work with. You can select a single line, multiple lines, or an entire block of code.
2.  **Look for the Lightbulb:** A lightbulb icon will appear in the gutter next to the selected code (or the line with the error/warning).
3.  **Click the Lightbulb:** Click the lightbulb icon to open the Code Actions menu.
4.  **Choose an Action:** Select the desired Roo Code action from the menu.
5.  **Review and Approve:** Roo Code will propose a solution in the chat panel. Review the proposed changes and approve or reject them.

### 2. From the Right-Click Context Menu

1.  **Select Code:** Select the code you want to work with.
2.  **Right-Click:** Right-click on the selected code to open the context menu.
3.  **Choose "Roo Code":** Select the "Roo Code" option from the context menu. A submenu will appear with the available Roo Code actions.
4.  **Choose an Action:** Select the desired action from the submenu.
5.  **Review and Approve:** Roo Code will propose a solution in the chat panel. Review the proposed changes and approve or reject them.

### 3. From the Command Palette

1.  **Select Code:** Select the code you want to work with.
2.  **Open the Command Palette:** Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3.  **Type a Command:** Type "Roo Code" to filter the commands, then choose the relevant code action (e.g., "Roo Code: Explain Code"). You can also type the start of the command, like "Roo Code: Explain", and select from the filtered list.
4.  **Review and Approve:** Roo Code will propose a solution in the chat panel. Review the proposed changes and approve or reject them.

## Code Actions and Current Task

Each code action gives you two options:

*   **in New Task:** Select this to begin a conversation with Roo centered around this code action.
*   **in Current Task:** If a conversation has already begun, this option will add the code action as an additional message.

## Customizing Code Action Prompts

You can customize the prompts used for each Code Action by modifying the "Support Prompts" in the **Prompts** tab.  This allows you to fine-tune the instructions given to the AI model and tailor the responses to your specific needs.

1.  **Open the Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar.
2. **Find "Support Prompts":** You will see the support prompts, including "Enhance Prompt", "Explain Code", "Fix Code", and "Improve Code".
3. **Edit the Prompts:**  Modify the text in the text area for the prompt you want to customize. You can use placeholders like `${filePath}` and `${selectedText}` to include information about the current file and selection.
4. **Click "Done":** Save your changes.

By using Roo Code's Code Actions, you can quickly get AI-powered assistance directly within your coding workflow. This can save you time and help you write better code.
````

## File: docs/features/custom-instructions.md
````markdown
# Custom Instructions

Custom Instructions allow you to personalize how Roo behaves, providing specific guidance that shapes responses, coding style, and decision-making processes.

:::info Instruction File Locations
You can provide custom instructions using dedicated files or directories within your workspace. This allows for better organization and version control.

**Workspace-Wide Instructions:** Apply to all modes in the project.
*   **Preferred Method: Directory (`.roo/rules/`)**
    ```
    .
    ├── .roo/
    │   └── rules/          # Workspace-wide rules
    │       ├── 01-general.md
    │       └── 02-coding-style.txt
    └── ... (other project files)
    ```
*   **Fallback Method: Single File (`.roorules`)**
    ```
    .
    ├── .roorules           # Workspace-wide rules (single file)
    └── ... (other project files)
    ```

**Mode-Specific Instructions:** Apply only to a specific mode (e.g., `code`).
*   **Preferred Method: Directory (`.roo/rules-{modeSlug}/`)**
    ```
    .
    ├── .roo/
    │   └── rules-code/     # Rules for "code" mode
    │       ├── 01-js-style.md
    │       └── 02-ts-style.md
    └── ... (other project files)
    ```
*   **Fallback Method: Single File (`.roorules-{modeSlug}`)**
    ```
    .
    ├── .roorules-code      # Rules for "code" mode (single file)
    └── ... (other project files)
    ```
The directory methods take precedence if they exist and contain files. See [Workspace-Level Instructions](#workspace-level-instructions) and [Mode-Specific Instructions](#mode-specific-instructions) for details.
:::

## What Are Custom Instructions?

Custom Instructions define specific behaviors, preferences, and constraints beyond Roo's basic role definition. Examples include coding style, documentation standards, testing requirements, and workflow guidelines.

## Setting Custom Instructions

### Global Custom Instructions

These instructions apply across all workspaces and maintain your preferences regardless of which project you're working on.

**How to set them:**

<img src="/img/custom-instructions/custom-instructions.png" alt="Roo Code Prompts tab showing global custom instructions interface" width="600" />
1.  **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2.  **Find Section:** Find the "Custom Instructions for All Modes" section
3.  **Enter Instructions:** Enter your instructions in the text area
4.  **Save Changes:** Click "Done" to save your changes

### Workspace-Level Instructions

These instructions only apply within your current workspace, allowing you to customize Roo Code's behavior for specific projects.

#### Workspace-Wide Instructions via Files/Directories

Workspace-wide instructions apply to all modes within the current project and can be defined using files:

*   **Preferred Method: Directory-Based (`.roo/rules/`)**
    *   Create a directory named `.roo/rules/` in your workspace root.
    *   Place instruction files (e.g., `.md`, `.txt`) inside. Roo Code reads files recursively, appending their content to the system prompt in **alphabetical order** based on filename.
    *   This method takes precedence if the directory exists and contains files.
*   **Fallback Method: File-Based (`.roorules`)**
    *   If `.roo/rules/` doesn't exist or is empty, Roo Code looks for a single `.roorules` file in the workspace root.
    *   If found, its content is loaded.

#### Mode-Specific Instructions

Mode-specific instructions can be set in two independent ways that can be used simultaneously:

1.  **Using the Prompts Tab:**

    <img src="/img/custom-instructions/custom-instructions-2.png" alt="Roo Code Prompts tab showing mode-specific custom instructions interface" width="600" />
    * **Open Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
    * **Select Mode:** Under the Modes heading, click the button for the mode you want to customize
    * **Enter Instructions:** Enter your instructions in the text area under "Mode-specific Custom Instructions (optional)"
    * **Save Changes:** Click "Done" to save your changes

        :::info Global Mode Rules
        If the mode itself is global (not workspace-specific), any custom instructions you set for it will also apply globally for that mode across all workspaces.
        :::

2.  **Using Rule Files/Directories:** Provide mode-specific instructions via files:
    *   **Preferred Method: Directory-Based (`.roo/rules-{modeSlug}/`)**
        *   Create a directory named `.roo/rules-{modeSlug}/` (e.g., `.roo/rules-docs-writer/`) in your workspace root.
        *   Place instruction files inside (recursive loading). Files are read and appended to the system prompt in **alphabetical order** by filename.
        *   This method takes precedence over the fallback file method for the specific mode if the directory exists and contains files.
    *   **Fallback Method: File-Based (`.roorules-{modeSlug}`)**
        *   If `.roo/rules-{modeSlug}/` doesn't exist or is empty, Roo Code looks for a single `.roorules-{modeSlug}` file (e.g., `.roorules-code`) in the workspace root.
        *   If found, its content is loaded for that mode.

Instructions from the Prompts tab, the mode-specific directory/file, and the workspace-wide directory/file are all combined. See the section below for the exact order.

## How Instructions are Combined

Instructions are placed in the system prompt in this exact format:

```
====
USER'S CUSTOM INSTRUCTIONS

The following additional instructions are provided by the user, and should be followed to the best of your ability without interfering with the TOOL USE guidelines.

[Language Preference (if set)]

[Global Instructions (from Prompts Tab)]

[Mode-specific Instructions (from Prompts Tab for the current mode)]

Mode-Specific Instructions (from Files/Directories):
[Contents of files in .roo/rules-{modeSlug}/ (if directory exists and is not empty)]
[Contents of .roorules-{modeSlug} file (if .roo/rules-{modeSlug}/ does not exist or is empty, and file exists)]

Workspace-Wide Instructions (from Files/Directories):
[Contents of files in .roo/rules/ (if directory exists and is not empty)]
[Contents of .roorules file (if .roo/rules/ does not exist or is empty, and file exists)]

====
```

*Note: The exact order ensures that more specific instructions (mode-level) appear before more general ones (workspace-wide), and directory-based rules take precedence over file-based fallbacks within each level.*

## Rules about .rules files

* **File Location:** The preferred method uses directories within `.roo/` (`.roo/rules/` and `.roo/rules-{modeSlug}/`). The fallback method uses single files (`.roorules` and `.roorules-{modeSlug}`) located directly in the workspace root.
* **Empty Files:** Empty or missing rule files are silently skipped
* **Source Headers:** Each rule file's contents are included with a header indicating its source
* **Rule Interaction:** Mode-specific rules complement global rules rather than replacing them

## Examples of Custom Instructions

* "Always use spaces for indentation, with a width of 4 spaces"
* "Use camelCase for variable names"
* "Write unit tests for all new functions"
* "Explain your reasoning before providing code"
* "Focus on code readability and maintainability"
* "Prioritize using the most common library in the community"
* "When adding new features to websites, ensure they are responsive and accessible"

:::tip Pro Tip: File-Based Team Standards
When working in team environments, using the `.roo/rules/` directory structure (and potentially `.roo/rules-{modeSlug}/` directories for specific modes) under version control is the recommended way to standardize Roo's behavior across your team. This allows for better organization of multiple instruction files and ensures consistent code style, documentation practices, and development workflows. The older `.roorules` file method can still be used but offers less flexibility.
:::

## Combining with Custom Modes

For advanced customization, combine with [Custom Modes](/features/custom-modes) to create specialized environments with specific tool access, file restrictions, and tailored instructions.
````

## File: docs/features/custom-modes.md
````markdown
# Custom Modes

Roo Code allows you to create **custom modes** to tailor Roo's behavior to specific tasks or workflows. Custom modes can be either **global** (available across all projects) or **project-specific** (defined within a single project). Each mode—including custom ones—features **Sticky Models**, automatically remembering and selecting the last model you used with it. This lets you assign different preferred models to different tasks without reconfiguration, as Roo switches between models when you change modes.

:::info Mode-Specific Instruction File Locations
You can provide instructions for custom modes using dedicated files or directories within your workspace. This allows for better organization and version control compared to only using the JSON `customInstructions` property.

**Preferred Method: Directory (`.roo/rules-{mode-slug}/`)**
```
.
├── .roo/
│   └── rules-docs-writer/  # Example for mode slug "docs-writer"
│       ├── 01-style-guide.md
│       └── 02-formatting.txt
└── ... (other project files)
```

**Fallback Method: Single File (`.roorules-{mode-slug}`)**
```
.
├── .roorules-docs-writer  # Example for mode slug "docs-writer"
└── ... (other project files)
```
The directory method takes precedence if it exists and contains files. See [Mode-Specific Instructions via Files/Directories](#mode-specific-instructions-via-filesdirectories) for details.
:::

## Why Use Custom Modes?

*   **Specialization:** Create modes optimized for specific tasks, like "Documentation Writer," "Test Engineer," or "Refactoring Expert"
*   **Safety:** Restrict a mode's access to sensitive files or commands. For example, a "Review Mode" could be limited to read-only operations
*   **Experimentation:** Safely experiment with different prompts and configurations without affecting other modes
*   **Team Collaboration:** Share custom modes with your team to standardize workflows

    <img src="/img/custom-modes/custom-modes.png" alt="Overview of custom modes interface" width="400" />
    *Roo Code's interface for creating and managing custom modes.*

## What's Included in a Custom Mode?

Custom modes allow you to define:

*   **A unique name and slug:** For easy identification
*   **A role definition:** Placed at the beginning of the system prompt, this defines Roo's core expertise and personality for the mode. This placement is crucial as it shapes Roo's fundamental understanding and approach to tasks
*   **Custom instructions:** Added near the end of the system prompt, these provide specific guidelines that modify or refine Roo's behavior for the mode. You can define these using the `customInstructions` JSON property, and/or by adding instruction files to a dedicated directory (see below). The preferred method for file-based instructions is now using a **`.roo/rules-{mode-slug}/` directory**, which allows for better organization and takes precedence over the older `.roorules-{mode-slug}` file method. This structured placement allows for more nuanced control over Roo's responses.
*   **Allowed tools:** Which Roo Code tools the mode can use (e.g., read files, write files, execute commands)
*   **File restrictions:** (Optional) Limit file access to specific file types or patterns (e.g., only allow editing `.md` files)

## Custom Mode Configuration (JSON Format)

Both global and project-specific configurations use the same JSON format. Each configuration file contains a `customModes` array of mode definitions:

```json
{
  "customModes": [
    {
      "slug": "mode-name",
      "name": "Mode Display Name",
      "roleDefinition": "Mode's role and capabilities",
      "groups": ["read", "edit"],
      "customInstructions": "Additional guidelines"
    }
  ]
}
```

### Required Properties

#### `slug`
* A unique identifier for the mode
* Use lowercase letters, numbers, and hyphens
* Keep it short and descriptive
* Example: `"docs-writer"`, `"test-engineer"`

#### `name`
* The display name shown in the UI
* Can include spaces and proper capitalization
* Example: `"Documentation Writer"`, `"Test Engineer"`

#### `roleDefinition`
* Detailed description of the mode's role and capabilities
* Defines Roo's expertise and personality for this mode
* Example: `"You are a technical writer specializing in clear documentation"`

#### `groups`
* Array of allowed tool groups
* Available groups: `"read"`, `"edit"`, `"browser"`, `"command"`, `"mcp"`
* Can include file restrictions for the `"edit"` group

##### File Restrictions Format
```json
["edit", {
  "fileRegex": "\\.md$",
  "description": "Markdown files only"
}]
```

### Understanding File Restrictions

The `fileRegex` property uses regular expressions to control which files a mode can edit:

* `\\.md$` - Match files ending in ".md"
* `\\.(test|spec)\\.(js|ts)$` - Match test files (e.g., "component.test.js")
* `\\.(js|ts)$` - Match JavaScript and TypeScript files

Common regex patterns:
* `\\.` - Match a literal dot
* `(a|b)` - Match either "a" or "b"
* `$` - Match the end of the filename

[Learn more about regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Optional Properties

#### `customInstructions`
* Additional behavioral guidelines for the mode
* Example: `"Focus on explaining concepts and providing examples"`

### Mode-Specific Instructions via Files/Directories

In addition to the `customInstructions` property in JSON, you can provide mode-specific instructions via files in your workspace. This is particularly useful for:

*   Organizing lengthy or complex instructions into multiple, manageable files.
*   Managing instructions easily with version control.
*   Allowing non-technical team members to modify instructions without editing JSON.

There are two ways Roo Code loads these instructions, with a clear preference for the newer directory-based method:

**1. Preferred Method: Directory-Based Instructions (`.roo/rules-{mode-slug}/`)**

*   **Structure:** Create a directory named `.roo/rules-{mode-slug}/` in your workspace root. Replace `{mode-slug}` with your mode's slug (e.g., `.roo/rules-docs-writer/`).
*   **Content:** Place one or more files (e.g., `.md`, `.txt`) containing your instructions inside this directory. You can organize instructions further using subdirectories; Roo Code reads files recursively, appending their content to the system prompt in **alphabetical order** based on filename.
*   **Loading:** All instruction files found within this directory structure will be loaded and applied to the specified mode.

**2. Fallback (Backward Compatibility): File-Based Instructions (`.roorules-{mode-slug}`)**

*   **Structure:** If the `.roo/rules-{mode-slug}/` directory **does not exist or is empty**, Roo Code will look for a single file named `.roorules-{mode-slug}` in your workspace root (e.g., `.roorules-docs-writer`).
*   **Loading:** If found, the content of this single file will be loaded as instructions for the mode.

**Precedence:**

*   The **directory-based method (`.roo/rules-{mode-slug}/`) takes precedence**. If this directory exists and contains files, any corresponding root-level `.roorules-{mode-slug}` file will be **ignored** for that mode.
*   This ensures that projects migrated to the new directory structure behave predictably, while older projects using the single-file method remain compatible.

**Combining with JSON `customInstructions`:**

*   Instructions loaded from either the directory or the fallback file are combined with the `customInstructions` property defined in the mode's JSON configuration.
*   Typically, the content from the files/directories is appended after the content from the JSON `customInstructions` property.

## Configuration Precedence

Mode configurations are applied in this order:

1. Project-level mode configurations (from `.roomodes`)
2. Global mode configurations (from `custom_modes.json`)
3. Default mode configurations

This means that project-specific configurations will override global configurations, which in turn override default configurations. You can override any default mode (like `code`, `debug`, `architect`, `ask`, `orchestrator` (aka Boomerang Mode)) by including a mode with the same slug in either your global or project-specific configuration.

*   **Note on Instruction Files:** Within the loading of mode-specific instructions from the filesystem, the directory `.roo/rules-{mode-slug}/` takes precedence over the single file `.roorules-{mode-slug}` found in the workspace root.

## Creating Custom Modes

You have three options for creating custom modes:

### 1. Ask Roo! (Recommended)

You can quickly create a basic custom mode by asking Roo Code to do it for you. For example:
```
Create a new mode called "Documentation Writer". It should only be able to read files and write Markdown files.
```
Roo Code will guide you through the process. However, for fine-tuning modes or making specific adjustments, you'll want to use the Prompts tab or manual configuration methods described below.

### 2. Using the Prompts Tab

1.  **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2.  **Create New Mode:** Click the <Codicon name="add" /> button to the right of the Modes heading
3.  **Fill in Fields:**

        <img src="/img/custom-modes/custom-modes-2.png" alt="Custom mode creation interface in the Prompts tab" width="600" />
        *The custom mode creation interface showing fields for name, slug, save location, role definition, available tools, and custom instructions.*

    * **Name:** Enter a display name for the mode
    * **Slug:** Enter a lowercase identifier (letters, numbers, and hyphens only)
    * **Save Location:** Choose Global (via `custom_modes.json`, available across all workspaces) or Project-specific (via `.roomodes` file in project root)
    * **Role Definition:** Define Roo's expertise and personality for this mode (appears at the start of the system prompt)
    * **Available Tools:** Select which tools this mode can use
    * **Custom Instructions:** (Optional) Add behavioral guidelines specific to this mode (appears at the end of the system prompt)
4.  **Create Mode:** Click the "Create Mode" button to save your new mode

Note: File type restrictions can only be added through manual configuration.

### 3. Manual Configuration

You can configure custom modes by editing JSON files through the Prompts tab:

Both global and project-specific configurations can be edited through the Prompts tab:

1.  **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2.  **Access Settings Menu:** Click the <Codicon name="bracket" /> button to the right of the Modes heading
3.  **Choose Configuration:**
    * Select "Edit Global Modes" to edit `custom_modes.json` (available across all workspaces)
    * Select "Edit Project Modes" to edit `.roomodes` file (in project root)
4.  **Edit Configuration:** Modify the JSON file that opens
5.  **Save Changes:** Roo Code will automatically detect the changes

## Example Configurations

Each example shows different aspects of mode configuration:

### Basic Documentation Writer
```json
{
  "customModes": [{
    "slug": "docs-writer",
    "name": "Documentation Writer",
    "roleDefinition": "You are a technical writer specializing in clear documentation",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }]
    ],
    "customInstructions": "Focus on clear explanations and examples"
  }]
}
```

### Test Engineer with File Restrictions
```json
{
  "customModes": [{
    "slug": "test-engineer",
    "name": "Test Engineer",
    "roleDefinition": "You are a test engineer focused on code quality",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.(test|spec)\\.(js|ts)$", "description": "Test files only" }]
    ]
  }]
}
```

## Overriding Default Modes

You can override Roo Code's built-in modes (like `💻 Code`, `🪲 Debug`, `❓ Ask`, `🏗️ Architect`, `🪃 Orchestrator` (aka Boomerang Mode)) with customized versions that better suit your workflow. This is done by creating a custom mode with the same slug as a default mode (e.g., `code`, `debug`, `orchestrator`).

### Overriding Modes Globally

To customize a default mode across all your projects:

1. **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2. **Access Settings Menu:** Click the <Codicon name="bracket" /> button to the right of the Modes heading
3. **Edit Global Modes:** Select "Edit Global Modes" to edit `custom_modes.json`
4. **Add Your Override:** Create an entry with the same slug as the built-in mode you want to override

```json
{
  "customModes": [{
    "slug": "code", // Matches the default 'code' mode slug
    "name": "💻 Code (Global Override)", // Custom display name
    "roleDefinition": "You are a software engineer with global-specific constraints",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.(js|ts)$", "description": "JS/TS files only" }]
    ],
    "customInstructions": "Focus on project-specific JS/TS development"
  }]
}
```

This example replaces the default `💻 Code` mode with a custom version that can only edit JavaScript and TypeScript files.

### Project-Specific Mode Override

To override a default mode for just one project:

1. **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2. **Access Settings Menu:** Click the <Codicon name="bracket" /> button to the right of the Modes heading
3. **Edit Project Modes:** Select "Edit Project Modes" to edit the `.roomodes` file
4. **Add Your Override:** Create an entry with the same slug as the built-in mode you want to override

```json
{
  "customModes": [{
    "slug": "code", // Matches the default 'code' mode slug
    "name": "💻 Code (Project-Specific)", // Custom display name
    "roleDefinition": "You are a software engineer with project-specific constraints",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.(js|ts)$", "description": "JS/TS files only" }]
    ],
    "customInstructions": "Focus on project-specific JS/TS development"
  }]
}
```

Project-specific overrides take precedence over global overrides, which in turn override the built-in defaults.

### Common Use Cases for Overriding Default Modes

Common reasons to override built-in modes include:

* **Restricting file access:** Limit a mode to specific file types for safety (e.g., restricting `💻 Code` mode to only edit non-production files)
* **Specializing behavior:** Customize a mode's expertise for your tech stack (e.g., making `🪲 Debug` mode focus on your framework)
* **Adding custom instructions:** Integrate project standards or team guidelines directly into modes
* **Changing available tools:** Remove certain tools from modes to prevent unwanted operations

:::tip
When overriding default modes, test your configuration carefully. Small changes to core modes can significantly impact functionality. Consider creating a backup of your original configuration before making substantial changes.
:::

By following these instructions, you can create and manage custom modes to enhance your workflow with Roo Code.

## Understanding Regex in Custom Modes

Regex patterns in custom modes let you precisely control which files Roo can edit:

### Basic Syntax

When you specify `fileRegex` in a custom mode, you're creating a pattern that file paths must match:

```json
["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }]
```

### Important Rules

- **Double Backslashes:** In JSON, backslashes must be escaped with another backslash. So `\.md$` becomes `\\.md$`
- **Path Matching:** Patterns match against the full file path, not just the filename
- **Case Sensitivity:** Regex patterns are case-sensitive by default

### Common Pattern Examples

| Pattern | Matches | Doesn't Match |
|---------|---------|---------------|
| `\\.md$` | `readme.md`, `docs/guide.md` | `script.js`, `readme.md.bak` |
| `^src/.*` | `src/app.js`, `src/components/button.tsx` | `lib/utils.js`, `test/src/mock.js` |
| `\\.(css\|scss)$` | `styles.css`, `theme.scss` | `styles.less`, `styles.css.map` |
| `docs/.*\\.md$` | `docs/guide.md`, `docs/api/reference.md` | `guide.md`, `src/docs/notes.md` |
| `^(?!.*(test\|spec)).*\\.js$` | `app.js`, `utils.js` | `app.test.js`, `utils.spec.js` |

### Pattern Building Blocks

- `\\.` - Match a literal dot (period)
- `$` - Match the end of the string
- `^` - Match the beginning of the string
- `.*` - Match any character (except newline) zero or more times
- `(a|b)` - Match either "a" or "b"
- `(?!...)` - Negative lookahead (exclude matches)

### Testing Your Patterns

Before applying a regex pattern to a custom mode:

1. Test it on sample file paths to ensure it matches what you expect
2. Remember that in JSON, each backslash needs to be doubled (`\d` becomes `\\d`)
3. Start with simpler patterns and build complexity gradually


:::tip
### Let Roo Build Your Regex Patterns
Instead of writing complex regex patterns manually, you can ask Roo to create them for you! Simply describe which files you want to include or exclude:
```
Create a regex pattern that matches JavaScript files but excludes test files
```
Roo will generate the appropriate pattern with proper escaping for JSON configuration.
:::

## Community Gallery
Ready to explore more? Check out the [Custom Modes Gallery](/community#custom-modes-gallery) to discover and share custom modes created by the community!
````

## File: docs/features/enhance-prompt.md
````markdown
# Enhance Prompt

The "Enhance Prompt" feature in Roo Code helps you improve the quality and effectiveness of your prompts before sending them to the AI model.  By clicking the <Codicon name="sparkle" /> icon in the chat input, you can automatically refine your initial request, making it clearer, more specific, and more likely to produce the desired results.

## Why Use Enhance Prompt?

*   **Improved Clarity:**  Roo Code can rephrase your prompt to make it more understandable for the AI model.
*   **Added Context:**  The enhancement process can add relevant context to your prompt, such as the current file path or selected code.
*   **Better Instructions:**  Roo Code can add instructions to guide the AI towards a more helpful response (e.g., requesting specific formatting or a particular level of detail).
*   **Reduced Ambiguity:**  Enhance Prompt helps to eliminate ambiguity and ensure that Roo Code understands your intent.
*   **Consistency**: Roo will consistently format prompts the same way to the AI.

## How to Use Enhance Prompt

1.  **Type your initial prompt:**  Enter your request in the Roo Code chat input box as you normally would.  This can be a simple question, a complex task description, or anything in between.
2.  **Click the <Codicon name="sparkle" /> Icon:**  Instead of pressing Enter, click the <Codicon name="sparkle" /> icon located in the bottom right of the chat input box.
3.  **Review the Enhanced Prompt:**  Roo Code will replace your original prompt with an enhanced version.  Review the enhanced prompt to make sure it accurately reflects your intent. You can further refine the enhanced prompt before sending.
4.  **Send the Enhanced Prompt:**  Press Enter or click the Send icon (<Codicon name="send" />) to send the enhanced prompt to Roo Code.

## Customizing the Enhancement Process

The "Enhance Prompt" feature uses a customizable prompt template.  You can modify this template to tailor the enhancement process to your specific needs.

1.  **Open the Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar.
2.  **Select "ENHANCE" Tab:** You should see listed out support prompts, including "ENHANCE". Click on this tab.
3.  **Edit the Prompt Template:** Modify the text in the "Prompt" field.

The default prompt template includes the placeholder `${userInput}`, which will be replaced with your original prompt. You can modify this to fit the model's prompt format, and instruct it how to enhance your request.

## API Configuration

The API configuration used for Enhance Prompt is, by default, the same one that is selected for Roo Code tasks,
but it can be changed:

1.  **Open the Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar.
2.  **Select "ENHANCE" Tab:** You should see an "API Configuration" dropdown
3.  **Select an API Configuration:** Choose an existing configuration, and future Enhance Prompt requests will be sent to that configured provider/model.

## Limitations and Best Practices

*   **Experimental Feature:**  Prompt enhancement is an experimental feature. The quality of the enhanced prompt may vary depending on the complexity of your request and the capabilities of the underlying model.
*   **Review Carefully:**  Always review the enhanced prompt before sending it.  Roo Code may make changes that don't align with your intentions.
*   **Iterative Process:**  You can use the "Enhance Prompt" feature multiple times to iteratively refine your prompt.
*   **Not a Replacement for Clear Instructions:** While "Enhance Prompt" can help, it's still important to write clear and specific prompts from the start.

By using the "Enhance Prompt" feature, you can improve the quality of your interactions with Roo Code and get more accurate and helpful responses.
````

## File: docs/features/fast-edits.md
````markdown
# Fast Edits

:::info Default Setting
Fast Edits (using the "Enable editing through diffs" setting) is enabled by default in Roo Code. You typically don't need to change these settings unless you encounter specific issues or want to experiment with different diff strategies.
:::

Roo Code offers an advanced setting to change how it edits files, using diffs (differences) instead of rewriting entire files. Enabling this feature provides significant benefits.

## Enable Editing Through Diffs

Open Settings by clicking the gear icon <Codicon name="gear" /> → Advanced



When **Enable editing through diffs** is checked:

    <img src="/img/fast-edits/fast-edits-5.png" alt="Roo Code settings showing Enable editing through diffs" width="500" />
1.  **Faster File Editing**: Roo modifies files more quickly by applying only the necessary changes.
2.  **Prevents Truncated Writes**: The system automatically detects and rejects attempts by the AI to write incomplete file content, which can happen with large files or complex instructions. This helps prevent corrupted files.

:::note Disabling Fast Edits
If you uncheck **Enable editing through diffs**, Roo will revert to writing the entire file content for every edit using the [`write_to_file`](/advanced-usage/available-tools/write-to-file) tool, instead of applying targeted changes with [`apply_diff`](/advanced-usage/available-tools/apply-diff). This full-write approach is generally slower for modifying existing files and leads to higher token usage.
:::

## Match Precision

This slider controls how closely the code sections identified by the AI must match the actual code in your file before a change is applied.

    <img src="/img/fast-edits/fast-edits-4.png" alt="Roo Code settings showing Enable editing through diffs checkbox and Match precision slider" width="500" />

*   **100% (Default)**: Requires an exact match. This is the safest option, minimizing the risk of incorrect changes.
*   **Lower Values (80%-99%)**: Allows for "fuzzy" matching. Roo can apply changes even if the code section has minor differences from what the AI expected. This can be useful if the file has been slightly modified, but **increases the risk** of applying changes in the wrong place.

**Use values below 100% with extreme caution.** Lower precision might be necessary occasionally, but always review the proposed changes carefully.

Internally, this setting adjusts a `fuzzyMatchThreshold` used with algorithms like Levenshtein distance to compare code similarity.
````

## File: docs/features/footgun-prompting.md
````markdown
---
sidebar_label: 'Footgun Prompting'
---

# Footgun Prompting: Override System Prompts

Footgun Prompting (System Prompt Override) lets you replace the default system prompt for a specific Roo Code mode. This offers granular control but bypasses built-in safeguards. Use with caution.

<img src="/img/footgun-prompting/footgun-prompting-1.png" alt="Warning indicator for active system prompt override" width="600" />
**Warning Indicator:** When a system prompt override is active for the current mode, Roo Code will display a warning icon in the chat input area to remind you that the default behavior has been modified.


:::info **footgun** _(noun)_

1.  _(programming slang, humorous, derogatory)_ Any feature likely to lead to the programmer shooting themself in the foot.

> The System Prompt Override is considered a footgun because modifying the core instructions without a deep understanding can lead to unexpected or broken behavior, especially regarding tool usage and response consistency.

:::

## How It Works

1.  **Override File:** Create a file named `.roo/system-prompt-{mode-slug}` in your workspace root (e.g., `.roo/system-prompt-code` for the Code mode).
2.  **Content:** The content of this file becomes the new system prompt for that specific mode.
3.  **Activation:** Roo Code automatically detects this file. When present, it replaces most of the standard system prompt sections.
4.  **Preserved Sections:** Only the core `roleDefinition` and any `customInstructions` you've set for the mode are kept alongside your override content. Standard sections like tool descriptions, rules, and capabilities are bypassed.
5.  **Construction:** The final prompt sent to the model looks like this:

    ```
    ${roleDefinition}

    ${content_of_your_override_file}

    ${customInstructions}
    ```

## Accessing the Feature

Find the option and instructions in the Roo Code UI:

1.  Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar.
2.  Expand the **"Advanced: Override System Prompt"** section.
3.  Clicking the file path link within the explanation will open or create the correct override file for the currently selected mode in VS Code.

<img src="/img/footgun-prompting/footgun-prompting.png" alt="UI showing the Advanced: Override System Prompt section" width="500" />

## Using Context Variables

When creating your custom system prompt file, you can use special variables (placeholders) that Roo Code will automatically replace with relevant information about the current environment. This allows you to make your prompts more dynamic and context-aware.

Here are the available variables:

- `{{mode}}`: The slug (short name) of the current Roo Code mode being used (e.g., `code`, `chat-mode`).
- `{{language}}`: The display language configured in VS Code (e.g., `en`, `es`).
- `{{shell}}`: The default terminal shell configured in VS Code (e.g., `/bin/bash`, `powershell.exe`).
- `{{operatingSystem}}`: The type of operating system your computer is running (e.g., `Linux`, `Darwin` for macOS, `Windows_NT`).
- `{{workspace}}`: The file path to the root of your current project workspace.

**Example Usage:**

You can include these variables directly in your prompt file content like this:

```
You are assisting a user in the '{{mode}}' mode.
Their operating system is {{operatingSystem}} and their default shell is {{shell}}.
The project is located at: {{workspace}}.
Please respond in {{language}}.
```

Roo Code substitutes these placeholders before sending the prompt to the model.

## Key Considerations & Warnings

- **Intended Audience:** Best suited for users deeply familiar with Roo Code's prompting system and the implications of modifying core instructions.
- **Impact on Functionality:** Custom prompts override standard instructions, including those for tool usage and response consistency. This can cause unexpected behavior or errors if not managed carefully.
- **Mode-Specific:** Each override file applies only to the mode specified in its filename (`{mode-slug}`).
- **No File, No Override:** If the `.roo/system-prompt-{mode-slug}` file doesn't exist, Roo Code uses the standard system prompt generation process for that mode.
- **Blank Files Ignored:** If the override file exists but is empty (blank), it will be ignored and the default system prompt will be used.
- **Directory Creation:** Roo Code ensures the `.roo` directory exists before attempting to read or create the override file.
Use this feature cautiously. Incorrect implementation can significantly degrade Roo Code's performance and reliability for the affected mode.
````

## File: docs/features/keyboard-shortcuts.md
````markdown
---
sidebar_label: Keyboard Shortcuts
---

# Keyboard Shortcuts

The Roo Code interface supports keyboard shortcuts to streamline your workflow and reduce dependence on mouse interactions.

## Available Keyboard Commands

Roo Code offers keyboard commands to enhance your workflow. This page focuses on the `roo.acceptInput` command, but here's a quick reference to all keyboard commands:

| Command | Description | Default Shortcut |
|---------|-------------|-----------------|
| `roo.acceptInput` | Submit text or accept the primary suggestion | None (configurable) |
| `roo.focus` | Focus the Roo input box | None (configurable) |

### Key Benefits of Keyboard Commands

* **Keyboard-Driven Interface**: Submit text or select the primary suggestion button without mouse interaction
* **Improved Accessibility**: Essential for users with mobility limitations or those who experience discomfort with mouse usage
* **Vim/Neovim Compatibility**: Supports seamless transitions for developers coming from keyboard-centric environments
* **Workflow Efficiency**: Reduces context switching between keyboard and mouse during development tasks

## roo.acceptInput Command

The `roo.acceptInput` command lets you submit text or accept suggestions with keyboard shortcuts instead of clicking buttons or pressing Enter in the input area.

### What It Does

The `roo.acceptInput` command is a general-purpose input submission command. When triggered, it:

- Submits your current text or image input when in the text input area (equivalent to pressing Enter)
- Clicks the primary (first) button when action buttons are visible (such as confirm/cancel buttons or any other action buttons)

### Detailed Setup Guide

#### Method 1: Using the VS Code UI

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac)
2. Type "Preferences: Open Keyboard Shortcuts"
3. In the search box, type "roo.acceptInput"
4. Locate "Roo: Accept Input/Suggestion" in the results
5. Click the + icon to the left of the command
6. Press your desired key combination (e.g., `Ctrl+Enter` or `Alt+Enter`)
7. Press Enter to confirm


#### Method 2: Editing keybindings.json directly

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac)
2. Type "Preferences: Open Keyboard Shortcuts (JSON)"
3. Add the following entry to the JSON array:

```json
{
  "key": "ctrl+enter",  // or your preferred key combination
  "command": "roo.acceptInput",
  "when": "rooViewFocused"  // This is a context condition that ensures the command only works when Roo is focused
}
```

You can also use a more specific condition:
```json
{
  "key": "ctrl+enter",
  "command": "roo.acceptInput",
  "when": "webviewViewFocus && webviewViewId == 'roo-cline.SidebarProvider'"
}
```

#### Recommended Key Combinations

Choose a key combination that doesn't conflict with existing VS Code shortcuts:

- `Alt+Enter` - Easy to press while typing
- `Ctrl+Space` - Familiar for those who use autocomplete
- `Ctrl+Enter` - Intuitive for command execution
- `Alt+A` - Mnemonic for "Accept"

### Practical Use Cases

#### Quick Development Workflows

- **Text Submission**: Send messages to Roo without moving your hands from the keyboard
- **Action Confirmations**: Accept operations like saving files, running commands, or applying diffs
- **Multi-Step Processes**: Move quickly through steps that require confirmation or input
- **Consecutive Tasks**: Chain multiple tasks together with minimal interruption

#### Keyboard-Centric Development

- **Vim/Neovim Workflows**: If you're coming from a Vim/Neovim background, maintain your keyboard-focused workflow
- **IDE Integration**: Use alongside other VS Code keyboard shortcuts for a seamless experience
- **Code Reviews**: Quickly accept suggestions when reviewing code with Roo
- **Documentation Writing**: Submit text and accept formatting suggestions when generating documentation

#### Accessibility Use Cases

- **Hand Mobility Limitations**: Essential for users who have difficulty using a mouse
- **Repetitive Strain Prevention**: Reduce mouse usage to prevent or manage repetitive strain injuries
- **Screen Reader Integration**: Works well with screen readers for visually impaired users
- **Voice Control Compatibility**: Can be triggered via voice commands when using voice control software

### Accessibility Benefits

The `roo.acceptInput` command was designed with accessibility in mind:

- **Reduced Mouse Dependence**: Complete entire workflows without reaching for the mouse
- **Reduced Physical Strain**: Helps users who experience discomfort or pain from mouse usage
- **Alternative Input Method**: Supports users with mobility impairments who rely on keyboard navigation
- **Workflow Optimization**: Particularly valuable for users coming from keyboard-centric environments like Vim/Neovim

### Keyboard-Centric Workflows

Here are some complete workflow examples showing how to effectively use keyboard shortcuts with Roo:

#### Development Workflow Example

1. Open VS Code and navigate to your project
2. Open Roo via the sidebar
3. Type your request: "Create a REST API endpoint for user registration"
4. When Roo asks for framework preferences, use your `roo.acceptInput` shortcut to select the first suggestion
5. Continue using the shortcut to accept code generation suggestions
6. When Roo offers to save the file, use the shortcut again to confirm
7. Use VS Code's built-in shortcuts to navigate through the created files

#### Code Review Workflow

1. Select code you want to review and use VS Code's "Copy" command
2. Ask Roo to review it: "Review this code for security issues"
3. As Roo asks clarifying questions about the code context, use your shortcut to accept suggestions
4. When Roo provides improvement recommendations, use the shortcut again to accept implementation suggestions

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Shortcut doesn't work | Ensure Roo is focused (click in the Roo panel first) |
| Wrong suggestion selected | The command always selects the first (primary) button; use mouse if you need a different option |
| Conflicts with existing shortcuts | Try a different key combination in VS Code keyboard settings |
| No visual feedback when used | This is normal - the command silently activates the function without visual confirmation |
| Shortcut works inconsistently | Make sure the `when` clause is properly configured in your keybindings.json (either `rooViewFocused` or the webview-specific condition) |

### Technical Implementation

The `roo.acceptInput` command is implemented as follows:

- Command registered as `roo.acceptInput` with display title "Roo: Accept Input/Suggestion" in the command palette
- When triggered, it sends an "acceptInput" message to the active Roo webview
- The webview determines the appropriate action based on the current UI state:
  - Clicks the primary action button if action buttons are visible and enabled
  - Sends the message if the text area is enabled and contains text/images
- No default key binding - users assign their preferred shortcut

### Limitations

- Works only when the Roo interface is active
- Has no effect if no inputs or suggestions are currently available
- Prioritizes the primary (first) button when multiple options are shown
````

## File: docs/features/model-temperature.md
````markdown
import KangarooIcon from '@site/src/components/KangarooIcon';

# Model Temperature

Temperature controls the randomness of AI model outputs. Adjusting this setting optimizes results for different tasks - from precise code generation to creative brainstorming. Temperature is one of the most powerful parameters for controlling AI behavior. A well-tuned temperature setting can dramatically improve the quality and appropriateness of responses for specific tasks.

<img src="/img/model-temperature/model-temperature.gif" alt="Animation showing temperature slider adjustment" width="100%" />

## What is Temperature?

Temperature is a setting (usually between 0.0 and 2.0) that controls how random or predictable the AI's output is. Finding the right balance is key: lower values make the output more focused and consistent, while higher values encourage more creativity and variation. For many coding tasks, a moderate temperature (around 0.3 to 0.7) often works well, but the best setting depends on what you're trying to achieve.

:::info Temperature and Code: Common Misconceptions
Temperature controls output randomness, not code quality or accuracy directly. Key points:

*   **Low Temperature (near 0.0):** Produces predictable, consistent code. Good for simple tasks, but can be repetitive and lack creativity. It doesn't guarantee *better* code.
*   **High Temperature:** Increases randomness, potentially leading to creative solutions but also more errors or nonsensical code. It doesn't guarantee *higher-quality* code.
*   **Accuracy:** Code accuracy depends on the model's training and prompt clarity, not temperature.
*   **Temperature 0.0:** Useful for consistency, but limits exploration needed for complex problems.
:::

## Default Values in Roo Code

Roo Code uses a default temperature of 0.0 for most models, optimizing for maximum determinism and precision in code generation. This applies to OpenAI models, Anthropic models (non-thinking variants), LM Studio models, and most other providers.

Some models use higher default temperatures - DeepSeek R1 models and certain reasoning-focused models default to 0.6, providing a balance between determinism and creative exploration.

Models with thinking capabilities (where the AI shows its reasoning process) require a fixed temperature of 1.0 which cannot be changed, as this setting ensures optimal performance of the thinking mechanism. This applies to any model with the ":thinking" flag enabled.

Some specialized models don't support temperature adjustments at all, in which case Roo Code respects these limitations automatically.

## When to Adjust Temperature

Here are some examples of temperature settings that might work well for different tasks:

*   **Code Mode (0.0-0.3):** For writing precise, correct code with consistent, deterministic results
*   **Architect Mode (0.4-0.7):** For brainstorming architecture or design solutions with balanced creativity and structure
*   **Ask Mode (0.7-1.0):** For explanations or open-ended questions requiring diverse and insightful responses
*   **Debug Mode (0.0-0.3):** For troubleshooting bugs with consistent precision

These are starting points – it's important to [experiment with different settings](#experimentation) to find what works best for your specific needs and preferences.

## How to Adjust Temperature

1.  **Open the Roo Code Panel:** Click the Roo Code icon (<KangarooIcon />) in the VS Code Activity Bar
2.  **Open Settings:** Click the <Codicon name="gear" /> icon in the top right corner
3.  **Find Temperature Control:** Navigate to the Providers section
4.  **Enable Custom Temperature:** Check the "Use custom temperature" box
5.  **Set Your Value:** Adjust the slider to your preferred value

    <img src="/img/model-temperature/model-temperature.png" alt="Temperature setting in Roo Code settings panel" width="550" />
    *Temperature slider in Roo Code settings panel*

## Using API Configuration Profiles for Temperature

Create multiple [API configuration profiles](/features/api-configuration-profiles) with different temperature settings:

**How to set up task-specific temperature profiles:**

1. Create specialized profiles like "Code - Low Temp" (0.1) and "Ask - High Temp" (0.8)
2. Configure each profile with appropriate temperature settings
3. Switch between profiles using the dropdown in settings or chat interface
4. Set different profiles as defaults for each mode for automatic switching when changing modes

This approach optimizes model behavior for specific tasks without manual adjustments.

## Technical Implementation

Roo Code implements temperature handling with these considerations:

*   User-defined settings take priority over defaults
*   Provider-specific behaviors are respected
*   Model-specific limitations are enforced:
    *   Thinking-enabled models require a fixed temperature of 1.0
    *   Some models don't support temperature adjustments

## Experimentation

Experimenting with different temperature settings is the most effective way to discover what works best for your specific needs:

### Effective Temperature Testing

1. **Start with defaults** - Begin with Roo Code's preset values (0.0 for most tasks) as your baseline
2. **Make incremental adjustments** - Change values in small steps (±0.1) to observe subtle differences
3. **Test consistently** - Use the same prompt across different temperature settings for valid comparisons
4. **Document results** - Note which values produce the best outcomes for specific types of tasks
5. **Create profiles** - Save effective settings as [API configuration profiles](/features/api-configuration-profiles) for quick access

Remember that different models may respond differently to the same temperature values, and thinking-enabled models always use a fixed temperature of 1.0 regardless of your settings.

## Related Features

- Works with all [API providers](/providers/openai) supported by Roo Code
- Complements [custom instructions](/features/custom-instructions) for fine-tuning responses
- Works alongside [custom modes](/features/custom-modes) you create
````

## File: docs/features/more-features.md
````markdown
---
sidebar_label: Additional Features
---


# Additional Features

This page describes additional features in Roo Code that enhance your development workflow.

## Suggested Responses

Roo Code provides suggested responses to questions, saving you time typing. These suggestions appear as buttons below the chat input box after you ask a question. Click a suggestion to quickly use it as your next prompt.

This feature aims to streamline your workflow by anticipating your potential follow-up questions and providing one-click access to relevant prompts.

## Text to Speech

Roo Code includes a Text-to-Speech (TTS) feature that reads out the AI responses, allowing you to listen to the information instead of reading it. This can be helpful for accessibility, learning, or simply for a change of pace.

To use Text-to-Speech, simply enable it in the Roo Code settings. Once enabled, a speaker icon will appear next to each AI response in the chat. Click the icon to start listening.

## Global Language Support

Roo Code supports 14 languages, making it accessible to a wider range of users globally. You can now use Roo Code in:

- Simplified Chinese
- Traditional Chinese
- Spanish
- Hindi
- French
- Portuguese
- German
- Japanese
- Korean
- Italian
- Turkish
- Vietnamese
- Polish
- Catalan

To change your language, go to **Advanced Settings > Language** in the Roo Code settings panel.

This global update ensures a smoother and more inclusive coding experience for users around the world.
````

## File: docs/features/settings-management.md
````markdown
---
title: Import, Export, and Reset Settings
sidebar_label: Import/Export/Reset Settings
description: Manage your Roo Code settings by exporting, importing, or resetting them to defaults.
---

# Import, Export, and Reset Settings

Roo Code allows you to manage your configuration settings effectively through export, import, and reset options. These features are useful for backing up your setup, sharing configurations with others, or restoring default settings if needed.

You can find these options at the bottom of the Roo Code settings page, accessible via the gear icon (<i class="codicon codicon-gear"></i>) in the Roo Code chat view.

<img src="/img/settings-management/settings-management.png" alt="Export, Import, and Reset buttons in Roo Code settings" width="400" />
*Image: Export, Import, and Reset buttons.*

## Export Settings

Clicking the **Export** button saves your current Roo Code settings to a JSON file.

*   **What's Exported:** The file includes your configured API Provider Profiles and Global Settings (UI preferences, mode configurations, context settings, etc.).
*   **Security Warning:** The exported JSON file contains **all** your configured API Provider Profiles and Global Settings. Crucially, this includes **API keys in plaintext**. Treat this file as highly sensitive. Do not share it publicly or with untrusted individuals, as it grants access to your API accounts.
*   **Process:**
    1.  Click **Export**.
    2.  A file save dialog appears, suggesting `roo-code-settings.json` as the filename (usually in your `~/Documents` folder).
    3.  Choose a location and save the file.

This creates a backup of your configuration or a file you can share.

## Import Settings

Clicking the **Import** button allows you to load settings from a previously exported JSON file.

*   **Process:**
    1.  Click **Import**.
    2.  A file open dialog appears. Select the `roo-code-settings.json` file (or similarly named file) you want to import.
    3.  Roo Code reads the file, validates its contents against the expected schema, and applies the settings.
*   **Merging:** Importing settings **merges** the configurations. It adds new API profiles and updates existing ones and global settings based on the file content. It does **not** delete configurations present in your current setup but missing from the imported file.
*   **Validation:** Only valid settings matching the internal schema can be imported, preventing configuration errors. A success notification appears upon completion.

## Reset Settings

Clicking the **Reset** button completely clears all Roo Code configuration data and returns the extension to its default state. This is a destructive action intended for troubleshooting or starting fresh.

*   **Warning:** This action is **irreversible**. It permanently deletes all API configurations (including keys stored in secret storage), custom modes, global settings, and task history.

*   **Process:**
    1.  Click the red **Reset** button.
    2.  A confirmation dialog appears, warning that the action cannot be undone.
    3.  Click "Yes" to confirm.

*   **What is Reset:**
    *   **API Provider Profiles:** All configurations are deleted from settings and secret storage.
    *   **Global Settings:** All preferences (UI, modes, approvals, browser, etc.) are reset to defaults.
    *   **Custom Modes:** All user-defined modes are deleted.
    *   **Secret Storage:** All API keys and other secrets managed by Roo Code are cleared.
    *   **Task History:** The current task stack is cleared.

*   **Result:** Roo Code returns to its initial state, as if freshly installed, with default settings and no user configurations.

Use this option only if you are certain you want to remove all Roo Code data or if instructed during troubleshooting. Consider exporting your settings first if you might want to restore them later.
````

## File: docs/features/shell-integration.md
````markdown
# Terminal Shell Integration

Terminal Shell Integration is a key feature that enables Roo Code to execute commands in your terminal and intelligently process their output. This bidirectional communication between the AI and your development environment unlocks powerful automation capabilities.

## What is Shell Integration?

Shell integration is automatically enabled in Roo Code and connects directly to your terminal's command execution lifecycle without requiring any setup from you. This built-in feature allows Roo to:

- Execute commands on your behalf through the [`execute_command`](/advanced-usage/available-tools/execute-command) tool
- Read command output in real-time without manual copy-pasting
- Automatically detect and fix errors in running applications
- Observe command exit codes to determine success or failure
- Track working directory changes as you navigate your project
- React intelligently to terminal output without user intervention

When you ask Roo to perform tasks like installing dependencies, starting a development server, or analyzing build errors, shell integration works behind the scenes to make these interactions smooth and effective.

## Troubleshooting Shell Integration

Shell integration is built into Roo Code and works automatically in most cases. If you see "Shell Integration Unavailable" messages or experience issues with command execution, try these solutions:

1. **Update VSCode/Cursor** to the latest version (VSCode 1.93+ required)
2. **Ensure a compatible shell is selected**: Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) → "Terminal: Select Default Profile" → Choose bash, zsh, PowerShell, or fish
3. **Windows PowerShell users**: Run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` then restart VSCode
4. **WSL users**: Add `. "$(code --locate-shell-integration-path bash)"` to your `~/.bashrc`

## Terminal Integration Settings

Roo Code provides several settings to fine-tune shell integration. Access these in the Roo Code sidebar under Settings → Terminal.

### Basic Settings

#### Terminal Output Limit
<img src="/img/shell-integration/shell-integration.png" alt="Terminal output limit slider set to 500" width="600" />
Controls the maximum number of lines captured from terminal output. When exceeded, it keeps 20% of the beginning and 80% of the end with a truncation message in between. This prevents excessive token usage while maintaining context. Default: 500 lines.
Controls the maximum number of lines captured from terminal output. When exceeded, lines are removed from the middle to save tokens. Default: 500 lines.

#### Terminal Shell Integration Timeout
<img src="/img/shell-integration/shell-integration-1.png" alt="Terminal shell integration timeout slider set to 15s" width="600" />

Maximum time to wait for shell integration to initialize before executing commands. Increase this value if you experience "Shell Integration Unavailable" errors. Default: 15 seconds.

#### Terminal Command Delay
<img src="/img/shell-integration/shell-integration-2.png" alt="Terminal command delay slider set to 0ms" width="600" />

Adds a small pause after running commands to help Roo capture all output correctly. This setting can significantly impact shell integration reliability due to VSCode's implementation of terminal integration across different operating systems and shell configurations:

- **Default**: 0ms (as of Roo v3.11.13)
- **Common Values**:
  * 0ms: Works best for some users with newer VSCode versions
  * 50ms: Historical default, still effective for many users
  * 150ms: Recommended for PowerShell users
- **Note**: Different values may work better depending on your:
  * VSCode version
  * Shell customizations (oh-my-zsh, powerlevel10k, etc.)
  * Operating system and environment

### Advanced Settings

:::info Important
**Terminal restart required for these settings**

Changes to advanced terminal settings only take effect after restarting your terminals. To restart a terminal:

1. Click the trash icon in the terminal panel to close the current terminal
2. Open a new terminal with Terminal → New Terminal or <kbd>Ctrl</kbd>+<kbd>`</kbd> (backtick)

Always restart all open terminals after changing any of these settings.
:::

#### PowerShell Counter Workaround
<img src="/img/shell-integration/shell-integration-3.png" alt="PowerShell counter workaround checkbox" width="600" />

Helps PowerShell run the same command multiple times in a row. Enable this if you notice Roo can't run identical commands consecutively in PowerShell.

#### Clear ZSH EOL Mark
<img src="/img/shell-integration/shell-integration-4.png" alt="Clear ZSH EOL mark checkbox" width="600" />

Prevents ZSH from adding special characters at the end of output lines that can confuse Roo when reading terminal results.

#### Oh My Zsh Integration
<img src="/img/shell-integration/shell-integration-5.png" alt="Enable Oh My Zsh integration checkbox" width="600" />

Makes Roo work better with the popular Oh My Zsh shell customization framework. Turn this on if you use Oh My Zsh and experience terminal issues.

#### Powerlevel10k Integration
<img src="/img/shell-integration/shell-integration-6.png" alt="Enable Powerlevel10k integration checkbox" width="600" />

Improves compatibility if you use the Powerlevel10k theme for ZSH. Turn this on if your fancy terminal prompt causes issues with Roo.

#### ZDOTDIR Handling
<img src="/img/shell-integration/shell-integration-7.png" alt="Enable ZDOTDIR handling checkbox" width="600" />

Helps Roo work with custom ZSH configurations without interfering with your personal shell settings and customizations.

## How Shell Integration Works

Shell integration connects Roo to your terminal's command execution process in real-time:

1. **Connection**: When you open a terminal, VS Code establishes a special connection with your shell.

2. **Command Tracking**: VS Code monitors your terminal activities by detecting:
   - When a new prompt appears
   - When you enter a command
   - When the command starts running
   - When the command finishes (and whether it succeeded or failed)
   - What directory you're currently in

3. **Different Shells, Same Result**: Each shell type (Bash, Zsh, PowerShell, Fish) implements this slightly differently behind the scenes, but they all provide the same functionality to Roo.

4. **Information Gathering**: Roo can see what commands are running, where they're running, how long they take, whether they succeed, and their complete output - all without you having to copy and paste anything.

## Troubleshooting Shell Integration

### PowerShell Execution Policy (Windows)

PowerShell restricts script execution by default. To configure:

1. Open PowerShell as Administrator
2. Check current policy: `Get-ExecutionPolicy`
3. Set appropriate policy: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

Common policies:
- `Restricted`: No scripts allowed (default)
- `RemoteSigned`: Local scripts can run; downloaded scripts need signing
- `Unrestricted`: All scripts run with warnings
- `AllSigned`: All scripts must be signed

### Manual Shell Integration Installation

If automatic integration fails, add the appropriate line to your shell configuration:

**Bash** (`~/.bashrc`):
```bash
[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path bash)"
```

**Zsh** (`~/.zshrc`):
```bash
[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path zsh)"
```

**PowerShell** (`$Profile`):
```powershell
if ($env:TERM_PROGRAM -eq "vscode") { . "$(code --locate-shell-integration-path pwsh)" }
```

**Fish** (`~/.config/fish/config.fish`):
```fish
string match -q "$TERM_PROGRAM" "vscode"; and . (code --locate-shell-integration-path fish)
```

### Terminal Customization Issues

If you use terminal customization tools:

**Powerlevel10k**:
```bash
# Add before sourcing powerlevel10k in ~/.zshrc
typeset -g POWERLEVEL9K_TERM_SHELL_INTEGRATION=true
```

**Alternative**: Enable the Powerlevel10k Integration setting in Roo Code.

### Verifying Shell Integration Status

Confirm shell integration is active with these commands:

**Bash**:
```bash
set | grep -i '[16]33;'
echo "$PROMPT_COMMAND" | grep vsc
trap -p DEBUG | grep vsc
```

**Zsh**:
```zsh
functions | grep -i vsc
typeset -p precmd_functions preexec_functions
```

**PowerShell**:
```powershell
Get-Command -Name "*VSC*" -CommandType Function
Get-Content Function:\Prompt | Select-String "VSCode"
```

**Fish**:
```fish
functions | grep -i vsc
functions fish_prompt | grep -i vsc
```

Visual indicators of active shell integration:
1. Shell integration indicator in terminal title bar
2. Command detection highlighting
3. Working directory updates in terminal title
4. Command duration and exit code reporting

## WSL Terminal Integration Methods

When using Windows Subsystem for Linux (WSL), there are two distinct ways to use VSCode with WSL, each with different implications for shell integration:

### Method 1: VSCode Windows with WSL Terminal

In this setup:
- VSCode runs natively in Windows
- You use the WSL terminal integration feature in VSCode
- Shell commands are executed through the WSL bridge
- May experience additional latency due to Windows-WSL communication
- Shell integration markers may be affected by the WSL-Windows boundary: you must make sure that `source "$(code --locate-shell-integration-path <shell>)"` is loaded for your shell within the WSL environment because it may not get automatically loaded; see above.

### Method 2: VSCode Running Within WSL

In this setup:
- You launch VSCode directly from within WSL using `code .`
- VSCode server runs natively in the Linux environment
- Direct access to Linux filesystem and tools
- Better performance and reliability for shell integration
- Shell integration is loaded automatically since VSCode runs natively in the Linux environment
- Recommended approach for WSL development

For optimal shell integration with WSL, we recommend:
1. Open your WSL distribution
2. Navigate to your project directory
3. Launch VSCode using `code .`
4. Use the integrated terminal within VSCode

## Known Issues and Workarounds

### VS Code Shell Integration for Fish + Cygwin on Windows

For fellow Windows users running Fish terminal within a Cygwin environment, here's how VS Code's shell integration works:

1.  **(Optional) Locate the Shell Integration Script:**
    Open your Fish terminal *within VS Code* and run the following command:
    ```bash
    code --locate-shell-integration-path fish
    ```
    This will output the path to the `shellIntegration.fish` script. Note down this path.

2.  **Update Your Fish Configuration:**
    Edit your `config.fish` file (usually located at `~/.config/fish/config.fish` within your Cygwin home directory). Add the following line, preferably within an `if status is-interactive` block or at the very end of the file:

    ```fish
    # Example config.fish structure
    if status is-interactive
        # Your other interactive shell configurations...
        # automatic locate integration script:
        string match -q "$TERM_PROGRAM" "vscode"; and . (code --locate-shell-integration-path fish)

        # Or if the above fails for you:
        # Source the VS Code shell integration script
        # IMPORTANT: Replace the example path below with the actual path you found in Step 1.
        # Make sure the path is in a format Cygwin can understand (e.g., using /cygdrive/c/...).
        # source "/cygdrive/c/Users/YourUser/.vscode/extensions/..../shellIntegration.fish"
    end
    ```
    *Remember to replace the example path with the actual path from Step 1, correctly formatted for Cygwin.*

3.  **Configure VS Code Terminal Profile:**
    Open your VS Code `settings.json` file (Ctrl+Shift+P -> "Preferences: Open User Settings (JSON)"). Update or add the Fish profile under `terminal.integrated.profiles.windows` like this:

    ```json
    {
      // ... other settings ...

      "terminal.integrated.profiles.windows": {
        // ... other profiles ...

        // Recommended: Use bash.exe to launch fish as a login shell
        "fish": {
          "path": "C:\\cygwin64\\bin\\bash.exe", // Or your Cygwin bash path
          "args": [
            "--login", // Ensures login scripts run (important for Cygwin environment)
            "-i",      // Ensures bash runs interactively
            "-c",
            "exec fish" // Replace bash process with fish
          ],
          "icon": "terminal-bash" // Optional: Use a recognizable icon
        }
        // Alternative (if the above fails): Launch fish directly
        "fish-direct": {
          "path": "C:\\cygwin64\\bin\\fish.exe", // Ensure this is in your Windows PATH or provide full path
          // Use 'options' here instead of 'args'; otherwise, you might encounter the error "terminal process terminated exit code 1".
          "options": ["-l", "-c"], // Example: login and interactive flags.
          "icon": "terminal-fish" // Optional: Use a fish icon
        }
      },

      // Optional: Set fish as your default if desired
      // "terminal.integrated.defaultProfile.windows": "fish", // or "fish-direct" depending what you use.

      // ... other settings ...
    }
    ```
    *Note: Using `bash.exe --login -i -c "exec fish"` is often more reliable in Cygwin environments for ensuring the correct environment setup before `fish` starts. However, if that approach doesn't work, try the `fish-direct` profile configuration.*

4.  **Restart VS Code:**
    Close and reopen Visual Studio Code completely to apply the changes.

5.  **Verify:**
    Open a new Fish terminal in VS Code. The shell integration features (like command decorations, better command history navigation, etc.) should now be active. You can test basic functionality by running simple commands like `echo "Hello from integrated Fish!"`. <img src="/img/shell-integration/shell-integration-8.png" alt="Fish Cygwin Integration Example" width="600" />

This setup works reliably on Windows systems using Cygwin, Fish, and the Starship prompt, and should assist users with similar configurations.


### Shell Integration Failures After VSCode 1.98

**Issue**: After VSCode updates beyond version 1.98, shell integration may fail with the error "VSCE output start escape sequence (]633;C or ]133;C) not received".

**Solutions**:
1. **Set Terminal Command Delay**:
   - Set the Terminal Command Delay to 50ms in Roo Code settings
   - Restart all terminals after changing this setting
   - This matches older default behavior and may resolve the issue, however some users have reported that a value of 0ms works better. This is a workaround for upstream VSCode problems.

2. **Roll Back VSCode Version**:
   - Download VSCode v1.98 from [VSCode Updates](https://code.visualstudio.com/updates/v1_98)
   - Replace your current VSCode installation
   - No backup of Roo settings needed

3. **WSL-Specific Workaround**:
   - If using WSL, ensure you launch VSCode from within WSL using `code .`

4. **ZSH Users**:
   - Try enabling some or all ZSH-related workarounds in Roo settings
   - These settings can help regardless of your operating system

## Known Issues and Workarounds

### Ctrl+C Behavior

**Issue**: If text is already typed in the terminal when Roo tries to run a command, Roo will press Ctrl+C first to clear the line, which can interrupt running processes.

**Workaround**: Make sure your terminal prompt is empty (no partial commands typed) before asking Roo to execute terminal commands.

### Multi-line Command Issues

**Issue**: Commands that span multiple lines can confuse Roo and may show output from previous commands mixed in with current output.

**Workaround**: Instead of multi-line commands, use command chaining with `&&` to keep everything on one line (e.g., `echo a && echo b` instead of typing each command on a separate line).

### PowerShell-Specific Issues

1. **Premature Completion**: PowerShell sometimes tells Roo a command is finished before all the output has been shown.
2. **Repeated Commands**: PowerShell may refuse to run the same command twice in a row.

**Workaround**: Enable the "PowerShell counter workaround" setting and set a terminal command delay of 150ms in the settings to give commands more time to complete.

### Incomplete Terminal Output

**Issue**: Sometimes VS Code doesn't show or capture all the output from a command.

**Workaround**: If you notice missing output, try closing and reopening the terminal tab, then run the command again. This refreshes the terminal connection.

## Troubleshooting Resources

### Checking Debug Logs
When shell integration issues occur, check the debug logs:
1. Open Help → Toggle Developer Tools → Console
2. Set "Show All Levels" to see all log messages
3. Look for messages containing `[Terminal Process]`
4. Check `preOutput` content in error messages:
   - Empty preOutput (`''`) means VSCode sent no data
   - This indicates a potential VSCode shell integration issue, or an upstream bug that is out of our control
   - The absence of shell integration markers may require adjusting settings to work around possible upstream bugs or local workstation configuration issues related to shell initialization and VSCode's loading of special shell integration hooks

### Using the VSCode Terminal Integration Test Extension
The [VSCode Terminal Integration Test Extension](https://github.com/KJ7LNW/vsce-test-terminal-integration) helps diagnose shell integration issues by testing different settings combinations:


1. **When Commands Stall**:
   - If you see "command already running" warnings, click "Reset Stats" to reset the terminal state
   - These warnings indicate shell integration is not working
   - Try different settings combinations until you find one that works
   - If it really gets stuck, restart the extension by closing the window and pressing F5

2. **Testing Settings**:
   - Systematically try different combinations of:
     * Terminal Command Delay
     * Shell Integration settings
   - Document which combinations succeed or fail
   - This helps identify patterns in shell integration issues

3. **Reporting Issues**:
   - Once you find a problematic configuration
   - Document the exact settings combination
   - Note your environment (OS, VSCode version, shell, and any shell prompt customization)
   - Open an issue with these details to help improve shell integration

### Additional Resources

- [VSCode Terminal Output Issue #237208](https://github.com/microsoft/vscode/issues/237208)
- [VSCode Terminal Integration Test Repository](https://github.com/KJ7LNW/vsce-test-terminal-integration)
- [Roo Code Shell Integration Architecture PR](https://github.com/RooVetGit/Roo-Code/pull/1365)

## Support

If you're still having issues:

1. Check [Roo Code GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues)
2. Create a new issue with:
   - OS and VSCode version
   - Shell type
   - Steps to reproduce
   - Error messages

For additional help, join our [Discord](https://discord.gg/roocode).
````

## File: docs/features/suggested-responses.md
````markdown
---
sidebar_label: Suggested Responses
---

import Codicon from '@site/src/components/Codicon';

# Suggested Responses

When Roo needs more information to complete a task, it uses the [`ask_followup_question` tool](/advanced-usage/available-tools/ask-followup-question). To make responding easier and faster, Roo often provides suggested answers alongside the question.

## Overview

Suggested Responses appear as clickable buttons directly below Roo's question in the chat interface. They offer pre-formulated answers relevant to the question, helping you provide input quickly.

<img src="/img/suggested-responses/suggested-responses.png" alt="Example of Roo asking a question with suggested response buttons below it" width="500" />

## How It Works

1.  **Question Appears**: Roo asks a question using the `ask_followup_question` tool.
2.  **Suggestions Displayed**: If suggestions are provided by Roo, they appear as buttons below the question.
3.  **Interaction**: You can interact with these suggestions in two ways.

## Interacting with Suggestions

You have three options for using suggested responses:

1.  **Direct Selection**:
    *   **Action**: Simply click the button containing the answer you want to provide.
    *   **Result**: The selected answer is immediately sent back to Roo as your response. This is the quickest way to reply if one of the suggestions perfectly matches your intent.

2.  **Keyboard Shortcut**:
    *   **Action**: Use the `roo.acceptInput` command with your configured keyboard shortcut.
    *   **Result**: The primary (first) suggestion button is automatically selected.
    *   **Note**: For setup details, see [Keyboard Shortcuts](/features/keyboard-shortcuts).

3.  **Edit Before Sending**:
    *   **Action**:
        *   Hold down `Shift` and click the suggestion button.
        *   *Alternatively*, hover over the suggestion button and click the pencil icon (<Codicon name="edit" />) that appears.
    *   **Result**: The text of the suggestion is copied into the chat input box. You can then modify the text as needed before pressing Enter to send your customized response. This is useful when a suggestion is close but needs minor adjustments.

<img src="/img/suggested-responses/suggested-responses-1.png" alt="Chat input box showing text copied from a suggested response, ready for editing" width="600" />

## Benefits

*   **Speed**: Quickly respond without typing full answers.
*   **Clarity**: Suggestions often clarify the type of information Roo needs.
*   **Flexibility**: Edit suggestions to provide precise, customized answers when needed.

This feature streamlines the interaction when Roo requires clarification, allowing you to guide the task effectively with minimal effort.
````

## File: docs/getting-started/connecting-api-provider.md
````markdown
---
sidebar_label: Connecting To AI Provider
---
import KangarooIcon from '@site/src/components/KangarooIcon';

# Connecting Your First AI Provider

Roo Code requires an API key from an AI model provider to function. We recommend these options for accessing the powerful **Claude 3.7 Sonnet** model:

- **OpenRouter (Recommended):** Provides access to multiple AI models through a single API key. Ideal for getting started quickly with minimal setup. [View pricing](https://openrouter.ai/models?order=pricing-low-to-high).
- **Anthropic:** Direct access to Claude models. Requires API access approval and may have [rate limits depending on your tier](https://docs.anthropic.com/en/api/rate-limits#requirements-to-advance-tier). See [Anthropic's pricing page](https://www.anthropic.com/pricing#anthropic-api) for details.

## Getting Your API Key

### Option 1: LLM Routers

LLM routers let you access multiple AI models with one API key, simplifying cost management and switching between models. They often offer [competitive pricing](https://openrouter.ai/models?order=pricing-low-to-high) compared to direct providers.

#### OpenRouter

1. Go to [openrouter.ai](https://openrouter.ai/)
2. Sign in with your Google or GitHub account
3. Navigate to the [API keys page](https://openrouter.ai/keys) and create a new key
4. Copy your API key - you'll need this for Roo Code setup

<img src="/img/connecting-api-provider/connecting-api-provider-4.png" alt="OpenRouter API keys page" width="600" />

*OpenRouter dashboard with "Create key" button. Name your key and copy it after creation.*

#### Requesty

1. Go to [requesty.ai](https://requesty.ai/)
2. Sign in with your Google account or email
3. Navigate to the [API management page](https://app.requesty.ai/manage-api) and create a new key
4. **Important:** Copy your API key immediately as it won't be displayed again

<img src="/img/connecting-api-provider/connecting-api-provider-7.png" alt="Requesty API management page" width="600" />

*Requesty API management page with "Create API Key" button. Copy your key immediately - it's shown only once.*

### Option 2: Direct Providers

For direct access to specific models from their original providers, with full access to their features and capabilities:

#### Anthropic

1. Go to [console.anthropic.com](https://console.anthropic.com/)
2. Sign up for an account or log in
3. Navigate to the [API keys section](https://console.anthropic.com/settings/keys) and create a new key
4. **Important:** Copy your API key immediately as it won't be displayed again

<img src="/img/connecting-api-provider/connecting-api-provider-5.png" alt="Anthropic console API Keys section" width="600" />

*Anthropic console API Keys section with "Create key" button. Name your key, set expiration, and copy it immediately.*

#### OpenAI

1. Go to [platform.openai.com](https://platform.openai.com/)
2. Sign up for an account or log in
3. Navigate to the [API keys section](https://platform.openai.com/api-keys) and create a new key
4. **Important:** Copy your API key immediately as it won't be displayed again

<img src="/img/connecting-api-provider/connecting-api-provider-6.png" alt="OpenAI API keys page" width="600" />

*OpenAI platform with "Create new secret key" button. Name your key and copy it immediately after creation.*

## Configuring Roo Code in VS Code

Once you have your API key:

1. Open the Roo Code sidebar by clicking the Roo Code icon (<KangarooIcon />) in the VS Code Activity Bar
2. In the welcome screen, select your API provider from the dropdown
3. Paste your API key into the appropriate field
4. Select your model:
   - For **OpenRouter**: select `anthropic/claude-3.7-sonnet` ([model details](https://openrouter.ai/anthropic/claude-3.7-sonnet))
   - For **Anthropic**: select `claude-3-7-sonnet-20250219` ([model details](https://www.anthropic.com/pricing#anthropic-api))

:::info Model Selection Advice
We strongly recommend **Claude 3.7 Sonnet** for the best experience—it generally "just works" out of the box. Roo Code has been extensively optimized for this model's capabilities and instruction-following behavior.

Selecting alternative models is an advanced feature that introduces complexity. Different models vary significantly in how they follow tool instructions, parse formats, and maintain context through multi-step operations. If you do experiment with other models, choose ones specifically designed for structured reasoning and tool use.
:::

5. Click "Let's go!" to save your settings and start using Roo Code
````

## File: docs/getting-started/installing.mdx
````
---
sidebar_label: Installing Roo Code
---
import KangarooIcon from '@site/src/components/KangarooIcon';

# Installing Roo Code

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/Mcq3r1EPZ-4"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>

Roo Code is a VS Code extension that brings AI-powered coding assistance directly to your editor. Install using one of these methods:
1. **VS Code Marketplace (Recommended)** - fastest method for standard VS Code and Cursor users
2. **Open VSX Registry** - for VS Code-compatible editors like VSCodium

## VS Code Marketplace

1. Open VS Code
2. Access Extensions: Click the Extensions icon in the Activity Bar or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for "Roo Code"
4. Select "Roo Code" by RooVeterinaryInc and click **Install**
5. Reload VS Code if prompted

After installation, find the Roo Code icon (<KangarooIcon />) in the Activity Bar to open the Roo Code panel.

<img src="/img/installing/installing-3.png" alt="VS Code marketplace with Roo Code extension ready to install" width="400" />
*VS Code marketplace with Roo Code extension ready to install*

## Open VSX Registry

For VS Code-compatible editors without Marketplace access (like VSCodium and Windsurf):

1. Open your editor
2. Access the Extensions view
3. Search for "Roo Code"
4. Select "Roo Code" by RooVeterinaryInc and click **Install**
5. Reload if prompted

<img src="/img/installing/installing-3.png" alt="Open VSX Registry with Roo Code extension ready to install" width="400" />
*Open VSX Registry with Roo Code extension ready to install*
## Manual Installation from VSIX

If you prefer to download and install the VSIX file directly:

1. **Download the VSIX file:**
   * Find official releases on the [Roo Code GitHub Releases page](https://github.com/RooVetGit/Roo-Code/releases)
   * Download the `.vsix` file from the latest release

2. **Install in VS Code:**
   * Open VS Code
   * Access Extensions view
   * Click the "..." menu in the Extensions view
   * Select "Install from VSIX..."
   * Browse to and select your downloaded `.vsix` file

<img src="/img/installing/installing-2.png" alt="VS Code's Install from VSIX dialog" width="400" />
*Installing Roo Code using VS Code's "Install from VSIX" dialog*

## Development Builds

:::note Developer Information Only
This section is intended only for developers contributing to Roo Code.
:::

If you're building Roo Code from source:

1. Run `npm run build` in the project directory
2. Find the generated VSIX file in the `bin/` directory
3. In VS Code, open Extensions view and select "Install from VSIX..." from the "..." menu
4. Browse to and select your generated `.vsix` file

<img src="/img/installing/installing-2.png" alt="VS Code's Install from VSIX dialog" width="400" />
*Installing a development build using VS Code's "Install from VSIX" dialog*

## Troubleshooting

<img src="/img/installing/installing-4.png" alt="VS Code Output panel showing Roo Code logs for troubleshooting" width="100%" />
*VS Code Output panel showing Roo Code logs for troubleshooting*

**Extension Not Visible**
* Restart VS Code
* Verify Roo Code is listed and enabled in Extensions
* Try disabling and re-enabling
* Check Output panel for errors (View → Output, select "Roo Code")

**Installation Problems**
* Ensure stable internet connection
* Verify VS Code version 1.84.0 or later
* If VS Code Marketplace is inaccessible, try the Open VSX Registry method

## Getting Support

If you encounter issues not covered here:

* Join our [Discord community](https://discord.gg/roocode) for real-time support
* Submit issues on [GitHub](https://github.com/RooVetGit/Roo-Code/issues)
* Visit our [Reddit community](https://www.reddit.com/r/RooCode)
````

## File: docs/getting-started/your-first-task.md
````markdown
---
sidebar_label: Your First Task
---
import KangarooIcon from '@site/src/components/KangarooIcon';

# Starting Your First Task with Roo Code

Now that you've [configured your AI provider and model](/getting-started/connecting-api-provider), you're ready to start using Roo Code! This guide walks you through your first interaction.

## Step 1: Open the Roo Code Panel

Click the Roo Code icon (<KangarooIcon />) in the VS Code Activity Bar (vertical bar on the side of the window) to open the chat interface. If you don't see the icon, verify the extension is installed and enabled.

<img src="/img/your-first-task/your-first-task.png" alt="Roo Code icon in VS Code Activity Bar" width="800" />

*The Roo Code icon in the Activity Bar opens the chat interface.*

## Step 2: Type Your Task

Type a clear, concise description of what you want Roo Code to do in the chat box at the bottom of the panel. Examples of effective tasks:

* "Create a file named `hello.txt` containing 'Hello, world!'."
* "Write a Python function that adds two numbers."
* "Create an HTML file for a simple website with the title 'Roo test'"

No special commands or syntax needed—just use plain English.

<img src="/img/your-first-task/your-first-task-6.png" alt="Typing a task in the Roo Code chat interface" width="500" />
*Enter your task in natural language - no special syntax required.*

## Step 3: Send Your Task

Press Enter or click the Send icon (<Codicon name="send" />) to the right of the input box.

## Step 4: Review and Approve Actions

Roo Code analyzes your request and proposes specific actions. These may include:

* **Reading files:** Shows file contents it needs to access
* **Writing to files:** Displays a diff with proposed changes (added lines in green, removed in red)
* **Executing commands:** Shows the exact command to run in your terminal
* **Using the Browser:** Outlines browser actions (click, type, etc.)
* **Asking questions:** Requests clarification when needed to proceed

<img src="/img/your-first-task/your-first-task-7.png" alt="Reviewing a proposed file creation action" width="800" />
*Roo Code shows exactly what action it wants to perform and waits for your approval.*

**Each action requires your explicit approval** (unless auto-approval is enabled):

* **Approve:** Click the "Approve" button to execute the proposed action
* **Reject:** Click the "Reject" button and provide feedback if needed

## Step 5: Iterate

Roo Code works iteratively. After each action, it waits for your feedback before proposing the next step. Continue this review-approve cycle until your task is complete.

<img src="/img/your-first-task/your-first-task-8.png" alt="Final result of a completed task showing the iteration process" width="500" />
*After completing the task, Roo Code shows the final result and awaits your next instruction.*

## Conclusion

You've now completed your first task with Roo Code! Through this process, you've learned:

* How to interact with Roo Code using natural language
* The approval-based workflow that keeps you in control
* The iterative approach Roo Code uses to solve problems step-by-step

This iterative, approval-based workflow is at the core of how Roo Code works—letting AI handle the tedious parts of coding while you maintain complete oversight. Now that you understand the basics, you're ready to tackle more complex tasks, explore different [modes](/basic-usage/using-modes) for specialized workflows, or try the [auto-approval feature](/features/auto-approving-actions) to speed up repetitive tasks.
````

## File: docs/providers/anthropic.md
````markdown
---
sidebar_label: Anthropic
---

# Using Anthropic With Roo Code

Anthropic is an AI safety and research company that builds reliable, interpretable, and steerable AI systems.  Their Claude models are known for their strong reasoning abilities, helpfulness, and honesty.

**Website:** [https://www.anthropic.com/](https://www.anthropic.com/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Anthropic Console](https://console.anthropic.com/). Create an account or sign in.
2.  **Navigate to API Keys:**  Go to the [API keys](https://console.anthropic.com/settings/keys) section.
3.  **Create a Key:** Click "Create Key". Give your key a descriptive name (e.g., "Roo Code").
4.  **Copy the Key:**  **Important:** Copy the API key *immediately*.  You will not be able to see it again.  Store it securely.

## Supported Models

Roo Code supports the following Anthropic Claude models:

*   `claude-3-7-sonnet-20250219` (Recommended)
*   `claude-3-7-sonnet-20250219:thinking` (Extended Thinking variant)
*   `claude-3-5-sonnet-20241022`
*   `claude-3-5-haiku-20241022`
*   `claude-3-opus-20240229`
*   `claude-3-haiku-20240307`

See [Anthropic's Model Documentation](https://docs.anthropic.com/en/docs/about-claude/models) for more details on each model's capabilities.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Anthropic" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Anthropic API key into the "Anthropic API Key" field.
4.  **Select Model:** Choose your desired Claude model from the "Model" dropdown.
5.  **(Optional) Custom Base URL:** If you need to use a custom base URL for the Anthropic API, check "Use custom base URL" and enter the URL. Most people won't need to adjust this.

## Tips and Notes

*   **Prompt Caching:** Claude 3 models support [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), which can significantly reduce costs and latency for repeated prompts.
*   **Context Window:** Claude models have large context windows (200,000 tokens), allowing you to include a significant amount of code and context in your prompts.
*   **Pricing:** Refer to the [Anthropic Pricing](https://www.anthropic.com/pricing) page for the latest pricing information.
*   **Rate Limits:** Anthropic has strict rate limits based on [usage tiers](https://docs.anthropic.com/en/api/rate-limits#requirements-to-advance-tier). If you're repeatedly hitting rate limits, consider contacting Anthropic sales or accessing Claude through a different provider like [OpenRouter](/providers/openrouter) or [Requesty](/providers/requesty).
````

## File: docs/providers/bedrock.md
````markdown
---
sidebar_label: AWS Bedrock
---

# Using AWS Bedrock With Roo Code

Roo Code supports accessing models through Amazon Bedrock, a fully managed service that makes a selection of high-performing foundation models (FMs) from leading AI companies available via a single API.

**Website:** [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

## Prerequisites

*   **AWS Account:** You need an active AWS account.
*   **Bedrock Access:** You must request and be granted access to Amazon Bedrock.  See the [AWS Bedrock documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html) for details on requesting access.
*   **Model Access:** Within Bedrock, you need to request access to the specific models you want to use (e.g., Anthropic Claude).
*   **Install AWS CLI:** Use AWS CLI to configure your account for authentication
    ```bash
     aws configure
    ```

## Getting Credentials

You have two main options for configuring AWS credentials:

1.  **AWS Access Keys (Recommended for Development):**
    *   Create an IAM user with the necessary permissions (at least `bedrock:InvokeModel`).
    *   Generate an access key ID and secret access key for that user.
    *   *(Optional)* Create a session token if required by your IAM configuration.
2.  **AWS Profile:**
    *   Configure an AWS profile using the AWS CLI or by manually editing your AWS credentials file.  See the [AWS CLI documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) for details.

## Supported Models

Roo Code supports the following models through Bedrock (based on source code):

*   **Amazon:**
    *   `amazon.nova-pro-v1:0`
    *   `amazon.nova-pro-latency-optimized-v1:0`
    *   `amazon.nova-lite-v1:0`
    *   `amazon.nova-micro-v1:0`
    *   `amazon.titan-text-lite-v1:0`
    *   `amazon.titan-text-express-v1:0`
    *   `amazon.titan-text-embeddings-v1:0`
    *   `amazon.titan-text-embeddings-v2:0`
*   **Anthropic:**
    *   `anthropic.claude-3-7-sonnet-20250219-v1:0`
    *   `anthropic.claude-3-5-sonnet-20241022-v2:0`
    *   `anthropic.claude-3-5-haiku-20241022-v1:0`
    *   `anthropic.claude-3-5-sonnet-20240620-v1:0`
    *   `anthropic.claude-3-opus-20240229-v1:0`
    *   `anthropic.claude-3-sonnet-20240229-v1:0`
    *   `anthropic.claude-3-haiku-20240307-v1:0`
    *   `anthropic.claude-2-1-v1:0`
    *   `anthropic.claude-2-0-v1:0`
    *   `anthropic.claude-instant-v1:0`
*   **DeepSeek:**
    *   `deepseek.r1-v1:0`
*   **Meta:**
    *   `meta.llama3-3-70b-instruct-v1:0`
    *   `meta.llama3-2-90b-instruct-v1:0`
    *   `meta.llama3-2-11b-instruct-v1:0`
    *   `meta.llama3-2-3b-instruct-v1:0`
    *   `meta.llama3-2-1b-instruct-v1:0`
    *   `meta.llama3-1-405b-instruct-v1:0`
    *   `meta.llama3-1-70b-instruct-v1:0`
    *   `meta.llama3-1-70b-instruct-latency-optimized-v1:0`
    *   `meta.llama3-1-8b-instruct-v1:0`
    *   `meta.llama3-70b-instruct-v1:0`
    *   `meta.llama3-8b-instruct-v1:0`

Refer to the [Amazon Bedrock documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html) for the most up-to-date list of available models and their IDs. Make sure to use the *model ID* when configuring Roo Code, not the model name.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Bedrock" from the "API Provider" dropdown.
3.  **Select Authentication Method:**
    *   **AWS Credentials:**
        *   Enter your "AWS Access Key" and "AWS Secret Key."
        *   (Optional) Enter your "AWS Session Token" if you're using temporary credentials.
    *   **AWS Profile:**
        *   Enter your "AWS Profile" name (e.g., "default").
4.  **Select Region:** Choose the AWS region where your Bedrock service is available (e.g., "us-east-1").
5.  **(Optional) Cross-Region Inference:** Check "Use cross-region inference" if you want to access models in a region different from your configured AWS region.
6.  **Select Model:** Choose your desired model from the "Model" dropdown.

## Tips and Notes

*   **Permissions:**  Ensure your IAM user or role has the necessary permissions to invoke Bedrock models.  The `bedrock:InvokeModel` permission is required.
*   **Pricing:**  Refer to the [Amazon Bedrock pricing](https://aws.amazon.com/bedrock/pricing/) page for details on model costs.
*   **Cross-Region Inference:**  Using cross-region inference may result in higher latency.
````

## File: docs/providers/deepseek.md
````markdown
---
sidebar_label: DeepSeek
---

# Using DeepSeek With Roo Code

Roo Code supports accessing models through the DeepSeek API, including `deepseek-chat` and `deepseek-reasoner`.

**Website:** [https://platform.deepseek.com/](https://platform.deepseek.com/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [DeepSeek Platform](https://platform.deepseek.com/). Create an account or sign in.
2.  **Navigate to API Keys:** Find your API keys in the [API keys](https://platform.deepseek.com/api_keys) section of the platform.
3.  **Create a Key:** Click "Create new API key".  Give your key a descriptive name (e.g., "Roo Code").
4.  **Copy the Key:**  **Important:** Copy the API key *immediately*.  You will not be able to see it again.  Store it securely.

## Supported Models

Roo Code supports the following DeepSeek models:

*   `deepseek-chat` (Recommended for coding tasks)
*	  `deepseek-reasoner` (Recommended for reasoning tasks)

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "DeepSeek" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your DeepSeek API key into the "DeepSeek API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

## Tips and Notes
*   **Pricing:** Refer to the [DeepSeek Pricing](https://api-docs.deepseek.com/quick_start/pricing/) page for details on model costs.
````

## File: docs/providers/gemini.md
````markdown
---
sidebar_label: Google Gemini
---

# Using Google Gemini With Roo Code

Roo Code supports Google's Gemini family of models through the Google AI Gemini API.

**Website:** [https://ai.google.dev/](https://ai.google.dev/)

## Getting an API Key

1.  **Go to Google AI Studio:** Navigate to [https://ai.google.dev/](https://ai.google.dev/).
2.  **Sign In:** Sign in with your Google account.
3.  **Create API Key:** Click on "Create API key" in the left-hand menu.
4.  **Copy API Key:** Copy the generated API key.

## Supported Models

Roo Code supports the following Gemini models:

* `gemini-2.5-pro-exp-03-25`
* `gemini-2.0-flash-001`
* `gemini-2.0-flash-lite-preview-02-05`
* `gemini-2.0-pro-exp-02-05`
* `gemini-2.0-flash-thinking-exp-01-21`
* `gemini-2.0-flash-thinking-exp-1219`
* `gemini-2.0-flash-exp`
* `gemini-1.5-flash-002`
* `gemini-1.5-flash-exp-0827`
* `gemini-1.5-flash-8b-exp-0827`
* `gemini-1.5-pro-002`
* `gemini-1.5-pro-exp-0827`
* `gemini-exp-1206`

Refer to the [Gemini documentation](https://ai.google.dev/models/gemini) for more details on each model.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Google Gemini" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Gemini API key into the "Gemini API Key" field.
4.  **Select Model:** Choose your desired Gemini model from the "Model" dropdown.

5.  **(Optional) Enable Prompt Caching (Gemini 2.5 Models):** For supported Gemini 2.5 models, check the "Enable Prompt Caching" box if you wish to activate prompt caching. See the note below for important details specific to this provider.
    <img src="/img/v3.14.2/v3.14.2.png" alt="Prompt Caching Checkbox for Gemini Provider" width="600" />
## Tips and Notes

*   **Prompt Caching (Manual Activation Required):**
    *   Prompt caching is available for supported Gemini 2.5 models.
    *   However, for the **Google Gemini provider**, caching is **not enabled by default**.
    *   You **must manually check** the "Enable Prompt Caching" box in the provider settings to activate it.
    *   **Reason:** This manual step is a temporary workaround due to potential response delays sometimes observed with Google's caching mechanism when accessed directly via this provider.
*   **Pricing:**  Gemini API usage is priced based on input and output tokens. Refer to the [Gemini pricing page](https://ai.google.dev/pricing) for detailed information.
````

## File: docs/providers/glama.md
````markdown
---
sidebar_label: Glama
---

# Using Glama With Roo Code

Glama provides access to a variety of language models through a unified API, including models from Anthropic, OpenAI, and others.  It offers features like prompt caching and cost tracking.

**Website:** [https://glama.ai/](https://glama.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Glama sign-up page](https://glama.ai/sign-up). Sign up using your Google account or name/email/password.
2.  **Get API Key:** After signing up, navigate to the [API Keys](https://glama.ai/settings/gateway/api-keys) page to get an API key.
3.  **Copy the Key:** Copy the displayed API key.

## Supported Models

Roo Code will automatically try to fetch a list of available models from the Glama API.  Some models that are commonly available through Glama include:

*  **Anthropic Claude models:**  (e.g., `anthropic/claude-3-5-sonnet`)  These are generally recommended for best performance with Roo Code.
*  **OpenAI models:** (e.g., `openai/o3-mini-high`)
*  **Other providers and open-source models**
    
Refer to the [Glama documentation](https://glama.ai/models) for the most up-to-date list of supported models.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Glama" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Glama API key into the "Glama API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

## Tips and Notes

* **Pricing:** Glama operates on a pay-per-use basis.  Pricing varies depending on the model you choose.
* **Prompt Caching:** Glama supports prompt caching, which can significantly reduce costs and improve performance for repeated prompts.
````

## File: docs/providers/human-relay.md
````markdown
# Human Relay Provider

The Human Relay provider allows you to use Roo Code with web-based AI models like ChatGPT or Claude without needing an API key. Instead, it relies on you to manually relay messages between Roo Code and the AI's web interface.

## How it Works

1.  **Select Human Relay**: Choose "Human Relay" as your API provider in Roo Code's settings. No API key is required.
2.  **Initiate a Request**: Start a chat or task with Roo Code as usual.
3.  **Dialog Prompt**: A dialog box will appear in VS Code. Your message to the AI is automatically copied to your clipboard.
4.  **Paste to Web AI**: Go to the web interface of your chosen AI (e.g., chat.openai.com, claude.ai) and paste the message from your clipboard into the chat input.
5.  **Copy AI Response**: Once the AI responds, copy its complete response text.
6.  **Paste Back to Roo Code**: Return to the dialog box in VS Code, paste the AI's response into the designated field, and click "Confirm".
7.  **Continue**: Roo Code will process the response as if it came directly from an API.

## Use Cases

This provider is useful if:

*   You want to use models that don't offer direct API access.
*   You prefer not to manage API keys.
*   You need to leverage the specific capabilities or context available only in the web UI of certain AI models.

## Limitations

*   **Manual Effort**: Requires constant copy-pasting between VS Code and your browser.
*   **Slower Interaction**: The back-and-forth process is significantly slower than direct API integration.
*   **Potential for Errors**: Manual copying and pasting can introduce errors or omissions.

Choose this provider when the benefits of using a specific web AI outweigh the inconvenience of the manual relay process.
````

## File: docs/providers/lmstudio.md
````markdown
---
sidebar_label: LM Studio
---

# Using LM Studio With Roo Code

Roo Code supports running models locally using LM Studio.  LM Studio provides a user-friendly interface for downloading, configuring, and running local language models.  It also includes a built-in local inference server that emulates the OpenAI API, making it easy to integrate with Roo Code.

**Website:** [https://lmstudio.ai/](https://lmstudio.ai/)

## Setting Up LM Studio

1.  **Download and Install LM Studio:** Download LM Studio from the [LM Studio website](https://lmstudio.ai/).
2.  **Download a Model:**  Use the LM Studio interface to search for and download a model.  Some recommended models include:
    *   CodeLlama models (e.g., `codellama:7b-code`, `codellama:13b-code`, `codellama:34b-code`)
    *   Mistral models (e.g., `mistralai/Mistral-7B-Instruct-v0.1`)
    *   DeepSeek Coder models (e.g., `deepseek-coder:6.7b-base`)
    * Any other model that is supported by Roo, or for which you can set the context window.

    Look for models in the GGUF format.  LM Studio provides a search interface to find and download models.
3.  **Start the Local Server:**
    *   Open LM Studio.
    *   Click the **"Local Server"** tab (the icon looks like `<->`).
    *   Select the model you downloaded.
    *   Click **"Start Server"**.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "LM Studio" from the "API Provider" dropdown.
3.  **Enter Model ID:** Enter the *file name* of the model you loaded in LM Studio (e.g., `codellama-7b.Q4_0.gguf`).  You can find this in the LM Studio "Local Server" tab.
4.  **(Optional) Base URL:**  By default, Roo Code will connect to LM Studio at `http://localhost:1234`.  If you've configured LM Studio to use a different address or port, enter the full URL here.

## Tips and Notes

*   **Resource Requirements:** Running large language models locally can be resource-intensive. Make sure your computer meets the minimum requirements for the model you choose.
*   **Model Selection:**  LM Studio provides a wide range of models.  Experiment to find the one that best suits your needs.
*   **Local Server:**  The LM Studio local server must be running for Roo Code to connect to it.
*   **LM Studio Documentation:** Refer to the [LM Studio documentation](https://lmstudio.ai/docs) for more information.
*   **Troubleshooting:** If you see a "Please check the LM Studio developer logs to debug what went wrong" error, you may need to adjust the context length settings in LM Studio.
````

## File: docs/providers/mistral.md
````markdown
---
sidebar_label: Mistral AI
---

# Using Mistral AI With Roo Code

Roo Code supports accessing models through the Mistral AI API, including both standard Mistral models and the code-specialized Codestral model.

**Website:** [https://mistral.ai/](https://mistral.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Mistral Platform](https://console.mistral.ai/). Create an account or sign in.  You may need to go through a verification process.
2.  **Create an API Key:**  
    - [La Plateforme API Key](https://console.mistral.ai/api-keys/) and/or 
    - [Codestral API Key](https://console.mistral.ai/codestral)

## Supported Models

Roo Code supports the following Mistral models:

| Model ID               | Model Default Temperature | Function Calling | Vision / Image support |
|------------------------|-------------------------|------------------|--------|
| codestral-latest      | 0.3                     | ✅               | ❌      |
| mistral-large-latest  | 0.7                     | ✅               | ❌      |
| ministral-8b-latest   | 0.3                     | ✅               | ❌      |
| ministral-3b-latest   | 0.3                     | ✅               | ❌      |
| mistral-small-latest  | 0.3                     | ✅               | ❌      |
| pixtral-large-latest  | 0.7                     | ✅               | ✅      |
The default model temperature in Roo Code is 0.0, so you should consider experimenting with [temperature adjustments](/features/model-temperature)!

**Note:**  Model availability and specifications may change.
Refer to the [Mistral AI documentation](https://docs.mistral.ai/api/) and [Mistral Model Overview](https://docs.mistral.ai/getting-started/models/models_overview/) for the latest information.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Mistral" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Mistral API key into the "Mistral API Key" field if you're using a `mistral` model.  If you intend to use `codestral-latest`, see the "Codestral" section below.
4.  **Select Model:** Choose your desired model from the "Model" dropdown. 

## Using Codestral

[Codestral](https://docs.mistral.ai/capabilities/code_generation/) is a model specifically designed for code generation and interaction. 
Only for Codestral you could use different endpoints (Default: codestral.mistral.ai). 
For the La Platforme API Key change the **Codestral Base Url** to: https://api.mistral.ai 

To use Codestral:

1.  **Select "Mistral" as the API Provider.**
2.  **Select a Codestral Model**
3.  **Enter your Codestral (codestral.mistral.ai) or La Plateforme (api.mistral.ai) API Key.**
````

## File: docs/providers/ollama.md
````markdown
---
sidebar_label: Ollama
---
import KangarooIcon from '@site/src/components/KangarooIcon';

# Using Ollama With Roo Code

Roo Code supports running models locally using Ollama. This provides privacy, offline access, and potentially lower costs, but requires more setup and a powerful computer.

**Website:** [https://ollama.com/](https://ollama.com/)

## Setting up Ollama

1.  **Download and Install Ollama:**  Download the Ollama installer for your operating system from the [Ollama website](https://ollama.com/). Follow the installation instructions. Make sure Ollama is running

    ```bash
    ollama serve
    ```

2.  **Download a Model:**  Ollama supports many different models.  You can find a list of available models on the [Ollama website](https://ollama.com/library).  Some recommended models for coding tasks include:

    *   `codellama:7b-code` (good starting point, smaller)
    *   `codellama:13b-code` (better quality, larger)
    *   `codellama:34b-code` (even better quality, very large)
    *   `qwen2.5-coder:32b`
    *   `mistralai/Mistral-7B-Instruct-v0.1` (good general-purpose model)
    *   `deepseek-coder:6.7b-base` (good for coding tasks)
    *   `llama3:8b-instruct-q5_1` (good for general tasks)

    To download a model, open your terminal and run:

    ```bash
    ollama pull <model_name>
    ```

    For example:

    ```bash
    ollama pull qwen2.5-coder:32b
    ```

3. **Configure the Model:** by default, Ollama uses a context window size of 2048 tokens, which is too small for Roo Code requests. You need to have at least 12k to get decent results, ideally - 32k. To configure a model, you actually need to set its parameters and save a copy of it.

   Load the model (we will use `qwen2.5-coder:32b` as an example):
   
    ```bash
    ollama run qwen2.5-coder:32b
    ```

   Change context size parameter:

    ```bash
    /set parameter num_ctx 32768
    ```

    Save the model with a new name:

    ```bash
    /save your_model_name
    ```

4.  **Configure Roo Code:**
    *   Open the Roo Code sidebar (<KangarooIcon /> icon).
    *   Click the settings gear icon (<Codicon name="gear" />).
    *   Select "ollama" as the API Provider.
    *   Enter the Model name from the previous step (e.g., `your_model_name`).
    *   (Optional) You can configure the base URL if you're running Ollama on a different machine. The default is `http://localhost:11434`.
    *   (Optional) Configure Model context size in Advanced settings, so Roo Code knows how to manage its sliding window.

## Tips and Notes

*   **Resource Requirements:** Running large language models locally can be resource-intensive.  Make sure your computer meets the minimum requirements for the model you choose.
*   **Model Selection:** Experiment with different models to find the one that best suits your needs.
*   **Offline Use:** Once you've downloaded a model, you can use Roo Code offline with that model.
*   **Ollama Documentation:** Refer to the [Ollama documentation](https://ollama.com/docs) for more information on installing, configuring, and using Ollama.
````

## File: docs/providers/openai-compatible.md
````markdown
---
sidebar_label: OpenAI Compatible
---

# Using OpenAI Compatible Providers With Roo Code

Roo Code supports a wide range of AI model providers that offer APIs compatible with the OpenAI API standard. This means you can use models from providers *other than* OpenAI, while still using a familiar API interface.  This includes providers like:

*   **Local models** running through tools like Ollama and LM Studio (covered in separate sections).
*   **Cloud providers** like Perplexity, Together AI, Anyscale, and others.
*   **Any other provider** offering an OpenAI-compatible API endpoint.

This document focuses on setting up providers *other than* the official OpenAI API (which has its own [dedicated configuration page](/providers/openai)).

## General Configuration

The key to using an OpenAI-compatible provider is to configure two main settings:

1.  **Base URL:** This is the API endpoint for the provider.  It will *not* be `https://api.openai.com/v1` (that's for the official OpenAI API).
2.  **API Key:**  This is the secret key you obtain from the provider.
3.  **Model ID:** This is the model name of the specific model.

You'll find these settings in the Roo Code settings panel (click the <Codicon name="gear" /> icon):

*   **API Provider:** Select "OpenAI Compatible".
*   **Base URL:** Enter the base URL provided by your chosen provider.  **This is crucial.**
*   **API Key:** Enter your API key.
*   **Model:** Chooose a model.
*   **Model Configuration:** This lets you customize advanced configuration for the model
    - Max Output Tokens
    - Context Window
    - Image Support
    - Computer Use
    - Input Price
    - Output Price

## Supported Models (for OpenAI Native Endpoint)

While this provider type allows connecting to various endpoints, if you are connecting directly to the official OpenAI API (or an endpoint mirroring it exactly), Roo Code recognizes the following model IDs based on the `openAiNativeModels` definition in its source code:

*   `o3-mini`
*   `o3-mini-high`
*   `o3-mini-low`
*   `o1`
*   `o1-preview`
*   `o1-mini`
*   `gpt-4.5-preview`
*   `gpt-4o`
*   `gpt-4o-mini`

**Note:** If you are using a different OpenAI-compatible provider (like Together AI, Anyscale, etc.), the available model IDs will vary. Always refer to your specific provider's documentation for their supported model names.

## Troubleshooting

*   **"Invalid API Key":** Double-check that you've entered the API key correctly.
*   **"Model Not Found":** Make sure you're using a valid model ID for your chosen provider.
*   **Connection Errors:** Verify the Base URL is correct and that your provider's API is accessible.
*   **Unexpected Results:** If you're getting unexpected results, try a different model.

By using an OpenAI-compatible provider, you can leverage the flexibility of Roo Code with a wider range of AI models. Remember to always consult your provider's documentation for the most accurate and up-to-date information.
````

## File: docs/providers/openai.md
````markdown
---
sidebar_label: OpenAI
---

# Using OpenAI With Roo Code

Roo Code supports accessing models directly through the official OpenAI API.

**Website:** [https://openai.com/](https://openai.com/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [OpenAI Platform](https://platform.openai.com/). Create an account or sign in.
2.  **Navigate to API Keys:** Go to the [API keys](https://platform.openai.com/api-keys) page.
3.  **Create a Key:** Click "Create new secret key". Give your key a descriptive name (e.g., "Roo Code").
4.  **Copy the Key:** **Important:** Copy the API key *immediately*. You will not be able to see it again. Store it securely.

## Supported Models

Roo Code supports a variety of OpenAI models, including:

*	`o3-mini` (medium reasoning effort)
*	`o3-mini-high` (high reasoning effort)
* `o3-mini-low` (low reasoning effort)
* `o1`
* `o1-preview`
*	`o1-mini`
*   `gpt-4.5-preview`
* `gpt-4o`
* `gpt-4o-mini`

Refer to the [OpenAI Models documentation](https://platform.openai.com/docs/models) for the most up-to-date list of models and capabilities.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "OpenAI" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your OpenAI API key into the "OpenAI API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

## Tips and Notes

*   **Pricing:** Refer to the [OpenAI Pricing](https://openai.com/pricing) page for details on model costs.
*   **Azure OpenAI Service:** If you'd like to use the Azure OpenAI service, please see our section on [OpenAI-compatible](/providers/openai-compatible) providers.
````

## File: docs/providers/openrouter.md
````markdown
---
sidebar_label: OpenRouter
---

# Using OpenRouter With Roo Code

OpenRouter is an AI platform that provides access to a wide variety of language models from different providers, all through a single API.  This can simplify setup and allow you to easily experiment with different models.

**Website:** [https://openrouter.ai/](https://openrouter.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [OpenRouter website](https://openrouter.ai/).  Sign in with your Google or GitHub account.
2.  **Get an API Key:** Go to the [keys page](https://openrouter.ai/keys).  You should see an API key listed.  If not, create a new key.
3.  **Copy the Key:** Copy the API key.

## Supported Models

OpenRouter supports a large and growing number of models.  Roo Code automatically fetches the list of available models. Refer to the [OpenRouter Models page](https://openrouter.ai/models) for the complete and up-to-date list.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "OpenRouter" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your OpenRouter API key into the "OpenRouter API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.
5.  **(Optional) Custom Base URL:** If you need to use a custom base URL for the OpenRouter API, check "Use custom base URL" and enter the URL. Leave this blank for most users.

6.  **(Optional) Enable Prompt Caching (Supported Models):** For models accessed via OpenRouter that support caching (like Gemini 2.5), check the "Enable Prompt Caching" box if you wish to activate it. See the note below for important details specific to this provider.
    <img src="/img/v3.14.2/v3.14.2.png" alt="Prompt Caching Checkbox for OpenRouter Provider" width="600" />
## Supported Transforms

OpenRouter provides an [optional "middle-out" message transform](https://openrouter.ai/docs/features/message-transforms) to help with prompts that exceed the maximum context size of a model. You can enable it by checking the "Compress prompts and message chains to the context size" box.

## Tips and Notes

* **Model Selection:** OpenRouter offers a wide range of models. Experiment to find the best one for your needs.
* **Pricing:**  OpenRouter charges based on the underlying model's pricing.  See the [OpenRouter Models page](https://openrouter.ai/models) for details.
*   **Prompt Caching:**
    *   OpenRouter passes caching requests to underlying models that support it. Check the [OpenRouter Models page](https://openrouter.ai/models) to see which models offer caching.
    *   For most models, caching should activate automatically if supported by the model itself (similar to how Requesty works).
    *   **Exception for Gemini Models via OpenRouter:** Due to potential response delays sometimes observed with Google's caching mechanism when accessed via OpenRouter, a manual activation step is required *specifically for Gemini models*.
    *   If using a **Gemini model** via OpenRouter, you **must manually check** the "Enable Prompt Caching" box in the provider settings to activate caching for that model. This checkbox serves as a temporary workaround. For non-Gemini models on OpenRouter, this checkbox is not necessary for caching.
````

## File: docs/providers/requesty.md
````markdown
---
sidebar_label: Requesty
---

# Using Requesty With Roo Code

Roo Code supports accessing models through the [Requesty](https://www.requesty.ai/) AI platform. Requesty provides an easy and optimized API for interacting with 150+ large language models (LLMs).

**Website:** [https://www.requesty.ai/](https://www.requesty.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Requesty website](https://www.requesty.ai/) and create an account or sign in.
2.  **Get API Key:**  You can get an API key from the [API Management](https://app.requesty.ai/manage-api) section of your Requesty dashboard.

## Supported Models

Requesty provides access to a wide range of models.  Roo Code will automatically fetch the latest list of available models. You can see the full list of available models on the [Model List](https://app.requesty.ai/router/list) page.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Requesty" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Requesty API key into the "Requesty API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

## Tips and Notes

- **Optimizations**: Requesty offers range of in-flight cost optimizations to lower your costs.
- **Unified and simplified billing**: Unrestricted access to all providers and models, automatic balance top ups and more via a single [API key](https://app.requesty.ai/manage-api).
- **Cost tracking**: Track cost per model, coding language, changed file, and more via the [Cost dashboard](https://app.requesty.ai/cost-management) or the [Requesty VS.code extension](https://marketplace.visualstudio.com/items?itemName=Requesty.requesty).
- **Stats and logs**: See your [coding stats dashboard](https://app.requesty.ai/usage-stats) or go through your [LLM interaction logs](https://app.requesty.ai/logs).
- **Fallback policies**: Keep your LLM working for you with fallback policies when providers are down.
* **Prompt Caching:** Some providers support prompt caching. [Search models with caching](https://app.requesty.ai/router/list).

## Relevant resources

- [Requesty Youtube channel](https://www.youtube.com/@requestyAI):
- [Requesty Discord](https://requesty.ai/discord)
````

## File: docs/providers/unbound.md
````markdown
---
sidebar_label: Unbound
---

# Using Unbound With Roo Code

Roo Code supports accessing models through [Unbound](https://getunbound.ai/), a platform that focuses on providing secure and reliable access to a variety of large language models (LLMs). Unbound acts as a gateway, allowing you to use models from providers like Anthropic and OpenAI without needing to manage multiple API keys and configurations directly.  They emphasize security and compliance features for enterprise use.

**Website:** [https://getunbound.ai/](https://getunbound.ai/)

## Creating an Account

1.  **Sign Up/Sign In:** Go to the [Unbound gateway](https://gateway.getunbound.ai).  Create an account or sign in.
2.  **Create an Application:** Go to the [Applications](https://gateway.getunbound.ai/ai-gateway-applications) page and hit the "Create Application" button.
3.  **Copy the API Key:** Copy the API key to your clipboard.

## Supported Models

Unbound allows you configure a list of supported models in your application, and Roo Code will automatically fetch the list of available models from the Unbound API.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Unbound" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Unbound API key into the "Unbound API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

## Tips and Notes

* **Security Focus:** Unbound emphasizes security features for enterprise use. If your organization has strict security requirements for AI usage, Unbound might be a good option.
````

## File: docs/providers/vertex.md
````markdown
---
sidebar_label: GCP Vertex AI
---

# Using GCP Vertex AI With Roo Code

Roo Code supports accessing models through Google Cloud Platform's Vertex AI, a managed machine learning platform that provides access to various foundation models, including Anthropic's Claude family.

**Website:** [https://cloud.google.com/vertex-ai](https://cloud.google.com/vertex-ai)

## Prerequisites

*   **Google Cloud Account:** You need an active Google Cloud Platform (GCP) account.
*   **Project:** You need a GCP project with the Vertex AI API enabled.
*   **Model Access:** You must request and be granted access to the specific Claude models on Vertex AI you want to use. See the [Google Cloud documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude#before_you_begin) for instructions.
*   **Application Default Credentials (ADC):**  Roo Code uses Application Default Credentials to authenticate with Vertex AI. The easiest way to set this up is to:
    1.  Install the Google Cloud CLI: [https://cloud.google.com/sdk/docs/install](https://cloud.google.com/sdk/docs/install)
    2.  Authenticate using: `gcloud auth application-default login`
*   **Service Account Key (Alternative):** Alternatively, you can authenticate using a Google Cloud Service Account key file. You'll need to generate this key in your GCP project. See the [Google Cloud documentation on creating service account keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys).

## Supported Models

Roo Code supports the following models through Vertex AI (based on source code):

*   **Google Gemini Models:**
    *   `gemini-2.0-flash-001`
    *   `gemini-2.5-pro-exp-03-25`
    *   `gemini-2.0-pro-exp-02-05`
    *   `gemini-2.0-flash-lite-001`
    *   `gemini-2.0-flash-thinking-exp-01-21`
    *   `gemini-1.5-flash-002`
    *   `gemini-1.5-pro-002`
*   **Anthropic Claude Models:**
    *   `claude-3-7-sonnet@20250219:thinking`
    *   `claude-3-7-sonnet@20250219`
    *   `claude-3-5-sonnet-v2@20241022`
    *   `claude-3-5-sonnet@20240620`
    *   `claude-3-5-haiku@20241022`
    *   `claude-3-opus@20240229`
    *   `claude-3-haiku@20240307`

Refer to the [Google Cloud documentation on Vertex AI Models](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models) for the most up-to-date list of available models and their IDs.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "GCP Vertex AI" from the "API Provider" dropdown.
3.  **Configure Authentication:**
    *   **If using Application Default Credentials (ADC):** No further action is needed here. ADC will be used automatically if configured correctly (see Prerequisites).
    *   **If *not* using ADC (Service Account Key):**
        *   **Option A: Paste JSON Content:** Paste the entire content of your Service Account JSON key file into the **Google Cloud Credentials** field.
        *   **Option B: Provide File Path:** Enter the absolute path to your downloaded Service Account JSON key file in the **Google Cloud Key File Path** field.
4.  **Enter Project ID:** Enter your Google Cloud Project ID.
5.  **Select Region:** Choose the region where your Vertex AI resources are located (e.g., `us-east5`).
6.  **Select Model:** Choose your desired model from the "Model" dropdown.
## Tips and Notes

*   **Permissions:**  Ensure your Google Cloud account has the necessary permissions to access Vertex AI and the specific models you want to use.
*   **Pricing:** Refer to the [Vertex AI pricing](https://cloud.google.com/vertex-ai/pricing) page for details.
````

## File: docs/providers/vscode-lm.md
````markdown
---
sidebar_label: VS Code Language Model API
---

# Using VS Code Language Model API With Roo Code

Roo Code includes *experimental* support for the [VS Code Language Model API](https://code.visualstudio.com/api/language-extensions/language-model-access). This API allows extensions to provide access to language models directly within VS Code.  This means you can potentially use models from:

*   **GitHub Copilot:** If you have a Copilot subscription and the extension installed.
*   **Other VS Code Extensions:** Any extension that implements the Language Model API.

**Important:** This integration is highly experimental and may not work as expected.  It is dependent on other extensions correctly implementing the VS Code Language Model API.

## Prerequisites

*   **VS Code:**  The Language Model API is available through VS Code (and is not currently supported by Cursor).
*   **A Language Model Provider Extension:**  You need an extension that provides a language model.  Examples include:
    *   **GitHub Copilot:**  If you have a Copilot subscription, the GitHub Copilot and GitHub Copilot Chat extensions can provide models.
    *   **Other Extensions:**  Search the VS Code Marketplace for extensions that mention "Language Model API" or "lm".  There may be other experimental extensions available.

## Configuration

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "VS Code LM API" from the "API Provider" dropdown.
3.  **Select Model:**  The "Language Model" dropdown will (eventually) list available models. The format is `vendor/family`. For example, if you have Copilot, you might see options like:
    *   `copilot - claude-3.5-sonnet`
    *   `copilot - o3-mini`
    *   `copilot - o1-ga`
    *   `copilot - gemini-2.0-flash`

## Limitations

*   **Experimental API:**  The VS Code Language Model API is still under development.  Expect changes and potential instability.
*   **Extension Dependent:**  This feature relies entirely on other extensions providing models.  Roo Code cannot directly control which models are available.
*   **Limited Functionality:**  The VS Code Language Model API may not support all the features of other API providers (e.g., image input, streaming, detailed usage information).
*   **No Direct Cost Control:**  You are subject to the pricing and terms of the extension providing the model.  Roo Code cannot directly track or limit costs.
*   **GitHub Copilot Rate Limits:** When using the VS Code LM API with GitHub Copilot, be aware that GitHub may impose rate limits on Copilot usage. These limits are controlled by GitHub, not Roo Code.


## Troubleshooting

*   **No Models Appear:**
    *   Ensure you have VS Code installed.
    *   Ensure you have a language model provider extension installed and enabled (e.g., GitHub Copilot, GitHub Copilot Chat).
    *   If using Copilot, make sure that you have sent a Copilot Chat message using the model you would like to use.
*   **Unexpected Behavior:**  If you encounter unexpected behavior, it's likely an issue with the underlying Language Model API or the provider extension.  Consider reporting the issue to the provider extension's developers.
````

## File: docs/providers/xai.md
````markdown
---
sidebar_label: xAI (Grok)
---

# Using xAI (Grok) With Roo Code

xAI is the company behind Grok, a large language model known for its conversational abilities and large context window. Grok models are designed to provide helpful, informative, and contextually relevant responses.

**Website:** [https://x.ai/](https://x.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [xAI Console](https://console.x.ai/). Create an account or sign in.
2.  **Navigate to API Keys:** Go to the API keys section in your dashboard.
3.  **Create a Key:** Click to create a new API key. Give your key a descriptive name (e.g., "Roo Code").
4.  **Copy the Key:** **Important:** Copy the API key *immediately*. You will not be able to see it again. Store it securely.

## Supported Models

Roo Code supports the following xAI Grok models:

### Grok-3 Models
* `grok-3-beta` (Default) - xAI's Grok-3 beta model with 131K context window
* `grok-3-fast-beta` - xAI's Grok-3 fast beta model with 131K context window
* `grok-3-mini-beta` - xAI's Grok-3 mini beta model with 131K context window
* `grok-3-mini-fast-beta` - xAI's Grok-3 mini fast beta model with 131K context window

### Grok-2 Models
* `grok-2-latest` - xAI's Grok-2 model - latest version with 131K context window
* `grok-2` - xAI's Grok-2 model with 131K context window
* `grok-2-1212` - xAI's Grok-2 model (version 1212) with 131K context window

### Grok Vision Models
* `grok-2-vision-latest` - xAI's Grok-2 Vision model - latest version with image support and 32K context window
* `grok-2-vision` - xAI's Grok-2 Vision model with image support and 32K context window
* `grok-2-vision-1212` - xAI's Grok-2 Vision model (version 1212) with image support and 32K context window
* `grok-vision-beta` - xAI's Grok Vision Beta model with image support and 8K context window

### Legacy Models
* `grok-beta` - xAI's Grok Beta model (legacy) with 131K context window

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "xAI" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your xAI API key into the "xAI API Key" field.
4.  **Select Model:** Choose your desired Grok model from the "Model" dropdown.

## Reasoning Capabilities

Grok 3 Mini models feature specialized reasoning capabilities, allowing them to "think before responding" - particularly useful for complex problem-solving tasks.

### Reasoning-Enabled Models

Reasoning is only supported by:
* `grok-3-mini-beta`
* `grok-3-mini-fast-beta`

The Grok 3 models `grok-3-beta` and `grok-3-fast-beta` do not support reasoning.

### Controlling Reasoning Effort

When using reasoning-enabled models, you can control how hard the model thinks with the `reasoning_effort` parameter:

* `low`: Minimal thinking time, using fewer tokens for quick responses
* `high`: Maximum thinking time, leveraging more tokens for complex problems

Choose `low` for simple queries that should complete quickly, and `high` for harder problems where response latency is less important.

### Key Features

* **Step-by-Step Problem Solving**: The model thinks through problems methodically before delivering an answer
* **Math & Quantitative Strength**: Excels at numerical challenges and logic puzzles
* **Reasoning Trace Access**: The model's thinking process is available via the `reasoning_content` field in the response completion object

## Tips and Notes

* **Context Window:** Most Grok models feature large context windows (up to 131K tokens), allowing you to include substantial amounts of code and context in your prompts.
* **Vision Capabilities:** Select vision-enabled models (`grok-2-vision-latest`, `grok-2-vision`, etc.) when you need to process or analyze images.
* **Pricing:** Pricing varies by model, with input costs ranging from $0.3 to $5.0 per million tokens and output costs from $0.5 to $25.0 per million tokens. Refer to the xAI documentation for the most current pricing information.
* **Performance Tradeoffs:** "Fast" variants typically offer quicker response times but may have higher costs, while "mini" variants are more economical but may have reduced capabilities.
````

## File: docs/update-notes/index.md
````markdown
# Update Notes

This section contains notes about recent updates to Roo Code, listed by version number.

## Version 3.14

*   [3.14](/update-notes/v3.14) (2025-04-24)
*   [3.14.3](/update-notes/v3.14.3) (2025-04-25)
*   [3.14.2](/update-notes/v3.14.2) (2025-04-24)
*   [3.14.1](/update-notes/v3.14.1) (2025-04-24)
*   [3.14.0](/update-notes/v3.14.0) (2025-04-23)

## Version 3.13

*   [3.13.2](/update-notes/v3.13.2) (2025-04-18)
*   [3.13.1](/update-notes/v3.13.1) (2025-04-18)
*   [3.13.0](/update-notes/v3.13.0) (2025-04-17)

## Version 3.12

*   [3.12.2](/update-notes/v3.12.2) (2025-04-16)
*   [3.12.1](/update-notes/v3.12.1) (2025-04-16)
*   [3.12.0](/update-notes/v3.12.0) (2025-04-15)

## Version 3.11

*   [3.11.17](/update-notes/v3.11.17) (2025-04-14)
*   [3.11.16](/update-notes/v3.11.16) (2025-04-14)
*   [3.11.15](/update-notes/v3.11.15) (2025-04-13)
*   [3.11.14](/update-notes/v3.11.14) (2025-04-11)
*   [3.11.13](/update-notes/v3.11.13) (2025-04-11)
*   [3.11.12](/update-notes/v3.11.12) (2025-04-09)
*   [3.11.11](/update-notes/v3.11.11) (2025-04-09)
*   [3.11.10](/update-notes/v3.11.10) (2025-04-08)
*   [3.11.9](/update-notes/v3.11.9) (2025-04-07)
*   [3.11.8](/update-notes/v3.11.8) (2025-04-05)
*   [3.11.7](/update-notes/v3.11.7) (2025-04-04)
*   [3.11.6](/update-notes/v3.11.6) (2025-04-04)
*   [3.11.5](/update-notes/v3.11.5) (2025-04-03)
*   [3.11.3](/update-notes/v3.11.3) (2025-03-31)
*   [3.11.2](/update-notes/v3.11.2) (2025-03-31)
*   [3.11.1](/update-notes/v3.11.1) (2025-03-30)
*   [3.11.0](/update-notes/v3.11) (2025-03-30)

## Version 3.10

*   [3.10.5](/update-notes/v3.10.5) (2025-03-25)
*   [3.10.4](/update-notes/v3.10.4) (2025-03-25)
*   [3.10.3](/update-notes/v3.10.3) (2025-03-23)
*   [3.10.2](/update-notes/v3.10.2) (2025-03-21)
*   [3.10.1](/update-notes/v3.10.1) (2025-03-20)
*   [3.10.0](/update-notes/v3.10.0) (2025-03-20)

## Version 3.9

*   [3.9.2](/update-notes/v3.9.2) (2025-03-19)
*   [3.9.1](/update-notes/v3.9.1) (2025-03-18)
*   [3.9.0](/update-notes/v3.9.0) (2025-03-18)

## Version 3.8

*   [3.8.6](/update-notes/v3.8.6) (2025-03-13)
*   [3.8.5](/update-notes/v3.8.5) (2025-03-12)
*   [3.8.4](/update-notes/v3.8.4) (2025-03-09)
*   [3.8.3](/update-notes/v3.8.3) (2025-03-09)
*   [3.8.2](/update-notes/v3.8.2) (2025-03-08)
*   [3.8.1](/update-notes/v3.8.1) (2025-03-07)
*   [3.8.0](/update-notes/v3.8.0) (2025-03-07)

## Version 3.7

*   [3.7.12](/update-notes/v3.7.12) (2025-03-03)
*   [3.7.11](/update-notes/v3.7.11) (2025-03-02)
*   [3.7.10](/update-notes/v3.7.10) (2025-03-01)
*   [3.7.9](/update-notes/v3.7.9) (2025-03-01)
*   [3.7.8](/update-notes/v3.7.8) (2025-02-27)
*   [3.7.7](/update-notes/v3.7.7) (2025-02-27)
*   [3.7.6](/update-notes/v3.7.6) (2025-02-26)
*   [3.7.5](/update-notes/v3.7.5) (2025-02-26)
*   [3.7.4](/update-notes/v3.7.4) (2025-02-25)
*   [3.7.3](/update-notes/v3.7.3) (2025-02-25)
*   [3.7.2](/update-notes/v3.7.2) (2025-02-24)
*   [3.7.1](/update-notes/v3.7.1) (2025-02-24)
*   [3.7.0](/update-notes/v3.7.0) (2025-02-24)

## Version 3.3

*   [3.3.26](/update-notes/v3.3.26) (2025-02-27)
*   [3.3.25](/update-notes/v3.3.25) (2025-02-21)
*   [3.3.24](/update-notes/v3.3.24) (2025-02-20)
*   [3.3.23](/update-notes/v3.3.23) (2025-02-20)
*   [3.3.22](/update-notes/v3.3.22) (2025-02-20)
*   [3.3.21](/update-notes/v3.3.21) (2025-02-17)
*   [3.3.20](/update-notes/v3.3.20) (2025-02-14)
*   [3.3.19](/update-notes/v3.3.19) (2025-02-12)
*   [3.3.18](/update-notes/v3.3.18) (2025-02-11)
*   [3.3.17](/update-notes/v3.3.17) (2025-02-09)
*   [3.3.16](/update-notes/v3.3.16) (2025-02-09)
*   [3.3.15](/update-notes/v3.3.15) (2025-02-08)
*   [3.3.14](/update-notes/v3.3.14)
*   [3.3.13](/update-notes/v3.3.13)
*   [3.3.12](/update-notes/v3.3.12)
*   [3.3.11](/update-notes/v3.3.11)
*   [3.3.10](/update-notes/v3.3.10)
*   [3.3.9](/update-notes/v3.3.9)
*   [3.3.8](/update-notes/v3.3.8)
*   [3.3.7](/update-notes/v3.3.7)
*   [3.3.6](/update-notes/v3.3.6)
*   [3.3.5](/update-notes/v3.3.5)
*   [3.3.4](/update-notes/v3.3.4)
*   [3.3.3](/update-notes/v3.3.3)
*   [3.3.2](/update-notes/v3.3.2)
*   [3.3.1](/update-notes/v3.3.1)
*   [3.3.0](/update-notes/v3.3.0)

## Version 3.2

*   [3.2.8](/update-notes/v3.2.8)
*   [3.2.7](/update-notes/v3.2.7)
*   [3.2.6](/update-notes/v3.2.6)
*   [3.2.5](/update-notes/v3.2.5)
*   [3.2.4](/update-notes/v3.2.4)
*   [3.2.3](/update-notes/v3.2.3)
*   [3.2.0](/update-notes/v3.2.0) (Includes 3.2.1, 3.2.2)

## Version 3.1

*   [3.1.7](/update-notes/v3.1.7)
*   [3.1.6](/update-notes/v3.1.6)
*   [3.1.4](/update-notes/v3.1.4) (Includes 3.1.5 fix)
*   [3.1.3](/update-notes/v3.1.3)
*   [3.1.2](/update-notes/v3.1.2)
*   [3.1.1](/update-notes/v3.1.1)
*   [3.1.0](/update-notes/v3.1.0)

## Version 3.0

*   [3.0.3](/update-notes/v3.0.3)
*   [3.0.2](/update-notes/v3.0.2)
*   [3.0.1](/update-notes/v3.0.1)
*   [3.0.0](/update-notes/v3.0.0)

## Version 2.2

*   [2.2.46](/update-notes/v2.2.46)
*   [2.2.45](/update-notes/v2.2.45)
*   [2.2.44](/update-notes/v2.2.44)
*   [2.2.43](/update-notes/v2.2.43)
*   [2.2.42](/update-notes/v2.2.42)
*   [2.2.41](/update-notes/v2.2.41)
*   [2.2.40](/update-notes/v2.2.40)
*   [2.2.39](/update-notes/v2.2.39)
*   [2.2.38](/update-notes/v2.2.38)
*   [2.2.36](/update-notes/v2.2.36) (Includes 2.2.37)
*   [2.2.35](/update-notes/v2.2.35)
*   [2.2.34](/update-notes/v2.2.34)
*   [2.2.33](/update-notes/v2.2.33)
*   [2.2.32](/update-notes/v2.2.32)
*   [2.2.31](/update-notes/v2.2.31)
*   [2.2.30](/update-notes/v2.2.30)
*   [2.2.29](/update-notes/v2.2.29)
*   [2.2.28](/update-notes/v2.2.28)
*   [2.2.27](/update-notes/v2.2.27)
*   [2.2.26](/update-notes/v2.2.26)
*   [2.2.25](/update-notes/v2.2.25)
*   [2.2.24](/update-notes/v2.2.24)
*   [2.2.23](/update-notes/v2.2.23)
*   [2.2.22](/update-notes/v2.2.22)
*   [2.2.21](/update-notes/v2.2.21)
*   [2.2.20](/update-notes/v2.2.20)
*   [2.2.19](/update-notes/v2.2.19)
*   [2.2.18](/update-notes/v2.2.18)
*   [2.2.17](/update-notes/v2.2.17)
*   [2.2.16](/update-notes/v2.2.16)
*   [2.2.14](/update-notes/v2.2.14) (Includes 2.2.15)
*   [2.2.13](/update-notes/v2.2.13)
*   [2.2.12](/update-notes/v2.2.12)
*   [2.2.11](/update-notes/v2.2.11)
*   [2.2.6](/update-notes/v2.2.6) (Includes 2.2.7-2.2.10)
*   [2.2.5](/update-notes/v2.2.5)
*   [2.2.4](/update-notes/v2.2.4)
*   [2.2.3](/update-notes/v2.2.3)
*   [2.2.2](/update-notes/v2.2.2)
*   [2.2.1](/update-notes/v2.2.1)
*   [2.2.0](/update-notes/v2.2.0)

## Version 2.1

*   [2.1.21](/update-notes/v2.1.21)
*   [2.1.20](/update-notes/v2.1.20)
*   [2.1.19](/update-notes/v2.1.19)
*   [2.1.18](/update-notes/v2.1.18)
*   [2.1.17](/update-notes/v2.1.17)
*   [2.1.16](/update-notes/v2.1.16)
*   [2.1.15](/update-notes/v2.1.15)
*   [2.1.14](/update-notes/v2.1.14)
*   [2.1.13](/update-notes/v2.1.13)
*   [2.1.12](/update-notes/v2.1.12)
*   [2.1.11](/update-notes/v2.1.11)
*   [2.1.10](/update-notes/v2.1.10)
*   [2.1.9](/update-notes/v2.1.9)
*   [2.1.8](/update-notes/v2.1.8)
*   [2.1.7](/update-notes/v2.1.7)
*   [2.1.6](/update-notes/v2.1.6)
*   [2.1.5](/update-notes/v2.1.5)
*   [2.1.4](/update-notes/v2.1.4)
*   [2.1.3](/update-notes/v2.1.3)
*   [2.1.2](/update-notes/v2.1.2)
````

## File: docs/update-notes/v2.1.10.md
````markdown
# Roo Code 2.1.10 Release Notes

This release adds optional sound effects.

## General and QOL Improvements

*   Added optional sound effects for various actions. (thanks HeavenOSK!)
````

## File: docs/update-notes/v2.1.11.md
````markdown
# Roo Code 2.1.11 Release Notes

This release adds support for OpenRouter context compression.

## Provider Updates

*   Added support for OpenRouter context compression. (thanks lloydchang!)
````

## File: docs/update-notes/v2.1.12.md
````markdown
# Roo Code 2.1.12 Release Notes

This release incorporates experimental support for editing through diffs.

## Experimental Features

*   Added experimental support for editing files using diffs. (thanks JoziGila!)
````

## File: docs/update-notes/v2.1.13.md
````markdown
# Roo Code 2.1.13 Release Notes

This patch release fixes an issue with sound effect settings.

## Bug Fixes

*   Fixed an issue where sound effects were not respecting the corresponding setting.
````

## File: docs/update-notes/v2.1.14.md
````markdown
# Roo Code 2.1.14 Release Notes

This release includes fixes and improvements for diff editing.

## Improvements & Fixes

*   Fixed a bug where diffs were not being applied correctly.
*   Attempted using Aider's unified diff prompt for potentially better results.
*   Added logic to automatically reject `write_to_file` commands that result in truncated output when diff editing is enabled.
````

## File: docs/update-notes/v2.1.15.md
````markdown
# Roo Code 2.1.15 Release Notes

This release adds support for an experimental Gemini model and clarifies diff editing status.

## Updates

*   Added support for `gemini-exp-1206`. (thanks dbasclpy!)
*   Clarified that the diff editing feature is highly experimental.
````

## File: docs/update-notes/v2.1.16.md
````markdown
# Roo Code 2.1.16 Release Notes

This release adds the ability to copy prompts from the history screen.

## General and QOL Improvements

*   Added functionality to allow copying prompts from the task history view.
````

## File: docs/update-notes/v2.1.17.md
````markdown
# Roo Code 2.1.17 Release Notes

This release updates the experimental diff editing strategy.

## Experimental Features

*   Switched the experimental diff editing mode to use search/replace diffs.
````

## File: docs/update-notes/v2.1.18.md
````markdown
# Roo Code 2.1.18 Release Notes

This patch release fixes a diff editing bug related to line endings.

## Bug Fixes

*   Fixed a diff editing bug to correctly handle Windows line endings (`\r\n`).
````

## File: docs/update-notes/v2.1.19.md
````markdown
# Roo Code 2.1.19 Release Notes

This release improves error handling for diff editing.

## General and QOL Improvements

*   Implemented better error handling for the experimental diff editing feature.
````

## File: docs/update-notes/v2.1.2.md
````markdown
# Roo Code 2.1.2 Release Notes

This release adds support for auto-approval and `.clinerules`.

## Feature Highlights

*   Added support for auto-approval of write operations and command execution via settings.
*   Added support for `.clinerules` files for custom instructions.
````

## File: docs/update-notes/v2.1.20.md
````markdown
# Roo Code 2.1.20 Release Notes

This release adds support for Gemini 2.0.

## Provider Updates

*   Added support for Gemini 2.0 models.
````

## File: docs/update-notes/v2.1.21.md
````markdown
# Roo Code 2.1.21 Release Notes

This release improves the chat input area.

## General and QOL Improvements

*   Increased the size of the chat text input area.
*   Added the ability to drag images directly into the text area.
````

## File: docs/update-notes/v2.1.3.md
````markdown
# Roo Code 2.1.3 Release Notes

This release adds an option for browser action auto-approval.

## General and QOL Improvements

*   Added the `alwaysAllowBrowser` setting to allow browser actions without user approval when set to true.
````

## File: docs/update-notes/v2.1.4.md
````markdown
# Roo Code 2.1.4 Release Notes

This release enables side-by-side running with the original Cline extension.

## General and QOL Improvements

*   Roo Code can now be installed and run side-by-side with the original Cline extension.
````

## File: docs/update-notes/v2.1.5.md
````markdown
# Roo Code 2.1.5 Release Notes

This patch release fixes a bug in browser action approval.

## Bug Fixes

*   Fixed a bug related to the approval flow for browser actions.
````

## File: docs/update-notes/v2.1.6.md
````markdown
# Roo Code 2.1.6 Release Notes

This release expands editor compatibility.

## General and QOL Improvements

*   Roo Code can now run in all VSCode-compatible editors (e.g., VSCodium, Cursor).
````

## File: docs/update-notes/v2.1.7.md
````markdown
# Roo Code 2.1.7 Release Notes

This release updates extension metadata.

## Updates

*   Updated the extension icon and marketplace metadata.
````

## File: docs/update-notes/v2.1.8.md
````markdown
# Roo Code 2.1.8 Release Notes

This release adds configuration for command approval.

## General and QOL Improvements

*   Added the ability to configure which commands are allowed to execute without requiring user approval.
````

## File: docs/update-notes/v2.1.9.md
````markdown
# Roo Code 2.1.9 Release Notes

This release adds instructions for `.clinerules` to the settings screen.

## General and QOL Improvements

*   Added instructions for using `.clinerules` files directly on the settings screen.
````

## File: docs/update-notes/v2.2.0.md
````markdown
# Roo Code 2.2.0 Release Notes

This release introduces support for the Model Context Protocol (MCP).

## Feature Highlights

*   **Model Context Protocol (MCP) Support:** Added support for MCP, enabling Roo Code to use custom external tools and services (e.g., web search, GitHub tools).
*   **MCP Server Management:** Added an MCP server management tab (accessible via the server icon) for configuring and managing connections.
*   **Dynamic MCP Server Creation:** Added the ability for Roo Code to dynamically create new MCP servers based on user requests.
````

## File: docs/update-notes/v2.2.1.md
````markdown
# Roo Code 2.2.1 Release Notes

This patch release fixes an indentation bug in diff editing.

## Bug Fixes

*   Fixed an indentation bug related to the experimental diff editing feature.
````

## File: docs/update-notes/v2.2.11.md
````markdown
# Roo Code 2.2.11 Release Notes

This release adds a debugging option for diff editing.

## General and QOL Improvements

*   Added a settings checkbox for verbose diff debugging output.
````

## File: docs/update-notes/v2.2.12.md
````markdown
# Roo Code 2.2.12 Release Notes

This release improves support for specific diff types.

## General and QOL Improvements

*   Improved support for diffs involving only deletions or only insertions.
````

## File: docs/update-notes/v2.2.13.md
````markdown
# Roo Code 2.2.13 Release Notes

This patch release includes fixes for sound effects and diff application.

## Bug Fixes

*   Fixed issues related to sound effect playback and applying diff edits.
````

## File: docs/update-notes/v2.2.14.md
````markdown
# Roo Code 2.2.14 & 2.2.15 Release Notes

These releases improve the robustness of diff editing.

## Improvements & Fixes

*   Made diff editing more robust against transient errors and fixed related bugs.
````

## File: docs/update-notes/v2.2.16.md
````markdown
# Roo Code 2.2.16 Release Notes

This release adds support for additional Bedrock models.

## Provider Updates

*   Added support for Amazon Titan and Meta Llama models (3, 3.1, 3.2) via AWS Bedrock, unifying Bedrock calls. (thanks Premshay!)
````

## File: docs/update-notes/v2.2.17.md
````markdown
# Roo Code 2.2.17 Release Notes

This release improves the auto-execution of chained commands.

## General and QOL Improvements

*   Improved the regular expression used for detecting and auto-executing chained commands.
````

## File: docs/update-notes/v2.2.18.md
````markdown
# Roo Code 2.2.18 Release Notes

This release includes a targeted styling fix for Gemini chats.

## Fixes

*   Applied a more targeted styling fix for chat messages when using Gemini models.
````

## File: docs/update-notes/v2.2.19.md
````markdown
# Roo Code 2.2.19 Release Notes

This release adds an experimental option for the browser tool.

## Experimental Features

*   Added an experimental option to use a larger browser viewport size (1280x800).
````

## File: docs/update-notes/v2.2.2.md
````markdown
# Roo Code 2.2.2 Release Notes

This release adds auto-approval options for MCP tools.

## General and QOL Improvements

*   Added checkboxes to auto-approve specific MCP tools.
````

## File: docs/update-notes/v2.2.20.md
````markdown
# Roo Code 2.2.20 Release Notes

This release makes fuzzy diff matching configurable.

## General and QOL Improvements

*   Made the fuzzy diff matching threshold configurable via settings (defaulted to off/100% precision).
````

## File: docs/update-notes/v2.2.21.md
````markdown
# Roo Code 2.2.21 Release Notes

This release improves the detection of truncated file writes.

## General and QOL Improvements

*   Improved detection of incomplete file writes by taking the predicted file length into account.
````

## File: docs/update-notes/v2.2.22.md
````markdown
# Roo Code 2.2.22 Release Notes

This release adds support for a new experimental Gemini model.

## Provider Updates

*   Added the `gemini-2.0-flash-thinking-exp-1219` model.
````

## File: docs/update-notes/v2.2.23.md
````markdown
# Roo Code 2.2.23 Release Notes

This patch release fixes context window information for a specific Gemini model.

## Fixes

*   Corrected the context window size information for the `gemini-2.0-flash-thinking-exp-1219` model. (thanks student20880!)
````

## File: docs/update-notes/v2.2.24.md
````markdown
# Roo Code 2.2.24 Release Notes

This release changes the default setting for diff editing.

## Updates

*   Diff editing ("Fast Edits") is now enabled by default for new installations.
````

## File: docs/update-notes/v2.2.25.md
````markdown
# Roo Code 2.2.25 Release Notes

This release adds a preferred language setting.

## Feature Highlights

*   Added a preferred language dropdown in the settings.
````

## File: docs/update-notes/v2.2.26.md
````markdown
# Roo Code 2.2.26 Release Notes

This release includes tweaks to preferred language handling.

## General and QOL Improvements

*   Made adjustments to the preferred language setting logic. (thanks yongjer!)
````

## File: docs/update-notes/v2.2.27.md
````markdown
# Roo Code 2.2.27 Release Notes

This release adds the current time to the system prompt and improves browser screenshot quality.

## General and QOL Improvements

*   Added the current time to the system prompt context.
*   Improved the quality of browser screenshots taken by the browser tool. (thanks libertyteeth!)
````

## File: docs/update-notes/v2.2.28.md
````markdown
# Roo Code 2.2.28 Release Notes

This release improves the reliability of @-mention file suggestions.

## General and QOL Improvements

*   Used `createFileSystemWatcher` for more reliable updates to the list of files available for @-mention suggestions.
````

## File: docs/update-notes/v2.2.29.md
````markdown
# Roo Code 2.2.29 Release Notes

This release adds a configurable delay for auto-writes.

## General and QOL Improvements

*   Added a configurable delay after auto-approved file writes to allow diagnostics (like linters) time to process changes.
````

## File: docs/update-notes/v2.2.3.md
````markdown
# Roo Code 2.2.3 Release Notes

This release includes visual improvements to the settings screen.

## General and QOL Improvements

*   Cleaned up the layout and presentation of the settings screen.
````

## File: docs/update-notes/v2.2.30.md
````markdown
# Roo Code 2.2.30 Release Notes

This patch release fixes a bug related to command auto-approval.

## Bug Fixes

*   Fixed a bug with the auto-approval logic for command execution.
````

## File: docs/update-notes/v2.2.31.md
````markdown
# Roo Code 2.2.31 Release Notes

This release improves auto-approval logic for commands.

## General and QOL Improvements

*   Improved logic for auto-approving chained commands (e.g., `cd some-dir && npm install`).
````

## File: docs/update-notes/v2.2.32.md
````markdown
# Roo Code 2.2.32 Release Notes

This release includes internal efficiency improvements.

## General and QOL Improvements

*   Implemented a more efficient workspace tracker.
````

## File: docs/update-notes/v2.2.33.md
````markdown
# Roo Code 2.2.33 Release Notes

This release adds the "Enhance Prompt" feature and improves OpenAI-compatible provider support.

## Feature Highlights

*   Added an "Enhance Prompt" button (initially for OpenRouter models only).
*   Added support for listing available models for OpenAI-compatible providers. (thanks samhvw8!)
````

## File: docs/update-notes/v2.2.34.md
````markdown
# Roo Code 2.2.34 Release Notes

This release adds support for the DeepSeek provider.

## Provider Updates

*   Added the DeepSeek provider.
````

## File: docs/update-notes/v2.2.35.md
````markdown
# Roo Code 2.2.35 Release Notes

This release adds more control over browser tool actions.

## General and QOL Improvements

*   Allowed selection of multiple browser viewport sizes.
*   Added the ability to adjust browser screenshot quality.
````

## File: docs/update-notes/v2.2.36.md
````markdown
# Roo Code 2.2.36 & 2.2.37 Release Notes

These releases add the ability to delete user messages.

## General and QOL Improvements

*   Added a button to delete individual user messages from the chat history.
````

## File: docs/update-notes/v2.2.38.md
````markdown
# Roo Code 2.2.38 Release Notes

This release adds a setting to control terminal output context.

## General and QOL Improvements

*   Added a setting to control the number of terminal output lines passed to the model when executing commands.
````

## File: docs/update-notes/v2.2.39.md
````markdown
# Roo Code 2.2.39 Release Notes

This release adds a toggle for MCP prompt sections.

## General and QOL Improvements

*   Added a toggle setting to enable/disable the MCP-related sections of the system prompt. (thanks daniel-lxs!)
````

## File: docs/update-notes/v2.2.4.md
````markdown
# Roo Code 2.2.4 Release Notes

This release includes prompt adjustments for diff editing.

## General and QOL Improvements

*   Tweaked the system prompt to encourage the use of diff edits when the feature is enabled.
````

## File: docs/update-notes/v2.2.40.md
````markdown
# Roo Code 2.2.40 Release Notes

This release adds support for the Glama provider.

## Provider Updates

*   Added the Glama provider. (thanks punkpeye!)
````

## File: docs/update-notes/v2.2.41.md
````markdown
# Roo Code 2.2.41 Release Notes

This release adds a streaming option for OpenAI-compatible providers.

## General and QOL Improvements

*   Added a checkbox setting to disable response streaming for OpenAI-compatible providers.
````

## File: docs/update-notes/v2.2.42.md
````markdown
# Roo Code 2.2.42 Release Notes

This release adds Git information to context mentions.

## General and QOL Improvements

*   Added a Git section to the @-mention context suggestions, providing quick access to branch and repository information.
````

## File: docs/update-notes/v2.2.43.md
````markdown
# Roo Code 2.2.43 Release Notes

This release adds message deletion options.

## General and QOL Improvements

*   Added the ability to delete single messages or all subsequent messages within a task.
````

## File: docs/update-notes/v2.2.44.md
````markdown
# Roo Code 2.2.44 Release Notes

This release adds automatic retries for failed API requests.

## General and QOL Improvements

*   Implemented automatic retries for failed API requests with a configurable delay. (thanks RaySinner!)
````

## File: docs/update-notes/v2.2.45.md
````markdown
# Roo Code 2.2.45 Release Notes

This release introduces API Configuration Profiles.

## Feature Highlights

*   **API Configuration Profiles:** Added the ability to save different API configurations (provider, model, API key, other settings) as named profiles, allowing quick switching between setups. (thanks samhvw8!)
````

## File: docs/update-notes/v2.2.46.md
````markdown
# Roo Code 2.2.46 Release Notes

This patch release adjusts @-mention parsing.

## Fixes

*   Ensured @-mentions are only parsed in user input, not within file contents included in the context.
````

## File: docs/update-notes/v2.2.5.md
````markdown
# Roo Code 2.2.5 Release Notes

This release adds the ability to enable/disable MCP servers.

## General and QOL Improvements

*   Added the ability to enable or disable individual MCP servers in the settings.
````

## File: docs/update-notes/v2.2.6.md
````markdown
# Roo Code 2.2.6 - 2.2.10 Release Notes

These releases included fixes for search/replace diffs.

## Bug Fixes

*   Included multiple fixes related to search/replace diff functionality.
````

## File: docs/update-notes/v3.0.0.md
````markdown
# Roo Code 3.0.0 Release Notes

This major release introduces Chat Modes!

## Feature Highlights

*   **Chat Modes:** Added distinct modes (Code, Architect, Ask) allowing you to tailor interactions for specific tasks like coding, system design, or general questions. Different API configuration profiles can be assigned to each mode.
````

## File: docs/update-notes/v3.0.1.md
````markdown
# Roo Code 3.0.1 Release Notes

This patch release fixes a link and a minor visual glitch.

## Fixes

*   Fixed the community Reddit link.
*   Fixed a small visual glitch in the chat input area.
````

## File: docs/update-notes/v3.0.2.md
````markdown
# Roo Code 3.0.2 Release Notes

This patch release includes minor visual adjustments.

## Fixes

*   Applied minor tweaks to button alignment in the chat input area.
````

## File: docs/update-notes/v3.0.3.md
````markdown
# Roo Code 3.0.3 Release Notes

This patch release updates the minimum required VS Code version.

## Updates

*   Updated required VS Code engine version to `^1.84.0` to match upstream dependencies.
````

## File: docs/update-notes/v3.1.0.md
````markdown
# Roo Code 3.1.0 Release Notes

This release introduces customization for chat mode prompts and instructions, along with an improved "Enhance Prompt" feature.

## Feature Highlights

*   **Customizable Mode Prompts:** Added the ability to customize the role definition and instructions for each chat mode (Code, Architect, Ask) via the Prompts tab or mode-specific `.clinerules-mode` files.
*   **Revamped Enhance Prompt:** The "Enhance Prompt" button now works with any provider and API configuration, allowing crafting messages with fully customizable prompts.
*   Added a button to copy Markdown content from chat messages.
````

## File: docs/update-notes/v3.1.1.md
````markdown
# Roo Code 3.1.1 Release Notes

This patch release includes visual fixes for light themes.

## Fixes

*   Applied visual fixes to the chat input and settings UI elements for light+ themes.
````

## File: docs/update-notes/v3.1.2.md
````markdown
# Roo Code 3.1.2 Release Notes

This patch release adds experimental Copilot support, fuzzy search improvements, and fixes.

## Updates & Fixes

*   Added experimental support for VS Code Language Models, including Copilot. (thanks RaySinner, julesmons!)
*   Fixed a bug related to configuration profile switching. (thanks samhvw8!)
*   Improved fuzzy search in @-mentions, history, and model lists. (thanks samhvw8!)
*   Added PKCE support for the Glama provider. (thanks punkpeye!)
*   Used 'developer' message role for `o1` system prompt.
````

## File: docs/update-notes/v3.1.3.md
````markdown
# Roo Code 3.1.3 Release Notes

This patch release adds the auto-approve chat bar and fixes an integration bug.

## Updates & Fixes

*   Added the auto-approve chat bar for quicker action approvals. (thanks Cline!)
*   Fixed a bug with the VS Code Language Models integration.
````

## File: docs/update-notes/v3.1.4.md
````markdown
# Roo Code 3.1.4 & 3.1.5 Release Notes

These patch releases included bug fixes for the auto-approve menu.

## Bug Fixes

*   Addressed issues with the auto-approve menu functionality.
````

## File: docs/update-notes/v3.1.6.md
````markdown
# Roo Code 3.1.6 Release Notes

This patch release adds Mistral provider support and fixes a configuration saving bug.

## Updates & Fixes

*   Added support for the Mistral provider. (thanks Cline!)
*   Fixed a bug with saving VSCode Language Models (Copilot) configuration profiles. (thanks samhvw8!)
````

## File: docs/update-notes/v3.1.7.md
````markdown
# Roo Code 3.1.7 Release Notes

This patch release adds DeepSeek-R1 support and includes fixes for configuration profiles.

## Updates & Fixes

*   Added support for DeepSeek-R1 models. (thanks philipnext!)
*   Enabled an experimental new unified diff algorithm via settings. (thanks daniel-lxs!)
*   Included additional fixes for API configuration profiles. (thanks samhvw8!)
````

## File: docs/update-notes/v3.10.0.md
````markdown
# Roo Code 3.10.0 Release Notes (2025-03-20)

This release introduces suggested responses, improved large file handling, and enhanced @-mention capabilities.

## Feature Highlights

*   **Suggested Responses:** Added options for quick responses when Roo asks questions. Pick from a list instead of typing everything out. (thanks samhvw8!)
*   **Large File Support:** Reading large files is now more efficient with chunked loading, allowing work with files that previously caused context issues. (thanks samhvw8!)
*   **Improved @-mentions:** Completely redesigned file and folder lookup for @-mentions, using server-side processing with gitignore support for more accurate results when referencing workspace files.

## Bug Fixes & Improvements

*   Made suggested responses optional to prevent conflicts with overridden system prompts.
*   Fixed MCP error logging. (thanks aheizi!)
*   Fixed changelog formatting in GitHub Releases. (thanks pdecat!)
*   Fixed bug causing task history loss when using WSL.
*   Consolidated code actions into a submenu. (thanks samhvw8!)
*   Improved `search_files` tool formatting and logic. (thanks KJ7LNW!)
*   Added fake provider for integration tests. (thanks franekp!)
*   Reflected Cross-region inference option in ap-xx region. (thanks Yoshino-Yukitaro!)
````

## File: docs/update-notes/v3.10.1.md
````markdown
# Roo Code 3.10.1 Release Notes (2025-03-20)

This patch release addresses compatibility with custom system prompts.

## Updates

*   Made suggested responses optional to prevent conflicts with overridden system prompts.
````

## File: docs/update-notes/v3.10.2.md
````markdown
# Roo Code 3.10.2 Release Notes (2025-03-21)

This patch release includes fixes for context mentions, internationalization, and model token limits.

## Bug Fixes

*   Addressed issues with context mentions on Windows.
*   Corrected German translations. (thanks cannuri!)
*   Fixed internationalization issues with the telemetry banner.
*   Ensured Sonnet 3.7 non-thinking mode correctly uses 8192 max output tokens.
````

## File: docs/update-notes/v3.10.3.md
````markdown
# Roo Code 3.10.3 Release Notes (2025-03-23)

This release focuses on enhancing large file handling and includes numerous bug fixes.

## Feature Highlights

*   Enhanced partial file reads with the ability to explicitly request full file reads when needed, custom chunk size controls, and clearer instructions.

## General Improvements

*   Updated the welcome page to provide 1-click OAuth flows with LLM routers. (thanks dtrugman!)
*   Switched to a more direct method of tracking OpenRouter tokens/spend.

## Bug Fixes

*   Fixed issues where questions and suggestions weren't showing up for non-streaming models and were hard to read in some themes.
*   Addressed various issues and made improvements to the experimental multi-block diff feature. (thanks KJ7LNW!)
*   Fixed opacity of drop-down menus in settings. (thanks KJ7LNW!)
*   Fixed bugs related to reading and mentioning binary files like PDFs.
*   Corrected pricing information for OpenRouter free models. (thanks Jdo300!)
*   Fixed an issue with unit tests on Windows. (thanks diarmidmackenzie!)
*   Resolved a `maxTokens` issue for the Outbound provider. (thanks pugazhendhi-m!)
*   Fixed a line number issue associated with partial file reads. (thanks samhvw8!)
````

## File: docs/update-notes/v3.10.4.md
````markdown
# Roo Code 3.10.4 Release Notes (2025-03-25)

This release brings new provider support, UI enhancements, and various improvements and fixes.

## Provider & Model Support

*   Added Gemini 2.5 Pro model to Google Gemini Provider. (thanks samsilveira!)
*   Added R1 support checkbox to OpenAI compatible provider settings for QWQ models. (thanks feifei325!)
*   Added Bedrock support for `application-inference-profile`. (thanks maekawataiki!)

## UI/UX Improvements

*   Updated the chat text area UX. (thanks chadgauth!)
*   Improved display of OpenRouter "overloaded" error messages.

## General Improvements & Fixes

*   Added a "New Task" command to the Command Palette. (thanks qdaxb!)
*   Supported test declarations in TypeScript tree-sitter queries. (thanks KJ7LNW!)
*   Enabled reading image responses from MCP calls. (thanks nevermorec!)
*   Supported a custom storage path for tasks. (thanks Chenjiayuan195!)
*   Dynamically fetched instructions for creating/editing custom modes and MCP servers. (thanks diarmidmackenzie!)
*   Renamed and migrated global MCP and modes files. (thanks StevenTCramer!)
*   Added `taskCreated` event to API and subscribed to cline events earlier. (thanks wkordalski!)
*   Added `watchPaths` option to McpHub for file change detection. (thanks 01Rian!)
*   Added settings to control auto-approval for reads and writes outside the workspace.
*   Fixed links in the README documentation. (thanks kvokka!)
*   Fixed numeric formatting suffix internationalization. (thanks feifei325!)
*   Fixed open tab support in context mention suggestions. (thanks aheizi!)
*   Fixed browser tool visibility in system prompt preview. (thanks cannuri!)
*   Fixed the `supportsPromptCache` value for OpenAI models. (thanks PeterDaveHello!)
````

## File: docs/update-notes/v3.10.5.md
````markdown
# Roo Code 3.10.5 Release Notes (2025-03-25)

This patch release includes model updates and internal logic fixes.

## Updates & Fixes

*   Updated the maximum output tokens for `gemini-2.5-pro-03-25` to 65,536. (thanks linegel!)
*   Fixed internal logic related to task completion events.
````

## File: docs/update-notes/v3.11.1.md
````markdown
# Roo Code 3.11.1 Release Notes (2025-03-30)

This patch release includes minor updates to provider configurations.

## General and QOL Improvements

*   **Provider Profiles Schema:** The JSON schema validation for provider profiles has been relaxed. This provides greater flexibility when configuring custom or less common provider setups and reduces potential validation errors for valid configurations. Telemetry related to provider usage has also been added to help diagnose issues.
````

## File: docs/update-notes/v3.11.10.md
````markdown
# Roo Code 3.11.10 Release Notes (2025-04-08)

This patch release includes bug fixes for rules directories and provider caching, along with improvements to command output handling, translations, and code cleanup.

## Bug Fixes

*   Fixed bug where nested `.roo/rules` directories are not respected properly (thanks @taisukeoe!).
*   Fixed cache usage tracking for OpenAI-compatible providers.

## General and QOL Improvements

*   Handled long command output more efficiently in the chat row (thanks @samhvw8!).
*   Added custom translation instructions for zh-CN (thanks @System233!).
*   Code cleanup after making rate-limits per-profile (thanks @ross!).
````

## File: docs/update-notes/v3.11.11.md
````markdown
# Roo Code 3.11.11 Release Notes (2025-04-09)

This release includes fixes for UI interactions, improved OpenAI-compatible provider options, parser updates, and other enhancements.

## Bug Fixes

*   Fix highlighting interaction with mode/profile dropdowns (thanks atlasgong!)
*   Fixes to terminal working directory logic (thanks KJ7LNW!)

## Improvements

*   Add the ability to set Host header and legacy OpenAI API in the OpenAI-compatible provider for better proxy support
*   Improvements to TypeScript, C++, Go, Java, Python tree-sitter parsers (thanks KJ7LNW!)
*   Improve `readFileTool` XML output format (thanks KJ7LNW!)
*   Follow symlinked rules files/directories to allow for more flexible rule setups
*   Focus Roo Code in the sidebar when running tasks in the sidebar via the API
*   Improve subtasks UI

## Provider Updates

*   Add o1-pro support (thanks arthurauffray!)
````

## File: docs/update-notes/v3.11.12.md
````markdown
# Roo Code 3.11.12 Release Notes (2025-04-09)

This release enables Grok3 streaming via OpenAI Compatible providers and improves diff editing tolerance.

## Provider Updates

*   Make Grok3 streaming work with OpenAI Compatible (thanks amittell!)

## Improvements

*   Tweak diff editing logic to make it more tolerant of model errors
````

## File: docs/update-notes/v3.11.13.md
````markdown
# Roo Code 3.11.13 Release Notes (2025-04-11)

This release includes several terminal enhancements, improved diff error display, file context tracking, and various fixes.

## New Terminal Settings (thanks KJ7LNW!)

Six new configurable settings were added to improve terminal reliability:

*   **Terminal command delay setting** - Adds a small pause after running commands to fix output capture issues in some terminals. Useful if Roo has trouble seeing command results.
*   **PowerShell counter workaround setting** - Helps PowerShell run identical commands multiple times without failing. Turn this on if Roo struggles with repeated commands.
*   **Clear ZSH EOL mark setting** - Prevents ZSH from adding special characters that can confuse Roo when reading terminal output.
*   **Oh My Zsh integration setting** - Makes Roo work better with the popular Oh My Zsh shell customization framework. (experimental)
*   **Powerlevel10k integration setting** - Improves compatibility with the Powerlevel10k ZSH theme. (experimental)
*   **ZDOTDIR handling setting** - Helps Roo work with custom ZSH configurations without interfering with your personal settings. (experimental)

For detailed information about these settings and shell integration troubleshooting, see [Terminal Shell Integration](/features/shell-integration).

<img src="/img/v3.11.13/v3.11.13-1.png" alt="Terminal enhancements settings panel showing command delay, PowerShell counter, and ZSH options" width="600" />

## Diff Error Display Improvements

<img src="/img/v3.11.13/v3.11.13.png" alt="Improved diff error display interface with copy mechanism" width="600" />

*   Enhanced visibility of diff errors
*   Added easy copying mechanism for error details

## Improvements

*   Added file context tracking system so Roo better remembers which files you're working with (thanks samhvw8 and canvrno!)
*   Renamed AWS Bedrock to Amazon Bedrock for consistency with official naming (thanks ronyblum!)
*   Updated extension title and description for clarity (thanks StevenTCramer!)

## Bug Fixes

*   - Fixes to .vscodeignore (thanks @franekp!)
*   Fixed Chinese (zh-CN) translation for model capabilities (thanks zhangtony239!)
````

## File: docs/update-notes/v3.11.14.md
````markdown
# Roo Code 3.11.14 Release Notes (2025-04-11)

This release enhances rule file handling and file reading settings enforcement.

## Improvements

*   Support symbolic links in rules folders to directories and other symbolic links (thanks taisukeoe!)
*   Stronger enforcement of the setting to always read full files instead of doing partial reads
````

## File: docs/update-notes/v3.11.15.md
````markdown
# Roo Code 3.11.15 Release Notes (2025-04-13)

This release adds task history filtering, localization, UI options, and includes several provider updates and bug fixes.

## Task History Filtering

*   Added the ability to filter task history by workspace. (thanks samhvw8!)
*   By default, only tasks from the current workspace are shown.
*   Check the `Show tasks from all workspaces` option in the history view to see the global task history.

## Improvements
*   Better documentation for adding new settings (thanks KJ7LNW!)
*   Localize package.json (thanks samhvw8!)
*   Add option to hide the welcome message and fix the background color for the new profile dialog (thanks zhangtony239!)
*   Restore the focus ring for the VSCodeButton component (thanks pokutuna!)

## Bug Fixes

*   Fix Node.js version in the .tool-versions file (thanks bogdan0083!)
*   Fix duplicate suggested mentions for open tabs (thanks samhvw8!)
*   Fix Bedrock ARN validation and token expiry issue when using profiles (thanks vagadiya!)

## Provider Updates

*   Add Anthropic option to pass API token as Authorization header instead of X-Api-Key (thanks mecab!)
````

## File: docs/update-notes/v3.11.16.md
````markdown
# Roo Code 3.11.16 Release Notes (2025-04-14)

This release adds new OpenAI models and includes the model ID in task details.

## Provider Updates

*   Add `gpt-4.1`, `gpt-4.1-mini`, and `gpt-4.1-nano` to the OpenAI provider

## Improvements

*   Include model ID in environment details and when exporting tasks (thanks feifei325!)
````

## File: docs/update-notes/v3.11.17.md
````markdown
# Roo Code 3.11.17 Release Notes (2025-04-14)

This release includes improvements to OpenAI cache reporting, UI visuals, diff logic, terminal command capture, and fixes an eslint error.

## Improvements

*   Improvements to OpenAI cache reporting and cost estimates (thanks monotykamary and Cline!)
*   Visual improvements to the auto-approve toggles (thanks sachasayan!)
*   Added telemetry to track diff apply errors going forward

## Bug Fixes

*   Bugfix to diff apply logic (thanks avtc for the test case!)
*   Fix race condition in capturing short-running terminal commands (thanks KJ7LNW!)
*   Fix eslint error (thanks nobu007!)
````

## File: docs/update-notes/v3.11.2.md
````markdown
# Roo Code 3.11.2 Release Notes (2025-03-31)

This patch release includes bug fixes and internal improvements.

## Bug Fixes

*   Corrected an issue preventing the accurate loading of Requesty API key balances.
*   Resolved a bug affecting the use of Bedrock inference profiles.
*   Ensured the webview updates correctly when settings are modified via the API.
## General and QOL Improvements

*   Refactored internal webview message handling for improved structure and maintainability (thanks @diarmidmackenzie!).
````

## File: docs/update-notes/v3.11.3.md
````markdown
# Roo Code 3.11.3 Release Notes (2025-03-31)

This patch release addresses potential stability issues.

## General and QOL Improvements

*   **Context Mentions:** Reverted recent changes to context mention handling as a precaution against potential performance issues or crashes reported by some users. We are investigating the root cause and will reintroduce the improvements once stability is confirmed.
````

## File: docs/update-notes/v3.11.5.md
````markdown
# Roo Code 3.11.5 Release Notes (2025-04-03)

This patch release adds Bedrock prompt caching, configurable MCP CWD, API profile management, and diff editing improvements.

## General and QOL Improvements

*   Added prompt caching for Amazon Bedrock (thanks Smartsheet-JB-Brown!).
*   Added support for configuring the current working directory of MCP servers (thanks shoopapa!).
*   Added profile management functions to API (thanks gtaylor!).
*   Improvements to diff editing functionality, tests, and error messages (thanks p12tic!).
## Bug Fixes

*   Fixed an issue where follow-up questions grabbed focus (thanks diarmidmackenzie!).
*   Showed menu buttons when popping the extension out into a new tab (thanks benny123tw!).
````

## File: docs/update-notes/v3.11.6.md
````markdown
# Roo Code 3.11.6 Release Notes (2025-04-04)

This patch release adds support for a preview Gemini model.

## Provider Updates

*   Added the Gemini 2.5 Pro Preview model with upper bound pricing.
````

## File: docs/update-notes/v3.11.7.md
````markdown
# Roo Code 3.11.7 Release Notes (2025-04-04)

This patch release includes improvements to file tool context, localization, and internal handling.

## General and QOL Improvements

*   Improved file tool context formatting and diff error guidance.
*   Improved zh-TW localization (thanks PeterDaveHello!).
*   Implemented reference counting for McpHub disposal.
*   Updated buttons to be more consistent (thanks kyle-apex!).
*   Improved zh-CN localization (thanks System233!).
````

## File: docs/update-notes/v3.11.8.md
````markdown
# Roo Code 3.11.8 Release Notes (2025-04-05)

This patch release includes performance improvements and UI updates.

## Introduction of `.roorules` Files

*   Added support for `.roorules` files (e.g., `.roorules` for workspace-wide, `.roorules-code` for mode-specific) as a way to manage custom instructions directly within your project. This provides an alternative to defining instructions solely within the extension's settings UI. A deprecation warning for the older `.clinerules` file was also added. (Thanks upamune!)
*   Learn more about [Custom Instructions](/features/custom-instructions) and how this applies to [Custom Modes](/features/custom-modes).
## Changes

*   Improved `combineApiRequests` performance to reduce gray screens of death (thanks kyle-apex!).
*   Added searchable dropdown to API config profiles on the settings screen (thanks samhvw8!).
*   Added workspace tracking to history items in preparation for future filtering (thanks samhvw8!).
## Bug Fixes

*   Fixed search highlighting UI in history search (thanks samhvw8!).
*   Fixed nodejs version format in `.tool-versions` file (thanks upamune!).
````

## File: docs/update-notes/v3.11.9.md
````markdown
# Roo Code 3.11.9 Release Notes (2025-04-07)

This patch release introduces per-profile rate limits, multiple rules file support, provider updates, API additions, and various improvements and bug fixes.
## Custom Roo Instructions (`.roo/` Directories)

*   Introduced support for placing multiple instruction files within `.roo/rules/` (for workspace-wide) and `.roo/rules-{modeSlug}/` (for mode-specific) directories. Roo Code recursively reads all files within these directories, appending them to the system prompt in **alphabetical order** by filename.
*   This allows for better organization and management of complex instruction sets compared to single files.
*   This directory-based method now takes precedence over the single `.roorules` or `.roorules-{modeSlug}` files if the corresponding directory exists and contains files. (Thanks upamune!)
*   Learn more about [Custom Instructions](/features/custom-instructions) and how this applies to [Custom Modes](/features/custom-modes).

## Per-Profile Rate Limits

*   The **Rate Limit** setting is now configured individually for each [API Configuration Profile](/features/api-configuration-profiles). Previously a global setting, this allows you to set different minimum delays between requests based on the provider, model, or specific profile setup you are using. (Thanks ross and olweraltuve!)
*   The default remains 0 (disabled), which is suitable for most users.
*   Configure this setting within each profile's options. See the [API Configuration Profiles](/features/api-configuration-profiles#creating-a-profile) guide for details. General information on usage tracking is available in [Rate Limits and Costs](/advanced-usage/rate-limits-costs).


## General and QOL Improvements

*   Tidied up following ClineProvider refactor (thanks diarmidmackenzie!).
*   Enhanced Rust tree-sitter parser with advanced language structures (thanks KJ7LNW!).
*   Persisted settings on `api.setConfiguration` (thanks gtaylor!).
*   Added deep links to settings sections.
*   Added command to focus Roo Code input field (thanks axkirillov!).
*   Added resize and hover actions to the browser (thanks SplittyDev!).
*   Added `resumeTask` and `isTaskInHistory` to the API (thanks franekp!).
*   Dynamic Vite port detection for webview development (thanks KJ7LNW!).

## Bug Fixes

*   Prevented unnecessary autoscroll when buttons appear (thanks shtse8!).
*   Clamped negative line numbers when reading files (thanks KJ7LNW!).
*   Fixed bug displaying boolean/numeric suggested answers.

## Provider Updates

*   Added Gemini 2.5 Pro Preview to Vertex AI (thanks nbihan-mediware!).
````

## File: docs/update-notes/v3.11.md
````markdown
# Roo Code 3.11 Release Notes (2025-03-30)

This update focuses on performance enhancements, improved provider integration, and usability refinements based on community feedback.

## Fast Edits

Roo Code's default editing mechanism, which uses diffs via the [`apply_diff`](/advanced-usage/available-tools/apply-diff) tool, is now significantly faster, especially when applying multiple changes at once. This approach modifies only the necessary lines instead of rewriting the entire file, leading to quicker edits and helping prevent issues like truncated writes on large files. This reduces waiting time and improves the flow of iterative development.

Learn more about [Fast Edits](/features/fast-edits).

## API Key Balances

You can now conveniently check your current credit balance for OpenRouter and Requesty directly within the Roo Code API provider settings. This helps monitor usage without leaving the editor.
<img src="/img/v3.11/v3.11.png" alt="Roo Code v3.11 Feature Overview" width="600" />

## Project-Level MCP Config

MCP (Mode Communication Protocol) server configurations can now be defined at the project or workspace level using a `.roo/mcp.json` file within your project's root directory. This allows for tailored MCP setups specific to different projects and takes precedence over global MCP settings. You can manage this file directly from the MCP settings view. (Thanks aheizi!)
<img src="/img/v3.11/v3.11-1.png" alt="Project-level MCP Config file example" width="600" />

Learn more about [Editing MCP Settings Files](/features/mcp/using-mcp-in-roo#editing-mcp-settings-files).


## Improved Gemini Support

Integration with Google's Gemini models has been significantly enhanced for better reliability and capability:

*   **Smarter Retry Logic:** Roo Code now intelligently handles transient Gemini API issues. It detects rate limits (HTTP 429), uses precise retry timing provided by Gemini's error responses, applies exponential backoff for other errors, and shows a countdown timer for clarity. This results in fewer disruptions and a smoother workflow, especially during peak API usage.
*   **Improved Character Escaping:** Issues with character escaping have been resolved, ensuring proper handling of special characters in code blocks, complex JSON, and non-ASCII text. This leads to more accurate code generation and fewer syntax errors in responses.
*   **Gemini 2.5 Pro Support:** Added support for the powerful Gemini 2.5 Pro model through the GCP Vertex AI provider configuration, offering larger context windows and output capacity for more complex tasks. (Thanks nbihan-mediware!)

## Import/Export Settings

<img src="/img/settings-management/settings-management.png" alt="Export, Import, and Reset buttons in Roo Code settings" width="400" />

You can now export your Roo Code settings (API Provider Profiles, Global Settings) to a `roo-code-settings.json` file for backup or sharing, and import settings from such a file to merge configurations.


Find these options in the main Roo Code settings view. Learn more about [Import/Export/Reset Settings](/features/settings-management).

## Pin and Sort API Profiles

<img src="/img/v3.11/v3.11-2.png" alt="API Profile dropdown showing pinning and sorting options" width="250" />

The API configuration dropdown in the settings now supports pinning your favorite profiles to the top and sorting the list for easier navigation, especially when managing multiple profiles. (Thanks jwcraig!)

Learn more about [Pinning and Sorting Profiles](/features/api-configuration-profiles#pinning-and-sorting-profiles).

## Editable Suggested Answers

When Roo asks a follow-up question using the [`ask_followup_question`](/advanced-usage/available-tools/ask-followup-question) tool, the suggested answers provided can now be edited directly in the chat interface before you accept one. This allows for quick modifications without retyping the entire response. (Thanks samhvw8!)

Learn more about [Interacting with Suggestions](/features/suggested-responses#interacting-with-suggestions).

<img src="/img/suggested-responses/suggested-responses-1.png" alt="Chat input box showing text copied from a suggested response, ready for editing" width="600" />

## General Improvements and Bug Fixes

*   **Partial File Reads:** Enhancements have been made to how Roo Code handles reading portions of large files. (Thanks KJ7LNW!)
*   **Tool-Calling Logic Refactor:** Significant internal refactoring of the tool-calling mechanism makes the codebase easier to maintain and extend. (Thanks diarmidmackenzie, bramburn, KJ7LNW, and others!)
*   **"Add to Context" Action:** This code action is now prioritized in the menu and includes the relevant line numbers for better context. (Thanks samhvw8!)
*   **External Activation Command:** A new command allows other VS Code extensions to programmatically activate or interface with Roo Code. (Thanks gtaylor!)
*   **Browser Tool:** General improvements and fixes have been made to the browser interaction tool. (Thanks afshawnlotfi!)
*   **Partial Read Info:** Information about partial file reads (when only a segment of a large file is processed) is now displayed in the chat interface.
*   **Settings Link:** A direct link to the relevant settings page has been added to the auto-approve action toolbar for quicker access.
*   **Provider Docs Links:** Links to the official documentation for various model providers have been added within the API configuration options.
*   **Custom OpenAI-Compatible Models:** Support added for using custom `o3-mini-` models with OpenAI-compatible providers. (Thanks snoyiatk!)
````

## File: docs/update-notes/v3.12.0.md
````markdown
# Roo Code 3.12 Release Notes (2025-04-16)

This release introduces xAI provider support, improves diff editing, enhances UI with search capabilities, adds OpenAI model support, and includes various usability improvements and bug fixes.

## Provider Updates

*   Added [xAI provider](/providers/xai) and exposed reasoning effort options for Grok on OpenRouter. (thanks Cline!)
*   Added support for OpenAI `o3` & `4o-mini` models. (thanks PeterDaveHello!)

## Profile-Specific Diff Settings

*   **Profile-Specific Settings**: Diff editing configuration now works on a per-profile basis, giving you greater control over how code edits work with different providers. Learn more about [API Configuration Profiles](/features/api-configuration-profiles).

### How It Works

* **Multiple Profile Support**: Each profile stores its own diff editing preferences
* **Flexible Configuration**: Switch between profiles to instantly change how diffs are handled
* **Provider-Specific Control**: Use different diff strategies for different code providers
* **Isolated Settings**: Changes in one profile don't affect others

For example, you can create a profile for one provider with strict whitespace handling, and another profile with more relaxed rules. When you switch profiles, the system automatically applies the appropriate diff editing configuration.

## Keyboard Shortcuts

### Keyboard Shortcuts for Input Acceptance

Added the `roo.acceptInput` command to allow users to accept input or suggestions using keyboard shortcuts instead of mouse clicks. (thanks axkirillov!) This feature:

#### Key Benefits

* **Keyboard-Driven Interface**: Submit text or select the primary suggestion button without mouse interaction
* **Improved Accessibility**: Essential for users with mobility limitations or those who experience discomfort with mouse usage
* **Vim/Neovim Compatibility**: Supports transitions for developers coming from keyboard-centric environments
* **Workflow Efficiency**: Reduces context switching between keyboard and mouse during development tasks

For detailed setup and usage instructions, see our new [Keyboard Shortcuts](/features/keyboard-shortcuts) documentation page.


## QOL Improvements

*   Improved pre-diff string normalization for better editing reliability, especially with whitespace-sensitive languages.
*   Made checkpoints faster and more reliable for smoother project state management.
*   Added a search bar to mode and profile select dropdowns for easier navigation. (thanks samhvw8!)
*   Improved file/folder context mention UI for better usability. (thanks elianiva!)
*   Added telemetry for code action usage, prompt enhancement usage, and consecutive mistake errors to improve product stability.
*   Enhanced diff error telemetry for better troubleshooting capabilities.
*   Suppressed zero cost values in the task header for cleaner UI. (thanks do-it!)

## Bug Fixes

*   Fixed a bug affecting the Edit button visibility in the select dropdowns.
*   Made JSON parsing safer to avoid crashing the webview on bad input.
````

## File: docs/update-notes/v3.12.1.md
````markdown
# Roo Code 3.12.1 Release Notes (2025-04-16)

This patch release addresses a UI visibility issue.

## Bug Fixes

*   Fixed a bug affecting the Edit button visibility in the select dropdowns.
````

## File: docs/update-notes/v3.12.2.md
````markdown
# Roo Code 3.12.2 Release Notes (2025-04-16)

This patch release adds OpenAI model support and improves UI and telemetry aspects.

## Provider Updates

*   Added support for OpenAI `o3` & `4o-mini` models. (thanks PeterDaveHello!)

## Improvements

*   Improved file/folder context mention UI for better usability. (thanks elianiva!)
*   Enhanced diff error telemetry for better troubleshooting capabilities.
````

## File: docs/update-notes/v3.13.0.md
````markdown
# Roo Code 3.13.0 Release Notes (2025-04-17)

This release brings significant UI improvements across multiple views, adds the new append_to_file tool, introduces Gemini 2.5 Flash Preview support, and includes important bug fixes.

## Gemini 2.5 Flash Preview
- Add Gemini 2.5 Flash Preview to Gemini and Vertex providers (thanks nbihan-mediware!)

## UI Improvements
- UI improvements to task header, chat view, history preview, and welcome view (thanks sachasayan!)

## New Tool: append_to_file
- Added new append_to_file tool for appending content to files (thanks samhvw8!)
  - Efficiently add content to the end of existing files or create new files
  - Ideal for logs, data records, and incremental file building
  - Includes automatic directory creation and interactive approval via diff view
  - Complements existing file manipulation tools with specialized append functionality

## Bug Fixes
- Fix image support in Bedrock (thanks Smartsheet-JB-Brown!)
- Make diff edits more resilient to models passing in incorrect parameters
````

## File: docs/update-notes/v3.13.1.md
````markdown
# Roo Code 3.13.1 Release Notes (2025-04-18)

This release includes Gemini 2.5 Flash thinking mode support, UI improvements for auto-approval toggles, and several bug fixes.

## Gemini 2.5 Flash Thinking Mode
- Support Gemini 2.5 Flash thinking mode (thanks monotykamary!)

## UI Improvements
- Make auto-approval toggle on/off states more obvious (thanks sachasayan!)

## Bug Fixes
- Fix the path of files dragging into the chat textarea on Windows (thanks NyxJae!)
  - Resolves path normalization issues specific to Windows environments
  - Ensures consistent file handling across platforms

## Telemetry Enhancements
- Add telemetry for shell integration errors
````

## File: docs/update-notes/v3.13.2.md
````markdown
# Roo Code 3.13.2 Release Notes (2025-04-18)

This release adds the ability to specify custom URLs for the Gemini provider.

## Improvements

*   Allow custom URLs for Gemini provider.
````

## File: docs/update-notes/v3.14.0.md
````markdown
# Roo Code 3.14.0 Release Notes (2025-04-23)

This release introduces Gemini prompt caching, improves several tools, and includes numerous bug fixes and enhancements across the extension.

## Apply Diff and Other Major File Edit Improvements

*   Improve [`apply_diff`](/advanced-usage/available-tools/apply-diff) to work better with **Google Gemini 2.5** and other models
*   Automatically close files opened by edit tools (`apply_diff`, `insert_content`, `search_and_replace`, `write_to_file`) after changes are approved. This prevents cluttering the editor with files opened by Roo and helps clarify context by only showing files intentionally opened by the user.
*   Added the [`search_and_replace`](/advanced-usage/available-tools/search-and-replace) tool. This tool finds and replaces text within a file using literal strings or regex patterns, optionally within specific line ranges (thanks samhvw8!).
*   Added the [`insert_content`](/advanced-usage/available-tools/insert-content) tool. This tool adds new lines into a file at a specific location or the end, without modifying existing content (thanks samhvw8!).
*   Deprecated the `append_to_file` tool in favor of `insert_content` (use `line: 0`).
*   Correctly revert changes and suggest alternative tools when [`write_to_file`](/advanced-usage/available-tools/write-to-file) fails on a missing line count
*   Better progress indicator for [`apply_diff`](/advanced-usage/available-tools/apply-diff) tools (thanks qdaxb!)
*   Ensure user feedback is added to conversation history even during API errors (thanks System233!).
*   Prevent redundant 'TASK RESUMPTION' prompts from appearing when resuming a task (thanks System233!).
*   Fix issue where error messages sometimes didn't display after cancelling an API request (thanks System233!).
*   Preserve editor state and prevent tab unpinning during diffs (thanks seedlord!)

## Context Mentions

*   Use material icons for files and folders in mentions (thanks elianiva!)
*   Improvements to icon rendering on Linux (thanks elianiva!)
*   Better handling of `aftercursor` content in context mentions (thanks elianiva!)

    <img src="/img/v3.14.0/v3.14.0.png" alt="Warning indicator for active system prompt override" width="600" />

## Footgun Prompting

*   **Context Variables:** Added the ability to interpolate context variables (`{{workspace}}`, `{{mode}}`, `{{language}}`, `{{shell}}`, `{{operatingSystem}}`) into custom system prompt override files, allowing for more dynamic prompts (thanks daniel-lxs!). See the [Footgun Prompting documentation](/features/footgun-prompting#using-context-variables) for details.
*   **Override Warning:** Roo Code now displays a warning indicator in the chat input when a system prompt override is active for the current mode.

    <img src="/img/footgun-prompting/footgun-prompting-1.png" alt="Warning indicator for active system prompt override" width="600" />

## MCP Tweaks

*   Support injecting environment variables in MCP config (thanks NamesMT!)
*   Fix MCP hub error when dragging extension to another sidebar
*   Improve display of long MCP tool arguments

## Provider Updates

*   Allow Amazon Bedrock Marketplace ARNs (thanks mlopezr!)
*   Add prompt caching for `gemini-2.5-pro-preview-03-25` in the Gemini provider (Vertex and OpenRouter coming soon!)
*   Improvements to Requesty model list fetching (thanks dtrugman!)
*   Make the VS Code LM provider show the correct model information (thanks QuinsZouls!)
*   Remove unnecessary calculation from VS Code LM provider (thanks d-oit!)

## Bug Fixes and General QOL Improvements and Misc.

*   Make the [`list_files`](/advanced-usage/available-tools/list-files) tool more efficient and smarter about excluding directories like `.git/`
*   Performance improvements to task size calculations
*   Give better loading feedback on chat rows (thanks elianiva!)
*   Use a more sensible task export icon
*   Fix file drag and drop on Windows and when using SSH tunnels (thanks NyxJae!)
*   Fix interpolation bug in the “add to context” code action (thanks elianiva!)
*   Fix redundant ‘TASK RESUMPTION’ prompts (thanks System233!)
*   Fix bug opening files when editor has no workspace root
*   Don’t immediately show a model ID error when changing API providers
*   Fixes to make the `focusInput` command more reliable (thanks hongzio!)
*   Fix terminal carriage return handling for correct progress bar display (thanks Yikai-Liao!)
*   Track tool use errors in evals
*   Use path aliases in webview source files
*   Better handling of FakeAI “controller” object (thanks wkordalski)
````

## File: docs/update-notes/v3.14.1.md
````markdown
# Roo Code 3.14.1 Release Notes (2025-04-24)

This release temporarily disables Gemini caching due to reported issues.

## Bug Fixes

*   Disable Gemini caching while we investigate issues reported by the community.
````

## File: docs/update-notes/v3.14.2.md
````markdown
# Roo Code 3.14.2 Release Notes (2025-04-24)

This release introduces prompt caching for Gemini, user control over caching for specific models on OpenRouter, improved terminal output handling, and adds Russian language support.

## Gemini 2.5 Caching is HERE!

*   **Prompt Caching for Gemini Models:** Prompt caching is now available for the `Gemini 1.5 Flash`, `Gemini 2.0 Flash`, and `Gemini 2.5 Pro Preview` models when using the [Requesty](/providers/requesty), [Google Gemini](/providers/gemini), or [OpenRouter](/providers/openrouter) providers (Vertex provider and `Gemini 2.5 Flash Preview` caching coming soon!)
*   **Manual Caching Toggle (Google Gemini & OpenRouter Only):**
    *   For the **[Google Gemini](/providers/gemini)** and **[OpenRouter](/providers/openrouter)** providers specifically, a new checkbox allows you to manually enable prompt caching for supported Gemini 2.5 models.
        <img src="/img/v3.14.2/v3.14.2.png" alt="Prompt Caching Checkbox in Provider Settings" width="600" />
    *   **Why the checkbox?** This setting is provided as a temporary workaround for potential response delays sometimes observed with Google's caching mechanism when accessed via these two providers. Caching is *not* enabled by default for them.
    *   **Requesty:** Caching remains automatic for supported models via Requesty.

## Terminal Improvements

*   Improved handling of terminal output containing backspace characters for cleaner display (thanks KJ7LNW!).

## Internationalization: Russian Language Added

*   Added Russian language support (Спасибо asychin!).
````

## File: docs/update-notes/v3.14.3.md
````markdown
# Roo Code 3.14.3 Release Notes (2025-04-25)

This patch release introduces the Boomerang Orchestrator mode, UI improvements, performance enhancements, and several bug fixes.

## Boomerang is now default!

*   Added Boomerang Orchestrator as a built-in mode.
    <img src="/img/v3.14.3/v3.14.3-1.png" alt="Boomerang Orchestrator Mode" width="600" />

## Sexy new minimalist look

*   Improved the home screen user interface for a better initial experience.
    <img src="/img/v3.14.3/v3.14.3.png" alt="New Minimalist Home Screen" width="600" />

## QOL Updates and Bug Fixes

*   Made token count estimation more efficient, reducing occurrences of gray screens during processing.
*   Reverted the change to automatically close files after edits. This feature will be revisited once diagnostic integration issues are resolved.
*   Cleaned up the internal settings data model for better maintainability.
*   Optimized API calls by omitting reasoning parameters for models that do not support reasoning.
*   Corrected word wrapping in Roo message titles (thanks zhangtony239!).
*   Updated the default model ID for the Unbound provider from `claude-3.5-sonnet` to `claude-3.7-sonnet` (thanks pugazhendhi-m!).
*   Improved clarity in the documentation regarding adding custom settings (thanks shariqriazz!).
````

## File: docs/update-notes/v3.14.md
````markdown
# Roo Code 3.14 Combined

## Gemini 2.5 Caching is HERE!

*   **Prompt Caching for Gemini Models:** Prompt caching is now available for the `Gemini 1.5 Flash`, `Gemini 2.0 Flash`, and `Gemini 2.5 Pro Preview` models when using the [Requesty](/providers/requesty), [Google Gemini](/providers/gemini), or [OpenRouter](/providers/openrouter) providers (Vertex provider and `Gemini 2.5 Flash Preview` caching coming soon!)
*   **Manual Caching Toggle (Google Gemini & OpenRouter Only):**
    *   For the **[Google Gemini](/providers/gemini)** and **[OpenRouter](/providers/openrouter)** providers specifically, a new checkbox allows you to manually enable prompt caching for supported Gemini 2.5 models.
        <img src="/img/v3.14.2/v3.14.2.png" alt="Prompt Caching Checkbox in Provider Settings" width="600" />
    *   **Why the checkbox?** This setting is provided as a temporary workaround for potential response delays sometimes observed with Google's caching mechanism when accessed via these two providers. Caching is *not* enabled by default for them.
    *   **Requesty:** Caching remains automatic for supported models via Requesty.

## Boomerang Orchestrator Mode

*   Added Boomerang Orchestrator as a built-in mode.
    <img src="/img/v3.14.3/v3.14.3-1.png" alt="Boomerang Orchestrator Mode" width="600" />

## Sexy new minimalist look

*   Improved the home screen user interface for a better initial experience.
    <img src="/img/v3.14.3/v3.14.3.png" alt="New Minimalist Home Screen" width="600" />

## Apply Diff and Other Major File Edit Improvements

*   Improve [`apply_diff`](/advanced-usage/available-tools/apply-diff) to work better with **Google Gemini 2.5** and other models
*   Automatically close files opened by edit tools (`apply_diff`, `insert_content`, `search_and_replace`, `write_to_file`) after changes are approved. This prevents cluttering the editor with files opened by Roo and helps clarify context by only showing files intentionally opened by the user.
*   Added the [`search_and_replace`](/advanced-usage/available-tools/search-and-replace) tool. This tool finds and replaces text within a file using literal strings or regex patterns, optionally within specific line ranges (thanks samhvw8!).
*   Added the [`insert_content`](/advanced-usage/available-tools/insert-content) tool. This tool adds new lines into a file at a specific location or the end, without modifying existing content (thanks samhvw8!).
*   Deprecated the `append_to_file` tool in favor of `insert_content` (use `line: 0`).
*   Correctly revert changes and suggest alternative tools when [`write_to_file`](/advanced-usage/available-tools/write-to-file) fails on a missing line count
*   Better progress indicator for [`apply_diff`](/advanced-usage/available-tools/apply-diff) tools (thanks qdaxb!)
*   Ensure user feedback is added to conversation history even during API errors (thanks System233!).
*   Prevent redundant 'TASK RESUMPTION' prompts from appearing when resuming a task (thanks System233!).
*   Fix issue where error messages sometimes didn't display after cancelling an API request (thanks System233!).

## Terminal Fixes

*   Improved handling of terminal output containing backspace characters for cleaner display (thanks KJ7LNW!).
*   Fix terminal carriage return handling for correct progress bar display (thanks Yikai-Liao!)

## Internationalization: Russian Language Added

*   Added Russian language support (Спасибо asychin!).

## Context Mentions

*   Use material icons for files and folders in mentions (thanks elianiva!)
*   Improvements to icon rendering on Linux (thanks elianiva!)
*   Better handling of `aftercursor` content in context mentions (thanks elianiva!)

<img src="/img/v3.14.0/v3.14.0.png" alt="Context Mentions with Material Icons" width="600" />
## Footgun Prompting

*   **Context Variables:** Added the ability to interpolate context variables (`{{workspace}}`, `{{mode}}`, `{{language}}`, `{{shell}}`, `{{operatingSystem}}`) into custom system prompt override files, allowing for more dynamic prompts (thanks daniel-lxs!). See the [Footgun Prompting documentation](/features/footgun-prompting#using-context-variables) for details.
*   **Override Warning:** Roo Code now displays a warning indicator in the chat input when a system prompt override is active for the current mode.

    <img src="/img/footgun-prompting/footgun-prompting-1.png" alt="Warning indicator for active system prompt override" width="600" />


## MCP Tweaks

*   Support injecting environment variables in MCP config (thanks NamesMT!)
*   Fix MCP hub error when dragging extension to another sidebar
*   Improve display of long MCP tool arguments

## Provider Updates

*   Allow Amazon Bedrock Marketplace ARNs (thanks mlopezr!)
*   Improvements to Requesty model list fetching (thanks dtrugman!)
*   Make the VS Code LM provider show the correct model information (thanks QuinsZouls!)
*   Remove unnecessary calculation from VS Code LM provider (thanks d-oit!)
*   Updated the default model ID for the Unbound provider from `claude-3.5-sonnet` to `claude-3.7-sonnet` (thanks pugazhendhi-m!).

## Bug Fixes and General QOL Improvements and Misc.

*   Make the [`list_files`](/advanced-usage/available-tools/list-files) tool more efficient and smarter about excluding directories like `.git/`
*   Performance improvements to task size calculations, including more efficient token count estimation to reduce gray screens.
*   Give better loading feedback on chat rows (thanks elianiva!)
*   Use a more sensible task export icon
*   Fix file drag and drop on Windows and when using SSH tunnels (thanks NyxJae!)
*   Fix interpolation bug in the “add to context” code action (thanks elianiva!)
*   Fix redundant ‘TASK RESUMPTION’ prompts (thanks System233!)
*   Fix bug opening files when editor has no workspace root
*   Don’t immediately show a model ID error when changing API providers
*   Fixes to make the `focusInput` command more reliable (thanks hongzio!)
*   Track tool use errors in evals
*   Use path aliases in webview source files
*   Better handling of FakeAI “controller” object (thanks wkordalski)
*   Ensure user feedback is added to conversation history even during API errors (thanks System233!).
*   Prevent redundant 'TASK RESUMPTION' prompts from appearing when resuming a task (thanks System233!).
*   Fix issue where error messages sometimes didn't display after cancelling an API request (thanks System233!).
*   Preserve editor state and prevent tab unpinning during diffs (thanks seedlord!)
*   Cleaned up the internal settings data model for better maintainability.
*   Optimized API calls by omitting reasoning parameters for models that do not support reasoning.
*   Corrected word wrapping in Roo message titles (thanks zhangtony239!).
*   Improved clarity in the documentation regarding adding custom settings (thanks shariqriazz!).
````

## File: docs/update-notes/v3.2.0.md
````markdown
# Roo Code 3.2.0 Release Notes

This release marks the rebranding from Roo Cline to Roo Code and introduces Custom Modes!

## Feature Highlights

*   **Name Change:** The extension has been renamed from Roo Cline to Roo Code.
*   **Custom Modes:** You can now create your own custom modes (personas) for Roo Code beyond the built-in Code, Architect, and Ask modes. Define custom prompts and choose which tools each mode can access to create specialized assistants. Start by typing "Create a new mode for..." or visit the Prompts tab.
````

## File: docs/update-notes/v3.2.3.md
````markdown
# Roo Code 3.2.3 Release Notes

This patch release fixes an issue with the language selector setting.

## Bug Fixes

*   Fixed a bug where the preferred language selector setting was not working correctly.
````

## File: docs/update-notes/v3.2.4.md
````markdown
# Roo Code 3.2.4 Release Notes

This patch release ensures diff tool usage aligns with settings.

## Fixes

*   Ensured the `apply_diff` tool is only used if diff editing ("Fast Edits") is enabled in settings.
````

## File: docs/update-notes/v3.2.5.md
````markdown
# Roo Code 3.2.5 Release Notes

This patch release adds a new Gemini model and includes visual fixes.

## Updates & Fixes

*   Added the `gemini-flash-thinking-01-21` model. (thanks monotykamary!)
*   Included minor visual fixes. (thanks monotykamary!)
````

## File: docs/update-notes/v3.2.6.md
````markdown
# Roo Code 3.2.6 Release Notes

This patch release fixes an issue with custom mode overrides.

## Bug Fixes

*   Fixed a bug related to role definition overrides for built-in modes.
````

## File: docs/update-notes/v3.2.7.md
````markdown
# Roo Code 3.2.7 Release Notes

This patch release fixes an issue with creating new API configuration profiles.

## Bug Fixes

*   Fixed a bug preventing the creation of new API configuration profiles.
````

## File: docs/update-notes/v3.2.8.md
````markdown
# Roo Code 3.2.8 Release Notes

This patch release includes fixes for settings and provider integrations.

## Bug Fixes

*   Fixed an issue opening the custom modes settings JSON file.
*   Reverted provider key entry validation to check `onInput` instead of `onChange` to address issues entering API keys. (thanks samhvw8!)
*   Added an explicit checkbox to use Azure for OpenAI compatible providers. (thanks samhvw8!)
*   Fixed Glama usage reporting. (thanks punkpeye!)
*   Added Llama 3.3 70B Instruct model to AWS Bedrock provider options. (thanks Premshay!)
````

## File: docs/update-notes/v3.3.0.md
````markdown
# Roo Code 3.3.0 Release Notes

This release introduces native Code Actions, smarter mode switching, enhanced Markdown support for specific modes, and AWS profile support for Bedrock.

## Feature Highlights

*   **Code Actions Support:** Integrated native VS Code code actions for quick fixes and refactoring suggestions directly within the editor.
*   **Smarter Mode Switching:** Modes can now intelligently request switches to other modes when appropriate (e.g., suggesting Code mode when needing to edit code from Architect mode).
*   **Enhanced Markdown Support:** Ask and Architect modes now support editing Markdown files.
*   **Custom File Pattern Restrictions:** Added the ability to restrict custom modes to specific file patterns (e.g., allowing a "Technical Writer" mode to only edit `.md` files).
*   **AWS Profiles for Bedrock:** Added support for configuring the Bedrock provider using AWS Profiles, beneficial for SSO or integrations without long-term credentials.
````

## File: docs/update-notes/v3.3.1.md
````markdown
# Roo Code 3.3.1 Release Notes

This patch release includes important fixes for terminal management and mode switching.

## Bug Fixes

*   Resolved an issue where the terminal management system created unnecessary new terminals. (thanks evan-fannin!)
*   Fixed a bug where the saved API provider for a mode wasn't selected correctly after a mode switch command.
````

## File: docs/update-notes/v3.3.10.md
````markdown
# Roo Code 3.3.10 Release Notes

This release includes notable changes to mode switching and prompts, experimental diff improvements, and various general fixes.

## Notable Changes

*   Improved default prompts for Architect and Ask modes.
*   Allowed switching between modes using slash commands (e.g., `/ask why is the sky blue?`).

## Experimental

*   Improved experimental unified diff strategy and selection logic in code actions. (thanks nissa-seru!)

## General Improvements & Fixes

*   Added shortcuts to currently open tabs in the `@`-mention file suggestions. (thanks olup!)
*   Enabled markdown formatting in `o3` and `o1` model responses. (thanks nissa-seru!)
*   Improved terminal shell detection logic. (thanks canvrno, nissa-seru!)
*   Applied visual improvements/cleanup to the list of modes on the Prompts tab.
*   Fixed pricing for `o1-mini`. (thanks hesara!)
*   Fixed context window size calculation. (thanks MuriloFP!)
*   Fixed occasional errors when switching between API profiles. (thanks samhwv8!)
*   Fixed double-scrollbar issue in the provider dropdown.
````

## File: docs/update-notes/v3.3.11.md
````markdown
# Roo Code 3.3.11 Release Notes

This patch release includes shell integration improvements and slash command autocomplete.

## Improvements & Fixes

*   Implemented safer shell profile path checking to avoid errors on Windows.
*   Added autocomplete suggestions for slash commands (e.g., `/ask`).
````

## File: docs/update-notes/v3.3.12.md
````markdown
# Roo Code 3.3.12 Release Notes

This patch release adds new Gemini models and fixes a mode configuration bug.

## Updates & Fixes

*   Added new Gemini 2.0 models (Flash, Flash Lite Preview, Pro Experimental).
*   Fixed a bug related to changing a mode's API configuration on the Prompts tab.
````

## File: docs/update-notes/v3.3.13.md
````markdown
# Roo Code 3.3.13 Release Notes

This release includes provider support updates, terminal improvements, and fixes.

## Improvements & Fixes

*   Ensured the DeepSeek R1 model works correctly with Ollama. (thanks sammcj!)
*   Enabled context menu commands (like copy/paste) within the integrated terminal used by Roo Code. (thanks samhvw8!)
*   Improved sliding window truncation strategy for models that do not support prompt caching. (thanks nissa-seru!)
*   Implemented initial fixes for bugs related to switching API profiles (further improvements planned).
````

## File: docs/update-notes/v3.3.14.md
````markdown
# Roo Code 3.3.14 Release Notes

This release addresses issues from the previous 3.3.13 release.

## Fixes

*   Reverted deployment script changes that caused issues in the 3.3.13 release, restoring stability.
````

## File: docs/update-notes/v3.3.15.md
````markdown
# Roo Code 3.3.15 Release Notes (2025-02-08)

This release introduces Checkpoints as an opt-in experimental feature and includes UX improvements and bug fixes.

## Feature Highlights

*   **Checkpoints (Experimental Opt-in):** Introduced Checkpoints as an opt-in feature in Advanced Settings. This allows tracking project changes during tasks for review or rollback. User feedback is requested during this experimental phase.

## UX Improvements

*   Added a copy button to the recent tasks list. (thanks hannesrudolph!)
*   Enhanced the flow for adding a new API profile.

## Bug Fixes

*   Resolved API profile switching issues on the settings screen.
*   Improved MCP initialization and server restarts. (thanks MuriloFP, hannesrudolph!)
````

## File: docs/update-notes/v3.3.16.md
````markdown
# Roo Code 3.3.16 Release Notes (2025-02-09)

This release includes fixes for Checkpoints and API configuration, plus support for Volcano Ark.

## Bug Fixes & Improvements

*   Fixed jumpiness when entering API configuration by updating on blur instead of input.
*   Added tooltips to Checkpoint actions.
*   Fixed an issue where Checkpoints were overwriting existing git name/email settings.

## Provider Support

*   Added support for the Volcano Ark platform via the OpenAI-compatible provider.
````

## File: docs/update-notes/v3.3.17.md
````markdown
# Roo Code 3.3.17 Release Notes (2025-02-09)

This patch release includes fixes for the Checkpoints feature.

## Bug Fixes

*   Fixed the restore checkpoint popover UI.
*   Unset git configuration settings that were previously set incorrectly by the Checkpoints feature.
````

## File: docs/update-notes/v3.3.18.md
````markdown
# Roo Code 3.3.18 Release Notes (2025-02-11)

This release introduces model temperature control, Requesty provider support, and various UX improvements and bug fixes.

## Feature Highlights

*   **Temperature Control:** Added a per-API-configuration setting for model temperature, allowing different creativity levels for the same model depending on the mode. (thanks joemanley201!)
*   **Requesty Provider Support:** Added support for the Requesty provider. (thanks samhvw8!)

## UX Improvements

*   Added a copy button to the Prompts tab for system prompts. (thanks mamertofabian!)

## Bug Fixes

*   Added retries for fetching OpenRouter usage stats. (thanks jcbdev!)
*   Fixed disabled MCP servers sometimes not showing in settings on startup. (thanks MuriloFP!)
*   Fixed Ollama/LMStudio URL flickering issue in settings.
*   Fixed incorrect API retry timing calculations.
*   Fixed Checkpoint issues on Windows. (thanks CTE!)
````

## File: docs/update-notes/v3.3.19.md
````markdown
# Roo Code 3.3.19 Release Notes (2025-02-12)

This release includes bug fixes and improvements related to file writes, UI themes, custom instructions, and checkpoints.

## Bug Fixes & Improvements

*   Fixed a bug where aborting during file writes would not revert the changes.
*   Ensured dialog backgrounds honor the VS Code theme.
*   Made it possible to clear default custom instructions for built-in modes.
*   Added a help button linking to the documentation site.
*   Switched checkpoints logic to use a shadow git repository to avoid issues with hot reloads and polluting existing repositories. (thanks Cline!)
````

## File: docs/update-notes/v3.3.2.md
````markdown
# Roo Code 3.3.2 Release Notes

This release improves mode configuration, OpenRouter integration, and UI elements.

## Improvements & Fixes

*   Added a dropdown to select the API configuration for a specific mode in the Prompts tab.
*   Fixed a bug where the "Always Allow" checkbox wasn't showing up for MCP tools.
*   Improved OpenRouter DeepSeek-R1 integration: set temperature to 0.6 and displayed reasoning output. (thanks Szpadel!)
*   Allowed specifying a custom OpenRouter base URL. (thanks dairui1!)
*   Improved the UI for nested settings. (thanks PretzelVector!)
````

## File: docs/update-notes/v3.3.20.md
````markdown
# Roo Code 3.3.20 Release Notes (2025-02-14)

This release introduces project-level custom modes and updates to Ask mode.

## Feature Highlights

*   **Project-Level Custom Modes:** Added support for defining project-specific custom modes in a `.roomodes` file within the workspace.
*   **Ask Mode Update:** Ask mode is now focused purely on chat interactions and no longer supports editing Markdown files.

## Provider Support

*   Added new Mistral models. (thanks d-oit, bramburn!)

## General Improvements

*   Added a setting to control the number of visible editor tabs included in the context.
*   Improved the initial setup experience by fixing API key entry on the welcome screen.
````

## File: docs/update-notes/v3.3.21.md
````markdown
# Roo Code 3.3.21 Release Notes (2025-02-17)

This release introduces the `@terminal` mention feature and includes various improvements and fixes.

## Feature Highlights

*   **@terminal Mention:** Added the ability to mention `@terminal` in the chat input to pull recent terminal output directly into the context. (thanks Cline!)

## General Improvements & Fixes

*   Enabled streaming mode for OpenAI `o1` models.
*   Fixed the system prompt to ensure Roo is aware of all available modes.
*   Fixed default preferred language settings for `zh-cn` and `zh-tw`. (thanks System233!)
*   Fixed input box revert issue and configuration loss during profile switching. (thanks System233!)
*   Fixed Mistral provider integration. (thanks d-oit!)
````

## File: docs/update-notes/v3.3.22.md
````markdown
# Roo Code 3.3.22 Release Notes (2025-02-20)

This release includes general improvements to settings, MCP server management, language support, and bug fixes.

## General Improvements

*   Added a button to delete MCP servers. (thanks hannesrudolph!)
*   Added a wildcard (`*`) option for command execution auto-approval (use with caution!).
*   Enhanced the Provider Settings UI with clear Save buttons and warnings about unsaved changes. (thanks System233!)
*   Added support for setting custom preferred languages on the Prompts tab.
*   Added Catalan language support. (thanks alarno!)

## Provider Support

*   Improved parsing of `<think>` reasoning tags from Ollama models. (thanks System233!)

## Bug Fixes

*   Fixed the system prompt preview copy button always copying the Code mode version.
*   Fixed the `.roomodes` file not being automatically created when adding custom modes from the Prompts tab.
````

## File: docs/update-notes/v3.3.23.md
````markdown
# Roo Code 3.3.23 Release Notes (2025-02-20)

This patch release includes bug fixes related to settings management.

## Bug Fixes

*   Fixed an issue with hitting "Done" on the settings page with unsaved changes. (thanks System233!)
*   Handled errors more gracefully when reading custom instructions from files. (thanks joemanley201!)
````

## File: docs/update-notes/v3.3.24.md
````markdown
# Roo Code 3.3.24 Release Notes (2025-02-20)

This patch release includes fixes for AWS Bedrock and model pricing.

## Bug Fixes

*   Fixed a bug with region selection that prevented AWS Bedrock profiles from being saved. (thanks oprstchn!)
*   Updated the price for `gpt-4o`. (thanks marvijo-code!)
````

## File: docs/update-notes/v3.3.25.md
````markdown
# Roo Code 3.3.25 Release Notes (2025-02-21)

This release introduces the Debug mode and an experimental "Power Steering" option.

## Feature Highlights

*   **Debug Mode:** Added a new "Debug" mode specializing in diagnosing and fixing tricky problems. (thanks Ted Werbel, Carlos E. Perez!)
*   **Experimental Power Steering:** Added an optional "Power Steering" setting to improve model adherence to role definitions and custom instructions by more frequently reminding the model of its current mode details (uses additional tokens). Enable via the checkbox at the bottom of the main settings view.
````

## File: docs/update-notes/v3.3.26.md
````markdown
# Roo Code 3.3.26 Release Notes (2025-02-27)

This patch release updates the default prompt for Debug mode.

## General and QOL Improvements

*   Adjusted the default prompt for Debug mode to focus more on diagnosis and require user confirmation before proceeding to implementation.
````

## File: docs/update-notes/v3.3.3.md
````markdown
# Roo Code 3.3.3 Release Notes

This patch release includes error handling and styling improvements.

## Improvements & Fixes

*   Improved error handling when a mode attempts to write to a restricted file.
*   Improved styling for mode/configuration dropdowns. (thanks psv2522!)
````

## File: docs/update-notes/v3.3.4.md
````markdown
# Roo Code 3.3.4 Release Notes

This release brings significantly faster diff editing performance, configurable MCP timeouts, and enhanced Code Actions.

## Feature Highlights

*   **Faster Diff Edits:** Drastically improved the speed of applying diff edits (up to 10x faster). (thanks hannesrudolph, KyleHerndon!)
*   **Configurable MCP Timeout:** Added per-server network timeout configuration for MCP, ranging from 15 seconds to an hour.
*   **Enhanced Code Actions:** Added explain/improve/fix code actions to the context menu, problems tab, and lightbulb indicators. Added an option to perform these actions in the current task or a new one. (thanks samhvw8!)
````

## File: docs/update-notes/v3.3.5.md
````markdown
# Roo Code 3.3.5 Release Notes

This release brings context window visibility, auto-approval for mode switching, new experimental editing tools, and DeepSeek improvements.

## Feature Highlights

*   **Context Window Visibility:** Made information about the conversation's token count and context capacity visible in the task header and available to models. (thanks MuriloFP!)
*   **Auto-Approve Mode Switching:** Added checkboxes to auto-approve mode switch requests. (thanks MuriloFP!)
*   **Experimental Editing Tools:** Added new experimental tools: `insert_content` (insert text at line number) and `search_and_replace` (replace text/regex). (thanks samhvw8!)

## Provider Improvements

*   **DeepSeek R1:** Improved support by capturing reasoning, supporting more OpenRouter variants, fixing crashes on empty chunks, and avoiding system messages. (thanks Szpadel!)
````

## File: docs/update-notes/v3.3.6.md
````markdown
# Roo Code 3.3.6 Release Notes

This release introduces the `new_task` tool, UI improvements, and new provider support.

## Feature Highlights

*   **New Task Tool:** Added a `new_task` tool allowing Roo to start new tasks programmatically with an initial message and mode, enabling workflows like context continuation or memory bank updates.

## UI Improvements

*   Enhanced dropdown visuals for a better user experience. (thanks psv2522!)

## Provider Support

*   Added support for Perplexity Sonar Reasoning models. (thanks Szpadel!)
*   Added support for the Unbound provider. (thanks vigneshsubbiah16!)

## Bug Fixes

*   Fixed a critical bug affecting `qwen-max` and potentially other OpenAI-compatible providers. (thanks Szpadel!)
````

## File: docs/update-notes/v3.3.7.md
````markdown
# Roo Code 3.3.7 Release Notes

This release adds support for `o3-mini`, improves Code Actions and tool interactions, and introduces API rate limiting.

## Feature Highlights

*   Added support for the `o3-mini` model. (thanks shpigunov!)
*   Improved Code Actions: Added ability to select code and add it directly to context, plus bug fixes. (thanks samhvw8!)
*   Added the ability to include a message when approving or rejecting tool use. (thanks napter!)
*   Added an exponential backoff strategy for API retries.
*   Added an optional slider in Advanced Settings to enable rate limiting API requests (e.g., wait at least X seconds between requests).

## Improvements & Fixes

*   Improved chat input box styling. (thanks psv2522!)
*   Captured reasoning from more variants of DeepSeek R1. (thanks Szpadel!)
*   Tweaked prompts to improve Roo's ability to create new custom modes.
````

## File: docs/update-notes/v3.3.8.md
````markdown
# Roo Code 3.3.8 Release Notes

This patch release includes provider fixes and a new prompt customization option.

## Fixes & Improvements

*   Fixed `o3-mini` model support in the Glama provider. (thanks Punkpeye!)
*   Added an option to omit instructions for creating MCP servers from the system prompt. (thanks samhvw8!)
*   Fixed a bug where renaming API profiles without actually changing the name could delete them. (thanks samhvw8!)
````

## File: docs/update-notes/v3.3.9.md
````markdown
# Roo Code 3.3.9 Release Notes

This release adds support for new OpenAI models.

## Provider Updates

*   Added support for `o3-mini-high` and `o3-mini-low` models.
````

## File: docs/update-notes/v3.7.0.md
````markdown
# Roo Code 3.7.0 Release Notes (2025-02-24)

This release introduces support for Claude Sonnet 3.7.

## Provider Updates

*   Added support for the Claude Sonnet 3.7 model, which shows improvements in front-end/full-stack development, agentic workflows, math, coding, and instruction-following. (thanks lupuletic, cte!)
````

## File: docs/update-notes/v3.7.1.md
````markdown
# Roo Code 3.7.1 Release Notes (2025-02-24)

This release adds AWS Bedrock support for Claude Sonnet 3.7.

## Provider Updates

*   Added AWS Bedrock support for Claude Sonnet 3.7.
*   Updated default model selections to use Sonnet 3.7 instead of 3.5 where applicable.
````

## File: docs/update-notes/v3.7.10.md
````markdown
# Roo Code 3.7.10 Release Notes (2025-03-01)

This release adds support for Mermaid diagrams, expands model options, and introduces mode switching shortcuts.

## Feature Highlights

*   **Mermaid Diagrams Support:** Added support for rendering Mermaid diagrams directly in chat conversations. (thanks Cline!)
*   **Vertex AI Gemini Models:** Added Gemini models on Vertex AI provider. (thanks ashktn!)
*   **Mode Switching Shortcuts:** Introduced keyboard shortcuts for switching between modes. Click the mode popup menu to view available shortcuts. (thanks aheizi!)
````

## File: docs/update-notes/v3.7.11.md
````markdown
# Roo Code 3.7.11 Release Notes (2025-03-02)

This patch release includes fixes for model compatibility and mode handling.

## Updates & Fixes

*   Fixed compatibility issues with some Claude models.
*   Included custom modes in the mode switching keyboard shortcut list.
*   Supported read-only modes that can still execute commands.
````

## File: docs/update-notes/v3.7.12.md
````markdown
# Roo Code 3.7.12 Release Notes (2025-03-03)

This release enhances context handling, thinking capabilities, and configuration options.

## Thinking & Context Management

*   Expanded max tokens for thinking models to 128k and max thinking budget to over 100k. (thanks monotykamary!)
*   Used the `count_tokens` API in the Anthropic provider for more accurate context window management.
*   Defaulted middle-out compression to 'on' for OpenRouter.
*   Excluded MCP instructions from the prompt if the mode doesn't support MCP.

## Configuration Improvements

*   Added a checkbox to disable the browser tool.
*   Showed a warning if checkpoints are taking too long to load.
*   Updated the warning text for the VS Code Language Models API.

## Bug Fixes

*   Fixed an issue where the keyboard mode switcher wasn't updating the API profile. (thanks aheizi!)
*   Correctly populated the default OpenRouter model on the welcome screen.
````

## File: docs/update-notes/v3.7.2.md
````markdown
# Roo Code 3.7.2 Release Notes (2025-02-24)

This patch release includes fixes related to Claude Sonnet 3.7 integration and prompt adjustments.

## Bug Fixes & Improvements

*   Fixed computer use and prompt caching for OpenRouter's `anthropic/claude-3.7-sonnet:beta`. (thanks cte!)
*   Fixed sliding window calculations for Sonnet 3.7 that were causing context window overflows. (thanks cte!)
*   Encouraged diff editing more strongly in the system prompt. (thanks hannesrudolph!)
````

## File: docs/update-notes/v3.7.3.md
````markdown
# Roo Code 3.7.3 Release Notes (2025-02-25)

This release introduces support for Claude Sonnet 3.7's extended "Thinking" capability via the Anthropic API.

## Feature Highlights

*   **Extended "Thinking" Support:** Added support for extended ["Thinking"](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking) with Claude Sonnet 3.7 via the Anthropic provider. This allows the model to allocate more tokens to internal reasoning for complex tasks, potentially improving response quality. (thanks cte!)
````

## File: docs/update-notes/v3.7.4.md
````markdown
# Roo Code 3.7.4 Release Notes (2025-02-25)

This patch release addresses a bug related to profile switching.

## Bug Fixes

*   Fixed a bug that prevented the "Thinking" setting from properly updating when switching API configuration profiles.
````

## File: docs/update-notes/v3.7.5.md
````markdown
# Roo Code 3.7.5 Release Notes (2025-02-26)

This release includes important updates to model configuration for thinking models and bug fixes.

## Model Configuration Updates

*   **Thinking Model Versions:** Introduced separate `:thinking` versions for Anthropic and OpenRouter Sonnet 3.7 models to support configurable thinking budgets. Users previously using the thinking feature need to select these new model versions in their provider settings and adjust the thinking budget slider as needed.

## Bug Fixes

*   Fixed context window calculation errors ("input length and max_tokens exceed context limit").
*   Fixed various issues with the model picker UI. (thanks System233!)
*   Fixed model input/output cost parsing. (thanks System233!)

## Feature Highlights

*   Added the ability to @-mention files by holding Shift while dragging them from the File Explorer into the chat input.
````

## File: docs/update-notes/v3.7.6.md
````markdown
# Roo Code 3.7.6 Release Notes (2025-02-26)

This release introduces multi-file drag-and-drop, configurable output tokens for thinking models, and bug fixes.

## Feature Highlights

*   Added support for dragging and dropping multiple files into the chat input.
*   Added a slider to control the maximum output tokens specifically for thinking models.

## Bug Fixes

*   Improved handling of very long text in chat messages. (thanks joemanley201!)
*   Truncated `search_files` output to prevent potential extension crashes.
*   Improved OpenRouter error handling (replaced generic "Provider Error").
````

## File: docs/update-notes/v3.7.7.md
````markdown
# Roo Code 3.7.7 Release Notes (2025-02-27)

This release graduates the Checkpoints feature out of beta and includes minor fixes and UX tweaks.

## Feature Highlights

*   **Checkpoints Enabled by Default:** The Checkpoints feature, which automatically tracks project changes during tasks for review or rollback, is now enabled by default. It can be disabled in Advanced Settings.

## Bug Fixes & UX Tweaks

*   Fixed the "Enhance Prompt" button functionality when using Thinking Sonnet models.
*   Added tooltips to various buttons for clarity.
````

## File: docs/update-notes/v3.7.8.md
````markdown
# Roo Code 3.7.8 Release Notes (2025-02-27)

This release adds support for GPT-4.5 Preview, Claude optimizations, and an advanced system prompt customization feature.

## Provider & Model Support

*   Added support for `gpt-4.5-preview`.
*   Added Vertex AI prompt caching support for Claude models. (thanks aitoroses, lupuletic!)

## Advanced Feature

*   **Custom System Prompts (Advanced Users Only):** Added the ability to completely replace the system prompt for modes by creating a file at `.roo/system-prompt-[slug]` in the workspace. **Warning:** This bypasses built-in safeguards and carries a high risk of unexpected behavior. Use with extreme caution.
````

## File: docs/update-notes/v3.7.9.md
````markdown
# Roo Code 3.7.9 Release Notes (2025-03-01)

This release includes smarter context management, terminal parsing improvements, and UI enhancements.

## Improvements & Fixes

*   Implemented smarter context window management to reduce context limit errors.
*   Improved terminal output parsing logic to work around a VSCode bug affecting command output visibility. (thanks KJ7LNW!)
*   Added support for Claude Sonnet 3.7 thinking via Vertex AI. (thanks lupuletic!)
*   Fixed `maxTokens` defaults for Claude 3.7 Sonnet models.
*   Fixed UI dropdown hover colors. (thanks SamirSaji!)
*   Improved appearance of thinking blocks.
*   Enhanced the delete task confirmation dialog.
````

## File: docs/update-notes/v3.8.0.md
````markdown
# Roo Code 3.8.0 Release Notes (2025-03-07)

This major release introduces Boomerang Tasks, multi-block diff editing, multi-window support, `.rooignore`, Human Relay provider, and opt-in telemetry, alongside numerous improvements and fixes.

## Feature Highlights

*   **Boomerang Tasks:** When using the `new_task` tool, child tasks now return a summary to the parent task upon completion, enabling automated hand-offs and results retrieval. (thanks shaybc!)
*   **Multi-Block Diff Strategy (Experimental):** Added a new experimental diff editing strategy that applies multiple diff edits simultaneously for potentially faster and more complex changes. (thanks qdaxb!)
*   **Multi-Window Support:** Roo Code can now run in multiple VS Code editor windows simultaneously. (thanks samhvw8!)
*   **.rooignore Support:** Added support for a `.rooignore` file to prevent Roo Code from reading/writing specified files, with an option to exclude them from search/list results as well. (thanks mrubens, Cline!)
*   **Human Relay Provider:** Introduced a new provider allowing manual copying of information to a Web AI and pasting the response back into Roo Code when direct integration isn't possible. (thanks NyxJae!)
*   **Telemetry (Opt-in):** Added opt-in telemetry to collect anonymous usage data, helping improve Roo Code faster. Can be disabled anytime. [Privacy Policy](https://github.com/RooVetGit/Roo-Code/blob/main/PRIVACY.md). (thanks mrubens, Cline!)

## UX Improvements

*   Redesigned the settings page for easier navigation. (thanks cte!)
*   Made checkpoints asynchronous and excluded more files to speed them up. (thanks cte!)
*   Improved UI for mode/provider selectors in chat. (thanks mrubens!)
*   Improved styling of task headers. (thanks monotykamary!)

## Provider Support

*   Added credential-based authentication for Vertex AI, allowing easy switching between Google Cloud accounts. (thanks eonghk!)
*   Updated the DeepSeek provider with the correct `baseUrl` and fixed caching tracking. (thanks olweraltuve!)
*   Added observability for OpenAI providers. (thanks refactorthis!)
*   Supported speculative decoding for LM Studio local models. (thanks adamwlarson!)

## Bug Fixes

*   Fixed terminal overload issues ("gray screen of death") and other terminal problems. (thanks cte!)
*   Improved context mention path handling on Windows. (thanks samhvw8!)
````

## File: docs/update-notes/v3.8.1.md
````markdown
# Roo Code 3.8.1 Release Notes (2025-03-07)

This patch release includes UI improvements, bug fixes, and added telemetry.

## Improvements & Fixes

*   Showed the reserved output tokens in the context window visualization.
*   Improved the UI of the configuration profile dropdown. (thanks DeXtroTip!)
*   Fixed a bug where custom temperature could not be unchecked. (thanks System233!)
*   Fixed a bug where decimal prices could not be entered for OpenAI-compatible providers. (thanks System233!)
*   Fixed a bug with the enhance prompt feature on Sonnet 3.7 with a high thinking budget. (thanks moqimoqidea!)
*   Fixed a bug with context window management for thinking models. (thanks ReadyPlayerEmma!)
*   Fixed a bug where checkpoints were no longer enabled by default.
*   Added extension and VSCode versions to telemetry data.
````

## File: docs/update-notes/v3.8.2.md
````markdown
# Roo Code 3.8.2 Release Notes (2025-03-08)

This release introduces auto-approval for subtasks, UI improvements, and bug fixes.

## Feature Highlights

*   Added an auto-approval toggle for Boomerang Task (subtask) creation and completion. (thanks shaybc!)
*   Added a progress indicator when using the multi-diff editing strategy. (thanks qdaxb!)
*   Added `o3-mini` support to the OpenAI-compatible provider. (thanks yt3trees!)

## Bug Fixes

*   Fixed an encoding issue causing unreadable characters at the beginning of files sometimes.
*   Fixed an issue where settings dropdowns were truncated in some cases.
````

## File: docs/update-notes/v3.8.3.md
````markdown
# Roo Code 3.8.3 Release Notes (2025-03-09)

This patch release addresses a UI issue.

## Bug Fixes

*   Fixed an issue where the VS Code LM API model picker dropdown was truncated.
````

## File: docs/update-notes/v3.8.4.md
````markdown
# Roo Code 3.8.4 Release Notes (2025-03-09)

This patch release includes a temporary rollback and a new prompt option.

## Updates

*   Rolled back the multi-diff progress indicator temporarily to fix a double-confirmation issue when saving edits.
*   Added an option in the Prompts tab to disable instructions for creating/editing custom modes, saving tokens. (thanks hannesrudolph!)
````

## File: docs/update-notes/v3.8.5.md
````markdown
# Roo Code 3.8.5 Release Notes (2025-03-12)

This release introduces significant refactoring, remote browser support, MCP over SSE, and various provider/model updates.

## Feature Highlights

*   **Terminal Architecture Refactor:** Addressed critical issues with the terminal architecture for improved stability and performance. (thanks KJ7LNW!)
*   **MCP over SSE:** Added support for Model Context Protocol (MCP) communication over Server-Sent Events (SSE). (thanks aheizi!)
*   **Remote Browser Support:** Added the ability to connect to a remote Chrome browser instance. (thanks afshawnlotfi!)

## Provider & Model Support

*   Added custom `baseUrl` support for Google AI Studio Gemini. (thanks dqroid!)
*   Added OpenAI-compatible DeepSeek/QwQ reasoning support. (thanks lightrabbit!)
*   Added Anthropic-style prompt caching in the OpenAI-compatible provider. (thanks dleen!)
*   Added Deepseek R1 model for AWS Bedrock. (thanks ATempsch!)
*   Added `gemini-2.0-pro-exp-02-05` model to Vertex AI provider. (thanks shohei-ihaya!)
*   Added support for custom ARNs in AWS Bedrock. (thanks Smartsheet-JB-Brown!)
*   Updated Bedrock prices to the latest. (thanks Smartsheet-JB-Brown!)

## Improvements & Fixes

*   Preserved parent-child relationship when cancelling Boomerang Tasks (subtasks). (thanks cannuri!)
*   Added PowerShell-specific command handling. (thanks KJ7LNW!)
*   Fixed MarkdownBlock text color for Dark High Contrast theme. (thanks cannuri!)
*   Brought back progress status indicator for multi-diff edits. (thanks qdaxb!)
*   Refactored alert dialog styles to use the correct VSCode theme. (thanks cannuri!)
*   Updated MCP servers directory path for platform compatibility. (thanks hannesrudolph!)
*   Fixed browser system prompt inclusion rules. (thanks cannuri!)
*   Fixed OpenAI-style cost calculations. (thanks dtrugman!)
*   Fixed issue allowing use of an excluded directory as the working directory. (thanks Szpadel!)
*   Added Kotlin language support in `list_code_definition_names` tool. (thanks kohii!)
*   Improved handling of diff application errors. (thanks qdaxb!)
*   Fixed OpenRouter custom `baseUrl` support.
*   Fixed usage tracking for SiliconFlow and other providers that include usage on every chunk.
*   Added telemetry for checkpoint save/restore/diff and diff strategies.
*   Published git tags to GitHub from CI. (thanks pdecat!)
````

## File: docs/update-notes/v3.8.6.md
````markdown
# Roo Code 3.8.6 Release Notes (2025-03-13)

This patch release temporarily reverts a feature for stability.

## Updates

*   Reverted SSE MCP support temporarily while investigating configuration validation issues.
````

## File: docs/update-notes/v3.9.0.md
````markdown
# Roo Code 3.9.0 Release Notes (2025-03-18)

This release introduces internationalization, remote MCP connectivity via SSE, text-to-speech, and numerous other improvements.

## Feature Highlights

*   **Internationalization:** Roo Code now supports 14 languages: Simplified Chinese, Traditional Chinese, Spanish, Hindi, French, Portuguese, German, Japanese, Korean, Italian, Turkish, Vietnamese, Polish, and Catalan. Change language in Advanced Settings > Language. (thanks feifei325!)
*   **MCP Remote Connectivity (SSE):** Added support for connecting to remote MCP servers using Server-Sent Events (SSE), complementing existing stdio support. (thanks aheizi!)
*   **Text-to-Speech:** Added an option for Roo to provide audio feedback alongside visual responses. Enable in Advanced Settings > Notifications. (thanks heyseth!)
*   **OpenRouter Provider Selection:** Added the ability to choose a specific provider when using OpenRouter models via the "Configure Profile" settings. (thanks PhunkyBob!)
*   **Batch History Deletion:** Added support for selecting and deleting multiple task history items at once via the "VIEW ALL" history screen. (thanks aheizi!)

## Terminal Improvements

*   Made the terminal shell integration timeout configurable (1-60 seconds) via Advanced Settings to resolve issues with long shell startup times. (thanks filthy, kiwina, KJ7LNW!)
*   Fixed a race condition that could cause terminal output to hang or not be recognized. (thanks KJ7LNW!)

## Bug Fixes & General Improvements

*   Improved task deletion when underlying files are missing. (thanks GitlyHallows!)
*   Improved support for NixOS & direnv. (thanks wkordalski!)
*   Exposed task stack in `RooCodeAPI`. (thanks franekp!)
*   Fixed Human Relay to work on the welcome screen and added internationalization support. (thanks NyxJae!)
*   Fixed display updating for Bedrock custom ARNs that are prompt routers. (thanks Smartsheet-JB-Brown!)
*   Fixed exclusion of search highlighting when copying items from task history. (thanks im47cn!)
*   Fixed context mentions to work with multiple-workspace projects. (thanks teddyOOXX!)
*   Fixed task history saving when running multiple Roo instances. (thanks samhvw8!)
*   Fixed wheel scrolling when Roo is opened in editor tabs. (thanks GitlyHallows!)
*   Fixed file mentions when using the "Add to context" code action. (thanks qdaxb!)
*   Gave models visibility into the current task's API cost.
````

## File: docs/update-notes/v3.9.1.md
````markdown
# Roo Code 3.9.1 Release Notes (2025-03-18)

This patch release improves language handling in system prompts.

## Updates

*   Ensured the current language setting is correctly passed to the system prompt, allowing Roo to think and respond in the selected language.
````

## File: docs/update-notes/v3.9.2.md
````markdown
# Roo Code 3.9.2 Release Notes (2025-03-19)

This patch release includes workflow updates, UI fixes, and build optimizations.

## Updates & Fixes

*   Updated GitHub Actions workflow to automatically create GitHub Releases. (thanks pdecat!)
*   Correctly persisted the text-to-speech speed state. (thanks heyseth!)
*   Fixed French translations. (thanks arthurauffray!)
*   Optimized build time for local development. (thanks KJ7LNW!)
*   Applied VSCode theme fixes for select, dropdown, and command components.
*   Reinstated the ability to manually enter a model name in the model picker.
*   Fixed internationalization of the announcement title and the browser UI.
````

## File: docs/community.md
````markdown
# Community Projects

Welcome to the Roo Code community section! Here you'll find community projects that extend Roo Code's capabilities and a gallery of custom modes shared by other users to enhance your development workflow.


## 🔥 SPARC by [@ruvnet](https://github.com/ruvnet)

SPARC orchestrates set and forget agentic development workflows through a structured framework using Roo Code Boomerang Tasks. It automates complex code development while maintaining complete developer control.
The framework is [open-source](https://github.com/ruvnet/rUv-dev) with comprehensive documentation and examples, supporting everything from simple applications to complex systems.

### Key Features

- **Scaffolding**: Generate complete project structures by running `npx create-sparc init` in your root folder, including sub directories, configurations, and boilerplate code
- **Prompting**: Optimized templates for consistent, high-quality code generation
- **Boomerang Mode**: Define requirements → generate code → review → refine in a continuous feedback loop
- **Boomerang Tasks**: Define specific development tasks that can be "thrown" to Roo and returned with implementations, enabling focused problem-solving
- **Workflow Orchestration**: Coordinate complex development sequences with predefined task chains and dependency management
- **MCP Services**: Extend Roo's capabilities with specialized tools and resources through Model Context Protocol integration
- **Mode Management**: Context-aware settings that optimize behavior for specific development phases

#### Quick Start
You don't need to install this [package directly](https://www.npmjs.com/package/create-sparc). Just run npx from your root directory to install it:

```bash
 npx create-sparc init
 npx create-sparc --help
```


## Memory Bank Project by [@GreatScottyMac](https://github.com/GreatScottyMac)

The [Roo Code Memory Bank](https://github.com/GreatScottyMac/roo-code-memory-bank) project solves a critical challenge in AI-assisted development: **maintaining context across sessions**. By providing a structured memory system integrated with VS Code, it ensures your AI assistant maintains a deep understanding of your project across sessions.

**Key Features**

- 🧠 **Persistent Context**: Remembers project details across sessions and maintains consistent understanding of your codebase
- 🔄 **Smart Workflows**: Mode-based operation with automatic context switching and project-specific customization
- 📊 **Knowledge Management**: Structured documentation with technical decision tracking and automated progress monitoring

Check out the [Memory Bank project on GitHub](https://github.com/GreatScottyMac/roo-code-memory-bank) to get started!

## Roo Code Tips & Tricks by [@Michaelzag](https://github.com/Michaelzag)

[Roo Code Tips & Tricks](https://github.com/Michaelzag/RooCode-Tips-Tricks) is a collection of files designed to supercharge your Roo Code experience and maximize productivity. For those looking for a memory management system: check out the [Handoff System](https://github.com/Michaelzag/RooCode-Tips-Tricks/blob/main/handoffs/handoff-system.md) which is a simple yet powerful way to maintain optimal LLM performance during extended projects while automatically creating valuable documentation. 

## Roo Code Dynamic Rules by [@cannuri](https://github.com/cannuri)

Inspired by LangMem, this simple Rule allows you to define new rules and delete them on the fly simply by writing `RULE/NORULE: (your new rule)` in your message. Roo Code will then add it to or remove it from the `.clinerules` file. This way you can quickly define project specific rules on the fly and build them up step by step. Check out [Roo Code Dynamic Rules](https://github.com/cannuri/roo-code-dynamic-rules) on Github.

## Roo Commander Project by [@jezweb](https://github.com/jezweb)

The [Roo Commander](https://github.com/jezweb/roo-commander) project provides a sophisticated collection of custom modes for Roo Code designed to manage software development projects using a structured, multi-agent approach. It introduces a virtual, specialized software development team orchestrated by the **👑 Roo Commander** mode, leveraging specialized roles and a structured project journal for enhanced context management and workflow organization.

## Custom Modes Gallery

Share and discover custom modes created by the community! Learn how to create and configure custom modes in the [Custom Modes documentation](/features/custom-modes). To add your own custom mode to the gallery, create a pull request from the "Edit this page" link below.

### Jest Test Engineer by [@mrubens](https://github.com/mrubens)

A specialized mode for writing and maintaining Jest test suites with TypeScript support. This mode is focused on TDD practices with built-in best practices for test organization, TypeScript-aware test writing, and restricted access to test-related files only.

```json
{
  "slug": "jest-test-engineer",
  "name": "Jest Test Engineer",
  "roleDefinition": "You are Roo, a Jest testing specialist with deep expertise in:\n- Writing and maintaining Jest test suites\n- Test-driven development (TDD) practices\n- Mocking and stubbing with Jest\n- Integration testing strategies\n- TypeScript testing patterns\n- Code coverage analysis\n- Test performance optimization\n\nYour focus is on maintaining high test quality and coverage across the codebase, working primarily with:\n- Test files in __tests__ directories\n- Mock implementations in __mocks__\n- Test utilities and helpers\n- Jest configuration and setup\n\nYou ensure tests are:\n- Well-structured and maintainable\n- Following Jest best practices\n- Properly typed with TypeScript\n- Providing meaningful coverage\n- Using appropriate mocking strategies",
  "groups": [
    "read",
    "browser",
    "command",
    ["edit", {
      "fileRegex": "(__tests__/.*|__mocks__/.*|\\.test\\.(ts|tsx|js|jsx)$|/test/.*|jest\\.config\\.(js|ts)$)",
      "description": "Test files, mocks, and Jest configuration"
    }]
  ],
  "customInstructions": "When writing tests:\n- Always use describe/it blocks for clear test organization\n- Include meaningful test descriptions\n- Use beforeEach/afterEach for proper test isolation\n- Implement proper error cases\n- Add JSDoc comments for complex test scenarios\n- Ensure mocks are properly typed\n- Verify both positive and negative test cases"
}
```

### ResearchMode by [@JamesCherished](https://github.com/James-Cherished-Inc/)

This mode integrates Perplexity API for web search and Lynx for page analysis, enabling autonomous research-augmented software engineering within the Roo Code VS Code extension. It uses the Perplexity API (via a local MCP server) for high-quality, up-to-date web search results and leverages the Lynx text-based browser for deep page analysis, code extraction, and documentation summarization directly within Roo Code. Check out the [ResearchMode project on GitHub](https://github.com/James-Cherished-Inc/roo-research-mode).


```json
{
  "slug": "research-mode",
  "name": "ResearchMode",
  "roleDefinition": "You are Roo, a highly skilled software engineer and researcher. Your primary function is to design, write, refactor, and debug code, seamlessly integrating your research capabilities (Perplexity-powered web search and Lynx-based page analysis) into every stage of the development process to augment your programming abilities and make informed decisions.\\nYou automatically:\\n1. Manage the Perplexity MCP server for web search to gather relevant information and insights. \\n2. Utilize Lynx for in-depth text-based page analysis and precise code extraction. \\n3. Maintain research context across multiple queries to ensure a cohesive and comprehensive understanding of the subject matter. \\n4. Meticulously document all research influences in project files.\\n5. Preserve the original formatting of extracted code blocks to ensure accuracy and readability. \\n6. Rigorously validate the relevance and applicability of research findings before implementing them in code.\\n\\n**You confirm whether the workspace has already set up your research capabilities before proceeding. You implement your research capabilities yourself if this is your first time in this workspace.**\\n\\nYou maintain context, cite sources, and ensure all code and research actions are actionable, reproducible, and well-documented.",
  "customInstructions": "## To achieve your goal, follow these steps as a workflow:\n\n1.  **Initiate Research:**\n    a.  For coding tasks requiring external knowledge, begin by clearly defining the research goal. Use the format `## [TIMESTAMP] Research Goal: [CLEAR OBJECTIVE]` to start a new research session.\n    b.  Formulate a search query that incorporates the code context and the specific information you need. Be as precise as possible to narrow down the results.\n    You should use Perplexity to find URLs, but you may also ask the user for URLs that you will extract text from directly using Lynx.\n    When researching for a specific coding task, include relevant code context (such as the current function, file snippet, or error message) in your research queries to make them more targeted and actionable. \n\n\n2.  **Execute Web Search with Perplexity to find sources:**\n    a.  You can use the `node ./index.js` command to query the Perplexity API directly from the command line. This is a CLI command and should be run in the terminal. Use the following format:\n        `node ./index.js --query \"your search query\"`\n    For more complex queries, or as a fallback when the MCP connection is broken, you should use POST requests to the MCP server. To do this, use the `curl` command with the following format:\n        `curl -X POST -H \"Content-Type: application/json\" -d '{\"query\": \"your search query\"}' http://localhost:3000/`\n    Use the sonar-pro model (or sonar as a fallback). Return 5 results (title, URL, snippet) per query maximum, in the following format:\n     ```\n     1. [Title](URL): Brief snippet\n     2. [Title](URL): Brief snippet\n     ```\n\tb.  Evaluate the search results and select the 1-2 most relevant sources for further analysis. Consider factors such as the source's credibility, the relevance of the content, and the clarity of the information presented.\n\n\n3.  **Analyze Sources with Lynx:**\n    a.  Utilize Lynx in the CLI to extract and analyze the content of the selected sources. Use the following command: `lynx -dump {URL} | grep -A 15 -E 'function|class|def|interface|example'`\n    b.  This command will extract the text content of the page, filter it to identify code-related elements (functions, classes, etc.), and display the surrounding context.\n    Lynx supports:\n     - Full page dumps (`-dump`)\n     - Link extraction (`-listonly`)\n     - Code block identification (`grep` patterns)\n    c.  If Lynx encounters errors, fallback to `curl | html2text` to extract the text content.\n    d. Summarize the most important points in a few key sentences.\n\n4.  **Extract Code Blocks:**\n    a.  Carefully extract code blocks from the Lynx output, preserving the original syntax and formatting. This ensures that the code can be easily integrated into the project. You should use:  `lynx -dump {URL} | grep -A 10 \"import\\|def\\|fn\\|class\"`\n    b.  Pay close attention to the surrounding context to understand how the code works and how it can be adapted to the specific task at hand.\n\n5.  **Document Research Influences:**\n    Meticulously document all research influences in the project files. When research influences a code change or technical decision, automatically document the key findings and update the code comments & project documentation with their impact.\n    This includes:\n        *   Adding detailed code comments with source URLs to provide clear traceability. Use the following format:\n            ```js\n            // [IMPLEMENTATION NOTE] - Based on {Source Title}\n            // {URL} - Extracted {Code/Pattern} at {Timestamp}\n            ```\n        *   Maintaining a comprehensive research-log.md file (chronological record) to track research progress and findings.\n        *   Creating and maintaining a well-organized technical\_decisions.md file (key rationale) to explain the reasoning behind technical choices.\n\n6.  **Integrate Code:**\n    a.  Before integrating any code, rigorously validate its relevance and applicability to the task at hand. Ensure that the code is compatible with the existing codebase and that it follows the project's coding standards.\n    b.  Annotate adapted code with origin markers to clearly indicate the source of the code.\n    c.  Verify security and compatibility before including any third-party code.\n\n7.  **Handle Errors:**\n    a.  If the Perplexity API fails, retry the request once after 5 seconds. If the request continues to fail, log the error and proceed with alternative approaches.\n    b.  If Lynx encounters errors, fallback to `curl | html2text` to extract the text content.\n    c.  If a cache miss occurs, proceed with a fresh search.\n\n8.  **Optimize Performance:**\n    a.  Cache frequent queries to reduce API usage and improve response times.\n    b.  Prefer text-based sites (docs, blogs) for Lynx analysis, as they tend to be more efficient and reliable.\n\n\nExample Lynx command chain for React patterns:\n```bash\nlynx -dump https://example.com/react-best-practices | \\\n  grep -i -A 20 'component structure' | \\\n  sed '/Advertisement/d; /Related links/d'\n```\n\n---"
  "groups": [
    "read",
    "edit",
    "command",
    "browser",
    "mcp"
  ],
  "source": "global"
}
```


### VibeMode by [@richardwhiteii](https://github.com/richardwhiteii)

A mode for transforming natural language descriptions into working code, embracing intuitive and flow-based development.

```json
{
  "slug": "vibemode",
  "name": "VibeMode",
  "roleDefinition": "You are Roo, a Vibe Coding assistant that transforms natural language descriptions into working code. You embrace the philosophy that coding should be intuitive and flow-based, where developers can 'give in to the vibes' and focus on what they want to build rather than how to build it.\n\nDescription: An AI coding partner focused on natural language programming and vibe-based development with continuous testing\n\nSystem Prompt: You are a Vibe Coding assistant that helps transform natural language descriptions into working code. Focus on understanding intent over technical specifics while ensuring functionality through continuous testing. Embrace experimentation and rapid iteration with built-in validation.\n\nGoals:\n- Transform natural language descriptions into functional code\n- Maintain flow state by handling technical details automatically\n- Suggest improvements while preserving user intent\n- Handle error resolution autonomously when possible\n- Ensure code quality through continuous testing\n- Validate each iteration before proceeding\n\nPrimary Responsibilities:\n\nNatural Language Programming\n- Transform conversational descriptions into functional code\n- Handle technical implementation details automatically\n- Maintain creative flow by managing error resolution autonomously\n- Suggest improvements while preserving user intent\n- Generate appropriate tests for new functionality\n\nWorkflow Optimization\n- Minimize keyboard interaction by supporting voice-to-text input\n- Handle error messages through simple copy-paste resolution\n- Maintain context across development sessions\n- Switch to appropriate specialized modes when needed\n- Run tests automatically after each significant change\n- Provide immediate feedback on test results\n\nTest-Driven Development\n- Create tests before implementing new features\n- Validate changes through automated testing\n- Maintain test coverage throughout development\n- Flag potential issues early in the development cycle\n- Ensure backwards compatibility with existing functionality\n\nPrompt Templates:\n- Initialization: 'I want to create {description}'\n- Refinement: 'Can you modify this to {change}'\n- Error Handling: 'Fix this error: {error}'\n- Iteration: 'Let's improve {aspect}'\n- Test Creation: 'Generate tests for {feature}'\n- Validation: 'Verify the changes to {component}'",
  "groups": [
    "read",
    "edit",
    "browser",
    "command",
    "mcp"
  ],
  "customInstructions": "Prioritize working solutions over perfect code. Use error messages as learning opportunities. Maintain a conversational, encouraging tone. Suggest improvements without breaking flow. Document key decisions and assumptions. Focus on understanding intent over technical specifics. Embrace experimentation and rapid iteration. Switch to architect mode when structural changes are needed. Switch to ask mode when research is required. Switch to code mode when precise implementation is needed. Maintain context across mode transitions. Handle errors autonomously when possible. Preserve code context and conversation history. Support voice-to-text input through SuperWhisper integration. Generate and run tests for each new feature. Validate all changes through automated testing. Maintain test coverage throughout development. Provide immediate feedback on test results. Flag potential issues early in development cycle. Ensure backwards compatibility."
}
```

### Documentation Writer by [@jsonify](https://github.com/jsonify)

A mode that is specialized technical documentation expert, with access to read, edit, and command capabilities, focusing on creating clear, maintainable documentation while following best practices and consistent style guidelines.

```json
{
  "slug": "documentation-writer",
  "name": "Documentation Writer",
  "roleDefinition": "You are Roo, a technical documentation expert specializing in creating clear, comprehensive documentation for software projects. Your expertise includes:\nWriting clear, concise technical documentation\nCreating and maintaining README files, API documentation, and user guides\nFollowing documentation best practices and style guides\nUnderstanding code to accurately document its functionality\nOrganizing documentation in a logical, easily navigable structure",
  "customInstructions": "Focus on creating documentation that is clear, concise, and follows a consistent style. Use Markdown formatting effectively, and ensure documentation is well-organized and easily maintainable.",
  "groups": [
    "read",
    "edit",
    "command"
  ]
}
```

### User Story Creator by [@jsonify](https://github.com/jsonify)

This mode is an agile requirements specialist with structured templates for creating user stories, following a specific format that includes titles, user roles, goals, benefits, and detailed acceptance criteria, while considering various story types, edge cases, and technical implications.

```json
{
  "slug": "user-story-creator",
  "name": "User Story Creator",
  "roleDefinition": "You are Roo, an agile requirements specialist focused on creating clear, valuable user stories. Your expertise includes:\n- Crafting well-structured user stories following the standard format\n- Breaking down complex requirements into manageable stories\n- Identifying acceptance criteria and edge cases\n- Ensuring stories deliver business value\n- Maintaining consistent story quality and granularity",
  "customInstructions": "Expected User Story Format:\n\nTitle: [Brief descriptive title]\n\nAs a [specific user role/persona],\nI want to [clear action/goal],\nSo that [tangible benefit/value].\n\nAcceptance Criteria:\n1. [Criterion 1]\n2. [Criterion 2]\n3. [Criterion 3]\n\nStory Types to Consider:\n- Functional Stories (user interactions and features)\n- Non-functional Stories (performance, security, usability)\n- Epic Breakdown Stories (smaller, manageable pieces)\n- Technical Stories (architecture, infrastructure)\n\nEdge Cases and Considerations:\n- Error scenarios\n- Permission levels\n- Data validation\n- Performance requirements\n- Security implications",
  "groups": [
    "read",
    "edit",
    "command"
  ]
}
```

### Junior Developer Code Reviewer by [@jsonify](https://github.com/jsonify)

This mode is a supportive mentor-reviewer who provides educational, encouraging code reviews focused on junior developers' growth, combining positive reinforcement with detailed explanations of best practices, while having read and command access plus restricted edit capabilities for Markdown files only.

```json
{
  "slug": "junior-reviewer",
  "name": "Junior Dev Code Reviewer",
  "roleDefinition": "You are Roo, an experienced and supportive code reviewer focused on helping junior developers grow. Your reviews are educational, encouraging, and packed with learning opportunities.\n\nYour core principles are:\n\n1. EDUCATIONAL FOCUS\n- Explain concepts thoroughly with clear examples\n- Link to relevant documentation and learning resources\n- Break down complex issues into digestible pieces\n\n2. POSITIVE REINFORCEMENT\n- Acknowledge good practices and clever solutions\n- Frame feedback as learning opportunities\n- Encourage experimentation while ensuring code quality\n\n3. FUNDAMENTAL BEST PRACTICES\n- Focus on coding standards and common patterns\n- Explain the reasoning behind established practices\n- Introduce design patterns gradually\n\n4. CLEAR EXAMPLES\n- Provide before/after code samples\n- Explain changes step by step\n- Show alternative approaches when relevant\n\n5. STRUCTURED LEARNING\n- Organize feedback by learning objective\n- Build on previous review comments\n- Include exercises and challenges when appropriate",
  "customInstructions": "When reviewing code:\n1. Start with positive observations\n2. Include detailed explanations with each suggestion\n3. Link to relevant documentation\n4. Provide clear, educational code examples\n5. Use a supportive and encouraging tone\n6. Focus on fundamental best practices\n7. Create structured learning opportunities\n8. Always explain the 'why' behind each suggestion",
  "groups": [
    "read",
    [
      "edit",
      {
        "fileRegex": "\\.(md)$",
        "description": "Markdown files for review output"
      }
    ],
    "command"
  ]
}
```

### Senior Developer Code Reviewer by [@jsonify](https://github.com/jsonify)

This mode is a technical architect who conducts high-level code reviews focused on architectural impact, system scalability, security vulnerabilities, performance optimizations, and long-term maintainability, while having read and command access plus restricted edit capabilities for Markdown files only.

```json
{
  "slug": "senior-reviewer",
  "name": "Senior Dev Code Reviewer",
  "roleDefinition": "You are Roo, a highly experienced technical architect providing strategic code review feedback focused on system-level implications and architectural decisions.\n\nYour core principles are:\n\n1. ARCHITECTURAL IMPACT\n- Evaluate system-wide implications\n- Identify potential scalability bottlenecks\n- Assess technical debt implications\n\n2. PERFORMANCE & SECURITY\n- Focus on critical performance optimizations\n- Identify security vulnerabilities\n- Consider resource utilization\n\n3. EDGE CASES & RELIABILITY\n- Analyze error handling comprehensively\n- Consider edge cases and failure modes\n- Evaluate system resilience\n\n4. STRATEGIC IMPROVEMENTS\n- Suggest architectural refactoring\n- Identify technical debt\n- Consider long-term maintainability\n\n5. TRADE-OFF ANALYSIS\n- Discuss architectural trade-offs\n- Consider alternative approaches\n- Evaluate technical decisions",
  "customInstructions": "When reviewing code:\n1. Focus on architectural and systemic implications\n2. Evaluate performance and scalability concerns\n3. Consider security implications\n4. Analyze error handling and edge cases\n5. Suggest strategic improvements\n6. Discuss technical trade-offs\n7. Be direct and concise\n8. Think about long-term maintainability",
  "groups": [
    "read",
    [
      "edit",
      {
        "fileRegex": "\\.(md)$",
        "description": "Markdown files for review output"
      }
    ],
    "command"
  ]
}
```

### Orchestrator by [@mrubens](https://github.com/mrubens)

This mode is an orchestrator who gets things done by delegating subtasks to the other modes and reasoning about the results and next steps. It can't write any files aside from being able to create and update custom mode definitions.

```json
{
      "slug": "orchestrator",
      "name": "Orchestrator",
      "roleDefinition": "You are Roo, a strategic workflow orchestrator who coordinates complex tasks by delegating them to appropriate specialized modes. You have a comprehensive understanding of each mode's capabilities and limitations, allowing you to effectively break down complex problems into discrete tasks that can be solved by different specialists.",
      "customInstructions": "Your role is to coordinate complex workflows by delegating tasks to specialized modes. As an orchestrator, you should:\n\n1. When given a complex task, break it down into logical subtasks that can be delegated to appropriate specialized modes.\n\n2. For each subtask, create a new task with a clear, specific instruction using the new_task tool. Choose the most appropriate mode for each task based on its nature and requirements.\n\n3. Track and manage the progress of all subtasks. When a subtask is completed, analyze its results and determine the next steps.\n\n4. Help the user understand how the different subtasks fit together in the overall workflow. Provide clear reasoning about why you're delegating specific tasks to specific modes.\n\n5. When all subtasks are completed, synthesize the results and provide a comprehensive overview of what was accomplished.\n\n6. You can also manage custom modes by editing custom_modes.json and .roomodes files directly. This allows you to create, modify, or delete custom modes as part of your orchestration capabilities.\n\n7. Ask clarifying questions when necessary to better understand how to break down complex tasks effectively.\n\n8. Suggest improvements to the workflow based on the results of completed subtasks.",
      "groups": [
        "read",
        ["edit", { "fileRegex": "\\.roomodes$|cline_custom_modes\\.json$", "description": "Mode configuration files only" }]
      ],
      "source": "global"
    }
```

### Orchestrator by [@iiwish](https://github.com/iiwish)

An enhanced workflow orchestration mode based on [@mrubens](https://github.com/mrubens)' original design, with expanded capabilities for complex task management. This mode acts as a strategic coordinator that breaks down complex projects into well-defined subtasks, delegates them to specialized modes, and manages the overall workflow. It features advanced context management capabilities while maintaining permission restrictions that limit file editing to mode configuration files only.

## Key Enhancements

- **Granular Task Decomposition**: Strategies optimized for context length limitations.
- **Structured Dependency Management**: Includes checkpoint validation for task dependencies.
- **Improved Cross-Mode Communication**: Enhanced protocols for seamless interaction between modes.
- **Workflow Documentation and Visualization**: Tools for architecture documentation and visualization.
- **Context Preservation**: Techniques for managing complex multi-stage tasks effectively.

This orchestrator excels at managing large, complex projects by maintaining clear task boundaries while ensuring cohesive integration of results from different specialized modes.

```json
{
  "slug": "advanced-orchestrator",
  "name": "Advanced Orchestrator",
  "roleDefinition": "You are Roo, a strategic workflow orchestrator who coordinates complex tasks by delegating them to appropriate specialized modes. You have a comprehensive understanding of each mode's capabilities and limitations, allowing you to effectively break down complex problems into discrete tasks that can be solved by different specialists.",
  "customInstructions": "Your role is to coordinate complex workflows by delegating tasks to specialized modes. As an orchestrator, you should:\n\n1. When given a complex task, break it down into logical subtasks that can be delegated to appropriate specialized modes:\n   - Create specific, clearly defined, and scope-limited subtasks\n   - Ensure each subtask fits within context length limitations\n   - Make subtask divisions granular enough to prevent misunderstandings and information loss\n   - Prioritize core functionality implementation over iterative development when task complexity is high\n\n2. For each subtask, create a new task with a clear, specific instruction using the new_task tool:\n   - Choose the most appropriate mode for each task based on its nature and requirements\n   - Provide detailed requirements and summaries of completed work for context\n   - Store all subtask-related content in a dedicated prompt directory\n   - Ensure subtasks focus on their specific stage while maintaining compatibility with other modules\n\n3. Track and manage the progress of all subtasks:\n   - Arrange subtasks in a logical sequence based on dependencies\n   - Establish checkpoints to validate incremental achievements\n   - Reserve adequate context space for complex subtasks\n   - Define clear completion criteria for each subtask\n   - When a subtask is completed, analyze its results and determine the next steps\n\n4. Facilitate effective communication throughout the workflow:\n   - Use clear, natural language for subtask descriptions (avoid code blocks in descriptions)\n   - Provide sufficient context information when initiating each subtask\n   - Keep instructions concise and unambiguous\n   - Clearly label inputs and expected outputs for each subtask\n\n5. Help the user understand how the different subtasks fit together in the overall workflow:\n   - Provide clear reasoning about why you're delegating specific tasks to specific modes\n   - Document the workflow architecture and dependencies between subtasks\n   - Visualize the workflow when helpful for understanding\n\n6. When all subtasks are completed, synthesize the results and provide a comprehensive overview of what was accomplished.\n\n7. You can also manage custom modes by editing custom_modes.json and .roomodes files directly. This allows you to create, modify, or delete custom modes as part of your orchestration capabilities.\n\n8. Ask clarifying questions when necessary to better understand how to break down complex tasks effectively.\n\n9. Suggest improvements to the workflow based on the results of completed subtasks.",
  "groups": [
    "read",
    ["edit", { "fileRegex": "\\.roomodes$|cline_custom_modes\\.json$", "description": "Mode configuration files only" }]
  ],
  "source": "global"
}
```
````

## File: docs/faq.md
````markdown
import KangarooIcon from '@site/src/components/KangarooIcon';

# Frequently Asked Questions

This page answers some common questions about Roo Code.

## General

### What is Roo Code?

Roo Code is an AI-powered autonomous coding agent that lives in your editor.

### How does Roo Code work?

Roo Code uses large language models (LLMs) to understand your requests and translate them into actions.  It can:

*   Read and write files in your project.
*   Execute commands in your VS Code terminal.
*   Perform web browsing (if enabled).
*   Use external tools via the Model Context Protocol (MCP).

You interact with Roo Code through a chat interface, where you provide instructions and review/approve its proposed actions.

### What can Roo Code do?

Roo Code can help with a variety of coding tasks, including:

*   Generating code from natural language descriptions.
*   Refactoring existing code.
*   Fixing bugs.
*   Writing documentation.
*   Explaining code.
*   Answering questions about your codebase.
*   Automating repetitive tasks.
*   Creating new files and projects.

### Is Roo Code free to use?

The Roo Code extension itself is free and open-source. However, Roo Code relies on external API providers (like [Anthropic](providers/anthropic), [OpenAI](providers/openai), [OpenRouter](providers/openrouter), [Requesty](providers/requesty), etc.) for its AI capabilities.  These providers typically charge for API usage based on the number of tokens processed.  You will need to create an account and obtain an API key from your chosen provider.  See [Setting Up Your First AI Provider](getting-started/connecting-api-provider) for details.

### What are the risks of using Roo Code?

Roo Code is a powerful tool, and it's important to use it responsibly.  Here are some things to keep in mind:

*   **Roo Code can make mistakes.**  Always review Roo Code's proposed changes carefully before approving them.
*   **Roo Code can execute commands.**  Be very cautious about allowing Roo Code to run commands, especially if you're using auto-approval.
*   **Roo Code can access the internet.** If you're using a provider that supports web browsing, be aware that Roo Code could potentially access sensitive information.

## Setup & Installation

### How do I install Roo Code?

See the [Installation Guide](/getting-started/installing) for detailed instructions.

### Which API providers are supported?

Roo Code supports a wide range of API providers, including:
*   [Anthropic (Claude)](/providers/anthropic)
*   [OpenAI](/providers/openai)
*   [OpenRouter](/providers/openrouter)
*   [Google Gemini](/providers/gemini)
*   [Glama](/providers/glama)
*   [AWS Bedrock](/providers/bedrock)
*   [GCP Vertex AI](/providers/vertex)
*   [Ollama](/providers/ollama)
*   [LM Studio](/providers/lmstudio)
*   [DeepSeek](/providers/deepseek)
*   [Mistral](/providers/mistral)
*   [Unbound](/providers/unbound)
*   [Requesty](/providers/requesty)
*   [VS Code Language Model API](/providers/vscode-lm)

### How do I get an API key?
Each API provider has its own process for obtaining an API key.  See the [Setting Up Your First AI Provider](/getting-started/connecting-api-provider) for links to the relevant documentation for each provider.

### Can I use Roo Code with local models?
Yes, Roo Code supports running models locally using [Ollama](/providers/ollama) and [LM Studio](/providers/lmstudio).  See [Using Local Models](/advanced-usage/local-models) for instructions.

## Usage

### How do I start a new task?
Open the Roo Code panel (<KangarooIcon />) and type your task in the chat box. Be clear and specific about what you want Roo Code to do. See [Typing Your Requests](/basic-usage/typing-your-requests) for best practices.

### What are modes in Roo Code?
[Modes](/basic-usage/using-modes) are different personas that Roo Code can adopt, each with a specific focus and set of capabilities. The built-in modes are:

*   **Code:** For general-purpose coding tasks.
*   **Architect:** For planning and technical leadership.
*   **Ask:** For answering questions and providing information.
*   **Debug:** For systematic problem diagnosis.
You can also create [Custom Modes](/features/custom-modes).

### How do I switch between modes?

Use the dropdown menu in the chat input area to select a different mode, or use the `/` command to switch to a specific mode.

### What are tools and how do I use them?
[Tools](/basic-usage/how-tools-work) are how Roo Code interacts with your system.  Roo Code automatically selects and uses the appropriate tools to complete your tasks. You don't need to call tools directly. You will be prompted to approve or reject each tool use.

### What are context mentions?
[Context mentions](/basic-usage/context-mentions) are a way to provide Roo Code with specific information about your project, such as files, folders, or problems. Use the "@" symbol followed by the item you want to mention (e.g., `@/src/file.ts`, `@problems`).

### Can Roo Code access the internet?

Yes, if you are using a provider with a model that support web browsing. Be mindful of the security implications of allowing this.

### Can Roo Code run commands in my terminal?

Yes, Roo Code can execute commands in your VS Code terminal.  You will be prompted to approve each command before it's executed, unless you've enabled auto-approval for commands. Be extremely cautious about auto-approving commands. If you're experiencing issues with terminal commands, see the [Shell Integration Guide](/features/shell-integration) for troubleshooting.

### How do I provide feedback to Roo Code?

You can provide feedback by approving or rejecting Roo Code's proposed actions. You can provide additional feedback by using the feedback field.

### Can I customize Roo Code's behavior?

Yes, you can customize Roo Code in several ways:

*   **Custom Instructions:** Provide general instructions that apply to all modes, or mode-specific instructions.
*   **Custom Modes:** Create your own modes with tailored prompts and tool permissions.
*   **`.roorules` Files:** Create `.roorules` files in your project to provide additional guidelines.
*   **Settings:** Adjust various settings, such as auto-approval, diff editing, and more.

### Does Roo Code have any auto approval settings?
Yes, Roo Code has a few settings that when enabled will automatically approve actions. Find out more [here](/features/auto-approving-actions).

## Advanced Features

### Can I use Roo offline?
Yes, if you use a [local model](/advanced-usage/local-models).

### What is MCP (Model Context Protocol)?
[MCP](/features/mcp/overview) is a protocol that allows Roo Code to communicate with external servers, extending its capabilities with custom tools and resources.

### Can I create my own MCP servers?

Yes, you can create your own MCP servers to add custom functionality to Roo Code. See the [MCP documentation](https://github.com/modelcontextprotocol) for details.

## Troubleshooting

### Roo Code isn't responding. What should I do?

*   Make sure your API key is correct and hasn't expired.
*   Check your internet connection.
*   Check the status of your chosen API provider.
*   Try restarting VS Code.
*   If the problem persists, report the issue on [GitHub](https://github.com/RooVetGit/Roo-Code/issues) or [Discord](https://discord.gg/roocode).

### I'm seeing an error message. What does it mean?

The error message should provide some information about the problem. If you're unsure how to resolve it, seek help in the community forums.

### Roo Code made changes I didn't want. How do I undo them?

Roo Code uses VS Code's built-in file editing capabilities.  You can use the standard "Undo" command (Ctrl/Cmd + Z) to revert changes. Also, if experimental checkpoints are enabled, Roo can revert changes made to a file.

### How do I report a bug or suggest a feature?

Please report bugs or suggest features on the Roo Code [Issues page](https://github.com/RooVetGit/Roo-Code/issues) and [Feature Requests page](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop).
````

## File: docs/index.md
````markdown
---
sidebar_label: Welcome
---

# Roo Code Docs

Roo Code (formerly Roo Cline) is an AI-powered autonomous coding agent that lives in your editor. It helps you code faster and smarter, whether you're starting a new project, maintaining existing code, or learning new technologies.

## What Can Roo Code Do?

- 🚀 **Generate Code** from natural language descriptions
- 🔧 **Refactor & Debug** existing code
- 📝 **Write & Update** documentation
- 🤔 **Answer Questions** about your codebase
- 🔄 **Automate** repetitive tasks
- 🏗️ **Create** new files and projects

## Quick Start

1. [Install Roo Code](/getting-started/installing)
2. [Connect Your AI Provider](/getting-started/connecting-api-provider)
3. [Try Your First Task](/getting-started/your-first-task)

## Key Features

### Multiple Modes
Roo Code adapts to your needs with specialized [modes](/basic-usage/using-modes):
- **Code Mode:** For general-purpose coding tasks
- **Architect Mode:** For planning and technical leadership
- **Ask Mode:** For answering questions and providing information
- **Debug Mode:** For systematic problem diagnosis
- **Orchestrator Mode:** For managing complex tasks and delegating work
- **[Custom Modes](/features/custom-modes):** Create unlimited specialized personas for security auditing, performance optimization, documentation, or any other task

### Smart Tools
Roo Code comes with powerful [tools](/basic-usage/how-tools-work) that can:
- Read and write files in your project
- Execute commands in your VS Code terminal
- Control a web browser
- Use external tools via [MCP (Model Context Protocol)](/features/mcp/overview)

MCP extends Roo Code's capabilities by allowing you to add unlimited custom tools. Integrate with external APIs, connect to databases, or create specialized development tools - MCP provides the framework to expand Roo Code's functionality to meet your specific needs.

### Customization
Make Roo Code work your way with:
- [Custom Instructions](/features/custom-instructions) for personalized behavior
- [Custom Modes](/features/custom-modes) for specialized tasks
- [Local Models](/advanced-usage/local-models) for offline use
- [Auto-Approval Settings](/features/auto-approving-actions) for faster workflows

## Resources

### Documentation
- [Basic Usage Guide](/basic-usage/the-chat-interface)
- [Advanced Features](/features/auto-approving-actions)
- [Frequently Asked Questions](/faq)

### Community & Socials
- **Discord:** [Join our Discord server](https://discord.gg/roocode) for real-time help and discussions.
- **Reddit:** [Visit our subreddit](https://www.reddit.com/r/RooCode) to share experiences and tips.
- **GitHub:** Report [issues](https://github.com/RooVetGit/Roo-Code/issues) or request [features](https://github.com/RooVetGit/Roo-Code/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop).
- **X (Twitter):** [Follow @roo_code](https://x.com/roo_code).
- **Bluesky:** [Follow roocode.bsky.social](https://bsky.app/profile/roocode.bsky.social).
- **LinkedIn:** [Follow Roo Code](https://www.linkedin.com/company/roo-code).

Ready to get started? Click the **Next** button below to begin your journey with Roo Code!
````

## File: docs/tips-and-tricks.md
````markdown
# Tips & Tricks

A collection of quick tips to help you get the most out of Roo Code.

- Drag Roo Code to the [Secondary Sidebar](https://code.visualstudio.com/api/ux-guidelines/sidebars#secondary-sidebar) so you can see the Explorer, Search, Source Control, etc.
<img src="/img/right-column-roo.gif" alt="Put Roo on the Right Column" width="900" />
- Once you have Roo Code in a separate sidebar from the file explorer, you can drag files from the explorer into the chat window (and even multiple at once). Just make sure to hold down the shift key after you start dragging the files.
- If you're not using [MCP](/features/mcp/overview), turn it off in the <Codicon name="notebook" /> Prompts tab to significantly cut down the size of the system prompt.
- To keep your [custom modes](/features/custom-modes) on track, limit the types of files that they're allowed to edit.
- If you hit the dreaded `input length and max tokens exceed context limit` error, you can recover by deleting a message, rolling back to a previous checkpoint, or switching over to a model with a long context window like Gemini for a message.
- In general, be thoughtful about your `Max Tokens` setting for thinking models. Every token you allocate to that takes away from space available to store conversation history. Consider only using high `Max Tokens` / `Max Thinking Tokens` settings with modes like Architect and Debug, and keeping Code mode at 16k max tokens or less.
- If there's a real world job posting for something you want a custom mode to do, try asking Code mode to `Create a custom mode based on the job posting at @[url]`
- If you want to really accelerate, check out multiple copies of your repository and run Roo Code on all of them in parallel (using git to resolve any conflicts, same as with human devs).
- When using Debug mode, ask Roo to "start a new task in Debug mode with all of the necessary context needed to figure out X" so that the debugging process uses its own context window and doesn't pollute the main task
- Add your own tips by clicking "Edit this page" below!
- To manage large files and reduce context/resource usage, adjust the `File read auto-truncate threshold` setting. This setting controls the number of lines read from a file in one batch. Lower values can improve performance when working with very large files, but may require more read operations. You can find this setting in the Roo Code settings under 'Advanced Settings'.
- Set up a keyboard shortcut for the [`roo.acceptInput` command](/features/keyboard-shortcuts) to accept suggestions or submit text input without using the mouse. Perfect for keyboard-focused workflows and reducing hand strain.
- Use **Sticky Models** to assign specialized AI models to different modes (reasoning model for planning, non-reasoning model for coding). Roo automatically switches to each mode's last-used model without manual selection.
````

## File: docs/tutorial-videos.json
````json
{
  "videos": [
    {
      "id": "dqW9snH6yK4",
      "title": "RooCode + Free Manus / Grok-3 / Claude : This NEW UPGRADE Makes ROO CODE AMAZING!"
    },
    {
      "id": "g9sq25ECJMQ",
      "title": "Roo-Code v3.8 UPDATE: The Best FREE Autonomous AI Coding Agent Just Got BETTER!"
    },
    {
      "id": "mwJx5QI2c0o",
      "title": "You’re Overpaying for AI Coding | Roo Code System Prompt Override"
    },
    {
      "id": "fu93FmBnv4Y",
      "title": "RooCode (New Upgrades) + 3.7 Sonnet: The NEW POWER-STEERING MODE, DEBUG MODE & More is AMAZING!"
    },
    {
      "id": "Y9JoWcyp0FY",
      "title": "PERFECT VSCode Setup: Sonnet 3.7 + Roo-Code (15X Faster Coding!)"
    },
    {
      "id": "r5T3h0BOiWw",
      "title": "Roo Code is AMAZING - AI VSCode Extension (better than Cursor?)"
    },
    {
      "id": "IzjdJfvfnfM",
      "title": "Is Roo Code the Ultimate Coding Hack?"
    },
    {
      "id": "PE-0P6SAZYc",
      "title": "RooCode v3.3 UPDATE: Fully FREE Autonomous AI Coding Agent! (FREE API, Checkpoints, Markdown)"
    },
    {
      "id": "rg_g3BPv4uQ",
      "title": "5 Must-Know Roo Code Features That Make It Better Than Cline (Save 50% on Tokens!)"
    },
    {
      "id": "9p_1OISs7o0",
      "title": "RooCode (Upgraded): I'm FINALLY SWITCHING AWAY from CLINE! This is the MOST CUSTOMIZABLE AI Coder!"
    },
    {
      "id": "2Frayo_8ovQ",
      "title": "Deepseek-R1 + RooCode: BEST AI Coding Agent! Develop a Full-stack App Without Writing ANY Code!"
    },
    {
      "id": "KsUjPlRPsPc",
      "title": "Roo-Cline 3.1: Code Faster Than Ever with This Game-Changing Update"
    },
    {
      "id": "r-cbg5ON60Q",
      "title": "Setting Up RooCline With LMStudio and Ollama Phi4"
    },
    {
      "id": "V5ZdznleO6s",
      "title": "Build a Web App with Roo Cline & Claude 3.5 Sonnet"
    },
    {
      "id": "IVTcZYg_ylI",
      "title": "RooCline: The Cline Fork That's Faster, Smarter, and Better!"
    },
    {
      "id": "a5mCvQoDB2g",
      "title": "FREE AI Coder Beats Cursor & Bolt.New?"
    },
    {
      "id": "9I_xjb30WHg",
      "title": "Roo-Cline is Cline but Better | AI in Large Codebases"
    }
  ]
}
````

## File: docs/tutorial-videos.mdx
````
import VideoGrid from '@site/src/components/VideoGrid';

# Tutorial Videos

Learn how to build powerful applications and enhance your development workflow with these hands-on Roo Code tutorials. Big thanks to all of the creators!

<VideoGrid />
````

## File: src/components/ReportIssue/index.js
````javascript
import React from 'react';
import {useLocation} from '@docusaurus/router';
import {GITHUB_NEW_ISSUE_URL} from '@site/src/constants';
import styles from './styles.module.css';

export default function ReportIssue() {
  const {pathname} = useLocation();
  
  const issueUrl = `${GITHUB_NEW_ISSUE_URL}?title=Documentation%20Issue:%20${encodeURIComponent(pathname)}`;
  
  return (
    <div className={styles.reportContainer}>
      <hr className={styles.separator} />
      <div className={styles.reportLink}>
        <span>Is this documentation incorrect or incomplete? </span>
        <a href={issueUrl} target="_blank" rel="noopener noreferrer">
          Report an issue on GitHub
        </a>
      </div>
    </div>
  );
}
````

## File: src/components/ReportIssue/styles.module.css
````css
.reportContainer {
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.separator {
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid var(--ifm-color-emphasis-300);
}

.reportLink {
  font-size: 0.875rem;
  color: var(--ifm-color-emphasis-700);
}

.reportLink a {
  font-weight: 500;
}
````

## File: src/components/Codicon.tsx
````typescript
import React from 'react';
import '@vscode/codicons/dist/codicon.css';

interface CodiconProps {
  name: string;
}

export default function Codicon({ name }: CodiconProps): JSX.Element {
  return (
    <i 
      className={`codicon codicon-${name}`}
      aria-hidden="true"
    />
  );
}
````

## File: src/components/KangarooIcon.tsx
````typescript
import React from 'react';

export default function KangarooIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="20"
      height="20"
      style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }}
      {...props}
    >
      <path d="M78.99,21.9l-1.73,6.24c-.09.33-.44.52-.77.42l-28.11-8.71c-.19-.06-.41-.02-.56.11l-28.95,23.22c-.08.07-.18.11-.29.13l-17.25,2.66c-.31.05-.53.32-.52.63l.11,2.47c.01.31.26.56.57.58l20.08,1.23c.11,0,.22-.02.31-.06l14.64-7.4c.21-.11.46-.08.64.06l9.37,7.03c.16.12.25.3.24.49l-.09,11.65c0,.13.04.25.11.35l14.74,21.15c.11.16.3.26.5.26h5.03c.46,0,.76-.5.54-.9l-10.87-19.92c-.1-.18-.1-.4,0-.58l5.51-10.48c.06-.11.15-.2.26-.26l19.56-9.92c.2-.1.43-.09.62.04l5.6,3.73c.1.07.22.1.34.1h5.15c.48,0,.77-.52.52-.93l-14.2-23.52c-.28-.46-.97-.36-1.11.15Z" />
    </svg>
  );
}
````

## File: src/components/VideoGrid.tsx
````typescript
import React from 'react';
import videos from '@site/docs/tutorial-videos.json';

interface Video {
  id: string;
  title: string;
}

export default function VideoGrid(): JSX.Element {
  return (
    <div className="video-grid">
      {videos.videos.map((video: Video) => (
        <div key={video.id} className="video-item">
          <div
            className="video-container"
            onClick={(e) => {
              const target = e.currentTarget;
              target.innerHTML = `<iframe src='https://www.youtube.com/embed/${video.id}?autoplay=1' title='${video.title}' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>`;
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                cursor: 'pointer',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '68px',
                height: '48px',
                background: 'rgba(0,0,0,0.7)',
                borderRadius: '12px',
              }}
            >
              <div
                style={{
                  borderStyle: 'solid',
                  borderWidth: '12px 0 12px 20px',
                  borderColor: 'transparent transparent transparent white',
                  position: 'absolute',
                  top: '12px',
                  left: '26px',
                }}
              />
            </div>
          </div>
          <div className="video-info">
            <span className="video-title">{video.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
````

## File: src/css/custom.css
````css
/**
 * Any CSS included here will be global. The classic template
 * bundles Infima by default. Infima is a CSS framework designed to
 * work well for content-centric websites.
 */

/* You can override the default Infima variables here. */
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

/* For readability concerns, you should choose a lighter palette in dark mode. */
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}

/* Hide unwanted navigation items */
.menu__list-item:has(> .menu__link[href="/docs"]),
.menu__list-item:has(> .menu__link[href="/tutorial"]) {
  display: none;
}

/* Hide unwanted footer items */
.footer__link-item[href="/docs"],
.footer__link-item[href="/tutorial"] {
  display: none;
}

/* Video Grid Styles */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  border-radius: var(--ifm-card-border-radius);
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-info {
  margin-top: 0.75rem;
}

.video-title {
  font-weight: 500;
  color: var(--ifm-heading-color);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  max-height: 2.8em; /* 2 lines * 1.4 line-height */
}

/* Basic Codicon styles */
.codicon {
  vertical-align: middle;
  line-height: 1;
}

/* Ensure code blocks wrap instead of scrolling */
pre {
  white-space: pre-wrap !important;  /* Allows wrapping */
  word-wrap: break-word !important;  /* Breaks long words */
  overflow-x: auto;  /* Enables horizontal scrolling if necessary */
}
````

## File: src/theme/DocItem/index.js
````javascript
import React from 'react';
import DocItem from '@theme-original/DocItem';
import ReportIssue from '@site/src/components/ReportIssue';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <ReportIssue />
    </>
  );
}
````

## File: src/theme/MDXComponents.ts
````typescript
import MDXComponents from '@theme-original/MDXComponents';
import Codicon from '@site/src/components/Codicon';

export default {
  ...MDXComponents,
  Codicon,
};
````

## File: src/constants.ts
````typescript
/**
 * Application-wide constants for use in TypeScript environments
 */

// GitHub repository information
export const GITHUB_REPO_URL = 'https://github.com/RooVetGit/Roo-Code-Docs';
export const GITHUB_ISSUES_URL = `${GITHUB_REPO_URL}/issues`;
export const GITHUB_NEW_ISSUE_URL = `${GITHUB_ISSUES_URL}/new`;

// Community links
export const DISCORD_URL = 'https://discord.gg/roocode';
export const REDDIT_URL = 'https://www.reddit.com/r/RooCode/';
export const TWITTER_URL = 'https://x.com/roo_code';

// GitHub links
export const GITHUB_MAIN_REPO_URL = 'https://github.com/RooVetGit/Roo-Code';
export const GITHUB_ISSUES_MAIN_URL = `${GITHUB_MAIN_REPO_URL}/issues`;
export const GITHUB_FEATURES_URL = `${GITHUB_MAIN_REPO_URL}/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop`;

// Download links
export const VSCODE_MARKETPLACE_URL = 'https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline';
export const OPEN_VSX_URL = 'https://open-vsx.org/extension/RooVeterinaryInc/roo-cline';

// Company links
export const CONTACT_EMAIL = 'mailto:support@roocode.com';
export const CAREERS_URL = 'https://careers.roocode.com';
export const WEBSITE_PRIVACY_URL = 'https://roocode.com/privacy';
export const EXTENSION_PRIVACY_URL = `${GITHUB_MAIN_REPO_URL}/blob/main/PRIVACY.md`;
````

## File: static/downloads/boomerang-tasks/roomodes.json
````json
{
  "customModes": [
    {
      "slug": "boomerang-mode",
      "name": "Boomerang Mode",
      "roleDefinition": "You are Roo, a strategic workflow orchestrator who coordinates complex tasks by delegating them to appropriate specialized modes. You have a comprehensive understanding of each mode's capabilities and limitations, allowing you to effectively break down complex problems into discrete tasks that can be solved by different specialists.",
      "customInstructions": "Your role is to coordinate complex workflows by delegating tasks to specialized modes. As an orchestrator, you should:\n\n1. When given a complex task, break it down into logical subtasks that can be delegated to appropriate specialized modes.\n\n2. For each subtask, use the `new_task` tool to delegate. Choose the most appropriate mode for the subtask's specific goal and provide comprehensive instructions in the `message` parameter. These instructions must include:\n    *   All necessary context from the parent task or previous subtasks required to complete the work.\n    *   A clearly defined scope, specifying exactly what the subtask should accomplish.\n    *   An explicit statement that the subtask should *only* perform the work outlined in these instructions and not deviate.\n    *   An instruction for the subtask to signal completion by using the `attempt_completion` tool, providing a concise yet thorough summary of the outcome in the `result` parameter, keeping in mind that this summary will be the source of truth used to keep track of what was completed on this project. \n    *   A statement that these specific instructions supersede any conflicting general instructions the subtask's mode might have.\n\n3. Track and manage the progress of all subtasks. When a subtask is completed, analyze its results and determine the next steps.\n\n4. Help the user understand how the different subtasks fit together in the overall workflow. Provide clear reasoning about why you're delegating specific tasks to specific modes.\n\n5. When all subtasks are completed, synthesize the results and provide a comprehensive overview of what was accomplished.\n\n6. Ask clarifying questions when necessary to better understand how to break down complex tasks effectively.\n\n7. Suggest improvements to the workflow based on the results of completed subtasks.\n\nUse subtasks to maintain clarity. If a request significantly shifts focus or requires a different expertise (mode), consider creating a subtask rather than overloading the current one.",
      "groups": [],
      "source": "global"
    }
  ]
}
````

## File: .clinerules
````
# Roo Code Documentation Rules

## Documentation Links
- Do not include .md extensions in documentation links
- Use absolute paths starting from the `/docs/` root for internal documentation links
- Example: [link text](/basic-usage/how-tools-work) NOT [link text](basic-usage/how-tools-work.md) or [link text](../../basic-usage/how-tools-work)

This ensures links work correctly in the built documentation while maintaining clean URLs.
````

## File: .env.example
````
POSTHOG_API_KEY=your_posthog_api_key
````

## File: docusaurus.config.ts
````typescript
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {
  DISCORD_URL,
  REDDIT_URL,
  TWITTER_URL,
  GITHUB_MAIN_REPO_URL,
  GITHUB_ISSUES_MAIN_URL,
  GITHUB_FEATURES_URL,
  VSCODE_MARKETPLACE_URL,
  OPEN_VSX_URL,
  CONTACT_EMAIL,
  CAREERS_URL,
  WEBSITE_PRIVACY_URL,
  EXTENSION_PRIVACY_URL,
  GITHUB_REPO_URL
} from './src/constants';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Roo Code Docs',
  tagline: 'Roo Code Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.roocode.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: `${GITHUB_REPO_URL}/edit/main/`,
          showLastUpdateTime: true,
        },
        blog: false, // Disable blog feature
        sitemap: {
          lastmod: 'date',
          priority: null,
          changefreq: null,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/",
      },
    ],
  ],

  plugins: [
    ...(process.env.POSTHOG_API_KEY ? [
      [
        "posthog-docusaurus",
        {
          apiKey: process.env.POSTHOG_API_KEY,
          appUrl: "https://us.i.posthog.com",
          enableInDevelopment: true,
        },
      ],
    ] : []),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Files moved from advanced-usage to features
          {
            to: '/features/checkpoints',
            from: ['/advanced-usage/checkpoints'],
          },
          {
            to: '/features/code-actions',
            from: ['/advanced-usage/code-actions'],
          },
          {
            to: '/features/custom-instructions',
            from: ['/advanced-usage/custom-instructions'],
          },
          {
            to: '/features/custom-modes',
            from: ['/advanced-usage/custom-modes'],
          },
          {
            to: '/features/enhance-prompt',
            from: ['/advanced-usage/enhance-prompt'],
          },
          {
            to: '/features/experimental/experimental-features',
            from: ['/advanced-usage/experimental-features'],
          },
          {
            to: '/features/model-temperature',
            from: ['/advanced-usage/model-temperature'],
          },
          {
            to: '/features/auto-approving-actions',
            from: ['/advanced-usage/auto-approving-actions'],
          },
          {
            to: '/features/api-configuration-profiles',
            from: ['/advanced-usage/api-configuration-profiles'],
          },
          
          // MCP related redirects
          {
            to: '/features/mcp/overview',
            from: ['/advanced-usage/mcp', '/mcp/overview'],
          },
          {
            to: '/features/mcp/using-mcp-in-roo',
            from: ['/mcp/using-mcp-in-roo'],
          },
          {
            to: '/features/mcp/what-is-mcp',
            from: ['/mcp/what-is-mcp'],
          },
          {
            to: '/features/mcp/server-transports',
            from: ['/mcp/server-transports'],
          },
          {
            to: '/features/mcp/mcp-vs-api',
            from: ['/mcp/mcp-vs-api'],
          },
          {
            to: '/features/shell-integration',
            from: ['/troubleshooting/shell-integration'],
          },
          
          // Tools folder moved from features to advanced-usage
          {
            to: '/advanced-usage/available-tools/access-mcp-resource',
            from: ['/features/tools/access-mcp-resource'],
          },
          {
            to: '/advanced-usage/available-tools/apply-diff',
            from: ['/features/tools/apply-diff'],
          },
          {
            to: '/advanced-usage/available-tools/ask-followup-question',
            from: ['/features/tools/ask-followup-question'],
          },
          {
            to: '/advanced-usage/available-tools/attempt-completion',
            from: ['/features/tools/attempt-completion'],
          },
          {
            to: '/advanced-usage/available-tools/browser-action',
            from: ['/features/tools/browser-action'],
          },
          {
            to: '/advanced-usage/available-tools/execute-command',
            from: ['/features/tools/execute-command'],
          },
          {
            to: '/advanced-usage/available-tools/insert-content',
            from: ['/features/tools/insert-content'],
          },
          {
            to: '/advanced-usage/available-tools/list-code-definition-names',
            from: ['/features/tools/list-code-definition-names'],
          },
          {
            to: '/advanced-usage/available-tools/list-files',
            from: ['/features/tools/list-files'],
          },
          {
            to: '/advanced-usage/available-tools/new-task',
            from: ['/features/tools/new-task'],
          },
          {
            to: '/advanced-usage/available-tools/read-file',
            from: ['/features/tools/read-file'],
          },
          {
            to: '/advanced-usage/available-tools/search-and-replace',
            from: ['/features/tools/search-and-replace'],
          },
          {
            to: '/advanced-usage/available-tools/search-files',
            from: ['/features/tools/search-files'],
          },
          {
            to: '/advanced-usage/available-tools/switch-mode',
            from: ['/features/tools/switch-mode'],
          },
          {
            to: '/advanced-usage/available-tools/tool-use-overview',
            from: ['/features/tools/tool-use-overview'],
          },
          {
            to: '/advanced-usage/available-tools/use-mcp-tool',
            from: ['/features/tools/use-mcp-tool'],
          },
          {
            to: '/advanced-usage/available-tools/write-to-file',
            from: ['/features/tools/write-to-file'],
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-share.png',
    navbar: {
      logo: {
        alt: 'Roo Code Logo',
        src: 'img/roo-code-logo-white.png',
        srcDark: 'img/roo-code-logo-dark.png',
      },
      items: [
        {
          href: GITHUB_MAIN_REPO_URL,
          label: 'GitHub',
          position: 'right',
        },
        {
          href: VSCODE_MARKETPLACE_URL,
          label: 'Install Extension',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: DISCORD_URL,
            },
            {
              label: 'Reddit',
              href: REDDIT_URL,
            },
            {
              label: 'Twitter',
              href: TWITTER_URL,
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Issues',
              href: GITHUB_ISSUES_MAIN_URL,
            },
            {
              label: 'Feature Requests',
              href: GITHUB_FEATURES_URL,
            },
          ],
        },
        {
          title: 'Download',
          items: [
            {
              label: 'VS Code Marketplace',
              href: VSCODE_MARKETPLACE_URL,
            },
            {
              label: 'Open VSX Registry',
              href: OPEN_VSX_URL,
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Contact',
              href: CONTACT_EMAIL,
              target: '_self',
            },
            {
              label: 'Careers',
              href: CAREERS_URL,
            },
            {
              label: 'Website Privacy Policy',
              href: WEBSITE_PRIVACY_URL,
            },
            {
              label: 'Extension Privacy Policy',
              href: EXTENSION_PRIVACY_URL,
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
````

## File: LICENSE
````
Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
````

## File: Rakefile
````
desc 'Build documentation site locally'
task :serve do
  Dir.chdir('docs') do
    # Only run bundle install if Gemfile.lock doesn't exist
    sh 'bundle install' unless File.exist?('Gemfile.lock')
    sh 'bundle exec jekyll serve'
  end
end

# Set default task
task default: :serve
````

## File: sidebars.ts
````typescript
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installing',
        'getting-started/connecting-api-provider',
        'getting-started/your-first-task',
        'basic-usage/the-chat-interface',
        'basic-usage/typing-your-requests',
        'basic-usage/how-tools-work',
        'basic-usage/context-mentions',
        'basic-usage/using-modes',
        'tips-and-tricks',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/api-configuration-profiles',
        'features/auto-approving-actions',
        'features/boomerang-tasks',
        'features/browser-use',
        'features/checkpoints',
        'features/code-actions',
        'features/custom-instructions',
        'features/custom-modes',
        'features/enhance-prompt',
        'features/fast-edits',
        'features/footgun-prompting',
        'features/keyboard-shortcuts',
        'features/model-temperature',
        'features/settings-management',
        'features/shell-integration',
        'features/suggested-responses',
        {
          type: 'category',
          label: 'MCP',
          items: [
            {
              type: 'doc',
              id: 'features/mcp/overview',
              label: 'MCP Overview'
            },
            'features/mcp/using-mcp-in-roo',
            'features/mcp/what-is-mcp',
            'features/mcp/server-transports',
            'features/mcp/mcp-vs-api',
          ],
        },
        {
          type: 'category',
          label: 'Experimental',
          items: [
            'features/experimental/experimental-features',
          ],
        },
        'features/more-features',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        {
          type: 'category',
          label: 'Available Tools',
          items: [
            'advanced-usage/available-tools/tool-use-overview',
            'advanced-usage/available-tools/access-mcp-resource',
            'advanced-usage/available-tools/apply-diff',
            'advanced-usage/available-tools/ask-followup-question',
            'advanced-usage/available-tools/attempt-completion',
            'advanced-usage/available-tools/browser-action',
            'advanced-usage/available-tools/execute-command',
            'advanced-usage/available-tools/insert-content',
            'advanced-usage/available-tools/list-code-definition-names',
            'advanced-usage/available-tools/list-files',
            'advanced-usage/available-tools/new-task',
            'advanced-usage/available-tools/read-file',
            'advanced-usage/available-tools/search-files',
            'advanced-usage/available-tools/switch-mode',
            'advanced-usage/available-tools/use-mcp-tool',
            'advanced-usage/available-tools/write-to-file',
          ],
        },
        'advanced-usage/prompt-engineering',
        'advanced-usage/prompt-structure',
        'advanced-usage/rate-limits-costs',
        'advanced-usage/local-models',
        'advanced-usage/large-projects',
      ],
    },
    {
      type: 'category',
      label: 'Model Providers',
      items: [
        'providers/anthropic',
        'providers/bedrock',
        'providers/deepseek',
        'providers/vertex',
        'providers/gemini',
        'providers/glama',
        'providers/human-relay',
        'providers/lmstudio',
        'providers/mistral',
        'providers/ollama',
        'providers/openai',
        'providers/openai-compatible',
        'providers/openrouter',
        'providers/requesty',
        'providers/unbound',
        'providers/vscode-lm',
        'providers/xai',
      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq',
      ],
    },
    'tutorial-videos',
    {
      type: 'category',
      label: 'Community',
      items: [
        'community',
      ],
    },
    {
      type: 'category',
      label: 'Update Notes',
      items: [
        'update-notes/index',
        {
          type: 'category',
          label: '3.14',
          items: [
{ type: 'doc', id: 'update-notes/v3.14', label: '3.14 Combined' },
{ type: 'doc', id: 'update-notes/v3.14.3', label: '3.14.3' },
{ type: 'doc', id: 'update-notes/v3.14.2', label: '3.14.2' },
            { type: 'doc', id: 'update-notes/v3.14.1', label: '3.14.1' },
            { type: 'doc', id: 'update-notes/v3.14.0', label: '3.14.0' },
          ],
        },
        {
          type: 'category',
          label: '3.13',
          items: [
            { type: 'doc', id: 'update-notes/v3.13.2', label: '3.13.2' },
            { type: 'doc', id: 'update-notes/v3.13.1', label: '3.13.1' },
            { type: 'doc', id: 'update-notes/v3.13.0', label: '3.13.0' },
          ],
        },
        {
          type: 'category',
          label: '3.12',
          items: [
            { type: 'doc', id: 'update-notes/v3.12.2', label: '3.12.2' },
            { type: 'doc', id: 'update-notes/v3.12.1', label: '3.12.1' },
            { type: 'doc', id: 'update-notes/v3.12.0', label: '3.12.0' },
          ],
        },
        {
          type: 'category',
          label: '3.11',
          items: [
            { type: 'doc', id: 'update-notes/v3.11.17', label: '3.11.17' },
            { type: 'doc', id: 'update-notes/v3.11.16', label: '3.11.16' },
            { type: 'doc', id: 'update-notes/v3.11.15', label: '3.11.15' },
            { type: 'doc', id: 'update-notes/v3.11.14', label: '3.11.14' },
            { type: 'doc', id: 'update-notes/v3.11.13', label: '3.11.13' },
            { type: 'doc', id: 'update-notes/v3.11.12', label: '3.11.12' },
            { type: 'doc', id: 'update-notes/v3.11.11', label: '3.11.11' },
            { type: 'doc', id: 'update-notes/v3.11.10', label: '3.11.10' },
            { type: 'doc', id: 'update-notes/v3.11.9', label: '3.11.9' },
            { type: 'doc', id: 'update-notes/v3.11.8', label: '3.11.8' },
            { type: 'doc', id: 'update-notes/v3.11.7', label: '3.11.7' },
            { type: 'doc', id: 'update-notes/v3.11.6', label: '3.11.6' },
            { type: 'doc', id: 'update-notes/v3.11.5', label: '3.11.5' },
            { type: 'doc', id: 'update-notes/v3.11.3', label: '3.11.3' },
            { type: 'doc', id: 'update-notes/v3.11.2', label: '3.11.2' },
            { type: 'doc', id: 'update-notes/v3.11.1', label: '3.11.1' },
            { type: 'doc', id: 'update-notes/v3.11', label: '3.11.0' },
          ],
        },
        {
          type: 'category',
          label: '3.10',
          items: [
            { type: 'doc', id: 'update-notes/v3.10.5', label: '3.10.5' },
            { type: 'doc', id: 'update-notes/v3.10.4', label: '3.10.4' },
            { type: 'doc', id: 'update-notes/v3.10.3', label: '3.10.3' },
            { type: 'doc', id: 'update-notes/v3.10.2', label: '3.10.2' },
            { type: 'doc', id: 'update-notes/v3.10.1', label: '3.10.1' },
            { type: 'doc', id: 'update-notes/v3.10.0', label: '3.10.0' },
          ],
        },
        {
          type: 'category',
          label: '3.9',
          items: [
            { type: 'doc', id: 'update-notes/v3.9.2', label: '3.9.2' },
            { type: 'doc', id: 'update-notes/v3.9.1', label: '3.9.1' },
            { type: 'doc', id: 'update-notes/v3.9.0', label: '3.9.0' },
          ],
        },
        {
          type: 'category',
          label: '3.8',
          items: [
            { type: 'doc', id: 'update-notes/v3.8.6', label: '3.8.6' },
            { type: 'doc', id: 'update-notes/v3.8.5', label: '3.8.5' },
            { type: 'doc', id: 'update-notes/v3.8.4', label: '3.8.4' },
            { type: 'doc', id: 'update-notes/v3.8.3', label: '3.8.3' },
            { type: 'doc', id: 'update-notes/v3.8.2', label: '3.8.2' },
            { type: 'doc', id: 'update-notes/v3.8.1', label: '3.8.1' },
            { type: 'doc', id: 'update-notes/v3.8.0', label: '3.8.0' },
          ],
        },
        {
          type: 'category',
          label: '3.7',
          items: [
            { type: 'doc', id: 'update-notes/v3.7.12', label: '3.7.12' },
            { type: 'doc', id: 'update-notes/v3.7.11', label: '3.7.11' },
            { type: 'doc', id: 'update-notes/v3.7.10', label: '3.7.10' },
            { type: 'doc', id: 'update-notes/v3.7.9', label: '3.7.9' },
            { type: 'doc', id: 'update-notes/v3.7.8', label: '3.7.8' },
            { type: 'doc', id: 'update-notes/v3.7.7', label: '3.7.7' },
            { type: 'doc', id: 'update-notes/v3.7.6', label: '3.7.6' },
            { type: 'doc', id: 'update-notes/v3.7.5', label: '3.7.5' },
            { type: 'doc', id: 'update-notes/v3.7.4', label: '3.7.4' },
            { type: 'doc', id: 'update-notes/v3.7.3', label: '3.7.3' },
            { type: 'doc', id: 'update-notes/v3.7.2', label: '3.7.2' },
            { type: 'doc', id: 'update-notes/v3.7.1', label: '3.7.1' },
            { type: 'doc', id: 'update-notes/v3.7.0', label: '3.7.0' },
          ],
        },
        {
          type: 'category',
          label: '3.3',
          items: [
            { type: 'doc', id: 'update-notes/v3.3.26', label: '3.3.26' },
            { type: 'doc', id: 'update-notes/v3.3.25', label: '3.3.25' },
            { type: 'doc', id: 'update-notes/v3.3.24', label: '3.3.24' },
            { type: 'doc', id: 'update-notes/v3.3.23', label: '3.3.23' },
            { type: 'doc', id: 'update-notes/v3.3.22', label: '3.3.22' },
            { type: 'doc', id: 'update-notes/v3.3.21', label: '3.3.21' },
            { type: 'doc', id: 'update-notes/v3.3.20', label: '3.3.20' },
            { type: 'doc', id: 'update-notes/v3.3.19', label: '3.3.19' },
            { type: 'doc', id: 'update-notes/v3.3.18', label: '3.3.18' },
            { type: 'doc', id: 'update-notes/v3.3.17', label: '3.3.17' },
            { type: 'doc', id: 'update-notes/v3.3.16', label: '3.3.16' },
            { type: 'doc', id: 'update-notes/v3.3.15', label: '3.3.15' },
            { type: 'doc', id: 'update-notes/v3.3.14', label: '3.3.14' },
            { type: 'doc', id: 'update-notes/v3.3.13', label: '3.3.13' },
            { type: 'doc', id: 'update-notes/v3.3.12', label: '3.3.12' },
            { type: 'doc', id: 'update-notes/v3.3.11', label: '3.3.11' },
            { type: 'doc', id: 'update-notes/v3.3.10', label: '3.3.10' },
            { type: 'doc', id: 'update-notes/v3.3.9', label: '3.3.9' },
            { type: 'doc', id: 'update-notes/v3.3.8', label: '3.3.8' },
            { type: 'doc', id: 'update-notes/v3.3.7', label: '3.3.7' },
            { type: 'doc', id: 'update-notes/v3.3.6', label: '3.3.6' },
            { type: 'doc', id: 'update-notes/v3.3.5', label: '3.3.5' },
            { type: 'doc', id: 'update-notes/v3.3.4', label: '3.3.4' },
            { type: 'doc', id: 'update-notes/v3.3.3', label: '3.3.3' },
            { type: 'doc', id: 'update-notes/v3.3.2', label: '3.3.2' },
            { type: 'doc', id: 'update-notes/v3.3.1', label: '3.3.1' },
            { type: 'doc', id: 'update-notes/v3.3.0', label: '3.3.0' },
          ],
        },
        {
          type: 'category',
          label: '3.1',
          items: [
            { type: 'doc', id: 'update-notes/v3.1.7', label: '3.1.7' },
            { type: 'doc', id: 'update-notes/v3.1.6', label: '3.1.6' },
            { type: 'doc', id: 'update-notes/v3.1.4', label: '3.1.4' }, // Includes 3.1.5 fix
            { type: 'doc', id: 'update-notes/v3.1.3', label: '3.1.3' },
            { type: 'doc', id: 'update-notes/v3.1.2', label: '3.1.2' },
            { type: 'doc', id: 'update-notes/v3.1.1', label: '3.1.1' },
            { type: 'doc', id: 'update-notes/v3.1.0', label: '3.1.0' },
          ],
        },
        {
          type: 'category',
          label: '3.0',
          items: [
            { type: 'doc', id: 'update-notes/v3.0.3', label: '3.0.3' },
            { type: 'doc', id: 'update-notes/v3.0.2', label: '3.0.2' },
            { type: 'doc', id: 'update-notes/v3.0.1', label: '3.0.1' },
            { type: 'doc', id: 'update-notes/v3.0.0', label: '3.0.0' },
          ],
        },
        {
          type: 'category',
          label: '3.2',
          items: [
            { type: 'doc', id: 'update-notes/v3.2.8', label: '3.2.8' },
            { type: 'doc', id: 'update-notes/v3.2.7', label: '3.2.7' },
            { type: 'doc', id: 'update-notes/v3.2.6', label: '3.2.6' },
            { type: 'doc', id: 'update-notes/v3.2.5', label: '3.2.5' },
            { type: 'doc', id: 'update-notes/v3.2.4', label: '3.2.4' },
            { type: 'doc', id: 'update-notes/v3.2.3', label: '3.2.3' },
            { type: 'doc', id: 'update-notes/v3.2.0', label: '3.2.0' }, // Includes 3.2.1, 3.2.2
          ],
        },
        {
          type: 'category',
          label: '2.2',
          items: [
            { type: 'doc', id: 'update-notes/v2.2.46', label: '2.2.46' },
            { type: 'doc', id: 'update-notes/v2.2.45', label: '2.2.45' },
            { type: 'doc', id: 'update-notes/v2.2.44', label: '2.2.44' },
            { type: 'doc', id: 'update-notes/v2.2.43', label: '2.2.43' },
            { type: 'doc', id: 'update-notes/v2.2.42', label: '2.2.42' },
            { type: 'doc', id: 'update-notes/v2.2.41', label: '2.2.41' },
            { type: 'doc', id: 'update-notes/v2.2.40', label: '2.2.40' },
            { type: 'doc', id: 'update-notes/v2.2.39', label: '2.2.39' },
            { type: 'doc', id: 'update-notes/v2.2.38', label: '2.2.38' },
            { type: 'doc', id: 'update-notes/v2.2.36', label: '2.2.36' }, // Includes 2.2.37
            { type: 'doc', id: 'update-notes/v2.2.35', label: '2.2.35' },
            { type: 'doc', id: 'update-notes/v2.2.34', label: '2.2.34' },
            { type: 'doc', id: 'update-notes/v2.2.33', label: '2.2.33' },
            { type: 'doc', id: 'update-notes/v2.2.32', label: '2.2.32' },
            { type: 'doc', id: 'update-notes/v2.2.31', label: '2.2.31' },
            { type: 'doc', id: 'update-notes/v2.2.30', label: '2.2.30' },
            { type: 'doc', id: 'update-notes/v2.2.29', label: '2.2.29' },
            { type: 'doc', id: 'update-notes/v2.2.28', label: '2.2.28' },
            { type: 'doc', id: 'update-notes/v2.2.27', label: '2.2.27' },
            { type: 'doc', id: 'update-notes/v2.2.26', label: '2.2.26' },
            { type: 'doc', id: 'update-notes/v2.2.25', label: '2.2.25' },
            { type: 'doc', id: 'update-notes/v2.2.24', label: '2.2.24' },
            { type: 'doc', id: 'update-notes/v2.2.23', label: '2.2.23' },
            { type: 'doc', id: 'update-notes/v2.2.22', label: '2.2.22' },
            { type: 'doc', id: 'update-notes/v2.2.21', label: '2.2.21' },
            { type: 'doc', id: 'update-notes/v2.2.20', label: '2.2.20' },
            { type: 'doc', id: 'update-notes/v2.2.19', label: '2.2.19' },
            { type: 'doc', id: 'update-notes/v2.2.18', label: '2.2.18' },
            { type: 'doc', id: 'update-notes/v2.2.17', label: '2.2.17' },
            { type: 'doc', id: 'update-notes/v2.2.16', label: '2.2.16' },
            { type: 'doc', id: 'update-notes/v2.2.14', label: '2.2.14' }, // Includes 2.2.15
            { type: 'doc', id: 'update-notes/v2.2.13', label: '2.2.13' },
            { type: 'doc', id: 'update-notes/v2.2.12', label: '2.2.12' },
            { type: 'doc', id: 'update-notes/v2.2.11', label: '2.2.11' },
            { type: 'doc', id: 'update-notes/v2.2.6', label: '2.2.6' }, // Includes 2.2.7-2.2.10
            { type: 'doc', id: 'update-notes/v2.2.5', label: '2.2.5' },
            { type: 'doc', id: 'update-notes/v2.2.4', label: '2.2.4' },
            { type: 'doc', id: 'update-notes/v2.2.3', label: '2.2.3' },
            { type: 'doc', id: 'update-notes/v2.2.2', label: '2.2.2' },
            { type: 'doc', id: 'update-notes/v2.2.1', label: '2.2.1' },
            { type: 'doc', id: 'update-notes/v2.2.0', label: '2.2.0' },
          ],
        },
        {
          type: 'category',
          label: '2.1',
          items: [
            { type: 'doc', id: 'update-notes/v2.1.21', label: '2.1.21' },
            { type: 'doc', id: 'update-notes/v2.1.20', label: '2.1.20' },
            { type: 'doc', id: 'update-notes/v2.1.19', label: '2.1.19' },
            { type: 'doc', id: 'update-notes/v2.1.18', label: '2.1.18' },
            { type: 'doc', id: 'update-notes/v2.1.17', label: '2.1.17' },
            { type: 'doc', id: 'update-notes/v2.1.16', label: '2.1.16' },
            { type: 'doc', id: 'update-notes/v2.1.15', label: '2.1.15' },
            { type: 'doc', id: 'update-notes/v2.1.14', label: '2.1.14' },
            { type: 'doc', id: 'update-notes/v2.1.13', label: '2.1.13' },
            { type: 'doc', id: 'update-notes/v2.1.12', label: '2.1.12' },
            { type: 'doc', id: 'update-notes/v2.1.11', label: '2.1.11' },
            { type: 'doc', id: 'update-notes/v2.1.10', label: '2.1.10' },
            { type: 'doc', id: 'update-notes/v2.1.9', label: '2.1.9' },
            { type: 'doc', id: 'update-notes/v2.1.8', label: '2.1.8' },
            { type: 'doc', id: 'update-notes/v2.1.7', label: '2.1.7' },
            { type: 'doc', id: 'update-notes/v2.1.6', label: '2.1.6' },
            { type: 'doc', id: 'update-notes/v2.1.5', label: '2.1.5' },
            { type: 'doc', id: 'update-notes/v2.1.4', label: '2.1.4' },
            { type: 'doc', id: 'update-notes/v2.1.3', label: '2.1.3' },
            { type: 'doc', id: 'update-notes/v2.1.2', label: '2.1.2' },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
````

## File: tsconfig.json
````json
{
  // This file is not used in compilation. It is here just for a nice editor experience.
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": "."
  },
  "exclude": [".docusaurus", "build"]
}
````

## File: package.json
````json
{
  "name": "docs-new",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "node -r dotenv/config node_modules/.bin/docusaurus start",
    "build": "node -r dotenv/config node_modules/.bin/docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc"
  },
  "dependencies": {
    "@docusaurus/core": "3.7.0",
    "@docusaurus/plugin-client-redirects": "^3.7.0",
    "@docusaurus/preset-classic": "3.7.0",
    "@easyops-cn/docusaurus-search-local": "^0.48.5",
    "@mdx-js/react": "^3.0.0",
    "@vscode/codicons": "^0.0.36",
    "clsx": "^2.0.0",
    "posthog-docusaurus": "^2.0.4",
    "prism-react-renderer": "^2.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "3.7.0",
    "@docusaurus/tsconfig": "3.7.0",
    "@docusaurus/types": "3.7.0",
    "dotenv": "^16.4.7",
    "typescript": "~5.6.2"
  },
  "browserslist": {
    "production": [
      ">0.5%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 3 chrome version",
      "last 3 firefox version",
      "last 5 safari version"
    ]
  },
  "engines": {
    "node": ">=18.0"
  }
}
````

## File: .roomodes
````
{
  "customModes": [
    {
      "slug": "docs",
      "name": "Documentation Writer",
      "roleDefinition": "You are a technical documentation writer who is a seasoned, straightforward, and technically precise expert who prioritizes clarity and efficiency. With 24 years of coding and documentation writing experience, you have a natural conversational style that values concise, no-nonsense communication. Your approach is authentic and candid, focusing relentlessly on user comprehension without overselling features or using ambiguous language. You avoid fluff, ensuring every sentence provides clear value, practical guidance, or actionable steps. The tone remains professional yet approachable, fostering immediate trust through reliability and transparency. You specialize in writing technical documentation for the Visual Studio Code extension Roo Code, using Docusaurus to structure, format, and publish content efficiently. With deep expertise in Markdown and MDX, you optimize documentation for readability, accessibility, and seamless navigation within a static-site environment built on React. It is important to ensure the content is accessible to readers with varying technical proficiencies, including those who may have learning disabilities such as ADD/ADHD, by maintaining clear structure, logical flow, and avoiding unnecessary complexity.",
      "customInstructions": "### Custom Instructions\n\n1. **Directness and Clarity**  \n   Begin each documentation entry with the most important information users need, avoiding introductory filler or unnecessary context.\n\n2. **Precision and Brevity**  \n   Favor short, precise explanations and actionable steps. Users should swiftly grasp concepts without requiring additional clarification.\n\n3. **Authentic and Natural Tone**  \n   Write in a conversational style that reflects Roo's straightforward, reliable, and trustworthy personality—avoiding marketing jargon or generic phrases.\n\n4. **Practical Examples**  \n   Include realistic examples aimed at experienced developers. Provide accurate, concise code snippets ready for immediate use, avoiding trivial or clichéd demos.\n\n5. **Consistent Formatting**  \n   Use structured headings, bullet points, and brief paragraphs for easy scanning and comprehension.\n\n6. **Avoid Over-explaining**  \n   Assume a reasonable level of technical competence. Do not elaborate on basic coding concepts unless it’s essential to clarify a unique Roo Code feature.\n\n7. **Proactive Anticipation**  \n   Address likely questions or pitfalls within the relevant sections. Incorporate tips or clarifications to prevent common mistakes.\n\n8. **Minimalism in Wording**  \n   Eliminate unnecessary adjectives, adverbs, or verbose descriptions. Use clear, functional language that reduces cognitive load.\n\n9. **Internal Links**  \n   Always use **absolute paths starting from the `/docs/` root** for internal links, and **omit the `.md` file extension**.  \n   Example:  \n   ```md\n   [Link to Guide](/intro/)\n\n\t10.\t@site Alias\n\t•\tFor code imports or special references that need to resolve from the project root, use the @site alias.\n\t•\tExample:\n\nimport Header from '@site/src/components/Header';\n\n\n\t•\tAvoid @site in Markdown links—use absolute paths instead.\n\n\t11.\tCode Examples\nProvide clearly formatted code snippets suitable for copy-pasting. Maintain consistent syntax highlighting, indentation, and structure.\n\t12.\tImages\nInsert an image placeholder where needed. Include a brief description of the image below the placeholder. The final image element should follow this format (folder name may vary):\n\n<img src=\"/img/installing/installing-2.png\" alt=\"VS Code's Install from VSIX dialog\" width=\"600\" />\n\n(with the folder starting at /img/)",
      "groups": [
        "read",
        "command",
        "edit"
      ],
      "source": "project"
    },
    {
      "slug": "video-script-writer",
      "name": "Video Script Writer",
      "roleDefinition": "**Persona: Roo Code Expert Scriptwriter**\n\n**Background:**\nA professional scriptwriter specializing in creating clear, engaging, and informative scripts tailored specifically for YouTube, Reddit tutorials, and documentation videos focused on Roo Code. With a deep understanding of Roo Code’s functionalities and its practical applications, this expert excels at translating complex coding concepts into straightforward, easy-to-follow explanations.\n\n**Communication Style:**\n- Professional yet friendly, fostering trust and approachability.\n- Concise and structured, using precise language to ensure clarity.\n- Logical flow, breaking down complex topics into manageable steps.\n- Engaging tone, designed to maintain viewer interest throughout the video.\n\n**Specialization:**\n- Roo Code’s features and updates\n- Common troubleshooting techniques\n- Step-by-step tutorials for beginners to advanced users\n- Practical use-cases and real-world examples\n\n**Approach:**\n- Start by clearly stating the objective of the script.\n- Provide concise explanations with relatable analogies when helpful.\n- Anticipate common questions and proactively address them.\n- Conclude with actionable insights or suggested next steps for users.\n\n**Tone and Personality:**\n- Knowledgeable and authoritative without being intimidating.\n- Patient and encouraging, ensuring viewers feel capable and supported.\n- Enthusiastic about Roo Code, making viewers excited about learning and implementing the software.\n\n**Goal:**\nTo empower viewers by making Roo Code accessible and easy to master, enhancing their confidence and competence through expert guidance and clear, compelling content.",
      "groups": [],
      "source": "project"
    },
    {
      "slug": "release-notes-writer",
      "name": "Release Notes Writer",
      "roleDefinition": "You are a technical writer specializing in creating and maintaining release notes for the Roo Code VS Code extension, specifically within the `docs/update-notes` directory. Your focus is on accuracy, consistency, and clarity, ensuring users can easily understand recent changes. You adhere strictly to the project's release note standards.",
      "customInstructions": "**Release Notes (`docs/update-notes`) Standards:**\n\nWhen creating or updating release notes (`.md` files within the `docs/update-notes` directory), adhere to the following standards:\n\n1.  **File Naming:**\n    *   **Patch Releases:** Use the full version number (e.g., `v3.3.1.md`). These files should detail specific bug fixes or minor changes since the last patch or minor release.\n    *   **Minor/Major Releases:** Use the major.minor version number (e.g., `v3.11.md`). These files should summarize all changes included in that version cycle, including features, improvements, and bug fixes from all associated patch releases (e.g., `v3.11.0`, `v3.11.1`, `v3.11.2`, etc.).\n2.  **File Structure (`vX.Y.Z.md` or `vX.Y.md`):**\n    *   **Title:** The H1 title must follow the format: `# Roo Code X.Y.Z Release Notes (YYYY-MM-DD)` or `# Roo Code X.Y Release Notes (YYYY-MM-DD)`. Ensure the date reflects the release date and is always included.\n    *   **Summary Sentence:** Include a brief sentence below the title summarizing the key changes in the release. For minor/major releases, this should cover the scope of the entire version cycle.\n    *   **Section Headings:** Use consistent `##` headings. Recommended headings include:\n        *   `## Highlights` (for major features or changes, especially in minor/major releases)\n        *   `## Bug Fixes`\n        *   `## Improvements` (can include performance, UX, or other enhancements)\n        *   `## Provider Updates` (for changes related to specific integrations like Cloud providers)\n        *   `## Documentation Updates`\n        *   *(Avoid overly generic terms like \"Changes\" or \"Updates\" as section headers)*\n3.  **`index.md` File (Main Index):**\n    *   The main `index.md` file in the `docs/update-notes` directory should list all release versions chronologically (newest first).\n    *   Each entry should link to the corresponding release note file (e.g., `v3.11.md` for the summary page, `v3.3.1.md` for a specific patch). Use absolute paths from `/docs/` and omit the `.md` extension (e.g., `[3.11.8](/update-notes/v3.11.8)`).\n    *   Ensure the date `(YYYY-MM-DD)` is included next to each version link.\n4.  **Contributor Acknowledgments:** If acknowledging contributors for specific changes (e.g., bug fixes), do so consistently. Add `(thanks username!)` at the end of the relevant bullet point, omitting the `@` symbol.\n5.  **Content Style:** Maintain a clear, concise, and informative writing style. Use Markdown formatting correctly (e.g., use backticks `` for code or version numbers). Ensure consistent terminology (e.g., \"release notes\" vs. \"changelog\").\n6.  **Sidebar Update (`sidebars.ts`):**\n    *   When a new **release note page** (e.g., `vX.Y.md` or `vX.Y.Z.md`) is created, you **must** update the `sidebars.ts` file.\n    *   Add the Docusaurus ID for the new page (e.g., `'update-notes/vX.Y'` or `'update-notes/vX.Y.Z'`) to the `items` array within the appropriate 'Update Notes' category.",
      "groups": [
        "read",
        "command",
        "edit"
      ],
      "source": "project"
    }
  ]
}
````

## File: .gitignore
````
# Dependencies
/node_modules

# Production
/build

# Generated files
.docusaurus
.cache-loader
*.js
!src/**/*.js

# Misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.npmrc

npm-debug.log*
yarn-debug.log*
yarn-error.log*

.devcontainer
TEMP/

.history/
````

## File: README.md
````markdown
# Roo Code Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, and lives at https://docs.roocode.com

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
````
