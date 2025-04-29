+++
# --- Core Identification (Required) ---
id = "framework-spring" # << REQUIRED >> Example: "util-text-analyzer"
name = "🍃 Java Spring Developer" # << REQUIRED >> Example: "📊 Text Analyzer"
version = "1.0.0" # << REQUIRED >> Initial version

# --- Classification & Hierarchy (Required) ---
classification = "framework" # << REQUIRED >> Options: worker, lead, director, assistant, executive
domain = "backend" # << REQUIRED >> Example: "utility", "backend", "frontend", "data", "qa", "devops", "cross-functional"
# sub_domain = "optional-sub-domain" # << OPTIONAL >> Example: "text-processing", "react-components"

# --- Description (Required) ---
summary = "Expert in building robust, scalable Java applications using the Spring Framework and Spring Boot ecosystem." # << REQUIRED >>

# --- Base Prompting (Required) ---
system_prompt = """
You are Roo 🍃 Java Spring Developer. Your primary role and expertise is building and maintaining robust, scalable, and secure backend applications using the Java language and the comprehensive Spring ecosystem, including Spring Boot, Spring MVC/WebFlux, Spring Data JPA, and Spring Security.

Key Responsibilities:
- Implement backend features, REST APIs, and microservices using Spring Boot.
- Configure and manage application settings using `application.properties`/`.yml` and Spring profiles.
- Utilize Spring Data JPA for efficient database interaction, including repository creation, custom queries, and transaction management.
- Implement security measures (authentication, authorization) using Spring Security.
- Write unit, integration, and slice tests using Spring Boot Test, Mockito, and JUnit.
- Leverage Dependency Injection (DI) and Aspect-Oriented Programming (AOP) following best practices.
- Develop web controllers using Spring MVC or Spring WebFlux for request handling.
- Integrate with other services and external systems.

Operational Guidelines:
- Consult and prioritize guidance, best practices, and project-specific information found in the Knowledge Base (KB) located in `.ruru/modes/framework-spring/kb/`. Use the KB README to assess relevance and the KB lookup rule for guidance on context ingestion.
- Use tools iteratively and wait for confirmation.
- Prioritize precise file modification tools (`apply_diff`, `search_and_replace`) over `write_to_file` for existing files.
- Use `read_file` to confirm content before applying diffs if unsure.
- Execute CLI commands using `execute_command`, explaining clearly (e.g., Maven/Gradle commands).
- Escalate tasks outside core Spring expertise (e.g., complex frontend logic, advanced infrastructure setup) to appropriate specialists via the lead or coordinator.
""" # << REQUIRED >>

# --- Tool Access (Optional - Defaults to standard set if omitted) ---
# If omitted, assumes access to: ["read", "edit", "browser", "command", "mcp"]
# allowed_tool_groups = ["read", "edit", "command"] # Example: Specify if different from default

# --- File Access Restrictions (Optional - Defaults to allow all if omitted) ---
[file_access]
read_allow = ["**/*.java", "**/*.properties", "**/*.yml", "**/*.xml", "**/*.sql", ".ruru/**", "pom.xml", "build.gradle*", "settings.gradle*"] # Allow reading Java, config, build files, and ruru context
write_allow = ["**/*.java", "**/*.properties", "**/*.yml", "**/*.xml", "**/*.sql", ".ruru/modes/framework-spring/**"] # Allow modifying Java, config, SQL, and own mode files

# --- Metadata (Optional but Recommended) ---
[metadata]
tags = ["framework", "java", "spring", "spring-boot", "backend", "web", "api", "rest", "data-jpa", "spring-security", "testing", "maven", "gradle"] # << RECOMMENDED >> Lowercase, descriptive tags
categories = ["Backend Development", "Java Framework"] # << RECOMMENDED >> Broader functional areas
delegate_to = ["lead-db", "lead-devops", "lead-qa"] # << OPTIONAL >> Modes this mode might delegate specific sub-tasks to
escalate_to = ["lead-backend", "core-architect"] # << OPTIONAL >> Modes to escalate complex issues or broader concerns to
reports_to = ["lead-backend"] # << OPTIONAL >> Modes this mode typically reports completion/status to
documentation_urls = [ # << OPTIONAL >> Links to relevant external documentation
  "https://spring.io/projects/spring-framework",
  "https://spring.io/projects/spring-boot",
  "https://docs.spring.io/spring-data/jpa/reference/",
  "https://docs.spring.io/spring-security/reference/"
]
context_files = [ # << OPTIONAL >> Relative paths to key context files within the workspace
  ".ruru/docs/standards/coding_style_java.md", # Example
  "pom.xml",
  "build.gradle.kts"
]
context_urls = [] # << OPTIONAL >> URLs for context gathering (less common now with KB)

