# Wedding Photography Portfolio

A modern, responsive wedding photography portfolio website built with React, TypeScript, and Tailwind CSS. This application showcases wedding, event, and aerial photography work through a beautiful, user-friendly interface.

![Wedding Photography Portfolio](public/screenshot.png)

## Features

- **Photo Albums**: Browse through multiple photography albums with thumbnail previews
- **Lightbox Gallery**: View high-resolution photos in a full-screen lightbox
- **Video Showcase**: Featured video content on the homepage
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Optimized for all device sizes
- **Booking Integration**: Schedule photography sessions via Calendly
- **Services Page**: Information about photography services offered
- **Fast Performance**: Optimized image loading with thumbnails and lazy loading

## Technologies Used

- **React 18**: Modern UI library for building component-based interfaces
- **TypeScript**: Type-safe JavaScript for better developer experience
- **Vite**: Next-generation frontend tooling for fast development and builds
- **React Router**: Client-side routing for single-page application
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for smooth transitions
- **Radix UI**: Accessible UI component primitives
- **next-themes**: Theme management with dark mode support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd photography-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file in the root directory (if needed for environment variables)

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
photography-portfolio/
├── public/            # Static assets
├── src/
│   ├── albums/        # Album data and components
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and data
│   ├── pages/         # Page components
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── index.html         # HTML template
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Usage

- **Home Page**: Showcases featured work, about section, and contact information
- **Album Pages**: Browse through different photography collections
- **Services Page**: Information about photography services offered

## Acknowledgments

- All photos are copyright of Anthony Elkommos Youssef
- Built with [shadcn/ui](https://ui.shadcn.com/) components