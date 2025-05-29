+++
# --- Rich Markdown Document ---
id = "DOC-MichelinRecipeAppSysArch-20240516102000" # Example ID
title = "System Architecture Diagram & Description: Michelin Star Recipe Guide App"
subtitle = "Visualizing the Components, Layers, and Interactions of the Application"
document_type = "System Architecture Document"
status = "draft" # Can be updated to 'finalized' once reviewed
created_date = "2024-05-16" # Replace with actual creation date
last_updated = "2024-05-16T10:20:00Z" # Replace with actual update timestamp
version = "1.0"
authors = ["Sean Kochel (Concept Originator via Video)", "AI Assistant (Drafter)"]
# reviewers = ["[Reviewer Name/Mode Slug or remove array field]"]
tags = ["documentation", "system-architecture", "diagram", "recipe-app", "vibe-planning", "software-design"]
related_context = [
    "[.roo/path/to/DOC-MichelinRecipeApp-20240516100000.md]",
    "[.roo/path/to/DOC-MichelinRecipeAppMVPFlow-20240516100500.md]",
    "[.roo/path/to/DOC-MichelinRecipeAppMVPFeatures-20240516101000.md]"
]
template_schema_doc = ".roo/commander/templates/documentation/template_02_rich_document.README.md"
+++

# System Architecture Diagram & Description: Michelin Star Recipe Guide App
Visualizing the Components, Layers, and Interactions of the Application

*(Created: 2024-05-16; Last Updated: 2024-05-16T10:20:00Z)*
*(Version: 1.0)*
*(Authors: Sean Kochel (Concept Originator via Video), AI Assistant (Drafter))*

