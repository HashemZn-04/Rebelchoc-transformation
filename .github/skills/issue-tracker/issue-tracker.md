# Issue Tracker

This repo uses **GitHub Issues** to track work.

## Creating and managing issues

Use the `gh` CLI to create, list, and manage issues:

```bash
gh issue create --title "Issue title" --body "Description"
gh issue list
gh issue view <number>
```

For more details, see the [GitHub CLI docs](https://cli.github.com/manual/gh_issue).

## PRs as request surface

By default, external PRs are **not** included in the triage queue. To change this, edit this file and set `include-external-prs: true`.

```
include-external-prs: false
```
