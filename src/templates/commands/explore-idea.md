---
description: Research and validate a project idea before implementation
argument-hint: none
---

# Explore Idea

Research and validate a project idea through guided questions and analysis before starting implementation.

---

## Your Task

Guide the user through a structured research process to validate their project idea and gather requirements.

### Step 1: Understand the Idea

Ask the user to describe their project idea:

```
📋 Let's explore your project idea!

Please describe:
1. What problem does this project solve?
2. Who is the target user/audience?
3. What is the core functionality?
4. Any similar existing solutions you know of?
```

Wait for user response before continuing.

### Step 2: Technical Stack Research

Based on the user's description, identify technologies that might be relevant.

Ask clarifying questions:

```
🔧 Technical Stack

Current questions:
1. Do you have a preferred tech stack? (e.g., React, Next.js, Cloudflare Workers)
2. Any existing infrastructure or services to integrate with?
3. Database requirements? (SQL, key-value, object storage)
4. Authentication needed? (user accounts, login)
5. AI/ML components? (LLMs, embeddings, agents)
```

Wait for responses.

### Step 3: Check for Relevant Skills

Based on technologies mentioned, check if relevant skills exist:

Run: `/list-skills` or `roo-commander search <keyword>`

Example searches based on common needs:
- Database: `roo-commander search database`
- Auth: `roo-commander search authentication`
- AI: `roo-commander search ai`
- Cloudflare: `roo-commander search cloudflare`
- Frontend: `roo-commander search react`

Present findings:

```
🎯 Relevant Skills Found:

• [skill-name]: [what it covers]
• [skill-name]: [what it covers]

These skills can help with:
- [benefit 1]
- [benefit 2]

Would you like to review any of these skills? (Use /load-skill)
```

### Step 4: Scope and Complexity

Help user understand project scope:

```
📊 Project Scope Analysis

Based on your description, this project involves:

Features:
• [Feature 1] - Estimated: [time]
• [Feature 2] - Estimated: [time]
• [Feature 3] - Estimated: [time]

Complexity factors:
• [Factor 1] - [impact]
• [Factor 2] - [impact]

Estimated total: [X-Y hours development time]

Is this scope what you expected? Any features to add/remove?
```

Wait for user response.

### Step 5: Similar Solutions Research

Research existing solutions (if user hasn't already):

```
🔍 Similar Solutions

Let me search for similar existing solutions...

[Use web search or ask user to provide]

Found:
1. [Solution A]: [brief description]
   - Pros: [what it does well]
   - Cons: [limitations]

2. [Solution B]: [brief description]
   - Pros: [what it does well]
   - Cons: [limitations]

How will your project differ or improve on these?
```

### Step 6: Technical Feasibility

Assess technical challenges:

```
⚡ Technical Feasibility

Potential challenges:
• [Challenge 1]: [mitigation strategy]
• [Challenge 2]: [mitigation strategy]
• [Challenge 3]: [mitigation strategy]

Dependencies:
• [External service/API] - [availability/cost]
• [Technology] - [maturity/support]

Unknowns to research:
• [Unknown 1]
• [Unknown 2]

Any concerns about these challenges?
```

Wait for user response.

### Step 7: MVP Definition

Help define Minimum Viable Product:

```
🎯 MVP (Minimum Viable Product)

Core features for v1.0:
✅ [Essential feature 1]
✅ [Essential feature 2]
✅ [Essential feature 3]

Nice-to-have (v2.0+):
⏸️ [Future feature 1]
⏸️ [Future feature 2]

Does this MVP scope make sense? Any must-haves missing?
```

Wait for confirmation.

### Step 8: Resource Requirements

Outline what's needed:

```
📦 Resources Needed

Development:
• Time: [estimated hours/days]
• Skills: [required expertise]

Services/Tools:
• [Service 1]: [cost/tier]
• [Service 2]: [cost/tier]

APIs/Integrations:
• [API 1]: [free tier limits]
• [API 2]: [pricing]

Total estimated monthly cost: $[amount]

Budget concerns?
```

### Step 9: Decision Point

Present recommendation:

```
✅ Recommendation

Based on this exploration:

Pros:
• [Pro 1]
• [Pro 2]
• [Pro 3]

Considerations:
• [Consideration 1]
• [Consideration 2]

Recommendation: [Proceed / Simplify scope / Research more / Reconsider]

Ready to proceed with planning?

Next steps:
1. Run /plan-project to create implementation phases
2. Load relevant skills before implementation
3. Start Phase 1 of development
```

### Step 10: Summarize Findings

Create summary document (optional):

If user wants documentation, create a brief exploration summary:

```markdown
# Project Exploration: [Project Name]

## Problem Statement
[What problem this solves]

## Target Users
[Who will use this]

## Core Features
- [Feature 1]
- [Feature 2]
- [Feature 3]

## Tech Stack
- [Technology 1]
- [Technology 2]
- [Technology 3]

## Relevant Skills
- [skill-name]
- [skill-name]

## MVP Scope
[What's included in v1.0]

## Estimated Effort
[X-Y hours development time]

## Next Steps
1. Run /plan-project
2. Load skills: [list]
3. Begin implementation
```

Save as `EXPLORATION.md` if requested.

---

## Error Handling

**Vague idea description**:
```
⚠️ Need more details to provide useful analysis.

Can you elaborate on:
- What specific problem does this solve?
- Who are the users?
- What's the core functionality?

Example good description:
"A chat interface for customer support that uses OpenAI to suggest responses,
stores conversation history in a database, and integrates with existing CRM."
```

**No tech stack preferences**:
```
💡 No problem! I can suggest a modern stack based on your requirements.

For [project type], I recommend:
- Frontend: [suggestion]
- Backend: [suggestion]
- Database: [suggestion]
- Hosting: [suggestion]

Does this sound good, or do you have other preferences?
```

**Overwhelming scope**:
```
⚠️ This scope might be quite large for initial development.

Current feature list:
- [10+ features listed]

Suggestion: Focus on MVP first
Essential: [3-5 core features]
Later: [remaining features]

Start smaller and iterate?
```

---

## Best Practices

### DO

✅ **Ask clarifying questions** (don't assume requirements)
✅ **Check for relevant skills** (use search/index)
✅ **Be realistic about estimates** (account for unknowns)
✅ **Define clear MVP** (avoid scope creep)
✅ **Research similar solutions** (learn from existing work)
✅ **Assess feasibility** (identify potential blockers early)

### DON'T

❌ **Don't skip scope discussion** (prevents misaligned expectations)
❌ **Don't assume expertise** (user may be learning)
❌ **Don't ignore similar solutions** (reinventing wheel)
❌ **Don't underestimate complexity** (better to overestimate)
❌ **Don't proceed without MVP definition** (scope will drift)

---

## Quick Reference

**10-step process**:
1. Understand the idea
2. Technical stack research
3. Check for relevant skills
4. Scope and complexity analysis
5. Similar solutions research
6. Technical feasibility assessment
7. MVP definition
8. Resource requirements
9. Decision point (proceed/simplify/research/reconsider)
10. Summarize findings

**Common follow-ups**:
- `/plan-project` - Create implementation phases
- `/load-skill [name]` - Load relevant skill
- `/list-skills` - Browse available skills

**Documentation**:
- Optional: Create `EXPLORATION.md` with summary
- Helps reference later during implementation

---

*This command is part of Roo Commander v9.0.0 - Use /plan-project after exploring to begin planning*
