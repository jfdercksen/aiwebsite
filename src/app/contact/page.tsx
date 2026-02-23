"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import LeadForm from "@/components/services/LeadForm";

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
                        className="p-10 md:p-16 rounded-[40px] glass border-white/5 relative overflow-hidden h-fit"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
                        <div className="relative z-10">
                            <LeadForm
                                serviceName="General Inquiry (Contact Page)"
                                title="Send a Message"
                                description="Tell us about your project and we'll get back to you shortly."
                                showServiceSelect={false}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
