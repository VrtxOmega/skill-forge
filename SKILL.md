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
6. Pass this JSON object to the skill's execution tool to launch the UI. DO NOT JUST PRINT THE CODE IN THE CHAT.
7. The tool will return a webview. You must present this webview to the user.

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
You MUST execute the native skill tool (usually named `skill_forge` or similar) to launch the FORGE UI.
Pass the entire JSON specification you generated as the argument to the tool. 
DO NOT just output the code in the chat! You MUST call the tool so the user can see the UI.

## Files
- `index.html`: loads the local interface
- `index.js`: returns or launches the UI for the skill builder
