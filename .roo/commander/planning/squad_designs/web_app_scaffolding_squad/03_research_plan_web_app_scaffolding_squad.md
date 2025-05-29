+++
# --- Squad Planning: Knowledge & Research Plan ---
id = "SQUAD-KRP-WEBAPPSCAFFOLD-20250515"
title = "Squad Knowledge & Research Plan: Web App Scaffolding Squad"
status = "defined" # Finalizing this now
created_date = "20250515"
last_updated = "20250515T00:00:00Z" # Reflects this finalization
version = "1.0"
tags = ["squad-planning", "knowledge-management", "research-plan", "kb-bootstrap", "web-app-scaffolding-squad", "mcp", "frameworks"]
template_schema_doc = ".roo/commander/templates/planning/squad_design/template_03_squad_knowledge_and_research_plan.README.md"

# --- Squad & Plan Identification ---
squad_unit_name_ref = "Web App Scaffolding Squad"
squad_concept_doc_id = "SQUAD-CONCEPT-WEBAPPSCAFFOLD-20250515"
research_coordinator_proposed = "manager-workspace-maintenance (to delegate research tasks to meta-kb-editor or agent-research)"
overall_knowledge_goal = "To equip the Web App Scaffolding Squad members with comprehensive knowledge of various web frameworks, CLI tools, project structures, common configurations, and best practices necessary to generate high-quality, runnable starter codebases."

# --- Key Knowledge Areas (Summary - details in Markdown) ---
key_knowledge_domains = [
    "Web App Requirements Elicitation for Scaffolds",
    "Comparative Web Technology Stack Knowledge (Frontend, Backend, UI Libs, BaaS, Testing, Deployment)",
    "Framework-Specific Project Initialization & Scaffolding (CLI commands, directory structures, core configs for Next.js, SvelteKit, Astro, Vue/Vite, React/Vite, etc.)",
    "HTML/CSS Layout Generation (especially with Tailwind CSS)",
    "Framework-Specific Component Stubbing Boilerplate",
    "Framework-Specific Routing Configuration",
    "Auth Integration Patterns (Placeholders for Clerk, Firebase Auth, Supabase Auth)",
    "Testing Framework Setup (Jest, Vitest, Playwright basics)",
    "Basic Dockerfile & Static Host Configuration Patterns",
    "Technical Writing for READMEs (Setup & Run Guides)"
]
+++

# Squad Knowledge & Research Plan: {{ squad_unit_name_ref }}

## 1. Overview & Purpose 🎯

*   **Squad Unit:** `{{ squad_unit_name_ref }}`
*   **Purpose of this Document:** To identify the key knowledge domains and specific information required for the `{{ squad_unit_name_ref }}` to operate effectively. This plan outlines potential internal and external sources of information and proposes a research strategy, including the use of Mode Control Protocol (MCP) tools, to gather and synthesize this knowledge for bootstrapping the squad members' Knowledge Bases (KBs).
*   **Overall Knowledge Goal:** `{{ overall_knowledge_goal }}`
*   **Research Coordination:** Research tasks identified herein will likely be delegated by `manager-workspace-maintenance` to modes like `meta-kb-editor` or a future `agent-research`.

## 2. Key Knowledge Domains & Requirements 🧠

*(This section details knowledge needed by specific squad members. The goal is to populate their KBs, especially `skills/` and `reference/` sections.)*

*   **Knowledge Domain 1: Web App Requirements Elicitation for Scaffolds**
    *   **Relevance:** For `web-app-requirements-clarifier`.
    *   **Specific Info/Skills:** Techniques for asking clarifying questions about core pages, essential features (stubs), style preferences; how to translate vague ideas into concrete scaffold requirements.
    *   **Target KB:** `[.roo/commander/modes/web-app-requirements-clarifier/kb/skills/]`

*   **Knowledge Domain 2: Comparative Web Technology Stack Knowledge**
    *   **Relevance:** For `web-app-tech-stack-advisor`.
    *   **Specific Info/Skills:** Pros/cons of major frontend frameworks (Next.js, SvelteKit, Astro, Vue/Vite, React/Vite, Angular) for scaffolding; basic backend options (Node/Express, Python/Flask/Django, BaaS); common UI libraries (MUI, Shadcn/ui, Bootstrap); utility CSS (Tailwind); common auth providers (Clerk, Firebase, Supabase); basic testing frameworks (Jest, Vitest, Playwright); simple deployment targets (Docker, Vercel, Netlify).
    *   **Target KB:** `[.roo/commander/modes/web-app-tech-stack-advisor/kb/reference/]` (for framework comparisons) and `kb/skills/` (for advising techniques).

