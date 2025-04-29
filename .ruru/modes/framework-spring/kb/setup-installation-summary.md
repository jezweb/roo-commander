## Spring Boot: Setup & Configuration

**Project Initialization:** Typically done via Spring Initializr (start.spring.io) or IDE integrations, which generate a project structure with build files (Maven/Gradle) and a main application class annotated with `@SpringBootApplication`.

**`@SpringBootApplication`:** A convenience annotation combining:
*   `@Configuration`: Tags the class as a source of bean definitions.
*   `@EnableAutoConfiguration`: Enables Spring Boot's auto-configuration mechanism based on classpath dependencies.
*   `@ComponentScan`: Scans for components (`@Component`, `@Service`, `@Repository`, `@Controller`, etc.) starting from the package of the annotated class.

**Configuration Files:**
*   **`application.properties` / `application.yml`:** Primary files for configuration, located in `src/main/resources`. YAML is often preferred for hierarchical structure.
*   **Externalized Configuration:** Properties can be defined outside the JAR (e.g., config files next to the JAR, command-line args, environment variables) and override packaged properties based on a defined order (command-line > env vars > external files > packaged files).
*   **Profiles:** Environment-specific configurations managed using profiles (e.g., `dev`, `prod`). Activated via `spring.profiles.active` property or `SPRING_PROFILES_ACTIVE` env var. Profile-specific files (`application-{profile}.properties`) override default properties.

**Type-Safe Binding (`@ConfigurationProperties`):**
*   Binds properties (using a prefix) to fields of a POJO.
*   Enable via `@EnableConfigurationProperties(YourProperties.class)` on a `@Configuration` class or by annotating the properties class with `@Component`.
*   Supports relaxed binding (e.g., `kebab-case` maps to `camelCase`).
*   Supports JSR-303 validation using `@Validated` on the properties class.

**Typical Directory Structure (Maven/Gradle Standard):**
```
src/
  main/
    java/      # Java source code (e.g., com/example/MyApplication.java)
    resources/ # Non-code resources
      static/    # Static web assets (CSS, JS, images)
      templates/ # Server-side view templates (Thymeleaf, etc.)
      application.properties (or .yml)
  test/
    java/      # Test source code
    resources/ # Test resources (e.g., application-test.properties)
pom.xml (or build.gradle[.kts])
```

*(Synthesized from: ...spring_boot_advanced_config.md, ...java_spring_framework_overview.md)*