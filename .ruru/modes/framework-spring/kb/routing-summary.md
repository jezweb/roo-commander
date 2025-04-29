## Spring Web: Routing & Request Mapping

**Core Concept:** Both Spring MVC and Spring WebFlux map incoming HTTP requests to handler methods within controllers.

**Spring MVC (Servlet):**
*   **`DispatcherServlet`:** The central front controller that receives all requests.
*   **`HandlerMapping`:** Determines the appropriate handler (controller method) based on the request URL, HTTP method, headers, etc.
*   **`@RequestMapping` and variants:** Annotations used on controller classes and methods to define mappings.
    *   `@RequestMapping(value="/path", method=RequestMethod.GET)`: General mapping.
    *   `@GetMapping("/path")`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, `@PatchMapping`: HTTP method-specific shortcuts.
*   **Path Variables:** Defined using `{variable}` in the path and accessed via `@PathVariable` annotation on method arguments (e.g., `@GetMapping("/users/{id}")`, `public User getUser(@PathVariable Long id)`).
*   **Request Parameters:** Accessed via `@RequestParam` annotation (e.g., `@GetMapping("/search")`, `public List<Item> search(@RequestParam String query)`).
*   **Middleware/Interceptors:** `HandlerInterceptor` interfaces allow executing logic before, after, or upon completion of handler execution. Registered via `WebMvcConfigurer#addInterceptors`.

**Spring WebFlux (Reactive):**
*   **Functional Endpoints:** Routes defined programmatically using `RouterFunction` beans, often grouped using `RouterFunctions.route()`. Maps a `RequestPredicate` (matching criteria) to a `HandlerFunction` (request processing logic).
*   **Annotation-Based:** Similar to MVC, uses `@Controller` / `@RestController` with `@GetMapping`, `@PostMapping`, etc. The underlying mechanism uses `HandlerMapping` implementations suited for the reactive stack.
*   **Path Variables & Request Parameters:** Handled similarly to MVC using `@PathVariable` and `@RequestParam`.
*   **Middleware/Filters:** `WebFilter` interface allows intercepting requests/responses in the reactive chain. Registered as beans and ordered.

**Route Grouping:** Both frameworks support defining base paths at the class level (`@RequestMapping("/api/v1")` on the controller class) which are prepended to method-level mappings.

*(Synthesized from: ...spring_web_advanced.md, ...java_spring_framework_overview.md)*