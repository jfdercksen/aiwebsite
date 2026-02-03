"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Let's Connect</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tight">
                            Build the <br />
                            <span className="text-primary italic">Future</span>
                        </h1>
                        <p className="text-white/40 text-lg leading-relaxed mb-12 font-light max-w-md">
                            Ready to automate your workflows or need a custom AI strategy?
                            Reach out and let's start a conversation about your digital evolution.
                        </p>

                        <div className="space-y-10">
                            {[
                                { icon: Mail, label: "Email Us", value: "ai@aiautomations.co.za", color: "text-primary" },
                                { icon: Phone, label: "Call Us", value: "087 808 3454", color: "text-primary" },
                                { icon: MapPin, label: "Office", value: "128 Oxford street, Ferndale, Sandton, 2194", color: "text-primary" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-8 group">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <item.icon className={`${item.color} w-6 h-6`} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/20 uppercase font-black tracking-widest mb-1">{item.label}</div>
                                        <div className="text-xl font-medium group-hover:text-primary transition-colors">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-10 md:p-16 rounded-[40px] glass border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
                        <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-white/30 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/10"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-white/30 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.co.za"
                                        className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-white/30 uppercase tracking-widest ml-1">Service</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 transition-all text-white appearance-none">
                                    <option className="bg-black">AI Strategy Consulting</option>
                                    <option className="bg-black">Process Automation</option>
                                    <option className="bg-black">Conversational AI</option>
                                    <option className="bg-black">Data Intelligence</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-white/30 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/10 resize-none"
                                />
                            </div>
                            <Button variant="primary" size="lg" className="w-full py-6 rounded-full shadow-[0_10px_30px_rgba(255,77,0,0.2)]">
                                Send Message <Send className="w-5 h-5 ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
