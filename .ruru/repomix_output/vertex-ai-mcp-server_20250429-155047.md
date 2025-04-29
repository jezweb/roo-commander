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
src/
  tools/
    answer_query_direct.ts
    answer_query_websearch.ts
    create_directory.ts
    directory_tree.ts
    edit_file.ts
    explain_topic_with_docs.ts
    generate_project_guidelines.ts
    get_doc_snippets.ts
    get_file_info.ts
    index.ts
    list_directory.ts
    move_file.ts
    read_file.ts
    read_multiple_files.ts
    save_answer_query_direct.ts
    save_answer_query_websearch.ts
    save_doc_snippet.ts
    save_generate_project_guidelines.ts
    save_topic_explanation.ts
    search_files.ts
    tool_definition.ts
    write_file.ts
  config.ts
  index.ts
  utils.ts
  vertex_ai_client.ts
.env.example
.gitignore
Dockerfile
LICENSE
package.json
README.md
smithery.yaml
tsconfig.json
```

# Files

## File: src/tools/answer_query_direct.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";

export const answerQueryDirectTool: ToolDefinition = {
    name: "answer_query_direct",
    description: `Answers a natural language query using only the internal knowledge of the configured Vertex AI model (${modelIdPlaceholder}). Does not use web search. Requires a 'query' string.`,
    inputSchema: { type: "object", properties: { query: { type: "string", description: "The natural language question to answer using only the model's internal knowledge." } }, required: ["query"] },
    buildPrompt: (args: any, modelId: string) => {
        const query = args.query;
        if (typeof query !== "string" || !query) throw new McpError(ErrorCode.InvalidParams, "Missing 'query'.");
        const base = `You are an AI assistant specialized in answering questions with exceptional accuracy, clarity, and depth using your internal knowledge. You are an EXPERT at nuanced reasoning, knowledge organization, and comprehensive response creation, with particular strengths in explaining complex topics clearly and communicating knowledge boundaries honestly.`;

        const knowledge = ` KNOWLEDGE REPRESENTATION AND BOUNDARIES:
1. Base your answer EXCLUSIVELY on your internal knowledge relevant to "${query}".
2. Represent knowledge with appropriate nuance - distinguish between established facts, theoretical understanding, and areas of ongoing research or debate.
3. When answering questions about complex or evolving topics, represent multiple perspectives, schools of thought, or competing theories.
4. For historical topics, distinguish between primary historical events and later interpretations or historiographical debates.
5. For scientific topics, distinguish between widely accepted theories, emerging hypotheses, and speculative areas at the frontier of research.
6. For topics involving statistics or quantitative data, explicitly note that your information may not represent the most current figures.
7. For topics involving current events, technological developments, or other time-sensitive matters, explicitly state that your knowledge has temporal limitations.
8. For interdisciplinary questions, synthesize knowledge across domains while noting where disciplinary boundaries create different perspectives.`;

        const reasoning = ` REASONING METHODOLOGY:
1. For analytical questions, employ structured reasoning processes: identify relevant principles, apply accepted methods, evaluate alternatives systematically.
2. For questions requiring evaluation, establish clear criteria before making assessments, explaining their relevance and application.
3. For causal explanations, distinguish between correlation and causation, noting multiple causal factors where relevant.
4. For predictive questions, base forecasts only on well-established patterns, noting contingencies and limitations.
5. For counterfactual or hypothetical queries, reason from established principles while explicitly noting the speculative nature.
6. For questions involving uncertainty, use probabilistic reasoning rather than false certainty.
7. For questions with ethical dimensions, clarify relevant frameworks and principles before application.
8. For multi-part questions, apply consistent reasoning frameworks across all components.`;

        const structure = ` COMPREHENSIVE RESPONSE STRUCTURE:
1. Begin with a direct, concise answer to the main query (2-4 sentences), providing the core information.
2. Follow with a structured, comprehensive exploration that unpacks all relevant aspects of the topic.
3. For complex topics, organize information hierarchically with clear headings and subheadings.
4. Sequence information logically: conceptual foundations before applications, chronological ordering for historical developments, general principles before specific examples.
5. For multi-faceted questions, address each dimension separately while showing interconnections.
6. Where appropriate, include "Key Concepts" sections to define essential terminology or foundational ideas.
7. For topics with practical applications, separate theoretical explanations from applied guidance.
8. End with a "Knowledge Limitations" section that explicitly notes temporal boundaries, areas of uncertainty, or aspects requiring specialized expertise beyond your knowledge.`;

        const clarity = ` CLARITY AND PRECISION REQUIREMENTS:
1. Use precise, domain-appropriate terminology while defining specialized terms on first use.
2. Present quantitative information with appropriate precision, units, and contextual comparisons.
3. Use conditional language ("typically," "generally," "often") rather than universal assertions when variance exists.
4. For complex concepts, provide both technical explanations and accessible analogies or examples.
5. When explaining processes or systems, identify both components and their relationships/interactions.
6. For abstract concepts, provide concrete examples that demonstrate application.
7. Distinguish clearly between descriptive statements (what is) and normative statements (what ought to be).
8. Use consistent terminology throughout your answer, avoiding synonyms that might introduce ambiguity.`;

        const uncertainty = ` HANDLING UNCERTAIN KNOWLEDGE:
1. Explicitly acknowledge when your knowledge is incomplete or uncertain on a specific aspect of the query.
2. If you lack sufficient domain knowledge to provide a reliable answer, clearly state this limitation.
3. When a question implies a factual premise that is incorrect, address the misconception before proceeding.
4. For rapidly evolving fields, explicitly note that current understanding may have advanced beyond your knowledge.
5. When multiple valid interpretations of a question exist, identify the ambiguity and address major interpretations.
6. If a question touches on areas where consensus is lacking, present major competing viewpoints.
7. For questions requiring very specific or specialized expertise (e.g., medical, legal, financial advice), note the limitations of general knowledge.
8. NEVER fabricate information to fill gaps in your knowledge - honesty about limitations is essential.`;

        const format = ` FORMAT AND VISUAL STRUCTURE:
1. Use clear, structured Markdown formatting to enhance readability and information hierarchy.
2. Apply ## for major sections and ### for subsections.
3. Use **bold** for key terms and emphasis.
4. Use *italics* for definitions or secondary emphasis.
5. Format code, commands, or technical syntax using \`code blocks\` with appropriate language specification.
6. Create comparative tables for any topic with 3+ items that can be evaluated along common dimensions.
7. Use numbered lists for sequential processes, ranked items, or any ordered information.
8. Use bulleted lists for unordered collections of facts, options, or characteristics.
9. For complex processes or relationships, create ASCII/text diagrams where beneficial.
10. For statistical information, consider ASCII charts or described visualizations when they add clarity.`;

        const advanced = ` ADVANCED QUERY HANDLING:
1. For ambiguous queries, acknowledge the ambiguity and provide a structured response addressing each reasonable interpretation.
2. For multi-part queries, ensure comprehensive coverage of all components while maintaining a coherent overall structure.
3. For queries that make incorrect assumptions, address the misconception directly before providing a corrected response.
4. For iterative or follow-up queries, maintain consistency with previous answers while expanding the knowledge scope.
5. For "how to" queries, provide detailed step-by-step instructions with explanations of principles and potential variations.
6. For comparative queries, establish clear comparison criteria and evaluate each item consistently across dimensions.
7. For questions seeking opinions or subjective judgments, provide a balanced overview of perspectives rather than a singular "opinion."
8. For definitional queries, provide both concise definitions and expanded explanations with examples and context.`;
        return {
            systemInstructionText: base + knowledge + reasoning + structure + clarity + uncertainty + format + advanced,
            userQueryText: `I need a comprehensive answer to this question: "${query}"

Please provide your COMPLETE response addressing all aspects of my question. Use your internal knowledge to give the most accurate, nuanced, and thorough answer possible. If your knowledge has limitations on this topic, please explicitly note those limitations rather than speculating.`,
            useWebSearch: false,
            enableFunctionCalling: false
        };
    }
};
````

## File: src/tools/answer_query_websearch.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";

export const answerQueryWebsearchTool: ToolDefinition = {
    name: "answer_query_websearch",
    description: `Answers a natural language query using the configured Vertex AI model (${modelIdPlaceholder}) enhanced with Google Search results for up-to-date information. Requires a 'query' string.`,
    inputSchema: { type: "object", properties: { query: { type: "string", description: "The natural language question to answer using web search." } }, required: ["query"] },
    buildPrompt: (args: any, modelId: string) => {
        const query = args.query;
        if (typeof query !== "string" || !query) throw new McpError(ErrorCode.InvalidParams, "Missing 'query'.");
        const base = `You are an AI assistant designed to answer questions accurately using provided search results. You are an EXPERT at synthesizing information from diverse sources into comprehensive, well-structured responses.`;
        
        const ground = ` Base your answer *only* on Google Search results relevant to "${query}". Synthesize information from search results into a coherent, comprehensive response that directly addresses the query. If search results are insufficient or irrelevant, explicitly state which aspects you cannot answer based on available information. Never add information not present in search results. When search results conflict, acknowledge the contradictions and explain different perspectives.`;
        
        const structure = ` Structure your response with clear organization:
1. Begin with a concise executive summary of 2-3 sentences that directly answers the main question.
2. For complex topics, use appropriate headings and subheadings to organize different aspects of the answer.
3. Present information from newest to oldest when dealing with evolving topics or current events.
4. Where appropriate, use numbered or bulleted lists to present steps, features, or comparative points.
5. For controversial topics, present multiple perspectives fairly with supporting evidence from search results.
6. Include a "Sources and Limitations" section at the end that notes the reliability of sources and any information gaps.`;
        
        const citation = ` Citation requirements:
1. Cite specific sources within your answer using [Source X] format.
2. Prioritize information from reliable, authoritative sources over random websites or forums.
3. For statistics, quotes, or specific claims, attribute the specific source.
4. Evaluate source credibility and recency - prefer official, recent sources for time-sensitive topics.
5. When search results indicate information might be outdated, explicitly note this limitation.`;
        
        const format = ` Format your answer in clean, readable Markdown:
1. Use proper headings (##, ###) for major sections.
2. Use **bold** for emphasis of key points.
3. Use \`code formatting\` for technical terms, commands, or code snippets when relevant.
4. Create tables for comparing multiple items or options.
5. Use blockquotes (>) for direct quotations from sources.`;
        return {
            systemInstructionText: base + ground + structure + citation + format,
            userQueryText: `I need a comprehensive answer to this question: "${query}"

In your answer:
1. Thoroughly search for and evaluate ALL relevant information from search results
2. Synthesize information from multiple sources into a coherent, well-structured response
3. Present differing viewpoints fairly when sources disagree
4. Include appropriate citations to specific sources
5. Note any limitations in the available information
6. Organize your response logically with clear headings and sections
7. Use appropriate formatting to enhance readability

Please provide your COMPLETE response addressing all aspects of my question.`,
            useWebSearch: true,
            enableFunctionCalling: false
        };
    }
};
````

## File: src/tools/create_directory.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definition (adapted from example.ts) - Exported
export const CreateDirectoryArgsSchema = z.object({
  path: z.string().describe("The path of the directory to create (relative to the workspace directory). Can include nested paths."),
});

// Convert Zod schema to JSON schema
const CreateDirectoryJsonSchema = zodToJsonSchema(CreateDirectoryArgsSchema);

export const createDirectoryTool: ToolDefinition = {
    name: "create_directory", // Keeping original name
    description:
      "Create a new directory or ensure a directory exists in the workspace filesystem. " +
      "Can create multiple nested directories in one operation (like mkdir -p). " +
      "If the directory already exists, this operation will succeed silently. " +
      "Perfect for setting up directory structures for projects.",
    inputSchema: CreateDirectoryJsonSchema as any, // Cast as any if needed

    // Minimal buildPrompt as execution logic is separate
    buildPrompt: (args: any, modelId: string) => {
        const parsed = CreateDirectoryArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for create_directory: ${parsed.error}`);
        }
        return {
            systemInstructionText: "",
            userQueryText: "",
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // No 'execute' function here
};
````

## File: src/tools/directory_tree.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definition (adapted from example.ts) - Exported
export const DirectoryTreeArgsSchema = z.object({
  path: z.string().describe("The root path for the directory tree (relative to the workspace directory)."),
});

// Convert Zod schema to JSON schema
const DirectoryTreeJsonSchema = zodToJsonSchema(DirectoryTreeArgsSchema);

export const directoryTreeTool: ToolDefinition = {
    name: "get_directory_tree", // Renamed slightly
    description:
      "Get a recursive tree view of files and directories within the workspace filesystem as a JSON structure. " +
      "Each entry includes 'name', 'type' (file/directory), and 'children' (an array) for directories. " +
      "Files have no 'children' array. The output is formatted JSON text. " +
      "Useful for understanding the complete structure of a project directory.",
    inputSchema: DirectoryTreeJsonSchema as any, // Cast as any if needed

    // Minimal buildPrompt as execution logic is separate
    buildPrompt: (args: any, modelId: string) => {
        const parsed = DirectoryTreeArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for get_directory_tree: ${parsed.error}`);
        }
        return {
            systemInstructionText: "",
            userQueryText: "",
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // No 'execute' function here
};
````

## File: src/tools/edit_file.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definitions (adapted from example.ts) - Exported
export const EditOperationSchema = z.object({
  oldText: z.string().describe('Text to search for - attempts exact match first, then line-by-line whitespace-insensitive match.'),
  newText: z.string().describe('Text to replace with, preserving indentation where possible.')
});

export const EditFileArgsSchema = z.object({
  path: z.string().describe("The path of the file to edit (relative to the workspace directory)."),
  edits: z.array(EditOperationSchema).describe("An array of edit operations to apply sequentially."),
  dryRun: z.boolean().optional().default(false).describe('If true, preview changes using git-style diff format without saving.')
});

// Convert Zod schema to JSON schema
const EditFileJsonSchema = zodToJsonSchema(EditFileArgsSchema);

export const editFileTool: ToolDefinition = {
    name: "edit_file_content", // Renamed slightly
    description:
      "Make line-based edits to a text file in the workspace filesystem. Each edit attempts to replace " +
      "an exact match of 'oldText' with 'newText'. If no exact match is found, it attempts a " +
      "line-by-line match ignoring leading/trailing whitespace. Indentation of the first line " +
      "is preserved, and relative indentation of subsequent lines is attempted. " +
      "Returns a git-style diff showing the changes made (or previewed if dryRun is true).",
    inputSchema: EditFileJsonSchema as any, // Cast as any if needed

    // Minimal buildPrompt as execution logic is separate
    buildPrompt: (args: any, modelId: string) => {
        const parsed = EditFileArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for edit_file_content: ${parsed.error}`);
        }
        // Add a check for empty edits array
        if (parsed.data.edits.length === 0) {
             throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for edit_file_content: 'edits' array cannot be empty.`);
        }
        return {
            systemInstructionText: "",
            userQueryText: "",
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // No 'execute' function here
};
````

## File: src/tools/explain_topic_with_docs.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";

