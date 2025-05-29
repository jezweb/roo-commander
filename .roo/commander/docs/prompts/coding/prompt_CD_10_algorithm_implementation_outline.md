+++
# --- Algorithm Implementation Outline Prompt ---
id = "PROMPT-Coding-AlgoOutline-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-AlgoOutline-PyBFS-20250528150000
title = "Algorithm Implementation Outline Request"
prompt_type = "outline_technical_code_algorithm"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "algorithm", "pseudocode", "implementation_plan", "data_structures", "problem_solving"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_10_algorithm_implementation_outline.README.md" # Link to its own README
+++

Subject: **Algorithm Implementation Outline Request: [Name of Algorithm] in [Language/Context]**

I require a high-level outline or pseudocode for implementing the **[Name of Algorithm, e.g., Breadth-First Search (BFS), QuickSort, Dijkstra's Algorithm, K-Means Clustering]** in **[Programming Language or general context, e.g., Python, JavaScript, general pseudocode, for a graph data structure]**.

**1. Algorithm & Implementation Context:**
   *   **Algorithm Name:** `[Clearly state the name of the algorithm.]`
   *   **Brief Description of Algorithm's Purpose:** [What problem does this algorithm solve or what does it compute?]
       e.g., "Finds the shortest path between nodes in an unweighted graph."
       e.g., "Sorts an array of elements in ascending order."
       e.g., "Partitions a dataset into K distinct non-overlapping clusters."
   *   **Target Programming Language (if specific, otherwise "Pseudocode"):** `[e.g., Python, JavaScript, Java, C++, Pseudocode]`
   *   **Key Data Structures Involved:** [What are the primary data structures the algorithm will operate on or use internally? Describe their assumed representation if important.]
       e.g., "Graph represented by an adjacency list (dictionary of lists)."
       e.g., "An array/list of numbers."
       e.g., "A list of data points, each represented as a vector or object."
   *   **Inputs to the Algorithm Implementation:** [What are the expected inputs to the function/method that will implement this algorithm?]
       e.g., "Inputs: Adjacency list representing the graph, a starting node."
       e.g., "Input: An unsorted list of integers."
   *   **Outputs of the Algorithm Implementation:** [What should the function/method return or produce?]
       e.g., "Output: A list of nodes in BFS traversal order, or a dictionary of distances from the start node."
       e.g., "Output: The same list of integers, sorted."
   *   **Specific Variations or Constraints (if any):** [Are there any particular versions of the algorithm, or constraints to consider? (e.g., "Iterative version of BFS, not recursive," "In-place QuickSort," "Handle weighted edges for Dijkstra's").]

**2. Desired Level of Detail for Outline/Pseudocode:**
   *   [Specify preference: e.g., "High-level steps only," "Detailed pseudocode including loop structures and key variable manipulations," "Focus on the main logic flow and data structure interactions."]

**3. Request for Algorithm Outline/Pseudocode:**

Please provide a clear, step-by-step outline or pseudocode for implementing the **[Re-state Algorithm Name]**. The outline should:

*   Break down the algorithm into its main logical components or phases.
*   Describe the key operations performed in each step.
*   Mention important variables or data structures used and how they are manipulated.
*   Highlight any crucial conditions, loops, or recursive calls.
*   Be easy to understand and serve as a guide for actual code implementation in **[Re-state Target Language or "Pseudocode"]**.

If there are common pitfalls or important considerations when implementing this algorithm, please briefly note them.