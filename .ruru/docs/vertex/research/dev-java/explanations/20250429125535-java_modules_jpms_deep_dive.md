```markdown
## Java Platform Module System (JPMS / Project Jigsaw) Deep Dive

The Java Platform Module System (JPMS), developed under the code name Project Jigsaw, was introduced in Java 9. It aims to provide reliable configuration, strong encapsulation, and a scalable Java platform by introducing a fundamental new unit of Java code organization: the module.

### Modules

A module is a self-describing collection of code and data. It consists of:
*   **Packages of Java types (classes, interfaces, etc.):** Similar to JAR files, but with explicit boundaries and dependencies.
*   **Resources:** Such as property files or images.
*   **A Module Descriptor (`module-info.java`):** A file defining the module's characteristics.

Modules allow for:
*   **Reliable Configuration:** Explicitly declaring dependencies (`requires`) ensures that all necessary modules are present at compile time and run time, avoiding the "classpath hell" problem.
*   **Strong Encapsulation:** By default, types within a module are not accessible from outside the module unless explicitly exported (`exports`). This prevents unintended reliance on internal implementation details.
*   **Scalable Java Platform:** The JDK itself was modularized, allowing developers to create custom runtime images containing only the necessary platform modules for their application, leading to smaller deployment sizes.

*(Source: Oracle Java Platform, Standard Edition Java Language Updates, Release 9 - Module System)*

### Module Descriptor (`module-info.java`)

This file, located at the root of the module's source code, defines the module. It is compiled into a `module-info.class` file placed in the root of the module's output directory or JAR.

Key directives within `module-info.java`:

*   **`module <module-name> { ... }`**: Defines the module itself. Module names follow reverse-domain naming conventions, similar to package names (e.g., `com.example.mymodule`).
*   **`requires <module-name>;`**: Declares a dependency on another module. The current module needs types from the target module to compile and run. By default, this implies *readability*: the current module can read the target module.
    *   **`requires transitive <module-name>;`**: Declares a dependency where any module requiring the current module *also* implicitly reads the target module. This is useful for modules that expose types from their dependencies in their own API.
*   **`exports <package-name>;`**: Makes the public types (and their nested public/protected types) within the specified package accessible to *all* modules that require this module.
*   **`exports <package-name> to <module-name1>, <module-name2>, ...;`**: A *qualified export*. Makes the public types within the specified package accessible *only* to the listed modules.
*   **`opens <package-name>;`**: Makes the types within the specified package accessible at runtime via reflection to *all* other modules. This allows deep reflection (accessing non-public members). Compile-time access is not granted unless the package is also `exports`ed.
*   **`opens <package-name> to <module-name1>, <module-name2>, ...;`**: A *qualified open*. Allows runtime reflection access to the types in the package *only* by the specified modules.
*   **`uses <service-interface-name>;`**: Declares that this module uses a service defined by the given interface (or abstract class). It indicates that the module may discover and load implementations of this service using `java.util.ServiceLoader`.
*   **`provides <service-interface-name> with <implementation-class-name1>, <implementation-class-name2>, ...;`**: Declares that this module provides one or more implementations of the specified service interface. These implementations can be discovered by other modules using `java.util.ServiceLoader`.

**Example `module-info.java`:**

```java
// In file src/com.greetings/module-info.java
module com.greetings {
    // Depends on the module org.astro
    requires org.astro;

    // Makes types in com.greetings.pkg accessible to all modules requiring com.greetings
    exports com.greetings.pkg;

    // Makes types in com.greetings.internal accessible via reflection only to org.astro
    opens com.greetings.internal to org.astro;

    // Indicates this module uses the WorldService interface
    uses com.example.WorldService;

