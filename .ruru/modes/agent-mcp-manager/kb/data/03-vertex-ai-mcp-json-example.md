        ```json
        // Example within .roo/mcp.json
        {
          "mcpServers": {
            "vertex-ai-mcp-server": {
              "command": "node",
              "args": [
                // Ensure this path is correct relative to project root
                ".ruru/mcp-servers/vertex-ai/node_modules/vertex-ai-mcp-server/build/index.js"
              ],
              "env": {
                // --- Required GCP/Vertex Config ---
                "GOOGLE_CLOUD_PROJECT": "YOUR_PROJECT_ID",
                "GOOGLE_CLOUD_LOCATION": "YOUR_GCP_REGION", // e.g., "us-central1"
                "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/your/gcp_credentials.json",

                // --- Vertex AI Model Config ---
                "VERTEX_MODEL_ID": "gemini-2.5-pro-exp-03-25", // Or your preferred model
                "AI_TEMPERATURE": "0.3",
                "AI_USE_STREAMING": "true",
                "AI_MAX_OUTPUT_TOKENS": "65535", // Adjust as needed

                // --- Optional Retry Config ---
                "AI_MAX_RETRIES": "3",
                "AI_RETRY_DELAY_MS": "1000"
              },
              "disabled": false, // Set to false to enable
              "alwaysAllow": [ // Tools allowed without per-call confirmation
                "answer_query_websearch",
                "answer_query_direct",
                "explain_topic_with_docs",
                "get_doc_snippets",
                "generate_project_guidelines",
                "read_file_content",
                "write_file_content",
                "edit_file_content",
                "list_directory_contents",
                "get_directory_tree",
                "move_file_or_directory",
                "search_filesystem",
                "get_filesystem_info",
                "execute_terminal_command", // Added execute_terminal_command
                "save_generate_project_guidelines",
                "save_doc_snippet",
                "save_topic_explanation",
                "save_answer_query_direct",
                "save_answer_query_websearch",
                "code_analysis_with_docs", // Added code_analysis_with_docs
                "technical_comparison", // Added technical_comparison
                "architecture_pattern_recommendation", // Added architecture_pattern_recommendation
                "dependency_vulnerability_scan", // Added dependency_vulnerability_scan
                "database_schema_analyzer", // Added database_schema_analyzer
                "security_best_practices_advisor", // Added security_best_practices_advisor
                "testing_strategy_generator", // Added testing_strategy_generator
                "regulatory_compliance_advisor", // Added regulatory_compliance_advisor
                "microservice_design_assistant", // Added microservice_design_assistant
                "documentation_generator" // Added documentation_generator
               ],
              "timeout": 3600 // Adjust as needed
            }
            // ... other server configurations ...
          }
        }
        ```
