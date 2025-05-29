+++
# --- Database Query Generation (SQL) Prompt ---
id = "PROMPT-Coding-SQLQueryGen-[YYYYMMDDHHMMSS]" # Placeholder: e.g., PROMPT-Coding-SQLQueryGen-SelectOrders-20250528140000
title = "Database Query Generation (SQL) Request"
prompt_type = "generation_technical_code_sql"
domain = "coding_and_technical"
version = "1.0"
created_date = "{{YYYYMMDD}}"
last_updated = "{{TIMESTAMP_ISO_Z}}"
authors = ["[Your Name/Mode Slug]"]
tags = ["prompt", "coding", "sql", "database_query", "data_retrieval", "select_statement", "insert_statement", "update_statement", "delete_statement"]
# related_schema_doc = ".roo/commander/docs/prompts/coding/prompt_CD_09_database_query_generation_sql.README.md" # Link to its own README
+++

Subject: **SQL Query Generation Request: [Brief Description of Desired Data Operation]**

I require assistance generating an SQL query to perform: **[Brief Description of Desired Data Operation, e.g., 'Select active users from the Users table', 'Insert a new record into the Products table', 'Update customer email addresses', 'Delete old log entries']**.

**1. Database & Query Specifications:**
   *   **SQL Dialect (if specific, otherwise assume ANSI SQL):** `[e.g., PostgreSQL, MySQL, SQL Server (T-SQL), Oracle (PL/SQL), SQLite, ANSI SQL]`
   *   **Type of Query:** `[SELECT, INSERT, UPDATE, DELETE, CREATE TABLE (less common for generation, but possible for simple cases)]`
   *   **Objective of the Query:** [Clearly describe what data you want to retrieve, insert, update, or delete. What is the business question or operational need this query addresses?]
       e.g., "Retrieve the names and email addresses of all customers who placed an order in the last 30 days."
       e.g., "Insert a new product with the following details: name, description, price, category_id."
       e.g., "Update the status of all orders older than 90 days to 'Archived'."
   *   **Relevant Table(s) & Their Schemas (Key Columns):** [List the names of the tables involved and their relevant columns with data types. This is crucial.]
       e.g.,
       ```
       Table: Customers
         CustomerID (INT, Primary Key)
         FirstName (VARCHAR(50))
         LastName (VARCHAR(50))
         Email (VARCHAR(100))
         RegistrationDate (DATE)

       Table: Orders
         OrderID (INT, Primary Key)
         CustomerID (INT, Foreign Key to Customers.CustomerID)
         OrderDate (DATETIME)
         TotalAmount (DECIMAL(10,2))
         Status (VARCHAR(20))

       Table: Products
         ProductID (INT, Primary Key)
         ProductName (VARCHAR(100))
         Description (TEXT)
         Price (DECIMAL(10,2))
         CategoryID (INT)
       ```
   *   **Filtering Conditions (WHERE clause details):** [Specify any conditions to filter the data.]
       e.g., "WHERE Orders.OrderDate >= (CURDATE() - INTERVAL 30 DAY)"
       e.g., "WHERE Products.CategoryID = 5 AND Products.Price < 50.00"
   *   **Joining Conditions (if multiple tables):** [Describe how tables should be joined.]
       e.g., "Join Customers on Customers.CustomerID = Orders.CustomerID"
   *   **Data to be Inserted/Updated (for INSERT/UPDATE queries):** [Provide the specific values or logic for deriving values.]
       e.g., For INSERT: `ProductName='New Gadget', Description='Amazing new features', Price=99.99, CategoryID=3`
       e.g., For UPDATE: `SET Status='Archived' WHERE ...`
   *   **Sorting Requirements (ORDER BY clause, for SELECT):** [How should the results be sorted?]
       e.g., "ORDER BY Customers.LastName ASC, Customers.FirstName ASC"
   *   **Grouping & Aggregation (GROUP BY, aggregate functions like COUNT, SUM, AVG, for SELECT):** [If needed, describe how data should be grouped and what aggregations to perform.]
       e.g., "Group by Orders.CustomerID and COUNT the number of orders for each customer."
   *   **Specific Columns to Select (for SELECT queries):** [List the exact columns you want in the result set.]
       e.g., "SELECT Customers.FirstName, Customers.LastName, Customers.Email, Orders.OrderDate"

**2. Example (Optional but helpful for complex SELECTs):**

*   **Simplified Sample Data (Conceptual):**
    [If the logic is complex, briefly showing what kind of data might be in the tables can help.]
*   **Desired Output Structure (for SELECT queries):**
    [Describe or show an example of how you'd like the results formatted or what key information should be present.]

**3. Request for SQL Query:**

Please generate a clear, correct, and reasonably efficient SQL query in **[Re-state SQL Dialect, or "ANSI SQL"]** that accomplishes the task described above.

The query should:
*   Accurately reflect all specified conditions, joins, and operations.
*   Be well-formatted for readability.
*   Use common SQL practices and be mindful of potential performance considerations for the described operation (though deep optimization is not expected here).

Provide the complete SQL query. If there are different common ways to achieve the result or important dialect-specific considerations, please briefly note them.