*   **Knowledge Domain 3: Framework-Specific Project Initialization & Scaffolding**
    *   **Relevance:** For `generic-project-scaffolder`.
    *   **Specific Info/Skills:** CLI commands for creating projects (`npx create-next-app`, `npm create vite@latest`, `npx svelte-add tailwindcss`, etc.); standard directory structures; core config files (`package.json` setup, `next.config.js`, `vite.config.js`, `svelte.config.js`, `astro.config.js`, `tsconfig.json`, `.gitignore`, basic `.env.example`).
    *   **Target KB:** `[.roo/commander/modes/generic-project-scaffolder/kb/skills/]` (one skill per framework, e.g., `scaffolding_nextjs_app.md`).

*   **Knowledge Domain 4: HTML/CSS Layout Generation (especially with Tailwind CSS)**
    *   **Relevance:** For `ui-layout-generator`.
    *   **Specific Info/Skills:** Semantic HTML for layouts; Tailwind CSS utility classes for flexbox, grid, spacing, basic typography; common responsive layout patterns (header, footer, sidebar, main content).
    *   **Target KB:** `[.roo/commander/modes/ui-layout-generator/kb/skills/]` and `kb/examples/`.

*   **Knowledge Domain 5: Framework-Specific Component Stubbing Boilerplate**
    *   **Relevance:** For `generic-component-stubber`.
    *   **Specific Info/Skills:** Basic component file structure and minimal boilerplate for React (functional components, JSX), Vue (SFCs: `<template>`, `<script setup>`, `<style>`), Svelte (`<script>`, markup, `<style>`), Angular. Component naming conventions.
    *   **Target KB:** `[.roo/commander/modes/generic-component-stubber/kb/skills/]` (one skill per framework).

*   **Knowledge Domain 6: Framework-Specific Routing Configuration**
    *   **Relevance:** For `generic-routing-configurator`.
    *   **Specific Info/Skills:** How routing works in Next.js (App Router & Pages Router), SvelteKit (file-system), Vue Router, React Router DOM, Astro. Syntax for defining routes and linking components.
    *   **Target KB:** `[.roo/commander/modes/generic-routing-configurator/kb/skills/]` (one skill per framework).

*   **Knowledge Domain 7: Auth Integration Patterns (Placeholders)**
    *   **Relevance:** For `auth-placeholder-inserter`.
    *   **Specific Info/Skills:** Common placement for auth provider SDK initialization; typical environment variables needed for Clerk, Firebase Auth, Supabase Auth; example comments/stubs for protected routes or UI elements.
    *   **Target KB:** `[.roo/commander/modes/auth-placeholder-inserter/kb/skills/]` (one skill per auth provider/framework combo).

*   **Knowledge Domain 8: Testing Framework Setup (Jest, Vitest, Playwright basics)**
    *   **Relevance:** For `basic-test-environment-setup`.
    *   **Specific Info/Skills:** `package.json` devDependencies for Jest, Vitest, Playwright; basic config files (`jest.config.js`, `vitest.config.js`, `playwright.config.js`); example empty test file syntax; common test scripts for `package.json`.
    *   **Target KB:** `[.roo/commander/modes/basic-test-environment-setup/kb/skills/]` (one skill per testing framework).

*   **Knowledge Domain 9: Basic Dockerfile & Static Host Configuration Patterns**
    *   **Relevance:** For `basic-deployment-file-generator`.
    *   **Specific Info/Skills:** Minimal Dockerfile structure for Node.js apps (multi-stage builds); basic `vercel.json` or `netlify.toml` for common static site generators or SPA build outputs. Identifying build commands and public directories.
    *   **Target KB:** `[.roo/commander/modes/basic-deployment-file-generator/kb/skills/]`

*   **Knowledge Domain 10: Technical Writing for READMEs (Setup & Run Guides)**
    *   **Relevance:** For `readme-and-run-guide-writer`.
    *   **Specific Info/Skills:** Standard README sections for scaffolded projects; clear instructions for `npm install` and `npm run dev` (or equivalents); explaining basic project structure.
    *   **Target KB:** `[.roo/commander/modes/readme-and-run-guide-writer/kb/skills/]` and `kb/reference/` (for its output template `template_README_scaffolded_app.md`).

