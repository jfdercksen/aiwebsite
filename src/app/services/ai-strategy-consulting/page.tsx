"use client";

import { Target, TrendingUp, AlertCircle } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import PainPoints from "@/components/services/PainPoints";
import SolutionGrid from "@/components/services/SolutionGrid";
import ResultsBar from "@/components/services/ResultsBar";
import ProcessSteps from "@/components/services/ProcessSteps";
import LeadForm from "@/components/services/LeadForm";
import FinalCTA from "@/components/services/FinalCTA";

const painPoints = [
    { icon: AlertCircle, text: "Not sure where to start with AI or how it applies to your business." },
    { icon: AlertCircle, text: "Fear of wasting budget on tools that don't deliver real value." },
    { icon: AlertCircle, text: "Seeing competitors move faster with automation and losing market share." }
];

const solutions = [
    { title: "AI Readiness Assessment", description: "A comprehensive audit of your current tech stack, data, and workflows to identify AI opportunities." },
    { title: "Custom AI Roadmap", description: "A prioritized strategic plan tailored to your business goals and industry local market." },
    { title: "ROI Projections", description: "Data-driven estimates of the financial impact and efficiency gains from AI implementation." },
    { title: "Governance Framework", description: "Ensuring your AI strategy is ethical, secure, and compliant with relevant regulations." }
];

const challenges = [
    "No clear AI strategy",
    "Budget concerns / ROI uncertainty",
    "Competitor pressure",
    "Internal resistance to change",
    "Technical implementation hurdles"
];

export default function AIStrategyPage() {
    return (
        <main className="min-h-screen">
            <ServiceHero
                title="See Exactly How AI Can Transform Your Business"
                subtitle="Stop guessing and start growing. We provide the strategic roadmap you need to lead your industry with intelligent technology."
                ctaText="Book a Free AI Assessment"
            />
            <PainPoints points={painPoints} />
            <SolutionGrid
                title="Our Strategic Approach"
                items={solutions}
            />
            <ResultsBar />
            <ProcessSteps />
            <LeadForm serviceName="AI Strategy Consulting" challenges={challenges} />
            <FinalCTA />
        </main>
    );
}
