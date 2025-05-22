
# Developer Portfolio

A modern, responsive developer portfolio built with React, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- **Responsive Design** - Looks great on all devices
- **Dark/Light Mode** - Toggle between dark and light themes
- **Multilingual Support** - Support for multiple languages
- **Contact Form** - With EmailJS integration for seamless communication
- **Downloadable Resume** - Easy access to your resume
- **Project Showcase** - Display your best work
- **Professional Timeline** - Show your career progression
- **Testimonials** - Showcase feedback from colleagues
- **Blog Section** - Share your thoughts and knowledge

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- Yarn or npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser

## Configuration

### Contact Form

The contact form uses EmailJS. Follow the setup instructions in `src/components/EmailJSSetup.md`.

### Resume

1. Add your resume PDF to the `public` folder as `resume.pdf`
2. Update the name in the Footer.tsx file if needed

### Personal Information

Update your personal information, skills, projects, and other content in the corresponding components.

## Deployment

Build the project for production:

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory, ready to be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

## Customization

### Theme

Customize the theme colors in the `tailwind.config.ts` file.

### Content

Update the content in the i18n localization files to change the text throughout the site.

## License

[MIT](LICENSE)
