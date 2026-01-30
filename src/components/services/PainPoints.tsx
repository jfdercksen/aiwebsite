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
        <section className="py-20 px-6 bg-accent/5">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-accent uppercase tracking-wider">The Challenges You Face</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            className="p-8 rounded-2xl glass border-accent/5 flex flex-col items-center text-center shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center mb-6">
                                <point.icon className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-lg font-semibold text-accent/80">{point.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
