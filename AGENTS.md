# RCKET — launchschedule

Ionic 6 + Angular PWA for tracking rocket launches. Served via nginx Docker.

## Commands

| Command | Purpose |
|---|---|
| `npm start` | Dev server (`ng serve`) |
| `npm run build` | Dev build → `www/` |
| `npm run build:prod` | Prod build via `ionic build --prod` |
| `npm test` | Karma + Jasmine, ChromeHeadlessCustom, single run |
| `npm run test:watch` | Karma in watch mode (default browser) |
| `npm run test:coverage` | With code coverage |
| `npm run lint` | ESLint via Angular ESLint (`src/**/*.ts`, `src/**/*.html`) |
| `npm run e2e` | Playwright E2E (auto-starts `ng serve` via `webServer`) |

No dedicated typecheck script; use `npx tsc --noEmit` if needed.

## Architecture & conventions

- Single Angular app, project name `app`, source root `src/`
- All feature modules are **lazy-loaded** with `NoPreloading`; routes use **hash** strategy
- Component selectors: element `app-{kebab-case}`, directive `app{camelCase}`
- Component class suffixes: `Page` or `Component` only
- Central API service: `LaunchLibraryService` (LaunchLibrary API), `SnapiService` (Spaceflight News), `LaunchscheduleNotificationService`
- Environment files swapped via Angular fileReplacements in prod config
- Storage via `@capacitor/storage` (not localStorage directly)
- Push notifications via `@capacitor/push-notifications`

## Data pipeline

`scripts/` contains Node.js scripts (TypeScript) for offline data fetching:
- `scripts/fetchLaunches.ts` — paginated fetch from LaunchLibrary, saves chunks to disk
- `scripts/mergeLaunches.ts` — merges chunks into single JSON
- `scripts/masterdata/fetch*.ts` — fetches master data (astronauts, previous launches)
- Data JSON files land in `src/app/data/` (gitignored: `/src/app/data/*`)

Previous launches are bundled as static JSON (`src/app/data/previouslaunches.json`) and served by `PreviousLaunchService` with in-memory lookup.

## Testing

- Framework: Jasmine + Karma (not Jest, not Web Test Runner)
- Custom launcher `ChromeHeadlessCustom` uses flags `--no-sandbox --disable-gpu`
- Spec files co-located next to source files as `*.spec.ts`
- E2E uses Playwright with specs in `e2e/src/*.e2e-spec.ts`

## Deployment

- Docker: `nginx` serving `www/` (copied from build output)
- Angular Service Worker enabled only in prod builds (`ngsw-config.json`)
- Data groups cache LaunchLibrary, Spaceflight News, NASA APIs with freshness/performance strategies
- Capacitor config: app ID `de.th105.launchschedule`, name `RCKET`, web dir `www`

## Known quirks

- E2E uses Playwright; CI installs the browser via `npx playwright install --with-deps chromium`
- `src/app/data/*` is gitignored — generated data files are not committed
- Prod env has a real NASA API key (`environment.prod.ts`); dev uses `DEMO_KEY`
- Dev environment uses `lldev.thespacedevs.com` (LaunchLibrary dev endpoint); prod uses `ll.thespacedevs.com`
- CORS requests proxied through `cors.th105.de` in both dev and prod
