+++
id = "GEMINI-BUILD-AGENT-GEMINI-API-GUIDELINES-V1"
title = "Gemini Build Agent: Google GenAI SDK Guidelines"
context_type = "guideline"
scope = "Provides comprehensive guidelines for using the Google Gemini API, including model usage, API key handling, and code examples."
target_audience = ["gemini-build-agent"]
status = "active"
+++

# Gemini Build Agent: Google GenAI SDK Guidelines

This library is sometimes called: Google Gemini API, Google GenAI API, Google GenAI SDK, Gemini API, @google/genai. The Google GenAI SDK can be used to call Gemini models.

## Prohibited Types/Methods (Deprecated API):
Do not use or import below types from `@google/genai`, these are old deprecated API and no longer work.
*   `Incorrect GoogleGenerativeAI`
*   `Incorrect google.generativeai`
*   `Incorrect models.create`
*   `Incorrect ai.models.create`
*   `Incorrect models.getGenerativeModel`
*   `Incorrect ai.models.getModel`
*   `Incorrect ai.models['model_name']`
*   `Incorrect generationConfig`
*   `Incorrect GoogleGenAIError`
*   `Incorrect GenerateContentResult`, Correct `GenerateContentResponse`.
*   `Incorrect GenerateContentRequest`, Correct `GenerateContentParameters`

## Model Initialization:
Always use `const ai = new GoogleGenAI({apiKey: process.env.API_KEY});`.
*   `Incorrect const ai = new GoogleGenAI(process.env.API_KEY);` (Must use named parameter)

## API Key Handling:
The API key **MUST** be obtained exclusively from the environment variable `process.env.API_KEY`. Assume this variable is pre-configured, valid, and accessible in the execution context where the API client is initialized. Use this `process.env.API_KEY` string directly when initializing the `@google/genai` client instance (must use `new GoogleGenAI({ apiKey: process.env.API_KEY })`).
**Strict Prohibition:** Generate any UI elements (input fields, forms, prompts, configuration sections) or code snippets for entering or managing the API key. Do not define `process.env` or request from the user to update the `API_KEY` in the code. The key's availability is handled externally and is a hard requirement. The application must not ask the user for it under any circumstances.

## Model Usage:
Only use below models when using `@google/genai`:
*   General Text Tasks: `'gemini-2.5-flash-preview-04-17'`
*   Image Generation Tasks: `'imagen-3.0-generate-002'`
**Prohibited (Deprecated Models):**
*   `gemini-1.5-flash`
*   `gemini-1.5-pro`
*   `gemini-pro`

## Import Statement:
Always use `import {GoogleGenAI} from "@google/genai";`.
*   `Prohibited: import { GoogleGenerativeAI } from "@google/genai";`
*   `Prohibited: import type { GoogleGenAI} from "@google/genai";`
*   `Prohibited: declare var GoogleGenAI.`

## Generate Content (Examples)

**Generate response from the model:**
```typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash-preview-04-17',
  contents: 'why is the sky blue?',
});

console.log(response.text);
```

**Generate content with multiple parts (image and text):**
```typescript
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const imagePart = {
  inlineData: {
    mimeType: 'image/png', // Could be other IANA standard MIME type of the source data.
    data: base64EncodeString, // base64 encoded string
  },
};
const textPart = {
  text: promptString // text prompt
};
const response: GenerateContentResponse = await ai.models.generateContent({
  model: 'gemini-2.5-flash-preview-04-17',
  contents: { parts: [imagePart, textPart] },
});
```

**Extracting Text Output from GenerateContentResponse:**
The `GenerateContentResponse` object has a property called `text` that directly provides the string output.
```typescript
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const response: GenerateContentResponse = await ai.models.generateContent({
  model: 'gemini-2.5-flash-preview-04-17',
  contents: 'why is the sky blue?',
});
const text = response.text;
console.log(text);
```
**Incorrect Methods to avoid:**
*   `Incorrect:const text = response?.response?.text?;`
*   `Incorrect:const text = response?.response?.text();`
*   `Incorrect:const text = response?.response?.text?.()?.trim();`
*   `Incorrect:const response = response?.response; const text = response?.text();`
*   `Incorrect: const json = response.candidates?.[0]?.content?.parts?.[0]?.json;`

**System Instruction and Other Model Configs:**
```typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash-preview-04-17",
  contents: "Tell me a story in 100 words.",
  config: {
    systemInstruction: "you are a storyteller for kids under 5 years old",
    topK: 64,
    topP: 0.95,
    temperature: 1,
    responseMimeType: "application/json",
    seed: 42,
  },
});
console.log(response.text);
```

