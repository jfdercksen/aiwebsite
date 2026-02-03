"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Intelligence Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tight">
                            Latest <br />
                            <span className="text-primary italic">Insights</span>
                        </h1>
                        <p className="text-white/40 text-xl font-light leading-relaxed">
                            Expert commentary on the evolving landscape of AI, machine learning, and digital strategy.
                        </p>
                    </div>
                </div>

                <div className="grid gap-12">
                    {blogPosts.map((post, i) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group p-10 md:p-16 rounded-[50px] glass border-white/5 hover:border-primary/20 transition-all flex flex-col md:row gap-12 items-center cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors" />

                                <div className="flex-grow relative z-10">
                                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-8">
                                        <span className="text-primary">{post.category}</span>
                                        <span className="flex items-center gap-2 pr-4 border-r border-white/10"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-2"><User size={12} /> {post.author}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight group-hover:text-primary transition-colors">{post.title}</h2>
                                    <p className="text-white/40 text-lg mb-0 font-light max-w-3xl leading-relaxed">{post.excerpt}</p>
                                </div>
                                <div className="w-20 h-20 rounded-full glass border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all shrink-0">
                                    <ArrowRight size={32} />
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
