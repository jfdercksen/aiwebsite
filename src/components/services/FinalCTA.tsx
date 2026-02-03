"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
    const scrollToForm = () => {
        document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-32 px-6 text-center bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 flex justify-center gap-4 py-20 pointer-events-none opacity-10">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-16 h-full bg-gradient-to-t from-primary via-transparent to-transparent rounded-full transform translate-y-1/2" />
                ))}
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Ready to see what <span className="text-primary italic">AI</span> can do for your business?
                </motion.h2>
                <motion.p
                    className="text-xl text-white/40 mb-12 font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Let's talk. Join the leading South African enterprises leveraging intelligent automation and data-driven growth.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button variant="primary" size="lg" onClick={scrollToForm} className="rounded-full px-16 py-5 shadow-[0_0_30px_rgba(255,77,0,0.3)]">
                        Book My Free Assessment
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
