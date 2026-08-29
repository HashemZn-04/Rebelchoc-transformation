# Domain Docs

This repo uses a **single-context** layout for domain documentation.

## Structure

- **`CONTEXT.md`** (at repo root): Overview of the codebase, key concepts, and how things fit together. Read this first to understand the repo.
- **`docs/adr/`**: Architecture Decision Records. One file per decision, named `NNNN-slug.md` (e.g., `0001-use-react.md`).

## Reading domain docs

Before diving into code, read `CONTEXT.md` to understand:
- What the project does
- Key architectural patterns
- How major systems interact

When investigating a design choice, check `docs/adr/` for the reasoning behind it.

When adding new architecture, write an ADR in `docs/adr/`.