# --- Custom Instructions Pointer (Optional) ---
# Specifies the location of the *source* directory for custom instructions (now KB).
# Conventionally, this should always be "kb".
custom_instructions_dir = "kb" # << RECOMMENDED >> Should point to the Knowledge Base directory

# --- Mode-Specific Configuration (Optional) ---
# [config]
# key = "value" # Add any specific configuration parameters the mode might need
+++

# 🍃 Java Spring Developer - Mode Documentation

## Description

This mode specializes in developing backend applications using the Java Spring Framework and its extensive ecosystem, particularly Spring Boot. It focuses on building robust, scalable, and maintainable server-side logic, REST APIs, data persistence layers, and security implementations. It leverages core Spring concepts like Dependency Injection (DI), Aspect-Oriented Programming (AOP), and convention-over-configuration principles provided by Spring Boot for rapid development.

## Capabilities

*   **Application Setup & Configuration:** Initialize Spring Boot projects (using Initializr concepts), configure `application.properties`/`.yml`, manage profiles, and implement type-safe configuration properties.
*   **Web Development (MVC/WebFlux):** Create REST controllers (`@RestController`), handle HTTP requests (`@GetMapping`, `@PostMapping`, etc.), process request bodies (`@RequestBody`), path variables (`@PathVariable`), and request parameters (`@RequestParam`). Can work with both traditional Spring MVC (Servlet) and reactive Spring WebFlux.
*   **Data Persistence (Spring Data JPA):** Define JPA entities, create Spring Data repositories (`JpaRepository`), implement CRUD operations, derive queries from method names, write custom JPQL or native SQL queries (`@Query`), and manage transactions (`@Transactional`). Understands concepts like projections and auditing.
*   **Dependency Injection & Core Container:** Define and manage Spring beans (`@Component`, `@Service`, `@Repository`, `@Configuration`, `@Bean`), utilize constructor injection (`@Autowired`), and understand bean scopes and lifecycle.
*   **Security (Spring Security):** Configure basic authentication (form login, HTTP Basic), authorization rules (URL-based and method-level with `@PreAuthorize`), password encoding, and JWT validation (as a resource server).
*   **Testing:** Write unit tests (Mockito), slice tests (`@WebMvcTest`, `@DataJpaTest`), and integration tests (`@SpringBootTest`) using the Spring Boot testing framework. Familiar with `MockMvc`, `WebTestClient`, and `@MockBean`.
*   **AOP:** Implement cross-cutting concerns like logging or monitoring using Spring AOP (`@Aspect`, `@Around`, etc.).
*   **Build Tools:** Work with Maven (`pom.xml`) or Gradle (`build.gradle`/`build.gradle.kts`) for dependency management and build lifecycles.

## Workflow & Usage Examples

**General Workflow:**

1.  Receive task requirements (e.g., implement a new API endpoint, fix a bug in a service, add a database query).
2.  Analyze requirements and identify necessary Spring components (controllers, services, repositories, entities).
3.  Read relevant existing code (`read_file`) and KB documents.
4.  Implement or modify Java classes (`.java`), configuration files (`.properties`, `.yml`), or SQL scripts (`.sql`) using appropriate tools (`apply_diff`, `write_to_file`, `insert_content`).
5.  Write or update corresponding tests (`@SpringBootTest`, `@DataJpaTest`, etc.).
6.  Use `execute_command` to run build commands (e.g., `mvn clean install`, `./gradlew build`) or specific tests.
7.  Report completion, referencing modified files and test results.

**Usage Examples:**

**Example 1: Create a new REST endpoint**

```prompt
Implement a new GET endpoint `/api/v1/users/{id}` in `UserController.java` that retrieves a user by ID using `UserService` and returns a `UserDTO`. Ensure proper error handling for non-existent users.
```

**Example 2: Add a custom query to a repository**

```prompt
Add a method `findByStatusAndCreationDateBetween` to `OrderRepository.java` using Spring Data JPA query derivation or a custom `@Query` to find orders based on status and a date range. Include a corresponding test in `OrderRepositoryTest.java`.
```

**Example 3: Configure a new profile**

```prompt
Create a new Spring profile named 'staging'. Add a configuration file `application-staging.properties` to set the database URL specifically for the staging environment.
```

## Limitations

*   Does not typically handle frontend development (HTML, CSS, JavaScript frameworks like React/Angular/Vue).
*   Does not perform complex infrastructure setup (e.g., Kubernetes deployments, advanced cloud configurations) - delegates to DevOps/Infra specialists.
*   Relies on provided database schemas; does not perform advanced database design or administration.
*   Focuses on the Spring ecosystem; may need assistance for integrating with highly specialized non-Spring Java libraries.

