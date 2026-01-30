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
        <div className="min-h-screen pt-32 pb-20 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto">
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-primary font-bold mb-12 hover:translate-x-[-4px] transition-transform"
                >
                    <ChevronLeft size={20} /> Back to Insights
                </Link>

                <div className="mb-12">
                    <div className="flex items-center gap-4 text-xs font-bold text-primary uppercase tracking-widest mb-6">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-accent/20" />
                        <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-accent/20" />
                        <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-accent mb-8 leading-tight">
                        {post.title}
                    </h1>
                </div>

                <div
                    className="prose prose-lg max-w-none text-accent/70 leading-relaxed
                               prose-headings:text-accent prose-headings:font-black
                               prose-a:text-primary prose-strong:text-accent"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-20 pt-12 border-t border-accent/10">
                    <div className="p-8 md:p-12 rounded-[40px] bg-accent text-white flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Ready to implement this in your business?</h3>
                            <p className="text-white/60">Let's discuss how AI can solve your specific challenges.</p>
                        </div>
                        <Link href="/contact" className="px-8 py-4 bg-primary text-dark font-black rounded-2xl hover:scale-105 transition-transform shrink-0">
                            Book a Strategy Session
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