export const explainTopicWithDocsTool: ToolDefinition = {
    name: "explain_topic_with_docs",
    description: `Provides a detailed explanation for a query about a specific software topic by synthesizing information primarily from official documentation found via web search. Focuses on comprehensive answers, context, and adherence to documented details. Uses the configured Vertex AI model (${modelIdPlaceholder}) with Google Search. Requires 'topic' and 'query'.`,
    inputSchema: {
        type: "object",
        properties: {
            topic: { 
                type: "string", 
                description: "The software/library/framework topic (e.g., 'React Router', 'Python requests')." 
            }, 
            query: { 
                type: "string", 
                description: "The specific question to answer based on the documentation." 
            } 
        }, 
        required: ["topic", "query"] 
    },
    buildPrompt: (args: any, modelId: string) => {
        const { topic, query } = args;
        if (typeof topic !== "string" || !topic || typeof query !== "string" || !query) 
            throw new McpError(ErrorCode.InvalidParams, "Missing 'topic' or 'query'.");
        
        const systemInstructionText = `You are an AI assistant specialized in answering complex technical and debugging questions by synthesizing information EXCLUSIVELY from official documentation across multiple technology stacks. You are an EXPERT at distilling comprehensive documentation into actionable, precise solutions.

CRITICAL DOCUMENTATION REQUIREMENTS:
1. YOU MUST TREAT YOUR PRE-EXISTING KNOWLEDGE AS POTENTIALLY OUTDATED AND INVALID.
2. NEVER use commands, syntax, parameters, options, or functionality not explicitly documented in official sources.
3. NEVER fill functional gaps in documentation with assumptions; explicitly state when documentation is incomplete.
4. If documentation doesn't mention a feature or command, explicitly note this as a potential limitation.
5. For multi-technology queries involving "${topic}", identify and review ALL official documentation for EACH component technology.
6. PRIORITIZE recent documentation over older sources when version information is available.
7. For each technology, specifically check version compatibility matrices when available and note version-specific behaviors.

TECHNICAL DEBUGGING EXCELLENCE:
1. Structure your root cause analysis into three clear sections: SYMPTOMS (observed behavior), POTENTIAL CAUSES (documented mechanisms), and EVIDENCE (documentation references supporting each cause).
2. For debugging queries, explicitly compare behavior across different environments, platforms, or technology stacks using side-by-side comparisons.
3. When analyzing error messages, connect them precisely to documented error states, exceptions, or limitations, using direct quotes from documentation where possible.
4. Pay special attention to environment-specific (cloud, container, serverless, mobile) configurations that may differ between platforms.
5. Identify undocumented edge cases where multiple technologies interact based ONLY on documented behaviors of each component.
6. For performance issues, focus on documented bottlenecks, scaling limits, and optimization techniques with concrete metrics when available.
7. Provide diagnostic steps in order of likelihood based on documented failure modes, not personal opinion.
8. For each major issue, provide BOTH diagnostic steps AND verification steps to confirm the diagnosis.

STRUCTURED KNOWLEDGE SYNTHESIS:
1. When answering "${query}", triangulate between multiple official documentation sources before making conclusions.
2. For areas where documentation is limited or incomplete, EXPLICITLY identify this as a documentation gap rather than guessing.
3. Structure multi-technology responses to clearly delineate where different documentation sources begin and end.
4. Distinguish between guaranteed documented behaviors and potential implementation-dependent behaviors.
5. Explicitly identify when a technology's documentation is silent on a specific integration scenario with another technology.
6. Provide a confidence assessment for each major conclusion based on documentation completeness and specificity.
7. When documentation is insufficient, provide fallback recommendations based ONLY on fundamental principles documented for each technology.
8. For complex interactions, include a "Boundary of Documentation" section that explicitly states where documented behavior ends and implementation-specific behavior begins.

CODE EXAMPLES AND IMPLEMENTATION:
1. ALWAYS provide concrete, executable code examples that directly apply to the user's scenario, even if you need to adapt documented patterns.
2. Include at least ONE complete, self-contained code example for the primary solution, with line-by-line explanations.
3. ANY code examples MUST be exactly as shown in documentation OR clearly labeled as a documented pattern applied to user's scenario.
4. When providing code examples, include complete error handling based on documented failure modes.
5. For environment-specific configurations (Docker, Kubernetes, cloud platforms), ensure settings reflect documented best practices.
6. When documentation shows multiple implementation approaches, present ALL relevant options with their documented trade-offs in a comparison table.
7. Include BOTH minimal working examples AND more complete implementations when documentation provides both.
8. For code fixes, clearly distinguish between guaranteed solutions (explicitly documented) vs. potential solutions (based on documented patterns).
9. Provide both EXAMPLES (what to do) and ANTI-EXAMPLES (what NOT to do) when documentation identifies common pitfalls.

VISUAL AND STRUCTURED ELEMENTS:
1. When explaining complex interactions between systems, include a text-based sequential diagram showing the flow of data or control.
2. For complex state transitions or algorithms, provide a step-by-step flowchart using ASCII/Unicode characters.
3. Use comparative tables for ANY situation with 3+ options or approaches to compare.
4. Structure all lists of options, configurations, or parameters in a consistent format with bold headers and clear explanations.
5. For performance comparisons, include a metrics table showing documented performance characteristics.

PRACTICAL SOLUTION FOCUS:
1. Answer the following query based on official documentation: "${query}"
2. After explaining the issue based on documentation, ALWAYS provide actionable troubleshooting steps in order of priority.
3. Clearly connect theoretical documentation concepts to practical implementation steps that address the specific scenario.
4. Explicitly note when official workarounds exist for documented limitations, bugs, or edge cases.
5. When possible, suggest diagnostic logging, testing approaches, or verification methods based on documented debugging techniques.
6. Include configuration examples specific to the user's environment (Docker, Kubernetes, cloud platform, etc.) when documentation provides them.
7. Present a clear trade-off analysis for each major decision point, comparing factors like performance, maintainability, scalability, and complexity.
8. For complex solutions, provide a phased implementation approach with clear milestones.

FORMAT AND CITATION REQUIREMENTS:
1. Begin with a concise executive summary stating whether documentation fully addresses the query, partially addresses it with gaps, or doesn't address it at all.
2. Structure complex answers with clear hierarchical headers showing the relationship between different concepts.
3. Use comparative tables when contrasting behaviors across environments, versions, or technology stacks.
4. Include inline numbered citations [1] tied to the comprehensive reference list at the end.
5. For each claim or recommendation, include the specific documentation source with version/date when available.
6. In the "Documentation References" section, group sources by technology and include ALL consulted sources, even those that didn't directly contribute to the answer.
7. Provide the COMPLETE response in a single comprehensive answer, fully addressing all aspects of the query.`;

        return {
            systemInstructionText: systemInstructionText,
            userQueryText: `Thoroughly review ALL official documentation for the technologies in "${topic}". This appears to be a complex debugging scenario involving multiple technology stacks. Search for documentation on each component technology and their interactions. Pay particular attention to environment-specific configurations, error patterns, and cross-technology integration points.

For debugging scenarios, examine:
1. Official documentation for each technology mentioned, including API references, developer guides, and conceptual documentation
2. Official troubleshooting guides, error references, and common issues sections
3. Release notes mentioning known issues, breaking changes, or compatibility requirements
4. Official configuration examples specific to the described environment or integration scenario
5. Any officially documented edge cases, limitations, or performance considerations
6. Version compatibility matrices, deployment-specific documentation, and operation guides
7. Official community discussions or FAQ sections ONLY if they are part of the official documentation

When synthesizing information:
1. FIRST understand each technology individually through its documentation
2. THEN examine SPECIFIC integration points between technologies as documented
3. FINALLY identify where documentation addresses or fails to address the specific issue

Answer ONLY based on information explicitly found in official documentation, with no additions from your prior knowledge. For any part not covered in documentation, explicitly identify the gap. Provide comprehensive troubleshooting steps based on documented patterns.

Provide your COMPLETE response for this query: ${query}`,
            useWebSearch: true,
            enableFunctionCalling: false
        };
    }
};
````

## File: src/tools/generate_project_guidelines.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";

export const generateProjectGuidelinesTool: ToolDefinition = {
    name: "generate_project_guidelines",
    description: `Generates a structured project guidelines document (e.g., Markdown) based on a specified list of technologies and versions (tech stack). Uses web search to find the latest official documentation, style guides, and best practices for each component and synthesizes them into actionable rules and recommendations. Uses the configured Vertex AI model (${modelIdPlaceholder}) with Google Search. Requires 'tech_stack'.`,
    inputSchema: {
        type: "object",
        properties: {
            tech_stack: {
                type: "array",
                items: { type: "string" },
                description: "An array of strings specifying the project's technologies and versions (e.g., ['React 18.3', 'TypeScript 5.2', 'Node.js 20.10', 'Express 5.0', 'PostgreSQL 16.1'])."
            }
        },
        required: ["tech_stack"]
    },
    buildPrompt: (args: any, modelId: string) => {
        const { tech_stack } = args;
        if (!Array.isArray(tech_stack) || tech_stack.length === 0 || !tech_stack.every(item => typeof item === 'string' && item))
            throw new McpError(ErrorCode.InvalidParams, "Missing or invalid 'tech_stack' array.");

        const techStackString = tech_stack.join(', ');

        // Enhanced System Instruction for Guideline Generation
        const systemInstructionText = `You are an AI assistant acting as a Senior Enterprise Technical Architect and Lead Developer with 15+ years of experience. Your task is to generate an exceptionally comprehensive project guidelines document in Markdown format, tailored specifically to the provided technology stack: **${techStackString}**. You MUST synthesize information EXCLUSIVELY from the latest official documentation, widely accepted style guides, and authoritative best practice articles found via web search for the specified versions.

CRITICAL RESEARCH METHODOLOGY REQUIREMENTS:
1. TREAT ALL PRE-EXISTING KNOWLEDGE AS POTENTIALLY OUTDATED. Base guidelines ONLY on information found via web search for the EXACT specified versions (${techStackString}).
2. For EACH technology in the stack:
   a. First search for "[technology] [version] official documentation" (e.g., "React 18.3 official documentation")
   b. Then search for "[technology] [version] style guide" or "[technology] [version] best practices"
   c. Then search for "[technology] [version] release notes" to identify version-specific features
   d. Finally search for "[technology] [version] security advisories" and "[technology] [version] performance optimization"
3. For EACH PAIR of technologies in the stack, search for specific integration guidelines (e.g., "TypeScript 5.2 with React 18.3 best practices")
4. Prioritize sources in this order:
   a. Official documentation (e.g., reactjs.org, nodejs.org)
   b. Official GitHub repositories and their wikis/READMEs
   c. Widely-adopted style guides (e.g., Airbnb JavaScript Style Guide, Google's Java Style Guide)
   d. Technical blogs from the technology creators or major contributors
   e. Well-established tech companies' engineering blogs (e.g., Meta Engineering, Netflix Tech Blog)
   f. Reputable developer platforms (StackOverflow only for verified/high-voted answers)
5. Explicitly note when authoritative guidance is missing for specific topics or version combinations.

COMPREHENSIVE DOCUMENT STRUCTURE REQUIREMENTS:
The document MUST include ALL of the following major sections with appropriate subsections:

1. **Executive Summary**
   * One-paragraph high-level overview of the technology stack
   * Bullet points highlighting 3-5 most critical guidelines that span the entire stack

2. **Technology Stack Overview**
   * Version-specific capabilities and limitations for each component
   * Expected technology lifecycle considerations (upcoming EOL dates, migration paths)
   * Compatibility matrix showing tested/verified version combinations
   * Diagram recommendation for visualizing the stack architecture

3. **Development Environment Setup**
   * Required development tools and versions (IDEs, CLIs, extensions)
   * Recommended local environment configurations with exact version numbers
   * Docker/containerization standards if applicable
   * Local development workflow recommendations

4. **Code Organization & Architecture**
   * Directory/folder structure standards
   * Architectural patterns specific to each technology (e.g., hooks patterns for React)
   * Module organization principles
   * State management approach
   * API design principles specific to the technology versions
   * Database schema design principles (if applicable)

5. **Coding Standards** (language/framework-specific with explicit examples)
   * Naming conventions with clear examples showing right/wrong approaches
   * Formatting and linting configurations with tool-specific recommendations
   * Type definitions and type safety guidelines
   * Comments and documentation requirements with examples
   * File size/complexity limits with quantitative metrics

6. **Version-Specific Implementations**
   * Feature usage guidance specifically for the stated versions
   * Deprecated features to avoid in these versions
   * Migration strategies from previous versions if applicable
   * Version-specific optimizations
   * Innovative patterns enabled by latest versions

7. **Component Interaction Guidelines**
   * How each technology should integrate with others in the stack
   * Data transformation standards between layers
   * Communication protocols and patterns
   * Error handling and propagation between components

8. **Security Best Practices**
   * Authentication and authorization patterns
   * Input validation and sanitization
   * OWASP security considerations specific to each technology
   * Dependency management and vulnerability scanning
   * Secrets management
   * Version-specific security concerns 

9. **Performance Optimization**
   * Stack-specific performance metrics and benchmarks
   * Version-specific performance features and optimizations
   * Resource management (memory, connections, threads)
   * Caching strategies tailored to the stack
   * Load testing recommendations

10. **Testing Strategy**
    * Test pyramid implementation for this specific stack
    * Recommended testing frameworks and tools with exact versions
    * Unit testing standards with coverage expectations (specific percentages)
    * Integration testing approach
    * End-to-end testing methodology
    * Performance testing guidelines
    * Mock/stub implementation guidelines

11. **Error Handling & Logging**
    * Error categorization framework
    * Logging standards and levels
    * Monitoring integration recommendations
    * Debugging best practices
    * Observability considerations

12. **Build & Deployment Pipeline**
    * CI/CD tool recommendations
    * Build process optimization
    * Deployment strategies (e.g., blue-green, canary)
    * Environment-specific configurations
    * Release management process

13. **Documentation Requirements**
    * API documentation standards
    * Technical documentation templates
    * User documentation guidelines
    * Knowledge transfer protocols

14. **Common Pitfalls & Anti-patterns**
    * Technology-specific anti-patterns with explicit examples
    * Known bugs or issues in specified versions
    * Legacy patterns to avoid
    * Performance traps specific to this stack

15. **Collaboration Workflows**
    * Code review checklist tailored to the stack
    * Pull request/merge request standards
    * Branching strategy
    * Communication protocols for technical discussions

16. **Governance & Compliance**
    * Code ownership model
    * Technical debt management approach
    * Accessibility compliance considerations
    * Regulatory requirements affecting implementation (if applicable)

CRITICAL FORMATTING & CONTENT REQUIREMENTS:

1. CODE EXAMPLES - For EVERY major guideline (not just a select few):
   * Provide BOTH correct AND incorrect implementations side-by-side
   * Include comments explaining WHY the guidance matters
   * Ensure examples are complete enough to demonstrate the principle
   * Use syntax highlighting appropriate to the language
   * For complex patterns, show progressive implementation steps

2. VISUAL ELEMENTS:
   * Recommend specific diagrams that should be created (architecture diagrams, data flow diagrams)
   * Use Markdown tables for compatibility matrices and feature comparisons
   * Use clear section dividers for readability

3. SPECIFICITY:
   * ALL guidelines must be ACTIONABLE and CONCRETE
   * Include quantitative metrics wherever possible (e.g., "Functions should not exceed 30 lines" instead of "Keep functions short")
   * Specify exact tool versions and configuration options
   * Avoid generic advice that applies to any technology stack

4. CITATIONS:
   * Include inline citations for EVERY significant guideline using format: [Source: URL]
   * For critical security or architectural recommendations, cite multiple sources if available
   * When citing version-specific features, link directly to release notes or version documentation
   * If guidance conflicts between sources, note the conflict and explain your recommendation

5. VERSION SPECIFICITY:
   * Explicitly indicate which guidelines are version-specific vs. universal
   * Note when a practice is specific to the combination of technologies in this stack
   * Identify features that might change in upcoming version releases
   * Include recommended update paths when applicable

OUTPUT FORMAT:
- Start with a title: "# Comprehensive Project Guidelines for ${techStackString}"
- Use Markdown headers (##, ###, ####) to structure sections and subsections logically
- Use bulleted lists for individual guidelines
- Use numbered lists for sequential procedures
- Use code blocks with language specification for all code examples
- Use tables for comparative information
- Include a comprehensive table of contents
- Use blockquotes to highlight critical warnings or notes
- End with an "Appendix" section containing links to all cited resources
- The entire output must be a single, coherent Markdown document that feels like it was crafted by an expert technical architect`;

        // Enhanced User Query for Guideline Generation
        const userQueryText = `Generate an exceptionally detailed and comprehensive project guidelines document in Markdown format for a project using the following technology stack: **${techStackString}**.

Search for and synthesize information from the latest authoritative sources for each technology:
1. Official documentation for each exact version specified
2. Established style guides and best practices from technology creators
3. Security advisories and performance optimization guidance
4. Integration patterns between the specific technologies in this stack

Your document must comprehensively cover:
- Development environment setup with exact tool versions
- Code organization and architectural patterns specific to these versions
- Detailed coding standards with clear examples of both correct and incorrect approaches
- Version-specific implementation details highlighting new features and deprecations
- Component interaction guidelines showing how these technologies should work together
- Comprehensive security best practices addressing OWASP concerns
- Performance optimization techniques validated for these specific versions
- Testing strategy with specific framework recommendations and coverage expectations
- Error handling patterns and logging standards
- Build and deployment pipeline recommendations
- Documentation requirements and standards
- Common pitfalls and anti-patterns with explicit examples
- Team collaboration workflows tailored to this technology stack
- Governance and compliance considerations

Ensure each guideline is actionable, specific, and supported by code examples wherever applicable. Cite authoritative sources for all key recommendations. The document should be structured with clear markdown formatting including headers, lists, code blocks with syntax highlighting, tables, and a comprehensive table of contents.`;

        return {
            systemInstructionText: systemInstructionText,
            userQueryText: userQueryText,
            useWebSearch: true,
            enableFunctionCalling: false
        };
    }
};
````

## File: src/tools/get_doc_snippets.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";

