Kotlin Multiplatform (KMP) is a technology developed by JetBrains that allows developers to share code across different platforms, such as iOS, Android, desktop (Windows, macOS, Linux), web, and server-side, while retaining the benefits of native programming [8, 21]. It aims to reduce the time spent writing and maintaining the same logic for multiple platforms [8, 21].

### Core Concepts

*   **Code Sharing:** KMP enables sharing common code (like business logic, data models, networking) written in Kotlin across various platforms [4, 6].
*   **Native Performance:** Shared Kotlin code compiles to platform-specific formats: JVM bytecode for Android, native binaries for iOS and other native targets (using Kotlin/Native), and JavaScript for web [14, 31]. This ensures performance close to native applications [5].
*   **Flexibility:** Developers can choose how much code to share – from just the core logic to sharing UI with Compose Multiplatform [3, 8]. Platform-specific code (like native UI or platform API usage) can still be written in the platform's native language (Swift/Objective-C for iOS, Java/Kotlin for Android) or using Kotlin's platform-specific features [6, 7].

### Architecture

KMP's architecture revolves around separating code into common and platform-specific modules [4, 15].

*   **Common Code (`commonMain`):** This source set contains platform-agnostic Kotlin code shared across all targeted platforms. It can depend on multiplatform libraries but cannot directly access platform-specific APIs [14, 21].
*   **Platform-Specific Code (`androidMain`, `iosMain`, `jvmMain`, etc.):** These source sets contain Kotlin code specific to a particular platform target. They can implement platform-specific features, access native APIs, and depend on platform-specific libraries [14, 21].
*   **Intermediate Source Sets:** For sharing code among a subset of targets (e.g., `appleMain` for all Apple targets like iOS, macOS, watchOS), intermediate source sets can be used. This helps provide or consume specific APIs relevant only to that group of targets [21, 22]. The Kotlin Gradle plugin provides a default hierarchy template to simplify setting up these intermediate sets [21, 22, 24].
*   **`expect`/`actual` Mechanism:** This core KMP feature allows defining expected declarations (functions, classes, properties, etc.) in `commonMain` without implementation. Each platform-specific source set must then provide the corresponding `actual` implementation using platform-specific APIs [1, 11, 12]. The compiler ensures that every `expect` has a matching `actual` for all targets [1, 11]. This mechanism enables common code to rely on platform-specific functionality in a type-safe way [1, 12]. Alternatively, Dependency Injection (DI) frameworks can be used to inject platform-specific implementations based on interfaces defined in common code [1, 11].

### Project Structure

A typical KMP project includes [7, 15, 25]:

1.  **Shared Module:** Contains the common Kotlin code (`commonMain`) and platform-specific Kotlin code (`androidMain`, `iosMain`, etc.) within different source sets [7, 15]. This module is usually configured as an Android library if targeting Android [25].
2.  **Platform-Specific Application Modules:**
    *   **Android App Module (`androidApp` or similar):** A standard Android application module that depends on the shared module. UI is typically implemented here using standard Android practices (XML or Jetpack Compose) [15, 25].
    *   **iOS App Project (`iosApp` or similar):** An Xcode project that integrates the shared module (compiled as a native framework) and implements the UI using SwiftUI or UIKit [15, 25].

### Gradle Configuration

Gradle is used as the build system, configured using `build.gradle.kts` (Kotlin DSL) or `build.gradle` (Groovy DSL) [2, 14].

