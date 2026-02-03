import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, User, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};

    return {
        title: `${post.title} | Ai Dynamic Advisory`,
        description: post.seoDescription,
        openGraph: {
            title: post.title,
            description: post.seoDescription,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // JSON-LD structured data for Google
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author,
        },
        "description": post.seoDescription,
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto">
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-12 hover:translate-x-[-4px] transition-transform w-fit"
                >
                    <ChevronLeft size={16} /> Back to Insights
                </Link>

                <div className="mb-20">
                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-10">
                        <span className="text-primary">{post.category}</span>
                        <span className="flex items-center gap-2 pr-4 border-r border-white/10"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-2"><User size={12} /> {post.author}</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tight">
                        {post.title}
                    </h1>
                </div>

                <div
                    className="prose prose-invert prose-lg max-w-none text-white/40 leading-[1.8] font-light
                               prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
                               prose-a:text-primary prose-strong:text-white prose-strong:font-bold"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-40 pt-20 border-t border-white/5">
                    <div className="p-10 md:p-20 rounded-[50px] bg-gradient-to-br from-primary/20 to-transparent border border-white/5 flex flex-col md:row justify-between items-center gap-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">Ready to lead with <span className="text-primary italic">AI</span>?</h3>
                            <p className="text-white/40 text-xl font-light">Let's discuss how data-driven strategy can solve your specific challenges.</p>
                        </div>
                        <Link href="/contact" className="relative z-10 px-12 py-5 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,77,0,0.3)] shrink-0">
                            Book Strategy Session
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Ensure all existing slugs are pre-rendered
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
