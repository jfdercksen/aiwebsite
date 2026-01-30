"use client";

import { Globe, Settings, Share2 } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import PainPoints from "@/components/services/PainPoints";
import SolutionGrid from "@/components/services/SolutionGrid";
import ResultsBar from "@/components/services/ResultsBar";
import ProcessSteps from "@/components/services/ProcessSteps";
import LeadForm from "@/components/services/LeadForm";
import FinalCTA from "@/components/services/FinalCTA";

const painPoints = [
    { icon: Settings, text: "Outdated legacy systems that can't communicate with modern AI tools." },
    { icon: Share2, text: "Disconnected tech stack creating silos and preventing business scaling." },
    { icon: Globe, text: "A digital presence that doesn't reflect your current industry authority." }
];

const solutions = [
    { title: "AI-First Web Development", description: "Modern, high-performance websites built to convert and scale with your business." },
    { title: "Sales Funnel Creation", description: "Optimized digital journeys that turn strangers into high-value consulting leads." },
    { title: "Tech Stack Modernization", description: "Full audit and upgrade of your business tools for an AI-native future." },
    { title: "API Integrations", description: "Ensuring all your tools talk to each other seamlessly for a unified workflow." }
];

const challenges = [
    "Outdated website / lack of leads",
    "Disconnected systems",
    "Difficulty scaling operations",
    "Technical debt"
];

export default function DigitalTransformationPage() {
    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Future-Proof Your Business With AI-First Infrastructure"
                subtitle="Build the foundation for the next decade of growth. We modernize your tech stack to leverage the full power of AI."
                ctaText="Start Your Transformation"
            />
            <PainPoints points={painPoints} />
            <SolutionGrid
                title="Modernizing Your Core"
                items={solutions}
            />
            <ResultsBar />
            <ProcessSteps />
            <LeadForm serviceName="Digital Transformation" challenges={challenges} />
            <FinalCTA />
        </main>
    );
}
