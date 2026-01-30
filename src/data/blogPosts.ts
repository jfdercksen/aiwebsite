export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    content: string; // Markdown or HTML content
    seoDescription: string;
    image?: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "state-of-ai-south-africa-2024",
        title: "The State of AI in South Africa: 2024 Report",
        excerpt: "How local enterprises are adopting generative AI to solve uniquely African business challenges.",
        date: "Jan 15, 2024",
        author: "Jane Smith",
        category: "Insights",
        seoDescription: "An in-depth look at AI adoption trends in South African enterprises for 2024.",
        content: `
            <p>Artificial Intelligence is no longer a futuristic concept in South Africa; it is a current business imperative...</p>
            <h3>The Transition from Hype to Value</h3>
            <p>In 2024, we are seeing a significant shift from experimental 'proof of concepts' to production-grade AI solutions...</p>
        `
    },
    {
        slug: "ethical-ai-popia-compliance",
        title: "Ethical AI: Protecting Data in the Digital Age",
        excerpt: "Exploring the intersection of AI innovation and South Africa's POPIA compliance requirements.",
        date: "Jan 10, 2024",
        author: "Mark Davids",
        category: "Guide",
        seoDescription: "How to ensure your AI implementations remain compliant with South Africa's POPIA regulations.",
        content: `
            <p>Data privacy is the foundation of trust in AI. For South African businesses, this means navigating POPIA...</p>
            <h3>POPIA & AI: What You Need to Know</h3>
            <p>Transparency and data minimization are key pillars of an ethical AI strategy...</p>
        `
    },
    {
        slug: "5-workflow-bottlenecks-ai-fix",
        title: "5 Workflow Bottlenecks AI Can Fix Today",
        excerpt: "Simple automation steps that can save your team 10+ hours per week immediately.",
        date: "Jan 05, 2024",
        author: "Sarah Jones",
        category: "Trends",
        seoDescription: "Identify and eliminate common business bottlenecks using simple, effective AI automation tools.",
        content: `
            <p>Efficiency is the engine of growth. Here are five areas where AI is delivering immediate ROI...</p>
            <ul>
                <li>Automated Data Entry</li>
                <li>Intelligent Customer Support</li>
                <li>Predictive Inventory Management</li>
            </ul>
        `
    }
];
