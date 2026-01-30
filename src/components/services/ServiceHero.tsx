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
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-black mb-6 leading-tight text-accent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-accent/70 mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {subtitle}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Button size="lg" onClick={scrollToForm}>
                        {ctaText}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
