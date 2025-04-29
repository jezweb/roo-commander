## Spring Security: Authentication & Authorization

**Core Concept:** Spring Security provides comprehensive and customizable security services for Spring applications.

**Authentication (Who are you?):**
*   **Mechanisms:**
    *   **Form Login:** Standard browser username/password login, highly customizable.
    *   **HTTP Basic:** Simple, stateless authentication via `Authorization` header.
    *   **JWT (OAuth2 Resource Server):** Validates JWT bearer tokens, common for stateless APIs.
    *   **LDAP:** Authenticates against LDAP directories.
    *   **SAML 2.0:** Enables Single Sign-On (SSO) integration with Identity Providers.
    *   **OAuth2 Client:** Authenticates users via external OAuth2/OIDC providers (Google, Okta, etc.).
*   **Core Components:** `AuthenticationManager`, `ProviderManager`, `AuthenticationProvider`, `UserDetailsService` (loads user data), `PasswordEncoder` (hashes passwords - BCrypt default).
*   **Configuration:** Typically done via `SecurityFilterChain` bean using `HttpSecurity` DSL (e.g., `http.formLogin(...)`, `http.httpBasic()`, `http.oauth2ResourceServer(oauth2 -> oauth2.jwt(...))`).

**Authorization (What are you allowed to do?):**
*   **Strategies:**
    *   **Role-Based (RBAC):** Access based on roles (e.g., `ROLE_ADMIN`). Uses `hasRole('ADMIN')` or `hasAnyRole('ADMIN', 'USER')`.
    *   **Permission-Based:** Access based on specific authorities/permissions (e.g., `user:read`). Uses `hasAuthority('permission')` or `hasAnyAuthority(...)`.
    *   **Access Control Lists (ACLs):** Fine-grained control over individual domain object instances.
*   **Configuration:**
    *   **URL-Based:** Using `HttpSecurity.authorizeHttpRequests(...)` with matchers (e.g., `requestMatchers("/admin/**").hasRole("ADMIN")`, `anyRequest().authenticated()`). Order matters (most specific rules first).
    *   **Method Security (`@EnableMethodSecurity`):** Secures individual service/component methods.
        *   `@PreAuthorize`: Checks authorization *before* method execution using SpEL (e.g., `@PreAuthorize("hasRole('ADMIN') or #username == authentication.principal.username")`).
        *   `@PostAuthorize`: Checks *after* method execution, can use return value (`returnObject`).
        *   `@PreFilter` / `@PostFilter`: Filters collections.

**Key Concepts:**
*   **`SecurityContextHolder`:** Holds the current `Authentication` object (principal, authorities).
*   **`SecurityFilterChain`:** Defines security rules (authentication, authorization, CSRF, headers, etc.) for specific request patterns.
*   **Password Encoding:** Crucial for storing passwords securely. `DelegatingPasswordEncoder` with BCrypt is recommended.
*   **CSRF Protection:** Enabled by default for stateful applications; often disabled for stateless APIs using token auth.
*   **Security Headers:** Configurable via `http.headers(...)` (CSP, XSS protection hints, HSTS, etc.).

*(Synthesized from: ...spring_security_advanced.md, ...spring_security_preauthorize.java)*