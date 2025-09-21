# JP Auto Leasing LLC - Premium Automotive Website

A modern, responsive website built for JP Auto Leasing LLC featuring glassmorphism UI design with Apple iOS Liquid Glass effects, built with Next.js 15 and deployed on Vercel.

## 🚗 About JP Auto Leasing LLC

JP Auto Leasing LLC is a premium automotive leasing company owned by Jose Perdomo, offering personalized vehicle leasing solutions backed by over 10 years of industry expertise.

## ✨ Features

### Design & UI
- **Apple iOS Liquid Glass Effects**: Advanced glassmorphism styling with backdrop-blur and transparency
- **Green/Blue/Black Color Scheme**: Professional automotive-themed color palette
- **Framer Motion Animations**: Smooth, physics-based animations throughout the site
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Theme**: Sophisticated dark theme with glassmorphism containers

### Core Functionality
- **Interactive Inventory**: Premium vehicle showcase with filtering and search
- **Credit Application System**: Multi-step credit application with secure form handling
- **Contact Management**: Advanced contact forms with validation and submission handling
- **Consulting Services**: Detailed consulting service descriptions and booking
- **SEO Optimization**: Complete SEO setup with structured data, sitemap, and meta tags

### Technical Features
- **Next.js 15**: Latest Next.js with React 19 and TypeScript
- **Tailwind CSS v4**: Advanced styling with custom glassmorphism utilities
- **Radix UI**: Accessible component primitives
- **Structured Data**: Rich snippets and schema markup for search engines
- **Performance Optimized**: Optimized images, fonts, and loading strategies

## 🛠️ Technology Stack

- **Framework**: Next.js 15.4.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion 12.23.7
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
jp-auto-leasing/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── contact/
│   │   │   ├── consulting/
│   │   │   ├── credit-application/
│   │   │   ├── inventory/
│   │   │   └── guides/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── sitemap.xml/
│   ├── components/
│   │   ├── ui/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── background-animation.tsx
│   │   └── theme-provider.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   ├── jose.png
│   ├── sticker.png
│   ├── robots.txt
│   └── llm.txt
├── package.json
├── tailwind.config.ts
├── next.config.js
└── vercel.json
```

## 📄 Pages & Features

### Homepage
- Hero section with Jose's expertise highlighting
- Premium services showcase with glassmorphism cards
- Meet Jose section with professional biography
- Trust signals and company statistics
- Call-to-action sections with contact information

### Inventory Page
- Interactive vehicle grid with search and filtering
- Glassmorphism vehicle cards with detailed specifications
- Responsive design with grid/list view toggle
- Direct contact integration for each vehicle

### Contact Page
- Multi-method contact options (phone, email, location)
- Advanced contact form with validation
- Business hours and company information
- Interactive elements with hover effects

### Credit Application
- Multi-step application process (4 steps)
- Secure form handling with progress tracking
- Credit tier information and benefits
- Professional submission confirmation

### Consulting Services
- Detailed service descriptions and pricing
- 4-step consulting process explanation
- Client testimonials and success stories
- Professional expertise highlighting

### SEO Guide Pages
- "Finding the Best Car for You" comprehensive guide
- Expert automotive advice and tips
- Related articles and cross-linking
- Professional content structure

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd jp-auto-leasing
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deployment

### Vercel Deployment
This project is optimized for Vercel deployment:

1. **Connect to Vercel**
```bash
vercel
```

2. **Environment Variables**
Set up any necessary environment variables in the Vercel dashboard.

3. **Deploy**
```bash
vercel --prod
```

### Custom Domain Setup
- Configure your domain in Vercel dashboard
- Update the `metadataBase` in `layout.tsx` to your domain
- Update sitemap URLs in `sitemap.xml/route.ts`

## 🎨 Customization

### Color Scheme
The green/blue/black color scheme is defined in `globals.css`:
- Primary Green: `oklch(0.6 0.15 150)`
- Accent Blue: `oklch(0.55 0.12 200)`
- Background: Deep black with transparency

### Glassmorphism Effects
Custom glassmorphism utilities in `globals.css`:
- `.liquid-glass`: Apple-style liquid glass effect
- `.glassmorphism-card`: Enhanced card styling
- `.glassmorphism-header`: Header-specific styling

### Typography
- Primary font: Inter (Google Fonts)
- Responsive typography scales
- Custom gradient text effects

## 📊 SEO Features

### Meta Tags & Open Graph
- Comprehensive meta tags for all pages
- Open Graph and Twitter Card support
- Structured data markup (JSON-LD)

### Sitemap & Robots
- Dynamic sitemap generation (`/sitemap.xml`)
- Robots.txt for search engine guidance
- LLM.txt for AI system information

### Performance
- Image optimization with Next.js Image component
- CSS optimization and minification
- Lazy loading and code splitting

## 🔧 Configuration Files

### Key Configuration
- `next.config.js`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS setup with custom theme
- `vercel.json`: Deployment optimization
- `package.json`: Dependencies and scripts

## 🤝 Support & Contact

For technical support or questions about JP Auto Leasing LLC:

- **Owner**: Jose Perdomo
- **Company**: JP Auto Leasing LLC
- **Experience**: 10+ years in automotive industry
- **Specialty**: Premium vehicle leasing and consulting

## 📄 License

This project is proprietary to JP Auto Leasing LLC. All rights reserved.

---

**Built with ❤️ for JP Auto Leasing LLC - Where expertise meets exceptional service.**
# trd-joseperdomo
