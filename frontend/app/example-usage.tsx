// Example usage in your page.tsx or any component

import HeroSection from '@/components/HeroSection';
import '@/styles/hero.css';

export default function Home() {
    return (
        <main>
            <HeroSection />
            {/* Rest of your page content */}
        </main>
    );
}

/* 
BOILERPLATE SETUP INSTRUCTIONS:
================================

1. Import the hero.css in your global CSS or layout:
   - Add to app/globals.css: @import '../styles/hero.css';
   - OR import directly in layout.tsx

2. The HeroSection component automatically handles responsive switching:
   - Desktop view: >768px (HeroDesktop)
   - Mobile view: <768px (HeroMobile)

3. Customize the content:
   - Edit featuredCases array in HeroDesktop.tsx
   - Edit categories array in HeroMobile.tsx
   - Modify colors, text, and animations as needed

4. Add real images (optional):
   - Replace phone mockup placeholders with actual product images
   - Use Next.js Image component for optimization
   - Add images to /public/cases/ directory

5. Font setup (recommended):
   - Add to app/layout.tsx:
     import { Inter } from 'next/font/google'
     const inter = Inter({ subsets: ['latin'] })
   - Apply to body: <body className={inter.className}>

6. Performance tips:
   - Components use CSS animations (GPU accelerated)
   - Lazy load images below the fold
   - Consider adding loading states

FEATURES INCLUDED:
==================
✓ Responsive design (auto-switches at 768px)
✓ Animated gradient backgrounds
✓ Auto-rotating carousel (desktop)
✓ Category pills with smooth transitions (mobile)
✓ Glassmorphism effects
✓ Micro-animations on hover/click
✓ Trust indicators and social proof
✓ Premium color schemes
✓ Accessibility-friendly markup
*/
