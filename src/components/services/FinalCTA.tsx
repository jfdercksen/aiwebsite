"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
    const scrollToForm = () => {
        document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-24 px-6 text-center bg-white relative">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-5xl font-black text-accent mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Ready to see what AI can do for your business?
                </motion.h2>
                <motion.p
                    className="text-xl text-accent/60 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Let's talk. Join the leading South African enterprises leveraging intelligent automation.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button size="lg" onClick={scrollToForm} className="px-12">
                        Book My Free Assessment
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
