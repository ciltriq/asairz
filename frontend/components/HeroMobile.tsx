'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroMobile() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        { name: 'Leather', icon: '👜', color: 'from-gray-500 to-gray-700' },
        { name: 'Clear', icon: '💎', color: 'from-gray-400 to-gray-600' },
        { name: 'Rugged', icon: '🛡️', color: 'from-gray-600 to-gray-900' },
        { name: 'Designer', icon: '🎨', color: 'from-gray-500 to-gray-800' }
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="hero-mobile min-h-screen flex flex-col bg-white">
            {/* Top Image Section - 55% viewport height */}
            <div className="relative w-full">
                {/* Hero Text Overlay */}
                {/* <div className="relative top-68 left-0 right-0 z-20 text-center px-6">
                    <h2 className="text-3xl font-serif font-medium text-white tracking-wider drop-shadow-md">
                        Premium Phone Cases
                    </h2>
                </div> */}

                <img
                    src="/hero_image.png"
                    alt="Hero Banner"
                    className="w-screen h-auto"
                />
            </div>
        </section>
    );
}
