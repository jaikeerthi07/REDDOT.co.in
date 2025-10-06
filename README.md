# Reddot.co.in - AI-Powered Website

A modern, futuristic, AI-powered website built with Next.js, TailwindCSS, and Framer Motion, featuring an intelligent chatbot powered by Groq API.

## 🚀 Features

### 🎨 Modern Design
- **Futuristic UI**: Dark theme with gradient accents and AI-inspired animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for delightful user experiences
- **SEO Optimized**: Built-in SEO with meta tags, sitemap, and robots.txt

### 🤖 AI Integration
- **Groq API**: Lightning-fast AI responses with Llama 3 models
- **Intelligent Chatbot**: Context-aware conversational AI with memory
- **Voice Agent**: Interactive voice assistant with video capabilities
- **AI-Powered Services**: Comprehensive suite of AI solutions

### 📱 Website Sections
1. **Hero** 🦸
   - Animated background with floating AI elements
   - Clear value proposition and CTAs
   - Key statistics showcase

2. **Services** 🛠️
   - 9 core AI services with detailed descriptions
   - Interactive cards with hover effects
   - Modal popups with comprehensive service details

3. **Projects** 💼
   - Portfolio showcase with filtering by category
   - Detailed project modals with case study information
   - Live demos and GitHub links

4. **About** 👨‍💻
   - Founder profiles with photos
   - Mission and vision statements
   - Key achievements and statistics
   - Core expertise and skills
   - Direct contact information

5. **Blog** ✍️
   - Curated AI content with category filtering
   - Featured posts with rich media
   - Additional articles grid

6. **Contact** 📞
   - Comprehensive contact form with validation
   - Direct contact information
   - Social media links
   - Integrated AI chat widget

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS with custom color palette
- **Animations**: Framer Motion
- **AI**: Groq API with Llama 3 models
- **Database**: MongoDB with fallback to in-memory storage
- **Deployment**: Vercel-ready with environment configuration
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/reddot-website.git
cd reddot-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Get a free API key from [Groq Console](https://console.groq.com/)
5. Replace `demo_key_get_real_key_from_groq_console` in `.env.local`
6. Add your MongoDB connection string (optional but recommended)

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build
```bash
npm run build
npm start
```

## 🎨 Customization Guide

### Updating Content
1. **Services**: Edit `src/data/index.ts` services array
2. **Projects**: Update projects array with your portfolio
3. **Blog Posts**: Modify blogPosts array for your content
4. **Founder Photo**: Replace the placeholder image URL in `src/components/sections/About.tsx` with your actual photo
   - Save your photo as `public/images/founder/jai-keerthi.jpg`
   - Update the image src to `/images/founder/jai-keerthi.jpg`

### Color Scheme
The website uses a custom brown/grey color palette defined in `tailwind.config.js`:
- **Primary**: Brown tones (#a9775c, #8c5e46, etc.)
- **Secondary**: Grey tones (#808080, #606060, etc.)
- **Accent**: Gradient combinations

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Add it to `src/app/page.tsx`
3. Follow the existing animation patterns with Framer Motion
4. Use the provided UI components in `src/components/ui/`

## 📁 Project Structure
```
├── src/
│   ├── app/               # Next.js app router pages
│   │   ├── api/           # API routes
│   │   ├── globals.css    # Global styles
│   │   └── layout.tsx     # Root layout
│   ├── components/        # React components
│   │   ├── chat/          # Chat-related components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   ├── sections/      # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── data/              # Static data and content
│   ├── lib/               # Utility functions and configs
│   ├── types/             # TypeScript type definitions
│   └── public/            # Static assets
│       └── images/        # Image assets
├── tailwind.config.js     # TailwindCSS configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── .env.local             # Environment variables
```

## 🤖 AI Chat Features
- **Context Memory**: Remembers conversation history
- **File Analysis**: Can analyze uploaded documents
- **Voice Interaction**: Voice-to-voice communication
- **Video Agent**: Interactive video assistant
- **Smart Responses**: Groq-powered fast responses

## 📞 Contact & Support
- **Email**: keerthijai909@gmail.com
- **Phone**: +91 8072163133
- **Location**: Chennai, India
- **LinkedIn**: [Jai Keerthi](https://www.linkedin.com/in/jai-keerthi-03931b341)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- [Groq](https://groq.com/) for providing the AI API
- [Next.js](https://nextjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide Icons](https://lucide.dev/) for beautiful icons

---

Built with ❤️ by **Jai Keerthi** for **reddot.co.in**