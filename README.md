# Hope Foundation – NGO Website

A modern, premium NGO website frontend built with React (Vite), Tailwind CSS, Framer Motion, GSAP, Swiper, and React CountUp.

## Features

- **Pages:** Home, About, Campaigns (with detail), Donate, Volunteer, Events (with detail), Blog (with detail), Contact
- **UI:** Glassmorphism, gradients, dark/light mode, scroll progress bar, floating donate button
- **Animations:** Framer Motion (page transitions, hover, entrance), GSAP scroll hooks, React CountUp, Swiper sliders
- **Responsive:** Mobile-first, sticky navbar, hamburger menu

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS v4
- React Router DOM
- Framer Motion
- GSAP
- React CountUp
- Swiper.js
- React Icons

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   # Navbar, Footer, cards, buttons, etc.
  pages/        # Route-level pages
  layouts/      # MainLayout
  hooks/        # useDarkMode, useScrollProgress
  data/         # Mock data
  animations/   # GSAP scroll utilities
  assets/       # Images, static assets
```

Frontend only; forms submit with a success state and do not call a backend.