**Thinking Config:**
Thinking Config is only available to the `gemini-2.5-flash-preview-04-17` model. Never use it with other models.
*   For Game AI Opponents / Low Latency: Disable thinking by adding this to generate content config:
    ```typescript
    import { GoogleGenAI } from "@google/genai";
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: "Tell me a story in 100 words.",
      config: { thinkingConfig: { thinkingBudget: 0 } }
    });
    console.log(response.text);
    ```
*   For All Other Tasks: Omit `thinkingConfig` entirely (defaults to enable thinking for higher quality).

**JSON response:**
Ask the model to return a response in json format. There is no property called `json` in `GenerateContentResponse`, you need to parse the text into json.
Note: the json string might be wrapped in json markdown, you need to remove the markdown and then parse it to json.
Follow below example: The output text could be an array of the specified json object, please check if it is an array of the expected object.
```typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const response = await ai.models.generateContent({
   model: "gemini-2.5-flash-preview-04-17",
   contents: "Tell me a story in 100 words.",
   config: {
     responseMimeType: "application/json",
   },
});

let jsonStr = response.text.trim();
const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
const match = jsonStr.match(fenceRegex);
if (match && match[2]) {
  jsonStr = match[2].trim(); // Trim the extracted content itself
}
try {
  const parsedData = JSON.parse(jsonStr);
} catch (e) {
  console.error("Failed to parse JSON response:", e);
}
```

**Generate Content (Streaming):**
```typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const response = await ai.models.generateContentStream({
   model: "gemini-2.5-flash-preview-04-17",
   contents: "Tell me a story in 300 words.",
});

for await (const chunk of response) {
  console.log(chunk.text);
}
```

**Generate Image:**
```typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const response = await ai.models.generateImages({
    model: 'imagen-3.0-generate-002',
    prompt: 'Robot holding a red skateboard',
    config: {numberOfImages: 1, outputMimeType: 'image/jpeg'},
});

const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
```

**Chat:**
```typescript
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash-preview-04-17',
  // The config is same as models.generateContent config.
  config: {
    systemInstruction: 'You are a storyteller for 5 year old kids',
  },
});
let response: GenerateContentResponse = await chat.sendMessage({message:"Tell me a story in 100 words"});
console.log(response.text)
response = await chat.sendMessage({message:"What happened after that?"});
console.log(response.text)
```

**Chat (Streaming):**
```typescript
import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash-preview-04-17',
  // The config is same as models.generateContent config.
  config: {
    systemInstruction: 'You are a storyteller for 5 year old kids',
  },
},
);
let response = await chat.sendMessageStream({message:"Tell me a story in 100 words"});
for await (const chunk of response) { // chunk type is GenerateContentResponse
  console.log(chunk.text)
}
response = await chat.sendMessageStream({message:"What happened after that?"});
for await (const chunk of response) {
  console.log(chunk.text)
}
```

**Search Grounding:**
Use Google Search grounding for queries that relate to recent events, recent news or up-to-date or trending information that the user wants from the web. If Google Search is used then you **MUST ALWAYS** extract the URLs from `groundingChunks` and list them on the webapp.
**DO NOT** add other configs except for tools `googleSearch`.
**DO NOT** add `responseMimeType: "application/json"` when using `googleSearch`.
```typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const response = await ai.models.generateContent({
   model: "gemini-2.5-flash-preview-04-17",
   contents: "Who individually won the most bronze medals during the Paris olympics in 2024?",
   config: {
     tools: [{googleSearch: {}},],
   },
});
console.log(response.text);
/* To get website urls, in the form [{"web": {"uri": "", "title": ""},  ... }] */
console.log(response.candidates?.[0]?.groundingMetadata?.groundingChunks);
```
**Incorrect:**
```typescript
import { GoogleGenAI } from "@google/genai";

const ai = new Google_GenAI({ apiKey: process.env.API_KEY });
const response = await ai.models.generateContent({
   model: "gemini-2.5-flash-preview-04-17",
   contents: "Who individually won the most bronze medals during the Paris olympics in 2024?",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json", // `application/json` is not supported when using the `googleSearch` tool.
    },
});
console.log(response.text);
```

## API Error Handling

Implement robust handling for API errors (e.g., 4xx/5xx) and unexpected responses. Use graceful retry logic (like exponential backoff) to avoid overwhelming the backend.
