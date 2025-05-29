+++
# --- Rich Markdown Document ---
id = "DOC-MichelinRecipeAppDesignGuide-20240516103000" # Example ID
title = "Comprehensive Design Brief & Style Guide: Michelin Star Recipe Guide App"
subtitle = "Defining the User Experience, Visual Identity, and Interaction Principles"
document_type = "Design Brief & Style Guide"
status = "draft" # Will become a 'living-document' once app is in development
created_date = "2024-05-16" # Replace with actual creation date
last_updated = "2024-05-16T10:30:00Z" # Replace with actual update timestamp
version = "1.0"
authors = ["Sean Kochel (Concept Originator & Design Principles via Video)", "AI Assistant (Drafter)"]
reviewers = ["[Lead Designer]", "[Product Manager]", "[Lead Frontend Developer]"] # Example
tags = ["documentation", "design-brief", "style-guide", "ui-ux", "recipe-app", "vibe-planning"]
related_context = [
    "[.roo/path/to/DOC-MichelinRecipeApp-20240516100000.md]",
    "[.roo/path/to/DOC-MichelinRecipeAppMVPFlow-20240516100500.md]",
    "[.roo/path/to/DOC-MichelinRecipeAppMVPFeatures-20240516101000.md]"
]
template_schema_doc = ".roo/commander/templates/documentation/template_02_rich_document.README.md"
+++

# Comprehensive Design Brief & Style Guide: Michelin Star Recipe Guide App
Defining the User Experience, Visual Identity, and Interaction Principles

*(Created: 2024-05-16; Last Updated: 2024-05-16T10:30:00Z)*
*(Version: 1.0)*
*(Authors: Sean Kochel (Concept Originator & Design Principles via Video), AI Assistant (Drafter))*

