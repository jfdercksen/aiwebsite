"use client";

import { motion } from "framer-motion";

const steps = [
    { n: "01", title: "Book Call", desc: "Schedule your initial free consultation." },
    { n: "02", title: "We Assess", desc: "We deep-dive into your specific operations." },
    { n: "03", title: "We Implement", desc: "Custom AI solutions built for your needs." },
    { n: "04", title: "You Grow", desc: "Scale with efficiency and automated systems." }
];

export default function ProcessSteps() {
    return (
        <section className="py-24 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Our Execution Model</h2>
                    <p className="text-white/40 mb-12">Precise, transparent, and built for speed.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="relative p-10 pt-16 rounded-[40px] glass border-white/5 text-center overflow-hidden group hover:border-primary/30 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-8xl font-black text-white/[0.03] select-none group-hover:text-primary/5 transition-colors">
                                {step.n}
                            </span>
                            <h3 className="text-2xl font-black text-white mb-4 relative z-10">{step.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed relative z-10 font-light">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
