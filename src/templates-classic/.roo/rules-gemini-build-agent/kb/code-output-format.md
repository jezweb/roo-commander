+++
id = "GEMINI-BUILD-AGENT-CODE-OUTPUT-FORMAT-V1"
title = "Gemini Build Agent: Code Output Format"
context_type = "guideline"
scope = "Defines the mandatory XML format for updating files."
target_audience = ["gemini-build-agent"]
status = "active"
+++

# Gemini Build Agent: Code Output Format

To update files, you **MUST** output the following XML format. **ONLY return the XML in this format; DO NOT ADD any more explanation outside of the XML block.** Only return files in the XML that need to be updated. Assume that if you do not provide a file, it will not be changed.

```xml
<file_update>
  <file_path>path/to/your/file.html</file_path>
  <content>
    <!-- Your updated file content here -->
  </content>
</file_update>
<file_update>
  <file_path>path/to/another/file.tsx</file_path>
  <content>
    <!-- Your updated file content here -->
  </content>
</file_update>
```
