"use client";

import { motion } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Story Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-8">
                            Pioneering the AI Revolution in <span className="text-gradient">South Africa</span>
                        </h2>
                        <p className="text-foreground/60 text-lg leading-relaxed mb-6">
                            Founded in Johannesburg, Ai Dynamic Advisory was born from a simple realization:
                            African businesses have a unique opportunity to leapfrog legacy constraints using artificial intelligence.
                        </p>
                        <p className="text-foreground/60 text-lg leading-relaxed">
                            We are a team of data scientists, business strategists, and engineers dedicated to
                            localizing global AI trends for the South African market—ensuring our clients
                            stay competitive in an increasingly automated world.
                        </p>
                    </motion.div>
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden glass border-white/10 flex items-center justify-center">
                            <div className="text-primary/20 scale-[3]">
                                <Users size={120} />
                            </div>
                        </div>
                        {/* Abstract floating circles */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
                    </div>
                </section>

                {/* Mission/Values */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Target className="w-8 h-8 text-primary" />,
                            title: "Our Mission",
                            desc: "To democratize high-end AI tools for South African enterprises and SMEs alike."
                        },
                        {
                            icon: <Rocket className="w-8 h-8 text-secondary" />,
                            title: "Our Vision",
                            desc: "Becoming Africa's most trusted partner for ethical and impactful AI implementation."
                        },
                        {
                            icon: <Award className="w-8 h-8 text-accent" />,
                            title: "Our Values",
                            desc: "Expert-driven, data-led, and obsessively focused on delivering measurable ROI."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="p-10 rounded-3xl glass border-accent/5 text-center"
                        >
                            <div className="mx-auto mb-6 p-4 rounded-2xl bg-accent/10 w-fit">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
