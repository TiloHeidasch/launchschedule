# RCKET — launchschedule

Ionic 8 + Angular 22 PWA for tracking rocket launches. Served via GitHub Pages.

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
- Central API service: `LaunchLibraryService` (LaunchLibrary API), `SnapiService` (Spaceflight News)
- Interest tracking via `LaunchscheduleNotificationService` (in-app, backed by localStorage)
- Storage via `StorageService` (wraps `localStorage`)
- Environment files swapped via Angular fileReplacements in prod config

## Data pipeline

`scripts/` contains Node.js scripts (TypeScript/JavaScript) for offline data processing:
- `scripts/totemizeBeta.ts` / `scripts/totemizeProd.ts` — generate random codenames for releases
- `scripts/setRelease.ts` — updates version metadata in `environment.prod.ts`
- `scripts/fetchImages.ts` — downloads and caches images from JSON data files
- `scripts/masterdata/fetch*.js` — paginated fetches from LaunchLibrary (master data, astronauts, previous launches)
- `scripts/masterdata/merge.js` — merges fetched chunks into single JSON files
- Data JSON files land in `src/app/data/` (gitignored: `/src/app/data/*`)

Master data files (previous launches, astronauts, pads, agencies, etc.) are generated locally and served by dedicated services (e.g. `PreviousLaunchService`) with in-memory lookup.

## Testing

- Framework: Jasmine + Karma (not Jest, not Web Test Runner)
- Custom launcher `ChromeHeadlessCustom` uses flags `--no-sandbox --disable-gpu`
- Spec files co-located next to source files as `*.spec.ts`
- E2E uses Playwright with specs in `e2e/src/*.e2e-spec.ts`
- Coverage thresholds in `karma.conf.js`: statements 71%, branches 50%, functions 62%, lines 71%
- 310 tests, all passing (latest: Jul 2026)

## Deployment

- Angular Service Worker enabled only in prod builds (`ngsw-config.json`)
- Data groups cache LaunchLibrary, Spaceflight News, NASA APIs with freshness/performance strategies
- Capacitor config: app ID `de.th105.launchschedule`, name `RCKET`, web dir `www`

## Known quirks

- E2E uses Playwright; CI installs the browser via `npx playwright install --with-deps chromium`
- `src/app/data/*` is gitignored — generated data files are not committed
- Prod env has a real NASA API key (`environment.prod.ts`); dev uses `DEMO_KEY`
- Dev environment uses `lldev.thespacedevs.com` (LaunchLibrary dev endpoint); prod uses `ll.thespacedevs.com`
- CORS requests proxied through `cors.th105.de` in both dev and prod
- `(service as any).data = undefined` must be reset between tests for services that cache HTTP data; use `TestBed.inject(Service)` and cast to `any`
- Page tests that call `ngOnInit()` with async data should manually invoke `component.ngOnInit()` + `await new Promise(r => setTimeout(r))` instead of `fixture.detectChanges()` + `await fixture.whenStable()` to avoid NG0100 errors
