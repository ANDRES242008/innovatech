# INNOVATECH

> Online store for technology products — phones, laptops, gaming, audio and accessories.

![Status](https://img.shields.io/badge/status-in%20development-orange)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

INNOVATECH started as a school project and is now being rebuilt, step by step, into a full-stack e-commerce application. This repository documents the whole process: from the original code to a production-ready store.

**Live demo:** coming soon

---

## Features

- Product catalog with **290 products** across **20 categories**
- Product detail pages with full specifications
- Real-time search with result highlighting
- Sort by price, discount and name
- Shopping cart that persists between visits (`localStorage`)
- Installment payment simulator
- Store locations and contact form

## Tech stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styles | CSS3, Bootstrap 5 |
| Logic | JavaScript (ES6+) |
| Carousel | Swiper |
| Data | Local product data (moving to JSON) |

## Getting started

No build step required.

```bash
git clone https://github.com/ANDRES242008/innovatech.git
cd innovatech
```

Open `HTML/index.html` with the **Live Server** extension in VS Code, or any local web server.

## Project structure

```
innovatech/
├── HTML/   # Pages: home, categories, product detail, cart, checkout
├── CSS/    # Stylesheets
├── JS/     # Search, cart and page logic
└── img/    # Product images by category
```

## Roadmap

The project is being rebuilt in five phases (~21 days each).

- [ ] **Phase 1 — Cleanup:** fix encoding, broken links and images; single product data source; deploy
- [ ] **Phase 2 — Frontend:** migrate to React + TypeScript, filters, responsive design, accessibility
- [ ] **Phase 3 — Backend:** Node.js + Express API, PostgreSQL + Prisma, user authentication
- [ ] **Phase 4 — Commerce:** checkout, Stripe payments (test mode), orders, admin dashboard
- [ ] **Phase 5 — Quality:** automated tests, CI/CD, performance, security, final release

Version history is tracked with Git tags. `v0-escolar` is the original school version.

## Disclaimer

This is a **portfolio / demo project**. No real sales are processed. Product names, brands and images belong to their respective owners and are used for demonstration purposes only.

## Author

**Andres Marroquin** — [@ANDRES242008](https://github.com/ANDRES242008)