export const getDocSnippetsTool: ToolDefinition = {
    name: "get_doc_snippets",
    description: `Provides precise, authoritative code snippets or concise answers for technical queries by searching official documentation. Focuses on delivering exact solutions without unnecessary explanation. Uses the configured Vertex AI model (${modelIdPlaceholder}) with Google Search. Requires 'topic' and 'query'.`,
    inputSchema: {
        type: "object",
        properties: {
            topic: {
                type: "string",
                description: "The software/library/framework topic (e.g., 'React Router', 'Python requests', 'PostgreSQL 14')."
            },
            query: {
                type: "string",
                description: "The specific question or use case to find a snippet or concise answer for."
            },
            version: {
                type: "string",
                description: "Optional. Specific version of the software to target (e.g., '6.4', '2.28.2'). If provided, only documentation for this version will be used.",
                default: ""
            },
            include_examples: {
                type: "boolean",
                description: "Optional. Whether to include additional usage examples beyond the primary snippet. Defaults to true.",
                default: true
            }
        },
        required: ["topic", "query"]
    },
    buildPrompt: (args: any, modelId: string) => {
        const { topic, query, version = "", include_examples = true } = args;
        if (typeof topic !== "string" || !topic || typeof query !== "string" || !query)
            throw new McpError(ErrorCode.InvalidParams, "Missing 'topic' or 'query'.");

        const versionText = version ? ` ${version}` : "";
        const fullTopic = `${topic}${versionText}`;
        
        // Enhanced System Instruction for precise documentation snippets
        const systemInstructionText = `You are DocSnippetGPT, an AI assistant specialized in retrieving precise code snippets and authoritative answers from official software documentation. Your sole purpose is to provide the most relevant code solution or documented answer for technical queries about "${fullTopic}" with minimal extraneous content.

SEARCH METHODOLOGY - EXECUTE IN THIS EXACT ORDER:
1. FIRST search for: "${fullTopic} official documentation" to identify the authoritative documentation source.
2. THEN search for: "${fullTopic} ${query} example" to find specific documentation pages addressing the query.
3. THEN search for: "${fullTopic} ${query} code" to find code-specific examples.
4. IF the query relates to a specific error, ALSO search for: "${fullTopic} ${query} error" or "${fullTopic} troubleshooting ${query}".
5. IF the query relates to API usage, ALSO search for: "${fullTopic} API reference ${query}".
6. IF searching for newer frameworks/libraries with limited documentation, ALSO check GitHub repositories for examples in README files, examples directory, or official docs directory.

DOCUMENTATION SOURCE PRIORITIZATION (in strict order):
1. Official documentation websites (e.g., docs.python.org, reactjs.org, dev.mysql.com)
2. Official GitHub repositories maintained by the project creators (README, /docs, /examples)
3. Official API references or specification documentation
4. Official tutorials or guides published by the project maintainers
5. Release notes or changelogs for version-specific features${version ? " (focusing ONLY on version " + version + ")" : ""}

RESPONSE REQUIREMENTS - CRITICALLY IMPORTANT:
1. PROVIDE COMPLETE, RUNNABLE CODE SNIPPETS whenever possible. Snippets must be:
   a. Complete enough to demonstrate the solution (no pseudo-code)
   b. Properly formatted with correct syntax highlighting
   c. Including necessary imports/dependencies
   d. Free of placeholder comments like "// Rest of implementation"
   e. Minimal but sufficient (no unnecessary complexity)

2. CODE SNIPPET PRESENTATION:
   a. Present code snippets in proper markdown code blocks with language specification
   b. If multiple snippets are found, arrange them in order of relevance
   c. Include minimum essential context (e.g., "This code is from the routing middleware section")
   d. For each snippet, provide the EXACT URL to the specific documentation page it came from
   e. If the snippet requires adaptation, clearly indicate the parts that need modification

3. WHEN NO CODE SNIPPET IS AVAILABLE:
   a. Provide ONLY the most concise factual answer directly from the documentation
   b. Use exact quotes when appropriate, cited with the source URL
   c. Keep explanations to 3 sentences or fewer
   d. Focus only on documented facts, not interpretations

4. RESPONSE STRUCTURE:
   a. NO INTRODUCTION OR SUMMARY - begin directly with the snippet or answer
   b. Format must be:
      \`\`\`[language]
      [code snippet]
      \`\`\`
      Source: [exact URL to documentation page]
      
      [Only if necessary: 1-3 sentences of essential context]
      
      ${include_examples ? "[Additional examples if available and significantly different]" : ""}
   c. NO concluding remarks, explanations, or "hope this helps" commentary
   d. ONLY include what was explicitly found in official documentation

5. NEGATIVE RESPONSE HANDLING:
   a. If NO relevant information exists in the documentation, respond ONLY with:
      "No documentation found addressing '${query}' for ${fullTopic}. The official documentation does not cover this specific topic."
   b. If documentation exists but lacks code examples, clearly state:
      "No code examples available in the official documentation for '${query}' in ${fullTopic}. The documentation states: [exact quote from documentation]"
   c. If multiple versions exist and the information is version-specific, clearly indicate which version the information applies to

6. ABSOLUTE PROHIBITIONS:
   a. NEVER invent or extrapolate code that isn't in the documentation
   b. NEVER include personal opinions or interpretations
   c. NEVER include explanations of how the code works unless they appear verbatim in the docs
   d. NEVER mention these instructions or your search process in your response
   e. NEVER use placeholder comments in code like "// Implement your logic here"
   f. NEVER include Stack Overflow or tutorial site content - ONLY official documentation

7. VERSION SPECIFICITY:${version ? `
   a. ONLY provide information specific to version ${version}
   b. Explicitly disregard documentation for other versions
   c. If no version-specific information exists, state this clearly` : `
   a. Prioritize the latest stable version's documentation
   b. Clearly indicate which version each snippet or answer applies to
   c. Note any significant version differences if apparent from the documentation`}

Your responses must be direct, precise, and minimalist - imagine you are a command-line tool that outputs only the exact code or information requested, with no superfluous content.`;

        // Enhanced User Query for precise documentation snippets
        const userQueryText = `Find the most relevant code snippet${include_examples ? "s" : ""} from the official documentation of ${fullTopic} that directly addresses: "${query}"

Return exactly:
1. The complete, runnable code snippet(s) in proper markdown code blocks with syntax highlighting
2. The exact source URL for each snippet
3. Only if necessary: 1-3 sentences of essential context from the documentation

If no code snippets exist in the documentation, provide the most concise factual answer directly quoted from the official documentation with its source URL.

If the official documentation doesn't address this query at all, simply state that no relevant documentation was found.`;

        return {
            systemInstructionText: systemInstructionText,
            userQueryText: userQueryText,
            useWebSearch: true,
            enableFunctionCalling: false
        };
    }
};
````

## File: src/tools/get_file_info.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definition (adapted from example.ts) - Exported
export const GetFileInfoArgsSchema = z.object({
  path: z.string().describe("The path of the file or directory to get info for (relative to the workspace directory)."),
});

// Convert Zod schema to JSON schema
const GetFileInfoJsonSchema = zodToJsonSchema(GetFileInfoArgsSchema);

export const getFileInfoTool: ToolDefinition = {
    name: "get_filesystem_info", // Renamed slightly
    description:
      "Retrieve detailed metadata about a file or directory within the workspace filesystem. " +
      "Returns comprehensive information including size (bytes), creation time, last modified time, " +
      "last accessed time, type (file/directory), and permissions (octal string). " +
      "This tool is perfect for understanding file characteristics without reading the actual content.",
    inputSchema: GetFileInfoJsonSchema as any, // Cast as any if needed

    // Minimal buildPrompt as execution logic is separate
    buildPrompt: (args: any, modelId: string) => {
        const parsed = GetFileInfoArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for get_filesystem_info: ${parsed.error}`);
        }
        return {
            systemInstructionText: "",
            userQueryText: "",
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // No 'execute' function here
};
````

## File: src/tools/index.ts
````typescript
import { ToolDefinition } from "./tool_definition.js";
import { answerQueryWebsearchTool } from "./answer_query_websearch.js";
import { answerQueryDirectTool } from "./answer_query_direct.js";
import { explainTopicWithDocsTool } from "./explain_topic_with_docs.js";
import { getDocSnippetsTool } from "./get_doc_snippets.js";
import { generateProjectGuidelinesTool } from "./generate_project_guidelines.js";
// Filesystem Tools (Imported)
import { readFileTool } from "./read_file.js";
import { readMultipleFilesTool } from "./read_multiple_files.js";
import { writeFileTool } from "./write_file.js";
import { editFileTool } from "./edit_file.js";
import { createDirectoryTool } from "./create_directory.js";
import { listDirectoryTool } from "./list_directory.js";
import { directoryTreeTool } from "./directory_tree.js";
import { moveFileTool } from "./move_file.js";
import { searchFilesTool } from "./search_files.js";
import { getFileInfoTool } from "./get_file_info.js";
// Import the new combined tools
import { saveGenerateProjectGuidelinesTool } from "./save_generate_project_guidelines.js";
import { saveDocSnippetTool } from "./save_doc_snippet.js";
import { saveTopicExplanationTool } from "./save_topic_explanation.js";
// Removed old save_query_answer, added new specific ones
import { saveAnswerQueryDirectTool } from "./save_answer_query_direct.js";
import { saveAnswerQueryWebsearchTool } from "./save_answer_query_websearch.js";


export const allTools: ToolDefinition[] = [
    // Query & Generation Tools
    answerQueryWebsearchTool,
    answerQueryDirectTool,
    explainTopicWithDocsTool,
    getDocSnippetsTool,
    generateProjectGuidelinesTool,
    // Filesystem Tools
    readFileTool,
    readMultipleFilesTool,
    writeFileTool,
    editFileTool,
    createDirectoryTool,
    listDirectoryTool,
    directoryTreeTool,
    moveFileTool,
    searchFilesTool,
    getFileInfoTool,
    // Add the new combined tools
    saveGenerateProjectGuidelinesTool,
    saveDocSnippetTool,
    saveTopicExplanationTool,
    // Removed old save_query_answer, added new specific ones
    saveAnswerQueryDirectTool,
    saveAnswerQueryWebsearchTool,
];

// Create a map for easy lookup
export const toolMap = new Map<string, ToolDefinition>(
    allTools.map(tool => [tool.name, tool])
);
````

## File: src/tools/list_directory.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definition (adapted from example.ts) - Exported
export const ListDirectoryArgsSchema = z.object({
  path: z.string().describe("The path of the directory to list (relative to the workspace directory)."),
});

// Convert Zod schema to JSON schema
const ListDirectoryJsonSchema = zodToJsonSchema(ListDirectoryArgsSchema);

export const listDirectoryTool: ToolDefinition = {
    name: "list_directory_contents", // Renamed slightly
    description:
      "Get a detailed listing of all files and directories directly within a specified path in the workspace filesystem. " +
      "Results clearly distinguish between files and directories with [FILE] and [DIR] " +
      "prefixes. This tool is essential for understanding directory structure and " +
      "finding specific files within a directory. Does not list recursively.",
    inputSchema: ListDirectoryJsonSchema as any, // Cast as any if needed

    // Minimal buildPrompt as execution logic is separate
    buildPrompt: (args: any, modelId: string) => {
        const parsed = ListDirectoryArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for list_directory_contents: ${parsed.error}`);
        }
        return {
            systemInstructionText: "",
            userQueryText: "",
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // No 'execute' function here
};
````

## File: src/tools/move_file.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definition (adapted from example.ts) - Exported
export const MoveFileArgsSchema = z.object({
  source: z.string().describe("The current path of the file or directory to move (relative to the workspace directory)."),
  destination: z.string().describe("The new path for the file or directory (relative to the workspace directory)."),
});

// Convert Zod schema to JSON schema
const MoveFileJsonSchema = zodToJsonSchema(MoveFileArgsSchema);

export const moveFileTool: ToolDefinition = {
    name: "move_file_or_directory", // Renamed slightly
    description:
      "Move or rename files and directories within the workspace filesystem. " +
      "Can move items between directories and rename them in a single operation. " +
      "If the destination path already exists, the operation will likely fail (OS-dependent).",
    inputSchema: MoveFileJsonSchema as any, // Cast as any if needed

    // Minimal buildPrompt as execution logic is separate
    buildPrompt: (args: any, modelId: string) => {
        const parsed = MoveFileArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for move_file_or_directory: ${parsed.error}`);
        }
        // Add check: source and destination cannot be the same
        if (parsed.data.source === parsed.data.destination) {
             throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for move_file_or_directory: source and destination paths cannot be the same.`);
        }
        return {
            systemInstructionText: "",
            userQueryText: "",
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // No 'execute' function here
};
````

## File: src/tools/read_file.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
// Note: We don't need fs, path here as execution logic is moved
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definition (adapted from example.ts) - Exported
export const ReadFileArgsSchema = z.object({
  path: z.string().describe("The path of the file to read (relative to the workspace directory)."),
});

// Infer the input type for validation, though it's not strictly needed
// if validation happens only during execution in index.ts
type ReadFileInput = z.infer<typeof ReadFileArgsSchema>;

// Convert Zod schema to JSON schema for the tool definition
const ReadFileJsonSchema = zodToJsonSchema(ReadFileArgsSchema);