## Table of Contents
- [1. Introduction / Overview 🎯](#1-introduction--overview-)
- [2. System Architecture Diagram 🖼️](#2-system-architecture-diagram--)
  - [2.1. Diagram Placeholder](#21-diagram-placeholder)
  - [2.2. How to Interpret the Diagram](#22-how-to-interpret-the-diagram)
- [3. Architectural Layers and Components 🧱](#3-architectural-layers-and-components--)
  - [3.1. Mobile App Layer (Client-Side)](#31-mobile-app-layer-client-side)
  - [3.2. Backend Services Layer (Server-Side)](#32-backend-services-layer-server-side)
  - [3.3. Database Layer](#33-database-layer)
  - [3.4. External Services & APIs](#34-external-services--apis)
  - [3.5. Development & Deployment Environment](#35-development--deployment-environment)
- [4. Key Interactions & Data Flows ↔️](#4-key-interactions--data-flows--)
- [5. Technology Stack Summary 💻](#5-technology-stack-summary-)
- [6. Conclusion / Summary ✅](#6-conclusion--summary-)

## 1. Introduction / Overview 🎯

This document provides a description and conceptual breakdown of the system architecture for the "Michelin Star Recipe Guide App." The architecture is designed to support the MVP features, focusing on a layered approach to ensure modularity, scalability, and maintainability. It outlines the main components, their responsibilities, the technologies involved, and how they interact. This corresponds to the visual diagram typically generated during the "Architect" phase of AI-assisted planning.

## 2. System Architecture Diagram 🖼️

### 2.1. Diagram Placeholder

```
+-------------------------------------------------------------------------------------------------+
|                                   Michelin Star Recipe App - System Architecture                |
|                                                                                                 |
|  +-----------------------------+      +--------------------------------+      +-----------------+
|  | Mobile App Layer            |----->| Backend Services Layer         |<----->| Database Layer  |
|  | (React Native + Expo)       |      | (FastAPI - Python)             |      | (PostgreSQL -   |
|  |                             |      |                                |      |  Supabase)      |
|  | - User Interface            |<---->| - API Gateway                  |      |                 |
|  | - Authentication Module     |      | - Recipe Service               |----->| - User Data     |
|  | - Camera/Gallery Module     |      | - Image Processing Service     |      | - Recipe Data   |
|  | - Recipe Input Module       |      | - User Service                 |      | - Preferences   |
|  | - Recipe Display Module     |      | - Analytics Service            |      |                 |
|  | - Recipe Library Module     |      | - Payment Service (Post-MVP)   |      |                 |
|  +-----------------------------+      +--------------------------------+      +-----------------+
|         ^         |                               |         ^                                   |
|         |         |                               |         |                                   |
|         |         |     +-------------------------+         |                                   |
|         |         |     | External Services & APIs|         |                                   |
|         |         +---->| - OpenAI (GPT-4 Vision) |<--------+                                   |
|         |               | - Supabase (Auth, DB)   |<--------------------------------------------+
|         +-------------->| - Stripe (Payments)     |                                             |
|                         | - PostHog (Analytics)   |                                             |
|                         | - Email Service         |                                             |
|                         | - Image CDN (e.g. S3/Cloudflare) |                                    |
|                         +-------------------------+                                             |
|                                                                                                 |
|  +-----------------------------+                                                                |
|  | Development Environment     |                                                                |
|  | - Docker Containers         |                                                                |
|  | - Local Database Instance   |                                                                |
|  | - CI/CD Pipeline (GitHub Actions, Expo EAS) |                                                |
|  +-----------------------------+                                                                |
+-------------------------------------------------------------------------------------------------+
```
*(**Note:** The above is a textual representation. Ideally, this section would contain an embedded SVG or image file of the actual diagram, similar to the one generated by tools like Manus or visualised using mermaid.js, draw.io, Lucidchart, etc. The diagram visually shows these layers and their connections with arrows indicating data flow.*

### 2.2. How to Interpret the Diagram

The diagram typically uses:
*   **Boxes/Rectangles:** To represent major layers or individual components/services.
*   **Arrows:** To indicate the direction of data flow or interaction between components.
*   **Colors/Shading (Optional):** To visually differentiate layers or types of services.
*   **Labels:** To clearly identify each component and its primary technology.

## 3. Architectural Layers and Components 🧱

The system is structured into several logical layers:

### 3.1. Mobile App Layer (Client-Side)
*   **Description:** This is the user-facing component, responsible for all user interactions, data presentation, and capturing user inputs.
*   **Technology:** React Native with Expo.
*   **Key Modules/Components (MVP):**
    *   **User Interface (UI):** General UI elements, navigation structure, branding.
    *   **Authentication Module:** Handles user sign-up, sign-in, sign-out, password reset flows. Interacts with Supabase Auth and User Service.
    *   **Camera/Gallery Module:** Manages access to the device camera and photo gallery for image capture and selection. Includes image manipulation (cropping, compression).
    *   **Recipe Input Module:** UI for users to enter menu descriptions and tasting notes.
    *   **Recipe Display Module:** Formats and presents the AI-generated recipe to the user.
    *   **Recipe Library Module:** Allows users to view and manage their saved recipes.
    *   **Client-Side Caching/Local Storage:** For offline access to saved recipes (Post-MVP, but good to consider architecture early) and temporary storage of drafts.
*   **Interactions:** Communicates primarily with the API Gateway in the Backend Services Layer.

### 3.2. Backend Services Layer (Server-Side)
*   **Description:** The core logic and processing engine of the application. Manages business rules, orchestrates external API calls, and handles data persistence.
*   **Technology:** FastAPI (Python).
*   **Key Services/Components (MVP):**
    *   **API Gateway:** Single entry point for all requests from the mobile app. Routes requests to appropriate internal services.
    *   **Recipe Service:** Handles requests for recipe generation. Orchestrates calls to the Image Processing Service and OpenAI API. Manages recipe data persistence.
    *   **Image Processing Service:** Prepares images (e.g., validation, feature extraction if needed) before sending to OpenAI.
    *   **User Service:** Manages user profile data (preferences, saved recipes) and interacts with Supabase for authentication-related data.
    *   **Analytics Service:** Collects usage data and sends it to PostHog (or a similar analytics platform).
    *   **(Post-MVP) Payment Service:** Integrates with Stripe for handling premium subscriptions.
*   **Interactions:** Receives requests from the Mobile App Layer via the API Gateway. Interacts with the Database Layer and External Services.

### 3.3. Database Layer
*   **Description:** Responsible for persistent storage of application data.
*   **Technology:** PostgreSQL, managed via Supabase.
*   **Key Data Stores (MVP):**
    *   **User Data:** User accounts, authentication details (managed by Supabase Auth), user profiles, preferences (dietary, skill level).
    *   **Recipe Data:** Generated recipes, including original inputs (image references, descriptions, notes), ingredients, instructions, associated user IDs.
    *   **(Post-MVP) Vector Storage:** If implementing semantic search or advanced recipe similarity, vector embeddings of recipes/ingredients might be stored.
*   **Interactions:** Accessed primarily by the Backend Services Layer.

### 3.4. External Services & APIs
*   **Description:** Third-party services that provide specialized functionalities.
*   **Key Services (MVP & Post-MVP):**
    *   **OpenAI (GPT-4 Vision API):** Core AI for analyzing dish inputs and generating recipes.
    *   **Supabase:**
        *   **Authentication:** Manages user sign-up, login, and sessions.
        *   **Database:** Provides the PostgreSQL database.
    *   **Stripe (Post-MVP):** For payment processing and subscription management.
    *   **PostHog (or similar):** For product analytics and usage tracking.
    *   **Email Service (e.g., SendGrid, AWS SES):** For sending transactional emails (verification, password reset, welcome).
    *   **Image CDN (e.g., AWS S3 + CloudFront, Cloudflare Images - Post-MVP):** For efficient storage and delivery of user-uploaded images. For MVP, Supabase Storage might suffice.
*   **Interactions:** Integrated with by the Backend Services Layer, and in some cases (like Supabase Auth), directly by the Mobile App Layer.

### 3.5. Development & Deployment Environment
*   **Description:** Tools and infrastructure supporting the development and deployment lifecycle.
*   **Components:**
    *   **Docker Containers:** For consistent development and testing environments.
    *   **Local Database Instance:** For local development and testing.
    *   **CI/CD Pipeline (e.g., GitHub Actions, Expo Application Services - EAS Build/Submit):** For automated testing, building, and deployment of the mobile app and backend.
    *   **Hosting Platform (e.g., AWS App Runner, Railway, Render for backend; App Stores for mobile):** Where the application will be deployed and run.

## 4. Key Interactions & Data Flows ↔️

*   **User Registration/Login:** Mobile App -> Supabase Auth (potentially proxied via API Gateway). User Profile data -> User Service -> Database.
*   **Dish Input & Recipe Generation:**
    1.  Mobile App: User inputs image, description, notes.
    2.  Mobile App -> API Gateway -> Recipe Service.
    3.  Recipe Service -> Image Processing Service (if needed).
    4.  Recipe Service -> OpenAI API (sends processed inputs).
    5.  OpenAI API -> Recipe Service (returns generated recipe text).
    6.  Recipe Service -> Database (saves recipe and original inputs).
    7.  Recipe Service -> API Gateway -> Mobile App (displays recipe).
*   **Viewing Saved Recipes:** Mobile App -> API Gateway -> User Service/Recipe Service -> Database -> Mobile App.
*   **Analytics:** Mobile App/Backend Services -> Analytics Service -> PostHog.

## 5. Technology Stack Summary 💻

*   **Frontend (Mobile App):** React Native, Expo
*   **Backend:** Python with FastAPI
*   **Database:** PostgreSQL (via Supabase)
*   **Authentication:** Supabase Auth
*   **AI Model:** OpenAI GPT-4 Vision API
*   **Analytics:** PostHog (or similar)
*   **Payments (Post-MVP):** Stripe
*   **Hosting (Backend):** Railway, Render, or AWS App Runner (as per video example)
*   **Hosting (Mobile):** Apple App Store, Google Play Store (via Expo EAS)
*   **Development:** Docker
*   **CI/CD:** GitHub Actions, Expo EAS

## 6. Conclusion / Summary ✅

This system architecture provides a robust and scalable foundation for the "Michelin Star Recipe Guide App." The layered approach separates concerns, allowing for independent development and scaling of different parts of the system. The chosen technologies offer a good balance of modern capabilities, developer productivity, and community support, aligning with the "vibe planning" ethos of leveraging efficient tools. This architecture is designed to support the MVP effectively while providing a clear path for incorporating Post-MVP features.