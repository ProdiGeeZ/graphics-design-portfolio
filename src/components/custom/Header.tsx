"use client";

import { Button } from "@/components/magicui/button";
import { useScrollY } from "@/constants/useScrollY";
import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { useRef, useState } from "react";
import { Separator } from "../magicui/separator";
import InteractiveHoverButton from "../magicui/interactive-hover-button";

export function StickyHeader({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
    const scrollY = useScrollY(containerRef);
    const stickyNavRef = useRef<HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { id: 1, label: "About", link: "#about" },
        { id: 2, label: "Services", link: "#services" },
        { id: 3, label: "Portfolio", link: "#portfolio" },
    ];

    return (
        <header
            ref={stickyNavRef}
            className="absolute top-0 z-50 h-20 flex w-full items-center px-8 sm:max-w-screen"
        >
            <motion.div
                className="text-lg lg:text-2xl font-[900] tracking-wide"
                animate={{
                    opacity: scrollY >= 120 ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
            >
                STEPHEN.
            </motion.div>
            <nav className="hidden ml-auto items-center space-x-8 font-medium md:flex">
                {navLinks.map((navItem) => (
                    <a key={navItem.id} href={navItem.link} className="hover:text-gray-500 transition-all ease-in-out">
                        {navItem.label}
                    </a>
                ))}
                <InteractiveHoverButton  className="text-[15px] items-center rounded-sm text-white border-black" text="Let's Talk!">
                </InteractiveHoverButton>
            </nav>
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="ml-auto block md:hidden bg-white max-w-screen"
                aria-label="Toggle menu"
            >
                {menuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 left-0 w-full text-black bg-[#f5f5f5e3] shadow-lg rounded-b-lg p-2 ease-in-out border border-1"
                >
                    <nav className="flex flex-col items-right space-y-4 py-4 font-medium">
                        {navLinks.map((navItem) => (
                            <a
                                key={navItem.id}
                                href={navItem.link}
                                className="hover:text-gray-500 text-lg transition-all m-1 "
                                onClick={() => setMenuOpen(false)}
                            >
                                {navItem.label}
                                <>
                                    <Separator dir="vertical" className="w-full" />
                                </>
                            </a>
                        ))}
                        <Button
                            variant="outline"
                            className="text-lg p-3 rounded-sm text-white"
                            onClick={() => setMenuOpen(false)}
                        >
                            Let's Talk.
                        </Button>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}

export function Header() {
    const containerRef = useRef(null);

    return (
        <main ref={containerRef} className="w-full">
            <StickyHeader containerRef={containerRef} />
        </main>
    );
}