## Rationale / Design Decisions

*   The Spring Framework is a vast and powerful ecosystem for Java development. A dedicated specialist mode ensures deep expertise in its core components (Boot, MVC/WebFlux, Data, Security) and associated best practices.
*   Separating backend Spring logic from frontend, database administration, or infrastructure concerns allows for focused development and leverages specialized skills effectively.
*   This mode is designed to handle the common tasks involved in building and maintaining Spring-based applications, from API development to data persistence and testing.

## Core Knowledge & Capabilities
# Core Knowledge & Capabilities: Java Spring Framework Specialist

This section outlines the foundational knowledge and capabilities expected of an AI assistant specializing in the Java Spring Framework ecosystem, derived primarily from official documentation.

---

**I. Core Spring Framework Concepts**

The foundation of the Spring ecosystem.

*   **A. Inversion of Control (IoC) / Dependency Injection (DI)**
    *   **Concept:** IoC is a principle where the control of object creation and dependency linking is transferred from the application code to a container or framework [1]. Dependency Injection is a specific pattern implementing IoC, where objects receive their dependencies from an external source (the IoC container) rather than creating them internally [1].
    *   **Principle:** Decoupling components, making the system more modular, testable, and maintainable [1].
    *   **Key Functionality:** The Spring IoC container manages the lifecycle and configuration of application objects (beans), assembling them based on configuration metadata [1].
    *   **Core Container:**
        *   `BeanFactory`: The basic interface providing IoC features, using lazy initialization by default [1].
        *   `ApplicationContext`: A sub-interface of `BeanFactory`, adding more enterprise-specific functionality like easier integration with Spring AOP, message resource handling, event publication, and application-layer specific contexts (e.g., `WebApplicationContext`) [1]. It typically uses eager initialization for singleton beans [1].
    *   **Configuration Approaches:**
        *   XML-based configuration (legacy, but still supported) [1].
        *   Annotation-based configuration (`@Component`, `@Service`, `@Repository`, `@Controller`, `@Autowired`, `@Configuration`, `@Bean`) [1].
        *   Java-based configuration (using `@Configuration` classes and `@Bean` methods) [1]. Spring Boot heavily favors Java-based and annotation-based configuration [2].
    *   **Pitfalls:** Circular dependencies (can sometimes be resolved with specific configuration, but often indicates design issues) [1], ambiguity when multiple beans of the same type exist (requires qualification using `@Qualifier` or `@Primary`) [1].

*   **B. Aspect-Oriented Programming (AOP)**
    *   **Concept:** AOP complements Object-Oriented Programming (OOP) by providing another way of thinking about program structure. While OOP's modularity unit is the class, AOP's unit is the *aspect*. Aspects enable the modularization of *cross-cutting concerns* (e.g., logging, transaction management, security) that cut across multiple types and objects [3].
    *   **Principle:** Separate cross-cutting concerns from business logic, improving code clarity and reducing code duplication [3].
    *   **Key Terminology (Documented in Spring AOP):**
        *   **Aspect:** The modularization of a cross-cutting concern [3].
        *   **Join Point:** A point during program execution, such as method execution or exception handling. In Spring AOP, a join point *always* represents a method execution [3].
        *   **Advice:** Action taken by an aspect at a particular join point (e.g., `Before`, `AfterReturning`, `AfterThrowing`, `Around`, `After`) [3].
        *   **Pointcut:** A predicate that matches join points. Advice is associated with a pointcut expression [3].
        *   **Target Object:** The object being advised by one or more aspects [3].
        *   **AOP Proxy:** An object created by the AOP framework to implement aspect contracts (typically a JDK dynamic proxy or a CGLIB proxy) [3].
        *   **Weaving:** Linking aspects with other application types or objects to create an advised object. This can happen at compile time, load time, or runtime. Spring AOP performs weaving at runtime [3].
    *   **Key Functionality:** Implementing logging, declarative transaction management, security checks, caching, etc., without cluttering core business logic [3].
    *   **Configuration Approaches:**
        *   Schema-based AOP support (XML) [3].
        *   @AspectJ annotation style (preferred) [3].
    *   **Pitfalls:** Understanding proxy mechanisms (self-invocation calls within the target object bypass the proxy and thus the advice) [3], complexity of pointcut expressions, potential performance overhead depending on advice complexity and frequency [3].

---

**II. Spring Boot**

Simplifies building production-ready Spring applications.

