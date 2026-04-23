<div align="center">
  <img src="https://raw.githubusercontent.com/VrtxOmega/Gravity-Omega/master/omega_icon.png" width="100" alt="SKILL FORGE" />
  <h1>SKILL FORGE</h1>
  <p><strong>Deterministic Edge-Gallery Skill Generator — Natural Language to Verified Templates</strong></p>
</div>

<div align="center">

![Status](https://img.shields.io/badge/Status-ACTIVE-success?style=for-the-badge&labelColor=000000&color=d4af37)
![Version](https://img.shields.io/badge/Version-v1.0.0-informational?style=for-the-badge&labelColor=000000&color=d4af37)
![Stack](https://img.shields.io/badge/Stack-HTML%20%2B%20Vanilla%20JS-informational?style=for-the-badge&labelColor=000000)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&labelColor=000000)

</div>

---

Skill Forge is the template synthesis layer of the VERITAS & Sovereign Ecosystem. Given a natural-language request, it generates a complete, deterministic Edge-Gallery agent skill — with normalized kebab-case naming, trigger extraction, capability mapping, and a validated `index.html` + `index.js` output. No boilerplate. No hand-crafting. Just state the requirement and receive a deployable artifact.

---

## Ecosystem Canon

Within the Omega Universe, agent capability must be deterministic and reproducible. Skill Forge guarantees this by constraining skill generation to a closed set of validated templates and enforcing a strict specification schema before output. Every generated skill carries a name, description, triggers, capabilities, required tools, and UI requirements — all packaged as an executable JSON object that the Edge Gallery launcher consumes directly. Skill Forge does not hallucinate implementations; it maps intent to a known-valid template and returns a verifiable specification.

---

## Overview

Skill Forge is a lightweight, browser-native skill generation engine. The operator describes what they want — "Build me a calculator" or "Create a markdown preview tool" — and Skill Forge produces a validated skill specification containing:

- **Skill Name**: kebab-case, normalized
- **Description**: Concise capability summary
- **Triggers**: Natural language patterns that activate the skill
- **Tools**: Required tool calls (e.g., `run_js`, `render_webview`)
- **Files**: `index.html` and `index.js` with deterministic boilerplate
- **UI Requirements**: VERITAS gold-and-obsidian theme enforcement

The output is designed to be passed directly to the `run_js` execution tool for immediate rendering.

---

## Features

| Capability | Detail |
|---|---|
| Natural Language Parsing | Extracts skill intent from free-text requests |
| Template Matching | Maps intent to the closest validated internal template |
| Kebab-Case Normalization | Ensures all skill names follow `skill-name` convention |
| Schema Validation | Every output is validated against the Edge Gallery skill spec |
| One-Click Deploy | Generates specification ready for `run_js` invocation |
| Zero Dependencies | Pure HTML + Vanilla JS — no build step, no bundler |

---

## Architecture

```
+---------------------------------------------------------------+
|                    OPERATOR INPUT                             |
|  "Build me a markdown preview tool"                            |
+----------------------+-----------------------+----------------+
                       |  NLP parsing + intent   |
                       |  extraction             |
                       v                       v
+---------------------------------------------------------------+
|                  TEMPLATE SELECTOR                            |
|  - Single-page tool    - Dashboard    - Calculator            |
|  - Markdown renderer   - API client   - Data viz             |
+----------------------+-----------------------+----------------+
                       |                       |
                       v                       v
+---------------------------------------------------------------+
|                 SPECIFICATION BUILDER                       |
|  { skill_name, description, triggers, tools, files, ui }     |
+------------------+---------------------+----------------------+
                 |                       |
                 v                       v
+---------------------------+   +-------------------------------+
|   run_js INVOCATION       |   |   EDGE GALLERY              |
|   (immediate deploy)      |   |   (persistent skill store)    |
+---------------------------+   +-------------------------------+
```

---

## Quickstart

### Local Use

```bash
git clone https://github.com/VrtxOmega/skill-forge.git
cd skill-forge
# Open index.html in any modern browser
open index.html
```

### Integration

```javascript
// Example: request a skill specification
const spec = {
  skill_name: "markdown-previewer",
  description: "Live markdown editor with split-pane preview",
  triggers: ["build markdown tool", "make markdown previewer"],
  tools: ["run_js"],
  files: {
    "index.html": "<!-- generated -->",
    "index.js": "// generated"
  },
  ui: {
    theme: "veritas-gold-obsidian",
    layout: "split-pane",
    responsive: true
  }
};

// Pass to execution engine
run_js(spec);
```

---

## Data Model

| Field | Type | Description |
|---|---|---|
| `skill_name` | string | kebab-case identifier |
| `description` | string | One-line capability summary |
| `triggers` | array | NL patterns that activate this skill |
| `tools` | array | Required tool names for execution |
| `files` | object | File-to-content mapping (HTML, JS, CSS) |
| `ui.theme` | string | `veritas-gold-obsidian` or `matrix-dark` |
| `ui.layout` | string | `full-screen`, `split-pane`, `modal`, `widget` |

---

## Security & Sovereignty

- **Client-side generation**: All skill templating runs in the browser. No remote inference required.
- **No code execution**: The generator produces specification files — it does not eval or execute user input.
- **Closed template set**: Only validated templates are selectable. Custom execution is explicitly prohibited.

---

## Roadmap

| Milestone | Status |
|---|---|
| Core NL parsing + template selection | Complete |
| Schema validation pipeline | Complete |
| VERITAS theme enforcement | Complete |
| Multi-template gallery | Planned |
| Import/export skill JSON | Planned |
| Plugin template registry | Planned |

---

## Omega Universe

| Repository | Role |
|---|---|
| [Gravity-Omega](https://github.com/VrtxOmega/Gravity-Omega) | Desktop AI platform hosting Edge Gallery |
| [omega-brain-mcp](https://github.com/VrtxOmega/omega-brain-mcp) | Governance and skill approval pipeline |
| [veritas-vault](https://github.com/VrtxOmega/veritas-vault) | Generated skill retention and versioning |

---

## License

Released under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built by <a href="https://github.com/VrtxOmega">RJ Lopez</a> &nbsp;|&nbsp; VERITAS &amp; Sovereign Ecosystem &mdash; Omega Universe</sub>
</div>
