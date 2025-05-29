+++
# --- API Interaction Code Generation Prompt ---
id = "PROMPT-Coding-APICallGen-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-APICallGen-JSFetchUser-20250528130000
title = "API Interaction Code Generation Request"
prompt_type = "generation_technical_code_api"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "api_interaction", "http_request", "rest_api", "fetch", "axios", "requests_python"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_08_api_interaction_code_generation.README.md" # Link to its own README
+++

Subject: **API Interaction Code Request: [HTTP Method] to [Endpoint Path] for [Brief Purpose]**

I require a code snippet to interact with an API endpoint: **[HTTP Method, e.g., GET, POST, PUT, DELETE]** request to **[Endpoint Path, e.g., /users, /products/{id}]** for the purpose of **[Brief Purpose, e.g., 'fetching user data', 'creating a new product', 'updating an order']**.

**1. API Interaction Specifications:**
   *   **Programming Language & Key Library/Method:** `[Specify language and preferred HTTP library/method, e.g., JavaScript with Fetch API, Python with 'requests' library, JavaScript with 'axios', Java with HttpURLConnection, C# with HttpClient]`
   *   **Base URL (if known, otherwise assume placeholder):** `[e.g., https://api.example.com/v1, or state "Use placeholder like YOUR_API_BASE_URL"]`
   *   **Endpoint Path:** `[e.g., /users, /products/{product_id}, /search]`
   *   **HTTP Method:** `[GET, POST, PUT, DELETE, PATCH, etc.]`
   *   **Request Headers (if any):** [List any required or common headers and their values or placeholders for values.]
       e.g.,
       ```
       Content-Type: application/json
       Authorization: Bearer YOUR_API_KEY
       X-Custom-Header: SomeValue
       ```
   *   **Path Parameters (if any):** [If the endpoint path includes parameters, list them and provide example values or placeholders.]
       e.g., `product_id: "prod_12345"`
   *   **Query Parameters (if any):** [List any query parameters to be appended to the URL and provide example values or placeholders.]
       e.g.,
       ```
       status: "active"
       limit: 10
       page: 2
       ```
   *   **Request Body (for POST, PUT, PATCH):** [Describe the structure and content of the request body. Specify the format (e.g., JSON, XML, form-data). Provide an example if possible.]
       e.g., For JSON:
       ```json
       {
         "name": "New Product Name",
         "description": "A great new product.",
         "price": 29.99,
         "category_ids":
       }
       ```
   *   **Expected Success Response (Structure, if known):** [Briefly describe what a successful response might look like or key data to extract. e.g., "JSON object with user details," "Status code 201 with created resource ID," "Array of product objects."]
   *   **Basic Error Handling:** [Should the code include basic error handling for HTTP errors (e.g., 4xx, 5xx responses) or network issues? e.g., "Log the error status code and message," "Throw an exception on failure."]

**2. Example Usage Context (Optional):**
   [Briefly describe how or where this code snippet might be used, if it influences the design.]
   e.g., "This will be part of a Node.js backend service."
   e.g., "This will be used in a frontend React component to fetch data on mount."

**3. Request for Code Snippet:**

Please generate a clear, correct, and reasonably complete code snippet in **[Re-state Programming Language and Library/Method]** to make the specified API request. The snippet should:

*   Correctly construct the request URL (including path and query parameters).
*   Set up the specified HTTP method and headers.
*   Include the request body in the correct format (if applicable).
*   Make the HTTP request.
*   Provide a basic way to access the response data (e.g., parsing JSON response) upon success.
*   Include the requested basic error handling.
*   Be well-commented to explain key steps.

If there are common patterns or important considerations for using the specified library/method for this type of request, please highlight them.