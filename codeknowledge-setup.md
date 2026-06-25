# CodeKnowledge Setup Skill

> **You are an AI coding assistant (e.g. Cursor). The human asked you to "read this file and do what it says."**
> Follow the steps below in order, top to bottom. Do the work for the user — run the commands, create the files, and explain what you did in plain language. The user is a non-engineer shipping an MVP, so keep your explanations short and friendly, and never ask them to memorize commands.

This file makes a project ready for two things:

1. **CodeKnowledge VS Code extension** — so the user can see their database, API endpoints, and functions on the CodeKnowledge dashboard.
2. **CodeKnowledge PaaS deploy** — so that clicking **Deploy** on the dashboard "just works", no matter how the project is built (React, Next.js, NestJS, Laravel, Python) or structured (single site, monolith, or monorepo).

The end result is a committed `codeknowledge.deploy.json` file (the "deploy manifest") plus a tidied-up project that deploys predictably.

> **Safe to re-run anytime** — installs, upgrades, re-scans, and refreshes deploy config without breaking an existing setup.

---

## Constants (do not change)

| Name                       | Value                                                               |
| -------------------------- | ------------------------------------------------------------------- |
| Extension ID               | `codeknowledge.codeknowledge`                                       |
| Extension download URL     | `https://codeknowledgeapi.thetayoadepetu.com/v1/extension/download` |
| Extension version info URL | `https://codeknowledgeapi.thetayoadepetu.com/v1/extension/latest`   |
| Dashboard URL              | `https://codeknowledge.thetayoadepetu.com`                          |

---

## Step 1 — Install or upgrade the CodeKnowledge extension

The extension is distributed as a downloadable `.vsix` (it is **not** on the VS Code Marketplace). Always compare your installed version to the latest before deciding whether to install or upgrade.

1. Fetch the latest published version:

   ```bash
   curl -fsSL https://codeknowledgeapi.thetayoadepetu.com/v1/extension/latest
   ```

   Note the `version` field in the JSON response (call this **latestVersion**).

2. Check whether the extension is installed and read its version:

   ```bash
   code --list-extensions --show-versions | grep -i codeknowledge || cursor --list-extensions --show-versions | grep -i codeknowledge
   ```

   - If `codeknowledge.codeknowledge` is **not** listed → proceed to install (step 3).
   - If it **is** listed, compare its version to **latestVersion** using semver (major.minor.patch).
     - If installed version **equals or exceeds** latestVersion → tell the user the extension is already up to date and skip to **Step 2**.
     - If installed version is **older** than latestVersion → proceed to upgrade (step 3).

3. Download the latest package and install or upgrade it. Use whichever editor command exists (`cursor` or `code` — both accept the same flags):

   ```bash
   # Download the latest .vsix to a temp location
   curl -fsSL -o /tmp/codeknowledge.vsix https://codeknowledgeapi.thetayoadepetu.com/v1/extension/download

   # Install or upgrade (try cursor first, then fall back to code)
   cursor --install-extension /tmp/codeknowledge.vsix || code --install-extension /tmp/codeknowledge.vsix
   ```

   - On Windows, download to `%TEMP%\codeknowledge.vsix` and install from there.
   - If the CLI command is missing, tell the user to install it once: open the editor → Command Palette (`Cmd/Ctrl+Shift+P`) → **Shell Command: Install 'code' command in PATH** (or the Cursor equivalent). As a fallback, they can install the downloaded `.vsix` via Extensions sidebar → `⋯` → **Install from VSIX…**.

4. After any fresh install **or** upgrade, ask the user to reload the editor window (Command Palette → **Developer: Reload Window**) so the new version activates.

---

## Step 2 — Start the extension and sign in

1. Make sure the project is the **first/only folder** open in the editor (the extension uses the first workspace folder).
2. If `.codeknowledge/project.json` already exists at the project root, the user is already signed in — confirm the folder is present, then skip to **Step 3**.
3. Otherwise, tell the user to run **CodeKnowledge: Sign In** from the Command Palette. This opens their browser to approve the connection — they must click **Approve** there (this one click cannot be automated). They need to already be signed in to the dashboard at `https://codeknowledge.thetayoadepetu.com` (GitHub login).
4. After approval, the extension scans automatically. Confirm success by checking that a `.codeknowledge/` folder appeared at the project root (it contains `project.json` and a local cache).
5. Make sure `.codeknowledge/` is git-ignored (it is machine-local and should not be committed). Add it to `.gitignore` if missing:

   ```gitignore
   # CodeKnowledge local cache (do not commit)
   .codeknowledge/
   ```

   > Note: `codeknowledge.deploy.json` (created later in this skill) **should** be committed. Only `.codeknowledge/` is ignored.

