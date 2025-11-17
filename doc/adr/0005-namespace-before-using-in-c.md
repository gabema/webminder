# 5. Namespace Before Using in C#

Date: 2025-11-17

## Status

Accepted

## Context

In C# source files, the conventional structure places `using` statements before the namespace declaration. However, this can lead to global imports that are not scoped to the namespace, potentially causing conflicts and reducing clarity. Modern IDEs and compilers support placing `using` statements inside the namespace, which scopes dependencies more tightly and improves readability.

## Decision

Namespaces will always be declared before `using` statements. All `using` statements must be placed inside the namespace declaration.

## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.

- Positives
  - Scoped imports reduce potential conflicts.
  - Namespace context is clear before external dependencies.
  - Consistent file structure across repositories.
  - Easier dependency management within specific namespaces.
- Negatives
  - Developers accustomed to traditional ordering may need to adjust.
  - Some tooling or scripts that assume using statements precede namespaces may require updates or specific rule exclusion.

### Example

Single line Namespace declarations are preferred

```csharp
namespace MyCompany.Project.Module;

using System;
using System.Collections.Generic;

public class ExampleClass
{
    // Implementation details
}
```

Use Namespace scopes for legacy C# code
```csharp
namespace MyCompany.Project.Module
{
    using System;
    using System.Collections.Generic;

    public class ExampleClass
    {
        // Implementation details
    }
}
