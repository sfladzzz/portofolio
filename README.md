# sfladzzz. | Personal Portfolio

A personal portfolio for **Usep Saeful Adzkia**, an Informatics Engineering student focused on frontend development. The site presents a profile, education and experience, technical skills, selected projects, and contact details in a responsive Next.js application.

## Overview

- Responsive portfolio layout with About, Education & Experience, Skills, Projects, and Contact sections
- Personal portrait served from the local `public/images` asset directory
- Pointer-reactive hexagon background with a graphite, blue, and subtle amber palette
- Fixed navigation with in-page links
- GSAP and ScrollTrigger entrance effects
- Accessible portrait alternative text and visible keyboard focus styles

## Technology

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) with ScrollTrigger
- [Three.js](https://threejs.org/) ecosystem dependencies for visual capabilities
- [Lucide React](https://lucide.dev/) icons

## Getting Started

### Requirements

- Node.js 18.17 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The development server refreshes as source files are edited.

### Production build

```bash
npm run build
npm start
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build and run Next.js validation |
| `npm start` | Serve the production build |
| `npm run lint` | Run the Next.js ESLint command |

## Project Structure

```text
app/
	components/
		ThreeBackground.tsx  Interactive hexagon background
	globals.css            Global styles and background colors
	layout.tsx             Root layout, font, and page metadata
	page.tsx               Portfolio sections and page interactions
public/
	images/
		profile.jpeg         Portfolio portrait
```

## Personalizing the Content

- Update profile copy, navigation, projects, and contact details in `app/page.tsx`.
- Replace `public/images/profile.jpeg` to use a different portrait. Keep the same filename, or update the `Image` source in `app/page.tsx`.
- Adjust the global palette and animation keyframes in `app/globals.css` and `app/components/ThreeBackground.tsx`.
- Review all contact links, social URLs, dates, and academic details before publishing.
- Entries marked **Sample data** or **Demo** are placeholders and should be replaced with verified experience or removed before professional use.

## Deployment

This project can be deployed to any platform that supports Next.js. For Vercel, import the Git repository and use the default Next.js build settings. No environment variables are currently required by the application.

## Repository

GitHub: [usepadzkia93/portofolio](https://github.com/usepadzkia93/portofolio)
