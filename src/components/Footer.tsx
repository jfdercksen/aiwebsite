import Link from "next/link";
import { Cpu, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="px-6 py-20 border-t border-white/5 bg-black text-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="col-span-2">
                    <Link href="/" className="flex items-center gap-2 mb-8">
                        <Cpu className="w-8 h-8 text-primary" />
                        <span className="text-xl font-bold tracking-tight">Ai Dynamic <span className="text-primary italic">Advisory</span></span>
                    </Link>
                    <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                        Empowering South African enterprises with intelligent AI strategies
                        and automated solutions. Fueling innovation through data-driven scalable growth.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Navigation</h4>
                    <ul className="space-y-4">
                        <li><Link href="/services" className="text-white/60 hover:text-primary transition-colors text-sm">Services</Link></li>
                        <li><Link href="/about" className="text-white/60 hover:text-primary transition-colors text-sm">About</Link></li>
                        <li><Link href="/case-studies" className="text-white/60 hover:text-primary transition-colors text-sm">Case Studies</Link></li>
                        <li><Link href="/blog" className="text-white/60 hover:text-primary transition-colors text-sm">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Contact</h4>
                    <ul className="space-y-4 text-sm text-white/60">
                        <li className="hover:text-primary transition-colors cursor-pointer">ai@aiautomations.co.za</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">087 808 3454</li>
                        <li>128 Oxford street, Ferndale,<br />Sandton, Gauteng, 2194</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
                <div>© 2026 Ai Dynamic Advisory. All rights reserved.</div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
