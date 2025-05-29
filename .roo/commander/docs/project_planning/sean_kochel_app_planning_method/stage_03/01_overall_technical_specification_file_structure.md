+++
# --- Rich Markdown Document ---
id = "DOC-MichelinRecipeAppTechSpec-20240516104000" # Example ID
title = "Overall Technical Specification & File Structure: Michelin Star Recipe Guide App"
subtitle = "Defining the Project's Technical Blueprint and Code Organization for MVP"
document_type = "Technical Specification Document"
status = "draft" # Will evolve as development progresses
created_date = "2024-05-16" # Replace with actual creation date
last_updated = "2024-05-16T10:40:00Z" # Replace with actual update timestamp
version = "1.0"
authors = ["Sean Kochel (Concept Originator & Initial Tech Choices via Video)", "AI Assistant (Drafter)"]
reviewers = ["[Lead Backend Developer]", "[Lead Frontend Developer]", "[DevOps Engineer]"] # Example
tags = ["documentation", "technical-specification", "file-structure", "recipe-app", "mvp", "vibe-planning"]
related_context = [
    "[.roo/path/to/DOC-MichelinRecipeAppSysArch-20240516102000.md]",
    "[.roo/path/to/DOC-MichelinRecipeAppMVPFeatures-20240516101000.md]"
]
template_schema_doc = ".roo/commander/templates/documentation/template_02_rich_document.README.md"
+++

# Overall Technical Specification & File Structure: Michelin Star Recipe Guide App
Defining the Project's Technical Blueprint and Code Organization for MVP

*(Created: 2024-05-16; Last Updated: 2024-05-16T10:40:00Z)*
*(Version: 1.0)*
*(Authors: Sean Kochel (Concept Originator & Initial Tech Choices via Video), AI Assistant (Drafter))*

