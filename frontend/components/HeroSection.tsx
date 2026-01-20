'use client';

import { useEffect, useState } from 'react';
import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';

export default function HeroSection() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Check on mount
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Prevent hydration mismatch by not rendering until mounted
    if (!isMounted) {
        return null;
    }

    return (
        <>
            {isMobile ? <HeroMobile /> : <HeroDesktop />}
        </>
    );
}
