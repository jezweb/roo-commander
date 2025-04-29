## Spring Web: Request Handling & Response Generation

**Core Components:** Controllers (`@Controller`, `@RestController`) contain handler methods responsible for processing requests and returning responses.

**Accessing Request Data:**
*   **`@PathVariable`:** Binds values from URI template variables.
*   **`@RequestParam`:** Binds request parameters (query parameters or form data).
*   **`@RequestHeader`:** Binds request header values.
*   **`@CookieValue`:** Binds HTTP cookie values.
*   **`@RequestBody`:** Binds the entire request body (e.g., JSON, XML) to a method argument. Requires appropriate `HttpMessageConverter` (automatically configured by Boot).
*   **`@ModelAttribute`:** Binds request parameters or form data to a command object (POJO). Also used for adding attributes to the model.
*   **Servlet API (MVC):** `HttpServletRequest`, `HttpServletResponse` can be injected.
*   **Reactive API (WebFlux):** `ServerWebExchange`, `ServerHttpRequest`, `ServerHttpResponse` provide access to request/response details.

**Generating Responses:**
*   **Spring MVC:**
    *   **View Resolution:** Return `String` (view name) or `ModelAndView`. `ViewResolver` maps logical view names to actual view technologies (e.g., Thymeleaf, JSP).
    *   **`@ResponseBody` / `@RestController`:** Return objects directly serialized to the response body (e.g., as JSON/XML) using `HttpMessageConverter`s. `ResponseEntity<T>` provides full control over status code and headers.
    *   **Redirects:** Return `"redirect:/new/path"`.
*   **Spring WebFlux:**
    *   **Reactive Types:** Return `Mono<T>` or `Flux<T>`. The framework handles subscribing and writing the emitted items to the response.
    *   **`@ResponseBody` / `@RestController`:** Similar to MVC, used for serializing return types (`Mono<User>`, `Flux<Event>`) to the response body.
    *   **`ResponseEntity<Mono<T>>` / `ResponseEntity<Flux<T>>`:** Provides control over status/headers while returning reactive types.
    *   **Server-Sent Events:** Return `Flux<ServerSentEvent>` for streaming.
    *   **View Resolution:** Supported, but less common than in MVC. Returns `Mono<String>` (view name) or `Mono<Rendering>`.

**Exception Handling:**
*   **`@ExceptionHandler`:** Methods within `@Controller` or `@ControllerAdvice` classes handle specific exceptions thrown during request processing.
*   **`@ControllerAdvice` / `@RestControllerAdvice`:** Centralizes exception handling logic across multiple controllers.
*   **Return Types:** Exception handlers can return `ModelAndView` (MVC), `ResponseEntity`, or objects (if `@ResponseBody` is present/implied) to customize the error response.

*(Synthesized from: ...spring_web_advanced.md, ...spring_mvc_controlleradvice.java)*