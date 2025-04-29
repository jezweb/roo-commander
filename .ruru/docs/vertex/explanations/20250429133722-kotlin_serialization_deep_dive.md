Kotlin Serialization (`kotlinx.serialization`) is a framework developed by JetBrains for converting Kotlin objects into formats like JSON, Protobuf, CBOR, etc., and back. It is designed to be type-safe, reflectionless, and multiplatform [2, 9].

### Core Features

*   **Compiler Plugin:** `kotlinx.serialization` relies on a compiler plugin (`org.jetbrains.kotlin.plugin.serialization`) [1, 9]. This plugin automatically generates `KSerializer` implementations for classes marked with the `@Serializable` annotation at compile time [2, 8]. This approach avoids the runtime overhead and potential issues associated with reflection-based serialization libraries [3, 7].
*   **Type Safety:** The framework fully supports and enforces Kotlin's type system, including nullability and generics [9, 21]. It ensures that only valid objects matching the defined Kotlin types can be deserialized, catching potential mismatches at compile time or providing clear errors at runtime [9, 21, 27]. For example, attempting to deserialize a `null` JSON value into a non-nullable Kotlin property will result in an exception unless specific configurations are used [27]. Similarly, deserializing collections with generic types works seamlessly without requiring type tokens, unlike some reflection-based libraries [21].

### Supported Formats

`kotlinx.serialization` provides runtime libraries for various serialization formats [1, 2]:
*   **JSON:** (`kotlinx-serialization-json`) The most mature and stable format, widely used for web APIs [1, 8].
*   **Protocol Buffers (Protobuf):** (`kotlinx-serialization-protobuf`) A binary format developed by Google, efficient for structured data [1, 2].
*   **CBOR:** (`kotlinx-serialization-cbor`) A binary format designed to be concise, often used in constrained environments [1, 2].
*   **Properties:** (`kotlinx-serialization-properties`) For handling Java properties files [2, 9].
*   **HOCON:** (`kotlinx-serialization-hocon`) (JVM only) Human-Optimized Config Object Notation [2, 3].

Note that formats other than JSON are often marked as experimental, meaning their APIs might change [1, 9]. Community libraries exist for other formats like YAML and Avro [1].

### Handling Default Values

*   By default, properties with default values in Kotlin classes are *not* encoded if their value is equal to the default [9, 17]. This assumes the receiving end has the same data model and can apply the default value during deserialization [17].
*   To force the encoding of default values, you can configure the format instance (e.g., `Json { encodeDefaults = true }`) [17].
*   Since version 1.3.0, the `@EncodeDefault` annotation allows fine-grained control per property, overriding the global configuration [5, 17].

### Handling Nullability

*   Kotlin's null safety is fully integrated. Nullable properties (e.g., `val property: String?`) are serialized as `null` in JSON and correctly deserialized [18, 27].
*   By default (`explicitNulls = true` in JSON configuration), `null` values are explicitly encoded [5, 20].
*   Setting `explicitNulls = false` omits properties with `null` values from the output. During deserialization with this setting, a missing field for a nullable property (without a default value) is treated as `null` [5, 20].
*   Distinguishing between an explicitly provided `null` and a missing (optional) property requires custom handling, often involving a wrapper class like `OptionalProperty` [18].

### Polymorphism (Sealed Classes, Interfaces)

`kotlinx.serialization` supports polymorphic serialization, allowing you to serialize objects where the exact type isn't known at compile time but belongs to a known hierarchy [9, 12].

