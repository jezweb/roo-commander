# --- Basic Metadata ---
id = "DOC-USAGE-GUIDE-001"
title = "IntelliManage: Usage Guidelines & Best Practices"
status = "draft"
doc_version = "1.0"
content_version = 1.0
audience = ["users", "developers", "project_managers"]
last_reviewed = "2025-04-28" # Use current date
template_schema_doc = ".ruru/templates/toml-md/10_guide_tutorial.README.md" # Using the guide template schema
tags = ["intellimanage", "usage", "guide", "best-practices", "project-management", "agile", "ai"]
related_docs = ["DOC-ARCH-001", "DOC-FS-SPEC-001", "DOC-SCHEMA-001", "DOC-FUNC-SPEC-001", "DOC-METHODOLOGY-GUIDE-001", "DOC-AI-SPEC-001", "DOC-GITHUB-SPEC-001", "DOC-UI-CMD-SPEC-001", "DOC-SETUP-GUIDE-001"] # Link to all previous specs
difficulty = "beginner" # Aimed at new users
estimated_time = "~20-30 minutes"
prerequisites = ["IntelliManage initialized in workspace (See DOC-SETUP-GUIDE-001)"]
learning_objectives = ["Understand how to effectively create and manage project artifacts", "Learn best practices for using different methodologies within IntelliManage", "Know how to leverage AI features effectively", "Understand tips for GitHub integration and multi-project workflows"]
+++

# IntelliManage: Usage Guidelines & Best Practices

## 1. Introduction / Goal 🎯

This guide provides practical tips and best practices for effectively using the IntelliManage project management framework within your development environment. Following these guidelines will help you and your team maintain clarity, consistency, and traceability across your projects, while making the most of the integrated AI capabilities.

The goal is to help you manage your work efficiently, keep project artifacts up-to-date, and leverage IntelliManage to support your chosen development methodology.

## 2. Getting Started: Setting Your Context 📌

*   **Activate Your Project:** If you're working in a multi-project workspace, remember to set your active project context using `!pm set-active <project_slug>`. This ensures commands operate on the correct project by default.
*   **Know Your Config:** Briefly check your project's `.ruru/projects/[project_slug]/project_config.toml` file to understand the configured methodology (`Scrum`, `Kanban`, `Custom`, `None`) and any custom settings.

## 3. Managing Project Artifacts Effectively 📝

IntelliManage relies on well-defined artifacts. Here's how to manage them:

*   **Clear Titles:** Use concise but descriptive titles for Initiatives, Epics, Features, Tasks, Stories, and Bugs. Include keywords that make searching easier.
    *   *Good:* `TASK-101_Implement user login API endpoint`
    *   *Less Good:* `TASK-101_Login work`
*   **Detailed Descriptions:** Use the Markdown body to explain the *what* and *why*. Provide necessary background context, especially for Epics and Features. For Tasks/Stories/Bugs, clearly describe the work required or the problem observed.
*   **Actionable Acceptance Criteria (AC):** This is crucial! Define AC as specific, testable conditions that must be met for an item to be considered "Done". Use checklists (`- [ ]`).
    *   *Good AC:* `- [ ] User sees success message upon valid login.`
    *   *Good AC:* `- [ ] API returns 401 error for invalid credentials.`
    *   *Less Good AC:* `- [ ] Login works.`
*   **Use Subtasks for Granularity:** For complex Tasks/Stories, break down implementation steps into subtasks using Markdown checklists (`- [ ]`) within the main artifact's body. This helps track progress without creating excessive individual task files. Check items off (`- [x]`) as you complete them using `!pm update task TASK-ID --check-subtask "Subtask description"`.
*   **Link Hierarchically:** Always link Features to Epics (`--epic <ID>`) and Tasks/Stories/Bugs to Features (`--feature <ID>`) during creation or using `!pm link`. This maintains traceability. The AI can often suggest parent links based on context.
*   **Use `depends_on` Sparingly:** Only use the `depends_on` field for critical sequential dependencies between tasks. Overusing it can create unnecessary complexity.
*   **Tagging:** Use relevant `tags` in the TOML frontmatter for filtering and categorization (e.g., `["ui", "auth", "react"]`, `["backend", "performance", "database"]`). Define common tags in your project or workspace config if needed.
*   **Keep Status Updated:** Regularly update the `status` field using `!pm update ... --status "..."`. This is vital for accurate reporting and visualization (Kanban boards, burndown charts). Let the AI suggest updates based on commits/PRs/chat, but always confirm.

