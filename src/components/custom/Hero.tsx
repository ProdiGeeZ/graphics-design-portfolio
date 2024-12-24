import DotPattern from "@/components/magicui/dot-pattern";
import Particles from "@/components/magicui/particles";
import { useTheme } from "@/context/useTheme";
import { useEffect, useState } from "react";
import InteractiveHoverButton from "@/components/magicui/interactive-hover-button";

export const Hero = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#000000" : "#ffffff");
    }, [theme]);

    return (
        <div className="pt-40 relative w-full h-[100vh] overflow-hidden">
            <DotPattern
                width={20}
                height={30}
                cx={1}
                cy={1}
                cr={1}
                className="absolute top-0 left-0 z-0 opacity-50"
            />
            <div className="absolute bottom-0 left-0 w-full h-[1500px] bg-gradient-to-t from-white to-transparent">
            </div>
            <div className="relative z-10 flex h-[70%] flex-col items-center justify-center text-center px-6 w-full">
                <p className="text-md uppercase font-semibold">
                    // Senior Graphic Designer //
                </p>
                <h1 className="mt-4 text-6xl md:text-8xl font-extrabold leading-tight w-full">
                    DESIGNING FOR<span className="text-primary italic"> IMPACT</span>.
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-3xl">
                    Over <span className="font-bold">30 years of experience</span> delivering exceptional designs across diverse industries.
                    Specialising in crafting impactful brand experiences.
                </p>
                <div className="mt-8 flex items-center gap-4">
                    <InteractiveHoverButton text={" My Work"} className="rounded-sm" />
                </div>
            </div>
            <Particles
                className="absolute inset-0"
                quantity={200}
                ease={80}
                color={color}
                refresh
            />
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-12 text-primary">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="animate-bounce"
                    >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
