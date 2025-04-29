+++
id = "KB-JAVA-FRAMEWORKS-SPRING-JAKARTAEE-V1"
title = "Java Knowledge Base: Spring & Jakarta EE Basics"
context_type = "knowledge_base"
scope = "Foundational comparison of Spring Framework (including Spring Boot) and Jakarta EE (formerly Java EE) for enterprise application development."
target_audience = ["dev-java"]
granularity = "summary"
status = "active"
last_updated = "2025-04-29"
tags = ["java", "frameworks", "spring", "spring-boot", "jakarta-ee", "java-ee", "enterprise", "kb"]
relevance = "High: Understanding major enterprise frameworks is crucial."
target_mode_slug = "dev-java"
+++

# Spring Framework & Jakarta EE Basics

Both provide comprehensive models for enterprise Java development, simplifying complex application building.

## Jakarta EE (formerly Java EE)
*   **Nature:** A set of **specifications** defining a standard platform (hosted by Eclipse Foundation).
*   **Runtime:** Deployed on compliant **Application Servers** (e.g., GlassFish, WildFly) that implement the specifications.
*   **Key Specs:**
    *   Web: Servlet, JSP (less common now), RESTful Web Services (JAX-RS).
    *   Business: EJB (evolving usage), Contexts and Dependency Injection (CDI).
    *   Data: Persistence (JPA), Transactions (JTA).
*   **Approach:** Specification-first, implemented by multiple vendors.

## Spring Framework
*   **Nature:** A comprehensive **framework** providing its own implementations and abstractions (developed by Broadcom/VMware).
*   **Core Concepts:**
    *   **Inversion of Control (IoC) / Dependency Injection (DI):** Framework manages bean creation and wiring (`ApplicationContext`).
    *   **Aspect-Oriented Programming (AOP):** Modularizes cross-cutting concerns (logging, security).
    *   **Spring MVC:** Framework for web apps and REST APIs.
    *   **Data Access:** Simplified JDBC, ORM (Spring Data JPA), Transaction Management.
*   **Spring Boot:** Opinionated extension simplifying setup, configuration, and deployment (often with embedded servers).
*   **Approach:** Framework-first, often integrates with or provides alternatives to Jakarta EE standards.

## Relationship
*   **Historical:** Spring emerged offering simpler alternatives to early J2EE complexity.
*   **Standards vs. Framework:** Jakarta EE defines standards; Spring is a framework.
*   **Integration:** Spring uses/integrates with Jakarta EE specs (Servlet, JPA, JTA).
*   **Competition:** Offer competing approaches in DI (Spring Core vs. CDI), Web (Spring MVC vs. JAX-RS/Servlet), Deployment (Spring Boot embedded vs. App Server).
*   **Modern Usage:** Spring Boot is popular for microservices and rapid development. Jakarta EE remains strong in standardized environments and continues to evolve (e.g., MicroProfile).

**Choice depends on project needs, team expertise, infrastructure, and desired development velocity.**

*(Source: Synthesized from `.ruru/docs/vertex/research/dev-java/explanations/20250429125652-java_frameworks_spring_jakartaee_basics.md`)*