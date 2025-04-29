+++
id = "KB-JAVA-SETUP-V1"
title = "Java Knowledge Base: Basic Setup Overview"
context_type = "knowledge_base"
scope = "Essential steps for setting up a Java development environment."
target_audience = ["dev-java"]
granularity = "summary"
status = "active"
last_updated = "2025-04-29"
tags = ["java", "setup", "installation", "jdk", "lts", "kb"]
relevance = "High: Foundational setup knowledge."
target_mode_slug = "dev-java"
+++

# Basic Java Setup Overview

Setting up a Java development environment primarily involves installing a Java Development Kit (JDK).

1.  **Choose a JDK Distribution:** Select a JDK build from a vendor. Common choices include:
    *   Oracle JDK (Free under NFTC terms for recent versions like JDK 21 for a limited time, requires subscription later for commercial updates).
    *   OpenJDK builds from vendors like Adoptium (Eclipse Temurin), Azul (Zulu), Amazon (Corretto), Microsoft, Red Hat, etc. These often have different support timelines and licensing.
2.  **Select Version (LTS Recommended):** For stability and long-term support, using a Long-Term Support (LTS) version is recommended. As of April 2025, **Java 21** is the latest LTS version. Previous LTS versions like Java 17, 11, and 8 are also still supported by various vendors.
3.  **Download and Install:** Download the appropriate installer or archive for your operating system from the chosen vendor's website (e.g., Oracle Java Downloads, Adoptium website).
4.  **Configure Environment Variables (Optional but Recommended):**
    *   Set `JAVA_HOME` to the JDK installation directory.
    *   Add the JDK's `bin` directory to the system's `PATH` variable. This allows running `java`, `javac`, and other JDK tools from the command line.
5.  **Verify Installation:** Open a terminal or command prompt and run `java -version` and `javac -version` to confirm the JDK is installed and configured correctly.

*(Based on information regarding LTS versions and general JDK installation practices.)*