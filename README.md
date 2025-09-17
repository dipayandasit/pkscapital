# PKS Capital Advisory LLP Website

A modern, responsive website for PKS Capital Advisory LLP built with Next.js and Tailwind CSS.

## Features

- **Static Export Ready**: Configured for cPanel shared hosting
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with Tailwind CSS
- **SEO Optimized**: Meta tags and structured data
- **Image Gallery**: Interactive gallery with modal lightbox
- **Contact Form**: Client-side form with validation
- **Multiple Pages**: Home, About, Services, Sectors, Team, Gallery, Contact

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Lucide React Icons
- Static Export Support

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To build the static export:

```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment to any static hosting service.

## Deployment

The website is configured for static export and can be deployed to:
- cPanel shared hosting
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Simply upload the contents of the `out` directory to your hosting provider.

## Project Structure

```
frontend/
├── components/          # Reusable components
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies
```

## Pages

- **Home**: Hero section, company overview, services preview
- **About**: Company history, vision, mission, process
- **Services**: Detailed service offerings
- **Core Sectors**: Industry expertise and sectors served
- **Team**: Senior management and team information
- **Gallery**: Image gallery with modal lightbox
- **Contact**: Contact form and office locations

## Customization

The website uses a consistent color scheme with royal blue (#1e3a8a) as the primary color. You can customize colors in `tailwind.config.js`.

Font: Montserrat (loaded from Google Fonts)

## License

© 2024 PKS Capital Advisory LLP. All rights reserved.
