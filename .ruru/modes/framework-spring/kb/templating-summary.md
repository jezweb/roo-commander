## Spring Web: Server-Side Templating

**Concept:** Spring MVC provides integration with various server-side templating engines to render dynamic HTML views.

**Integration:**
*   **View Resolution:** Spring MVC uses the `ViewResolver` interface to map logical view names (returned as `String` or part of `ModelAndView` from controllers) to actual view implementations.
*   **Common Engines:** Spring Boot provides auto-configuration for popular engines when their dependencies are on the classpath:
    *   **Thymeleaf:** Feature-rich Java template engine, processes HTML files directly. Often preferred for modern Spring MVC apps.
    *   **FreeMarker:** General-purpose template engine.
    *   **Groovy Templates:** Uses Groovy's markup template engine.
    *   **JSP (JavaServer Pages):** Older technology, requires specific packaging (WAR) and configuration.
*   **Data Passing:** Controllers pass data to views by adding attributes to the `Model` object (which can be injected as a method argument or is part of `ModelAndView`). Template engines then access these attributes using their specific syntax (e.g., `${attributeName}` in Thymeleaf).
*   **Layouts/Fragments:** Most engines support creating reusable layout templates and including partial views/fragments (e.g., Thymeleaf Layout Dialect or `th:insert`/`th:replace`).

**Spring WebFlux:**
*   While primarily focused on APIs, WebFlux also supports server-side rendering with similar template engines (Thymeleaf, FreeMarker) using reactive data binding. View names are typically returned within a `Mono<String>` or `Mono<Rendering>`.

**API Focus:** Many modern Spring Boot applications are primarily REST APIs, serving JSON data to frontend frameworks (React, Angular, Vue) or mobile apps. In these cases, server-side templating is not used; controllers are annotated with `@RestController` and return data objects directly.

*(Synthesized from: ...java_spring_framework_overview.md, ...spring_web_advanced.md)*