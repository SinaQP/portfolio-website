# Sina Qasempour - Portfolio Website

A dark neon-themed personal portfolio showcasing projects, experiments, and technical expertise. Built with Next.js 14, React Three Fiber, and Framer Motion.

## Features

- **3D Hero Section**: Animated neon rings with React Three Fiber
- **Image-First Projects**: Hover reveals and modal dialogs
- **Future Gadget Lab**: Experimental research showcase
- **Photo Gallery**: Quilt layout with lightbox
- **Certificates Carousel**: Auto-scrolling marquee
- **Tech Stack Wall**: 35+ technologies with animated chips
- **Animated Stats**: Scroll-triggered counters
- **Accent Color Switcher**: Toggle between cyan, magenta, violet, and lime
- **Custom Cursor Trail**: Desktop-only neon cursor effects
- **Scroll Progress**: Gradient progress bar
- **Reduced Motion Support**: Respects user preferences

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **3D Graphics**: React Three Fiber, Three.js
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### Update Personal Information

Edit the hero section in `components/hero/hero-section.tsx`:
- Change name, title, and bio
- Update social links (GitHub, LinkedIn, Email)
- Modify rotating tech chips

### Add/Edit Projects

Edit `data/projects.ts`:
\`\`\`typescript
{
  id: 'your-project',
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: '/path-to-image.jpg',
  tags: ['React', 'AI', 'TypeScript'],
  color: 'cyan',
  link: 'https://project-url.com',
  github: 'https://github.com/username/repo'
}
\`\`\`

### Add/Edit Certificates

Edit `data/certificates.ts`:
\`\`\`typescript
{
  id: 'cert-id',
  title: 'Certificate Name',
  issuer: 'Issuing Organization',
  date: 'Month Year',
  image: '/path-to-certificate.jpg',
  link: 'https://credential-url.com'
}
\`\`\`

### Replace Images

Place your images in the `public/` directory:
- **Portrait**: `/professional-portrait.png`
- **Project Images**: `/project-name.jpg`
- **Gallery Photos**: `/gallery-photo-1.jpg`, etc.
- **Certificates**: `/certificate-name.jpg`

### Update Tech Stack

Edit `components/tech-stack/tech-stack-section.tsx`:
\`\`\`typescript
const technologies = [
  { name: 'Technology Name', color: 'cyan' },
  // Add more...
]
\`\`\`

### Modify Stats

Edit `components/stats/stats-section.tsx`:
\`\`\`typescript
<Stat value={50} label="Projects Built" suffix="+" color="cyan" />
\`\`\`

### Change Contact Information

Edit `components/contact/contact-section.tsx`:
- Update email address
- Update social media links
- Modify contact copy

### Accent Colors

The site supports four accent colors:
- **Cyan**: `#00ffff`
- **Magenta**: `#ff00ff`
- **Violet**: `#8a2be2`
- **Lime**: `#32ff32`

Users can switch colors using the floating palette button in the bottom-right corner.

## Performance Optimization

- All animations use GPU-accelerated transforms
- Images use Next.js Image component with blur placeholders
- 3D scenes are optimized with proper disposal
- Reduced motion preferences are respected
- Lazy loading for off-screen content

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- High contrast neon colors

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy manually:
\`\`\`bash
npm run build
npm run start
\`\`\`

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built by Sina Qasempour with Next.js, React Three Fiber, and Framer Motion.
\`\`\`

```tsx file="" isHidden
