# Monorepo Workspace

This repository uses pnpm + Nx. Top-level directories:
- apps/ (web-host, mobile-host)
- packages/ (platform-core, design-system)
- features/ (e.g., wire-transfers)

## Prereqs
- Node 20.x
- pnpm 10.x
- pnpm 10.14.0

## Getting Started
```bash
pnpm install
pnpm nx graph
```

## Common Commands
```bash
# Build all packages and features (in dependency order)
pnpm nx run-many -t build --all

# Run tests
pnpm nx run-many -t test --all

# Typecheck (automatically builds dependencies first)
pnpm nx run wire-transfers:typecheck

# Start development servers (automatically builds packages first)
pnpm nx run wire-transfers:dev:web    # Starts on http://localhost:4301
pnpm nx run web-host:dev              # Starts on http://localhost:4300

# View dependency graph
pnpm nx graph
```

## Build Dependencies

Nx is configured to automatically build dependencies before running targets:

- `^build` notation means "build all dependencies first"
- When you run `typecheck`, `dev:web`, or `dev:native`, Nx will automatically build required packages
- Build outputs are cached, so rebuilds only happen when source files change

**Dependency Chain:**
1. `platform-core` (no dependencies)
2. `platform-forms` (depends on platform-core)
3. `wire-transfers` (depends on platform-core, platform-forms, design-system)
4. `web-host` (depends on design-system, platform-core)