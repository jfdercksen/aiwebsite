"use client";

import { motion } from "framer-motion";
import { ExternalLink, Brain, Briefcase, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";

const caseStudies = [
    {
        title: "Financial Services Automation",
        client: "Standard FinTech",
        desc: "Implemented a custom LLM-based document processor that reduced loan application times by 70%.",
        impact: "70% Faster Processing",
        icon: <Briefcase className="w-6 h-6 text-primary" />
    },
    {
        title: "Predictive Supply Chain AI",
        client: "LogiTrans SA",
        desc: "Developed a demand forecasting engine that optimized inventory levels across 4 provinces.",
        impact: "15% Cost Reduction",
        icon: <TrendingUp className="w-6 h-6 text-secondary" />
    },
    {
        title: "AI Customer Experience",
        client: "RetailHub",
        desc: "Deployed a multi-lingual AI agent capable of handling 85% of tier-1 support across 11 official languages.",
        impact: "24/7 Support Coverage",
        icon: <Brain className="w-6 h-6 text-accent" />
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Proven <span className="text-gradient">Impact</span></h1>
                    <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover how we've helped leading South African companies bridge the gap between human intuition and machine intelligence.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="group rounded-[32px] glass p-8 border-white/5 hover:border-primary/30 transition-all flex flex-col"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-4 rounded-2xl bg-white/5">{study.icon}</div>
                                <div className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-tight">
                                    {study.impact}
                                </div>
                            </div>
                            <div className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">{study.client}</div>
                            <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                            <p className="text-foreground/60 mb-8 flex-grow leading-relaxed">{study.desc}</p>
                            <Button variant="ghost" className="w-fit">View Full Case Study <ExternalLink className="w-4 h-4" /></Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
