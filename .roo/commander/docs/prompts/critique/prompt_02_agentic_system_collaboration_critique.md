+++
# --- Agentic System Collaboration Critique Prompt ---
id = "PROMPT-Critique-AgenticSystemCollab-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Critique-AgenticSystemCollab-20250525110000
title = "Agentic System Collaboration Design Critique & Enhancement Request"
prompt_type = "critique_and_improvement"
domain = "agentic_systems_collaboration"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "critique", "agentic_systems", "multi_agent_systems", "collaboration_design", "ai_systems"]
# related_schema_doc = ".roo/commander/docs/prompts/critique/prompt_02_agentic_system_collaboration_critique.README.md" # Link to its own README
+++

Subject: **Critical Review & Enhancement Request for Agentic System Collaboration Design: [Name of Your Agentic System]**

I require your advanced critical analysis of the collaboration design for an agentic system named **[Name of Your Agentic System]**. This system involves multiple AI agents working together to achieve a common objective.

**1. System Overview & Purpose:**
   *   **Overall System Goal(s):** [Clearly state what the entire multi-agent system is intended to achieve. What overarching problem does it solve or what collective value does it provide?]
   *   **Number of Agents & Their Primary Roles:** [Briefly list the distinct agents involved and their main individual responsibilities or specializations within the system. e.g., Agent A: Data Collection, Agent B: Analysis, Agent C: Reporting]

**2. Collaboration Design Details & Current Specifications:**
   *   **Key Collaborative Tasks/Workflows:** [Describe the main tasks or workflows that require collaboration between agents. How do agents depend on each other?]
   *   **Communication Protocols & Mechanisms:** [How do agents communicate with each other? (e.g., direct messaging, shared message queues, blackboard system, specific API calls, standardized data formats). Specify message types if defined.]
   *   **Task Allocation & Distribution Strategy:** [How are tasks assigned to specific agents? Is it centralized, decentralized, based on capabilities, load, or another method?]
   *   **Shared Knowledge/Context Management:** [How do agents access and maintain shared information or context necessary for collaboration? (e.g., shared database, distributed ledger, knowledge graph, state synchronization mechanisms).]
   *   **Conflict Resolution Mechanisms (if any):** [If agents can have conflicting goals, information, or resource needs, how are these conflicts currently planned to be resolved? (e.g., voting, hierarchical decision, negotiation protocol).]
   *   **Coordination & Synchronization Strategies:** [How is the timing and sequencing of collaborative actions managed? Are there specific synchronization points or coordination protocols?]
   *   **(Optional) Attach or link to any existing system architecture diagrams, sequence diagrams, API definitions for inter-agent communication, or state machine descriptions.**

**3. Request for Critical Analysis & Improvement Suggestions:**

I need you to operate as an expert in distributed AI systems, multi-agent collaboration, and complex systems design. Assume my current collaboration design may have significant oversights, inefficiencies, potential deadlocks, or race conditions. My goal is to create a robust, efficient, scalable, and reliable multi-agent system.

Please rigorously analyze the provided collaboration design and provide detailed feedback on the following aspects:

*   **A. Clarity of Roles & Responsibilities:**
    *   Are the roles and responsibilities of each agent clearly defined and distinct to avoid overlap or gaps in collaborative tasks?
    *   Are there any ambiguities in how agents should interact or hand off tasks?

*   **B. Communication Effectiveness & Efficiency:**
    *   Are the chosen communication protocols suitable for the types of information being exchanged and the required speed/reliability?
    *   Is the communication overhead acceptable? Are there potential bottlenecks in communication channels?
    *   Is the message content and format well-defined, unambiguous, and sufficient for effective collaboration?

*   **C. Task Allocation & Load Balancing:**
    *   Is the task allocation strategy fair, efficient, and adaptable to changing loads or agent availability?
    *   Are there risks of certain agents becoming overloaded while others are underutilized?
    *   How does the system handle task allocation if an agent fails or becomes unresponsive?

*   **D. Shared Knowledge Management:**
    *   Is the mechanism for managing shared knowledge robust, consistent, and scalable?
    *   What are the risks of data staleness, inconsistency, or corruption in the shared context?
    *   Is access control to shared knowledge appropriately managed?

*   **E. Conflict Resolution & Negotiation:**
    *   Are the conflict resolution mechanisms (if any) clearly defined and likely to be effective?
    *   What happens if conflicts cannot be resolved? Are there escalation paths or deadlock prevention strategies?
    *   Could the current design lead to undesirable emergent behaviors due to conflicting agent goals?

*   **F. System Scalability & Resilience:**
    *   How well will the collaboration design scale if the number of agents, tasks, or data volume increases?
    *   How does the system handle the failure or temporary unavailability of one or more agents during a collaborative task?
    *   Are there single points of failure in the collaboration mechanisms?

*   **G. Security in Inter-Agent Communication:**
    *   Are there security considerations for inter-agent communication (e.g., authentication, authorization, message integrity, confidentiality) that need to be addressed?
    *   Could a compromised agent disrupt the collaboration or access sensitive information from other agents?

*   **H. Monitoring, Debugging & Observability:**
    *   How easily can the collaborative workflows be monitored and debugged?
    *   Are there mechanisms to trace task execution across multiple agents?
    *   What metrics would be important for assessing the health and performance of inter-agent collaboration?

*   **I. Emergent Behavior & System Stability:**
    *   Are there any potential negative emergent behaviors that could arise from the interactions of these agents as designed?
    *   How stable is the overall system likely to be under various conditions (e.g., high load, partial failures)?

*   **J. Overall Cohesion & Effectiveness:**
    *   Does the collaboration design create a cohesive system where agents effectively work together towards the overall goal?
    *   What are the biggest risks to the success of the system's collaborative aspects?
    *   What are the top 3-5 actionable recommendations you would make to significantly improve this agentic system's collaboration design?

I am looking for a **transformative critique** that challenges my assumptions and provides concrete, actionable insights for building a more robust and effective multi-agent system. Please be direct, thorough, and provide justifications for your recommendations. Identify blind spots and offer alternative perspectives.