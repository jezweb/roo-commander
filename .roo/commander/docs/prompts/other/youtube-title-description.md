# YouTube Video Metadata Generation Template

## GOAL: Generate YouTube Video Metadata for Your Video

Based on the specific video details you provide below, this template will help generate the following YouTube metadata:
1.  **Multiple distinct title suggestions** (4-5 options)
2.  **A detailed video description** (formatted as plain text, using emojis/Unicode for structure)
3.  **A detailed prompt** for an AI image generator (like Midjourney, DALL-E, etc.) to create a compelling thumbnail.

---

## Video Specific Details (Fill this in for each video)

* **`[Brief Video Summary]`:** (1-2 sentences describing the main focus/goal of *this specific* video. E.g., "This video demonstrates how to create a sourdough starter from scratch," or "This video reviews the top 5 features of the new XYZ camera," or "Learn Python basics: this video covers variables, data types, and functions for beginners.")
* **`[Key Tasks/Steps/Topics Covered]`:** (List the main things shown, explained, or demonstrated. Use bullet points. E.g.,
    * Mixing flour and water for the initial starter.
    * Daily feeding schedule and process.
    * Identifying signs of a healthy, active starter.
    * Troubleshooting common issues.)
* **`[Specific Software/Tool Features or Key Concepts Highlighted (if applicable)]`:** (List any specific features of a tool, software, or distinct concepts shown prominently. E.g.,
    * Using the "Clone Stamp" tool in Photoshop.
    * Explaining the "Rule of Thirds" in photography.
    * Demonstrating the "merge sort" algorithm.
    * Highlighting the "Power Query" feature in Excel.)
* **`[Assets/Tools/Resources Used (if notable)]`:** (List any specific equipment, software, frameworks, ingredients, or unique resources used/mentioned. E.g., Adobe Photoshop 2024, Python 3.11, DJI Mavic 3 Drone, King Arthur Bread Flour, Specific API/library.)
* **`[Key Timestamps]`:** (List important moments with brief descriptions. Use HH:MM:SS or MM:SS format. E.g.,
    * 00:00 - Introduction & What You'll Learn
    * 01:15 - Setting up Your Workspace/Ingredients
    * 05:30 - Core Technique Demonstration
    * 12:45 - Advanced Tip / Common Mistake
    * 18:20 - Reviewing the Outcome
    * 25:00 - Summary & Next Steps)
* **`[Main Visual Element/Concept for Thumbnail]`:** (Describe the most visually representative or interesting part of *this* video to potentially feature in the thumbnail. E.g., "A vibrant, bubbling sourdough starter in a jar," or "Split screen: before and after photo edit," or "Abstract visualization of data sorting.")

---

## AI Generation Task (To be performed by the AI based on your details above)

Please generate the following based on the details you provided above:

### 1. YouTube Title Suggestions (4-5 Options)
* Generate 4-5 distinct, engaging titles.
* Ensure titles include relevant keywords for your video's topic, main subject, or tool.
* Mention key subjects, technologies, or tasks shown (e.g., "Sourdough Baking," "Photoshop Tutorial," "Python Basics," "Camera Review").
* Vary the style (e.g., descriptive, question-based, benefit-focused, numbered list).

### 2. YouTube Description
* **Format:** Plain text suitable for copy-pasting into YouTube. Use emojis (like ✨, 🚀, 💡, 🛠️, ⏰, 👇, 👍, 🔔) and simple Unicode separators (like --- or `🔹➡️`) for structure and visual appeal where appropriate. Make sure timestamps are in a clickable format (MM:SS or HH:MM:SS). URLs and #hashtags should also be formatted correctly.
* **Content Structure:**
    * **Hook:** Start with an engaging sentence or two summarizing the video (use `[Brief Video Summary]`).
    * **Video Overview:** Briefly explain the main tasks, steps, or topics covered (use `[Key Tasks/Steps/Topics Covered]`).
    * **What You'll Discover/Learn:** Detail the specific features or key concepts showcased (use `[Specific Software/Tool Features or Key Concepts Highlighted (if applicable)]`). Use bullet points or emoji markers (🔹).
    * **Tools/Resources Mentioned:** List the relevant tools, software, or key resources used (use `[Assets/Tools/Resources Used (if notable)]`).
    * **🔗 Useful Links:**
        * (Example) Main Product/Software Discussed: `[Your Link Here]`
        * (Example) Related Article/Resource: `[Your Link Here]`
        * (Example) Your Website/Blog: `[Your Link Here]`
        * (Example) Support My Work (Patreon, Buy Me a Coffee, etc.): `[Your Link Here]`
        * (Example) Follow me on Social Media: `[Your Link Here]`
    * **⏰ Timestamps:** Clearly list the key moments using the provided `[Key Timestamps]`.
        * HH:MM:SS - Description from `[Key Timestamps]`
        * HH:MM:SS - Description from `[Key Timestamps]`
    * **Call to Action:** Include a prompt for comments, likes, and subscriptions (e.g., "💬 What are your biggest challenges with [Topic]? Let me know in the comments! 👇 Don't forget to 👍 like this video and 🔔 subscribe for more tutorials/reviews!").
    * **Hashtags:** Generate relevant hashtags (e.g., #YourMainTopic, #SpecificSoftwareOrTool, #Tutorial, #HowTo, #Guide, #Review, #DIY, #RelevantNicheKeyword, #VideoTopic).

### 3. Thumbnail Generation Prompt (Detailed)
* Generate a *detailed text prompt* suitable for an AI image generator (like Midjourney, DALL-E, Stable Diffusion).
* The prompt should aim to create a visually interesting, topic-focused thumbnail.
* **Instructions for the Image AI should include:**
    * **Style/Mood:** (e.g., clean, modern, dynamic, informative, artistic, cinematic).
    * **Background:** (e.g., a clean, blurred representation of the subject matter, abstract colored background, relevant environment like a kitchen or a workshop, a stylized software interface if applicable).
    * **Key Elements:** Incorporate the `[Main Visual Element/Concept for Thumbnail]` from the video details. Consider abstractly representing the core idea or the main subject. If you have a logo or specific branding element, specify whether/how to include it or an abstract representation.
    * **Text Overlay:** Include clear, bold text. This could be a shortened version of your best title option or a compelling keyword phrase related to the video's core content (e.g., "Sourdough SIMPLIFIED," "MASTER Photoshop," "Python for BEGINNERS"). Specify a modern, readable font style.
    * **Color Palette:** Suggest contrasting, vibrant colors appropriate for the topic (e.g., earthy tones for baking, techy blues and purples for software, bright and inviting for lifestyle).
    * **Composition:** Suggest a dynamic and clear arrangement of elements that draws the eye. (e.g., rule of thirds, leading lines, central focus on the key element).

### Tone and Style
* The generated titles and description should be informative, engaging, and targeted towards your specific audience for this video.
* The thumbnail prompt should be descriptive and provide enough detail for an image AI to generate a relevant and eye-catching image.

### Final Output Format
* Provide the titles as a numbered list.
* Provide the description as a single block of formatted plain text, ready to copy and paste.
* Provide the thumbnail prompt as a single block of text.