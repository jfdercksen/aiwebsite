"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Shield, BarChart3, TrendingUp, Play, Star, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import ResultsBar from "@/components/services/ResultsBar";
import LeadForm from "@/components/services/LeadForm";

const homeChallenges = [
  "Deep Tech Integration",
  "Automated Workflows",
  "Predictive Intelligence",
  "Conversational AI Systems",
  "Sales Growth Automation",
  "Executive Data Dashboards"
];

export default function Home() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/60">
                  innovate with intelligence
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                Cutting Edge <br />
                <span className="text-white">AI Solutions</span>
              </h1>
              <Button variant="secondary" size="lg" className="rounded-full px-10 py-5" onClick={scrollToForm}>
                Free Consultation
              </Button>
              <p className="mt-12 text-lg text-white/40 leading-relaxed max-w-sm">
                Transforming businesses through next-gen AI strategies and custom solutions.
                Empowering growth, fueling innovation with scalable, data-driven intelligence.
              </p>
            </motion.div>

            {/* Center Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:col-span-1 flex justify-center relative"
            >
              <div className="relative w-full aspect-square max-w-[500px]">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
                <Image
                  src="/images/cybernetic-hero.png" // Placeholder or previously generated if existed
                  alt="AI Intelligence Visual"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </motion.div>

            {/* Right Side Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-8 flex flex-col items-center lg:items-end"
            >
              {/* Video Play Button */}
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Play className="w-6 h-6 fill-white group-hover:fill-primary text-white group-hover:text-primary transition-all" />
                </div>
              </div>

              {/* Stats Card */}
              <div className="glass p-6 rounded-3xl w-full max-w-[280px]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-surface relative overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
                      </div>
                    ))}
                  </div>
                  <div className="ml-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                    </div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      Trusted by 500+ Users
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-black mb-1">5/5 <span className="text-primary">★</span></div>
                <div className="text-xs text-white/40">Registered User Trust around 1k Customer Reviews</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            End-to-End AI <br />
            <span className="text-primary">Consulting Services</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">
            High-performance AI implementations tailored for building, integrating, and scaling operations.
            Build smart, scalable solutions under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Seamless AI Integration Without Workflow Disruption",
              desc: "Our solutions are designed fast beyond the systems thinking, intuitive experiences that remains smart and scalable growth architecture. The world in your Control.",
              image: "/images/service-icon-1.png"
            },
            {
              title: "Data-Driven Intelligence for Strategic Decision Making",
              desc: "Harness the power of AI to unlock hidden patterns in your data and drive measurable ROI through intelligent business operational automation and custom strategy.",
              image: "/images/service-icon-2.png"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-12 rounded-[40px] glass border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-all" />
              <div className="w-24 h-24 rounded-3xl bg-surface mb-8 relative flex items-center justify-center overflow-hidden border border-white/5">
                <Zap className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight max-w-[80%]">
                {card.title}
              </h3>
              <p className="text-white/40 leading-relaxed mb-8">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INDUSTRY BLOCK */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mb-32">
            <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] text-white/50">
              Empowering Industries Through Intelligent. <span className="text-white">In an era defined by rapid digital transformation, industries are no longer driven solely</span> <span className="text-primary">by manpower machinery or even market trends.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "AI-Powered Marketing Solutions", desc: "Revolutionizing automate campaigns, accelerate performance, and maximize impact." },
              { title: "AI-Optimized Logistics Solutions", desc: "Enhance efficiency, ensure speed and precision, and gain real-time visibility across your supplies." }
            ].map((item, i) => (
              <div key={i} className="relative aspect-[16/10] rounded-[40px] overflow-hidden group border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute bottom-12 left-12 right-12 z-20 text-center">
                  <h4 className="text-3xl font-black mb-2">{item.title}</h4>
                  <p className="text-white/40 mb-6">{item.desc}</p>
                  <Button variant="outline" className="rounded-full px-8 py-3 text-sm">Let's Talk</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE APPROACH */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight text-white/50">
              At the heart of our AI consulting approach lies a to <span className="text-white">solving real problems with intelligent operations and</span> <span className="text-primary">unlocking deep insights to building future-ready.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "AI Solutions", icon: Bot, desc: "Multidimensional strategy that tailored that impact growth. We will focus on insuring your AI solution aligns with your business vision, integrating Seamlessly Across your eco systems and your team is empowered to scale with confidence." },
              { title: "End-to-End Support", icon: Zap, desc: "From strategic development tools to our partners, always insuring Your Team Through strategy, planning, data management, testing, and Full-Scale implementation." },
              { title: "Industry Expertise", icon: BarChart3, desc: "Our team brings deep, diverse knowledge Capable of understanding Modern Business Infrastructure and enhancing the management focused on delivering customer Experience." },
              { title: "Scalable Architecture", icon: Shield, desc: "Build once, scale as you grow with Future-Ready AI Framework Engineered for flexibility, performance, and long term success. Our solutions are designed for value." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black mb-4">{feature.title}</h4>
                    <p className="text-white/40 leading-relaxed font-light">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-4">Client Experiences That</h2>
            <h2 className="text-4xl md:text-6xl font-black text-primary">Speak Volumes</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { name: "Samantha Blake", role: "Founder, RetailSoft", text: "What impressed us most was the clarity and transparency throughout the entire process. From initial consultation to deployment, their team communicated every step with precision and honesty." },
              { name: "Ray Gallagher", role: "Lead Dev, LogiCore", text: "They didn't just deliver an AI solution; they transformed the way we think about operations. Efficiency is up, costs are down, and our decisions are smarter. They made complex AI easy." }
            ].map((t, i) => (
              <div key={i} className="p-12 rounded-[40px] glass border-white/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-transparent" />
                  <div>
                    <div className="font-bold text-xl">{t.name}</div>
                    <div className="text-white/40 text-sm uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
                <p className="text-xl text-white/70 italic leading-relaxed font-light">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-40 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Animated background bars like in the image */}
        <div className="absolute inset-0 flex justify-center gap-4 py-20 pointer-events-none opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-12 h-full bg-gradient-to-t from-primary via-transparent to-transparent rounded-full transform translate-y-1/2" />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Let's Build the</h2>
          <h2 className="text-5xl md:text-8xl font-black mb-12 italic tracking-tighter">Future, Together</h2>
          <p className="text-white/40 text-xl mb-12 max-w-2xl mx-auto">
            Collaborate with our throughput of design, innovation, and scalable solutions that exceed expect goals and driving real ROI results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-full px-12 py-5" onClick={scrollToForm}>Book a Demo</Button>
            <Button variant="outline" size="lg" className="rounded-full px-12 py-5">Let's Talk</Button>
          </div>
        </div>
      </section>

      {/* LEAD FORM SECTION */}
      <div id="lead-form" className="py-24 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass p-8 md:p-12 rounded-[40px] border-white/5">
            <LeadForm serviceName="Redesign Homepage" challenges={homeChallenges} />
          </div>
        </div>
      </div>
    </div>
  );
}
