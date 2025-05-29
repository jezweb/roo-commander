+++
# --- Rich Markdown Document ---
id = "DOC-MichelinRecipeAppScreenSpecs-20240516103500" # Example ID
title = "Screen States & UI/UX Specification: Michelin Star Recipe Guide App (MVP)"
subtitle = "Detailed Breakdown of Screens, States, UI Elements, and UX Flows for the MVP"
document_type = "UI/UX Specification Document"
status = "draft" # This document is highly iterative
created_date = "2024-05-16" # Replace with actual creation date
last_updated = "2024-05-16T10:35:00Z" # Replace with actual update timestamp
version = "1.0"
authors = ["Sean Kochel (Concept Originator & Design Principles via Video)", "AI Assistant (Drafter)"]
reviewers = ["[Lead Designer]", "[Lead Frontend Developer]", "[Product Manager]"] # Example
tags = ["documentation", "ui-ux-specification", "screen-states", "recipe-app", "mvp", "vibe-planning"]
related_context = [
    "[.roo/path/to/DOC-MichelinRecipeAppDesignGuide-20240516103000.md]",
    "[.roo/path/to/DOC-MichelinRecipeAppMVPFeatures-20240516101000.md]"
]
template_schema_doc = ".roo/commander/templates/documentation/template_02_rich_document.README.md"
+++

# Screen States & UI/UX Specification: Michelin Star Recipe Guide App (MVP)
Detailed Breakdown of Screens, States, UI Elements, and UX Flows for the MVP

*(Created: 2024-05-16; Last Updated: 2024-05-16T10:35:00Z)*
*(Version: 1.0)*
*(Authors: Sean Kochel (Concept Originator & Design Principles via Video), AI Assistant (Drafter))*

