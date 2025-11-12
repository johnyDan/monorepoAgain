# Monorepo Workspace

This repository uses pnpm + Nx. Top-level directories:
- apps/ (web-host, mobile-host)
- packages/ (platform-core, design-system)
- features/ (e.g., wire-transfers)

## Prereqs
- Node 20.x
- pnpm 9.x

## Getting Started
```bash
pnpm install
pnpm nx graph
```

## Common Commands
```bash
pnpm nx run-many -t build --all
pnpm nx run-many -t test --all
pnpm nx graph
```

Next milestones will scaffold shared packages, hosts, and the wire-transfers feature.