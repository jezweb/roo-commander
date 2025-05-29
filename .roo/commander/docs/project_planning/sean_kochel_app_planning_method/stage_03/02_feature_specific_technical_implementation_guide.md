+++
# --- Rich Markdown Document ---
id = "DOC-FeatureSpecAuth-20240516104500" # Example ID
title = "Technical Implementation Guide: User Authentication & Onboarding (MVP)"
subtitle = "Detailed Specifications for the Michelin Star Recipe Guide App"
document_type = "Feature Technical Specification"
status = "draft" # Will evolve as development progresses
created_date = "2024-05-16" # Replace with actual creation date
last_updated = "2024-05-16T10:45:00Z" # Replace with actual update timestamp
version = "1.0"
authors = ["Sean Kochel (Concept Originator & Initial Tech Choices via Video)", "AI Assistant (Drafter)"]
reviewers = ["[Lead Backend Developer]", "[Lead Frontend Developer]"] # Example
tags = ["documentation", "technical-specification", "feature-spec", "authentication", "onboarding", "recipe-app", "mvp"]
related_context = [
    "[.roo/path/to/DOC-MichelinRecipeAppTechSpec-20240516104000.md]",
    "[.roo/path/to/DOC-MichelinRecipeAppScreenSpecs-20240516103500.md]"
]
template_schema_doc = ".roo/commander/templates/documentation/template_02_rich_document.README.md"
+++

# Technical Implementation Guide: User Authentication & Onboarding (MVP)
Detailed Specifications for the Michelin Star Recipe Guide App

*(Created: 2024-05-16; Last Updated: 2024-05-16T10:45:00Z)*
*(Version: 1.0)*
*(Authors: Sean Kochel (Concept Originator & Initial Tech Choices via Video), AI Assistant (Drafter))*