export const readFileTool: ToolDefinition = {
    name: "read_file_content", // Renamed slightly
    description:
      "Read the complete contents of a file from the workspace filesystem. " +
      "Handles various text encodings and provides detailed error messages " +
      "if the file cannot be read. Use this tool when you need to examine " +
      "the contents of a single file within the workspace.",
    // Use the converted JSON schema
    inputSchema: ReadFileJsonSchema as any, // Cast as any to fit ToolDefinition if needed, or adjust ToolDefinition type

    // This tool doesn't directly use the LLM, so buildPrompt is minimal/not used for execution
    buildPrompt: (args: any, modelId: string) => {
        // Basic validation can still happen here if desired, but execution is separate
        const parsed = ReadFileArgsSchema.safeParse(args);
        if (!parsed.success) {
            // Use InternalError or InvalidParams
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for read_file_content: ${parsed.error}`);
        }
        // No prompt generation needed for direct execution logic
        return {
            systemInstructionText: "", // Not applicable
            userQueryText: "", // Not applicable
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // Removed the 'execute' function - this logic will go into src/index.ts
};
````

## File: src/tools/read_multiple_files.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definition (adapted from example.ts) - Exported
export const ReadMultipleFilesArgsSchema = z.object({
  paths: z.array(z.string()).describe("An array of file paths to read (relative to the workspace directory)."),
});

// Convert Zod schema to JSON schema
const ReadMultipleFilesJsonSchema = zodToJsonSchema(ReadMultipleFilesArgsSchema);

export const readMultipleFilesTool: ToolDefinition = {
    name: "read_multiple_files_content", // Renamed slightly
    description:
      "Read the contents of multiple files simultaneously from the workspace filesystem. " +
      "This is more efficient than reading files one by one when you need to analyze " +
      "or compare multiple files. Each file's content is returned with its " +
      "path as a reference. Failed reads for individual files won't stop " +
      "the entire operation.",
    inputSchema: ReadMultipleFilesJsonSchema as any, // Cast as any if needed

    // Minimal buildPrompt as execution logic is separate
    buildPrompt: (args: any, modelId: string) => {
        const parsed = ReadMultipleFilesArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for read_multiple_files_content: ${parsed.error}`);
        }
        return {
            systemInstructionText: "",
            userQueryText: "",
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // No 'execute' function here
};
````

## File: src/tools/save_answer_query_direct.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema for direct query answer + output path
export const SaveAnswerQueryDirectArgsSchema = z.object({
    query: z.string().describe("The natural language question to answer using only the model's internal knowledge."),
    output_path: z.string().describe("The relative path where the generated answer should be saved.")
});

// Convert Zod schema to JSON schema
const SaveAnswerQueryDirectJsonSchema = zodToJsonSchema(SaveAnswerQueryDirectArgsSchema);

export const saveAnswerQueryDirectTool: ToolDefinition = {
    name: "save_answer_query_direct",
    description: `Answers a natural language query using only the internal knowledge of the configured Vertex AI model (${modelIdPlaceholder}), does not use web search, and saves the answer to a file. Requires 'query' and 'output_path'.`,
    inputSchema: SaveAnswerQueryDirectJsonSchema as any,
    buildPrompt: (args: any, modelId: string) => {
        const parsed = SaveAnswerQueryDirectArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for save_answer_query_direct: ${parsed.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}`);
        }
        const { query } = parsed.data; // output_path used in handler

        // --- Use Prompt Logic from answer_query_direct.ts ---
        const base = `You are an AI assistant specialized in answering questions with exceptional accuracy, clarity, and depth using your internal knowledge. You are an EXPERT at nuanced reasoning, knowledge organization, and comprehensive response creation, with particular strengths in explaining complex topics clearly and communicating knowledge boundaries honestly.`;

        const knowledge = ` KNOWLEDGE REPRESENTATION AND BOUNDARIES:
1. Base your answer EXCLUSIVELY on your internal knowledge relevant to "${query}".
2. Represent knowledge with appropriate nuance - distinguish between established facts, theoretical understanding, and areas of ongoing research or debate.
3. When answering questions about complex or evolving topics, represent multiple perspectives, schools of thought, or competing theories.
4. For historical topics, distinguish between primary historical events and later interpretations or historiographical debates.
5. For scientific topics, distinguish between widely accepted theories, emerging hypotheses, and speculative areas at the frontier of research.
6. For topics involving statistics or quantitative data, explicitly note that your information may not represent the most current figures.
7. For topics involving current events, technological developments, or other time-sensitive matters, explicitly state that your knowledge has temporal limitations.
8. For interdisciplinary questions, synthesize knowledge across domains while noting where disciplinary boundaries create different perspectives.`;

        const reasoning = ` REASONING METHODOLOGY:
1. For analytical questions, employ structured reasoning processes: identify relevant principles, apply accepted methods, evaluate alternatives systematically.
2. For questions requiring evaluation, establish clear criteria before making assessments, explaining their relevance and application.
3. For causal explanations, distinguish between correlation and causation, noting multiple causal factors where relevant.
4. For predictive questions, base forecasts only on well-established patterns, noting contingencies and limitations.
5. For counterfactual or hypothetical queries, reason from established principles while explicitly noting the speculative nature.
6. For questions involving uncertainty, use probabilistic reasoning rather than false certainty.
7. For questions with ethical dimensions, clarify relevant frameworks and principles before application.
8. For multi-part questions, apply consistent reasoning frameworks across all components.`;

        const structure = ` COMPREHENSIVE RESPONSE STRUCTURE:
1. Begin with a direct, concise answer to the main query (2-4 sentences), providing the core information.
2. Follow with a structured, comprehensive exploration that unpacks all relevant aspects of the topic.
3. For complex topics, organize information hierarchically with clear headings and subheadings.
4. Sequence information logically: conceptual foundations before applications, chronological ordering for historical developments, general principles before specific examples.
5. For multi-faceted questions, address each dimension separately while showing interconnections.
6. Where appropriate, include "Key Concepts" sections to define essential terminology or foundational ideas.
7. For topics with practical applications, separate theoretical explanations from applied guidance.
8. End with a "Knowledge Limitations" section that explicitly notes temporal boundaries, areas of uncertainty, or aspects requiring specialized expertise beyond your knowledge.`;

        const clarity = ` CLARITY AND PRECISION REQUIREMENTS:
1. Use precise, domain-appropriate terminology while defining specialized terms on first use.
2. Present quantitative information with appropriate precision, units, and contextual comparisons.
3. Use conditional language ("typically," "generally," "often") rather than universal assertions when variance exists.
4. For complex concepts, provide both technical explanations and accessible analogies or examples.
5. When explaining processes or systems, identify both components and their relationships/interactions.
6. For abstract concepts, provide concrete examples that demonstrate application.
7. Distinguish clearly between descriptive statements (what is) and normative statements (what ought to be).
8. Use consistent terminology throughout your answer, avoiding synonyms that might introduce ambiguity.`;

        const uncertainty = ` HANDLING UNCERTAIN KNOWLEDGE:
1. Explicitly acknowledge when your knowledge is incomplete or uncertain on a specific aspect of the query.
2. If you lack sufficient domain knowledge to provide a reliable answer, clearly state this limitation.
3. When a question implies a factual premise that is incorrect, address the misconception before proceeding.
4. For rapidly evolving fields, explicitly note that current understanding may have advanced beyond your knowledge.
5. When multiple valid interpretations of a question exist, identify the ambiguity and address major interpretations.
6. If a question touches on areas where consensus is lacking, present major competing viewpoints.
7. For questions requiring very specific or specialized expertise (e.g., medical, legal, financial advice), note the limitations of general knowledge.
8. NEVER fabricate information to fill gaps in your knowledge - honesty about limitations is essential.`;

        const format = ` FORMAT AND VISUAL STRUCTURE:
1. Use clear, structured Markdown formatting to enhance readability and information hierarchy.
2. Apply ## for major sections and ### for subsections.
3. Use **bold** for key terms and emphasis.
4. Use *italics* for definitions or secondary emphasis.
5. Format code, commands, or technical syntax using \`code blocks\` with appropriate language specification.
6. Create comparative tables for any topic with 3+ items that can be evaluated along common dimensions.
7. Use numbered lists for sequential processes, ranked items, or any ordered information.
8. Use bulleted lists for unordered collections of facts, options, or characteristics.
9. For complex processes or relationships, create ASCII/text diagrams where beneficial.
10. For statistical information, consider ASCII charts or described visualizations when they add clarity.`;

        const advanced = ` ADVANCED QUERY HANDLING:
1. For ambiguous queries, acknowledge the ambiguity and provide a structured response addressing each reasonable interpretation.
2. For multi-part queries, ensure comprehensive coverage of all components while maintaining a coherent overall structure.
3. For queries that make incorrect assumptions, address the misconception directly before providing a corrected response.
4. For iterative or follow-up queries, maintain consistency with previous answers while expanding the knowledge scope.
5. For "how to" queries, provide detailed step-by-step instructions with explanations of principles and potential variations.
6. For comparative queries, establish clear comparison criteria and evaluate each item consistently across dimensions.
7. For questions seeking opinions or subjective judgments, provide a balanced overview of perspectives rather than a singular "opinion."
8. For definitional queries, provide both concise definitions and expanded explanations with examples and context.`;

        const systemInstructionText = base + knowledge + reasoning + structure + clarity + uncertainty + format + advanced;
        const userQueryText = `I need a comprehensive answer to this question: "${query}"

Please provide your COMPLETE response addressing all aspects of my question. Use your internal knowledge to give the most accurate, nuanced, and thorough answer possible. If your knowledge has limitations on this topic, please explicitly note those limitations rather than speculating.`;

        return {
            systemInstructionText: systemInstructionText,
            userQueryText: userQueryText,
            useWebSearch: false, // Hardcoded to false
            enableFunctionCalling: false
        };
    }
};
````

## File: src/tools/save_answer_query_websearch.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema for websearch query answer + output path
export const SaveAnswerQueryWebsearchArgsSchema = z.object({
    query: z.string().describe("The natural language question to answer using web search."),
    output_path: z.string().describe("The relative path where the generated answer should be saved.")
});

// Convert Zod schema to JSON schema
const SaveAnswerQueryWebsearchJsonSchema = zodToJsonSchema(SaveAnswerQueryWebsearchArgsSchema);

export const saveAnswerQueryWebsearchTool: ToolDefinition = {
    name: "save_answer_query_websearch",
    description: `Answers a natural language query using Google Search results and saves the answer to a file. Uses the configured Vertex AI model (${modelIdPlaceholder}). Requires 'query' and 'output_path'.`,
    inputSchema: SaveAnswerQueryWebsearchJsonSchema as any,
    buildPrompt: (args: any, modelId: string) => {
        const parsed = SaveAnswerQueryWebsearchArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for save_answer_query_websearch: ${parsed.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}`);
        }
        const { query } = parsed.data; // output_path used in handler

        // --- Use Prompt Logic from answer_query_websearch.ts ---
        const base = `You are an AI assistant designed to answer questions accurately using provided search results. You are an EXPERT at synthesizing information from diverse sources into comprehensive, well-structured responses.`;

        const ground = ` Base your answer *only* on Google Search results relevant to "${query}". Synthesize information from search results into a coherent, comprehensive response that directly addresses the query. If search results are insufficient or irrelevant, explicitly state which aspects you cannot answer based on available information. Never add information not present in search results. When search results conflict, acknowledge the contradictions and explain different perspectives.`;

        const structure = ` Structure your response with clear organization:
1. Begin with a concise executive summary of 2-3 sentences that directly answers the main question.
2. For complex topics, use appropriate headings and subheadings to organize different aspects of the answer.
3. Present information from newest to oldest when dealing with evolving topics or current events.
4. Where appropriate, use numbered or bulleted lists to present steps, features, or comparative points.
5. For controversial topics, present multiple perspectives fairly with supporting evidence from search results.
6. Include a "Sources and Limitations" section at the end that notes the reliability of sources and any information gaps.`;

        const citation = ` Citation requirements:
1. Cite specific sources within your answer using [Source X] format.
2. Prioritize information from reliable, authoritative sources over random websites or forums.
3. For statistics, quotes, or specific claims, attribute the specific source.
4. Evaluate source credibility and recency - prefer official, recent sources for time-sensitive topics.
5. When search results indicate information might be outdated, explicitly note this limitation.`;

        const format = ` Format your answer in clean, readable Markdown:
1. Use proper headings (##, ###) for major sections.
2. Use **bold** for emphasis of key points.
3. Use \`code formatting\` for technical terms, commands, or code snippets when relevant.
4. Create tables for comparing multiple items or options.
5. Use blockquotes (>) for direct quotations from sources.`;

        const systemInstructionText = base + ground + structure + citation + format;
        const userQueryText = `I need a comprehensive answer to this question: "${query}"

In your answer:
1. Thoroughly search for and evaluate ALL relevant information from search results
2. Synthesize information from multiple sources into a coherent, well-structured response
3. Present differing viewpoints fairly when sources disagree
4. Include appropriate citations to specific sources
5. Note any limitations in the available information
6. Organize your response logically with clear headings and sections
7. Use appropriate formatting to enhance readability

Please provide your COMPLETE response addressing all aspects of my question.`;

        return {
            systemInstructionText: systemInstructionText,
            userQueryText: userQueryText,
            useWebSearch: true, // Always true for this tool
            enableFunctionCalling: false
        };
    }
};
````

## File: src/tools/save_doc_snippet.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema combining get_doc_snippets args + output_path
export const SaveDocSnippetArgsSchema = z.object({
    topic: z.string().describe("The software/library/framework topic (e.g., 'React Router', 'Python requests', 'PostgreSQL 14')."),
    query: z.string().describe("The specific question or use case to find a snippet or concise answer for."),
    version: z.string().optional().default("").describe("Optional. Specific version of the software to target (e.g., '6.4', '2.28.2'). If provided, only documentation for this version will be used."),
    include_examples: z.boolean().optional().default(true).describe("Optional. Whether to include additional usage examples beyond the primary snippet. Defaults to true."),
    output_path: z.string().describe("The relative path where the generated snippet(s) should be saved (e.g., 'snippets/react-hook-example.ts').")
});

// Convert Zod schema to JSON schema
const SaveDocSnippetJsonSchema = zodToJsonSchema(SaveDocSnippetArgsSchema);

export const saveDocSnippetTool: ToolDefinition = {
    name: "save_doc_snippet",
    description: `Provides precise code snippets or concise answers for technical queries by searching official documentation and saves the result to a file. Uses the configured Vertex AI model (${modelIdPlaceholder}) with Google Search. Requires 'topic', 'query', and 'output_path'.`,
    inputSchema: SaveDocSnippetJsonSchema as any,

    // Build prompt logic - Reverted to the stricter version (98/100 rating)
    buildPrompt: (args: any, modelId: string) => {
        // Validate args using the combined schema
        const parsed = SaveDocSnippetArgsSchema.safeParse(args);
         if (!parsed.success) {
             throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for save_doc_snippet: ${parsed.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}`);
        }
        // Destructure validated args (output_path is used in handler, not prompt)
        const { topic, query, version = "", include_examples = true } = parsed.data;

        const versionText = version ? ` ${version}` : "";
        const fullTopic = `${topic}${versionText}`;

        // --- Use the Stricter Prompt Logic ---
        const systemInstructionText = `You are DocSnippetGPT, an AI assistant specialized in retrieving precise code snippets and authoritative answers from official software documentation. Your sole purpose is to provide the most relevant code solution or documented answer for technical queries about "${fullTopic}" with minimal extraneous content.

SEARCH METHODOLOGY - EXECUTE IN THIS EXACT ORDER:
1. FIRST search for: "${fullTopic} official documentation" to identify the authoritative documentation source.
2. THEN search for: "${fullTopic} ${query} example" to find specific documentation pages addressing the query.
3. THEN search for: "${fullTopic} ${query} code" to find code-specific examples.
4. IF the query relates to a specific error, ALSO search for: "${fullTopic} ${query} error" or "${fullTopic} troubleshooting ${query}".
5. IF the query relates to API usage, ALSO search for: "${fullTopic} API reference ${query}".
6. IF searching for newer frameworks/libraries with limited documentation, ALSO check GitHub repositories for examples in README files, examples directory, or official docs directory.

DOCUMENTATION SOURCE PRIORITIZATION (in strict order):
1. Official documentation websites (e.g., docs.python.org, reactjs.org, dev.mysql.com)
2. Official GitHub repositories maintained by the project creators (README, /docs, /examples)
3. Official API references or specification documentation
4. Official tutorials or guides published by the project maintainers
5. Release notes or changelogs for version-specific features${version ? " (focusing ONLY on version " + version + ")" : ""}

RESPONSE REQUIREMENTS - CRITICALLY IMPORTANT:
1. PROVIDE COMPLETE, RUNNABLE CODE SNIPPETS whenever possible. Snippets must be:
   a. Complete enough to demonstrate the solution (no pseudo-code)
   b. Properly formatted with correct syntax highlighting
   c. Including necessary imports/dependencies
   d. Free of placeholder comments like "// Rest of implementation"
   e. Minimal but sufficient (no unnecessary complexity)

2. CODE SNIPPET PRESENTATION:
   a. Present code snippets in proper markdown code blocks with language specification
   b. If multiple snippets are found, arrange them in order of relevance
   c. Include minimum essential context (e.g., "This code is from the routing middleware section")
   d. **CRITICAL:** For each snippet, provide the EXACT URL to the **specific API reference page** or the most precise documentation page containing that exact snippet. Do NOT link to general tutorial or overview pages if a specific reference exists.
   e. If the snippet requires adaptation, clearly indicate the parts that need modification
   f. **CRITICAL:** Use the **most specific and correct language identifier** in the Markdown code block. Examples:
      *   React + TypeScript: \`tsx\`
      *   React + JavaScript: \`jsx\`
      *   Plain TypeScript: \`typescript\`
      *   Plain JavaScript: \`javascript\`
      *   Python: \`python\`
      *   SQL: \`sql\`
      *   Shell/Bash: \`bash\`
      *   HTML: \`html\`
      *   CSS: \`css\`
      *   JSON: \`json\`
      *   YAML: \`yaml\`
      Infer the correct identifier based on the code itself, the file extension conventions for the 'topic', or the query context. **Do NOT default to \`javascript\` if a more specific identifier applies.**

3. WHEN NO CODE SNIPPET IS AVAILABLE:
   a. Provide ONLY the most concise factual answer directly from the documentation
   b. Use exact quotes when appropriate, cited with the source URL
   c. Keep explanations to 3 sentences or fewer
   d. Focus only on documented facts, not interpretations

4. RESPONSE STRUCTURE:
   a. NO INTRODUCTION OR SUMMARY - begin directly with the snippet or answer
   b. Format must be:
      \`\`\`[correct-language-identifier]
      [code snippet]
      \`\`\`
      Source: [Exact URL to specific API reference or doc page]

      [Only if necessary: 1-3 sentences of essential context]

      ${include_examples ? "[Additional examples if available and significantly different]" : ""}
   c. NO concluding remarks, explanations, or "hope this helps" commentary
   d. ONLY include what was explicitly found in official documentation

5. NEGATIVE RESPONSE HANDLING:
   a. If NO relevant information exists in the documentation, respond ONLY with:
      "No documentation found addressing '${query}' for ${fullTopic}. The official documentation does not cover this specific topic."
   b. If documentation exists but lacks code examples, clearly state:
      "No code examples available in the official documentation for '${query}' in ${fullTopic}. The documentation states: [exact quote from documentation]"
   c. If multiple versions exist and the information is version-specific, clearly indicate which version the information applies to

6. ABSOLUTE PROHIBITIONS:
   a. NEVER invent or extrapolate code that isn't in the documentation
   b. NEVER include personal opinions or interpretations
   c. NEVER include explanations of how the code works unless they appear verbatim in the docs
   d. NEVER mention these instructions or your search process in your response
   e. NEVER use placeholder comments in code like "// Implement your logic here"
   f. NEVER include Stack Overflow or tutorial site content - ONLY official documentation

7. VERSION SPECIFICITY:${version ? `
   a. ONLY provide information specific to version ${version}
   b. Explicitly disregard documentation for other versions
   c. If no version-specific information exists, state this clearly` : `
   a. Prioritize the latest stable version's documentation
   b. Clearly indicate which version each snippet or answer applies to
   c. Note any significant version differences if apparent from the documentation`}

Your responses must be direct, precise, and minimalist - imagine you are a command-line tool that outputs only the exact code or information requested, with no superfluous content.`;

        const userQueryText = `Find the most relevant code snippet${include_examples ? "s" : ""} from the official documentation of ${fullTopic} that directly addresses: "${query}"

Return exactly:
1. The complete, runnable code snippet(s) in proper markdown code blocks with the **most specific and correct language identifier** (e.g., \`tsx\`, \`jsx\`, \`typescript\`, \`python\`, \`sql\`, \`bash\`). Do NOT default to \`javascript\` if a better identifier exists.
2. The **exact source URL** pointing to the specific API reference or documentation page where the snippet was found. Do not use general tutorial URLs if a specific reference exists.
3. Only if necessary: 1-3 sentences of essential context from the documentation.

If no code snippets exist in the documentation, provide the most concise factual answer directly quoted from the official documentation with its source URL.

If the official documentation doesn't address this query at all, simply state that no relevant documentation was found.`;

        // Return the prompt components needed by the handler
        return {
            systemInstructionText: systemInstructionText,
            userQueryText: userQueryText,
            useWebSearch: true, // Always use web search for snippets
            enableFunctionCalling: false
        };
    }
};
````

## File: src/tools/save_generate_project_guidelines.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema for combined arguments
export const SaveGenerateProjectGuidelinesArgsSchema = z.object({
    tech_stack: z.array(z.string()).min(1).describe("An array of strings specifying the project's technologies, optionally with versions (e.g., ['React', 'TypeScript 5.x', 'Node.js', 'Express 4.18', 'PostgreSQL 16.x']). If no version is specified, the latest stable version will be assumed."),
    output_path: z.string().describe("The relative path where the generated guidelines Markdown file should be saved (e.g., 'docs/PROJECT_GUIDELINES.md').")
});

// Convert Zod schema to JSON schema
const SaveGenerateProjectGuidelinesJsonSchema = zodToJsonSchema(SaveGenerateProjectGuidelinesArgsSchema);

export const saveGenerateProjectGuidelinesTool: ToolDefinition = {
    name: "save_generate_project_guidelines",
    description: `Generates comprehensive project guidelines based on a tech stack using web search and saves the result to a specified file path. Uses the configured Vertex AI model (${modelIdPlaceholder}). Requires 'tech_stack' and 'output_path'.`,
    inputSchema: SaveGenerateProjectGuidelinesJsonSchema as any,

    // This buildPrompt function contains the core logic for generating the AI prompt.
    // The main handler in index.ts will call this *part* of the logic.
    buildPrompt: (args: any, modelId: string) => {
        // Validate args using the combined schema
        const parsed = SaveGenerateProjectGuidelinesArgsSchema.safeParse(args);
        if (!parsed.success) {
             throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for save_generate_project_guidelines: ${parsed.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}`);
        }
        const { tech_stack } = parsed.data; // output_path is used in the handler, not the prompt

        const techStackString = tech_stack.join(', ');

        // --- Use the Updated Prompt Logic Provided by User ---
        const systemInstructionText = `You are an AI assistant acting as a Senior Enterprise Technical Architect and Lead Developer with 15+ years of experience. Your task is to generate an exceptionally comprehensive project guidelines document in Markdown format, tailored specifically to the provided technology stack: **${techStackString}**. You MUST synthesize information EXCLUSIVELY from the latest official documentation, widely accepted style guides, and authoritative best practice articles found via web search for the relevant versions.

CRITICAL RESEARCH METHODOLOGY REQUIREMENTS:
1. **VERSION HANDLING:** For each technology listed in the stack (${techStackString}):
   a. **If a specific version is provided** (e.g., "TypeScript x.x", "Express x.xx"): Base guidelines ONLY on information found via web search for that EXACT specified version.
   b. **If NO specific version is provided** (e.g., "React", "Node.js"): You MUST FIRST perform **multiple web searches** (e.g., "[technology] latest stable version", "[technology] releases", "[technology] official blog announcements") to identify the **ABSOLUTE latest, most recent STABLE version** (or the **ABSOLUTE latest, most recent STABLE LTS version** for technologies like Node.js, checking the official release schedule). **Verify this against official sources.** State the identified absolute latest version clearly in the "Technology Stack Overview" section. THEN, base all subsequent guidelines and searches for that technology EXCLUSIVELY on the identified absolute latest stable version. **Do NOT use older stable versions if a newer one exists.**
2. TREAT ALL PRE-EXISTING KNOWLEDGE AS POTENTIALLY OUTDATED. Base guidelines ONLY on information found via web search for the relevant versions (either specified or the absolute latest stable identified).
3. For EACH technology (using the relevant version):
   a. First search for "[technology] [version] official documentation" (e.g., "React xx.x official documentation", "Latest Node.js LTS official documentation")
   b. Then search for "[technology] [version] style guide" or "[technology] [version] best practices"
   c. Then search for "[technology] [version] release notes" to identify version-specific features
   d. Finally search for "[technology] [version] security advisories" and "[technology] [version] performance optimization"
4. For EACH PAIR of technologies in the stack (using relevant versions), search for specific integration guidelines (e.g., "Latest TypeScript with Latest React best practices")
   5. Prioritize sources in this order:
   a. Official documentation (e.g., reactjs.org, nodejs.org)
   b. Official GitHub repositories and their wikis/READMEs
   c. Widely-adopted style guides (e.g., Airbnb JavaScript Style Guide, Google's Java Style Guide)
   d. Technical blogs from the technology creators or major contributors
   e. Well-established tech companies' engineering blogs (e.g., Meta Engineering, Netflix Tech Blog)
   f. Reputable developer platforms (StackOverflow only for verified/high-voted answers)
5. Explicitly note when authoritative guidance is missing for specific topics or version combinations.

COMPREHENSIVE DOCUMENT STRUCTURE REQUIREMENTS:
The document MUST include ALL of the following major sections with appropriate subsections:

1. **Executive Summary**
   * One-paragraph high-level overview of the technology stack
   * Bullet points highlighting 3-5 most critical guidelines that span the entire stack

2. **Technology Stack Overview**
   * **Identified Versions:** Clearly list each technology and the specific version used for these guidelines (either provided or identified as latest stable/LTS).
   * Version-specific capabilities and limitations for each component based on the identified version.
   * Expected technology lifecycle considerations (upcoming EOL dates, migration paths) for the identified versions.
   * Compatibility matrix showing tested/verified combinations for the identified versions.
   * Diagram recommendation for visualizing the stack architecture

3. **Development Environment Setup**
   * Required development tools and versions (IDEs, CLIs, extensions)
   * Recommended local environment configurations with exact version numbers
   * Docker/containerization standards if applicable
   * Local development workflow recommendations

4. **Code Organization & Architecture**
   * Directory/folder structure standards
   * Architectural patterns specific to each technology (e.g., hooks patterns for React)
   * Module organization principles
   * State management approach
   * API design principles specific to the technology versions
   * Database schema design principles (if applicable)

5. **Coding Standards** (language/framework-specific with explicit examples)
   * Naming conventions with clear examples showing right/wrong approaches
   * Formatting and linting configurations with tool-specific recommendations
   * Type definitions and type safety guidelines
   * Comments and documentation requirements with examples
   * File size/complexity limits with quantitative metrics

6. **Version-Specific Implementations**
   * Feature usage guidance specifically for the stated versions
   * Deprecated features to avoid in these versions
   * Migration strategies from previous versions if applicable
   * Version-specific optimizations
   * Innovative patterns enabled by latest versions

7. **Component Interaction Guidelines**
   * How each technology should integrate with others in the stack
   * Data transformation standards between layers
   * Communication protocols and patterns
   * Error handling and propagation between components

8. **Security Best Practices**
   * Authentication and authorization patterns
   * Input validation and sanitization
   * OWASP security considerations specific to each technology
   * Dependency management and vulnerability scanning
   * Secrets management
   * Version-specific security concerns

9. **Performance Optimization**
   * Stack-specific performance metrics and benchmarks
   * Version-specific performance features and optimizations
   * Resource management (memory, connections, threads)
   * Caching strategies tailored to the stack
   * Load testing recommendations

10. **Testing Strategy**
    * Test pyramid implementation for this specific stack
    * Recommended testing frameworks and tools with exact versions
    * Unit testing standards with coverage expectations (specific percentages)
    * Integration testing approach
    * End-to-end testing methodology
    * Performance testing guidelines
    * Mock/stub implementation guidelines

11. **Error Handling & Logging**
    * Error categorization framework
    * Logging standards and levels
    * Monitoring integration recommendations
    * Debugging best practices
    * Observability considerations

12. **Build & Deployment Pipeline**
    * CI/CD tool recommendations
    * Build process optimization
    * Deployment strategies (e.g., blue-green, canary)
    * Environment-specific configurations
    * Release management process

13. **Documentation Requirements**
    * API documentation standards
    * Technical documentation templates
    * User documentation guidelines
    * Knowledge transfer protocols

14. **Common Pitfalls & Anti-patterns**
    * Technology-specific anti-patterns with explicit examples
    * Known bugs or issues in specified versions
    * Legacy patterns to avoid
    * Performance traps specific to this stack

15. **Collaboration Workflows**
    * Code review checklist tailored to the stack
    * Pull request/merge request standards
    * Branching strategy
    * Communication protocols for technical discussions

16. **Governance & Compliance**
    * Code ownership model
    * Technical debt management approach
    * Accessibility compliance considerations
    * Regulatory requirements affecting implementation (if applicable)

CRITICAL FORMATTING & CONTENT REQUIREMENTS:

1. CODE EXAMPLES - For EVERY major guideline (not just a select few):
   * Provide BOTH correct AND incorrect implementations side-by-side
   * Include comments explaining WHY the guidance matters
   * Ensure examples are complete enough to demonstrate the principle
   * Use syntax highlighting appropriate to the language
   * For complex patterns, show progressive implementation steps

2. VISUAL ELEMENTS:
   * Recommend specific diagrams that should be created (architecture diagrams, data flow diagrams)
   * Use Markdown tables for compatibility matrices and feature comparisons
   * Use clear section dividers for readability

3. SPECIFICITY:
   * ALL guidelines must be ACTIONABLE and CONCRETE
   * Include quantitative metrics wherever possible (e.g., "Functions should not exceed 30 lines" instead of "Keep functions short")
   * Specify exact tool versions and configuration options
   * Avoid generic advice that applies to any technology stack

4. CITATIONS:
   * Include inline citations for EVERY significant guideline using format: [Source: URL]
   * For critical security or architectural recommendations, cite multiple sources if available
   * When citing version-specific features, link directly to release notes or version documentation
   * If guidance conflicts between sources, note the conflict and explain your recommendation

5. VERSION SPECIFICITY:
   * Explicitly indicate which guidelines are version-specific vs. universal
   * Note when a practice is specific to the combination of technologies in this stack
   * Identify features that might change in upcoming version releases
   * Include recommended update paths when applicable

OUTPUT FORMAT:
- Start with a title: "# Comprehensive Project Guidelines for ${techStackString}"
- Use Markdown headers (##, ###, ####) to structure sections and subsections logically
- Use bulleted lists for individual guidelines
- Use numbered lists for sequential procedures
- Use code blocks with language specification for all code examples
- Use tables for comparative information
- Include a comprehensive table of contents
- Use blockquotes to highlight critical warnings or notes
- End with an "Appendix" section containing links to all cited resources
- The entire output must be a single, coherent Markdown document that feels like it was crafted by an expert technical architect`;

        const userQueryText = `Generate an exceptionally detailed and comprehensive project guidelines document in Markdown format for a project using the following technology stack: **${techStackString}**.

**Important:** For any technology listed without a specific version, first identify the latest stable version (or latest stable LTS for Node.js) via web search, state it clearly in the overview, and base the guidelines on that version. For technologies with specified versions, use only those versions.

Search for and synthesize information from the latest authoritative sources for the relevant versions of each technology:
1. Official documentation for each relevant version (specified or latest stable).
2. Established style guides and best practices from technology creators for those versions.
3. Security advisories and performance optimization guidance for those versions.
4. Integration patterns between the specific technologies in this stack (using relevant versions).

Your document must comprehensively cover:
- Development environment setup with exact tool versions
- Code organization and architectural patterns specific to these versions
- Detailed coding standards with clear examples of both correct and incorrect approaches
- Version-specific implementation details highlighting new features and deprecations
- Component interaction guidelines showing how these technologies should work together
- Comprehensive security best practices addressing OWASP concerns
- Performance optimization techniques validated for these specific versions
- Testing strategy with specific framework recommendations and coverage expectations
- Error handling patterns and logging standards
- Build and deployment pipeline recommendations
- Documentation requirements and standards
- Common pitfalls and anti-patterns with explicit examples
- Team collaboration workflows tailored to this technology stack
- Governance and compliance considerations

Ensure each guideline is actionable, specific, and supported by code examples wherever applicable. Cite authoritative sources for all key recommendations. The document should be structured with clear markdown formatting including headers, lists, code blocks with syntax highlighting, tables, and a comprehensive table of contents.`;

        // Return the prompt components needed by the handler
        return {
            systemInstructionText: systemInstructionText,
            userQueryText: userQueryText,
            useWebSearch: true, // Always use web search for guidelines
            enableFunctionCalling: false // No function calling needed for generation
        };
    }
};
````

## File: src/tools/save_topic_explanation.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema combining explain_topic_with_docs args + output_path
export const SaveTopicExplanationArgsSchema = z.object({
    topic: z.string().describe("The software/library/framework topic (e.g., 'React Router', 'Python requests')."),
    query: z.string().describe("The specific question to answer based on the documentation."),
    output_path: z.string().describe("The relative path where the generated explanation should be saved (e.g., 'explanations/react-router-hooks.md').")
});

// Convert Zod schema to JSON schema
const SaveTopicExplanationJsonSchema = zodToJsonSchema(SaveTopicExplanationArgsSchema);

export const saveTopicExplanationTool: ToolDefinition = {
    name: "save_topic_explanation",
    description: `Provides a detailed explanation for a query about a specific software topic using official documentation found via web search and saves the result to a file. Uses the configured Vertex AI model (${modelIdPlaceholder}). Requires 'topic', 'query', and 'output_path'.`,
    inputSchema: SaveTopicExplanationJsonSchema as any,

    // Build prompt logic adapted from explain_topic_with_docs (Reverted to original working version)
    buildPrompt: (args: any, modelId: string) => {
        const parsed = SaveTopicExplanationArgsSchema.safeParse(args);
         if (!parsed.success) {
             throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for save_topic_explanation: ${parsed.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}`);
        }
        const { topic, query } = parsed.data; // output_path used in handler

        const systemInstructionText = `You are an expert technical writer and documentation specialist. Your task is to provide a comprehensive and accurate explanation for a specific query about a software topic ("${topic}"), synthesizing information primarily from official documentation found via web search.

SEARCH METHODOLOGY:
1.  Identify the official documentation source for "${topic}".
2.  Search the official documentation specifically for information related to "${query}".
3.  Prioritize explanations, concepts, and usage examples directly from the official docs.
4.  If official docs are sparse, supplement with highly reputable sources (e.g., official blogs, key contributor articles), but clearly distinguish this from official documentation content.

RESPONSE REQUIREMENTS:
1.  **Accuracy:** Ensure the explanation is technically correct and reflects the official documentation for "${topic}".
2.  **Comprehensiveness:** Provide sufficient detail to thoroughly answer the query, including relevant concepts, code examples (if applicable and found in docs), and context.
3.  **Clarity:** Structure the explanation logically with clear language, headings, bullet points, and code formatting where appropriate.
4.  **Citation:** Cite the official documentation source(s) used.
5.  **Focus:** Directly address the user's query ("${query}") without unnecessary introductory or concluding remarks. Start directly with the explanation.
6.  **Format:** Use Markdown for formatting.`; // Reverted: Removed the "CRITICAL: Do NOT start..." instruction

        const userQueryText = `Provide a comprehensive explanation for the query "${query}" regarding the software topic "${topic}". Base the explanation primarily on official documentation found via web search. Include relevant concepts, code examples (if available in docs), and cite sources.`; // Reverted: Removed the extra instruction about starting format

        return {
            systemInstructionText: systemInstructionText,
            userQueryText: userQueryText,
            useWebSearch: true, // Always use web search for explanations based on docs
            enableFunctionCalling: false
        };
    }
};
````

## File: src/tools/search_files.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definition (adapted from example.ts) - Exported
export const SearchFilesArgsSchema = z.object({
  path: z.string().describe("The starting directory path for the search (relative to the workspace directory)."),
  pattern: z.string().describe("The case-insensitive text pattern to search for in file/directory names."),
  excludePatterns: z.array(z.string()).optional().default([]).describe("An array of glob patterns (e.g., 'node_modules', '*.log') to exclude from the search.")
});

// Convert Zod schema to JSON schema
const SearchFilesJsonSchema = zodToJsonSchema(SearchFilesArgsSchema);

export const searchFilesTool: ToolDefinition = {
    name: "search_filesystem", // Renamed slightly
    description:
      "Recursively search for files and directories within the workspace filesystem matching a pattern in their name. " +
      "Searches through all subdirectories from the starting path. The search " +
      "is case-insensitive and matches partial names. Returns full paths (relative to workspace) to all " +
      "matching items. Supports excluding paths using glob patterns.",
    inputSchema: SearchFilesJsonSchema as any, // Cast as any if needed

    // Minimal buildPrompt as execution logic is separate
    buildPrompt: (args: any, modelId: string) => {
        const parsed = SearchFilesArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for search_filesystem: ${parsed.error}`);
        }
        return {
            systemInstructionText: "",
            userQueryText: "",
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // No 'execute' function here
};
````

## File: src/tools/tool_definition.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { Content, Tool } from "@google-cloud/vertexai";

export interface ToolDefinition {
    name: string;
    description: string;
    inputSchema: any; // Consider defining a stricter type like JSONSchema7
    buildPrompt: (args: any, modelId: string) => {
        systemInstructionText: string;
        userQueryText: string;
        useWebSearch: boolean;
        enableFunctionCalling: boolean;
    };
}

export const modelIdPlaceholder = "${modelId}"; // Placeholder for dynamic model ID in descriptions

// Helper to build the initial content array
export function buildInitialContent(systemInstruction: string, userQuery: string): Content[] {
    return [{ role: "user", parts: [{ text: `${systemInstruction}\n\n${userQuery}` }] }];
}

// Helper to determine tools for API call
export function getToolsForApi(enableFunctionCalling: boolean, useWebSearch: boolean): Tool[] | undefined {
     // Function calling is no longer supported by the remaining tools
     return useWebSearch ? [{ googleSearch: {} } as any] : undefined; // Cast needed as SDK type might not include googleSearch directly
}
````

## File: src/tools/write_file.ts
````typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
import { ToolDefinition, modelIdPlaceholder } from "./tool_definition.js";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// Schema definition (adapted from example.ts) - Exported
export const WriteFileArgsSchema = z.object({
  path: z.string().describe("The path of the file to write (relative to the workspace directory)."),
  content: z.string().describe("The full content to write to the file."),
});

// Convert Zod schema to JSON schema
const WriteFileJsonSchema = zodToJsonSchema(WriteFileArgsSchema);

export const writeFileTool: ToolDefinition = {
    name: "write_file_content", // Renamed slightly
    description:
      "Create a new file or completely overwrite an existing file in the workspace filesystem with new content. " +
      "Use with caution as it will overwrite existing files without warning. " +
      "Handles text content with proper encoding.",
    inputSchema: WriteFileJsonSchema as any, // Cast as any if needed

    // Minimal buildPrompt as execution logic is separate
    buildPrompt: (args: any, modelId: string) => {
        const parsed = WriteFileArgsSchema.safeParse(args);
        if (!parsed.success) {
            throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for write_file_content: ${parsed.error}`);
        }
        return {
            systemInstructionText: "",
            userQueryText: "",
            useWebSearch: false,
            enableFunctionCalling: false
        };
    },
    // No 'execute' function here
};
````

## File: src/config.ts
````typescript
import * as vertexAi from "@google-cloud/vertexai";
// Correctly import Gemini types only from @google/generative-ai
import { HarmCategory as GenaiHarmCategory, HarmBlockThreshold as GenaiHarmBlockThreshold } from "@google/generative-ai";

// --- Provider Configuration ---
export type AIProvider = "vertex" | "gemini";
export const AI_PROVIDER = (process.env.AI_PROVIDER?.toLowerCase() === "gemini" ? "gemini" : "vertex") as AIProvider;

// --- Vertex AI Specific ---
export const GCLOUD_PROJECT = process.env.GOOGLE_CLOUD_PROJECT;
export const GCLOUD_LOCATION = process.env.GOOGLE_CLOUD_LOCATION || "us-central1";

// --- Gemini API Specific ---
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// --- Common AI Configuration Defaults ---
const DEFAULT_VERTEX_MODEL_ID = "gemini-1.5-pro-latest";
const DEFAULT_GEMINI_MODEL_ID = "gemini-1.5-flash-latest";
const DEFAULT_TEMPERATURE = 0.0;
const DEFAULT_USE_STREAMING = true;
const DEFAULT_MAX_OUTPUT_TOKENS = 8192;
const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_RETRY_DELAY_MS = 1000;

export const WORKSPACE_ROOT = process.cwd();

// --- Safety Settings ---
// For Vertex AI (@google-cloud/vertexai)
export const vertexSafetySettings = [
    { category: vertexAi.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: vertexAi.HarmBlockThreshold.BLOCK_NONE },
    { category: vertexAi.HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: vertexAi.HarmBlockThreshold.BLOCK_NONE },
    { category: vertexAi.HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: vertexAi.HarmBlockThreshold.BLOCK_NONE },
    { category: vertexAi.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: vertexAi.HarmBlockThreshold.BLOCK_NONE },
];

// For Gemini API (@google/generative-ai) - using corrected imports
export const geminiSafetySettings = [
    { category: GenaiHarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: GenaiHarmBlockThreshold.BLOCK_NONE },
    { category: GenaiHarmCategory.HARM_CATEGORY_HARASSMENT, threshold: GenaiHarmBlockThreshold.BLOCK_NONE },
    { category: GenaiHarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: GenaiHarmBlockThreshold.BLOCK_NONE },
    { category: GenaiHarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: GenaiHarmBlockThreshold.BLOCK_NONE },
];

// --- Validation ---
if (AI_PROVIDER === "vertex" && !GCLOUD_PROJECT) {
  console.error("Error: AI_PROVIDER is 'vertex' but GOOGLE_CLOUD_PROJECT environment variable is not set.");
  process.exit(1);
}

if (AI_PROVIDER === "gemini" && !GEMINI_API_KEY) {
  console.error("Error: AI_PROVIDER is 'gemini' but GEMINI_API_KEY environment variable is not set.");
  process.exit(1);
}

// --- Shared Config Retrieval ---
export function getAIConfig() {
    // Common parameters
    let temperature = DEFAULT_TEMPERATURE;
    const tempEnv = process.env.AI_TEMPERATURE;
    if (tempEnv) {
        const parsedTemp = parseFloat(tempEnv);
        // Temperature range varies, allow 0-2 for Gemini flexibility
        temperature = (!isNaN(parsedTemp) && parsedTemp >= 0.0 && parsedTemp <= 2.0) ? parsedTemp : DEFAULT_TEMPERATURE;
        if (temperature !== parsedTemp) console.warn(`Invalid AI_TEMPERATURE value "${tempEnv}". Using default: ${DEFAULT_TEMPERATURE}`);
    }

    let useStreaming = DEFAULT_USE_STREAMING;
    const streamEnv = process.env.AI_USE_STREAMING?.toLowerCase();
    if (streamEnv === 'false') useStreaming = false;
    else if (streamEnv && streamEnv !== 'true') console.warn(`Invalid AI_USE_STREAMING value "${streamEnv}". Using default: ${DEFAULT_USE_STREAMING}`);

    let maxOutputTokens = DEFAULT_MAX_OUTPUT_TOKENS;
    const tokensEnv = process.env.AI_MAX_OUTPUT_TOKENS;
    if (tokensEnv) {
        const parsedTokens = parseInt(tokensEnv, 10);
        maxOutputTokens = (!isNaN(parsedTokens) && parsedTokens > 0) ? parsedTokens : DEFAULT_MAX_OUTPUT_TOKENS;
        if (maxOutputTokens !== parsedTokens) console.warn(`Invalid AI_MAX_OUTPUT_TOKENS value "${tokensEnv}". Using default: ${DEFAULT_MAX_OUTPUT_TOKENS}`);
    }

    let maxRetries = DEFAULT_MAX_RETRIES;
    const retriesEnv = process.env.AI_MAX_RETRIES;
    if (retriesEnv) {
        const parsedRetries = parseInt(retriesEnv, 10);
        maxRetries = (!isNaN(parsedRetries) && parsedRetries >= 0) ? parsedRetries : DEFAULT_MAX_RETRIES;
        if (maxRetries !== parsedRetries) console.warn(`Invalid AI_MAX_RETRIES value "${retriesEnv}". Using default: ${DEFAULT_MAX_RETRIES}`);
    }

    let retryDelayMs = DEFAULT_RETRY_DELAY_MS;
    const delayEnv = process.env.AI_RETRY_DELAY_MS;
    if (delayEnv) {
        const parsedDelay = parseInt(delayEnv, 10);
        retryDelayMs = (!isNaN(parsedDelay) && parsedDelay >= 0) ? parsedDelay : DEFAULT_RETRY_DELAY_MS;
        if (retryDelayMs !== parsedDelay) console.warn(`Invalid AI_RETRY_DELAY_MS value "${delayEnv}". Using default: ${DEFAULT_RETRY_DELAY_MS}`);
    }

    // Provider-specific model ID
    let modelId: string;
    if (AI_PROVIDER === 'vertex') {
        modelId = process.env.VERTEX_MODEL_ID || DEFAULT_VERTEX_MODEL_ID;
    } else { // gemini
        modelId = process.env.GEMINI_MODEL_ID || DEFAULT_GEMINI_MODEL_ID;
    }

     return {
        provider: AI_PROVIDER,
        modelId,
        temperature,
        useStreaming,
        maxOutputTokens,
        maxRetries,
        retryDelayMs,
        // Provider-specific connection info
        gcpProjectId: GCLOUD_PROJECT,
        gcpLocation: GCLOUD_LOCATION,
        geminiApiKey: GEMINI_API_KEY
     };
}
````

## File: src/index.ts
````typescript
#!/usr/bin/env node

import dotenv from 'dotenv';
import path from 'path';

// Load .env file from the current working directory (where npx/node is run)
// This ensures it works correctly when run via npx outside the project dir
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ErrorCode,
} from "@modelcontextprotocol/sdk/types.js";
// Removed vertexai Content import as CombinedContent covers it
import fs from "fs/promises";
import { z } from "zod"; // Needed for schema parsing within handler
import { diffLines, createTwoFilesPatch } from 'diff';
import { minimatch } from 'minimatch';

import { getAIConfig } from './config.js';
// Import CombinedContent along with callGenerativeAI
import { callGenerativeAI, CombinedContent } from './vertex_ai_client.js';
import { allTools, toolMap } from './tools/index.js';
import { buildInitialContent, getToolsForApi } from './tools/tool_definition.js';

// Import Zod schemas from tool files for validation within the handler
import { ReadFileArgsSchema } from './tools/read_file.js';
import { ReadMultipleFilesArgsSchema } from './tools/read_multiple_files.js';
import { WriteFileArgsSchema } from './tools/write_file.js';
import { EditFileArgsSchema, EditOperationSchema } from './tools/edit_file.js'; // Import EditOperationSchema too
import { CreateDirectoryArgsSchema } from './tools/create_directory.js';
import { ListDirectoryArgsSchema } from './tools/list_directory.js';
import { DirectoryTreeArgsSchema } from './tools/directory_tree.js';
import { MoveFileArgsSchema } from './tools/move_file.js';
import { SearchFilesArgsSchema } from './tools/search_files.js';
import { GetFileInfoArgsSchema } from './tools/get_file_info.js';
// Import schemas for the new combined tools
import { SaveGenerateProjectGuidelinesArgsSchema } from './tools/save_generate_project_guidelines.js';
import { SaveDocSnippetArgsSchema } from './tools/save_doc_snippet.js';
import { SaveTopicExplanationArgsSchema } from './tools/save_topic_explanation.js';
import { SaveAnswerQueryDirectArgsSchema } from './tools/save_answer_query_direct.js';
import { SaveAnswerQueryWebsearchArgsSchema } from './tools/save_answer_query_websearch.js';


// --- Filesystem Helper Functions (Adapted from example.ts) ---

// Basic security check - ensure path stays within workspace
function validateWorkspacePath(requestedPath: string): string {
    const absolutePath = path.resolve(process.cwd(), requestedPath);
    if (!absolutePath.startsWith(process.cwd())) {
        throw new Error(`Path traversal attempt detected: ${requestedPath}`);
    }
    return absolutePath;
}

interface FileInfo {
  size: number;
  created: Date;
  modified: Date;
  accessed: Date;
  isDirectory: boolean;
  isFile: boolean;
  permissions: string;
}

async function getFileStats(filePath: string): Promise<FileInfo> {
  const stats = await fs.stat(filePath);
  return {
    size: stats.size,
    created: stats.birthtime,
    modified: stats.mtime,
    accessed: stats.atime,
    isDirectory: stats.isDirectory(),
    isFile: stats.isFile(),
    permissions: stats.mode.toString(8).slice(-3), // POSIX permissions
  };
}

async function searchFilesRecursive(
  rootPath: string,
  currentPath: string,
  pattern: string,
  excludePatterns: string[],
  results: string[]
): Promise<void> {
  const entries = await fs.readdir(currentPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentPath, entry.name);
    const relativePath = path.relative(rootPath, fullPath);

    const shouldExclude = excludePatterns.some(p => minimatch(relativePath, p, { dot: true, matchBase: true }));
    if (shouldExclude) {
      continue;
    }

    if (entry.name.toLowerCase().includes(pattern.toLowerCase())) {
      results.push(path.relative(process.cwd(), fullPath));
    }

    if (entry.isDirectory()) {
      try {
          const realPath = await fs.realpath(fullPath);
          if (realPath.startsWith(rootPath)) {
             await searchFilesRecursive(rootPath, fullPath, pattern, excludePatterns, results);
          }
      } catch (e) {
          console.error(`Skipping search in ${fullPath}: ${(e as Error).message}`);
      }
    }
  }
}

