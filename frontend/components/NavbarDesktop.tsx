'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavbarDesktop() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="w-full max-w-screen-2xl mx-auto md:px-8 md:py-4 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/logo.png"
                            alt="Asairz Logo"
                            fill
                            className="object-contain drop-shadow-md"
                            priority
                        />
                    </div>
                    <div className="relative w-28 h-7">
                        <Image
                            src="/logotext.png"
                            alt="Asairz"
                            fill
                            className="object-contain drop-shadow-sm" // Standard logo color
                            priority
                        />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-10">
                            {['Home', 'Shop', 'Collections', 'About'].map((item) => (
                                <NavigationMenuItem key={item}>
                                    <NavigationMenuLink asChild className="p-0 text-base font-medium text-gray-600 hover:text-black transition-colors tracking-wide bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent focus-visible:ring-0 ring-0 outline-none">
                                        <Link href="#">
                                            {item}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant={"outline"} className='text-black border border-black px-6 py-2 h-auto rounded-full hover:bg-gray-100 transition-colors' >
                        Request Quote
                    </Button>
                </div>
            </div>
        </nav>
    );
}
