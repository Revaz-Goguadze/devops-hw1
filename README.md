# DevOps Assignment 1 - CI/CD Pipeline Automation

This repository contains a small Next.js application used to demonstrate a complete CI/CD workflow: automated tests, protected deployment, a release strategy, and a rollback protocol.

## Live Application Link

Pending deployment: `https://your-vercel-app-url.vercel.app`

## Screenshots

Add these screenshots after deployment:

### Hosted Application

![Hosted application](docs/screenshots/hosted-application.png)

### Successful GitHub Actions Run

![Successful GitHub Actions run](docs/screenshots/github-actions-success.png)

## Pipeline Description

The pipeline is defined in `.github/workflows/main.yml` and runs on every push and pull request to `main`.

1. GitHub Actions checks out the repository.
2. Node.js is installed and dependencies are restored with `npm ci`.
3. The Jest test suite runs with `npm test`.
4. ESLint checks the project with `npm run lint`.
5. Next.js creates a production build with `npm run build`.
6. Deployment to Vercel runs only after the CI job succeeds.

The deployment job uses `needs: test`, so a failing test, lint error, or build error stops the workflow before production deployment.

## Deployment Strategy

Chosen strategy: **Blue-Green-style deployment using Vercel immutable deployments**.

Vercel creates a new deployment for each successful release. The current production deployment continues serving traffic while the new version is built and validated by the pipeline. After the workflow passes, the production alias is moved to the new deployment. This simulates a Blue-Green release because users are switched from the old stable deployment to the new deployment only after the new version is ready.

Safety steps used:

1. Pull requests run the same test, lint, and build checks before merge.
2. Production deployment runs only from the `main` branch.
3. The deployment job depends on the CI job with `needs: test`.
4. Vercel keeps previous deployments available for rollback.

## Rollback Guide

If a production bug is discovered:

1. Open the Vercel dashboard for this project.
2. Go to the **Deployments** tab.
3. Find the previous stable production deployment.
4. Use Vercel's rollback option to promote the previous stable deployment.
5. Verify the live application URL after rollback.
6. Revert or fix the broken commit in GitHub before deploying again.

CLI rollback option:

```bash
vercel rollback
vercel rollback status
```

## Local Development

```bash
npm install
npm run dev
```

## Verification Commands

```bash
npm test
npm run lint
npm run build
```
