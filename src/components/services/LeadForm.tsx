"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

interface LeadFormProps {
    serviceName: string;
    challenges?: string[];
    title?: string;
    description?: string;
    showServiceSelect?: boolean;
}

export default function LeadForm({
    serviceName,
    challenges = [],
    title = "Book My Free Consultation",
    description = "Tell us about your business and let's explore your AI potential.",
    showServiceSelect = true
}: LeadFormProps) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Add metadata
        data.serviceName = serviceName;
        data.submittedAt = new Date().toISOString();
        data.sourceUrl = typeof window !== 'undefined' ? window.location.href : '';

        try {
            const response = await fetch("https://n8n.aiautomata.co.za/webhook/aiwebform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setSubmitted(true);
        } catch (err) {
            console.error("Submission error:", err);
            setError("Something went wrong. Please try again or email us directly.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative z-10">
            <AnimatePresence mode="wait">
                {!submitted ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h2 className="text-3xl font-black text-white mb-2 text-center">{title}</h2>
                        <p className="text-white/40 mb-10 text-center">{description}</p>

                        <form className="grid gap-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    required
                                    className="bg-black border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder:text-white/20"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    className="bg-black border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder:text-white/20"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    required
                                    className="bg-black border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder:text-white/20"
                                />
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    required
                                    className="bg-black border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder:text-white/20"
                                />
                            </div>

                            {showServiceSelect && challenges.length > 0 && (
                                <div className="relative">
                                    <select
                                        name="challenge"
                                        required
                                        defaultValue=""
                                        className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none appearance-none text-white invalid:text-white/20"
                                    >
                                        <option value="" disabled>Select Your Biggest Challenge</option>
                                        {challenges.map((c, i) => (
                                            <option key={i} value={c} className="text-white bg-black">{c}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {!showServiceSelect && (
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    className="bg-black border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder:text-white/20 resize-none"
                                />
                            )}

                            {error && (
                                <p className="text-red-500 text-sm text-center">{error}</p>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full mt-4 rounded-full"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : title}
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
                        <h3 className="text-3xl font-black text-white mb-4">Thanks!</h3>
                        <p className="text-white/40 text-lg">We'll be in touch within 24 hours to schedule your session.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