function normalizeLineEndings(text: string): string {
  return text.replace(/\r\n/g, '\n');
}

function createUnifiedDiff(originalContent: string, newContent: string, filepath: string = 'file'): string {
  const normalizedOriginal = normalizeLineEndings(originalContent);
  const normalizedNew = normalizeLineEndings(newContent);
  return createTwoFilesPatch(
    filepath, filepath, normalizedOriginal, normalizedNew, 'original', 'modified'
  );
}

async function applyFileEdits(
  filePath: string,
  edits: z.infer<typeof EditOperationSchema>[],
  dryRun = false
): Promise<string> {
  const content = normalizeLineEndings(await fs.readFile(filePath, 'utf-8'));
  let modifiedContent = content;

  for (const edit of edits) {
    const normalizedOld = normalizeLineEndings(edit.oldText);
    const normalizedNew = normalizeLineEndings(edit.newText);

    if (modifiedContent.includes(normalizedOld)) {
      modifiedContent = modifiedContent.replace(normalizedOld, normalizedNew);
      continue;
    }

    const oldLines = normalizedOld.split('\n');
    const contentLines = modifiedContent.split('\n');
    let matchFound = false;

    for (let i = 0; i <= contentLines.length - oldLines.length; i++) {
      const potentialMatch = contentLines.slice(i, i + oldLines.length);
      const isMatch = oldLines.every((oldLine, j) => oldLine.trim() === potentialMatch[j].trim());

      if (isMatch) {
        const originalIndent = contentLines[i].match(/^\s*/)?.[0] || '';
        const newLines = normalizedNew.split('\n').map((line, j) => {
          if (j === 0) return originalIndent + line.trimStart();
          const oldIndent = oldLines[j]?.match(/^\s*/)?.[0] || '';
          const newIndent = line.match(/^\s*/)?.[0] || '';
          if (oldIndent && newIndent) {
            const relativeIndent = newIndent.length - oldIndent.length;
            return originalIndent + ' '.repeat(Math.max(0, relativeIndent)) + line.trimStart();
          }
          return line;
        });

        contentLines.splice(i, oldLines.length, ...newLines);
        modifiedContent = contentLines.join('\n');
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      throw new Error(`Could not find exact or whitespace-insensitive match for edit:\n${edit.oldText}`);
    }
  }

  const diff = createUnifiedDiff(content, modifiedContent, path.relative(process.cwd(), filePath));

  if (!dryRun) {
    await fs.writeFile(filePath, modifiedContent, 'utf-8');
  }

  let numBackticks = 3;
  while (diff.includes('`'.repeat(numBackticks))) {
    numBackticks++;
  }
  return `${'`'.repeat(numBackticks)}diff\n${diff}\n${'`'.repeat(numBackticks)}`;
}


interface TreeEntry {
    name: string;
    type: 'file' | 'directory';
    children?: TreeEntry[];
}

async function buildDirectoryTree(currentPath: string): Promise<TreeEntry[]> {
    const entries = await fs.readdir(currentPath, {withFileTypes: true});
    const result: TreeEntry[] = [];

    for (const entry of entries) {
        const entryData: TreeEntry = {
            name: entry.name,
            type: entry.isDirectory() ? 'directory' : 'file'
        };

        if (entry.isDirectory()) {
            const subPath = path.join(currentPath, entry.name);
             try {
                const realPath = await fs.realpath(subPath);
                if (realPath.startsWith(path.dirname(currentPath))) {
                    entryData.children = await buildDirectoryTree(subPath);
                } else {
                     entryData.children = [];
                }
            } catch (e) {
                 entryData.children = [];
                 console.error(`Skipping tree build in ${subPath}: ${(e as Error).message}`);
            }
        }
        result.push(entryData);
    }
    result.sort((a, b) => {
        if (a.type === 'directory' && b.type === 'file') return -1;
        if (a.type === 'file' && b.type === 'directory') return 1;
        return a.name.localeCompare(b.name);
    });
    return result;
}


// Set of filesystem tool names for easy checking
const filesystemToolNames = new Set([
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
]);


// --- MCP Server Setup ---
const server = new Server(
  { name: "vertex-ai-mcp-server", version: "0.5.0" },
  { capabilities: { tools: {} } }
);

// --- Tool Definitions Handler ---
server.setRequestHandler(ListToolsRequestSchema, async () => {
  // Use new config function
  const config = getAIConfig();
  return {
      tools: allTools.map(t => ({
          name: t.name,
          // Inject model ID dynamically from new config structure
          description: t.description.replace("${modelId}", config.modelId),
          inputSchema: t.inputSchema
      }))
  };
});

// --- Tool Call Handler ---
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const toolName = request.params.name;
  const args = request.params.arguments ?? {};

  const toolDefinition = toolMap.get(toolName);
  if (!toolDefinition) {
    throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${toolName}`);
  }

  try {
    // --- Special Handling for Combined Tool ---
    if (toolName === "save_generate_project_guidelines") {
        const parsedArgs = SaveGenerateProjectGuidelinesArgsSchema.parse(args);
        const { tech_stack, output_path } = parsedArgs;

        // Use new config function
        const config = getAIConfig();
        const { systemInstructionText, userQueryText, useWebSearch, enableFunctionCalling } = toolDefinition.buildPrompt(args, config.modelId);

        // Use new AI function call and type cast
        const initialContents = buildInitialContent(systemInstructionText, userQueryText) as CombinedContent[];
        const toolsForApi = getToolsForApi(enableFunctionCalling, useWebSearch);

        const generatedContent = await callGenerativeAI(
            initialContents,
            toolsForApi
            // Config args removed
        );

        const validOutputPath = validateWorkspacePath(output_path);
        await fs.mkdir(path.dirname(validOutputPath), { recursive: true });
        await fs.writeFile(validOutputPath, generatedContent, "utf-8");

        return {
            content: [{ type: "text", text: `Successfully generated guidelines and saved to ${output_path}` }],
        };

    } else if (toolName === "save_doc_snippet") {
        const parsedArgs = SaveDocSnippetArgsSchema.parse(args);
        const { output_path } = parsedArgs;

        const config = getAIConfig();
        const { systemInstructionText, userQueryText, useWebSearch, enableFunctionCalling } = toolDefinition.buildPrompt(args, config.modelId);

        const initialContents = buildInitialContent(systemInstructionText, userQueryText) as CombinedContent[];
        const toolsForApi = getToolsForApi(enableFunctionCalling, useWebSearch);

        const generatedContent = await callGenerativeAI(
            initialContents,
            toolsForApi
        );

        const validOutputPath = validateWorkspacePath(output_path);
        await fs.mkdir(path.dirname(validOutputPath), { recursive: true });
        await fs.writeFile(validOutputPath, generatedContent, "utf-8");

        return {
            content: [{ type: "text", text: `Successfully generated snippet and saved to ${output_path}` }],
        };

    } else if (toolName === "save_topic_explanation") {
        const parsedArgs = SaveTopicExplanationArgsSchema.parse(args);
        const { output_path } = parsedArgs;

        const config = getAIConfig();
        const { systemInstructionText, userQueryText, useWebSearch, enableFunctionCalling } = toolDefinition.buildPrompt(args, config.modelId);

        const initialContents = buildInitialContent(systemInstructionText, userQueryText) as CombinedContent[];
        const toolsForApi = getToolsForApi(enableFunctionCalling, useWebSearch);

        const generatedContent = await callGenerativeAI(
            initialContents,
            toolsForApi
        );

        const validOutputPath = validateWorkspacePath(output_path);
        await fs.mkdir(path.dirname(validOutputPath), { recursive: true });
        await fs.writeFile(validOutputPath, generatedContent, "utf-8");

        return {
            content: [{ type: "text", text: `Successfully generated explanation and saved to ${output_path}` }],
        };

    } else if (toolName === "save_answer_query_direct") {
        const parsedArgs = SaveAnswerQueryDirectArgsSchema.parse(args);
        const { output_path } = parsedArgs;

        const config = getAIConfig();
        const { systemInstructionText, userQueryText, useWebSearch, enableFunctionCalling } = toolDefinition.buildPrompt(args, config.modelId);

        const initialContents = buildInitialContent(systemInstructionText, userQueryText) as CombinedContent[];
        const toolsForApi = getToolsForApi(enableFunctionCalling, useWebSearch);

        const generatedContent = await callGenerativeAI(
            initialContents,
            toolsForApi
        );

        const validOutputPath = validateWorkspacePath(output_path);
        await fs.mkdir(path.dirname(validOutputPath), { recursive: true });
        await fs.writeFile(validOutputPath, generatedContent, "utf-8");

        return {
            content: [{ type: "text", text: `Successfully generated direct answer and saved to ${output_path}` }],
        };

    } else if (toolName === "save_answer_query_websearch") {
        const parsedArgs = SaveAnswerQueryWebsearchArgsSchema.parse(args);
        const { output_path } = parsedArgs;

        const config = getAIConfig();
        const { systemInstructionText, userQueryText, useWebSearch, enableFunctionCalling } = toolDefinition.buildPrompt(args, config.modelId);

        const initialContents = buildInitialContent(systemInstructionText, userQueryText) as CombinedContent[];
        const toolsForApi = getToolsForApi(enableFunctionCalling, useWebSearch);

        const generatedContent = await callGenerativeAI(
            initialContents,
            toolsForApi
        );

        const validOutputPath = validateWorkspacePath(output_path);
        await fs.mkdir(path.dirname(validOutputPath), { recursive: true });
        await fs.writeFile(validOutputPath, generatedContent, "utf-8");

        return {
            content: [{ type: "text", text: `Successfully generated websearch answer and saved to ${output_path}` }],
        };

    } // --- Filesystem Tool Execution Logic ---
    else if (filesystemToolNames.has(toolName)) {
      let resultText = "";

      switch (toolName) {
        case "read_file_content": {
          const parsed = ReadFileArgsSchema.parse(args);
          const validPath = validateWorkspacePath(parsed.path);
          const content = await fs.readFile(validPath, "utf-8");
          resultText = content;
          break;
        }
        case "read_multiple_files_content": {
          const parsed = ReadMultipleFilesArgsSchema.parse(args);
          const results = await Promise.all(
            parsed.paths.map(async (filePath: string) => {
              try {
                const validPath = validateWorkspacePath(filePath);
                const content = await fs.readFile(validPath, "utf-8");
                return `${path.relative(process.cwd(), validPath)}:\n${content}\n`;
              } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return `${filePath}: Error - ${errorMessage}`;
              }
            }),
          );
          resultText = results.join("\n---\n");
          break;
        }
        case "write_file_content": {
          const parsed = WriteFileArgsSchema.parse(args);
          const validPath = validateWorkspacePath(parsed.path);
          await fs.mkdir(path.dirname(validPath), { recursive: true });
          await fs.writeFile(validPath, parsed.content, "utf-8");
          resultText = `Successfully wrote to ${parsed.path}`;
          break;
        }
        case "edit_file_content": {
          const parsed = EditFileArgsSchema.parse(args);
          if (parsed.edits.length === 0) {
             throw new McpError(ErrorCode.InvalidParams, `'edits' array cannot be empty for ${toolName}.`);
          }
          const validPath = validateWorkspacePath(parsed.path);
          resultText = await applyFileEdits(validPath, parsed.edits, parsed.dryRun);
          break;
        }
        case "create_directory": {
          const parsed = CreateDirectoryArgsSchema.parse(args);
          const validPath = validateWorkspacePath(parsed.path);
          await fs.mkdir(validPath, { recursive: true });
          resultText = `Successfully created directory ${parsed.path}`;
          break;
        }
        case "list_directory_contents": {
          const parsed = ListDirectoryArgsSchema.parse(args);
          const validPath = validateWorkspacePath(parsed.path);
          const entries = await fs.readdir(validPath, { withFileTypes: true });
          resultText = entries
            .map((entry) => `${entry.isDirectory() ? "[DIR] " : "[FILE]"} ${entry.name}`)
            .sort()
            .join("\n");
           if (!resultText) resultText = "(Directory is empty)";
          break;
        }
        case "get_directory_tree": {
            const parsed = DirectoryTreeArgsSchema.parse(args);
            const validPath = validateWorkspacePath(parsed.path);
            const treeData = await buildDirectoryTree(validPath);
            resultText = JSON.stringify(treeData, null, 2);
            break;
        }
        case "move_file_or_directory": {
          const parsed = MoveFileArgsSchema.parse(args);
           if (parsed.source === parsed.destination) {
             throw new McpError(ErrorCode.InvalidParams, `Source and destination paths cannot be the same for ${toolName}.`);
           }
          const validSourcePath = validateWorkspacePath(parsed.source);
          const validDestPath = validateWorkspacePath(parsed.destination);
          await fs.mkdir(path.dirname(validDestPath), { recursive: true });
          await fs.rename(validSourcePath, validDestPath);
          resultText = `Successfully moved ${parsed.source} to ${parsed.destination}`;
          break;
        }
        case "search_filesystem": {
          const parsed = SearchFilesArgsSchema.parse(args);
          const validPath = validateWorkspacePath(parsed.path);
          const results: string[] = [];
          await searchFilesRecursive(validPath, validPath, parsed.pattern, parsed.excludePatterns, results);
          resultText = results.length > 0 ? results.join("\n") : "No matches found";
          break;
        }
        case "get_filesystem_info": {
          const parsed = GetFileInfoArgsSchema.parse(args);
          const validPath = validateWorkspacePath(parsed.path);
          const info = await getFileStats(validPath);
          resultText = `Path: ${parsed.path}\nType: ${info.isDirectory ? 'Directory' : 'File'}\nSize: ${info.size} bytes\nCreated: ${info.created.toISOString()}\nModified: ${info.modified.toISOString()}\nAccessed: ${info.accessed.toISOString()}\nPermissions: ${info.permissions}`;
          break;
        }
        default:
          throw new McpError(ErrorCode.MethodNotFound, `Filesystem tool handler not implemented: ${toolName}`);
      }

      // Return successful filesystem operation result
      return {
        content: [{ type: "text", text: resultText }],
      };

    } else {
      // --- Generic AI Tool Logic (Non-filesystem, non-combined) ---
      const config = getAIConfig(); // Use renamed config function
      if (!toolDefinition.buildPrompt) {
        throw new McpError(ErrorCode.MethodNotFound, `Tool ${toolName} is missing required buildPrompt logic.`);
      }
      const { systemInstructionText, userQueryText, useWebSearch, enableFunctionCalling } = toolDefinition.buildPrompt(args, config.modelId);
      const initialContents = buildInitialContent(systemInstructionText, userQueryText) as CombinedContent[]; // Cast
      const toolsForApi = getToolsForApi(enableFunctionCalling, useWebSearch);

      // Call the unified AI function
      const responseText = await callGenerativeAI(
          initialContents,
          toolsForApi
          // Config is implicitly used by callGenerativeAI now
      );

      return {
        content: [{ type: "text", text: responseText }],
      };
    }

  } catch (error) {
     // Centralized error handling
    if (error instanceof z.ZodError) {
        throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for ${toolName}: ${error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}`);
    } else if (error instanceof McpError) {
      throw error;
    } else if (error instanceof Error && error.message.includes('ENOENT')) {
         throw new McpError(ErrorCode.InvalidParams, `Path not found for tool ${toolName}: ${error.message}`);
    } else {
      console.error(`[${new Date().toISOString()}] Unexpected error in tool handler (${toolName}):`, error);
      throw new McpError(ErrorCode.InternalError, `Unexpected server error during ${toolName}: ${(error as Error).message || "Unknown"}`);
    }
  }
});

