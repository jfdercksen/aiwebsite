"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

interface LeadFormProps {
    serviceName: string;
    challenges: string[];
}

export default function LeadForm({ serviceName, challenges }: LeadFormProps) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="lead-form" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-3xl mx-auto">
                <div className="glass p-8 md:p-12 rounded-[40px] border-accent/10 shadow-xl relative z-10">
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h2 className="text-3xl font-black text-accent mb-2 text-center">Book My Free Consultation</h2>
                                <p className="text-accent/60 mb-10 text-center">Tell us about your business and let's explore your AI potential.</p>

                                <form className="grid gap-6" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            required
                                            className="bg-white border border-accent/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            className="bg-white border border-accent/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            required
                                            className="bg-white border border-accent/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            required
                                            className="bg-white border border-accent/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                    </div>
                                    <select
                                        required
                                        className="bg-white border border-accent/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                                    >
                                        <option value="" disabled selected>Select Your Biggest Challenge</option>
                                        {challenges.map((c, i) => (
                                            <option key={i} value={c}>{c}</option>
                                        ))}
                                    </select>

                                    <Button type="submit" size="lg" className="w-full mt-4">
                                        Book My Free Consultation
                                    </Button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-black text-accent mb-4">Thanks!</h3>
                                <p className="text-accent/60 text-lg">We'll be in touch within 24 hours to schedule your session.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