## Table of Contents
- [1. Introduction / Overview 🎯](#1-introduction--overview-)
- [2. General UI/UX Guidelines Reminder](#2-general-uiux-guidelines-reminder)
- [3. Feature 1: User Authentication & Onboarding](#3-feature-1-user-authentication--onboarding)
  - [3.1. Welcome Screen](#31-welcome-screen)
  - [3.2. Sign Up Screen](#32-sign-up-screen)
  - [3.3. Sign In Screen](#33-sign-in-screen)
  - [3.4. Forgot Password Screen](#34-forgot-password-screen)
  - [3.5. Reset Password Screen](#35-reset-password-screen)
  - [3.6. Profile Setup Screen (Onboarding)](#36-profile-setup-screen-onboarding)
- [4. Feature 2: Photo Capture & Image Upload](#4-feature-2-photo-capture--image-upload)
  - [4.1. Camera Interface Screen](#41-camera-interface-screen)
  - [4.2. Photo Gallery Selection Screen](#42-photo-gallery-selection-screen)
  - [4.3. Image Preview/Confirmation Screen](#43-image-previewconfirmation-screen)
- [5. Feature 3: Dish Information Input](#5-feature-3-dish-information-input)
  - [5.1. Dish Input Form Screen](#51-dish-input-form-screen)
- [6. Feature 4: AI Recipe Generation & Display](#6-feature-4-ai-recipe-generation--display)
  - [6.1. Recipe Generation Processing Screen](#61-recipe-generation-processing-screen)
  - [6.2. Recipe Detail Display Screen](#62-recipe-detail-display-screen)
- [7. Feature 5: Recipe Library & Management](#7-feature-5-recipe-library--management)
  - [7.1. Recipe Library List Screen](#71-recipe-library-list-screen)
- [8. Feature 6: Basic Social Sharing](#8-feature-6-basic-social-sharing)
  - [8.1. Share Action/Dialog (from Recipe Detail)](#81-share-actiondialog-from-recipe-detail)
- [9. Conclusion / Summary ✅](#9-conclusion--summary-)

## 1. Introduction / Overview 🎯

This document provides detailed UI (User Interface) and UX (User Experience) specifications for each screen and its various states within the Minimum Viable Product (MVP) of the "Michelin Star Recipe Guide App." It aims to guide frontend development by clearly defining the elements, interactions, and information flow for the user.

**Note:** Visual mockups, wireframes, or interactive prototypes (e.g., from Figma) should accompany this document. Placeholders `[Visual Mockup/Wireframe for SCREEN_NAME - STATE_NAME]` are used below to indicate where these visuals would be referenced.

## 2. General UI/UX Guidelines Reminder

All screens and components must adhere to the principles and styles defined in the **Comprehensive Design Brief & Style Guide**, including:
*   Color Palette
*   Typography (hierarchy, sizing, weights)
*   Iconography
*   Layout & Spacing (8pt grid)
*   Motion & Animation (subtle, purposeful)
*   Accessibility (A11y) standards

## 3. Feature 1: User Authentication & Onboarding

### 3.1. Welcome Screen
*   **Purpose:** First screen a new or logged-out user sees. Provides options to sign up or sign in.
*   **States:**
    *   **Initial State:**
        *   `[Visual Mockup/Wireframe for Welcome Screen - Initial State]`
        *   **UI Elements:**
            *   Full-screen hero image (showcasing a beautifully plated dish with a subtle overlay gradient, as per design brief).
            *   App logo centered in the upper third.
            *   Tagline: "Turn restaurant dishes into home recipes."
            *   Primary CTA Button 1: "Get Started" (Styled: Maroon-red fill, white text).
            *   Primary CTA Button 2: "Sign In" (Styled: White outline, maroon-red text).
            *   Link: "By continuing, you agree to our Terms of Service and Privacy Policy."
        *   **UX Flow:**
            *   "Get Started" button navigates to Sign Up Screen.
            *   "Sign In" button navigates to Sign In Screen.
            *   Terms/Privacy links open respective web views or in-app modals.
        *   **Animation:** Subtle logo fade-in with gentle scale transform (0.9 -> 1.0) over ~800ms. Background image parallax effect on scroll (if applicable, though likely static for welcome).

### 3.2. Sign Up Screen
*   **Purpose:** Allows new users to create an account.
*   **States:**
    *   **Empty State (Initial):**
        *   `[Visual Mockup/Wireframe for Sign Up Screen - Empty State]`
        *   **UI Elements:** Header ("Create Account"), Email input field, Password input field, Confirm Password input field, "Sign Up" button (Primary CTA style), "Already have an account? Sign In" link.
        *   **Password Strength Indicator:** Visual feedback (e.g., color progression gray to maroon) for password strength.
        *   **UX Flow:**
            *   Input fields use floating labels or clear placeholders.
            *   Real-time inline validation for email format.
            *   Password and Confirm Password fields must match.
            *   "Sign Up" button disabled until all required fields are validly filled.
    *   **Form Validation State (Inline Errors):**
        *   `[Visual Mockup/Wireframe for Sign Up Screen - Validation Error State]`
        *   **UI Elements:** Error messages appear below relevant fields (e.g., "Invalid email format," "Passwords do not match," "Password too weak"). Error states for input fields (e.g., maroon-red border accent).
        *   **Animation:** Subtle slide-down for error messages. Gentle shake animation for input fields with errors upon submission attempt.
    *   **Loading State (Submitting):**
        *   `[Visual Mockup/Wireframe for Sign Up Screen - Loading State]`
        *   **UI Elements:** "Sign Up" button shows a loading spinner. Input fields may be disabled.
    *   **Success State:**
        *   `[Visual Mockup/Wireframe for Sign Up Screen - Success State]`
        *   **UI Elements:** Success message (e.g., "Account created! Check your email for verification.").
        *   **UX Flow:** Navigates to an Email Verification Info Screen or directly to Sign In screen (depending on verification flow).
    *   **Error State (Submission Failed):**
        *   `[Visual Mockup/Wireframe for Sign Up Screen - Submission Error State]`
        *   **UI Elements:** General error message (e.g., "Sign up failed. Please try again." or specific server error like "Email already exists.").

### 3.3. Sign In Screen
*   **Purpose:** Allows existing users to log into their accounts.
*   **States:** Similar to Sign Up Screen (Empty, Form Validation, Loading, Success, Error), but with:
    *   **UI Elements (Initial):** Header ("Sign In"), Email input field, Password input field, "Sign In" button (Primary CTA style), "Forgot Password?" link, "Don't have an account? Sign Up" link.
    *   **Success State UX Flow:** Navigates to the main app interface (e.g., Home/Capture screen or Recipe Library).

### 3.4. Forgot Password Screen
*   **Purpose:** Allows users to initiate a password reset process.
*   **States:**
    *   **Initial State:**
        *   `[Visual Mockup/Wireframe for Forgot Password Screen - Initial State]`
        *   **UI Elements:** Header ("Forgot Password"), Email input field, "Send Reset Link" button, Back navigation.
        *   Helper text: "Enter your email address and we'll send you a link to reset your password."
    *   **Loading State (Sending Link).**
    *   **Success State:** Message: "Password reset link sent to your email."
    *   **Error State:** (e.g., "Email not found.").

### 3.5. Reset Password Screen
*   **Purpose:** Allows users to set a new password after clicking a reset link (often handled via a web view initially for MVP).
*   **States (if native):**
    *   **Initial State (via deep link):**
        *   `[Visual Mockup/Wireframe for Reset Password Screen - Initial State]`
        *   **UI Elements:** Header ("Reset Password"), New Password input, Confirm New Password input, "Set New Password" button.
    *   **Validation, Loading, Success, Error states similar to Sign Up.**

### 3.6. Profile Setup Screen (Onboarding)
*   **Purpose:** Gathers initial user preferences after first successful login/registration to personalize the experience.
*   **States:**
    *   **Dietary Preferences State:**
        *   `[Visual Mockup/Wireframe for Profile Setup - Dietary Preferences State]`
        *   **UI Elements:** Header ("Dietary Preferences"), Grid layout of common dietary restrictions (e.g., "Vegan," "Gluten-Free," "Dairy-Free") as selectable cards/toggles. "Skip for now" option, "Continue" button (disabled until at least one selection or skip is chosen). Progress indicator (e.g., Step 1 of 3).
        *   **Interaction:** Selected cards change appearance (e.g., background shift to light maroon with checkmark animation).
    *   **Cooking Skill Level Assessment State:**
        *   `[Visual Mockup/Wireframe for Profile Setup - Skill Level State]`
        *   **UI Elements:** Header ("Your Cooking Skill"), Vertical list of skill levels (e.g., "Beginner," "Intermediate," "Advanced") with descriptive text and visual iconography, as radio buttons. "Skip for now," "Continue" button. Progress indicator (e.g., Step 2 of 3).
        *   **Interaction:** Each option might expand slightly on selection with subtle scale animation.
    *   **Cuisine Preferences State (Optional MVP):**
        *   `[Visual Mockup/Wireframe for Profile Setup - Cuisine Preferences State]`
        *   **UI Elements:** Header ("Favorite Cuisines"), Grid/list of cuisines (e.g., "Italian," "Mexican," "Asian") as selectable toggles. "Skip for now," "Finish" button. Progress indicator (e.g., Step 3 of 3).
    *   **Completion State:**
        *   `[Visual Mockup/Wireframe for Profile Setup - Completion State]`
        *   **UI Elements:** Success message (e.g., "Profile Setup Complete!").
        *   **UX Flow:** Navigates to the main app interface (e.g., Home/Capture screen).

## 4. Feature 2: Photo Capture & Image Upload

### 4.1. Camera Interface Screen
*   **Purpose:** Allows users to take a photo of their dish.
*   **States:**
    *   **Default Camera State:**
        *   `[Visual Mockup/Wireframe for Camera Interface - Default State]`
        *   **UI Elements:** Full-screen camera viewfinder with minimal UI overlay. Top bar: Flash toggle (auto/on/off), Close button. Bottom bar: Capture button (large circular button, potentially with maroon-red accent ring that pulses gently), Gallery thumbnail/link (to open Photo Gallery Selection), potentially front/rear camera switch.
        *   **Interaction:** Tap-to-focus with visual feedback (e.g., focus ring).
    *   **Capture Success State:**
        *   `[Visual Mockup/Wireframe for Camera Interface - Capture Success State]`
        *   **UI Elements:** Brief visual feedback (e.g., screen flash).
        *   **UX Flow:** Navigates to Image Preview/Confirmation Screen.
    *   **Error State (e.g., Camera permission denied):**
        *   Message: "Camera permission required. Please enable in settings." Button to open app settings.

### 4.2. Photo Gallery Selection Screen
*   **Purpose:** Allows users to select an existing photo from their device.
*   **States:**
    *   **Initial State:**
        *   `[Visual Mockup/Wireframe for Gallery Selection - Initial State]`
        *   **UI Elements:** Grid view of recent photos from the device's gallery. Multi-select capability (for MVP, likely single select). "Select" or "Done" button. Cancel/Back button.
        *   **Interaction:** Tapping an image selects it (visual indication).
    *   **Permission Denied State:** Message prompting user to grant gallery access.

### 4.3. Image Preview/Confirmation Screen
*   **Purpose:** Allows user to review and confirm the selected/captured image before proceeding.
*   **States:**
    *   **Default State:**
        *   `[Visual Mockup/Wireframe for Image Preview - Default State]`
        *   **UI Elements:** Displays the selected/captured image prominently. Options: "Use Photo" / "Confirm" button, "Retake" / "Change Photo" button.
        *   **(Post-MVP):** Basic image editing tools (crop, rotate).
        *   **UX Flow:** "Use Photo" navigates to Dish Input Form Screen, passing the image. "Retake" goes back to Camera Interface. "Change Photo" goes back to Gallery Selection.

## 5. Feature 3: Dish Information Input

### 5.1. Dish Input Form Screen
*   **Purpose:** Collects textual details about the dish from the user.
*   **States:**
    *   **Initial State:**
        *   `[Visual Mockup/Wireframe for Dish Input Form - Initial State]`
        *   **UI Elements:** Header ("Describe Your Dish"). Thumbnail of the selected/captured image. Text input field: "Menu Description" (large text area with placeholder "Describe the dish from the menu..."). Text input field: "Your Tasting Notes" (large text area with placeholder "What did it taste like? Textures? Suspected ingredients?"). "Generate Recipe" button (Primary CTA).
        *   **(Post-MVP):** Character count indicators. Cuisine type auto-detection or dropdown.
    *   **Form Validation State (if fields are required):**
        *   Error messages if required fields are empty upon trying to submit.
    *   **Loading State (Draft Save):** If auto-save or manual draft save is implemented.
    *   **UX Flow:** Upon tapping "Generate Recipe," navigates to Recipe Generation Processing Screen.

## 6. Feature 4: AI Recipe Generation & Display

### 6.1. Recipe Generation Processing Screen
*   **Purpose:** Informs the user that their recipe is being generated.
*   **States:**
    *   **Generation in Progress State:**
        *   `[Visual Mockup/Wireframe for Recipe Generation - Progress State]`
        *   **UI Elements:** Clean loading interface with cooking-themed micro-animations or subtle particle animation. Progress stages text (e.g., "Analyzing image...", "Processing notes...", "Generating recipe..."). Estimated time remaining (if feasible, e.g., "30-45 seconds").
        *   **(Post-MVP):** Behind-the-scenes insights/tips displayed during wait. Cancel option with confirmation dialog.
    *   **Error State (Generation Failed):**
        *   Message: "Oops! We couldn't generate your recipe. Please try again or adjust your inputs." "Try Again" button.

### 6.2. Recipe Detail Display Screen
*   **Purpose:** Displays the AI-generated recipe to the user.
*   **States:**
    *   **Initial Recipe Display State:**
        *   `[Visual Mockup/Wireframe for Recipe Detail - Initial State]`
        *   **UI Elements:**
            *   Hero image (user's uploaded photo).
            *   Recipe Title.
            *   Expandable sections for: Ingredients, Instructions (Steps), Cooking Techniques.
            *   (If MVP) Difficulty and Time estimates (prominently displayed).
            *   Primary CTA: "Save Recipe".
            *   Secondary Action: "Share" button (opens native share sheet).
            *   **(Post-MVP):** "Looks good" vs. "Needs adjustment" feedback buttons. "Customize" toggle.
        *   **Typography:** Clear hierarchy for ingredients (bold name, regular quantity) and steps (numbered, clear instructions).
    *   **Refinement Options State (Post-MVP):**
        *   If "Needs adjustment" is tapped, reveal sliders/options for difficulty, servings, dietary needs.
    *   **Loading State (e.g., if fetching related content or saving):** Subtle loaders.
    *   **Success State (e.g., after saving):** Toast/snackbar: "Recipe Saved!"
    *   **Error State (e.g., saving failed):** Toast/snackbar: "Could not save recipe."

## 7. Feature 5: Recipe Library & Management

### 7.1. Recipe Library List Screen
*   **Purpose:** Displays all recipes saved by the user.
*   **States:**
    *   **Empty State:**
        *   `[Visual Mockup/Wireframe for Recipe Library - Empty State]`
        *   **UI Elements:** Message: "Your recipe library is empty. Start by capturing a dish!" CTA button: "Capture New Dish" (navigates to Camera/Input flow).
    *   **Populated State:**
        *   `[Visual Mockup/Wireframe for Recipe Library - Populated State]`
        *   **UI Elements:** Vertical list or grid of recipe cards. Each card shows: dish thumbnail, recipe title, brief description/source.
        *   **(Post-MVP):** Search bar, filter/sort options (date, cuisine, rating).
        *   **Interaction:** Tapping a recipe card navigates to the Recipe Detail Display Screen for that recipe.
    *   **Loading State:** Skeleton screens for recipe cards while fetching data.

## 8. Feature 6: Basic Social Sharing

### 8.1. Share Action/Dialog (from Recipe Detail)
*   **Purpose:** Allows users to share their generated recipe.
*   **States:**
    *   **Native Share Sheet State:**
        *   `[Visual Mockup/Wireframe for Share Dialog - Native Sheet]`
        *   **UI Elements:** System's native share sheet is displayed, pre-populated with recipe title and content (or link).
        *   **UX Flow:** User selects a sharing destination (e.g., Messages, Email, social media app).
    *   **Success State (Sharing initiated):** No specific app UI change, system handles it.
    *   **Error State (Sharing failed):** System may display an error, or app shows a brief toast.

## 9. Conclusion / Summary ✅

This Screen States & UI/UX Specification document provides a detailed blueprint for the MVP of the "Michelin Star Recipe Guide App." It should be used in conjunction with visual mockups and the overarching Design Brief & Style Guide to ensure a consistent, intuitive, and high-quality user experience. This document is expected to be updated and refined as the project progresses through development and user testing.