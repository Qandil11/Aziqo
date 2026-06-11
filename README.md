# AZIQO Website

Static React, Vite and TypeScript website for AZIQO.

## Run Locally

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production site is generated in `dist/`.

## Contact Forms

The Hire Talent, Submit CV and Contact forms are static Formspree forms. Their
endpoints are configured in `src/main.tsx` as `hireTalentFormAction`,
`submitCvFormAction` and `contactFormAction`.

## Deploy To GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the repository to GitHub.
2. In GitHub, go to `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to the `main` branch to deploy.

The custom domain is configured through `public/CNAME`:

```text
aziqo.co.uk
```

If the default branch is named something other than `main`, update the branch name in `.github/workflows/deploy.yml`.