*   **A. Core Concepts & Principles**
    *   **Opinionated Defaults:** Provides pre-configured setups based on common use cases, reducing boilerplate configuration [2]. Developers can override these defaults [2].
    *   **Convention over Configuration:** Reduces the need for explicit configuration if standard conventions are followed (e.g., project structure, naming) [2].
    *   **Starters:** Convenient dependency descriptors (`spring-boot-starter-*`) that bundle common dependencies for specific functionalities (e.g., `spring-boot-starter-web` for MVC/REST, `spring-boot-starter-data-jpa` for JPA) [2]. They manage transitive dependencies and versions [2].
    *   **Auto-configuration:** Attempts to automatically configure the Spring application based on JAR dependencies present on the classpath [2]. For example, if `h2.jar` is on the classpath and no `DataSource` bean is explicitly configured, Spring Boot auto-configures an in-memory H2 database [2].

*   **B. Key Functionalities**
    *   **Standalone Applications:** Creates applications that can be run directly using `java -jar`, embedding servers like Tomcat, Jetty, or Undertow [2].
    *   **Externalized Configuration:** Allows configuration via properties files (`application.properties` or `application.yml`), environment variables, command-line arguments, etc., without changing code [2]. Provides a specific precedence order for these sources [2].
    *   **Spring Boot Actuator:** Provides production-ready features like health checks (`/actuator/health`), metrics (`/actuator/metrics`), application info (`/actuator/info`), environment details (`/actuator/env`), etc., exposed typically via HTTP or JMX endpoints [4].

*   **C. Best Practices (Derived from Documentation Structure/Emphasis)**
    *   Leverage starters for dependency management [2].
    *   Utilize auto-configuration where possible, customizing or excluding specific configurations when needed (`@EnableAutoConfiguration(exclude=...)` or properties) [2].
    *   Use externalized configuration for environment-specific settings [2].
    *   Structure code using standard package layouts recognized by component scanning [2].
    *   Secure Actuator endpoints in production environments [4].

*   **D. Configuration Approaches**
    *   `application.properties` or `application.yml` files [2].
    *   Profile-specific properties/YAML files (`application-{profile}.properties`) [2].
    *   Environment variables and system properties [2].
    *   Command-line arguments [2].
    *   Java System Properties (`java -D...`) [2].
    *   `@ConfigurationProperties` for type-safe binding of configuration to Java objects [2].
    *   Programmatic configuration via Spring Boot's API (less common for standard setup) [2].

*   **E. Pitfalls**
    *   Understanding auto-configuration behavior and how to debug/override it [2].
    *   Managing complex configuration precedence rules [2].
    *   Dependency conflicts if manually overriding versions managed by starters [2].
    *   Forgetting to secure Actuator endpoints [4].
    *   Classpath scanning issues if application structure deviates significantly from conventions [2].

---

**III. Spring MVC (Web Framework)**

Part of the core Spring Framework, providing the Model-View-Controller architecture for web applications.

*   **A. Core Concepts**
    *   **`DispatcherServlet`:** The central front controller that receives all requests and delegates processing to other components [5]. It is based on the Jakarta Servlet API [5].
    *   **HandlerMapping:** Maps incoming requests to handler methods (typically controller methods) based on URL patterns, HTTP methods, headers, etc. [5]. (`RequestMappingHandlerMapping` is commonly used with annotation-based controllers) [5].
    *   **HandlerAdapter:** Helps the `DispatcherServlet` invoke the mapped handler method, regardless of its specific signature [5]. (`RequestMappingHandlerAdapter` supports annotated controllers) [5].
    *   **Controller:** Component containing handler methods that process requests, interact with services, prepare model data, and determine the logical view name [5]. Annotated with `@Controller` or `@RestController`.
    *   **Model:** A holder for application data passed between the Controller and the View [5].
    *   **ViewResolver:** Maps logical view names returned by controllers to actual `View` implementations (e.g., Thymeleaf, JSP, Freemarker, JSON) [5].
    *   **View:** Responsible for rendering the output (e.g., HTML page, JSON/XML response) [5].

*   **B. Key Functionalities**
    *   Annotation-driven request handling (`@RequestMapping`, `@GetMapping`, `@PostMapping`, etc.) [5].
    *   Flexible method signatures for handler methods (e.g., injecting `HttpServletRequest`, `Model`, `@PathVariable`, `@RequestParam`, `@RequestBody`) [5].
    *   Data Binding: Automatically converting request parameters/body content to Java objects [5].
    *   Validation: Integration with Jakarta Bean Validation (`@Valid`) [5].
    *   RESTful Web Services: Support via `@RestController` (combines `@Controller` and `@ResponseBody`), `@ResponseBody`, `ResponseEntity`, and HTTP message converters (`HttpMessageConverter`) for handling JSON, XML, etc. [5].
    *   Exception Handling: Mechanisms like `@ExceptionHandler` methods, `HandlerExceptionResolver`, and `@ControllerAdvice` [5].
    *   View Technologies Integration: Support for various template engines and direct response writing [5].

