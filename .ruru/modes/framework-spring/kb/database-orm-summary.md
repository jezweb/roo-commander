## Spring Data JPA: Database Interaction

**Core Concept:** Spring Data JPA simplifies JPA-based data access layers by reducing boilerplate code.

**Repositories:**
*   **Interface-based:** Define an interface extending `JpaRepository<EntityType, IdType>` (or `CrudRepository`, `PagingAndSortingRepository`). Spring Data automatically provides implementations for common CRUD operations.
*   **Query Derivation:** Queries are automatically generated from method names (e.g., `findByLastname`, `countByStatus`). Supports keywords like `And`, `Or`, `Between`, `OrderBy`.
*   **`@Query`:** Define custom JPQL or native SQL queries via annotation. Use `@Modifying` for UPDATE/DELETE operations.
*   **Custom Implementations:** Extend repository interfaces with custom methods implemented in a separate class (`[RepositoryName]Impl`). Allows using `EntityManager` directly.

**Advanced Querying:**
*   **Projections:** Retrieve partial entity data using interfaces (defining getters) or DTO classes (with matching constructors) as return types in repository methods. Reduces data transfer.
*   **Specifications (`JpaSpecificationExecutor`):** Build dynamic, type-safe queries programmatically using the JPA Criteria API via the `Specification` interface. Useful for complex search criteria.
*   **Query by Example (`QueryByExampleExecutor`):** Create dynamic queries based on an example entity instance (`Example<T>`). Suitable for simple filtering based on populated fields.

**Key Features:**
*   **Auditing (`@EnableJpaAuditing`):** Automatically track creation/modification timestamps (`@CreatedDate`, `@LastModifiedDate`) and users (`@CreatedBy`, `@LastModifiedBy`) using `@EntityListeners(AuditingEntityListener.class)`.
*   **Pagination & Sorting:** Supported via `Pageable` argument in repository methods (e.g., `findAll(Pageable pageable)`).
*   **Transaction Management:** Integrates seamlessly with Spring's `@Transactional`. Repository methods are typically transactional by default (read-only for reads, requires transaction for writes).

**Common Pitfalls & Performance:**
*   **N+1 Selects:** Solve using `JOIN FETCH`, `@EntityGraph`, or batch fetching.
*   **Inefficient Projections:** Use DTOs or interface projections.
*   **Transaction Boundaries:** Keep `@Transactional` methods focused; use `readOnly=true` for reads.
*   **`findAll()` Abuse:** Use pagination (`Pageable`).
*   **Fetch Types:** Default to `LAZY` for collections; load explicitly when needed.

*(Synthesized from: ...spring_data_jpa_advanced.md, ...spring_data_jpa_custom_repo.java, ...spring_boot_datajpatest.java, ...spring_common_pitfalls_antipatterns.md)*