# INNOVATECH

> Online store for technology products — phones, laptops, gaming, audio and accessories.

![Status](https://img.shields.io/badge/status-in%20development-orange)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

INNOVATECH started as a school project and is now being rebuilt, step by step, into a full-stack e-commerce application. This repository documents the whole process: from the original code to a production-ready store.

**Live demo:** https://YOUR-SITE.netlify.app

---

## Features

- Product catalog with **290 products** across **19 categories**, served from a single JSON file
- One dynamic product page (`producto.html?id=`) instead of 20 duplicated pages
- Global search with autocomplete, accent-insensitive matching and keyboard navigation
- Shopping cart shared across all pages, synced between browser tabs (`localStorage`)
- Shared header, menu and footer rendered from one JavaScript module
- Images optimized to WebP (20.8 MB → 7.4 MB)
- Demo checkout flow (no real payments or card data)

## Tech stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styles | CSS3 |
| Logic | Vanilla JavaScript (ES6+ modules pattern) |
| Data | JSON (`data/productos.json`) |
| Carousel | Swiper |
| Hosting | Netlify |

## Getting started

No build step required.

```bash
git clone https://github.com/ANDRES242008/innovatech.git
cd innovatech
```

Open `index.html` with the **Live Server** extension in VS Code, or any local web server.
The catalog is loaded with `fetch`, so opening the files directly (double click) will not work.

## Project structure

```
innovatech/
├── data/
│   └── productos.json   # Single source of truth: products and categories
├── assets/images/       # Optimized WebP images by category
├── HTML/                # Pages (home, categories, product, cart, checkout)
├── CSS/                 # Stylesheets
└── JS/
    ├── catalogo.js      # Loads and caches the catalog
    ├── carrito.js       # Cart logic and mini-cart UI
    ├── buscador.js      # Search with autocomplete
    ├── layout.js        # Shared header, menu and footer
    ├── categoria.js     # Sorting on category pages
    └── inicio.js        # Home page carousels
```

## Roadmap

The project is being rebuilt in five phases (~21 days each).

- [x] **Phase 1 — Cleanup:** fix encoding, broken links and images; single product data source; deploy
- [ ] **Phase 2 — Frontend:** migrate to React + TypeScript, filters, responsive design, accessibility
- [ ] **Phase 3 — Backend:** Node.js + Express API, PostgreSQL + Prisma, user authentication
- [ ] **Phase 4 — Commerce:** checkout, Stripe payments (test mode), orders, admin dashboard
- [ ] **Phase 5 — Quality:** automated tests, CI/CD, performance, security, final release

Version history is tracked with Git tags: `v0-escolar` is the original school version, `v1.0` is the cleaned-up vanilla version.

## Disclaimer

This is a **portfolio / demo project**. No real sales are processed. Product names, brands and images belong to their respective owners and are used for demonstration purposes only.

## Author

**Andres Marroquin** — [@ANDRES242008](https://github.com/ANDRES242008)
