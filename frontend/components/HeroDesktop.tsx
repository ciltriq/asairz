'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function HeroDesktop() {
    return (
        <section className="bg-white mt-12">
            <div className="w-full max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Text Content */}
                <div className="flex flex-col items-start space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                        Elevate Your Device <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                            With Premium Protection
                        </span>
                    </h1>

                    <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                        Discover our exclusive collection of phone cases designed for elegance, durability, and style.
                        Protect what matters most without compromising on aesthetics.
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8 text-base">
                            Shop Collection
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 text-base">
                            View Lookbook
                        </Button>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative w-full h-[600px] flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <Image
                            src="/hero_image.png"
                            alt="Premium Phone Case Collection"
                            fill
                            className="object-contain rounded-xl" // Changed to contain to ensure full image visibility like in mobile
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
