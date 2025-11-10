# Git Branch Naming Convention

This guide defines a simple and consistent GitHub branching convention.

---

## 1. Main Branches

| Branch    | Purpose                                                         |
| --------- | --------------------------------------------------------------- |
| `main`    | Production-ready code. Always deployable.                       |
| `staging` | Integration branch for new features before merging into `main`. |

---

## 2. Feature Branches

**Format:**
`feature/<short-description>`
**Purpose:** For new features or pages (e.g., adding tasks, filters, or settings).
**Examples:**
feature/add-todo
feature/todo-filters
feature/theme-switcher

---

## 3. Bugfix Branches

**Format:**
`bugfix/<short-description>`
**Purpose:** For fixing bugs found in `staging` or `main`.
**Examples:**
bugfix/fix-add-button
bugfix/fix-task-delete

---

## 4. Hotfix Branches

**Format:**
`hotfix/<short-description>`
**Purpose:** For urgent fixes to `main` (production issues).
**Examples:**
hotfix/fix-crash-on-load
hotfix/fix-login-error

---

## ✅ Best Practices

1. Use **lowercase** and **hyphens** for readability.
2. Keep branch names **short but descriptive**.
3. Always branch off from `staging` (or `main` if no `staging` branch).
4. Delete branches locally and remotely after merging to keep the repository clean.

---