## Table of Contents
- [1. Feature Overview: User Authentication & Onboarding](#1-feature-overview-user-authentication--onboarding)
  - [1.1. Goal](#11-goal)
  - [1.2. Core User Stories](#12-core-user-stories)
- [2. API Relationships & Dependencies](#2-api-relationships--dependencies)
- [3. Detailed Functional Requirements](#3-detailed-functional-requirements)
  - [3.1. Requirement A: Secure Authentication System](#31-requirement-a-secure-authentication-system)
  - [3.2. Requirement B: Progressive Onboarding Flow](#32-requirement-b-progressive-onboarding-flow)
  - [3.3. Requirement C: Basic Profile Management (related to Onboarding)](#33-requirement-c-basic-profile-management-related-to-onboarding)
- [4. Implementation Guide](#4-implementation-guide)
  - [4.1. Frontend Component Structure & Files](#41-frontend-component-structure--files)
  - [4.2. Frontend State Management](#42-frontend-state-management)
  - [4.3. Frontend Navigation Flow](#43-frontend-navigation-flow)
  - [4.4. Backend API Endpoints Design](#44-backend-api-endpoints-design)
  - [4.5. Database Schema (Relevant Tables)](#45-database-schema-relevant-tables)
  - [4.6. Key Logic & Pseudocode Examples](#46-key-logic--pseudocode-examples)
    - [4.6.1. Registration Flow (Pseudocode - Frontend & Backend Interaction)](#461-registration-flow-pseudocode---frontend--backend-interaction)
    - [4.6.2. Onboarding Step Submission (Pseudocode - Frontend & Backend Interaction)](#462-onboarding-step-submission-pseudocode---frontend--backend-interaction)
  - [4.7. Data Flow Diagrams (Conceptual)](#47-data-flow-diagrams-conceptual)
  - [4.8. Key Edge Cases](#48-key-edge-cases)
- [5. Security Implementation Details](#5-security-implementation-details)
- [6. Testing Strategy](#6-testing-strategy)
- [7. Logging & Error Handling](#7-logging--error-handling)
- [8. Future Considerations (Post-MVP for this feature)](#8-future-considerations-post-mvp-for-this-feature)

## 1. Feature Overview: User Authentication & Onboarding

### 1.1. Goal
To provide a secure, user-friendly system for new users to create an account and for existing users to log in. To seamlessly guide new users through an initial onboarding process to collect basic preferences for a personalized app experience.

### 1.2. Core User Stories
*   As a new user, I want to create an account easily using my email and password so I can save recipes and personalize my experience.
*   As an existing user, I want to log in securely to access my saved recipes and preferences.
*   As a new user, I want to provide my basic dietary preferences and cooking skill level during onboarding so the app can tailor suggestions (future) and my experience.
*   As a user, I want to be able to reset my password if I forget it.

## 2. API Relationships & Dependencies
*   **Supabase Auth API:** For user registration, login, logout, password reset, session management (JWTs).
*   **FastAPI User Service API (`/api/v1/users/`):**
    *   For creating/updating user profiles with onboarding data (preferences, skill level).
    *   For fetching user profile data.
*   **Email Service (e.g., SendGrid, Supabase built-in):** For sending email verification links and password reset links.
*   **Analytics Service (e.g., PostHog):** For tracking onboarding completion and user registration events.

## 3. Detailed Functional Requirements

### 3.1. Requirement A: Secure Authentication System
*   Multi-provider authentication:
    *   **MVP:** Email/Password registration and login.
    *   **(Consider for fast-follow MVP or early Post-MVP):** Social login (Google, Apple) via Supabase Auth.
*   Email verification with resend capability and timeout for verification link.
*   Password strength validation with real-time visual feedback.
*   Session management with refresh token rotation (handled by Supabase client libraries).
*   Account lockout after multiple failed login attempts with progressive delays.
*   Adherence to GDPR-compliant data handling and consent management for user data.

### 3.2. Requirement B: Progressive Onboarding Flow
*   A three-step onboarding process post-initial registration/login:
    1.  **Basic Info/Welcome:** (Implicitly covered by Welcome Screen leading to onboarding).
    2.  **Preferences:** Dietary restrictions, cooking skill level.
    3.  **Completion:** Confirmation of onboarding completion.
*   Skippable steps (e.g., "Skip for now" option), but the "Continue" button may be disabled until at least one selection is made or skip is explicitly chosen on preference screens.
*   Onboarding progress tracking (e.g., "Step X of Y").
*   Profile picture upload with image optimization (optional for MVP, can be a simple placeholder).

### 3.3. Requirement C: Basic Profile Management (related to Onboarding)
*   User preferences (dietary restrictions, cooking skill level) collected during onboarding are saved to the user's profile.
*   Ability to view (and ideally, Post-MVP, edit) these preferences in a profile section.

## 4. Implementation Guide

### 4.1. Frontend Component Structure & Files
(Referencing `Overall Technical Specification & File Structure Document` for base paths)

*   **Screens (`src/screens/auth/`):**
    *   `WelcomeScreen.tsx`: Displays options to sign up or sign in.
    *   `SignUpScreen.tsx`: Form for email/password registration.
    *   `SignInScreen.tsx`: Form for email/password login.
    *   `EmailVerificationScreen.tsx`: Info screen prompting user to check email, option to resend.
    *   `ForgotPasswordScreen.tsx`: Form to input email for password reset.
    *   `ResetPasswordScreen.tsx`: Form to input new password (accessed via deep link).
*   **Screens (`src/screens/onboarding/`):**
    *   `DietaryPreferencesScreen.tsx`: UI for selecting dietary restrictions.
    *   `SkillLevelScreen.tsx`: UI for selecting cooking skill level.
    *   `OnboardingCompletionScreen.tsx`: Confirmation screen.
    *   `OnboardingNavigator.tsx`: Stack navigator for the onboarding flow.
*   **Components (`src/components/auth/`):**
    *   `AuthButton.tsx`: Reusable button for auth actions.
    *   `SocialLoginButton.tsx`: (If social login included in MVP).
    *   `PasswordStrengthIndicator.tsx`: Visual component for password strength.
    *   `EmailInput.tsx`, `PasswordInput.tsx`: Specialized input components with validation.
*   **Components (`src/components/onboarding/`):**
    *   `PreferenceCard.tsx`: Selectable card for dietary/cuisine preferences.
    *   `SkillLevelSelector.tsx`: Radio button group for skill level.
    *   `ProgressIndicator.tsx`: Shows onboarding step.

### 4.2. Frontend State Management (`src/store/`)
*   `authStore.ts` (e.g., using Zustand or Redux Toolkit):
    *   `user`: Stores user object (from Supabase) and session token.
    *   `isAuthenticated`: Boolean.
    *   `isLoadingAuth`: Boolean for loading states during auth operations.
    *   `authError`: Stores any authentication error messages.
    *   `onboardingCompleted`: Boolean, fetched from user profile.
    *   Actions: `signUp`, `signIn`, `signOut`, `sendPasswordResetEmail`, `updatePassword`, `checkSession`.
*   `onboardingStore.ts`:
    *   `currentStep`: Tracks current onboarding step.
    *   `dietaryPreferences`: Array of selected preferences.
    *   `skillLevel`: Selected skill level.
    *   Actions: `setDietaryPreference`, `setSkillLevel`, `submitOnboardingData`, `skipStep`.

### 4.3. Frontend Navigation Flow (`src/navigation/`)
*   **`AuthNavigator.tsx`:** Stack navigator for all authentication screens (Welcome, Sign Up, Sign In, Forgot Password, Reset Password).
*   **`AppNavigator.tsx`:** Main app navigator (likely TabNavigator).
*   **Conditional Rendering in `App.tsx`:**
    *   If `isLoadingAuth` is true, show a global loading spinner.
    *   If `isAuthenticated` is false, show `AuthNavigator`.
    *   If `isAuthenticated` is true AND `onboardingCompleted` is false, show `OnboardingNavigator`.
    *   If `isAuthenticated` is true AND `onboardingCompleted` is true, show main `AppNavigator` (e.g., Bottom Tab Navigator).

### 4.4. Backend API Endpoints Design (FastAPI)
(Supabase handles most direct auth endpoints. These are for custom profile data linked to Supabase users.)

*   **User Profile Endpoints (`app/api/v1/endpoints/users.py`):**
    *   `POST /api/v1/users/me/profile`: Create/Update user profile (onboarding data).
        *   **Request Body:** `{ dietary_restrictions: string[], skill_level: string, onboarding_completed: boolean }`
        *   **Auth:** JWT Required. User ID extracted from token.
        *   **Response:** User profile object or success message.
    *   `GET /api/v1/users/me/profile`: Get current user's profile.
        *   **Auth:** JWT Required.
        *   **Response:** User profile object.
    *   `PUT /api/v1/users/me/onboarding/step`: Update a specific onboarding step or mark onboarding as complete.
        *   **Request Body:** `{ step_name: string, data: any, completed: boolean }`
        *   **Auth:** JWT Required.
        *   **Response:** Success message.
    *   `GET /api/v1/users/me/onboarding/progress`: Get onboarding progress.
        *   **Auth:** JWT Required.
        *   **Response:** `{ current_step: string, onboarding_completed: boolean }`

### 4.5. Database Schema (Relevant Tables - PostgreSQL via Supabase)
(Referencing `Overall Technical Specification & File Structure Document`)

*   **`users` table (managed by Supabase Auth):** Contains `id` (UUID), `email`, `encrypted_password`, etc.
*   **`profiles` table:**
    ```sql
    CREATE TABLE profiles (
        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE, -- Foreign key to auth.users
        email VARCHAR(255) UNIQUE NOT NULL,
        display_name VARCHAR(100),
        avatar_url TEXT,
        dietary_restrictions TEXT[], -- Array of strings
        skill_level VARCHAR(50),    -- e.g., 'beginner', 'intermediate', 'advanced'
        onboarding_completed BOOLEAN DEFAULT FALSE,
        terms_accepted_at TIMESTAMPTZ,
        privacy_accepted_at TIMESTAMPTZ,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );
    -- Trigger to create a profile when a new user signs up in auth.users
    CREATE OR REPLACE FUNCTION public.handle_new_user()
    RETURNS TRIGGER AS $$
    BEGIN
      INSERT INTO public.profiles (id, email)
      VALUES (new.id, new.email);
      RETURN new;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;

    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
    ```
*   **`onboarding_steps` table (Optional, for more granular tracking):**
    ```sql
    CREATE TABLE onboarding_steps (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
        step_name VARCHAR(50) NOT NULL, -- e.g., 'dietary_prefs', 'skill_level'
        completed_at TIMESTAMPTZ,
        skipped BOOLEAN DEFAULT FALSE,
        data JSONB, -- Store step-specific data if needed
        UNIQUE (user_id, step_name)
    );
    ```
*   **Indexes:**
    *   `CREATE INDEX idx_profiles_email ON profiles(email);`
    *   `CREATE INDEX idx_onboarding_steps_user_id ON onboarding_steps(user_id);`

### 4.6. Key Logic & Pseudocode Examples

#### 4.6.1. Registration Flow (Pseudocode - Frontend & Backend Interaction)

**Frontend (`SignUpScreen.tsx`):**
```pseudocode
FUNCTION handleRegistration(email, password, confirmPassword):
  IF passwords don't match:
    SHOW error "Passwords don't match"
    RETURN
  IF password strength < minimum:
    SHOW error "Password too weak"
    RETURN

  SET isLoadingAuth = true
  TRY:
    // Supabase handles direct registration
    authResult = AWAIT supabase.auth.signUp({ email, password })
    IF authResult.error:
      SHOW error authResult.error.message
      SET isLoadingAuth = false
      RETURN
    IF authResult.data.user AND authResult.data.session: // Auto-login on sign up
      // User is created in auth.users, trigger will create profile row.
      // Navigate to onboarding or main app.
      NAVIGATE to OnboardingNavigator OR AppNavigator (based on profile.onboarding_completed)
    ELSE: // Email confirmation required
      NAVIGATE to EmailVerificationScreen
  CATCH error:
    LOG error
    SHOW error "Registration failed. Please try again."
  FINALLY:
    SET isLoadingAuth = false
```

#### 4.6.2. Onboarding Step Submission (Pseudocode - Frontend & Backend Interaction)

**Frontend (`DietaryPreferencesScreen.tsx`):**
```pseudocode
FUNCTION handleSubmitDietaryPreferences(preferences):
  SET isLoading = true
  TRY:
    // Call backend API to save preferences
    apiResponse = AWAIT apiClient.post('/api/v1/users/me/profile', { dietary_restrictions: preferences })
    IF apiResponse.success:
      UPDATE onboardingStore.currentStep
      NAVIGATE to SkillLevelScreen
    ELSE:
      SHOW error "Could not save preferences."
  CATCH error:
    LOG error
    SHOW error "An error occurred."
  FINALLY:
    SET isLoading = false
```

**Backend (`app/api/v1/endpoints/users.py` - `/users/me/profile`):**
```pseudocode
FUNCTION update_user_profile(profile_data, current_user_id): // current_user_id from JWT
  // Validate profile_data (Pydantic schema)
  // DB Operation:
  // UPDATE profiles
  // SET dietary_restrictions = profile_data.dietary_restrictions,
  //     skill_level = profile_data.skill_level (if provided),
  //     onboarding_completed = profile_data.onboarding_completed (if provided),
  //     updated_at = NOW()
  // WHERE id = current_user_id;
  RETURN success_response
```

### 4.7. Data Flow Diagrams (Conceptual)
*   **Registration:** User Inputs (Email, Pass) -> Frontend Validation -> Supabase Auth API -> `auth.users` Table -> Trigger -> `profiles` Table (basic entry) -> Frontend (to Email Verification or Onboarding).
*   **Login:** User Inputs (Email, Pass) -> Frontend -> Supabase Auth API -> Session Token -> Frontend (stores token, navigates).
*   **Onboarding Step:** User Selection -> Frontend -> Backend User Service API -> `profiles` Table Update -> Frontend (navigates to next step).

### 4.8. Key Edge Cases
*   **Network Connectivity Loss:** During registration, login, or preference submission. App should handle gracefully, potentially offer retry.
*   **Email Verification Timeout:** User clicks expired verification link. System should allow resending a new link.
*   **Duplicate Registrations:** Supabase Auth handles email uniqueness. Frontend should display appropriate error.
*   **User Skips All Onboarding:** App should function with default/no preferences.
*   **Session Expiration:** During onboarding (unlikely for MVP, but for longer flows). App should gracefully redirect to login.
*   **Account Deletion with Pending Verification:** (Consider for Post-MVP).

## 5. Security Implementation Details
*   **HTTPS:** All API communication must be over HTTPS.
*   **JWT Handling:** Securely store JWT on the client (e.g., Expo SecureStore). Send via Authorization header (Bearer token).
*   **Input Validation:** Rigorous validation of all inputs on both frontend and backend (FastAPI Pydantic models).
*   **Password Policies:** Enforced by Supabase Auth (configurable) and frontend strength indicator.
*   **Email Verification:** Mandatory for account activation to prevent spam/fake accounts.
*   **CSRF Protection:** FastAPI has built-in mechanisms if forms are served directly, but less critical for pure API backend with mobile client.
*   **Rate Limiting:** Apply to login, registration, and password reset endpoints to prevent abuse.

## 6. Testing Strategy
*   **Frontend (Jest, React Testing Library):**
    *   Unit tests for form components, validation logic, state management actions.
    *   Integration tests for navigation between auth/onboarding screens.
*   **Backend (Pytest):**
    *   Unit tests for CRUD operations (`crud_user.py`), security utilities.
    *   Integration tests for API endpoints in `users.py` and `auth.py` (using FastAPI's `TestClient`), mocking Supabase calls where necessary.
*   **E2E (Post-MVP):** Full registration and onboarding flow.

## 7. Logging & Error Handling
*   **Frontend:**
    *   Log critical errors to a remote service (e.g., Sentry).
    *   Display user-friendly error messages for common issues (network, invalid credentials).
*   **Backend:**
    *   Structured logging for all requests and errors.
    *   Detailed error logging with stack traces to Sentry or similar.
    *   Monitor Supabase Auth logs if issues arise.

## 8. Future Considerations (Post-MVP for this feature)
*   Social Logins (Google, Apple).
*   Two-Factor Authentication (2FA).
*   Ability for users to edit their onboarding preferences after initial setup.
*   More sophisticated account recovery options.
*   Magic Link login.