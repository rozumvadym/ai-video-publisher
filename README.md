# AI Video Publisher

An English-language product and support website built with React, TypeScript, Vite, Tailwind CSS and Lucide. It ships as static HTML and CSS. React renders the pages during the build, with no browser JavaScript or backend required.

## Local development

Use Node.js 22 and npm.

    npm ci
    npm run dev

## Production build

    npm run build
    npm run preview

The build type-checks the source and generates a separate index.html for Home, Privacy Policy, Terms of Service, Contact and Data Deletion. Each page works as a direct link, including on refresh. Use trailing-slash URLs for published links. Assets and internal links honor PAGES_BASE_PATH, which defaults to the root. Set PAGES_SITE_URL to the full site URL including any repository prefix to add canonical and Open Graph URLs.

## Deploy to GitHub Pages

1. Put the contents of this folder at the root of your GitHub repository. Include the hidden .github directory and package-lock.json.
2. In **Settings → Pages**, select **GitHub Actions** as the publishing source.
3. Push to main or run **Deploy GitHub Pages** from the Actions tab. The workflow gets the base path and public site URL from GitHub Pages, builds dist and deploys it.
4. Use the deployment URL to verify the five pages, navigation, and email links. Enable **Enforce HTTPS** in Pages settings when available.

For a custom domain, verify domain ownership, add the domain in **Settings → Pages** and configure DNS per the GitHub instructions. Rerun the workflow after the Pages setting changes so the build uses the correct URLs. The Actions workflow does not require a CNAME file.

- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub Pages custom domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Content maintenance

Edit page copy and the public support address in src/App.tsx. Edit the Privacy Policy and Terms in src/policies.ts. Review the policy and terms against actual operations before first publication, and update the effective date if publication is delayed. Confirm that the supplied address receives and responds to general, privacy and deletion inquiries.

The site describes video and publishing capabilities as planned. When an authenticated application is available, link to it from the public website and update feature and policy copy to reflect the implemented service. Keep OAuth callbacks, token exchange and storage, credentials, and publishing calls on the application backend.

[TikTok app review guidelines](https://developers.tiktok.com/docs/en/app-review-guidelines)
