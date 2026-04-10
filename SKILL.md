---
name: skill-forge
description: Generate complete Edge Gallery agent skills from natural-language requests using deterministic templates and validation.
---
# Skill: skill-forge

## Purpose
Generate complete Edge Gallery agent skills from natural-language requests using deterministic templates and validation.

## When to use
Use this skill when the user says things like:
- "Build me a skill"
- "Create a new skill"
- "Make a calculator skill"
- "Generate a tool"
- "Forge a new skill"

## Required behavior
When triggered:
1. Parse the user's request into a structured skill specification.
2. Create a normalized skill name in kebab-case.
3. Extract description, triggers, capabilities, inputs, outputs, and tools.
4. Select the closest internal template (e.g., single-page tool, dashboard, utility).
5. Generate the required file contents (`index.html`, `index.js`, metadata block).
6. Validate that all required parts are present (no missing syntax, no undeclared network calls, fail closed).
7. Return the structured result so it can be passed to the UI.

## Output format
Always include in your JSON spec:
- Skill Name
- Description
- Purpose
- Triggers
- Tools
- Files
- UI Requirements (theme, style)

## Tool instructions
Call the `run_js` tool to open the skill-forge UI, passing the generated structured spec if possible.

## Files
- `index.html`: loads the local interface
- `index.js`: returns or launches the UI for the skill builder
