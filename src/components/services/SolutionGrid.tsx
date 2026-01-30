"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SolutionItem {
    title: string;
    description: string;
}

interface SolutionGridProps {
    title: string;
    items: SolutionItem[];
}

export default function SolutionGrid({ title, items }: SolutionGridProps) {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">{title}</h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-8 rounded-3xl glass border-accent/5 hover:border-primary/20 transition-all flex flex-col h-full shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <CheckCircle2 className="w-8 h-8 text-primary mb-6 shrink-0" />
                            <h3 className="text-xl font-bold text-accent mb-4">{item.title}</h3>
                            <p className="text-accent/60 leading-relaxed text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