    // Provides an implementation for the WorldService interface
    provides com.example.WorldService with com.greetings.DefaultWorldService;
}
```

*(Sources: Oracle Java Platform, Standard Edition Java Language Updates, Release 9 - Module System; The State of the Module System)*

### Module Path vs. Classpath

*   **Classpath:** The traditional mechanism in Java for locating `.class` files and resources. It's essentially a flat list of directories and JAR files. The JVM searches these locations sequentially. Issues include:
    *   No explicit dependencies: Leads to missing classes at runtime (`NoClassDefFoundError`).
    *   No encapsulation: All public types are accessible to everyone, leading to fragile dependencies on internal APIs.
    *   Shadowing: If the same class exists in multiple JARs, the first one found is loaded, potentially causing unexpected behavior.
*   **Module Path:** Introduced with JPMS. It's a list of directories containing modules (either exploded or packaged as modular JARs) and individual modular JAR files. The module system uses `module-info.java` files to:
    *   Resolve dependencies explicitly.
    *   Enforce encapsulation based on `exports` and `opens` directives.
    *   Prevent conflicts by ensuring each module is unique and its dependencies are met.

Code compiled for Java 9+ can exist on the classpath, the module path, or both during migration.

*(Source: Oracle Java Platform, Standard Edition Tools Reference - java command; The State of the Module System)*

### Automatic Modules

To ease migration, any existing JAR file placed on the module path *without* a `module-info.java` descriptor becomes an *automatic module*.
*   **Name:** Derived from the JAR filename (with version information stripped and non-alphanumeric characters replaced by dots) or specified by the `Automatic-Module-Name` entry in the JAR's `MANIFEST.MF` file. If neither is suitable, the JAR filename is used directly after sanitization.
*   **Dependencies:** It implicitly `requires` *all* other modules found on the module path (including other automatic modules and explicit modules).
*   **Exports:** It implicitly `exports` *all* of its packages.
*   **Encapsulation:** Offers no strong encapsulation benefits.

Automatic modules serve as a bridge, allowing non-modular libraries to be used by modular applications. However, relying on them long-term is discouraged due to their lack of explicit dependencies and encapsulation.

*(Source: The State of the Module System - Automatic modules)*

### Unnamed Module

Code loaded from the classpath (not the module path) belongs to a special module known as the *unnamed module*.
*   **Readability:** The unnamed module can read *all* other modules (explicit and automatic). This maintains backward compatibility, allowing classpath code to access libraries on the module path.
*   **Exports:** Packages in the unnamed module are *not* exported to explicit modules by default. An explicit module cannot declare a `requires` dependency on the unnamed module.
*   **Accessibility:** Code in an explicit module *cannot* access types from the unnamed module directly.

This ensures that modular code doesn't accidentally depend on arbitrary code from the classpath.

*(Source: The State of the Module System - The unnamed module)*

### Migration Strategies

Migrating a large application from the classpath to the module path is typically done incrementally:

1.  **Bottom-Up Migration:** Start by modularizing the libraries/components at the lowest level of the application dependency graph.
    *   Place existing library JARs on the module path, turning them into automatic modules.
    *   Gradually add `module-info.java` descriptors to these libraries, converting them into explicit modules. Define their dependencies (`requires`) and exported APIs (`exports`).
2.  **Top-Down Migration:** Start by modularizing the main application code.
    *   Create a `module-info.java` for the application module.
    *   Place all its dependencies (library JARs) on the module path as automatic modules.
    *   The application module will `requires` these automatic modules.
    *   Later, dependencies can be converted to explicit modules.
3.  **Dealing with Encapsulation Issues:** When moving to modules, previously accessible internal APIs might become hidden.
    *   Use command-line flags like `--add-exports` and `--add-opens` as temporary workarounds during migration to grant access needed by classpath code or other modules without modifying `module-info.java`.
    *   Refactor code to rely only on explicitly exported APIs.
4.  **Split Packages:** A package cannot exist in more than one module. If a library was split across multiple JARs (e.g., `javax.transaction` API JAR and implementation JAR), these must be refactored or combined into a single module.
5.  **Service Loader:** If the application uses `java.util.ServiceLoader`, update modules to use the `uses` and `provides...with` directives in their `module-info.java`.

The general advice is to make libraries modular first (bottom-up) before modularizing the application that uses them. Using build tools like Maven or Gradle with JPMS support is crucial for managing module dependencies and building modular JARs.

*(Sources: The State of the Module System - Migration; Oracle Java SE Documentation - Migration Guide)*
```