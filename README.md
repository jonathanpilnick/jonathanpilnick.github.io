# jonathanpilnick.github.io

My personal website, live at **https://jonathanpilnick.github.io**

Plain HTML/CSS — no build step. Every change you commit to `main` goes live within a minute or two.

## How to edit

| What | Where |
|---|---|
| Email, LinkedIn, GitHub, location (all pages) | `main.js` — the `SITE` block at the top |
| Home page hook + short intro | `index.html` — look for `EDIT` |
| About page story | `about.html` — look for `EDIT` |
| Projects (title, text, tags, link) | `projects.html` — one `<article>` per project; copy a block to add more |
| Accent color, fonts | `style.css` — `--accent` and `--accent-ink` at the top |

## Your photo

Upload a photo of yourself named **`portrait.png`** to the root of this repo (Add file → Upload files).
A cut-out with a transparent background looks best on the blue circle — e.g. iPhone/Mac “Lift subject from background”, or remove.bg.
Until it exists, the site shows `portrait-placeholder.svg`.

## Pages

- `index.html` — home
- `about.html` — about me
- `projects.html` — projects
- `contact.html` — contact (the “Email me” button opens the visitor’s email app)
- `404.html` — not-found page
