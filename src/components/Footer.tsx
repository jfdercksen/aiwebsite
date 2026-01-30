import Link from "next/link";
import { Cpu, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="px-6 py-20 border-t border-accent/10 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="col-span-2">
                    <Link href="/" className="flex items-center gap-2 mb-8">
                        <Cpu className="w-8 h-8 text-primary" />
                        <span className="text-xl font-bold">Ai Dynamic Advisory</span>
                    </Link>
                    <p className="text-accent/60 max-w-sm mb-8">
                        Empowering South African enterprises with intelligent AI strategies
                        and automated solutions for a digital-first future.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
                    <ul className="space-y-4">
                        <li><Link href="/services" className="text-foreground/60 hover:text-primary transition-colors">Services</Link></li>
                        <li><Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">About</Link></li>
                        <li><Link href="/case-studies" className="text-foreground/60 hover:text-primary transition-colors">Case Studies</Link></li>
                        <li><Link href="/blog" className="text-foreground/60 hover:text-primary transition-colors">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
                    <ul className="space-y-4 text-sm text-accent/60">
                        <li>ai@aiautomations.co.za</li>
                        <li>087 808 3454</li>
                        <li>128 Oxford street, Ferndale,<br />Sandton, Gauteng, 2194</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-accent/5 flex flex-col md:row justify-between items-center gap-4 text-sm text-accent/40">
                <div>© 2026 Ai Dynamic Advisory. All rights reserved.</div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