*   **Sealed Classes:** This is the most straightforward way to handle polymorphism [12, 21]. Mark the base sealed class and all direct subclasses with `@Serializable` [4, 12]. By default, a type discriminator property (commonly `"type"`) is added to the output (e.g., JSON) indicating the specific subclass [3, 12]. The name of this discriminator and the serialized names of subclasses can be customized [9, 12].
*   **Interfaces and Abstract Classes (Open Polymorphism):** Serialization of interfaces or non-sealed abstract classes requires explicit registration of subclasses [12, 14]. You define a `SerializersModule` where you declare the base class (interface or abstract class) and register its possible concrete subclasses using the `polymorphic` and `subclass` builders [4, 12, 14]. This module is then provided to the format instance (e.g., `Json`) [12]. Properties of interface or non-serializable types must be explicitly marked with `@Polymorphic` to enable polymorphic serialization [12].

### Custom Serializers

When built-in mechanisms aren't sufficient (e.g., for third-party classes, specific formatting requirements, or types like `Date`, `UUID`), you can create custom serializers by implementing the `KSerializer<T>` interface [9, 13, 27].

*   **Implementation:** A custom serializer must implement `serialize(encoder: Encoder, value: T)` and `deserialize(decoder: Decoder)` methods, along with providing a `descriptor: SerialDescriptor` that describes the structure [13, 27].
*   **Usage:** Custom serializers can be applied:
    *   Directly to a class using `@Serializable(with = MySerializer::class)`.
    *   To specific properties using `@Serializable(with = MySerializer::class)`.
    *   Contextually via `SerializersModule` for types you don't control or for generic application [9, 13].
*   **Generic Types:** Custom serializers for generic classes need to accept `KSerializer` instances for the type parameters in their constructor [13].
*   **JSON Transformations:** For JSON, the `JsonTransformingSerializer` base class allows manipulating the `JsonElement` representation directly before standard serialization/deserialization occurs [6, 9].
*   **External Classes:** For Kotlin classes you don't own but which have a suitable primary constructor, you can sometimes derive a serializer using `@Serializer(forClass = SomeExternalClass::class)` (experimental) [13].

### Integration with Kotlin Multiplatform (KMP)

`kotlinx.serialization` is designed for Kotlin Multiplatform from the ground up [2, 9].
*   **Cross-Platform:** It provides libraries for JVM, JavaScript, and Native platforms [1, 2].
*   **Shared Code:** You can define `@Serializable` data classes in your common KMP module and use them across all targets (Android, iOS, Desktop, Web, Server) [16, 25]. The serialization logic and formats (like JSON) work consistently across platforms [2].
*   **Common Use Case:** It's frequently used alongside Ktor (HTTP client) and kotlinx.coroutines in the common module to handle network requests and data persistence across platforms [16, 25, 30].

### Common Use Cases (e.g., API Communication with Ktor)

`kotlinx.serialization` is the standard serialization library used with Ktor, a Kotlin-based framework for building asynchronous clients and servers [10, 23].

*   **Ktor Server:** The `ktor-server-content-negotiation` plugin combined with a serialization format artifact (e.g., `ktor-serialization-kotlinx-json`) allows Ktor to automatically serialize outgoing responses and deserialize incoming request bodies based on the `Content-Type` header [10, 26, 30]. You install `ContentNegotiation` and configure the desired format (e.g., `json()` using `kotlinx.serialization`) [10].
*   **Ktor Client:** Similarly, the `ktor-client-content-negotiation` plugin and format artifacts enable automatic serialization of request bodies and deserialization of response bodies in the client [23, 26]. You install `ContentNegotiation` in the `HttpClient` configuration [23].
*   **WebSockets:** Ktor's WebSocket features also integrate with `kotlinx.serialization` via helper functions like `sendSerialized()` and `receiveDeserialized()` for sending/receiving typed objects over the WebSocket connection [26].
*   **Data Persistence:** Besides network communication, it's used for serializing data for storage in databases (e.g., with MongoDB BSON support [22, 32]) or files.
*   **Android Navigation:** Used in Android Jetpack Navigation's type-safe argument passing between composables [31].