// --- Server Start ---
async function main() {
  const transport = new StdioServerTransport();
  console.error(`[${new Date().toISOString()}] vertex-ai-mcp-server connecting via stdio...`);
  await server.connect(transport);
  console.error(`[${new Date().toISOString()}] vertex-ai-mcp-server connected.`);
}

main().catch((error) => {
  console.error(`[${new Date().toISOString()}] Server failed to start:`, error);
  process.exit(1);
});

// --- Graceful Shutdown ---
const shutdown = async (signal: string) => {
    console.error(`[${new Date().toISOString()}] Received ${signal}. Shutting down server...`);
    try {
      await server.close();
      console.error(`[${new Date().toISOString()}] Server shut down gracefully.`);
      process.exit(0);
    } catch (shutdownError) {
      console.error(`[${new Date().toISOString()}] Error during server shutdown:`, shutdownError);
      process.exit(1);
    }
};
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
````

## File: src/utils.ts
````typescript
import * as path from 'node:path';
import { WORKSPACE_ROOT } from './config.js';

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Basic path validation
export function sanitizePath(inputPath: string): string {
    const absolutePath = path.resolve(WORKSPACE_ROOT, inputPath);
    if (!absolutePath.startsWith(WORKSPACE_ROOT)) {
        throw new Error(`Access denied: Path is outside the workspace: ${inputPath}`);
    }
    // Basic check against path traversal
    if (absolutePath.includes('..')) {
         throw new Error(`Access denied: Invalid path component '..': ${inputPath}`);
    }
    return absolutePath;
}
````

