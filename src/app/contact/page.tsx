"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-8">
                            Let's build the <br />
                            <span className="text-gradient">future together.</span>
                        </h1>
                        <p className="text-foreground/60 text-lg leading-relaxed mb-12">
                            Ready to automate your workflows or need a custom AI strategy?
                            Reach out and let's start a conversation about your digital evolution.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-foreground/40 uppercase font-bold tracking-widest">Email Us</div>
                                    <div className="text-xl font-medium">ai@aiautomations.co.za</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                                    <Phone className="text-secondary w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-foreground/40 uppercase font-bold tracking-widest">Call Us</div>
                                    <div className="text-xl font-medium">087 808 3454</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                                    <MapPin className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-foreground/40 uppercase font-bold tracking-widest">Our Office</div>
                                    <div className="text-xl font-medium text-lg">128 Oxford street, Ferndale,<br />Sandton, Gauteng, 2194</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-8 md:p-12 rounded-[40px] glass border-accent/10"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground/60 ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground/60 ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/60 ml-2">Service Interested In</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                                    <option className="bg-dark">AI Strategy Consulting</option>
                                    <option className="bg-dark">Process Automation</option>
                                    <option className="bg-dark">Conversational AI</option>
                                    <option className="bg-dark">Data Intelligence</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/60 ml-2">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                />
                            </div>
                            <Button size="lg" className="w-full py-5">
                                Send Message <Send className="w-5 h-5" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