**Sources:**
*   [1] Kotlin Documentation - Serialization: https://kotlinlang.org/docs/serialization.html
*   [2] kotlinx.serialization GitHub README: https://github.com/Kotlin/kotlinx.serialization
*   [3] Droidcon - Introduction to using Kotlin Serialization: https://www.droidcon.com/2024/04/04/introduction-to-using-kotlin-serialization/
*   [4] Baeldung - Serialize/Deserialize Kotlin Sealed Class: https://www.baeldung.com/kotlin/kotlinx-serialization-sealed-class
*   [5] Kotlin Blog - kotlinx.serialization 1.3 Released: https://blog.jetbrains.com/kotlin/2021/09/kotlinx-serialization-1-3-released/
*   [6] Kotlin Documentation - JsonTransformingSerializer: https://kotlinlang.org/api/kotlinx.serialization/kotlinx-serialization-json/kotlinx.serialization.json/json-transforming-serializer/
*   [7] DhiWise - Kotlin Serialization Explained: https://www.dhiwise.com/post/kotlin-serialization-explained-streamlining-data-handling-and-communication
*   [8] Baeldung - An Introduction to kotlinx-serialization Project: https://www.baeldung.com/kotlin/kotlinx-serialization
*   [9] kotlinx.serialization GitHub Guide: https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/serialization-guide.md
*   [10] Ktor Documentation - Content negotiation and serialization in Ktor Server: https://ktor.io/docs/serialization-server.html
*   [12] kotlinx.serialization GitHub Polymorphism Guide: https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/polymorphism.md
*   [13] kotlinx.serialization GitHub Serializers Guide: https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/serializers.md
*   [14] Baeldung - Class Inheritance with Kotlinx Serialization: https://www.baeldung.com/kotlin/kotlinx-serialization-inheritance
*   [16] Kotlin Multiplatform Development - Share more logic: https://kotlinlang.org/docs/multiplatform-mobile-share-logic.html
*   [17] Stack Overflow - How to serialize Kotlin data-class with default values: https://stackoverflow.com/questions/69004010/how-to-serialize-kotlin-data-class-with-default-values-into-json-using-kotlinx
*   [18] Livefront - kotlinx.serialization: (de)serializing JSON's nullable, optional properties: https://livefront.com/blog/kotlinx.serialization-deserializing-json-nullable-optional-properties/
*   [20] Kotlin Documentation - explicitNulls: https://kotlinlang.org/api/kotlinx.serialization/kotlinx-serialization-json/kotlinx.serialization.json/-json-builder/explicit-nulls.html
*   [21] Kotlin Blog - kotlinx.serialization 1.0 released: https://blog.jetbrains.com/kotlin/2020/10/kotlinx-serialization-1-0-released/
*   [22] MongoDB Docs - Kotlin Serialization (v4.11): https://www.mongodb.com/docs/drivers/kotlin/coroutine/current/fundamentals/data-formats/kotlin-serialization/
*   [23] Ktor Documentation - Content negotiation and serialization in Ktor Client: https://ktor.io/docs/serialization-client.html
*   [25] Kotlin Multiplatform Development - Create app with Ktor and SQLDelight: https://kotlinlang.org/docs/multiplatform-mobile-ktor-sqldelight.html
*   [26] Codersee - How To Use kotlinx.serialization with Ktor and Kotlin: https://codersee.com/how-to-use-kotlinx-serialization-with-ktor-and-kotlin/
*   [27] Codersee - kotlinx.serialization in Kotlin- All You Need To Know: https://codersee.com/kotlinx-serialization-in-kotlin-all-you-need-to-know/
*   [30] Ktor Documentation - Full-stack development with Kotlin Multiplatform: https://ktor.io/docs/full-stack-ktor-multiplatform.html
*   [31] Android Developers - Type safety in Kotlin DSL and Navigation Compose: https://developer.android.com/guide/navigation/use-graph/navigate-kotlin-dsl
*   [32] MongoDB Docs - Kotlin Serialization (v5.4): https://www.mongodb.com/docs/drivers/kotlin/current/fundamentals/data-formats/kotlin-serialization/