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
        <section className="py-24 px-6 bg-accent/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-accent mb-4">Our Collaborative Process</h2>
                    <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="relative p-8 pt-12 rounded-[32px] glass border-accent/5 text-center overflow-hidden"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="absolute top-4 left-6 text-6xl font-black text-primary/10 select-none">
                                {step.n}
                            </span>
                            <h3 className="text-xl font-bold text-accent mb-4 relative z-10">{step.title}</h3>
                            <p className="text-accent/60 text-sm leading-relaxed relative z-10">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
