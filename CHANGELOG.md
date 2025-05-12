# Release Notes - v7.3.0

## Fixes

*   b4466f485d934d0b29bc2efd473c24df3a016f2b: fixes for roo commander github release workflow

---
# Release Notes: Roo Commander v7.2.0 "Wallaby"

## 🚀 Features

*   Improved sessions, logging, and session management ([`060bb7b8`](https://github.com/jezweb/roo-commander/commit/060bb7b89a9da121742666eb5d871250429d1d0f))
*   Implemented enhanced session management and artifact documentation ([`a529ad43`](https://github.com/jezweb/roo-commander/commit/a529ad4345ad51415d1c5c2e2e1fbc18374a514f))
*   **repomix:** Enhanced spec-repomix workflow and localized delegation rules ([`820eeb10`](https://github.com/jezweb/roo-commander/commit/820eeb107250340d4cfaaa973a646245283748a4))
    *   Enhanced spec-repomix workflow (prompts for output location, post-processing).
    *   Localized Repomix delegation guidelines to coordinator rule sets.
    *   Updated coordinator modes to reference specific guidelines.
    *   Deleted general Repomix delegation rule.
*   **repomix:** Enhanced spec-repomix workflow and add coordinator delegation rules ([`d4dcdaa5`](https://github.com/jezweb/roo-commander/commit/d4dcdaa54ce6f4410e6c87ae927fd658bd714206))
    *   Implemented proposed workflow enhancements for spec-repomix mode, including prompts for output location and post-processing.
    *   Localized Repomix delegation guidelines to prime-coordinator and roo-commander rule sets.
    *   Deleted general Repomix delegation rule.
    *   Updated coordinator mode definitions to reference new specific rules.
*   Added spec-npm mode definition and initial KB files ([`947b6ed1`](https://github.com/jezweb/roo-commander/commit/947b6ed1ea005a7ffdfee86b80bd6ca254db05ef))
*   Implemented Session Management V6 and Context Guidelines ([`e696c82d`](https://github.com/jezweb/roo-commander/commit/e696c82d16f0ef300b77e97ddee9198806a038df))
    *   Added Session Management V6 standard and implementation rules for coordinators.
    *   Introduced session artifact guidelines and templates.
    *   Updated session log template (19_mdtm_session.md).
    *   Implemented Context Management Guidelines V2 (Rule 14) focusing on proactive task splitting by delegators and pre-checking by delegates.
    *   Linked session management and context rules.
*   Localized Abstraction Principle rule to relevant modes ([`4c201b64`](https://github.com/jezweb/roo-commander/commit/4c201b64ab4b0b2ae2df633dec31378baee98423))
    *   Deleted workspace rule and created copies in prime-coordinator, roo-commander, prime-txt, prime-dev, util-writer, and util-mode-maintainer rule directories.
*   Optimised roo-commander mode, implement two-level decision tree ([`1b71d6df`](https://github.com/jezweb/roo-commander/commit/1b71d6df8fa873c2e78850c2775452b224854400))
*   Optimised rules, move decision logic to KB, remove extraneous XML ([`7b643443`](https://github.com/jezweb/roo-commander/commit/7b643443cbf47c86c89562161dfd47ff6cd8b1c0))
*   Added rule for tool representation standard ([`04a77029`](https://github.com/jezweb/roo-commander/commit/04a7702928ac8531883bff772ee2d4a7704c0872))
*   Added Ruby and Rails developer modes (#35) ([`9be17d68`](https://github.com/jezweb/roo-commander/commit/9be17d68ba34990a5d43ecfded817fd6115a03bb))
*   Setup npm package 'roocommander' and update docs ([`ed143cbc`](https://github.com/jezweb/roo-commander/commit/ed143cbc0cd76f99ff363d8472a2a073ced2ead2))
    *   Renamed cli/ to npm/ and update package/command name to 'roocommander'
    *   Added build scripts for template handling during npm publish
    *   Updated README examples to use 'roocommander' command
    *   Updated various docs (playbook, whitepapers)
    *   Added MCP installer KB files for crawl4ai and repomix
    *   Moved ideas files to docs/ideas
    *   Removed obsolete files
*   Setup npm package 'roocommander' ([`6cf3265a`](https://github.com/jezweb/roo-commander/commit/6cf3265aced9c5aa67d990ef6d12ea3cfcd8924a))
    *   Renamed cli/ to npm/
    *   Updated package.json: name, version, bin, scripts
    *   Added build scripts for template handling (prepare/cleanup)
    *   Updated README with new command name and usage
*   **mcp:** Added crawl4ai server configuration ([`b4f56dd7`](https://github.com/jezweb/roo-commander/commit/b4f56dd73a2b1c942382439132ae9d74f8748802))
*   **repomix:** Refactored spec-repomix workflow using SOPs ([`9bc57a83`](https://github.com/jezweb/roo-commander/commit/9bc57a8331f71fa0fb98998767c5c4f134486513))
*   **template:** Updated kb lookup rule procedure ([`4d843cd7`](https://github.com/jezweb/roo-commander/commit/4d843cd7586a29b8546afa7cf02c0d8bcc164252))
*   **workflow:** Updated Repomix V2 workflow ([`569ddce6`](https://github.com/jezweb/roo-commander/commit/569ddce662044bbfdcadae3aa2f43a61ce714578))
*   **workflow:** Refined mode rule refinement workflow ([`af8069a8`](https://github.com/jezweb/roo-commander/commit/af8069a850366a1388babb5c2c9ef212a422748c))
*   Added refactoring scripts for ruru/commander ([`80ebbd24`](https://github.com/jezweb/roo-commander/commit/80ebbd242b15887f0736e7d789e6b5fc18e5dfc8))

## 🐛 Fixes

*   **spec-repomix:** Updated KB for valid repomix output.style config ([`fd4e17d6`](https://github.com/jezweb/roo-commander/commit/fd4e17d6ca8cdd05601486b41776c446c4172c56))
*   **build:** Refined build script exclusions ([`f89a75ea`](https://github.com/jezweb/roo-commander/commit/f89a75ea65c536d1f06c4283d657449626f18ce9))
    *   Kilocode: Exclude temp, .builds, .roomodes, archive, repomix, mcp-servers.
    *   Main: Ensure repomix and mcp-servers are created as empty dirs.

## 🔄 Refactors

*   Tidied context and remove explicit XML tags from instructions ([`ab643d01`](https://github.com/jezweb/roo-commander/commit/ab643d012afdfd8e7def23d5dbc077441b9621cb))
*   Updated repomix workflow to use MCP server ([`b6604307`](https://github.com/jezweb/roo-commander/commit/b660430735b7abf0e5b5f8a5efe4bb230f9c3a0e))
*   **agent-mcp-manager:** Applied Abstraction Principle ([`0af8f496`](https://github.com/jezweb/roo-commander/commit/0af8f49695366ee27c58073a1cd37d54f5778056))
    *   Abstracted prompts/data from rules/KBs and replaced literal tool XML using write_to_file.
*   Archived commander constraint rule and add archive SOP ([`60c00556`](https://github.com/jezweb/roo-commander/commit/60c00556d1d7ebcc7f733a3dc6fdd3a31ede17cd))
*   **rules:** Updated meta discussion tool handling rule V3 ([`9c421d86`](https://github.com/jezweb/roo-commander/commit/9c421d8675a3903d0da2b9e183bc17b053e29da2))

## 📄 Documentation

*   Added missing README schema docs for TOML+MD templates ([`8ed331a1`](https://github.com/jezweb/roo-commander/commit/8ed331a170835a78df24b5ceaabec8706b09af85))
*   Finalized SOP for Mode Refactoring and update index ([`5b2241e7`](https://github.com/jezweb/roo-commander/commit/5b2241e7d4de14c2e3fb855258985fc2963c181f))
*   Finalized SOP for Mode Configuration Refactoring ([`6b2dcb40`](https://github.com/jezweb/roo-commander/commit/6b2dcb4008f22352fb59ae7cee4c671477bd2971))
    *   Set status to Active for SOP-01-Mode-Refactoring.md
*   **session:** Added Session Management V5 standard and implementations ([`9b8ea436`](https://github.com/jezweb/roo-commander/commit/9b8ea436a80384d4a78a07d4b7a4dd96a6e1cb6d))
*   Created Git commit SOP ([`acf2d21e`](https://github.com/jezweb/roo-commander/commit/acf2d21ec2f0f4472da40b7c79ed3076d80e04db))
*   Added ideas about command and process shortcuts whitepapers ([`c41a9174`](https://github.com/jezweb/roo-commander/commit/c41a91748ed2a249121558a60af0c67eaad21e61))

## Other Commits
*   Merge branch 'main' of https://github.com/jezweb/roo-commander ([`d2ca1b1a`](https://github.com/jezweb/roo-commander/commit/d2ca1b1af403af8a97b7180a5df8959e861efb84))
*   Merge branch 'v7.5.0' ([`5c6f9256`](https://github.com/jezweb/roo-commander/commit/5c6f9256d54c1da7534d7d45798a1412b3995046))
*   mode kb readme file toml standardisation ([`cf6defae`](https://github.com/jezweb/roo-commander/commit/cf6defaecfd594747848289c5e82a90a8232c7f7))
*   refinement to mode custom instructions ([`7a979ba7`](https://github.com/jezweb/roo-commander/commit/7a979ba718b90b8f650bb9348c2ed64ac0a3d4aa))

---
# Release Notes - v7.1.5

This release includes several new developer modes, documentation updates, and internal improvements.

## ✨ Features

*   `57192f6` - Update project configuration and documentation (Jez)
*   `03cacc8` - Update workflow definitions (Jez)
*   `f8ac861` - Added Rust Developer (dev-rust) mode. (#33) (Paul Robinson)
*   `b74b903` - Java and Kotlin Developer Modes (#32) (Paul Robinson)
*   `5983c4d` - new custom mode dev-solidity (#29) (beruf)
*   `f186b69` - Added Spring framework mode. (#31) (Paul Robinson)

## 🐛 Fixes

*   `6894ded` - fixing and improving prompts (Jez)

## 📄 Docs

*   `5a29fbc` - Update guides (Jez)
*   `8041913` - Update README with setup info and improvements (Jez)

## ♻️ Refactor

*   `246f9d1` - Rename Repomix mode folder to lowercase and update references (Jez)

## 🧹 Chores

*   `e45679e` - update generated mode files after build (Jez)


# Release Notes - v7.1.5

This release includes several new developer modes, documentation updates, and internal improvements.

## ✨ Features

*   `57192f6` - Update project configuration and documentation (Jez)
*   `03cacc8` - Update workflow definitions (Jez)
*   `f8ac861` - Added Rust Developer (dev-rust) mode. (#33) (Paul Robinson)
*   `b74b903` - Java and Kotlin Developer Modes (#32) (Paul Robinson)
*   `5983c4d` - new custom mode dev-solidity (#29) (beruf)
*   `f186b69` - Added Spring framework mode. (#31) (Paul Robinson)

## 🐛 Fixes

*   `6894ded` - fixing and improving prompts (Jez)

## 📄 Docs

*   `5a29fbc` - Update guides (Jez)
*   `8041913` - Update README with setup info and improvements (Jez)

## ♻️ Refactor

*   `246f9d1` - Rename Repomix mode folder to lowercase and update references (Jez)

## 🧹 Chores

*   `e45679e` - update generated mode files after build (Jez)
