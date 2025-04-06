# Content Portfolio

A minimalist portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive layout with fixed left panel and scrollable right panel
- Masonry grid for project thumbnails
- Clean typography and minimal design
- Optimized for subdomain deployment
- SEO-friendly structure

## Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app/` - Next.js app router pages and layouts
- `src/components/` - React components
- `src/data/` - Project data and content
- `src/types/` - TypeScript type definitions
- `public/images/` - Static images and assets

## Deployment

1. Build the static site:
```bash
npm run build
```

2. The static files will be in the `out` directory

3. Deploy to your hosting provider:
   - Configure your domain to point work.helenhuang.io to your hosting
   - Upload the contents of the `out` directory
   - Ensure all paths are relative to the /work subdirectory

## Adding Projects

1. Add project images to `public/images/`
2. Update `src/data/projects.ts` with new project details
3. For projects with dedicated pages, create new files in `src/app/projects/[id]`

## Customization

- Update colors in `tailwind.config.js`
- Modify typography in `src/app/globals.css`
- Adjust layout dimensions in component files
