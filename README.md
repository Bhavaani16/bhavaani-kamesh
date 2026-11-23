# Bhavaani Kamesh — portfolio

A static site. All of the words live in `js/content.js`. The downloadable resume is `Bhavaani_Kamesh_Resume.pdf`, her own file. Do not rebuild that PDF from `resume.html`.

## Edit

- Copy, dates, projects, and links: `js/content.js`
- Icons: `js/icons.js` (inline, themed with CSS variables). Matching files are in `icons/`. Regenerate them with Node if you change the set: the script in the drawer is the source.
- Look: `css/styles.css`
- Pencil notes on the page are facts I would not publish until you confirm them. Delete the note in `content.js` (or the sentence in `js/main.js` that prints it) once you have.

## Run locally

```bash
cd portfolio
python3 -m http.server 8765
```

Open http://127.0.0.1:8765

## Resume download

The site links to `Bhavaani_Kamesh_Resume.pdf`. Replace that file when the resume changes. `resume.html` is a plain text version of the site content and is not the file people download. The phone number is not on the site or on the public PDF.

## Deploy

The site is plain files. No build step.

### GitHub Pages

1. Create a repository and put the contents of this folder at the root (not nested).
2. Settings ? Pages ? Deploy from branch ? `main` ? `/ (root)`.
3. The site will be at `https://<user>.github.io/<repo>/`.
4. If the repo is named `<user>.github.io`, it is served at the apex.

### Vercel or Netlify

Drag this folder onto the dashboard, or connect the repo. Framework preset: Other. Output: the folder itself. No install command.

### Custom domain

1. Add the domain in GitHub Pages, Netlify, or Vercel.
2. At your DNS host, add the records they show (usually an `A`/`ALIAS` for the apex and a `CNAME` for `www`).
3. Change `site` in `js/content.js`, plus the canonical URL, Open Graph URLs, `sitemap.xml`, and `robots.txt`. They currently say `https://bhavaani16.github.io/bhavaani-kamesh`.
4. HTTPS is automatic on all three hosts once the DNS resolves.

## Pages

- `index.html` — the desk
- `resume.html` — applicant-tracking resume, from the same content
- `icons.html` — the icon drawer
- `404.html` — missing slips
- `og.png` — share image
- `Bhavaani_Kamesh_Resume.pdf` — the resume people download. It is her file, with the phone number removed.
