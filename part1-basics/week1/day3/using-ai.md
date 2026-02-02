# Using AI: Inline vs Chat

_When to use inline completions vs chat (for self and review)._

**Inline** = completions as you type, or select code + short instruction (e.g. Cursor Ctrl+K). Use for small fixes, renames, one-liners.

**Chat** = describe the task in the chat panel; AI can propose multi-line or multi-file changes. Use for katas, debugging, refactors, "explain this error."

**When to use which**

- Small local change → inline.
- New feature, kata, refactor, or "why does this fail?" → chat (paste code and errors).

**Cursor extras**: @-mention files or symbols in chat so the model has context. Copilot and Cursor both do inline + chat; Cursor adds project-aware chat and built-in inline edit.

Document in your reflection: when inline helped vs when you needed chat, and 3 patterns where AI helped vs 3 where it struggled.

Next: [exercises.md](./exercises.md)
