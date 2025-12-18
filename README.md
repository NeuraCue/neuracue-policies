# NeuraCue Website

This is the official public-facing website for [NeuraCue](https://neuracue.com) — an AI-powered
productivity platform providing geo-fenced reminders and contextual task cues.

The site is built with **Next.js** and deployed on **Vercel** at the custom domain `neuracue.com`.
It serves as the landing and compliance site for the NeuraCue Android application.

## 🌐 Live Website

🔗 [https://neuracue.com](https://neuracue.com)

## 📁 Project Structure

| File/Directory    | Description                                                 |
|-------------------|-------------------------------------------------------------|
| `src/app/`        | Next.js App Router pages and layouts                        |
| `src/components/` | Reusable React components                                   |
| `public/`         | Static assets (images, favicon, robots.txt, sitemap, CNAME) |
| `next.config.mjs` | Next.js configuration                                       |
| `package.json`    | Node.js dependencies and scripts                            |
| `vercel.json`     | Vercel deployment configuration                             |
| `CLAUDE.md`       | Documentation for Claude Code AI assistant                  |

## Local Development

- npm install
- npm run dev

## License

Content in this repository is licensed under
the [CC BY-NC-ND 4.0 License](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
NeuraCue™ and the NeuraCue logo are trademarks. All rights reserved.

## Vercel Security

We're following up on our earlier communication regarding CVE-2025-55182, the critical RCE
vulnerability affecting React Server Components.

We want to be direct: if you have not yet upgraded, please do so immediately. That is the only way
to be safe. Since our initial outreach, public exploits are available and threat activity has
significantly increased. As of today, Vercel has blocked all new deployments of vulnerable Next.js
versions.

Your next step: upgrade to a patched version of Next.js (15.0.5, 15.1.9, 15.2.6, 15.3.6, 15.4.8,
[See blog post for full details and remediation guidance.](https://vercel.com/blog/security-update-nextjs-rce-cve-2025-55182)
We will continue to update this blog as needed.

When you upgrade to Next 15 or 16, go straight to a patched version (e.g. 15.0.5+, 15.1.9+, 15.2.6+,
15.3.6+, 15.4.8+, 15.5.7+, or 16.0.7+).

**⚠️ Warning:** Upgrading directly from 14.2.0 to 16.0.9 skips two major versions and may introduce
breaking changes.  
Before upgrading, **review the official Next.js migration guides**
for [v15](https://nextjs.org/docs/pages/building-your-application/upgrading/version-15)
and [v16](https://nextjs.org/docs/pages/building-your-application/upgrading/version-16) to
understand required code modifications.
