"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Shield, BarChart3, TrendingUp, AlertCircle, ChevronDown, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import ResultsBar from "@/components/services/ResultsBar";
import LeadForm from "@/components/services/LeadForm";

const clientLogos = [
  { name: "MG Bryanston", image: "/images/mg-bryanston.png", scale: "scale-150" },
  { name: "Modern Management", image: "/images/mm-logo.png" },
  { name: "Ebiexperts", image: "/images/ebiexperts.png" },
  { name: "Octogas", image: "/images/octogas.png" },
  { name: "Fire Risk", image: "/images/fire.png", invert: true },
  { name: "OnicaVox", image: "/images/onicavox.png" },
  { name: "JAC Polokwane", image: "/images/jac.png" },
  { name: "Branding Zone", image: "/images/branding-zone.png", invert: true },
  { name: "Jetour Northcliff", image: "/images/jetour.png" }
];

const homeChallenges = [
  "Strategic AI Roadmap",
  "Operational Automation",
  "Data Intelligence & Insights",
  "Customer Interaction (Chatbots)",
  "Sales Pipeline Growth",
  "Full Digital Transformation"
];

export default function Home() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-20 overflow-hidden bg-white">
        {/* Abstract Neural Background */}
        <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 opacity-50 pointer-events-none">
          <Image
            src="/images/hero-office.png"
            alt="AI Digital Strategy"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/5 text-xs font-bold tracking-widest uppercase text-primary mb-6">
              AI Dynamic Advisory • South Africa
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] text-accent">
              Future-Proof Your Business with <span className="text-gradient">AI Strategy</span> That Delivers ROI.
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-accent/60 mb-10 leading-relaxed">
              We move beyond generic automation. Our bespoke AI consulting transforms operational silos into
              intelligent systems, driving measurable growth for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto shadow-xl" onClick={scrollToForm}>
                Book Your AI Readiness Assessment <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Execute Your Vision
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. AUTHORITY BAR */}
      <section className="py-12 border-y border-accent/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-accent/30 mb-8">
            Trusted By Market Leaders
          </p>
          <div className="relative mt-8">
            <div className="flex gap-x-20 grayscale opacity-40">
              <motion.div
                className="flex gap-x-20 items-center justify-start flex-nowrap"
                animate={{
                  x: [0, -2000],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...clientLogos, ...clientLogos, ...clientLogos].map((client, i) => (
                  <div key={i} className="flex items-center justify-center flex-shrink-0">
                    {client.image ? (
                      <div className={`relative h-12 w-48 transition-transform ${client.scale || ''}`}>
                        <Image
                          src={client.image}
                          alt={client.name}
                          fill
                          className={`object-contain ${client.invert ? 'brightness-0' : ''}`}
                        />
                      </div>
                    ) : (
                      <span className="text-xl font-black text-accent tracking-tighter uppercase whitespace-nowrap">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE COST OF INACTION (PAIN) */}
      <section className="py-24 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/images/operations-abstract.png"
                alt="Inefficient Operations"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-accent mb-8 leading-tight">
                The Cost of Staying <br /> Behind the Curve.
              </h2>
              <div className="space-y-8">
                {[
                  { icon: AlertCircle, title: "Operational Stagnation", desc: "Manual processes and legacy systems are burning your team's creative potential." },
                  { icon: Shield, title: "Security & Compliance Lag", desc: "Implementing AI without a roadmap risks your data and industry standing." },
                  { icon: TrendingUp, title: "Competitive Displacement", desc: "Market leaders in South Africa are already automating sales and support funnels." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6 p-6 rounded-3xl glass border-accent/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-accent mb-2">{item.title}</h4>
                      <p className="text-accent/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE GATEWAYS (PRODUCT CARDS) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-accent mb-6">Our Intelligent Solutions.</h2>
          <p className="text-accent/60 max-w-2xl mx-auto text-lg">
            High-performance AI implementations tailored for maximum business impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "AI Strategy Consulting", slug: "ai-strategy-consulting", icon: Zap, color: "text-primary" },
            { title: "Conversational AI", slug: "conversational-ai", icon: Bot, color: "text-secondary" },
            { title: "Data Intelligence", slug: "data-intelligence", icon: BarChart3, color: "text-accent" },
            { title: "Process Automation", slug: "process-automation", icon: Zap, color: "text-primary" },
            { title: "Predictive Sales AI", slug: "predictive-sales-ai", icon: TrendingUp, color: "text-secondary" },
            { title: "Digital Transformation", slug: "digital-transformation", icon: Shield, color: "text-accent" }
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[40px] glass border-accent/10 hover:border-primary/30 transition-all flex flex-col shadow-sm group"
            >
              <div className="mb-8 p-4 rounded-2xl bg-accent/5 w-fit group-hover:bg-primary/10 transition-colors">
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-accent">{service.title}</h3>
              <p className="text-accent/60 mb-8 leading-relaxed">
                Unlock measurable gains with our localized expert implementation and support.
              </p>
              <Link href={`/services/${service.slug}`} className="mt-auto group/link flex items-center gap-2 font-bold text-primary">
                Explore Funnel <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. IMPACT STATS */}
      <ResultsBar />

      {/* 6. LEAD CAPTURE SECTION */}
      <div className="bg-accent text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
              Ready to Lead <br /> The AI Era?
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-white/80 font-bold">Free AI Readiness Assessment</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-white/80 font-bold">Personalized Strategic Roadmap</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-white/80 font-bold">Localized Implementation Support</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[40px] p-2 overflow-hidden shadow-2xl">
            <LeadForm serviceName="Homepage Funnel" challenges={homeChallenges} />
          </div>
        </div>
      </div>
    </div>
  );
}