## Table of Contents
- [1. Introduction / Overview 🎯](#1-introduction--overview-)
- [Part 1: Design Brief 📜](#part-1-design-brief-)
  - [2. Project Vision & Goals](#2-project-vision--goals)
  - [3. Target Audience Persona(s)](#3-target-audience-personas)
  - [4. Core User Goals & Tasks](#4-core-user-goals--tasks)
  - [5. Key Design Principles](#5-key-design-principles)
  - [6. Brand Identity & Tone of Voice (Conceptual)](#6-brand-identity--tone-of-voice-conceptual)
  - [7. Inspirations (Visual & Interactional)](#7-inspirations-visual--interactional)
- [Part 2: Style Guide 🎨](#part-2-style-guide-)
  - [8. Color Palette](#8-color-palette)
  - [9. Typography](#9-typography)
  - [10. Iconography](#10-iconography)
  - [11. Imagery & Photography (User-Generated Focus)](#11-imagery--photography-user-generated-focus)
  - [12. Layout & Spacing](#12-layout--spacing)
  - [13. UI Components (General Guidelines)](#13-ui-components-general-guidelines)
  - [14. Motion & Animation](#14-motion--animation)
  - [15. Accessibility (A11y)](#15-accessibility-a11y)
- [Part 3: User Experience (UX) Guidelines 🗺️](#part-3-user-experience-ux-guidelines-)
  - [16. Information Architecture Overview](#16-information-architecture-overview)
  - [17. Navigation Principles](#17-navigation-principles)
  - [18. Content-First Layouts](#18-content-first-layouts)
  - [19. Progressive Disclosure](#19-progressive-disclosure)
  - [20. Feedback & System Status](#20-feedback--system-status)
  - [21. Error Prevention & Handling](#21-error-prevention--handling)
  - [22. Affordances & Signifiers](#22-affordances--signifiers)
  - [23. Consistency](#23-consistency)
- [24. Conclusion / Summary ✅](#24-conclusion--summary-)
- [Appendix (Optional)](#appendix-optional)
  - [A.1. Specific UI Component Library References (Future)](#a1-specific-ui-component-library-references-future)

## 1. Introduction / Overview 🎯

This document serves as the comprehensive Design Brief and Style Guide for the "Michelin Star Recipe Guide App." It aims to establish a cohesive and high-quality user experience by defining the app's visual identity, interaction patterns, and core design principles. This guide will inform all design and frontend development efforts, ensuring a consistent and delightful product for our users. It draws heavily on the design principles emphasized by Sean Kochel for building high-touch UIs and the specific needs of an AI-driven recipe application.

## Part 1: Design Brief 📜

### 2. Project Vision & Goals
(Summarized from Project Definition Document)
*   **Vision:** To empower home cooks to successfully replicate complex and delightful restaurant dishes using AI-generated recipes.
*   **Core Goal:** Bridge the gap between professional culinary creations and home cooking capabilities.
*   **User Goal:** Easily capture dish information, receive an accurate and actionable recipe, and successfully recreate the dish.

### 3. Target Audience Persona(s)
(Expanded from Project Definition Document)

*   **Persona 1: "The Aspiring Foodie" (Ava, 32, Marketing Professional)**
    *   Loves dining out at trendy and high-quality restaurants.
    *   Wishes she could cook more elaborate meals at home but feels intimidated by complex recipes or doesn't know where to start to replicate a specific dish.
    *   Tech-savvy, uses apps for various aspects of her life.
    *   Values aesthetics and a polished user experience.
    *   *Pain Points:* Finds generic online recipes don't match restaurant experiences; lacks confidence in deconstructing dishes.
    *   *Needs:* Clear, step-by-step guidance; ability to capture inspiration easily; a sense of accomplishment.

*   **Persona 2: "The Curious Home Cook" (Ben, 45, Software Engineer)**
    *   Enjoys cooking as a hobby and is reasonably skilled but always looking to learn new techniques and try challenging recipes.
    *   Intrigued by the application of AI in creative fields like cooking.
    *   Appreciates detailed instructions and understanding the "why" behind cooking steps.
    *   *Pain Points:* Difficulty in finding reliable methods for replicating specific, nuanced restaurant dishes; sometimes gets stuck on particular techniques.
    *   *Needs:* Accurate recipe generation; ability to understand techniques; perhaps some flexibility for experimentation.

### 4. Core User Goals & Tasks
*   Capture details of a restaurant dish (photo, menu description, notes) quickly and easily.
*   Receive a comprehensive and understandable recipe to replicate the dish.
*   Successfully cook the dish using the generated recipe.
*   Save and revisit generated recipes.
*   (MVP/Early Post-MVP) Share recipe discoveries with friends.

### 5. Key Design Principles
(Inspired by Sean Kochel's "Features" prompt which focused on design quality)
*   **Bold Simplicity & Intuitive Navigation:** The app should be easy to understand and use, even for less tech-savvy users. Navigation should be clear and predictable, creating frictionless experiences.
*   **Content-First & User-Objective Focused:** Prioritize displaying the core content (recipes, input fields) and enabling user tasks efficiently over purely decorative elements.
*   **Aesthetic Appeal & Professionalism:** The UI should be visually pleasing, modern, and convey a sense of quality and trustworthiness, aligning with the "Michelin Star" aspiration. Usability remains paramount.
*   **Progressive Disclosure:** Reveal complexity gradually. Avoid overwhelming users with too much information or too many options at once.
*   **Clarity & Readability:** Ensure all text is legible, information is well-organized, and instructions are unambiguous.
*   **Feedback & Responsiveness:** The system must provide clear feedback for user actions (e.g., button presses, uploads, processing) and communicate system status with minimal latency.
*   **Consistency:** Maintain uniform design patterns, components, and interactions across all screens to reduce cognitive load.
*   **Accessibility:** Design for users of all abilities from the outset.

### 6. Brand Identity & Tone of Voice (Conceptual)
*   **Brand Personality:** Sophisticated, inspiring, helpful, trustworthy, innovative, delightful.
*   **Tone of Voice:** Encouraging, clear, precise (for recipes), slightly aspirational but accessible. Avoid overly technical jargon where possible, or explain it simply.
*   **Visual Feel:** Clean, modern, elegant, with a focus on high-quality imagery (user-provided). Perhaps a touch of warmth to feel inviting.

### 7. Inspirations (Visual & Interactional)
*   *(Placeholder: To be filled with specific app examples or design systems if identified. For now, general inspiration from high-quality food apps, minimalist design systems, and apps with excellent photo integration.)*
*   Consider apps like:
    *   High-end food/recipe apps (e.g., Bon Appétit, NYT Cooking for visual appeal and content presentation).
    *   Apps with clean, intuitive photo capturing and editing (e.g., Instagram for simplicity of capture flow, VSCO for aesthetic).
    *   Modern productivity apps for clean interfaces and intuitive task flows.

## Part 2: Style Guide 🎨

### 8. Color Palette
*   **Primary Action Color:** A rich, appetizing color (e.g., a deep maroon-red as suggested by Sean, or a sophisticated dark teal). Used for primary CTAs, key interactive elements.
    *   *Example:* Maroon Red: `#800000`
*   **Secondary Accent Color:** A complementary color for secondary actions or highlights.
    *   *Example:* Gold/Warm Ochre: `#B8860B`
*   **Neutrals:**
    *   Background: Clean white (`#FFFFFF`) or a very light off-white/cream (`#FAF7F2`) for a warmer feel.
    *   Text (Primary): Dark Gray/Near Black (e.g., `#333333`) for high readability.
    *   Text (Secondary): Medium Gray (e.g., `#757575`) for captions, helper text.
    *   Borders/Dividers: Light Gray (e.g., `#E0E0E0`).
*   **Feedback Colors:**
    *   Success: Green (e.g., `#4CAF50`)
    *   Error/Warning: Red (e.g., `#F44336` or a slightly less alarming orange-red)
    *   Info: Blue (e.g., `#2196F3`)
*   **Gradients:** Subtle gradients can be used for hero images or backgrounds for visual depth, but sparingly.

### 9. Typography
*   **Primary Font Family:** A clean, highly legible sans-serif font. SF Pro (iOS) / Roboto (Android) are good system defaults. Consider a premium sans-serif for headings if brand allows.
    *   *Example:* System Fonts (SF Pro/Roboto) for body, Inter or Open Sans for headings.
*   **Hierarchy & Sizing (Example):**
    *   Display (e.g., Welcome Screen Hero): 36-48pt, Bold
    *   Heading 1 (Screen Titles): 28-32pt, Bold/Semibold
    *   Heading 2 (Section Titles): 22-24pt, Semibold
    *   Heading 3 (Card Titles, Subsections): 18-20pt, Medium/Semibold
    *   Body Text (Recipe steps, descriptions): 16-17pt, Regular
    *   Captions/Helper Text: 12-14pt, Regular/Light
    *   Button Text: 16-18pt, Medium/Semibold
*   **Line Height:** Typically 1.4x - 1.6x font size for optimal readability.
*   **Weight Variance:** Use font weights (Light, Regular, Medium, Semibold, Bold) strategically to create visual hierarchy.
*   **Proportional Scaling:** Ensure typographic scale is harmonious and responsive across different screen sizes if applicable (though primarily mobile-focused).

### 10. Iconography
*   **Style:** Clean, modern, and easily recognizable. Outline style preferred for a lighter feel, or subtly filled. Consistency is key.
*   **Source:** Use a high-quality icon library (e.g., Feather Icons, Material Symbols, or a custom set).
*   **Usage:** Icons should always be accompanied by text labels for clarity, especially for less common actions. Ensure sufficient touch target size.

### 11. Imagery & Photography (User-Generated Focus)
*   **App-Generated:** Default placeholders for images should be clean and unobtrusive.
*   **User-Generated:** While the app doesn't control user photo quality, the UI should frame and present them in an appealing way (e.g., good aspect ratios, potential for subtle overlays or filters if a post-MVP feature).
*   **Focus:** The dish itself. Encourage users to take clear, well-lit photos.

### 12. Layout & Spacing
*   **Grid System:** Employ an 8pt grid system for consistent spacing and alignment of elements.
*   **Whitespace:** Generous use of whitespace ("breathable whitespace") to reduce clutter and improve focus.
*   **Margins & Padding:** Standardized values (e.g., 8px, 16px, 24px, 32px) for consistency.
*   **Content Prioritization:** Layouts should guide the user's eye to the most important information first.

### 13. UI Components (General Guidelines)
*   **Buttons:** Clear visual distinction between primary, secondary, and tertiary actions. Provide distinct states (default, hover/focus, pressed, disabled). Ensure adequate touch target size (min 44x44pt).
*   **Input Fields:** Clear labels, optional placeholder text, visible focus state, and helpful error messages. Floating labels can be considered.
*   **Cards:** Used for displaying recipe summaries in a list. Consistent structure and information hierarchy within cards.
*   **Navigation:**
    *   **Bottom Tab Bar:** For primary navigation sections (e.g., Home/Capture, Recipe Library, Profile).
    *   **Headers:** Clear screen titles, back navigation.
*   **Loading Indicators:** Use subtle, non-intrusive loaders (e.g., skeleton screens, subtle spinners).
*   **Modals/Dialogs:** For confirmations, alerts, or focused tasks. Keep them simple and to the point.

### 14. Motion & Animation
*   **Principle:** Animations should be subtle, purposeful, and enhance the user experience by providing feedback, guiding attention, or creating smooth transitions. Avoid gratuitous or distracting animations.
*   **Examples:**
    *   Gentle fade-ins for loaded content.
    *   Physics-based transitions between screens (e.g., slide-left for navigation).
    *   Subtle scale transforms on interactive elements on press.
    *   Animated progress indicators.
*   **Timing:** Transitions typically between 200ms-500ms.

### 15. Accessibility (A11y)
*   **Color Contrast:** Ensure text and interactive elements meet WCAG AA contrast ratio guidelines.
*   **Font Sizes:** Provide readable font sizes and consider options for dynamic type scaling.
*   **Touch Targets:** Minimum 44x44pt for all interactive elements.
*   **Alternative Text:** For all meaningful images and icons (for screen readers).
*   **Keyboard Navigation (If web/desktop considered):** Ensure all interactive elements are keyboard accessible.
*   **Screen Reader Compatibility:** Design with screen reader users in mind (proper labeling, semantic HTML/native elements).

## Part 3: User Experience (UX) Guidelines 🗺️

### 16. Information Architecture Overview
*   **Primary Sections (Bottom Tabs):**
    1.  **Capture/Home:** Main entry point for inputting a new dish.
    2.  **Recipe Library:** User's saved recipes.
    3.  **Profile/Settings:** User account details, app settings, preferences.
*   **Secondary Flows:** Onboarding, recipe detail view, recipe generation processing.

### 17. Navigation Principles
*   **Clear & Predictable:** Users should always know where they are and how to get to other sections.
*   **Consistent:** Navigation patterns should be consistent throughout the app.
*   **Efficient:** Minimize taps to complete core tasks.

### 18. Content-First Layouts
*   User objectives (inputting dish info, viewing a recipe) should be the primary focus of each screen.
*   Decorative elements should support, not detract from, the content and task at hand.

### 19. Progressive Disclosure
*   Reveal advanced options or less frequently used features only when needed or explicitly requested by the user to avoid overwhelming them. Example: advanced recipe modification options.

### 20. Feedback & System Status
*   Provide immediate visual or haptic feedback for user interactions.
*   Clearly communicate system status (e.g., "Generating recipe...", "Recipe saved!", "Upload failed").
*   Use loading states thoughtfully to manage perceived performance.

### 21. Error Prevention & Handling
*   Design to prevent errors where possible (e.g., clear input validation).
*   When errors occur, provide clear, concise, and actionable error messages.
*   Offer easy ways to recover from errors.

### 22. Affordances & Signifiers
*   Interactive elements should clearly look interactive (e.g., buttons look like buttons).
*   Use visual cues to signify what an element does or its current state.

### 23. Consistency
*   **Internal Consistency:** UI elements, terminology, and interaction patterns should be consistent throughout the app.
*   **Platform Consistency (where appropriate):** Adhere to common iOS and Android design patterns to meet user expectations, unless a custom solution clearly provides a better experience.

## 24. Conclusion / Summary ✅

This Design Brief and Style Guide provides a foundational framework for creating a user-centric, aesthetically pleasing, and highly usable "Michelin Star Recipe Guide App." It is intended to be a living document, evolving as the product develops and user feedback is incorporated. Adherence to these guidelines will help ensure a cohesive and high-quality experience for all users.

## Appendix (Optional)

### A.1. Specific UI Component Library References (Future)
*   *(Placeholder: This section can be populated later with links to specific Figma components, Storybook instances, or code components once they are developed.)*