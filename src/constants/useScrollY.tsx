import { useEffect, useState } from "react";

export function useScrollY(containerRef: React.RefObject<HTMLElement>) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                setScrollY(containerRef.current.scrollTop);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, [containerRef]);

    return scrollY;
}