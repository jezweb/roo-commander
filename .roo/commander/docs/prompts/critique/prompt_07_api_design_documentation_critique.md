+++
# --- API Design & Documentation Critique Prompt ---
id = "PROMPT-Critique-APIDesignDocs-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Critique-APIDesignDocs-20250525160000
title = "API Design & Documentation Critique & Enhancement Request"
prompt_type = "critique_and_improvement"
domain = "api_design_documentation"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "critique", "api", "api_design", "api_documentation", "rest_api", "graphql", "developer_experience"]
# related_schema_doc = ".roo/commander/docs/prompts/critique/prompt_07_api_design_documentation_critique.README.md" # Link to its own README
+++

Subject: **Critical Review & Enhancement Request for API Design & Documentation: [Name of Your API]**

I require your advanced critical analysis of the design and documentation for an API named **[Name of Your API]**.

**1. API Overview & Purpose:**
   *   **Primary Goal(s):** [Clearly state what the API allows consumers to do. What problem does it solve or what capabilities does it expose?]
   *   **Target Consumers:** [Who is intended to use this API? (e.g., Internal developers, external partners, public developers, specific applications).]
   *   **Type of API:** [e.g., REST, GraphQL, gRPC, SOAP, etc.]
   *   **Core Domain/Business Area:** [e.g., E-commerce, User Management, Data Analytics, IoT Device Control.]

**2. API Design & Documentation Details:**

*   **Link to API Documentation / Specification:**
    [Provide a direct link to the API documentation. This could be an OpenAPI/Swagger UI, a Postman collection link, a GitHub repository with Markdown files, a Confluence page, etc.
    e.g., `https://api.example.com/docs` or `Link to OpenAPI JSON/YAML file`]
    If a direct link isn't possible, describe how to access the documentation.

*   **(If documentation is not comprehensive, or for specific focus) Key Resources/Endpoints & Functionalities:**
    [List or describe a few key resources or endpoints and their main functionalities that you want a particular focus on.
    e.g.,
    - `POST /users` - Create a new user.
    - `GET /users/{id}` - Retrieve a user by ID.
    - `GET /products?category={category_id}` - List products with filtering.]

*   **Authentication & Authorization Mechanisms:** [Briefly describe how consumers authenticate (e.g., API Keys, OAuth 2.0, JWT) and what authorization model is used (e.g., role-based access control).]
*   **Rate Limiting & Pagination Strategies (if applicable):** [Describe how rate limiting is handled and how large datasets are paginated in responses.]
*   **Versioning Strategy:** [How is the API versioned? (e.g., URL path, custom header, query parameter).]
*   **(Optional) Example Request & Response for a Key Endpoint:**
    ```json
    // Request to: POST /orders
    // {
    //   "customerId": "cust_123",
    //   "items": [
    //     {"productId": "prod_abc", "quantity": 2}
    //   ]
    // }

    // Example Response (201 Created):
    // {
    //   "orderId": "ord_789",
    //   "status": "pending",
    //   "totalAmount": 59.98
    // }
    ```

**3. Request for Critical Analysis & Improvement Suggestions:**

I need you to operate as an expert API designer, technical writer, and developer advocate. Assume the current API design and its documentation may have significant flaws in usability, clarity, completeness, consistency, or adherence to best practices. My goal is to create a world-class API that is a pleasure for developers to use and integrate with.

Please rigorously analyze the provided API design and documentation, and provide detailed feedback on:

*   **A. Design Principles & Conventions (e.g., RESTfulness if a REST API):**
    *   Resource Naming & URI Structure: Are they intuitive, hierarchical, and consistent?
    *   HTTP Method Usage (for REST): Correct use of GET, POST, PUT, DELETE, PATCH, etc.
    *   Status Code Usage: Appropriate and specific HTTP status codes for success, errors, and other conditions.
    *   Idempotency: Are operations that should be idempotent designed as such?

*   **B. Clarity & Consistency:**
    *   Naming Conventions: Consistent use of casing (e.g., camelCase, snake_case) for parameters, fields, and resources.
    *   Data Formats: Consistent use of data types (e.g., date formats, enums).
    *   Error Responses: Consistent structure for error messages across all endpoints.

*   **C. Ease of Use & Developer Experience (DX):**
    *   Intuitiveness & Predictability: Can developers anticipate how endpoints will behave?
    *   Learning Curve: How easy is it for a new developer to understand and start using the API?
    *   Are there any overly complex request/response structures or authentication hurdles?

*   **D. Completeness & Accuracy of Documentation:**
    *   Are all endpoints, parameters (path, query, header, body), and responses fully documented?
    *   Are data types, constraints (e.g., required, max length, enums), and default values clearly specified?
    *   Is the documentation accurate and up-to-date with the API's actual behavior?
    *   Are authentication methods clearly explained with examples?

*   **E. Request & Response Design:**
    *   Payload Structure: Is it clear, concise, and well-organized? Is there unnecessary data or excessive nesting?
    *   Are request parameters easy to understand and use?
    *   Does the API support common needs like filtering, sorting, and selecting fields in responses where appropriate?

*   **F. Error Handling & Reporting in API & Docs:**
    *   Clarity of Error Messages: Are error messages in API responses helpful for developers to diagnose and fix issues?
    *   Are common error codes and their meanings clearly documented?
    *   Does the API provide enough information in error responses without exposing sensitive details?

*   **G. Authentication & Security (Design & Documentation):**
    *   Is the authentication mechanism robust and secure?
    *   Are the instructions for obtaining and using credentials clear and easy to follow in the documentation?
    *   Are potential security considerations (e.g., input validation, output encoding) addressed in the API design and mentioned in docs where relevant?

*   **H. Performance & Scalability Considerations (Design & Documentation):**
    *   Are pagination, filtering, and sorting mechanisms well-designed and documented?
    *   Are there any design choices that might lead to performance bottlenecks?
    *   Is rate limiting clearly explained in the documentation, including limits and how to handle them?

*   **I. Versioning Strategy (Design & Documentation):**
    *   Is the versioning strategy clear, practical, and well-documented?
    *   How are breaking changes handled and communicated?

*   **J. Documentation Structure, Navigability & Readability:**
    *   Is the documentation well-organized and easy to navigate? Is there a clear table of contents or search functionality?
    *   Is the language clear, concise, and free of jargon (or is jargon explained)?
    *   Is the visual presentation (e.g., typography, code formatting) conducive to readability?

*   **K. Examples & Tutorials in Documentation:**
    *   Are there sufficient code examples in various popular languages (if applicable)?
    *   Are the examples correct, complete, and easy to copy-paste and run?
    *   Are there quick-start guides or tutorials to help developers make their first successful API call quickly?

*   **L. Overall Cohesion & Effectiveness:**
    *   Do the API design and its documentation work well together to provide a seamless developer experience?
    *   What are the biggest pain points or areas of friction for a developer trying to use this API?
    *   What are the top 3-5 actionable recommendations you would make to significantly improve this API's design and documentation?

I am looking for a **transformative critique** that challenges current assumptions and provides concrete, actionable insights. Please be direct, thorough, and provide justifications for your recommendations.