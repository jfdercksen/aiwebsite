"use client";

import { motion } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                {/* Story Section */}
                <section className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Our Legacy</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tight">
                            Pioneering Intelligence in <span className="text-primary">Africa</span>
                        </h1>
                        <p className="text-white/40 text-lg leading-relaxed mb-8 font-light">
                            Founded in Johannesburg, Ai Dynamic Advisory was born from a simple realization:
                            African businesses have a unique opportunity to lead the global market using artificial intelligence.
                        </p>
                        <p className="text-white/40 text-lg leading-relaxed font-light">
                            We are a team of data scientists and strategists dedicated to
                            localizing global AI trends for the South African market—ensuring our clients
                            stay ahead of the curve in an increasingly automated world.
                        </p>
                    </motion.div>
                    <div className="relative">
                        <div className="aspect-square rounded-[40px] overflow-hidden glass border-white/5 flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                            <Users size={180} className="text-primary/20 relative z-10" />
                        </div>
                        {/* Abstract floating circles */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-[120px]" />
                    </div>
                </section>

                {/* Mission/Values */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Target className="w-8 h-8 text-primary" />,
                            title: "Mission",
                            desc: "To democratize high-end AI tools for South African enterprises and SMEs alike through intelligent strategy."
                        },
                        {
                            icon: <Rocket className="w-8 h-8 text-secondary" />,
                            title: "Vision",
                            desc: "Becoming Africa's most trusted partner for ethical, impactful, and scalable AI implementations."
                        },
                        {
                            icon: <Award className="w-8 h-8 text-white" />,
                            title: "Values",
                            desc: "Expert-driven, data-led, and obsessively focused on delivering measurable ROI for every client."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-12 rounded-[40px] glass border-white/5 text-center group"
                        >
                            <div className="mx-auto mb-8 p-6 rounded-2xl bg-white/5 w-fit group-hover:bg-primary/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-6">{item.title}</h3>
                            <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
