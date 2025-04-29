## Spring: Middleware Concepts (AOP & Web Filters/Interceptors)

Spring utilizes different mechanisms for intercepting requests or method executions, often referred to broadly as middleware or cross-cutting concerns.

**1. Spring AOP (Aspect-Oriented Programming):**
*   **Concept:** Intercepts method executions (join points) defined by pointcuts.
*   **Purpose:** Implements cross-cutting concerns like logging, security checks, transaction management, caching, performance monitoring.
*   **Definition:** Aspects are defined using classes annotated with `@Aspect` and `@Component` (or configured as beans).
*   **Advice Types:**
    *   `@Before`: Runs before the method.
    *   `@AfterReturning`: Runs after successful return.
    *   `@AfterThrowing`: Runs after an exception.
    *   `@After`: Runs regardless of outcome (finally).
    *   `@Around`: Surrounds the method execution, allowing control over proceeding (`ProceedingJoinPoint.proceed()`). Most powerful but complex.
*   **Pointcuts:** Expressions (using AspectJ syntax like `execution()`, `within()`, `@annotation()`) define where advice is applied.
*   **Registration:** Enabled via `@EnableAspectJAutoProxy`.
*   **Execution:** Spring AOP typically uses runtime proxies (JDK dynamic or CGLIB). Advice executes as part of the proxy invocation chain around the target method.
*   **Precedence:** Controlled using `@Order` on aspect classes (lower value = higher precedence).

**2. Spring MVC Interceptors (`HandlerInterceptor`):**
*   **Concept:** Specific to Spring MVC, intercepts incoming HTTP requests targeting controllers.
*   **Purpose:** Request pre-processing (auth checks, logging), post-processing (adding common model attributes), response completion handling.
*   **Definition:** Implement the `HandlerInterceptor` interface (`preHandle`, `postHandle`, `afterCompletion` methods).
*   **Registration:** Registered via `WebMvcConfigurer#addInterceptors`.
*   **Execution:** Executes within the `DispatcherServlet`'s request handling flow, before and after controller method invocation.

**3. Spring WebFlux Filters (`WebFilter`):**
*   **Concept:** Specific to Spring WebFlux, intercepts incoming HTTP requests in the reactive chain.
*   **Purpose:** Similar to MVC interceptors but operates non-blockingly within the reactive stream (e.g., modifying request/response headers, security checks, logging).
*   **Definition:** Implement the `WebFilter` interface (`filter` method).
*   **Registration:** Registered as Spring beans, order controlled by `@Order` or `Ordered` interface.
*   **Execution:** Executes as part of the reactive filter chain before the request reaches the handler function/method.

**Summary:**
*   **AOP:** General-purpose method interception for cross-cutting concerns across any Spring bean.
*   **`HandlerInterceptor` (MVC):** Web-specific request interception *before/after controller methods* in the Servlet stack.
*   **`WebFilter` (WebFlux):** Web-specific request interception *within the reactive chain* in the Reactive stack.

*(Synthesized from: ...spring_aop_advanced.md, ...spring_aop_around_advice.java, ...spring_web_advanced.md, ...java_spring_framework_overview.md)*