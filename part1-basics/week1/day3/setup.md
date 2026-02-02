# Setup: Copilot or Cursor

_Purpose: Install one AI coding assistant and understand accept / reject / iterate. Suitable for self-use and lead review._

---

## Option A: GitHub Copilot (VS Code)

1. Open **VS Code** → **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for **GitHub Copilot**, install the official extension by GitHub.
3. **Sign in:** Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) → **GitHub Copilot: Sign In** → complete browser sign-in.
4. **Verify:** Open any code file and type; gray inline suggestions should appear. Press **Tab** to accept. Optional: **GitHub Copilot: Open Chat** for the chat panel.

_Requires:_ GitHub account; Copilot subscription (free trial available for individuals).

---

## Option B: Cursor IDE

1. Download and install from [cursor.com](https://cursor.com).
2. Sign in and open your project (same flow as VS Code).
3. **Verify:** Inline completions as you type; **Chat (Composer)** in the sidebar; **Inline edit** via `Ctrl+K` / `Cmd+K` (select code, then describe the change).

_Note:_ Cursor can import VS Code settings and extensions.

---

## Working with suggestions: Accept, Reject, Iterate

| Action      | When to use                                                       | How                                                                        |
| ----------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Accept**  | Suggestion is correct and fits your intent                        | **Tab** (inline) or **Accept** in chat                                     |
| **Reject**  | Suggestion is wrong, off-topic, or you prefer to code it yourself | **Esc** or keep typing; dismiss the suggestion                             |
| **Iterate** | Idea is right but code needs changes (edge case, style, tests)    | Accept then edit, or ask in chat (e.g. “handle empty string”, “add tests”) |

**Practice:** Run tests after accepting suggestions. Document in [reflection.md](./reflection.md) when you accepted vs. iterated (required for Day 3 review).

---

**Next:** [using-ai.md](./using-ai.md) — when to use inline vs chat.