## 3. Information Gathering & Research Strategy 🔍

*(This section outlines general strategies. Specific research tasks would be MDTMs for `meta-kb-editor` or `agent-research`.)*

### 3.1. General Approach for Framework/Tool Specifics (Domains 2-9)
*   **Targeted For:** KBs of `web-app-tech-stack-advisor`, `generic-project-scaffolder`, `generic-component-stubber`, `generic-routing-configurator`, `auth-placeholder-inserter`, `basic-test-environment-setup`, `basic-deployment-file-generator`.
*   **Internal Sources Review:**
    *   Existing KBs of modes like `spec-npm` (for `package.json` details).
    *   Any existing utility scripts or notes in the workspace.
*   **External Research Plan (MCP & Manual):**
    *   **Key Questions for Research (Example for Next.js Scaffolding):**
        *   "What is the current recommended command to create a minimal Next.js app with TypeScript, ESLint, Tailwind CSS, App Router, and src directory?"
        *   "What are the essential `package.json` scripts for a new Next.js project?"
        *   "What is the minimal `next.config.js` for a new project?"
        *   "Basic Next.js App Router file structure for pages and layouts?"
        *   "How to set up Jest/Vitest with Next.js App Router?"
        *   "Minimal Dockerfile for a Next.js app?"
    *   **Suggested MCP Tools & Queries:**
        *   `[Tool: vertex-ai-mcp-server/answer_query_websearch]` - Queries like: "official next.js setup guide", "next.js tailwind setup", "next.js jest setup", "dockerize next.js app basic".
        *   `[Tool: fetch-mcp/get_url_content]` - URLs: Official documentation for Next.js, SvelteKit, Astro, Vite, React, Vue, Jest, Vitest, Playwright, Docker, Vercel, Netlify, Clerk, Firebase Auth, Supabase Auth.
        *   `[Tool: crawl4ai-mcp/crawl_website]` - Target: Official docs sites for deep dives into specific setup sections.
    *   **Repomix Consideration:** Analyze popular open-source starter kits for these frameworks on GitHub to identify common patterns and essential configuration files.
*   **Expected Output of this Research:**
    *   A series of detailed `skill` articles for each relevant mode's KB, outlining step-by-step procedures for specific frameworks/tools.
    *   `reference` articles summarizing key commands, file structures, or configuration options.

### 3.2. Information/Skill: Requirements Elicitation & README Writing (Domains 1, 10)
*   **Targeted For:** KBs of `web-app-requirements-clarifier`, `readme-and-run-guide-writer`.
*   **Internal Sources Review:** `[.roo/commander/docs/standards/06-documentation-style-guide.md]`.
*   **External Research Plan (MCP & Manual):**
    *   **Key Questions:** "Best practices for writing project READMEs," "How to write effective 'Getting Started' guides," "Techniques for eliciting software requirements for MVPs/scaffolds."
    *   **Suggested MCP Tools:** Web search for articles on technical writing and requirements engineering.
*   **Expected Output:** `skill` and `wisdom` articles for these modes' KBs.

## 4. Proposed Knowledge Base (KB) Structure for the Squad 🏗️

*   Each of the 10 squad members will have its own KB.
*   The primary content will be in `skills/`, detailing "how-to" for specific frameworks and tasks.
*   `reference/` will hold quick lookups (e.g., CLI commands, config options).
*   `wisdom/` will contain best practices (e.g., "Keeping scaffolds minimal").
*   `examples/` will show snippets of generated files (e.g., an example `Dockerfile` stub, a sample `package.json`).

## 5. Research Execution & Coordination 🚀

*   **Responsibility:** `{{ research_coordinator_proposed }}` will assign MDTM tasks to `meta-kb-editor` (or `agent-research`) to research specific technologies and draft the initial KB articles for each squad member.
*   **Timeline (Conceptual):** Foundational KB articles for 1-2 core frameworks (e.g., Next.js, Vite/React) should be prioritized to make the squad minimally viable. Other frameworks can be added iteratively.
*   **Deliverables:** A set of initial KB articles for each of the 10 squad members, focusing on their core skills for the chosen initial frameworks.

This plan will guide the foundational knowledge acquisition for the `{{ squad_unit_name_ref }}`, enabling its members to perform their specialized scaffolding tasks effectively across various technologies.