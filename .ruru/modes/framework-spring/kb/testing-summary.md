## Spring Boot: Testing Strategies

**Core Dependency:** `spring-boot-starter-test` includes JUnit 5, Spring Test, Spring Boot Test, AssertJ, Mockito, etc.

**Testing Layers:**
1.  **Unit Tests:**
    *   **Focus:** Test single components (POJOs, services) in isolation.
    *   **Tools:** Plain JUnit 5, Mockito (`@Mock`, `@InjectMocks`, `when`, `verify`).
    *   **No Spring Context Loaded.**
2.  **Slice Tests (Integration):**
    *   **Focus:** Test a specific layer/slice of the application context.
    *   **Annotations:**
        *   `@WebMvcTest`: For MVC controllers. Loads web layer beans, auto-configures `MockMvc`. Mocks service/repo dependencies (`@MockBean`).
        *   `@WebFluxTest`: For WebFlux controllers. Loads reactive web layer, auto-configures `WebTestClient`. Mocks dependencies (`@MockBean`).
        *   `@DataJpaTest`: For JPA repositories/entities. Loads persistence layer, configures in-memory DB (default) or Testcontainers, provides `TestEntityManager`. Rolls back transactions by default.
        *   Other slices: `@JsonTest`, `@RestClientTest`, `@DataMongoTest`, etc.
    *   **Benefit:** Faster than full context tests, focuses testing scope.
3.  **Full Integration Tests (`@SpringBootTest`):**
    *   **Focus:** Test interactions across multiple layers, loading the full `ApplicationContext`.
    *   **Configuration:** `webEnvironment` attribute controls server startup (`MOCK`, `RANDOM_PORT`, `DEFINED_PORT`).
    *   **Tools:** Can inject any bean. Use `TestRestTemplate` or `WebTestClient` for HTTP tests if server is running.
    *   **Use Case:** End-to-end tests, verifying component integration.
    *   **Caution:** Slower than unit or slice tests; use judiciously.

**Key Tools & Concepts:**
*   **`MockMvc` (MVC):** Performs mock HTTP requests against controllers without a running server.
*   **`WebTestClient` (WebFlux/MVC):** Performs HTTP requests (sync/async) against endpoints. Preferred for WebFlux.
*   **`@MockBean`:** Replaces a bean in the Spring context with a Mockito mock. Used in slice/integration tests.
*   **`TestEntityManager` (`@DataJpaTest`):** Utility for JPA tests to interact directly with the persistence context (persist, find, flush).
*   **Testcontainers:** Runs real dependencies (databases, brokers) in Docker containers for more realistic integration tests. Integrates with Spring Boot (e.g., `@ServiceConnection`).
*   **`@ActiveProfiles`:** Activates specific Spring profiles for tests (e.g., `application-test.properties`).
*   **`@Sql`:** Executes SQL scripts before/after test methods for data setup/cleanup.
*   **Security Testing:** `spring-security-test` provides utilities (`@WithMockUser`, `SecurityMockMvcRequestPostProcessors`) to test security rules.

**Best Practices:** Use the appropriate test type, favor slice tests, mock dependencies effectively, keep tests independent, use Testcontainers for realistic DB tests, manage test configuration via profiles.

*(Synthesized from: ...spring_boot_testing_advanced.md, ...spring_boot_datajpatest.java)*