## 4. Working with Methodologies 🔄📊

*   **Scrum:**
    *   Use Epics/Features for the Product Backlog.
    *   During Sprint Planning, create/select Stories/Tasks and assign them the correct `sprint_id` in their TOML.
    *   Keep task statuses updated (`To Do` -> `In Progress` -> `Review` -> `Done`) throughout the sprint.
    *   Use AI reporting (`!pm report burndown ...`) to track progress.
*   **Kanban:**
    *   Focus on moving items smoothly through the defined `status` columns (standard or custom).
    *   Keep statuses accurate to reflect the real workflow.
    *   Use AI reporting (`!pm board`, `!pm report cfd`) to visualize flow and identify bottlenecks (items stuck in a column).
    *   Be mindful of WIP Limits (if configured) – the AI can warn you if limits are exceeded.
*   **Custom:**
    *   Ensure your team understands the custom statuses defined in `project_config.toml`.
    *   Use the AI's reporting features, which will adapt to your custom states.

## 5. Leveraging the AI Assistant 🤖

*   **Artifact Generation:** Ask the AI to create draft artifacts (`!pm create ...` or natural language). Provide clear goals and context. Review and refine the AI's output (especially descriptions and ACs).
*   **Linking Suggestions:** Pay attention when the AI suggests linking related items. Confirm correct links to maintain hierarchy.
*   **Status Update Suggestions:** Confirm AI suggestions for status updates based on commits or chat. This keeps the system synchronized with actual progress.
*   **Reporting:** Use the `!pm report` and `!pm board` commands frequently to gain insights tailored to your methodology.
*   **Guidance:** Ask the AI for help with structuring work, writing ACs, or understanding IntelliManage features (`!pm help`).
*   **Refinement Prompts:** If the AI generates suboptimal content, provide specific feedback to refine it (e.g., "Rewrite the acceptance criteria for TASK-123 to be more specific and testable").

## 6. GitHub Integration Best Practices 🔗

*   **Enable Selectively:** Only enable sync (`github_integration.enable_sync = true`) for projects where you actively want to manage work across both platforms.
*   **Consistent Updates:** Try to update either IntelliManage *or* GitHub, not both simultaneously, to minimize sync conflicts (unless using `"manual_flag"` resolution).
*   **Use Linking Keywords:** Reference IntelliManage IDs in commit messages and PR descriptions using configured keywords (e.g., `Fixes TASK-123`, `Refs EPIC-005`) to automatically link development work and potentially trigger status updates.
*   **Leverage Labels:** Use the mapped GitHub labels (e.g., `PM:Status:InProgress`, `PM:Type:Bug`) for filtering and visualization within GitHub. Avoid manually creating labels that conflict with the configured prefixes unless intended.
*   **Milestones:** Keep Epic/Feature `target_date` or `milestone_target_date` updated if syncing with GitHub Milestones.

## 7. Managing Multiple Projects 🏢

*   **Use `set-active`:** Remember to set the active project context when switching between projects.
*   **Specify `--project`:** Use the `--project <slug>` flag in commands when you need to explicitly target a project other than the active one.
*   **Cross-Project Linking:** Use the `"project_slug:TYPE-ID"` format in `depends_on` fields if tasks in one project depend on work in another.
*   **Workspace Config:** Use `.ruru/projects/projects_config.toml` to list projects for easier discovery by tools/AI.

## 8. General Tips ✨

*   **Keep it Current:** Update artifact statuses and details regularly. Stale information reduces the system's value.
*   **Version Control:** Treat your `.ruru/projects/` directory like code – commit changes frequently with meaningful messages.
*   **Communicate:** While IntelliManage helps track work, it doesn't replace communication. Discuss complex issues or dependencies with your team.
*   **Use Templates:** Leverage the built-in templates (or create your own) for consistency when creating new artifacts.
*   **Experiment:** Explore the different commands and AI features to find what works best for your workflow.

## 9. Conclusion ✅

IntelliManage provides a powerful, integrated system for managing your development projects. By following these guidelines – writing clear artifacts, keeping statuses updated, leveraging the AI assistant thoughtfully, and using integrations effectively – you can significantly improve project organization, visibility, and efficiency directly within your development environment.