"use client";

import React, { useState } from "react";

export default function LeadForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        companyName: "",
        businessSize: "",
        interestArea: "",
        aiUsage: "",
        goal: "",
        contactPreference: "",
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://n8n.aiautomata.co.za/webhook/aiwebform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="form-success">
                <h3>Thank You!</h3>
                <p>Your Request has been received. We'll be in touch soon.</p>
                <button onClick={() => setStatus("idle")} className="btn-primary">
                    <span>Send another request</span>
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="lead-form">
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="firstName">Name</label>
                    <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="John" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Surname</label>
                    <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Doe" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="087 808 3454" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
                <div className="form-group full-width">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" id="companyName" name="companyName" required value={formData.companyName} onChange={handleChange} placeholder="AI Automations Ltd" />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="businessSize">What best describes your business?</label>
                    <select id="businessSize" name="businessSize" required value={formData.businessSize} onChange={handleChange}>
                        <option value="" disabled>Select business size</option>
                        <option value="Small business (1–10 employees)">Small business (1–10 employees)</option>
                        <option value="Growing business (11–50 employees)">Growing business (11–50 employees)</option>
                        <option value="Medium business (51–200 employees)">Medium business (51–200 employees)</option>
                        <option value="Enterprise (200+)">Enterprise (200+)</option>
                    </select>
                </div>

                <div className="form-group full-width">
                    <label htmlFor="interestArea">Which area are you most interested in improving with AI?</label>
                    <select id="interestArea" name="interestArea" required value={formData.interestArea} onChange={handleChange}>
                        <option value="" disabled>Select area of interest</option>
                        <option value="Marketing & content automation">Marketing & content automation</option>
                        <option value="Sales & lead generation">Sales & lead generation</option>
                        <option value="Customer support (chatbots, WhatsApp, email)">Customer support (chatbots, WhatsApp, email)</option>
                        <option value="Internal operations & workflows">Internal operations & workflows</option>
                        <option value="Data & reporting">Data & reporting</option>
                        <option value="Not sure yet">Not sure yet</option>
                    </select>
                </div>

                <div className="form-group full-width">
                    <label htmlFor="aiUsage">How would you describe your current AI usage?</label>
                    <select id="aiUsage" name="aiUsage" required value={formData.aiUsage} onChange={handleChange}>
                        <option value="" disabled>Select current usage</option>
                        <option value="We haven’t used AI yet">We haven’t used AI yet</option>
                        <option value="We use basic tools (ChatGPT, automation, etc.)">We use basic tools (ChatGPT, automation, etc.)</option>
                        <option value="We use AI in some workflows">We use AI in some workflows</option>
                        <option value="We are actively scaling AI across the business">We are actively scaling AI across the business</option>
                    </select>
                </div>

                <div className="form-group full-width">
                    <label htmlFor="goal">What best describes your goal with AI in the next 3–6 months?</label>
                    <select id="goal" name="goal" required value={formData.goal} onChange={handleChange}>
                        <option value="" disabled>Select your goal</option>
                        <option value="Understanding how AI can help my business">Understanding how AI can help my business</option>
                        <option value="Identifying automation opportunities">Identifying automation opportunities</option>
                        <option value="Building custom AI workflows">Building custom AI workflows</option>
                        <option value="AI strategy & implementation">AI strategy & implementation</option>
                        <option value="Just exploring">Just exploring</option>
                    </select>
                </div>

                <div className="form-group full-width">
                    <label htmlFor="contactPreference">How would you like us to contact you?</label>
                    <select id="contactPreference" name="contactPreference" required value={formData.contactPreference} onChange={handleChange}>
                        <option value="" disabled>Select contact preference</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="E-Mail">E-Mail</option>
                        <option value="Call">Call</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="btn-large" disabled={status === "submitting"} style={{ width: '100%', marginTop: '32px' }}>
                {status === "submitting" ? "Sending..." : "Submit Request"}
            </button>

            {status === "error" && (
                <p className="form-error">Something went wrong. Please try again or contact us directly.</p>
            )}
        </form>
    );
}
