## Spring Core: Dependency Injection (DI) & Service Container

**Core Concept (Inversion of Control - IoC):** Instead of components creating their own dependencies, the control is inverted: the Spring IoC container is responsible for instantiating, configuring, and assembling objects (beans) and injecting their dependencies.

**The Container:**
*   **`BeanFactory`:** Basic interface providing DI capabilities.
*   **`ApplicationContext`:** Sub-interface of `BeanFactory`, adding more enterprise features (event publication, internationalization, easier integration with AOP, web features). This is the preferred container interface.

**Bean Definition & Registration:**
*   **Annotations:**
    *   `@Component`: Generic stereotype for any Spring-managed component.
    *   `@Service`: Specialization for service layer beans.
    *   `@Repository`: Specialization for data access layer beans (often enables exception translation).
    *   `@Controller` / `@RestController`: Specialization for web layer beans.
    *   `@Configuration`: Declares a class as a source of bean definitions.
*   **`@Bean` Methods:** Methods within a `@Configuration` class annotated with `@Bean` define beans. The method name is typically the bean ID, and the return value is the bean instance.
*   **Component Scanning:** Enabled by `@ComponentScan` (included in `@SpringBootApplication`). Spring scans specified packages for classes annotated with stereotype annotations.

**Dependency Resolution & Injection:**
*   **`@Autowired`:** Marks a constructor, field, setter method, or config method as requiring dependency injection.
*   **Injection Types:**
    *   **Constructor Injection (Preferred):** Dependencies are declared as constructor arguments. Makes dependencies explicit, supports immutability (`final` fields), simplifies testing, fails fast if dependencies are missing or circular (usually). Recommended practice.
        ```java
        @Service
        public class MyService {
            private final UserRepository userRepository;
            
            @Autowired // Optional on single constructor since Spring 4.3
            public MyService(UserRepository userRepository) {
                this.userRepository = userRepository;
            }
        }
        ```
    *   **Setter Injection:** Dependencies are injected via setter methods. Allows optional dependencies and re-configuration, but makes dependencies less explicit and doesn't support `final` fields easily.
    *   **Field Injection (Discouraged):** Dependencies are injected directly into fields. Hides dependencies, makes testing harder (requires reflection or Spring context), prevents immutability, more prone to runtime circular dependency issues.
*   **Resolving Ambiguity:**
    *   **`@Primary`:** Marks one bean definition as the primary candidate if multiple beans of the same type exist.
    *   **`@Qualifier("beanName")`:** Specifies the exact bean name to inject when multiple candidates exist.
*   **`@Lazy`:** Can be used to initialize a bean lazily (on first use) rather than eagerly at startup. Can sometimes help break circular dependencies (use with caution).

**Pitfalls:** Field injection, circular dependencies (often indicate design issues), incorrect component scanning, ambiguity without `@Qualifier`/`@Primary`.

*(Synthesized from: ...java_spring_framework_overview.md, ...spring_common_pitfalls_antipatterns.md)*