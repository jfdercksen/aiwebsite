"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clientLogos = [
    { name: "MG Bryanston", image: "/images/mg-bryanston.png", scale: "scale-150" },
    { name: "Modern Management", image: "/images/mm-logo.png" },
    { name: "Ebiexperts", image: "/images/ebiexperts.png" },
    { name: "Octogas", image: "/images/octogas.png" },
    { name: "Fire Risk", image: "/images/fire.png", invert: true },
    { name: "OnicaVox", image: "/images/onicavox.png" },
    { name: "JAC Polokwane", image: "/images/jac.png" },
    { name: "Branding Zone", image: "/images/branding-zone.png", invert: true },
    { name: "Jetour Northcliff", image: "/images/jetour.png" }
];

const results = [
    { label: "Leads Generated", value: "200+" },
    { label: "Follower Growth", value: "200%" },
    { label: "Operations Automated", value: "24/7" },
    { label: "Content Produced", value: "Daily" }
];

export default function ResultsBar() {
    return (
        <section className="py-20 border-y border-accent/5 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h3 className="text-accent/30 uppercase tracking-[0.2em] font-bold text-sm mb-12">Trusted By Forward-Thinking Businesses</h3>
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex gap-x-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-nowrap"
                        animate={{
                            x: [0, -1500],
                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...clientLogos, ...clientLogos].map((client, i) => (
                            <div key={i} className="flex items-center justify-center flex-shrink-0">
                                {client.image ? (
                                    <div className={`relative h-10 w-40 transition-transform ${client.scale || ''}`}>
                                        <Image
                                            src={client.image}
                                            alt={client.name}
                                            fill
                                            className={`object-contain ${client.invert ? 'brightness-0' : ''}`}
                                        />
                                    </div>
                                ) : (
                                    <span className="text-lg font-black text-accent uppercase tracking-tighter">{client.name}</span>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="bg-accent/5 py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {results.map((stat, i) => (
                        <div key={i} className="text-center">
                            <motion.div
                                className="text-4xl font-black text-primary mb-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-xs uppercase tracking-widest text-accent/50 font-bold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
