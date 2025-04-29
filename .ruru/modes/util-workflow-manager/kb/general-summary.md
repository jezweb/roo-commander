+++
id = "KB-UTIL-WORKFLOW-MANAGER-SUMMARY"
title = "General Summary: util-workflow-manager"
context_type = "knowledge_base"
scope = "High-level overview of the util-workflow-manager mode"
target_audience = ["util-workflow-manager", "coordinators"]
tags = ["workflow", "manager", "crud", "summary", "utility"]
+++

# General Summary: util-workflow-manager

The `util-workflow-manager` mode is a utility responsible for managing workflow definitions located within the `.ruru/workflows/` directory. Its primary function is to perform Create, Read, Update, and Delete (CRUD) operations on workflow structures. These structures consist of a main directory (`WF-[NAME]-V[VERSION]/`), a `README.md` defining the overall workflow, and numbered step files (`NN_description.md`), all adhering to the standard TOML+MD format.