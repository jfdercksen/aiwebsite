"use client";

import { Target, TrendingUp, Users } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import PainPoints from "@/components/services/PainPoints";
import SolutionGrid from "@/components/services/SolutionGrid";
import ResultsBar from "@/components/services/ResultsBar";
import ProcessSteps from "@/components/services/ProcessSteps";
import LeadForm from "@/components/services/LeadForm";
import FinalCTA from "@/components/services/FinalCTA";

const painPoints = [
    { icon: Users, text: "Wasting sales time and ad budget on cold leads that will never convert." },
    { icon: TrendingUp, text: "Unpredictable revenue cycles due to a lack of pipeline visibility." },
    { icon: Target, text: "No system for scoring leads, leading to missed high-value opportunities." }
];

const solutions = [
    { title: "Intelligent Lead Scoring", description: "AI models that predict which prospects are most likely to buy based on behavioral data." },
    { title: "Sales Forecasting", description: "Accurate predictions of future revenue to help you plan hiring and investment confidently." },
    { icon: TrendingUp, title: "Lead Gen Systems", description: "Full-funnel systems that combine paid ads (Meta, Google, TikTok) with AI nurturing." },
    { title: "Paid Ads Optimization", description: "AI-driven ad management that constantly adjusts for the lowest cost per acquisition." }
];

const challenges = [
    "Low lead quality",
    "High cost per lead",
    "Sales team inefficiency",
    "Inaccurate sales targets"
];

export default function PredictiveSalesPage() {
    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Know Which Leads Will Buy Before They Do"
                subtitle="Stop chasing everyone and start closing the right ones. We use predictive AI to supercharge your sales pipeline."
                ctaText="Supercharge Your Sales Pipeline"
            />
            <PainPoints points={painPoints} />
            <SolutionGrid
                title="Data-Driven Sales Engine"
                items={solutions}
            />
            <ResultsBar />
            <ProcessSteps />
            <LeadForm serviceName="Predictive Sales AI" challenges={challenges} />
            <FinalCTA />
        </main>
    );
}
