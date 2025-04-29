## Executive Summary

As of April 2025, the latest Long-Term Support (LTS) version of Java is **Java 21 (JDK 21)**, released in September 2023 [Source 1, 5, 8]. The previous LTS version was **Java 17 (JDK 17)**, released in September 2021 [Source 1, 5, 9]. Oracle intends to release new LTS versions every two years, with Java 25 planned as the next LTS release in September 2025 [Source 1].

## Current and Previous Java LTS Versions

### Latest LTS: Java 21
*   **Release Date:** September 19, 2023 [Source 7, 19].
*   **Status:** Current LTS version as of April 2025 [Source 1, 5, 8].
*   **Support:**
    *   Oracle provides Premier Support until September 2028 and Extended Support until September 2031 [Source 3, 6, 7].
    *   Oracle JDK 21 binaries are free to use and redistribute under the Oracle No-Fee Terms and Conditions (NFTC) until September 2026 (one year after the next LTS release, Java 25) [Source 8, 20]. After this period, updates will require a paid license for production use beyond limited free grants [Source 8].
    *   Other vendors like Azul and Microsoft also offer support for JDK 21, with varying end dates (e.g., Azul until September 2029, Microsoft until September 2028) [Source 4, 14].
*   **Key Features:** Introduced features like Virtual Threads (Project Loom), Sequenced Collections, and Pattern Matching for switch (standard) [Source 5, 18].

### Previous LTS: Java 17
*   **Release Date:** September 14, 2021 [Source 7, 9, 19].
*   **Status:** Previous LTS version, replaced by Java 21 [Source 5].
*   **Support:**
    *   Oracle provides Premier Support until September 2026 and Extended Support until September 2029 [Source 3, 6, 7].
    *   Free updates under the Oracle NFTC license ended in September 2024 (one year after the release of Java 21). Continued commercial use of Oracle JDK 17 updates after this date requires a paid subscription [Source 10].
    *   Other vendors like Azul, Microsoft, and Eclipse Temurin offer support until at least September/October 2027 [Source 4, 14, 17].
*   **Key Features:** Introduced features like Sealed Classes (standard) and Pattern Matching for switch (preview) [Source 5, 9, 18].

### Other Supported LTS Versions
*   **Java 11 (LTS):** Released September 2018 [Source 7, 19]. Oracle Premier Support ended September 2023, but Extended Support continues until January 2032 [Source 1, 6, 21].
*   **Java 8 (LTS):** Released March 2014 [Source 7, 19]. Oracle Extended Support continues until December 2030 [Source 1, 7].

## Java LTS Release Cadence and Support Policy

*   **Cadence:** Since Java 17, Oracle intends to release new LTS versions every two years (in September) [Source 1, 3]. Before that, the cadence was every three years (Java 11 followed Java 8) [Source 6]. The next planned LTS release is Java 25 in September 2025 [Source 1, 20].
*   **Non-LTS Releases:** Feature releases occur every six months (March and September) [Source 2, 7]. These non-LTS versions (like the current Java 24) receive updates only until the next feature release (typically 6 months) [Source 1, 6, 7].
*   **Support Levels (Oracle):**
    *   **Premier Support:** Typically 5 years for LTS versions, includes bug fixes, security patches, and minor improvements [Source 6, 10].
    *   **Extended Support:** Typically an additional 3 years after Premier Support ends for LTS versions, requires a fee (though sometimes waived for specific periods) [Source 1, 6, 10].
    *   **Sustaining Support:** Indefinite period after Extended Support, but without bug or security fixes [Source 6].
*   **Vendor Variations:** Different JDK vendors (Oracle, Azul, Red Hat, Microsoft, Adoptium/Eclipse Temurin, Amazon Corretto, etc.) offer their own builds of OpenJDK, often with varying support timelines and licensing terms [Source 2, 4, 14, 17]. For example, Azul often provides longer support periods than Oracle for older LTS versions [Source 4, 17].

## Note on LTS Terminology

One source points out a nuance: technically, "Java" itself (the specification) isn't LTS. Rather, specific *JDK builds* (implementations of the specification) from various vendors receive long-term support commitments [Source 13, 16]. However, common industry usage refers to versions like Java 11, 17, and 21 as "LTS versions" based on Oracle's designation and the support provided by major vendors [Source 1, 3, 5].

## Sources and Limitations

*   **Sources:** Information is primarily based on official documentation from Oracle [Source 1, 8, 21], JDK release tracking sites (endoflife.date, javaalmanac.io) [Source 6, 19], documentation from other JDK vendors (Azul, Microsoft, Adoptium) [Source 4, 14, 22], technical blogs/articles [Source 3, 5, 10, 12, 13, 15], and Wikipedia [Source 2, 17].
*   **Recency:** Sources range from late 2023 to April 2025, providing up-to-date information relevant to the query date. Oracle's roadmap [Source 1] was updated in March 2025. Endoflife.date [Source 6] and other release tracking pages [Source 12, 19, 22] reflect updates as of April 2025.
*   **Limitations:**
    *   Support end dates, especially for Extended Support or from vendors other than Oracle, can vary slightly between sources or may be subject to change [Source 1, 4, 14]. Future LTS designations and dates are intentions and subject to change [Source 1].
    *   Specific licensing terms (e.g., NFTC vs OTN) can be complex and depend on the specific JDK version, update, and usage scenario [Source 1, 8, 10].
    *   While Java 21 is widely recognized as the current LTS, one source [Source 13, 16] argues semantically that only JDK *builds* receive LTS, not the Java specification itself, though this doesn't change the practical reality of which versions receive long-term vendor support.