# mobile-host

Expo + Re.Pack host shell.

Dev (SDK/static imports):
```bash
pnpm nx run mobile-host:dev-sdk
```

Dev (Federated - requires custom dev client):
```bash
pnpm nx run mobile-host:dev-federated
```

Build custom dev client (Android example):
```bash
pnpm nx run mobile-host:build-dev-client-android
```

Federation:
- Remote URLs provided via env (WIRE_TRANSFERS_REMOTE) after feature remote exists.
- Validated in Milestone 4.
