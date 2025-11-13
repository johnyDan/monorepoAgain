# web-host

Vite + Module Federation host shell.

Dev:
```bash
pnpm nx run web-host:dev
```

Federation:
- Remotes declared in vite.config.ts (env-driven).
- Set `WIRE_TRANSFERS_REMOTE` after Milestone 4 adds remote build.

Routes:
- `/` home
- `/wire-transfers` placeholder
