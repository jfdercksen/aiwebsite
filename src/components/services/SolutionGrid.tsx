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
        <section className="py-24 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">{title}</h2>
                    <p className="text-white/40 mb-12">Building intelligent pillars for scalable success.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-10 rounded-[40px] glass border-white/5 hover:border-primary/20 transition-all flex flex-col h-full group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 leading-tight">{item.title}</h3>
                            <p className="text-white/40 leading-relaxed text-sm font-light">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
