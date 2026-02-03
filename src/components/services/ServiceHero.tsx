"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
}

export default function ServiceHero({ title, subtitle, ctaText }: ServiceHeroProps) {
    const scrollToForm = () => {
        document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-hero">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                    className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white tracking-tight"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-white/40 mb-12 leading-relaxed max-w-2xl mx-auto font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                >
                    {subtitle}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Button variant="secondary" size="lg" onClick={scrollToForm} className="rounded-full px-12 py-5">
                        {ctaText}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
