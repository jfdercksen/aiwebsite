"use client";

import { Repeat, Zap, MousePointer2 } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import PainPoints from "@/components/services/PainPoints";
import SolutionGrid from "@/components/services/SolutionGrid";
import ResultsBar from "@/components/services/ResultsBar";
import ProcessSteps from "@/components/services/ProcessSteps";
import LeadForm from "@/components/services/LeadForm";
import FinalCTA from "@/components/services/FinalCTA";

const painPoints = [
    { icon: Repeat, text: "Teams bogged down by manual, repetitive work that adds zero strategic value." },
    { icon: MousePointer2, text: "Frequent human errors in document processing and data entry causing delays." },
    { icon: Zap, text: "High-level staff spending half their day on low-value administrative tasks." }
];

const solutions = [
    { title: "AI Agent Workflows", description: "Custom AI agents that handle multi-step tasks like lead routing and customer follow-ups." },
    { title: "Document Processing", description: "Automated extraction and filing of data from invoices, forms, and contracts with high accuracy." },
    { title: "One-Click Content", description: "Generate a full month of highly relevant social and blog content in a single operation." },
    { title: "Full CRM Integrations", description: "Keep your data moving automatically between sales, marketing, and support tools." }
];

const challenges = [
    "Too much manual admin",
    "Human error / Quality control",
    "Slow workflow speed",
    "Content production bottlenecks"
];

export default function ProcessAutomationPage() {
    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Eliminate the Tasks Your Team Shouldn't Be Doing"
                subtitle="Free your talent for creative work. We build autonomous workflows that handle the boring stuff with perfect precision."
                ctaText="Automate Your Operations"
            />
            <PainPoints points={painPoints} />
            <SolutionGrid
                title="Efficiency Through Automation"
                items={solutions}
            />
            <ResultsBar />
            <ProcessSteps />
            <LeadForm serviceName="Process Automation" challenges={challenges} />
            <FinalCTA />
        </main>
    );
}