*   **C. Common Patterns**
    *   Traditional MVC for server-side rendered HTML.
    *   REST API development for single-page applications or inter-service communication.
    *   Using DTOs (Data Transfer Objects) for request/response payloads.

*   **D. Configuration Approaches**
    *   Spring Boot auto-configures Spring MVC when `spring-boot-starter-web` is present [2, 5].
    *   Customization via `WebMvcConfigurer` interface beans [5].
    *   Configuration properties in `application.properties`/`yml` (e.g., `spring.mvc.view.prefix`) [2].

*   **E. Pitfalls**
    *   Ambiguous handler mappings [5].
    *   Data binding errors (type mismatches, validation failures) [5].
    *   Incorrect configuration of message converters for content negotiation (JSON/XML) [5].
    *   Blocking I/O in handler methods impacting scalability (consider reactive approaches like WebFlux for highly concurrent applications, though WebFlux is a separate module) [5, documentation often contrasts MVC with WebFlux].
    *   Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) vulnerabilities if security measures (like those provided by Spring Security) are not properly implemented [6].

---

**IV. Spring Data JPA**

Simplifies implementing JPA-based data access layers.

*   **A. Core Concepts**
    *   **Repository Abstraction:** Provides a programming model centered around repository interfaces, reducing boilerplate code for data access logic [7]. Based on the generic Spring Data repository infrastructure [8].
    *   **JPA Integration:** Builds upon the Java Persistence API (JPA) standard [7]. Requires a JPA provider (like Hibernate, EclipseLink) to be present [7].
    *   **Managed Repository Interfaces:** Developers define interfaces extending `Repository`, `CrudRepository`, `PagingAndSortingRepository`, or `JpaRepository`. Spring Data automatically provides implementations for these interfaces at runtime [7].
    *   **Query Methods:** Queries are automatically derived from method names in the repository interface (e.g., `findByLastName`, `findDistinctByFirstNameAndLastName`) [7].

*   **B. Key Functionalities**
    *   Standard CRUD operations (Create, Read, Update, Delete) inherited from `CrudRepository` or `JpaRepository` [7].
    *   Pagination and Sorting support via `PagingAndSortingRepository` or `JpaRepository` [7].
    *   Custom query execution using the `@Query` annotation (for JPQL or native SQL queries) [7].
    *   Support for projections (returning only specific fields) [7].
    *   Integration with Spring's transaction management [7].
    *   Auditing support (e.g., tracking created/modified dates and users) via annotations (`@CreatedDate`, `@LastModifiedDate`, etc.) [7].

*   **C. Common Patterns**
    *   Defining a repository interface per aggregate root/entity [7].
    *   Using query derivation for simple queries and `@Query` for complex ones [7].
    *   Leveraging Specifications (`JpaSpecificationExecutor`) or Querydsl (`QuerydslPredicateExecutor`) for dynamic, type-safe query building [7].

*   **D. Configuration Approaches**
    *   Spring Boot auto-configures Spring Data JPA when `spring-boot-starter-data-jpa` and a JPA provider are present [2, 7].
    *   DataSource configuration via `application.properties`/`yml` (`spring.datasource.*`) [2].
    *   JPA provider configuration via `application.properties`/`yml` (`spring.jpa.*`, e.g., `spring.jpa.hibernate.ddl-auto`, `spring.jpa.show-sql`) [2].
    *   Enable JPA repositories using `@EnableJpaRepositories` (often done automatically by Spring Boot) [7].

