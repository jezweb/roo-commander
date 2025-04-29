## Spring Framework: Overview & Architecture

**Philosophy:** A comprehensive open-source Java platform simplifying enterprise development by managing infrastructure (via IoC/DI and AOP) and allowing focus on POJO-based business logic. Promotes loose coupling and testability. Spring Boot builds upon this, adding convention over configuration, auto-configuration, and embedded servers for rapid development.

**Core Concepts:**
*   **Inversion of Control (IoC) / Dependency Injection (DI):** The Spring container (`ApplicationContext`/`BeanFactory`) manages object creation (beans) and injects dependencies, promoting loose coupling.
*   **Aspect-Oriented Programming (AOP):** Modularizes cross-cutting concerns (logging, security, transactions) into Aspects, separating them from business logic. Uses Spring AOP or integrates with AspectJ.

**Architecture:** Modular and layered.
*   **Core Container:** Foundation for IoC/DI (`spring-core`, `spring-beans`, `spring-context`, `spring-expression`).
*   **AOP:** Enables aspect implementation.
*   **Data Access/Integration:** Simplifies DB access (JDBC, ORM/JPA) and transaction management.
*   **Web:** Includes Spring MVC (Servlet) and Spring WebFlux (Reactive).
*   **Other Modules:** Testing, Messaging, Integration, etc.

**Primary Use Cases:** Enterprise applications, web applications (MVC/REST APIs via WebFlux), microservices (with Spring Boot/Cloud), cloud-native apps, data access/integration, batch processing, event-driven systems.

**Key Benefits:** Simplified development (reduced boilerplate), modularity, testability, flexibility (Java/Kotlin/Groovy), rapid development (Boot), comprehensive ecosystem, strong community, integration capabilities, robust security (Spring Security).

*(Synthesized from: ...java_spring_framework_overview.md)*