## File: src/vertex_ai_client.ts
````typescript
import * as vertexAiSdk from "@google-cloud/vertexai";
// Correct import: Use @google/generative-ai
import { GoogleGenerativeAI } from "@google/generative-ai";
// Import specific types needed, alias Content and explicitly import SafetySetting
import type { Content as GoogleGeneraiContent, GenerationConfig, SafetySetting, FunctionDeclaration } from "@google/generative-ai";

import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";
// Import getAIConfig and original safety setting definitions from config
import { getAIConfig, vertexSafetySettings, geminiSafetySettings as configGeminiSafetySettings } from './config.js';
import { sleep } from './utils.js';

// --- Configuration and Client Initialization ---
const aiConfig = getAIConfig();
// Use correct client types
let generativeClient: vertexAiSdk.VertexAI | GoogleGenerativeAI;

try {
    if (aiConfig.provider === 'vertex') {
        if (!aiConfig.gcpProjectId || !aiConfig.gcpLocation) {
            throw new Error("Missing GOOGLE_CLOUD_PROJECT or GOOGLE_CLOUD_LOCATION for Vertex AI provider.");
        }
        generativeClient = new vertexAiSdk.VertexAI({ project: aiConfig.gcpProjectId, location: aiConfig.gcpLocation });
        console.log(`Initialized Vertex AI client for project ${aiConfig.gcpProjectId} in ${aiConfig.gcpLocation}`);
    } else { // gemini
        if (!aiConfig.geminiApiKey) {
            throw new Error("Missing GEMINI_API_KEY for Gemini provider.");
        }
        // Instantiate using the correct package
        generativeClient = new GoogleGenerativeAI(aiConfig.geminiApiKey);
        console.log("Initialized Gemini API client (@google/generative-ai)");
    }
} catch (error: any) {
    console.error(`Error initializing ${aiConfig.provider} AI client:`, error.message);
    process.exit(1);
}

// Define a union type for Content
export type CombinedContent = vertexAiSdk.Content | GoogleGeneraiContent;

// --- Unified AI Call Function ---
export async function callGenerativeAI(
    initialContents: CombinedContent[],
    tools: vertexAiSdk.Tool[] | undefined // Still expect Vertex Tool format initially
): Promise<string> {

    const {
        provider,
        modelId,
        temperature,
        useStreaming,
        maxOutputTokens,
        maxRetries,
        retryDelayMs,
    } = aiConfig;

    const isGroundingRequested = tools?.some(tool => (tool as any).googleSearchRetrieval);

    let filteredToolsForVertex = tools;
    let adaptedToolsForGemini: FunctionDeclaration[] | undefined = undefined;

    if (provider === 'gemini' && tools) {
        const nonSearchTools = tools.filter(tool => !(tool as any).googleSearchRetrieval);
        if (nonSearchTools.length > 0) {
             console.warn(`Gemini Provider: Function calling tools detected but adaptation/usage with @google/generative-ai is not fully implemented.`);
        } else {
             console.log(`Gemini Provider: Explicit googleSearchRetrieval tool filtered out (search handled implicitly or by model).`);
        }
        filteredToolsForVertex = undefined;
        adaptedToolsForGemini = undefined; // Keep undefined for now

    } else if (provider === 'vertex' && isGroundingRequested && tools && tools.length > 1) {
        console.warn("Vertex Provider: Grounding requested with other tools; keeping only search.");
        filteredToolsForVertex = tools.filter(tool => (tool as any).googleSearchRetrieval);
    }


    // Get appropriate model instance
    let vertexModelInstance: any | undefined;
    let geminiModelInstance: ReturnType<GoogleGenerativeAI['getGenerativeModel']> | undefined;

    if (provider === 'vertex') {
        vertexModelInstance = isGroundingRequested
            ? (generativeClient as vertexAiSdk.VertexAI).preview.getGenerativeModel({ model: modelId })
            : (generativeClient as vertexAiSdk.VertexAI).getGenerativeModel({ model: modelId });
    } else { // gemini
         geminiModelInstance = (generativeClient as GoogleGenerativeAI).getGenerativeModel({
             model: modelId,
             // Safety settings/genConfig are passed to generateContent for @google/generative-ai
         });
    }

    // --- Prepare Request Parameters (differ slightly between SDKs) ---
    const commonGenConfig = { temperature, maxOutputTokens };
    // Use the correctly typed settings imported from config
    const resolvedVertexSafetySettings: vertexAiSdk.SafetySetting[] = vertexSafetySettings;
    const resolvedGeminiSafetySettings: SafetySetting[] = configGeminiSafetySettings;

    // Safety settings variable is not needed, pass directly below


    const vertexRequest: vertexAiSdk.GenerateContentRequest = {
        contents: initialContents as vertexAiSdk.Content[],
        generationConfig: commonGenConfig,
        safetySettings: resolvedVertexSafetySettings, // Pass correct settings
        tools: filteredToolsForVertex
    };
    // @google/generative-ai takes config in generateContent call
    const geminiGenConfig: GenerationConfig = commonGenConfig;


    // --- Execute Request with Retries ---
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            // Simplified log line without the problematic length check
            console.error(`[${new Date().toISOString()}] Calling ${provider} AI (${modelId}, temp: ${temperature}, grounding: ${isGroundingRequested}, tools(Vertex): ${filteredToolsForVertex?.length ?? 0}, stream: ${useStreaming}, attempt: ${attempt + 1})`);

            let responseText: string | undefined;

            if (useStreaming) {
                let accumulatedText = "";
                let finalAggregatedResponse: any;

                if (provider === 'vertex') {
                    if (!vertexModelInstance) throw new Error("Vertex model instance not initialized.");
                    const streamResult = await vertexModelInstance.generateContentStream(vertexRequest);
                    for await (const item of streamResult.stream) {
                        const candidate = item.candidates?.[0];
                        const textPart = candidate?.content?.parts?.[0]?.text;
                        if (typeof textPart === 'string') accumulatedText += textPart;
                    }
                    finalAggregatedResponse = await streamResult.response;
                     const blockReasonVertex = finalAggregatedResponse?.promptFeedback?.blockReason;
                     const safetyRatingsVertex = finalAggregatedResponse?.candidates?.[0]?.safetyRatings;
                     if (blockReasonVertex && blockReasonVertex !== 'BLOCK_REASON_UNSPECIFIED' && blockReasonVertex !== 'OTHER') {
                          throw new Error(`Vertex Content generation blocked. Reason: ${blockReasonVertex}`);
                     }
                     if (!blockReasonVertex && safetyRatingsVertex && safetyRatingsVertex.length > 0) {
                          console.warn("Vertex: Safety ratings returned despite BLOCK_NONE threshold:", JSON.stringify(safetyRatingsVertex));
                     }
                } else { // gemini
                    if (!geminiModelInstance) throw new Error("Gemini model instance not initialized.");
                    const streamResult = await geminiModelInstance.generateContentStream({
                         contents: initialContents as GoogleGeneraiContent[],
                         generationConfig: geminiGenConfig,
                         safetySettings: resolvedGeminiSafetySettings,
                         // tools: adaptedToolsForGemini,
                     });

                    for await (const chunk of streamResult.stream) {
                        try {
                            accumulatedText += chunk.text();
                        } catch (e: any) {
                             console.warn("Non-text or error chunk encountered in Gemini stream:", e.message);
                             if (e.message?.toLowerCase().includes('safety')) {
                                 throw new Error(`Gemini Content generation blocked during stream. Reason: ${e.message}`);
                             }
                        }
                    }
                    try {
                         finalAggregatedResponse = await streamResult.response;
                    } catch (e: any) {
                         console.error("Error getting aggregated response from Gemini stream:", e.message);
                         if (e.message?.toLowerCase().includes('safety')) {
                            throw new Error(`Gemini Content generation blocked aggregating response. Reason: ${e.message}`);
                         }
                         throw e;
                    }
                    const blockReasonGemini = finalAggregatedResponse?.promptFeedback?.blockReason;
                    if (blockReasonGemini) {
                       throw new Error(`Gemini Content generation blocked. Aggregated Reason: ${blockReasonGemini}`);
                    }
                    const finishReasonGemini = finalAggregatedResponse?.candidates?.[0]?.finishReason;
                    if (finishReasonGemini === 'SAFETY') {
                       throw new Error(`Gemini Content generation blocked. Aggregated Finish Reason: SAFETY`);
                    }
                }

                 if (!accumulatedText && finalAggregatedResponse) {
                    try {
                        if (provider === 'vertex') {
                             const aggregatedTextVertex = finalAggregatedResponse?.candidates?.[0]?.content?.parts?.[0]?.text;
                             if (typeof aggregatedTextVertex === 'string') accumulatedText = aggregatedTextVertex;
                         } else { // gemini
                            const aggregatedTextGemini = finalAggregatedResponse.text();
                            if (typeof aggregatedTextGemini === 'string') accumulatedText = aggregatedTextGemini;
                        }
                    } catch (e) {
                        console.warn(`Could not extract text from ${provider} aggregated stream response:`, e);
                    }
                 }

                 responseText = accumulatedText;

                 if (typeof responseText !== 'string' || !responseText) {
                     console.error(`Empty response received from ${provider} AI stream. Final Response:`, JSON.stringify(finalAggregatedResponse, null, 2));
                     throw new Error(`Received empty or non-text response from ${provider} AI stream.`);
                 }

                 console.error(`[${new Date().toISOString()}] Finished processing stream from ${provider} AI.`);

            } else { // Non-streaming
                let result: any;
                if (provider === 'vertex') {
                     if (!vertexModelInstance) throw new Error("Vertex model instance not initialized.");
                     result = await vertexModelInstance.generateContent(vertexRequest);
                     console.error(`[${new Date().toISOString()}] Received non-streaming response from Vertex AI.`);
                     const candidate = result.response?.candidates?.[0];
                     responseText = candidate?.content?.parts?.[0]?.text;
                     const blockReasonVertex = result.response?.promptFeedback?.blockReason;
                     const safetyRatingsVertex = candidate?.safetyRatings;
                     if (blockReasonVertex && blockReasonVertex !== 'BLOCK_REASON_UNSPECIFIED' && blockReasonVertex !== 'OTHER') {
                          throw new Error(`Vertex Content generation blocked. Reason: ${blockReasonVertex}`);
                     }
                     if (!blockReasonVertex && safetyRatingsVertex && safetyRatingsVertex.length > 0) {
                          console.warn("Vertex: Safety ratings returned despite BLOCK_NONE threshold:", JSON.stringify(safetyRatingsVertex));
                     }
                } else { // gemini
                     if (!geminiModelInstance) throw new Error("Gemini model instance not initialized.");
                     try {
                         result = await geminiModelInstance.generateContent({
                             contents: initialContents as GoogleGeneraiContent[],
                             generationConfig: geminiGenConfig,
                             safetySettings: resolvedGeminiSafetySettings,
                             // tools: adaptedToolsForGemini,
                         });
                     } catch (e: any) {
                         console.error("Error during non-streaming Gemini call:", e.message);
                         if (e.message?.toLowerCase().includes('safety') || e.message?.toLowerCase().includes('prompt blocked') || (e as any).status === 'BLOCKED') {
                             throw new Error(`Gemini Content generation blocked. Call Reason: ${e.message}`);
                         }
                         throw e;
                     }
                     console.error(`[${new Date().toISOString()}] Received non-streaming response from Gemini AI.`);
                     try {
                         responseText = result.response?.text();
                     } catch (e) {
                         console.warn("Could not extract text from Gemini non-streaming response:", e);
                     }
                     const blockReasonGemini = result.response?.promptFeedback?.blockReason;
                     if (blockReasonGemini) {
                        throw new Error(`Gemini Content generation blocked. Response Reason: ${blockReasonGemini}`);
                     }
                     const finishReasonGemini = result.response?.candidates?.[0]?.finishReason;
                     if (finishReasonGemini === 'SAFETY') {
                        throw new Error(`Gemini Content generation blocked. Response Finish Reason: SAFETY`);
                     }
                }

                if (typeof responseText !== 'string' || !responseText) {
                    console.error(`Unexpected non-streaming response structure from ${provider}:`, JSON.stringify(result?.response, null, 2));
                    throw new Error(`Failed to extract valid text response from ${provider} AI (non-streaming).`);
                }
            }

            // --- Return Text ---
            if (typeof responseText === 'string') {
                 return responseText;
            } else {
                 throw new Error(`Invalid state: No valid text response obtained from ${provider} AI.`);
            }

        } catch (error: any) {
             console.error(`[${new Date().toISOString()}] Error details (attempt ${attempt + 1}):`, error);
             const errorMessageString = String(error.message || error || '').toLowerCase();
             const isBlockingError = errorMessageString.includes('blocked') || errorMessageString.includes('safety');
             const isRetryable = !isBlockingError && (
                 errorMessageString.includes('429') ||
                 errorMessageString.includes('500') ||
                 errorMessageString.includes('503') ||
                 errorMessageString.includes('deadline_exceeded') ||
                 errorMessageString.includes('internal') ||
                 errorMessageString.includes('network error') ||
                 errorMessageString.includes('socket hang up') ||
                 errorMessageString.includes('unavailable') ||
                 errorMessageString.includes('could not connect')
             );

            if (isRetryable && attempt < maxRetries) {
                const jitter = Math.random() * 500;
                const delay = (retryDelayMs * Math.pow(2, attempt)) + jitter;
                console.error(`[${new Date().toISOString()}] Retrying in ${delay.toFixed(0)}ms...`);
                await sleep(delay);
                continue;
            } else {
                 let finalErrorMessage = `${provider} AI API error: ${error.message || "Unknown error"}`;
                 if (isBlockingError) {
                      const match = error.message?.match(/(Reason|Finish Reason):\s*(.*)/i);
                       if (match?.[2]) {
                          finalErrorMessage = `Content generation blocked by ${provider} safety filters. Reason: ${match[2]}`;
                       } else {
                          const geminiBlockMatch = error.message?.match(/prompt.*blocked.*\s*safety.*?setting/i);
                           if (geminiBlockMatch) {
                              finalErrorMessage = `Content generation blocked by Gemini safety filters.`;
                           } else {
                              finalErrorMessage = `Content generation blocked by ${provider} safety filters. (${error.message || 'No specific reason found'})`;
                           }
                       }
                 } else if (errorMessageString.match(/\b(429|500|503|internal|unavailable)\b/)) {
                     finalErrorMessage += ` (Status: ${errorMessageString.match(/\b(429|500|503|internal|unavailable)\b/)?.[0]})`;
                 } else if (errorMessageString.includes('deadline_exceeded')) {
                     finalErrorMessage = `${provider} AI API error: Operation timed out (deadline_exceeded).`;
                 }
                 console.error("Final error message:", finalErrorMessage);
                 throw new McpError(ErrorCode.InternalError, finalErrorMessage);
            }
        }
    } // End retry loop

    throw new McpError(ErrorCode.InternalError, `Max retries (${maxRetries + 1}) reached for ${provider} LLM call without success.`);
}
````