## Table of Contents
- [1. Introduction / Overview 🎯](#1-introduction--overview-)
- [2. General Technical Principles 📜](#2-general-technical-principles-)
- [3. File System Structure 📂](#3-file-system-structure-)
  - [3.1. Monorepo vs. Separate Repositories Decision](#31-monorepo-vs-separate-repositories-decision)
  - [3.2. Frontend (React Native - Expo) Directory Structure](#32-frontend-react-native---expo-directory-structure)
  - [3.3. Backend (FastAPI - Python) Directory Structure](#33-backend-fastapi---python-directory-structure)
  - [3.4. Shared/Common Directory (If Monorepo)](#34-sharedcommon-directory-if-monorepo)
- [4. Core Technology Stack & Justification (MVP) 💻](#4-core-technology-stack--justification-mvp-)
- [5. API Design Philosophy & Conventions](#5-api-design-philosophy--conventions)
- [6. Database Schema Design Approach](#6-database-schema-design-approach)
- [7. Error Handling & Logging Strategy (High-Level)](#7-error-handling--logging-strategy-high-level)
- [8. Security Considerations (High-Level)](#8-security-considerations-high-level)
- [9. Testing Strategy (High-Level)](#9-testing-strategy-high-level)
- [10. Build & Deployment Process Overview (CI/CD)](#10-build--deployment-process-overview-cicd)
- [11. Conclusion / Summary ✅](#11-conclusion--summary-)

## 1. Introduction / Overview 🎯

This document outlines the overall technical specifications and proposed file structure for the "Michelin Star Recipe Guide App" MVP. It serves as a technical blueprint for developers, covering key technology choices, code organization, API conventions, and other foundational technical aspects. The goal is to establish a clear, maintainable, and scalable codebase from the outset.

## 2. General Technical Principles 📜

*   **Modularity:** Code will be organized into logical modules and services to promote separation of concerns and reusability.
*   **Clarity & Readability:** Code should be well-documented, follow consistent styling (e.g., Prettier, ESLint for frontend; Black, Flake8 for backend), and be easy for new developers to understand.
*   **Testability:** Design components and services with testability in mind. Aim for high unit and integration test coverage.
*   **Scalability:** While focusing on MVP, architectural choices should not preclude future scalability.
*   **Security:** Implement security best practices from the beginning, particularly for user data and API interactions.
*   **No Real Code (Initially):** Technical specifications for features will initially use pseudocode where helpful, especially for complex logic, rather than pre-maturely writing full implementation code during the planning phase. (As per "Details" prompt from video).
*   **Dependency & Integration Clarity:** Ensure every dependency and integration is clearly spelled out.

## 3. File System Structure 📂

### 3.1. Monorepo vs. Separate Repositories Decision
*   **Consideration:** Whether to use a monorepo (e.g., using Yarn Workspaces, Lerna, or Nx) for both frontend and backend, or separate repositories.
*   **Initial Lean (can be debated):** For MVP simplicity with a small team, separate repositories might be easier to manage initially. A monorepo can be considered for Post-MVP if shared typings/libraries become significant.
*   **Decision/Status:** [To be filled: e.g., "Decision: Separate repositories for frontend and backend for MVP."]

### 3.2. Frontend (React Native - Expo) Directory Structure

Assuming the project root for the frontend is `MichelinRecipeAppFrontend/`:

```
MichelinRecipeAppFrontend/
├── assets/                 # Static assets (images, fonts)
│   ├── fonts/
│   └── images/
├── src/                    # Main source code
│   ├── api/                # API client and service calls
│   │   ├── authService.ts
│   │   ├── recipeService.ts
│   │   └── userService.ts
│   ├── components/         # Reusable UI components
│   │   ├── common/         # General purpose components (buttons, inputs, cards)
│   │   │   ├── Button.tsx
│   │   │   └── TextInput.tsx
│   │   ├── auth/           # Authentication specific components
│   │   │   └── SocialLoginButton.tsx
│   │   └── recipe/         # Recipe specific components
│   │       └── RecipeCard.tsx
│   ├── config/             # App configuration (API keys, environment variables)
│   │   └── index.ts
│   ├── constants/          # Global constants (colors, strings, enums)
│   │   ├── colors.ts
│   │   └── strings.ts
│   ├── hooks/              # Custom React hooks
│   │   └── useAuth.ts
│   ├── navigation/         # Navigation setup (stack, tab navigators)
│   │   ├── AppNavigator.tsx
│   │   └── AuthNavigator.tsx
│   ├── screens/            # Top-level screen components
│   │   ├── auth/
│   │   │   ├── WelcomeScreen.tsx
│   │   │   ├── SignUpScreen.tsx
│   │   │   └── SignInScreen.tsx
│   │   ├── onboarding/
│   │   │   ├── DietaryPreferencesScreen.tsx
│   │   │   └── SkillLevelScreen.tsx
│   │   ├── capture/
│   │   │   ├── CameraScreen.tsx
│   │   │   └── DishInputScreen.tsx
│   │   ├── recipe/
│   │   │   ├── RecipeGenerationScreen.tsx
│   │   │   ├── RecipeDetailScreen.tsx
│   │   │   └── RecipeLibraryScreen.tsx
│   │   └── profile/
│   │       └── ProfileScreen.tsx
│   ├── services/           # Client-side business logic (distinct from API calls)
│   ├── store/              # State management (e.g., Zustand, Redux Toolkit)
│   │   ├── authStore.ts
│   │   └── recipeStore.ts
│   ├── styles/             # Global styles or theme
│   │   └── globalStyles.ts
│   ├── types/              # TypeScript type definitions
│   │   ├── index.ts
│   │   └── recipe.ts
│   └── utils/              # Utility functions
│       └── helpers.ts
├── App.tsx                 # Main application entry point
├── babel.config.js
├── eas.json                # Expo Application Services configuration
├── app.json                # Expo app configuration
├── package.json
└── tsconfig.json
```

### 3.3. Backend (FastAPI - Python) Directory Structure

Assuming the project root for the backend is `MichelinRecipeAppBackend/`:

```
MichelinRecipeAppBackend/
├── app/                    # Main application module
│   ├── __init__.py
│   ├── api/                # API routers and endpoints
│   │   ├── __init__.py
│   │   ├── v1/             # API version 1
│   │   │   ├── __init__.py
│   │   │   ├── endpoints/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── auth.py
│   │   │   │   ├── users.py
│   │   │   │   └── recipes.py
│   │   │   └── deps.py     # Dependencies for routers
│   ├── core/               # Core application logic
│   │   ├── __init__.py
│   │   ├── config.py       # Application configuration
│   │   └── security.py     # Security utilities (password hashing, JWT)
│   ├── crud/               # CRUD operations for database models
│   │   ├── __init__.py
│   │   ├── crud_user.py
│   │   └── crud_recipe.py
│   ├── db/                 # Database setup and session management
│   │   ├── __init__.py
│   │   ├── base.py         # Base model for SQLAlchemy
│   │   ├── database.py     # Database session, engine
│   │   └── models/
│   │       ├── __init__.py
│   │       ├── user.py
│   │       └── recipe.py
│   ├── schemas/            # Pydantic schemas for request/response validation
│   │   ├── __init__.py
│   │   ├── user.py
│   │   └── recipe.py
│   ├── services/           # Business logic services
│   │   ├── __init__.py
│   │   ├── ai_recipe_generator.py
│   │   └── image_processing_service.py
│   └── main.py             # FastAPI application instance and main router
├── tests/                  # Unit and integration tests
│   ├── __init__.py
│   ├── conftest.py
│   └── api/
│       └── v1/
├── alembic/                # Alembic database migration scripts
├── alembic.ini
├── .env.example            # Example environment variables
├── Dockerfile
├── requirements.txt
└── README.md
```

### 3.4. Shared/Common Directory (If Monorepo)
*   If a monorepo structure is adopted, a `packages/shared/` or `common/` directory could house:
    *   Shared TypeScript types/interfaces used by both frontend and backend.
    *   Common utility functions.
    *   Validation schemas (if applicable to both).

## 4. Core Technology Stack & Justification (MVP) 💻

*   **Frontend:** React Native with Expo
    *   *Justification:* Cross-platform development (iOS & Android) from a single codebase. Expo simplifies setup, build, and deployment processes. Large community and rich ecosystem. Aligns with speaker's example.
*   **Backend:** Python with FastAPI
    *   *Justification:* High performance, easy to learn, robust data validation with Pydantic, automatic OpenAPI documentation. Python's strong AI/ML ecosystem is beneficial for future enhancements. Aligns with speaker's example.
*   **Database:** PostgreSQL
    *   *Justification:* Powerful, open-source relational database. Good for structured data like user profiles and recipes. Supabase provides managed PostgreSQL, simplifying operations.
*   **Authentication:** Supabase Auth
    *   *Justification:* Handles user registration, login, JWT management, and social logins out-of-the-box. Secure and integrates well with PostgreSQL.
*   **AI Recipe Generation:** OpenAI GPT-4 Vision API (or latest suitable multimodal model)
    *   *Justification:* State-of-the-art capabilities for analyzing images and text to generate creative and coherent content.
*   **Deployment (Frontend):** Expo Application Services (EAS Build & Submit)
    *   *Justification:* Simplifies the process of building and submitting apps to the Apple App Store and Google Play Store.
*   **Deployment (Backend):** Railway / Render (or similar PaaS)
    *   *Justification:* (As per speaker's suggestion) Offers ease of deployment, scalability, and managed infrastructure for FastAPI applications, often with Docker support.
*   **Version Control:** Git (hosted on GitHub, GitLab, or similar).
*   **Containerization:** Docker
    *   *Justification:* Ensures consistent development, testing, and deployment environments.

## 5. API Design Philosophy & Conventions
*   **RESTful Principles:** APIs will generally follow RESTful design principles.
*   **Versioning:** APIs will be versioned (e.g., `/api/v1/`).
*   **Data Format:** JSON for request and response bodies.
*   **Authentication:** JWT (JSON Web Tokens) for securing endpoints, managed by Supabase Auth and validated by FastAPI middleware.
*   **Error Responses:** Consistent error response format (e.g., `{"detail": "Error message", "error_code": "SPECIFIC_CODE"}`).
*   **Status Codes:** Use standard HTTP status codes appropriately (200, 201, 400, 401, 403, 404, 500, etc.).
*   **Idempotency:** Design `POST`, `PUT`, `DELETE` operations to be idempotent where appropriate.

## 6. Database Schema Design Approach
*   Normalize data to reduce redundancy and improve data integrity.
*   Use clear and consistent naming conventions for tables and columns.
*   Define appropriate primary keys, foreign keys, and indexes for performance.
*   Use Alembic for managing database schema migrations.
*   Refer to the individual feature specifications for detailed table structures.

## 7. Error Handling & Logging Strategy (High-Level)
*   **Frontend:** Gracefully handle API errors, network issues, and display user-friendly messages. Implement local logging for debugging.
*   **Backend:** Implement robust error handling in FastAPI. Log errors with sufficient context (e.g., using Python's `logging` module, potentially integrated with Sentry or similar).
*   **Structured Logs:** Use structured logging for easier parsing and analysis.

## 8. Security Considerations (High-Level)
*   **Input Validation:** Validate all user inputs on both frontend and backend (Pydantic for backend).
*   **Data Sanitization:** Protect against XSS and other injection attacks.
*   **Authentication & Authorization:** Secure endpoints appropriately. Use JWTs.
*   **Password Security:** Store hashed passwords (handled by Supabase Auth). Enforce strong password policies.
*   **Rate Limiting:** Implement on critical or costly API endpoints.
*   **OWASP Top 10:** Be mindful of common web application vulnerabilities.
*   **Dependency Management:** Keep libraries and dependencies updated to patch security vulnerabilities.

## 9. Testing Strategy (High-Level)
*   **Frontend:**
    *   Unit Tests (Jest, React Testing Library) for components and utility functions.
    *   Integration Tests for navigation and state management flows.
    *   E2E Tests (e.g., Detox or Appium) for critical user flows (Post-MVP focus).
*   **Backend:**
    *   Unit Tests (Pytest) for CRUD operations, services, and core logic.
    *   Integration Tests (Pytest with TestClient) for API endpoints.
*   **Code Coverage:** Aim for a reasonable code coverage target.

## 10. Build & Deployment Process Overview (CI/CD)
*   **Source Control:** Git branches for features, development, staging, and main/production.
*   **CI (Continuous Integration):** GitHub Actions (or similar) to automatically run tests, linting, and type-checking on every push/PR.
*   **CD (Continuous Deployment):**
    *   **Frontend:** EAS Build to create app binaries, EAS Submit to deploy to app stores (manual trigger for production).
    *   **Backend:** Automated deployment to staging environment on merge to develop/staging branch. Manual or semi-automated deployment to production from main branch (e.g., via Railway/Render integrations with GitHub).

## 11. Conclusion / Summary ✅

This document provides the foundational technical specifications and file structure for the MVP of the "Michelin Star Recipe Guide App." It establishes a clear organizational pattern for the codebase and outlines key technical decisions and principles. This blueprint will guide the development team in building a robust, maintainable, and scalable application. It is expected to be a living document, refined as development progresses and new insights are gained.