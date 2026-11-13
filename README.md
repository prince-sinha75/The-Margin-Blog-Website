# The Margin — Blog Website

> An independent digital journal devoted to thoughtful writing on design, culture, craft, and the quieter currents of modern life.

🌐 **Live Site:** [https://prince-sinha75.github.io/The-Margin-Blog-Website/](https://prince-sinha75.github.io/The-Margin-Blog-Website/)

---

## Overview

**The Margin** is a modern, editorial-style blog website built with React and TypeScript. It features a clean, typographic layout inspired by print magazines — focused on slow reading and intentional design.

## Features

- 📰 **Home Page** — Featured article hero, recent articles grid, category previews
- 🔍 **Search Modal** — Live search across articles, categories, and authors
- 📂 **Categories** — Browse articles by Design, Craft, Culture, Essays, and Travel
- 📖 **Article Page** — Full reading experience with scroll progress bar, font size controls, and reading time
- 🔖 **Bookmarks** — Save and revisit favourite articles (persisted via localStorage)
- 🌍 **Discover Page** — Explore all articles with sort and filter options
- 📬 **Subscribe Page** — Newsletter signup form
- ℹ️ **About Page** — Journal mission and editorial team

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icon library |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/prince-sinha75/The-Margin-Blog-Website.git

# Navigate into the project
cd The-Margin-Blog-Website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components (Masthead, Footer, ArticleCard, SearchModal…)
├── data/             # Static article data and site configuration
├── hooks/            # Custom React hooks (useLocalStorage)
├── pages/            # Route-level page components
├── App.tsx           # Root component with routing
├── main.tsx          # Entry point
└── index.css         # Global styles & Tailwind directives
```

## Deployment

This project is deployed on **GitHub Pages** via the `gh-pages` branch.

To redeploy manually:

```bash
npm run deploy
```

---

Made with care · The Margin © 2024
