+++
# --- Simple Note ---
id = "NOTE-[TopicShort]-[YYYYMMDDHHMMSS]" # Placeholder: e.g., NOTE-InitialThoughts-20250515143000
title = "[Brief Title or Topic of the Note]" # REQUIRED - Placeholder
created_date = "{{YYYYMMDD}}" # Placeholder: To be set by creating agent
last_updated = "{{TIMESTAMP_ISO_Z}}" # Placeholder: To be set by creating agent
tags = ["note", "[relevant_tag_1]", "[relevant_tag_2]"] # Placeholder: Add specific tags
# related_session_id = "[SESSION-ID-if-applicable or remove field]" # OPTIONAL - Placeholder or remove
# related_task_id = "[TASK-ID-if-applicable or remove field]" # OPTIONAL - Placeholder or remove
template_schema_doc = ".roo/commander/templates/documentation/template_01_simple_note.README.md"
+++

# {{ title | default: "Note Topic" }}
*(Created: {{ created_date }})*

[Start writing your note content here. This section is free-form Markdown.
Use bullet points, paragraphs, or whatever format best captures your thoughts for this simple note.]

- Point 1
- Point 2

## Sub-heading (Optional)

More details...