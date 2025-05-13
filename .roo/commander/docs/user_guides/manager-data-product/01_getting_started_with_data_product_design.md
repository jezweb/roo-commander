# User Guide: Getting Started with Data Product Design PoC

Welcome! This guide will walk you through the step-by-step process of using Roo Commander V8 and its specialized `manager-data-product` to design a Proof of Concept (PoC) for a new data product. By following this workflow, you'll move from an initial idea to a comprehensive PoC plan.

**Goal:** To produce a `data_product_poc_plan.md` document that outlines the strategy, scope, user personas, data requirements, and conceptual interface for your data product PoC.

**Estimated Time:** Variable, depending on the complexity of your idea and the depth of discussion at each stage. Expect multiple interactions.

## Prerequisites

*   A working Roo Code environment with Roo Commander V8 and the `manager-data-product` (and its squad) modes installed and configured.
*   An initial idea or problem statement for a data product you want to explore.

## The Workflow at a Glance

The `manager-data-product` will guide you (by orchestrating its squad of specialist modes) through the following key phases:

1.  **Strategy Definition:** Clarifying the vision, objectives, and value proposition.
2.  **PoC Ideation:** Brainstorming features and defining the PoC scope.
3.  **UX Persona Development:** Understanding your target users.
4.  **Simulated Data Design:** Defining the data needed for the PoC.
5.  **PoC Interface Conceptualization:** Sketching out how users will interact with the PoC.
6.  **PoC Plan Consolidation:** Bringing all elements together into a final plan.

Let's begin!

---

## Step 1: Initiating the Data Product Design Workflow

1.  **Invoke Roo Commander:** In your Roo Code environment, start by calling `@roo-commander`.
    ```prompt
    @roo-commander I'd like to start designing a new data product PoC.
    ```
2.  **Select "Start New Design/Workflow Session":**
    `roo-commander` will greet you and present initial options. Choose the option similar to:
    `🚀 Start New Design / Workflow Session...`

3.  **Select "Data Product Design PoC":**
    `roo-commander` will then ask what type of design or workflow you want to start. Choose:
    `📊 Data Product Design PoC` (or the equivalent text presented).

4.  **Start a New Session:**
    `roo-commander` will likely ask if you want to use an existing session or start a new one. For a new PoC design, it's usually best to start a new session.
    *   Select the option to "Start a new session."
    *   Provide a clear **goal or title** for this session when prompted by `roo-commander`. This will be used to name your session directory.
        *   *Example:* "Design PoC for Member Churn Prediction Model"
    *   `roo-commander` will confirm the session has started (e.g., "New session 'Design PoC for Member Churn Prediction Model' (ID: SESSION-...) has been started..."). It will then inform you that it's delegating the work to `@manager-data-product`.

    *(Behind the scenes: `roo-commander` creates a session directory, a `session_log.md`, and a top-level MDTM task for `@manager-data-product`.)*

## Step 2: Engaging with `@manager-data-product` and its Squad

Once `@manager-data-product` is activated, it will take the lead. It will manage a sequence of interactions, each handled by a specialist "squad member" mode. For each phase, the Manager will create an MDTM task for the specialist, and that specialist will interact with you (via the Manager) to complete its part of the design.

### Phase 2.1: Strategy Definition with `@data-product-strategist`

1.  **Introduction:** `@manager-data-product` will inform you that the first phase is Strategy Definition and that `@data-product-strategist` will assist.
2.  **Interaction:** `@data-product-strategist` (coordinated by the Manager) will ask you questions to define:
    *   The business problem or opportunity.
    *   SMART objectives for your data product PoC.
    *   The primary target audience and stakeholders.
    *   The core value proposition.
    *   Alignment with broader business goals.
3.  **Output:** A `product_strategy.md` document will be created within your session's `artifacts/design_outputs/[YourProductName]/` directory.
    *   *Review this document carefully with the AI to ensure it accurately captures your strategic intent.*

### Phase 2.2: PoC Ideation with `@data-product-ideator`

