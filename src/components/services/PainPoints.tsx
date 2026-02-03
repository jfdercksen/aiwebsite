"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PainPoint {
    icon: LucideIcon;
    text: string;
}

interface PainPointsProps {
    points: PainPoint[];
}

export default function PainPoints({ points }: PainPointsProps) {
    return (
        <section className="py-24 px-6 bg-[#050505]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-white uppercase tracking-[0.2em]">The Challenges</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            className="p-10 rounded-[32px] glass border-white/5 flex flex-col items-center text-center group hover:border-primary/20 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                                <point.icon className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-xl font-medium text-white/80 leading-relaxed">{point.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