*   **E. Pitfalls**
    *   **N+1 Select Problem:** Lazily fetching associations can lead to numerous subsequent queries when accessing collections in a loop. Solutions involve eager fetching (using `JOIN FETCH` in JPQL or Entity Graphs) [7, often discussed in JPA provider docs like Hibernate's].
    *   Inefficient queries generated by complex derived method names or poorly written `@Query` statements [7].
    *   Transaction management issues: Forgetting `@Transactional` on service methods that modify data, leading to errors or inconsistent state [9, 7]. Understanding transaction propagation and isolation levels [9].
    *   Mixing JPA operations with direct JDBC access without proper flushing can lead to state inconsistencies [7, JPA Spec].
    *   Misunderstanding the difference between `getOne`/`getReference` (lazy reference) and `findById` (eager load) [7].

---

**V. Spring Security**

Provides comprehensive authentication and authorization capabilities.

*   **A. Core Concepts**
    *   **Authentication:** Verifying the identity of a principal (user) [6]. Involves components like `AuthenticationManager`, `ProviderManager`, `AuthenticationProvider`, `UserDetailsService` [6].
    *   **Authorization:** Determining if an authenticated principal has permission to access a resource [6]. Involves components like `AccessDecisionManager`, `AccessDecisionVoter`, and configuration attributes (e.g., roles, permissions) [6].
    *   **`SecurityContextHolder`:** Stores details of the currently authenticated principal (`SecurityContext`, containing an `Authentication` object) [6]. Typically uses a `ThreadLocal` strategy by default [6].
    *   **Servlet Filters:** Spring Security is primarily filter-based for web applications. A chain of filters (`FilterChainProxy`) intercepts requests to apply security concerns (e.g., authentication, authorization, CSRF protection, header writing) [6].
    *   **Principal:** The currently authenticated user/entity [6].
    *   **GrantedAuthority:** Represents a permission granted to the principal (often expressed as roles, e.g., `ROLE_USER`) [6].

*   **B. Key Functionalities**
    *   Protection against common vulnerabilities: CSRF, Session Fixation, Clickjacking, etc. [6].
    *   Various Authentication mechanisms: Form login, Basic authentication, OAuth2, SAML 2.0, LDAP, JWT [6].
    *   Authorization at different levels: Web request security (URL patterns, HTTP methods) and Method security (protecting service layer methods using annotations like `@PreAuthorize`, `@PostAuthorize`, `@Secured`) [6].
    *   Password Storage: Secure password encoding using `PasswordEncoder` implementations (e.g., `BCryptPasswordEncoder`) [6].
    *   Concurrency Control: Preventing concurrent sessions for the same user [6].
    *   Remember-Me Authentication [6].
    *   Integration with Spring MVC, WebFlux, RSocket, etc. [6].

*   **C. Common Patterns**
    *   Role-based access control (RBAC).
    *   Using JWT (JSON Web Tokens) for stateless authentication in APIs.
    *   Implementing custom `UserDetailsService` to load user data from a database [6].
    *   Configuring OAuth 2.0 Client or Resource Server support [6].

*   **D. Configuration Approaches**
    *   Spring Boot auto-configures basic security (HTTP Basic and form login) when `spring-boot-starter-security` is present [2, 6].
    *   Modern configuration relies on defining a `SecurityFilterChain` bean within a `@Configuration` class, typically extending `WebSecurityConfigurerAdapter` (deprecated) or directly defining the bean [6].
    *   Using a `HttpSecurity` object within the configuration to define rules via a fluent API (e.g., `http.authorizeHttpRequests().requestMatchers("/public/**").permitAll().anyRequest().authenticated().and().formLogin()...`) [6].
    *   Enabling method security using `@EnableMethodSecurity` (preferred) or the older `@EnableGlobalMethodSecurity` [6].
    *   Configuration properties in `application.properties`/`yml` (e.g., default user/password, though primarily for basic setups) [2].

*   **E. Pitfalls**
    *   Incorrect filter chain order or configuration leading to security bypasses [6].
    *   Disabling CSRF protection without understanding the implications (necessary for stateless APIs, but requires alternative protection like JWT) [6].
    *   Weak password encoding strategies or storing passwords insecurely [6].
    *   Exposing sensitive information through overly permissive authorization rules [6].
    *   Misunderstanding method security proxying (similar to AOP self-invocation issues) [6, 3].
    *   Complexities in OAuth2/OIDC configuration [6].

---

**VI. Spring AOP (Revisited in Context)**

While a core concept, its practical application often involves other modules.

*   **A. Core Concepts:** (See Section I.B)

*   **B. Key Functionalities in Practice**
    *   **Declarative Transaction Management:** Spring's most common use of AOP. Applying `@Transactional` annotation advises methods with transactional behavior (begin, commit/rollback) using AOP proxies [9].
    *   **Declarative Security:** Applying method-level security using Spring Security annotations (`@PreAuthorize`, etc.) is implemented via AOP [6].
    *   **Caching:** Spring's caching abstraction (`@Cacheable`, `@CacheEvict`) can be implemented using AOP [10].
    *   **Logging/Auditing:** Custom aspects can intercept method executions to log entry/exit, arguments, return values, or performance timings [3].

*   **C. Configuration Approaches**
    *   `@EnableTransactionManagement` for declarative transactions [9].
    *   `@EnableMethodSecurity` for declarative security [6].
    *   `@EnableCaching` for declarative caching [10].
    *   Defining custom aspects using `@Aspect` and related annotations [3].

*   **D. Pitfalls**
    *   **Self-Invocation:** Calls within the same object instance bypass the AOP proxy, meaning advice (like `@Transactional` or `@PreAuthorize`) will not be applied [3, 9, 6]. Solutions involve refactoring the call to a separate Spring bean or self-injecting the proxy [3].
    *   **Pointcut Specificity:** Overly broad pointcuts can advise unintended methods, potentially causing unexpected behavior or performance issues [3].
    *   **Advice Ordering:** When multiple aspects advise the same join point, the order can matter. Spring provides `@Order` or the `Ordered` interface to control aspect precedence [3].
    *   Interaction complexity between different advice types (e.g., security and transactions on the same method).

---

**VII. Testing Strategies**

Spring Framework and Spring Boot provide extensive testing support.

*   **A. Unit Testing**
    *   Testing individual components (e.g., services, utility classes) in isolation.
    *   Often involves mocking dependencies using libraries like Mockito, which integrates well with Spring [11].
    *   Does not require loading the Spring `ApplicationContext` [11].

*   **B. Integration Testing**
    *   Testing the interaction between multiple components, often requiring the Spring `ApplicationContext`.
    *   **`@SpringBootTest`:** Loads the complete `ApplicationContext` for integration tests [11]. Can be configured to start an embedded server for web layer testing (`webEnvironment` attribute) [11].
    *   **`TestRestTemplate` / `WebTestClient`:** Utilities provided by Spring Boot for making requests to a running server during tests [11].
    *   **MockMvc:** Allows testing Spring MVC controllers without needing a full HTTP server, performing requests directly against the `DispatcherServlet` [11, 5].

*   **C. Mocking and Spying**
    *   **`@MockBean`:** Replaces a bean in the `ApplicationContext` with a Mockito mock [11].
    *   **`@SpyBean`:** Wraps an existing bean in the `ApplicationContext` with a Mockito spy [11]. Useful for verifying interactions or partially mocking behavior.

*   **D. Test Slices**
    *   Annotations that load only a specific part ("slice") of the `ApplicationContext`, relevant to a particular layer, making tests faster and more focused than `@SpringBootTest` [11]. Examples:
        *   **`@WebMvcTest`:** For testing Spring MVC controllers (loads MVC infrastructure, security, filters, but not service/repository layers unless explicitly included or mocked) [11].
        *   **`@DataJpaTest`:** For testing JPA repositories (loads JPA entity configuration, `TestEntityManager`, configures an in-memory database by default, but not the full application context) [11].
        *   **`@RestClientTest`:** For testing REST clients (`RestTemplate`, `WebClient`) [11].
        *   **`@JsonTest`:** For testing JSON serialization/deserialization [11].

*   **E. Best Practices (Derived from Documentation)**
    *   Prefer unit tests for isolated logic [11].
    *   Use Test Slices for focused integration tests of specific layers [11].
    *   Use `@SpringBootTest` for end-to-end integration tests when necessary, but be mindful of execution time [11].
    *   Use `@MockBean` judiciously to isolate layers under test [11].
    *   Leverage `@Sql` or programmatic setup/teardown for database state management in `@DataJpaTest` or similar tests [11].
    *   Use profile-specific configuration (`@ActiveProfiles`) for tests if needed [11].

*   **F. Pitfalls**
    *   Slow test suites due to overuse of `@SpringBootTest` [11].
    *   Incorrectly configured test slices (e.g., needing a bean not included in the slice) [11].
    *   State leakage between tests (ensure proper cleanup, especially with databases) [11].
    *   Over-mocking, leading to tests that pass but don't reflect real integration behavior [11].
    *   Forgetting `@Transactional` on test methods that modify data in `@DataJpaTest` or similar tests (tests are rolled back by default in many Spring test contexts) [11].

---

**VIII. Common Patterns Across the Framework**

Recurring design solutions documented or enabled by Spring.

*   **A. Dependency Injection:** Foundational pattern used throughout the framework (See Section I.A).
*   **B. Template Method Pattern:** Used internally by classes like `JdbcTemplate`, `RestTemplate`, `JmsTemplate`, etc. They provide a skeleton algorithm, deferring specific steps (like mapping results or extracting data) to callback interfaces or abstract methods, handling resource management and exception translation [1, Spring documentation for specific template classes].
*   **C. Proxy Pattern:** Used extensively by Spring AOP [3], Transaction Management [9], and Method Security [6] to add behavior dynamically around target objects.
*   **D. Strategy Pattern:** Used in various places where algorithms or behaviors can be swapped. Examples include `AuthenticationManager` delegating to different `AuthenticationProvider` strategies [6], `ViewResolver` selecting different `View` strategies [5].
*   **E. Factory Pattern:** `BeanFactory` and `ApplicationContext` act as factories for beans [1]. `FactoryBean` interface allows creating complex beans via a factory method [1].
*   **F. Front Controller Pattern:** Implemented by `DispatcherServlet` in Spring MVC [5].

---

**IX. Potential Pitfalls Across the Framework**

Common issues encountered when using multiple Spring modules together.

*   **A. Configuration Complexity/Errors:** Especially in large applications with many profiles, conditional configurations (`@ConditionalOn...`), and custom auto-configurations. Debugging requires understanding Boot's auto-configuration report (`/actuator/conditions` or startup logging) [2, 4].
*   **B. Performance Issues:**
    *   N+1 selects in JPA/Hibernate [7].
    *   Inefficient AOP pointcuts or complex advice [3].
    *   Blocking operations in web handlers under high load [5].
    *   Inefficient transaction management (e.g., overly long transactions).
    *   Suboptimal DataSource connection pool configuration [2, DataSource provider docs].
*   **C. Security Misconfigurations:** Incorrect security filter rules, disabled CSRF without alternatives, weak password hashing, overly permissive access control [6].
*   **D. Transaction Management Issues:** Self-invocation bypassing `@Transactional` [9, 3], incorrect propagation levels, unexpected rollbacks or commits, mixing programmatic and declarative transactions without care [9].
*   **E. Version Conflicts / Compatibility:** Managing dependencies across multiple Spring projects and third-party libraries. Spring Boot's starters help significantly, but manual overrides or complex multi-module projects can still face issues [2]. Checking compatibility matrices is crucial.
*   **F. Classpath Issues:** Unexpected behavior due to conflicting libraries or missing dependencies, especially related to auto-configuration [2].
*   **G. State Management:** Issues with thread-safety if beans scoped incorrectly (e.g., instance variables in singleton controllers holding request-specific state) [1, 5]. `SecurityContextHolder`'s default `ThreadLocal` strategy can cause issues in reactive or asynchronous processing if not handled correctly [6].

---

**X. Boundary of Documentation**

*   **Deep Internals:** While documentation is comprehensive, the absolute lowest-level implementation details (e.g., exact bytecode manipulation by CGLIB, intricate details of JPA provider query optimization) are typically deferred to the documentation of those specific tools (CGLIB docs, Hibernate docs, etc.). Spring docs focus on *how to use* and *integrate* these tools.
*   **Complex Interactions:** The precise performance impact or subtle behavioral nuances arising from layering multiple complex features (e.g., deeply nested transactions + method security + custom AOP advice + JPA entity graphs) might not be explicitly documented as a combined scenario. Understanding relies on composing the documented behaviors of each individual feature.
*   **Third-Party Libraries:** Spring documentation covers integration points but doesn't replicate the full documentation for every third-party library it integrates with (e.g., Tomcat, Jackson, Logback, specific database drivers).
*   **Undocumented Edge Cases:** While extensive, it's possible for undocumented edge cases to exist, particularly concerning interactions between specific versions of different modules or underlying technologies. Official issue trackers (linked from project pages) sometimes contain information on these, but aren't strictly part of the reference documentation.
*   **Deployment Environment Specifics:** While Spring Boot docs cover cloud-native principles and some specific integrations (e.g., Kubernetes probes via Actuator), detailed configuration for every possible PaaS, CaaS, or serverless environment relies on the documentation of those platforms, although Spring often provides guidance or specific integration libraries (e.g., Spring Cloud).

---

**XI. Documentation References**

*   **[1] Spring Framework Documentation:** `https://docs.spring.io/spring-framework/docs/current/reference/html/` (Specifically Core Technologies sections)
*   **[2] Spring Boot Documentation:** `https://docs.spring.io/spring-boot/docs/current/reference/html/` (Specifically Core Features, Configuration, Starters sections)
*   **[3] Spring Framework AOP Documentation:** `https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#aop`
*   **[4] Spring Boot Actuator Documentation:** `https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html`
*   **[5] Spring Framework Web MVC Documentation:** `https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc`
*   **[6] Spring Security Documentation:** `https://docs.spring.io/spring-security/reference/index.html`
*   **[7] Spring Data JPA Documentation:** `https://docs.spring.io/spring-data/jpa/reference/html/`
*   **[8] Spring Data Commons Documentation:** `https://docs.spring.io/spring-data/commons/reference/html/` (Underlying repository concepts)
*   **[9] Spring Framework Transaction Management Documentation:** `https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html#transaction`
*   **[10] Spring Framework Cache Abstraction Documentation:** `https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#cache`
*   **[11] Spring Boot Testing Documentation:** `https://docs.spring.io/spring-boot/docs/current/reference/html/testing.html`
*   **[Jakarta EE Specs] Jakarta EE Specifications:** `https://jakarta.ee/specifications/` (e.g., Servlet, JPA, Bean Validation) - Referenced by Spring documentation.

*(Note: "current" in URLs typically points to the latest stable release documentation. Specific version documentation is also available on the Spring website.)*
