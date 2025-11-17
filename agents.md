# agents.md

## 🧭 Core Principles
- **Clarity over cleverness:** Code should be easy to understand at first glance.
- **Minimalism:** Solve problems with the least amount of code necessary.
- **Consistency:** Follow archtitecture decision records (ADRs) and use established patterns and conventions rather than reinventing them.
- **Extensibility:** If new conventions are needed create ADRs to document them.
- **Reusability:** Factor out repeated logic into functions, modules, or templates.
- **Traceability:** Document intent clearly so solutions can be audited and extended.
- **Testability:** Make sure classes and functions include passing unit tests.

---

## 🛠️ Coding Guidelines
- **Prefer built-ins:** Use language/library features before writing custom utilities.
- **Minimize external dependencies** → Prefer adding additional shared code to libraries instead of introducing new external dependencies.
- **Single responsibility:** Each function/class should do one thing well.
- **Avoid premature optimization:** First make it work, then make it fast if needed.
- **Abstract repetition:** If code appears more than twice, refactor it.
- **Readable naming:** Use descriptive names that explain purpose without comments.

---

## 📐 Solution Design Workflow
1. **Understand the problem** → Restate it simply.
2. **Identify minimal solution path** → What’s the shortest way to solve this?
3. **Check for reuse** → Is there existing code, library, or pattern?
4. **Implement simply** → Favor clarity over complexity.
5. **Refactor for DRY** → Remove duplication.
6. **Document intent** → One-line explanation of why the solution exists.
