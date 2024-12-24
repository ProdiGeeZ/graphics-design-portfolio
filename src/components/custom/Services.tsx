"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        name: "Strategy & Brand Identity",
        delay: 0.1,
    },
    {
        name: "Web Design",
        delay: 0.2,
    },
    {
        name: "Advertising",
        delay: 0.3,
    },
    {
        name: "Illustration",
        delay: 0.4,
    },
    {
        name: "Packaging Design",
        delay: 0.5,
    },
];

export default function Services() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-50% 0px" });

    return (
        <section
            ref={sectionRef}
            className="relative max-w-screen bg-[#1f1f1f] text-white flex items-center justify-center py-24"
        >
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className="text-xl font-normal mb-12 tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                >
                    SERVICES
                </motion.h2>

                <div className="flex flex-col items-center gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative text-center text-4xl md:text-6xl font-bold italic"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: service.delay, duration: 0.4 }}
                        >
                            <div className="relative flex items-center justify-center">
                                {service.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