*   **`kotlin-multiplatform` Plugin:** Applied to the shared module to enable KMP builds. The plugin ID is `org.jetbrains.kotlin.multiplatform` [2].
*   **`kotlin { ... }` Block:** The main block for KMP configuration in the `build.gradle.kts` file [2].
    *   **Targets:** Define the platforms the shared code will compile for (e.g., `androidLibrary()`, `iosX64()`, `iosArm64()`, `jvm()`, `js()`, `wasmJs()`). Each target corresponds to a platform and configures how the code is compiled for it [2, 5]. For iOS, multiple targets are usually defined for different architectures (device, simulator) [5, 27]. Binaries like iOS frameworks (`.xcframework`) are configured within the target blocks [5, 27].
    *   **Source Sets (`sourceSets { ... }`):** Define the structure of the code. Gradle automatically creates source sets like `commonMain`, `commonTest`, and platform-specific ones (e.g., `androidMain`, `iosMain`) based on the declared targets [2, 7]. Dependencies for each source set are declared within this block [2, 14]. The default hierarchy template automatically creates and configures dependencies for intermediate source sets (like `iosMain` depending on `commonMain`) [22, 24].
    *   **Dependencies:** Multiplatform libraries are added to `commonMain` dependencies using their base artifact name (e.g., `implementation("io.ktor:ktor-client-core:...")`). The plugin automatically resolves the correct platform-specific artifact for each target [21, 30]. Platform-specific libraries are added to the corresponding platform source set dependencies (e.g., Android libraries in `androidMain`) [15, 21].

### Common Libraries

Several libraries are commonly used in KMP projects to facilitate shared code development [3, 10, 20, 26]:

*   **`kotlinx.coroutines`:** For managing asynchronous operations across all platforms [5, 10].
*   **`Ktor`:** A multiplatform asynchronous HTTP client (and server) framework for making network requests [3, 10, 26].
*   **`kotlinx.serialization`:** For serializing and deserializing data (e.g., JSON) in a multiplatform way [3, 10].
*   **`SQLDelight`:** Generates type-safe Kotlin APIs from SQL statements, enabling shared database access logic [3, 10, 26]. Requires platform-specific drivers.
*   **`Multiplatform Settings`:** For saving simple key-value data [3, 20, 26].
*   **Dependency Injection (DI):** Libraries like Koin are often used to manage dependencies, including injecting platform-specific implementations [3, 11, 26].
*   **`Compose Multiplatform`:** An optional UI framework by JetBrains based on Jetpack Compose, allowing developers to share UI code across Android, iOS (Beta), Desktop, and Web (Alpha/Wasm) [5, 17, 23, 32].

### Testing Strategies

Testing is crucial in KMP to ensure shared logic works correctly on all platforms [6, 28].

*   **Common Tests (`commonTest`):** Unit tests for the shared code in `commonMain` are placed in the `commonTest` source set. These tests use multiplatform testing libraries like `kotlin.test` [6, 16, 29]. Dependencies are added to the `commonTest` source set in Gradle [29].
*   **Platform-Specific Tests:** Tests requiring platform-specific APIs or validating `actual` implementations are placed in platform-specific test source sets (e.g., `androidTest`, `iosTest`) [6, 16]. These tests can use platform-specific testing frameworks (like JUnit on Android/JVM) alongside `kotlin.test` [6, 28].
*   **Test Resources:** Handling test resources (like JSON files) requires placing them in platform-specific resource directories (e.g., `androidTest/resources`) and using `expect`/`actual` mechanisms to load them in `commonTest` [13].
*   **Asynchronous Code Testing:** `kotlinx-coroutines-test` is used for testing coroutine-based asynchronous code [16].

### Typical Use Cases

KMP is versatile and used in various scenarios [3, 8, 9]:

*   **Sharing Business Logic:** The most common use case is sharing application logic (data handling, validation, use cases) between mobile apps (iOS and Android) while keeping the UI native [7, 8]. Companies like Netflix, Philips, and McDonald's use KMP for this [9].
*   **Sharing Data Layer:** Sharing networking code (API clients using Ktor) and data persistence logic (using SQLDelight) [8, 10].
*   **Creating Multiplatform Libraries:** Developing libraries intended for use across multiple Kotlin-supported platforms [21].
*   **Full-Stack Development:** Sharing code between backend (JVM) and frontend (JS/Wasm, Android, iOS) applications.
*   **Shared UI with Compose Multiplatform:** Building applications where both the logic and the UI are shared across platforms like Android, iOS, Desktop, and Web [8, 23]. Forbes and Wrike utilize this approach [9].
*   **Gradual Integration:** Introducing KMP into existing native applications by migrating specific modules or features to shared code [4].