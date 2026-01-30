"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
    {
        title: "The State of AI in South Africa: 2024 Report",
        excerpt: "How local enterprises are adopting generative AI to solve uniquely African business challenges.",
        date: "Jan 15, 2024",
        author: "Jane Smith",
        category: "Insights"
    },
    {
        title: "Ethical AI: Protecting Data in the Digital Age",
        excerpt: "Exploring the intersection of AI innovation and South Africa's POPIA compliance requirements.",
        date: "Jan 10, 2024",
        author: "Mark Davids",
        category: "Guide"
    },
    {
        title: "5 Workflow Bottlenecks AI Can Fix Today",
        excerpt: "Simple automation steps that can save your team 10+ hours per week immediately.",
        date: "Jan 05, 2024",
        author: "Sarah Jones",
        category: "Trends"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 italic"><span className="text-gradient">Resources</span> & Insights</h1>
                        <p className="text-foreground/60 text-lg leading-relaxed">
                            Expert commentary on the evolving landscape of AI, machine learning, and digital strategy.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {["All", "Trends", "Guides", "News"].map((tag) => (
                            <button key={tag} className="px-6 py-2 rounded-full glass border-white/10 hover:border-primary/50 text-sm transition-colors">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    {posts.map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 md:p-12 rounded-[40px] glass border-white/5 hover:border-primary/20 transition-all flex flex-col md:flex-row gap-8 items-center cursor-pointer"
                        >
                            <div className="flex-grow">
                                <div className="flex items-center gap-4 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                                    <span>{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                                <p className="text-foreground/60 text-lg mb-0">{post.excerpt}</p>
                            </div>
                            <div className="w-16 h-16 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all shrink-0">
                                <ArrowRight size={24} />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
