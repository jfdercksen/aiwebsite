"use client";

import { MessageSquare, Clock, UserX } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import PainPoints from "@/components/services/PainPoints";
import SolutionGrid from "@/components/services/SolutionGrid";
import ResultsBar from "@/components/services/ResultsBar";
import ProcessSteps from "@/components/services/ProcessSteps";
import LeadForm from "@/components/services/LeadForm";
import FinalCTA from "@/components/services/FinalCTA";

const painPoints = [
    { icon: UserX, text: "Missing valuable leads after hours when your team is offline." },
    { icon: MessageSquare, text: "Support staff overwhelmed by repetitive, low-priority inquiries." },
    { icon: Clock, text: "Slow response times leading to lost sales and frustrated customers." }
];

const solutions = [
    { title: "Website Chatbots", description: "Intelligent agents that engage visitors instantly and provide accurate company information." },
    { title: "WhatsApp Automation", description: "Meet your customers on their favorite platform with automated help and sales flows." },
    { title: "Sales Handling", description: "Handle production, pricing, and feature inquiries automatically without human intervention." },
    { title: "CRM Handoff", description: "Seamless lead qualification and transition to your human sales team when a deal is hot." }
];

const challenges = [
    "High volume of support tickets",
    "Losing leads after hours",
    "High operational costs for manual chat",
    "Inconsistent customer experience"
];

export default function ConversationalAIPage() {
    return (
        <main className="min-h-screen">
            <ServiceHero
                title="Your 24/7 Sales & Support Team That Never Sleeps"
                subtitle="Automate your customer interactions with intelligent bots that qualify leads, answer FAQs, and drive sales while you sleep."
                ctaText="See How Chatbots Can Work For You"
            />
            <PainPoints points={painPoints} />
            <SolutionGrid
                title="Standardizing Conversations"
                items={solutions}
            />
            <ResultsBar />
            <ProcessSteps />
            <LeadForm serviceName="Conversational AI" challenges={challenges} />
            <FinalCTA />
        </main>
    );
}
