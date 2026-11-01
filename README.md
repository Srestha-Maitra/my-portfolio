# Srestha Maitra — Portfolio

A responsive, animated personal portfolio for a Salesforce Developer, built with **React 19**, **Vite**, **Tailwind CSS 4** and **Framer Motion**.

## Sections

Hero (with stats) · About · Experience timeline · Skills · Projects · Highlights & Certifications · Contact form · Footer

Includes a mobile menu, active-section highlighting in the navbar, a scroll progress bar, a back-to-top button, and SEO / social-share meta tags.

## Run locally

```bash
npm install
npm run dev       # open http://localhost:5173
```

## Edit your content

**All text lives in [`src/data/profile.js`](src/data/profile.js).** Change it there; no component code needs touching.

| Want to…                    | Edit in `profile.js`                                   |
| --------------------------- | ------------------------------------------------------ |
| Add LinkedIn                | uncomment the LinkedIn line in `socials`               |
| Add a resume download       | put `resume.pdf` in `public/`, set `resumeUrl: "/resume.pdf"` |
| Add certifications          | add entries to `certifications` (section appears automatically) |
| Add a job / project         | add an object to `experience` / `projects`             |
| Hide "Open to opportunities"| set `openToWork: false`                                |

To change the photo, replace `src/assets/Hero_Image2.jpg` (keep the filename or update the import in `src/components/Hero.jsx`).

The contact form needs no backend: it opens the visitor's email app with the message pre-filled to `profile.email`.

## Build & deploy

```bash
npm run build     # outputs static files to dist/
npm run preview   # preview the production build
```

**GitHub Pages (set up):** every push to `main` builds and publishes the site via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) to
**https://srestha-maitra.github.io/my-portfolio/**. Progress is visible in the repo's **Actions** tab.

If you rename the repo, update `base` in [`vite.config.js`](vite.config.js) to match.