1.  **Introduction:** `@manager-data-product` will introduce `@data-product-ideator`.
2.  **Interaction:** Using the `product_strategy.md` as input, `@data-product-ideator` will help you:
    *   Brainstorm specific features and functionalities.
    *   Prioritize features for the PoC.
    *   Define what's in and out of scope for the PoC.
    *   Outline conceptual data requirements.
    *   Think about initial PoC success metrics.
3.  **Output:** A `poc_ideation.md` document will be created.

### Phase 2.3: UX Persona Development with `@data-product-ux-persona-architect`

1.  **Introduction:** `@manager-data-product` will introduce `@data-product-ux-persona-architect`.
2.  **Interaction:** Based on the strategy and PoC scope, this mode will guide you in creating 1-2 key user personas, detailing their:
    *   Goals and motivations.
    *   Pain points.
    *   Typical data interaction journeys.
3.  **Output:** One or more `user_persona_[name].md` documents.

### Phase 2.4: Simulated Data Design with `@data-product-simdata-designer`

1.  **Introduction:** `@manager-data-product` will introduce `@data-product-simdata-designer`.
2.  **Interaction:** This mode will help you:
    *   Define a clear schema (field names, data types) for the data needed to power your PoC.
    *   Discuss data characteristics and patterns that would make the PoC meaningful (even though it's simulated).
    *   Describe or assist in generating sample data (e.g., as a CSV or JSON description).
3.  **Output:** A `simulated_data_schema.md` document and a description or file for the sample data.

### Phase 2.5: PoC Interface Conceptualization with `@data-product-poc-interface-architect`

1.  **Introduction:** `@manager-data-product` will introduce `@data-product-poc-interface-architect`.
2.  **Interaction:** Using the personas and simulated data, this mode will help you:
    *   Outline key interface components (dashboards, charts, tables, filters).
    *   Choose appropriate visualization types.
    *   Sketch a conceptual layout (textually or with simple Markdown/ASCII wireframes).
3.  **Output:** A `poc_interface_design.md` document.

### Phase 2.6: PoC Plan Consolidation with `@data-product-poc-documenter`

1.  **Introduction:** `@manager-data-product` will introduce `@data-product-poc-documenter`.
2.  **Interaction:** This mode will take all the previously created artifacts (`product_strategy.md`, `poc_ideation.md`, persona files, data schema, interface design) and:
    *   Guide you in structuring a comprehensive PoC plan.
    *   Help draft content for each section, summarizing the inputs.
    *   Optionally, assist in creating a very high-level PoC development roadmap.
3.  **Output:** The final **`data_product_poc_plan.md`** document. This is the primary deliverable of the entire workflow!

## Step 3: Reviewing Your Data Product PoC Plan

1.  **Final Output:** Once `@data-product-poc-documenter` completes its work, `@manager-data-product` will report that the overall Data Product Design PoC workflow is complete.
2.  **Locate the Plan:** Your `data_product_poc_plan.md` will be located in your session's `artifacts/design_outputs/[YourProductName]/` directory. The exact path will also be logged in the `output_artifacts` field of the MDTM task for `@manager-data-product` and likely referenced in the `session_log.md`.
3.  **Review Thoroughly:** Read through the entire plan. Does it accurately reflect your vision and the discussions from each phase?
4.  **Next Steps:** This PoC plan can now be used for:
    *   Seeking stakeholder buy-in.
    *   Guiding the actual development of the Proof of Concept.
    *   Serving as a foundational document for further product development.

## Step 4: Concluding the Session

Once you are satisfied with the PoC Plan and have no further immediate tasks for this design session:

1.  **Inform Roo Commander:** You can tell `@roo-commander` something like:
    ```prompt
    @roo-commander We've completed the Data Product PoC Plan for session [Your Session ID]. Please end this session.
    ```
2.  **Session End:** `roo-commander` will guide you through ending the session, marking its `session_log.md` as "🏁 Completed."

---

Congratulations! You've successfully used Roo Commander V8 and the `manager-data-product` to create a detailed Proof of Concept plan for your data product idea. Remember that all artifacts, logs, and the final plan are stored within your session directory for future reference.