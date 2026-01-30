"use client";

import { Database, BarChart, Search } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import PainPoints from "@/components/services/PainPoints";
import SolutionGrid from "@/components/services/SolutionGrid";
import ResultsBar from "@/components/services/ResultsBar";
import ProcessSteps from "@/components/services/ProcessSteps";
import LeadForm from "@/components/services/LeadForm";
import FinalCTA from "@/components/services/FinalCTA";

const painPoints = [
    { icon: Database, text: "Data scattered across different tools with no central source of truth." },
    { icon: Search, text: "No clear insights or visibility into what's actually driving business growth." },
    { icon: BarChart, text: "Making decisions based on 'gut feel' rather than verifiable data patterns." }
];

const solutions = [
    { title: "Custom Dashboards", description: "Real-time visual reports that give you a birds-eye view of your most critical KPIs." },
    { title: "Predictive Analytics", description: "Use historical data to forecast trends and anticipate market changes before they happen." },
    { title: "Data Pipelines", description: "Automated systems that collect, clean, and pipe your data from anywhere to everywhere." },
    { title: "Actionable Reporting", description: "Move beyond 'what happened' to 'what should we do next' with AI-powered analysis." }
];

const challenges = [
    "Inaccessible / messy data",
    "No reporting visibility",
    "Inaccurate forecasting",
    "Manual data entry errors"
];

export default function DataIntelligencePage() {
    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Turn Your Business Data Into Growth Decisions"
                subtitle="Unlock the hidden patterns in your data. We build the intelligence layer your leadership needs to move with confidence."
                ctaText="Unlock Your Data's Potential"
            />
            <PainPoints points={painPoints} />
            <SolutionGrid
                title="Intelligent Data Solutions"
                items={solutions}
            />
            <ResultsBar />
            <ProcessSteps />
            <LeadForm serviceName="Data Intelligence" challenges={challenges} />
            <FinalCTA />
        </main>
    );
}