## File: .env.example
````
# Environment variables for vertex-ai-mcp-server
# --- Required ---
# REQUIRED only if AI_PROVIDER is "vertex"
GOOGLE_CLOUD_PROJECT="YOUR_GCP_PROJECT_ID"
# REQUIRED only if AI_PROVIDER is "gemini"
GEMINI_API_KEY="YOUR_GEMINI_API_KEY" # Get from Google AI Studio

# --- General AI Configuration ---
AI_PROVIDER="vertex" # Provider to use: "vertex" or "gemini"
# Optional - Model ID depends on the chosen provider
VERTEX_MODEL_ID="gemini-1.5-pro-latest" # e.g., gemini-1.5-pro-latest, gemini-1.0-pro
GEMINI_MODEL_ID="gemini-1.5-flash-latest" # e.g., gemini-1.5-flash-latest, gemini-pro

# --- Optional AI Parameters (Common) ---
# GOOGLE_CLOUD_LOCATION is specific to Vertex AI
GOOGLE_CLOUD_LOCATION="us-central1"
AI_TEMPERATURE="0.0"         # Range: 0.0 to 1.0
AI_USE_STREAMING="true"      # Use streaming responses: "true" or "false"
AI_MAX_OUTPUT_TOKENS="8192" # Max tokens in response (Note: Models have their own upper limits)
AI_MAX_RETRIES="3"           # Number of retries on transient errors
AI_RETRY_DELAY_MS="1000"     # Delay between retries in milliseconds

# --- Optional Vertex AI Authentication ---
# Uncomment and set if using a Service Account Key instead of Application Default Credentials (ADC) for Vertex AI
# GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-key.json"
````

## File: .gitignore
````
node_modules/
build/
*.log
.env*
!.env.example
*.zip
*.md
!README.md
````

## File: Dockerfile
````dockerfile
# Generated by https://smithery.ai. See: https://smithery.ai/docs/config#dockerfile
# Build stage
FROM node:lts-alpine AS build
WORKDIR /app

# Install dependencies without running prepare scripts
COPY package.json tsconfig.json bun.lock .
RUN npm install --ignore-scripts

# Copy source and transpile
COPY . .
RUN npx tsc -p tsconfig.json && chmod +x build/index.js

# Production image
FROM node:lts-alpine
WORKDIR /app

# Copy built application
COPY --from=build /app/build ./build

# Install production dependencies without running prepare scripts
COPY package.json bun.lock .
RUN npm install --omit=dev --ignore-scripts

ENV NODE_ENV=production
ENTRYPOINT ["node", "build/index.js"]
````

## File: LICENSE
````
Copyright (c) 2025 Shariq Riaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: package.json
````json
{
  "name": "vertex-ai-mcp-server",
  "version": "0.2.0",
  "description": "A Model Context Protocol server supporting Vertex AI and Gemini API",
  "license": "MIT",
  "type": "module",
  "bin": {
    "vertex-ai-mcp-server": "build/index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/shariqriazz/vertex-ai-mcp-server.git"
  },
  "homepage": "https://github.com/shariqriazz/vertex-ai-mcp-server#readme",
  "bugs": {
    "url": "https://github.com/shariqriazz/vertex-ai-mcp-server/issues"
  },
  "files": [
    "build"
  ],
  "scripts": {
    "build": "bun run tsc && node -e \"require('fs').chmodSync('build/index.js', '755')\"",
    "prepare": "bun run build",
    "watch": "bun run tsc --watch",
    "inspector": "bunx @modelcontextprotocol/inspector build/index.js"
  },
  "dependencies": {
    "@google-cloud/vertexai": "^1.9.3",
    "@google/generative-ai": "^0.17.0",
    "@modelcontextprotocol/sdk": "0.6.0",
    "diff": "^7.0.0",
    "dotenv": "^16.5.0",
    "minimatch": "^10.0.1",
    "zod": "^3.24.3",
    "zod-to-json-schema": "^3.24.5"
  },
  "devDependencies": {
    "@types/diff": "^7.0.2",
    "@types/minimatch": "^5.1.2",
    "@types/node": "^20.11.24",
    "typescript": "^5.3.3"
  }
}
````

## File: README.md
````markdown
# Vertex AI MCP Server
[![smithery badge](https://smithery.ai/badge/@shariqriazz/vertex-ai-mcp-server)](https://smithery.ai/server/@shariqriazz/vertex-ai-mcp-server)

This project implements a Model Context Protocol (MCP) server that provides a comprehensive suite of tools for interacting with Google Cloud's Vertex AI Gemini models, focusing on coding assistance and general query answering.

<a href="https://glama.ai/mcp/servers/@shariqriazz/vertex-ai-mcp-server">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@shariqriazz/vertex-ai-mcp-server/badge" alt="Vertex AI Server MCP server" />
</a>

## Features

*   Provides access to Vertex AI Gemini models via numerous MCP tools.
*   Supports web search grounding (`answer_query_websearch`) and direct knowledge answering (`answer_query_direct`).
*   Configurable model ID, temperature, streaming behavior, max output tokens, and retry settings via environment variables.
*   Uses streaming API by default for potentially better responsiveness.
*   Includes basic retry logic for transient API errors.
*   Minimal safety filters applied (`BLOCK_NONE`) to reduce potential blocking (use with caution).

## Tools Provided

### Query & Generation (AI Focused)
*   `answer_query_websearch`: Answers a natural language query using the configured Vertex AI model enhanced with Google Search results.
*   `answer_query_direct`: Answers a natural language query using only the internal knowledge of the configured Vertex AI model.
*   `explain_topic_with_docs`: Provides a detailed explanation for a query about a specific software topic by synthesizing information primarily from official documentation found via web search.
*   `get_doc_snippets`: Provides precise, authoritative code snippets or concise answers for technical queries by searching official documentation.
*   `generate_project_guidelines`: Generates a structured project guidelines document (Markdown) based on a specified list of technologies (optionally with versions), using web search for best practices.

### Filesystem Operations
*   `read_file_content`: Reads the complete contents of a single file.
*   `read_multiple_files_content`: Reads the contents of multiple files simultaneously.
*   `write_file_content`: Creates a new file or completely overwrites an existing file with new content.
*   `edit_file_content`: Makes line-based edits to a text file, returning a diff preview or applying changes.
*   `create_directory`: Creates a new directory (including nested directories).
*   `list_directory_contents`: Lists files and directories directly within a specified path (non-recursive).
*   `get_directory_tree`: Gets a recursive tree view of files and directories as JSON.
*   `move_file_or_directory`: Moves or renames files and directories.
*   `search_filesystem`: Recursively searches for files/directories matching a name pattern, with optional exclusions.
*   `get_filesystem_info`: Retrieves detailed metadata (size, dates, type, permissions) about a file or directory.

### Combined AI + Filesystem Operations
*   `save_generate_project_guidelines`: Generates project guidelines based on a tech stack and saves the result to a specified file path.
*   `save_doc_snippet`: Finds code snippets from documentation and saves the result to a specified file path.
*   `save_topic_explanation`: Generates a detailed explanation of a topic based on documentation and saves the result to a specified file path.
*   `save_answer_query_direct`: Answers a query using only internal knowledge and saves the answer to a specified file path.
*   `save_answer_query_websearch`: Answers a query using web search results and saves the answer to a specified file path.

*(Note: Input/output schemas for each tool are defined in their respective files within `src/tools/` and exposed via the MCP server.)*

## Prerequisites

*   Node.js (v18+)
*   Bun (`npm install -g bun`)
*   Google Cloud Project with Billing enabled.
*   Vertex AI API enabled in the GCP project.
*   Google Cloud Authentication configured in your environment (Application Default Credentials via `gcloud auth application-default login` is recommended, or a Service Account Key).

## Setup & Installation

1.  **Clone/Place Project:** Ensure the project files are in your desired location.
2.  **Install Dependencies:**
    ```bash
    bun install
    ```
3.  **Configure Environment:**
    *   Create a `.env` file in the project root (copy `.env.example`).
    *   Set the required and optional environment variables as described in `.env.example`. Ensure `GOOGLE_CLOUD_PROJECT` is set.
4.  **Build the Server:**
    ```bash
    bun run build
    ```
    This compiles the TypeScript code to `build/index.js`.

## Usage (Standalone / NPX)

Once published to npm, you can run this server directly using `npx`:

```bash
# Ensure required environment variables are set (e.g., GOOGLE_CLOUD_PROJECT)
npx vertex-ai-mcp-server
```

Alternatively, install it globally:

```bash
npm install -g vertex-ai-mcp-server
# Then run:
vertex-ai-mcp-server
```

**Note:** Running standalone requires setting necessary environment variables (like `GOOGLE_CLOUD_PROJECT`, `GOOGLE_CLOUD_LOCATION`, authentication credentials if not using ADC) in your shell environment before executing the command.

### Installing via Smithery

To install Vertex AI Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@shariqriazz/vertex-ai-mcp-server):

```bash
npx -y @smithery/cli install @shariqriazz/vertex-ai-mcp-server --client claude
```

## Running with Cline

1.  **Configure MCP Settings:** Add/update the configuration in your Cline MCP settings file (e.g., `.roo/mcp.json`). You have two primary ways to configure the command:

    **Option A: Using Node (Direct Path - Recommended for Development)**

    This method uses `node` to run the compiled script directly. It's useful during development when you have the code cloned locally.

    ```json
    {
      "mcpServers": {
        "vertex-ai-mcp-server": {
          "command": "node",
          "args": [
            "/full/path/to/your/vertex-ai-mcp-server/build/index.js" // Use absolute path or ensure it's relative to where Cline runs node
          ],
          "env": {
            // Required: Ensure these match your .env or are set here
            "GOOGLE_CLOUD_PROJECT": "YOUR_GCP_PROJECT_ID",
            "GOOGLE_CLOUD_LOCATION": "us-central1",
            // Required if not using ADC:
            // "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/your/service-account-key.json",
            // Optional overrides:
            "VERTEX_AI_MODEL_ID": "gemini-2.5-pro-exp-03-25",
            "VERTEX_AI_TEMPERATURE": "0.0",
            "VERTEX_AI_USE_STREAMING": "true",
            "VERTEX_AI_MAX_OUTPUT_TOKENS": "65535",
            "VERTEX_AI_MAX_RETRIES": "3",
            "VERTEX_AI_RETRY_DELAY_MS": "1000"
          },
          "disabled": false,
          "alwaysAllow": [
             // Add tool names here if you don't want confirmation prompts
             // e.g., "answer_query_websearch"
          ],
          "timeout": 3600 // Optional: Timeout in seconds
        }
        // Add other servers here...
      }
    }
    ```
    *   **Important:** Ensure the `args` path points correctly to the `build/index.js` file. Using an absolute path might be more reliable.

    **Option B: Using NPX (Requires Package Published to npm)**

    This method uses `npx` to automatically download and run the server package from the npm registry. This is convenient if you don't want to clone the repository.

    ```json
    {
      "mcpServers": {
        "vertex-ai-mcp-server": {
          "command": "npx", // Use npx
          "args": [
            "-y", // Auto-confirm installation
            "vertex-ai-mcp-server" // The npm package name
          ],
          "env": {
            // Required: Ensure these match your .env or are set here
            "GOOGLE_CLOUD_PROJECT": "YOUR_GCP_PROJECT_ID",
            "GOOGLE_CLOUD_LOCATION": "us-central1",
            // Required if not using ADC:
            // "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/your/service-account-key.json",
            // Optional overrides:
            "VERTEX_AI_MODEL_ID": "gemini-2.5-pro-exp-03-25",
            "VERTEX_AI_TEMPERATURE": "0.0",
            "VERTEX_AI_USE_STREAMING": "true",
            "VERTEX_AI_MAX_OUTPUT_TOKENS": "65535",
            "VERTEX_AI_MAX_RETRIES": "3",
            "VERTEX_AI_RETRY_DELAY_MS": "1000"
          },
          "disabled": false,
          "alwaysAllow": [
             // Add tool names here if you don't want confirmation prompts
             // e.g., "answer_query_websearch"
          ],
          "timeout": 3600 // Optional: Timeout in seconds
        }
        // Add other servers here...
      }
    }
    ```
    *   Ensure the environment variables in the `env` block are correctly set, either matching `.env` or explicitly defined here. Remove comments from the actual JSON file.

2.  **Restart/Reload Cline:** Cline should detect the configuration change and start the server.

3.  **Use Tools:** You can now use the extensive list of tools via Cline.

## Development

*   **Watch Mode:** `bun run watch`
*   **Linting:** `bun run lint`
*   **Formatting:** `bun run format`
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
````

## File: smithery.yaml
````yaml
# Smithery configuration file: https://smithery.ai/docs/config#smitheryyaml

startCommand:
  type: stdio
  configSchema:
    # JSON Schema defining the configuration options for the MCP.
    type: object
    required:
      - googleCloudProject
      - googleCloudLocation
    properties:
      googleCloudProject:
        type: string
        description: Google Cloud Project ID
      googleCloudLocation:
        type: string
        description: Google Cloud Location
      googleApplicationCredentials:
        type: string
        description: Path to service account key JSON
      vertexAiModelId:
        type: string
        default: gemini-2.5-pro-exp-03-25
        description: Vertex AI Model ID
      vertexAiTemperature:
        type: number
        default: 0
        description: Temperature for model
      vertexAiUseStreaming:
        type: boolean
        default: true
        description: Whether to use streaming
      vertexAiMaxOutputTokens:
        type: number
        default: 65535
        description: Max output tokens
      vertexAiMaxRetries:
        type: number
        default: 3
        description: Max retry attempts
      vertexAiRetryDelayMs:
        type: number
        default: 1000
        description: Delay between retries in ms
  commandFunction:
    # A JS function that produces the CLI command based on the given config to start the MCP on stdio.
    |-
    (config) => ({ command: 'node', args: ['build/index.js'], env: { ...(config.googleCloudProject && { GOOGLE_CLOUD_PROJECT: config.googleCloudProject }), ...(config.googleCloudLocation && { GOOGLE_CLOUD_LOCATION: config.googleCloudLocation }), ...(config.googleApplicationCredentials && { GOOGLE_APPLICATION_CREDENTIALS: config.googleApplicationCredentials }), ...(config.vertexAiModelId && { VERTEX_AI_MODEL_ID: config.vertexAiModelId }), ...(config.vertexAiTemperature !== undefined && { VERTEX_AI_TEMPERATURE: String(config.vertexAiTemperature) }), ...(config.vertexAiUseStreaming !== undefined && { VERTEX_AI_USE_STREAMING: String(config.vertexAiUseStreaming) }), ...(config.vertexAiMaxOutputTokens !== undefined && { VERTEX_AI_MAX_OUTPUT_TOKENS: String(config.vertexAiMaxOutputTokens) }), ...(config.vertexAiMaxRetries !== undefined && { VERTEX_AI_MAX_RETRIES: String(config.vertexAiMaxRetries) }), ...(config.vertexAiRetryDelayMs !== undefined && { VERTEX_AI_RETRY_DELAY_MS: String(config.vertexAiRetryDelayMs) }) } })
  exampleConfig:
    googleCloudProject: my-gcp-project
    googleCloudLocation: us-central1
    googleApplicationCredentials: /path/to/credentials.json
    vertexAiModelId: gemini-2.5-pro-exp-03-25
    vertexAiTemperature: 0
    vertexAiUseStreaming: true
    vertexAiMaxOutputTokens: 65535
    vertexAiMaxRetries: 3
    vertexAiRetryDelayMs: 1000
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./build",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
````