---

## Step 3 — Detect the project shape

Inspect the repository and classify it into exactly one of these shapes. This determines how many services go into the deploy manifest.

```text
Is there a workspace config (pnpm-workspace.yaml, or "workspaces" in root package.json),
or multiple app folders under apps/ , packages/ , or services/ , each with its own
package.json / composer.json / requirements.txt ?
│
├── YES ──> MONOREPO   (one service per deployable app, e.g. apps/web + apps/api + apps/admin)
│
└── NO
     │
     Does the app have a backend and/or a database baked into one codebase
     (e.g. a Next.js app using API routes + Prisma, or a Laravel app)?
     │
     ├── YES ──> MONOLITH  (usually ONE service; database is provisioned separately on the PaaS)
     │
     └── NO  ──> STATIC    (a single front-end site with no server and no database)
```

Notes:

- **STATIC** = e.g. a Vite/CRA React site or a static Next.js export. One website service, no database.
- **MONOLITH** = one app that serves both pages and API and talks to a database (Next.js full-stack, or Laravel). One service. The database is added later in the dashboard, not inside the manifest.
- **MONOREPO** = multiple deployable apps in one repo. One manifest entry per app you want hosted (skip shared `packages/*` libraries that aren't run on their own).

---

## Step 4 — Make each app deploy-ready (per-stack rules)

The PaaS builds each service as a container behind a router. **Next.js** apps use a slim standalone image by default (~150–400 MB); other stacks use **Nixpacks** (auto-detects build/start). Two rules matter for every stack:

- **Listen on the port from the `PORT` environment variable**, defaulting to `3000`. The platform routes traffic to that port. Hard-coded ports other than what you declare in the manifest will not receive traffic.
- **Provide a real build and start command** (or rely on the framework's standard `build`/`start` scripts).

Apply the matching rules below. Make the minimal edits needed; tell the user what you changed.

### React SPA (Vite or Create React App)

- Ensure `package.json` has a `build` script.
- Static sites need a start command that serves the built files on `PORT`. If there is no production server:
  - Vite: build outputs to `dist/` → start with `npx serve -s dist -l ${PORT:-3000}`.
  - CRA: build outputs to `build/` → start with `npx serve -s build -l ${PORT:-3000}`.
- `internalPort`: `3000`, `kind`: `website`.

### Next.js

- Ensure `package.json` has `build` (`next build`) and `start` (`next start -p ${PORT:-3000}` or just `next start`, which already honors `PORT`).
- Requires Node 20+. If `package.json` has no `engines.node`, add `"engines": { "node": ">=20" }` (or add a `.nvmrc` containing `20`).
- **Enable standalone output** in `next.config.js` / `next.config.ts` — the platform builds Next.js with a slim standalone image by default, and the build fails without this:

  ```ts
  // next.config.ts
  const nextConfig = {
    output: 'standalone',
    // ...other config
  };
  export default nextConfig;
  ```

- If it uses a database (e.g. Prisma), set `migrateCommand` (e.g. `npx prisma migrate deploy`) and mark the app as needing a database in the manifest.
- `internalPort`: `3000`. `kind`: `website` (use `api` only if it has API routes but no pages).

### NestJS

- Ensure `build` (`nest build`) and a production start script (`start:prod`, i.e. `node dist/main.js`).
- Make `main.ts` listen on the port: `await app.listen(process.env.PORT ?? 3000)`.
- `internalPort`: `3000`. `kind`: `api`.

### Laravel (PHP)

- Ensure there is a `composer.json` and an `artisan` file at the app root.
- Build/start are handled by Nixpacks' PHP provider; you usually do not need to set `buildCommand`/`startCommand` (leave them `null` unless the user has custom needs).
- If the app uses a database, set `migrateCommand` to `php artisan migrate --force` and mark it as needing a database.
- `internalPort`: `3000` (Nixpacks serves PHP on `$PORT`). `kind`: `website` (or `api` for an API-only Laravel app).

### Python (FastAPI / Flask / Django)

- Ensure a `requirements.txt` (or `pyproject.toml`) lists the web framework and an ASGI/WSGI server (e.g. `uvicorn`/`gunicorn`).
- Set a start command that binds to `PORT`, e.g.:
  - FastAPI: `uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-3000}`
  - Flask/Django (gunicorn): `gunicorn -b 0.0.0.0:${PORT:-3000} wsgi:app`
- `internalPort`: `3000`. `kind`: `api` (or `website` if it serves pages).

### Environment variables (all stacks)

- Create or update `.env.example` with **every** environment variable the app reads (keys only, no real secret values). The dashboard imports these so the user fills them in once. Example:

  ```env
  # .env.example — keys only, no secrets
  NEXT_PUBLIC_API_URL=
  JWT_SECRET=
  ```

- Never commit real secrets. Confirm `.env` is git-ignored.
- The platform injects `NODE_ENV=production` automatically. If the app uses CodeKnowledge-provisioned add-ons, these keys are injected automatically and must **not** be in `.env.example`: `DATABASE_URL`, `REDIS_URL`, `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME`, `R2_ENDPOINT`, `R2_PUBLIC_URL`.
- Deploy clones from GitHub on each build. The person who deploys must be signed in with GitHub and have read access to the repository (owner or collaborator). Organization repos may require the org to approve the CodeKnowledge OAuth app.

---

## Step 5 — Write `codeknowledge.deploy.json`

Create a file named `codeknowledge.deploy.json` at the **repository root** (even for a monorepo — one manifest describes all services). This is the standard the PaaS reads to deploy the project predictably. Fill it in from what you learned in Steps 3 and 4.

See [the schema reference](#manifest-schema-reference) below for every field. Keep it minimal: omit or set `null` for anything the framework already handles (Nixpacks auto-detects build/start when they are `null`).

### Example — STATIC (React + Vite)

```json
{
  "version": 1,
  "projectType": "static",
  "services": [
    {
      "name": "web",
      "slug": "web",
      "kind": "website",
      "framework": "vite",
      "rootDir": ".",
      "buildCommand": "npm run build",
      "startCommand": "npx serve -s dist -l ${PORT:-3000}",
      "migrateCommand": null,
      "internalPort": 3000,
      "needsDatabase": false,
      "domains": []
    }
  ]
}
```

### Example — MONOLITH (Next.js full-stack with a database)

```json
{
  "version": 1,
  "projectType": "monolith",
  "services": [
    {
      "name": "web",
      "slug": "web",
      "kind": "website",
      "framework": "nextjs",
      "rootDir": ".",
      "buildCommand": "next build",
      "startCommand": "next start",
      "migrateCommand": "npx prisma migrate deploy",
      "internalPort": 3000,
      "needsDatabase": true,
      "domains": []
    }
  ]
}
```

### Example — MONOREPO (Next.js web + NestJS api + Next.js admin)

```json
{
  "version": 1,
  "projectType": "monorepo",
  "services": [
    {
      "name": "web",
      "slug": "web",
      "kind": "website",
      "framework": "nextjs",
      "rootDir": "apps/web",
      "buildCommand": "next build",
      "startCommand": "next start",
      "migrateCommand": null,
      "internalPort": 3000,
      "needsDatabase": false,
      "domains": []
    },
    {
      "name": "api",
      "slug": "api",
      "kind": "api",
      "framework": "nestjs",
      "rootDir": "apps/api",
      "buildCommand": "nest build",
      "startCommand": "node dist/main.js",
      "migrateCommand": "npx prisma migrate deploy",
      "internalPort": 3000,
      "needsDatabase": true,
      "domains": []
    },
    {
      "name": "admin",
      "slug": "admin",
      "kind": "website",
      "framework": "nextjs",
      "rootDir": "apps/admin",
      "buildCommand": "next build",
      "startCommand": "next start",
      "migrateCommand": null,
      "internalPort": 3000,
      "needsDatabase": false,
      "domains": []
    }
  ]
}
```

---

## Step 6 — Final checklist and handoff

Verify, then hand off to the user in plain language:

- [ ] Extension installed and signed in; `.codeknowledge/` exists and is git-ignored.
- [ ] `codeknowledge.deploy.json` exists at the repo root and lists every app to host.
- [ ] Each service has a working `build`/`start` (or relies on framework defaults) and listens on `PORT`.
- [ ] `.env.example` lists all required keys (no secrets); real `.env` is git-ignored.
- [ ] Changes committed and pushed to the project's Git remote.

Then tell the user, in simple terms, to:

1. Commit and push the changes (you can do this for them):

   ```bash
   git add codeknowledge.deploy.json .gitignore .env.example
   git commit -m "Add CodeKnowledge deploy manifest and prepare for deploy"
   git push
   ```

2. Open the CodeKnowledge dashboard → their project → **Deploy** tab → confirm the detected services (they should match the manifest) → if any service needs a database, click **Provision** under the Database tab → add a domain under the Domains tab (optional) → click **Deploy**.

That's it — the user does not need to know anything about Docker, Nixpacks, ports, or servers. The manifest you wrote makes every deploy predictable.

---

## Already deployed? Keep hosting in sync

If this project **already has hosting enabled** on CodeKnowledge, do not recreate it. Instead:

1. Update `codeknowledge.deploy.json` and `.env.example` in the repo to reflect any new apps, changed build/start commands, or new environment keys.
2. Commit and push those changes.
3. Tell the user to open the CodeKnowledge dashboard → their project → **Deploy** tab → use the **Sync from repo** card at the top.
4. The dashboard shows a plain checklist of what's new or changed (new apps, updated settings, new env keys). Everything is pre-selected — the user just clicks **Apply selected changes**, then **Deploy all services**.

Nothing is removed automatically. If an app was removed from the manifest but is still hosted, the Sync card mentions it; the user can delete it from the **Services** tab if they no longer need it.

You can also re-run this entire skill after a big project change — it will refresh the manifest and `.env.example`, then the user syncs from the dashboard.

---

## Manifest schema reference

`codeknowledge.deploy.json` (committed at repo root):

| Field         | Type                                   | Required | Description                                   |
| ------------- | -------------------------------------- | -------- | --------------------------------------------- |
| `version`     | number                                 | yes      | Manifest schema version. Always `1` for now.  |
| `projectType` | `"static" \| "monolith" \| "monorepo"` | yes      | The project shape from Step 3. Informational. |
| `services`    | array                                  | yes      | One entry per app to host.                    |

Each entry in `services`:

| Field            | Type                 | Required | Description                                                                                                                         |
| ---------------- | -------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `name`           | string               | yes      | Human-friendly service name (e.g. `web`, `api`, `admin`).                                                                           |
| `slug`           | string               | yes      | URL/identifier-safe name (lowercase, hyphens). Often same as `name`.                                                                |
| `kind`           | `"website" \| "api"` | yes      | `website` if it serves a UI/pages, `api` if backend-only.                                                                           |
| `framework`      | string               | yes      | One of `nextjs`, `react`, `vite`, `cra`, `nestjs`, `express`, `laravel`, `fastapi`, `python`, or `auto` to let the platform detect. |
| `rootDir`        | string               | yes      | Path to the app within the repo. `.` for single-app repos; e.g. `apps/api` in a monorepo.                                           |
| `buildCommand`   | string \| null       | no       | Build command. `null` lets Nixpacks auto-detect.                                                                                    |
| `startCommand`   | string \| null       | no       | Production start command (must listen on `PORT`). `null` lets Nixpacks auto-detect.                                                 |
| `migrateCommand` | string \| null       | no       | One-off command run before start (e.g. DB migrations). `null` if none.                                                              |
| `internalPort`   | number               | yes      | Port the app listens on inside its container. Default `3000`.                                                                       |
| `needsDatabase`  | boolean              | yes      | `true` if the app needs a managed database. Provisioning still happens in the dashboard; this flags intent.                         |
| `needsRedis`     | boolean              | no       | `true` if the app needs managed Redis. Provisioning still happens in the dashboard; this flags intent.                              |
| `needsStorage`   | boolean              | no       | `true` if the app needs Cloudflare R2 storage. Provisioning still happens in the dashboard; this flags intent.                      |
| `domains`        | string[]             | no       | Hostnames to route to this service (e.g. `["app.example.com"]`). Empty `[]` if none yet.                                            |

Field values map directly to how the PaaS creates each service, so an accurate manifest means the user just confirms and clicks **Deploy**.
