+++
# --- n8n Workflow Critique Prompt ---
id = "PROMPT-Critique-n8nWorkflow-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Critique-n8nWorkflow-20250525130000
title = "n8n Workflow Design Critique & Enhancement Request"
prompt_type = "critique_and_improvement"
domain = "automation_n8n"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "critique", "n8n", "workflow_automation", "automation_design", "process_improvement"]
# related_schema_doc = ".roo/commander/docs/prompts/critique/prompt_04_n8n_workflow_critique.README.md" # Link to its own README
+++

Subject: **Critical Review & Enhancement Request for n8n Workflow: [Name/Purpose of the Workflow]**

I require your advanced critical analysis of an n8n workflow designed for **[Name/Purpose of the Workflow, e.g., 'Automated Customer Onboarding', 'Daily Sales Report Generation', 'Social Media Post Scheduling']**.

**1. Workflow Overview & Purpose:**
   *   **Primary Goal(s):** [Clearly state what the workflow is intended to achieve. What process does it automate? What is the desired outcome?]
   *   **Trigger(s):** [How is the workflow initiated? (e.g., Webhook, Cron schedule, Manual execution, Event from another app like Google Sheets, Stripe event).]
   *   **Key Applications/Services Involved:** [List the main apps or services the workflow interacts with (e.g., HubSpot, Slack, Google Drive, OpenAI, a custom API).]
   *   **Expected Volume/Frequency:** [How often is this workflow expected to run? How many items or executions per run on average/peak?]

**2. Workflow Details / Representation:**

[Please provide the workflow details in one or more of the following ways. The more detail, the better the critique.]

*   **(Preferred) JSON Export:**
    ```json
    // Paste the JSON export of your n8n workflow here.
    // This provides the most complete information for analysis.
    // Example snippet:
    // {
    //   "name": "My Workflow",
    //   "nodes": [
    //     {
    //       "parameters": {},
    //       "name": "Start",
    //       "type": "n8n-nodes-base.start",
    //       "typeVersion": 1,
    //       "position":
    //     },
    //     // ... more nodes
    //   ],
    //   "connections": {
    //     // ... node connections
    //   }
    // }
    ```

*   **(Alternative) Textual Description of Nodes & Connections:**
    [If JSON is not feasible, describe the sequence of nodes, their types, key configurations, and how they are connected. For example:
    1.  **Trigger:** Webhook node, receives POST requests.
    2.  **HTTP Request Node:** GETs data from `https://api.example.com/data` using API key from credentials.
    3.  **IF Node:** Checks if `response.data.status == "completed"`.
        *   **True Path:**
            1.  **Set Node:** Extracts `response.data.user_email`.
            2.  **Gmail Node:** Sends email to `user_email` with a success message.
        *   **False Path:**
            1.  **Slack Node:** Sends an error message to `#alerts` channel.
    4.  **NoOp Node (End):** Marks successful completion (if applicable).]

*   **(Optional) Link to Screenshots:** [If helpful, provide links to screenshots of the workflow, especially for complex visual layouts, but this should supplement JSON or text, not replace it.]

**3. Request for Critical Analysis & Improvement Suggestions:**

I need you to operate as an expert n8n developer and automation specialist. Assume my current workflow design may have inefficiencies, potential failure points, or areas that don't follow best practices. My goal is to create a robust, efficient, scalable, maintainable, and secure n8n workflow.

Please rigorously analyze the provided workflow details and provide feedback on:

*   **A. Logic & Correctness:**
    *   Does the workflow logic correctly implement the intended process and achieve the stated goals?
    *   Are there any logical flaws, race conditions, or incorrect assumptions in the flow?
    *   Are edge cases and potential variations in input data handled appropriately?

*   **B. Efficiency & Performance:**
    *   Are there any unnecessary nodes or steps that could be consolidated or removed?
    *   Is data being processed efficiently? (e.g., avoiding processing large datasets in memory if not needed, using batching where appropriate).
    *   Are there any nodes or configurations known to be performance bottlenecks that could be optimized?
    *   Could any parts of the workflow run in parallel to improve speed if applicable?

*   **C. Error Handling & Resilience:**
    *   How robust is the error handling? Are "Error Workflow" triggers or try-catch patterns used effectively?
    *   What happens if an API call fails, a service is unavailable, or data is malformed? Does the workflow retry, alert, or fail gracefully?
    *   Are there specific error scenarios that seem unhandled?

*   **D. Scalability:**
    *   How well will the workflow perform if the volume of executions or data increases significantly?
    *   Are there any limitations (e.g., API rate limits, n8n instance resources) that the current design might hit?

*   **E. Maintainability & Readability:**
    *   Is the workflow easy to understand and follow? Are nodes clearly named? Are comments or NoOp nodes used effectively for documentation?
    *   Is the workflow overly complex? Could it be broken down into smaller, reusable sub-workflows (Execute Workflow node)?
    *   How easy would it be for another developer to debug or modify this workflow?

*   **F. Security:**
    *   Are credentials for services handled securely using n8n's built-in credential management?
    *   Is sensitive data appropriately masked or avoided in logs if "Save Execution Data" is enabled?
    *   If the workflow is triggered by a webhook, are there any security measures (e.g., authentication, IP whitelisting) in place or needed?

*   **G. Use of n8n Best Practices:**
    *   Are built-in n8n nodes used where appropriate, rather than relying heavily on Function/Code nodes for tasks that standard nodes can handle?
    *   Is data passed between nodes in an optimal way (e.g., using appropriate expressions, avoiding overly complex data transformations in single nodes)?
    *   Is the "Split in Batches" node used correctly for large datasets?
    *   Is "Merge" node logic sound?

*   **H. Cost-Effectiveness (if applicable):**
    *   Does the workflow make efficient use of paid API calls or services to minimize costs?
    *   Are there alternative approaches that could achieve the same outcome more cost-effectively?

*   **I. Overall Design & Cohesion:**
    *   Does the workflow feel well-structured and thoughtfully designed?
    *   What are the biggest risks or weaknesses in the current design?
    *   What are the top 3-5 actionable recommendations you would make to significantly improve this n8n workflow?

I am looking for a **transformative critique** that challenges my current design and provides practical, actionable insights. Please be direct, thorough, and provide justifications for your recommendations.