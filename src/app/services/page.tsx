"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Globe, LineChart, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const services = [
    {
        icon: <Brain className="w-10 h-10 text-primary" />,
        title: "AI Strategy Consulting",
        description: "Identify how AI can drive value in your organization with our comprehensive roadmap and readiness assessment.",
        features: ["AI Readiness Review", "Governance Framework", "ROI Projections"],
        href: "/services/ai-strategy-consulting"
    },
    {
        icon: <MessageSquare className="w-10 h-10 text-secondary" />,
        title: "Conversational AI",
        description: "Deploy intelligent chatbots and voice assistants that understand nuances and provide 24/7 localized support.",
        features: ["LLM Integration", "Multi-language Support", "Sentiment Analysis"],
        href: "/services/conversational-ai"
    },
    {
        icon: <Database className="w-10 h-10 text-accent" />,
        title: "Data Intelligence",
        description: "Turn your raw data into actionable insights with custom machine learning models and predictive analytics.",
        features: ["Predictive Modeling", "Data Engineering", "Real-time Dashboards"],
        href: "/services/data-intelligence"
    },
    {
        icon: <Cpu className="w-10 h-10 text-primary" />,
        title: "Process Automation",
        description: "Eliminate manual bottlenecks with AI-driven RPA and workflow automation tailored for South African enterprises.",
        features: ["Workflow Optimization", "OCR & Document Processing", "Auto-reporting"],
        href: "/services/process-automation"
    },
    {
        icon: <LineChart className="w-10 h-10 text-secondary" />,
        title: "Predictive Sales AI",
        description: "Optimize your sales pipeline with AI that predicts customer behavior and identifies high-value leads.",
        features: ["Lead Scoring", "Churn Prediction", "Dynamic Pricing"],
        href: "/services/predictive-sales-ai"
    },
    {
        icon: <Globe className="w-10 h-10 text-accent" />,
        title: "Digital Transformation",
        description: "End-to-end modernization of your tech stack to support scalable, AI-first business operations.",
        features: ["Cloud Migration", "API Integration", "Legacy System AI Hooks"],
        href: "/services/digital-transformation"
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        Our <span className="text-gradient">AI Solutions</span>
                    </motion.h1>
                    <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        From strategy to implementation, we provide the tools and expertise to help
                        South African businesses lead in the AI era.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl glass border-accent/5 hover:border-primary/20 transition-all flex flex-col h-full"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-accent/5 w-fit">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-foreground/60 mb-8 flex-grow">{service.description}</p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href={service.href} className="w-full">
                                <Button variant="outline" className="w-full">Learn More</Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
