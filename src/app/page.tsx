"use client";

import React, { useEffect, useRef } from "react";
import "./homepage.css";

export default function HomePage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hexGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Custom Cursor Logic
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animCursor() {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = mx + "px";
        cursorRef.current.style.top = my + "px";
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      requestAnimationFrame(animCursor);
    }
    const animId = requestAnimationFrame(animCursor);

    const interactiveEls = document.querySelectorAll("a, button, .service-card, .industry-row, .tech-pill");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (ringRef.current) {
          ringRef.current.style.width = "60px";
          ringRef.current.style.height = "60px";
          ringRef.current.style.borderColor = "rgba(0,240,255,0.8)";
        }
      });
      el.addEventListener("mouseleave", () => {
        if (ringRef.current) {
          ringRef.current.style.width = "36px";
          ringRef.current.style.height = "36px";
          ringRef.current.style.borderColor = "rgba(0,240,255,0.5)";
        }
      });
    });

    // 2. Hex Grid Logic
    if (hexGridRef.current) {
      const techWords = ["AI", "n8n", "GPT", "API", "CRM", "SEO", "WP", "CSS", "JS", "SQL", "ML", "Bot", "ETL", "VPS", "SSL", "CI", "CD", "UI", "UX", "SaaS", "B2B", "ROI", "KPI", "CTA", "CTR", "PPC", "DR", "CX", "NLP", "LLM", "RAG", "IoT", "RPA", "ERP", "SLA", "MVP", "POC", "UAT", "QA"];
      const activeIdxs = [0, 3, 5, 8, 12, 14, 17, 20, 22, 25, 28, 31];
      hexGridRef.current.innerHTML = ""; // Clear existing
      for (let i = 0; i < 36; i++) {
        const cell = document.createElement("div");
        cell.className = "hex-cell" + (activeIdxs.includes(i) ? " active" : "");
        cell.textContent = techWords[i % techWords.length];
        hexGridRef.current.appendChild(cell);
      }
    }

    const hexInterval = setInterval(() => {
      if (hexGridRef.current) {
        const cells = hexGridRef.current.querySelectorAll(".hex-cell");
        if (cells.length > 0) {
          const r = Math.floor(Math.random() * cells.length);
          cells[r].classList.toggle("active");
        }
      }
    }, 800);

    // 3. Scroll Reveal Logic
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    });
    reveals.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
      clearInterval(hexInterval);
      observer.disconnect();
    };
  }, []);

  // Calendar generation logic
  const renderCalendarDays = () => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    const hasDot = [3, 5, 7, 10, 12, 14, 17, 19, 21, 24, 26];
    return days.map((d) => {
      let style: React.CSSProperties = {
        fontFamily: "var(--font-mono)",
        fontSize: "0.52rem",
        textAlign: "center" as const,
        padding: "4px 2px",
        borderRadius: "2px",
        position: "relative" as const,
        color: "var(--muted)",
      };
      if (d === 25) {
        style.background = "var(--electric-dim)";
        style.color = "var(--electric)";
      }
      if (hasDot.includes(d)) {
        style.borderBottom = "2px solid var(--electric)";
        style.color = "var(--white)";
      }
      return (
        <div key={d} style={style}>
          {d}
        </div>
      );
    });
  };

  return (
    <div className="homepage-body">
      <div className="noise-overlay"></div>
      <div className="cursor" id="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" id="cursorRing" ref={ringRef}></div>

      {/* NAV */}
      <nav className="custom-nav">
        <div className="nav-logo">
          AI DYNAMIC<span>.</span>ADVISORY
        </div>
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#vibe-agent">Vibe Agent</a>
          </li>
          <li>
            <a href="#why">Why Us</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#industries">Industries</a>
          </li>
          <li>
            <a href="#tech">Stack</a>
          </li>
        </ul>
        <a href="#contact" className="nav-cta">
          Get Started
        </a>
      </nav>

      {/* HERO */}
      <section className="hero custom-section" id="home">
        <div className="hero-grid"></div>
        <div className="hero-orb"></div>
        <div className="hero-orb-2"></div>
        <div className="scan-line"></div>

        <div className="hero-eyebrow">South Africa's AI Automation Partner — Powered by Vibe Agent</div>
        <h1 className="hero-headline">
          <span className="accent">Intelligent</span>
          <br />
          <span className="line2">Automation.</span>
          <br />
          Real Results.
        </h1>
        <p className="hero-sub">
          We design, build, and deploy AI-powered systems that transform how South African businesses operate. From lead generation to full workflow automation — all unified in our proprietary{" "}
          <strong style={{ color: "var(--electric)", fontWeight: 500 }}>Vibe Agent</strong> platform.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            <span>Start Your AI Journey</span>
          </a>
          <a href="#services" className="btn-ghost">
            Explore Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">
              50<span>+</span>
            </div>
            <div className="stat-label">Automations Deployed</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              10<span>x</span>
            </div>
            <div className="stat-label">Avg Efficiency Gain</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              24<span>/7</span>
            </div>
            <div className="stat-label">AI Working For You</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          <span className="marquee-item">
            <span className="dot"></span>AI Automation
          </span>
          <span className="marquee-item">
            <span className="dot"></span>WhatsApp AI Bot
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Vibe Agent Platform
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Content Calendar
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Lead Generation
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Digital Marketing
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Web Development
          </span>
          <span className="marquee-item">
            <span className="dot"></span>SEO & Keywords
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Ad Creatives
          </span>
          <span className="marquee-item">
            <span className="dot"></span>n8n Workflows
          </span>
          <span className="marquee-item">
            <span className="dot"></span>AI Automation
          </span>
          <span className="marquee-item">
            <span className="dot"></span>WhatsApp AI Bot
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Vibe Agent Platform
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Content Calendar
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Lead Generation
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Digital Marketing
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Web Development
          </span>
          <span className="marquee-item">
            <span className="dot"></span>SEO & Keywords
          </span>
          <span className="marquee-item">
            <span className="dot"></span>Ad Creatives
          </span>
          <span className="marquee-item">
            <span className="dot"></span>n8n Workflows
          </span>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="custom-section">
        <div className="section-header reveal">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Our Core <span className="hollow">Services</span>
          </h2>
        </div>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-num">01 / 04</div>
            <span className="service-icon">⚡</span>
            <div className="service-name">AI Automation & Workflows</div>
            <p className="service-desc">We build end-to-end intelligent automation systems using n8n, AI agents, and multi-model pipelines. From lead follow-ups to complex data orchestration — your business runs smarter, faster, and without manual bottlenecks.</p>
            <div className="service-tags">
              <span className="tag">n8n</span>
              <span className="tag">AI Agents</span>
              <span className="tag">Multi-Model</span>
              <span className="tag">CRM Sync</span>
              <span className="tag">API Integration</span>
            </div>
          </div>
          <div className="service-card reveal reveal-delay-1">
            <div className="service-num">02 / 04</div>
            <span className="service-icon">🌐</span>
            <div className="service-name">Website Development</div>
            <p className="service-desc">Performance-first websites built on WordPress and modern frameworks — fully optimised, mobile-ready, and designed to convert. We handle everything from design to deployment, including CRM and automation integration.</p>
            <div className="service-tags">
              <span className="tag">WordPress</span>
              <span className="tag">WooCommerce</span>
              <span className="tag">Docker</span>
              <span className="tag">SEO-Ready</span>
              <span className="tag">Speed Optimised</span>
            </div>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <div className="service-num">03 / 04</div>
            <span className="service-icon">📈</span>
            <div className="service-name">Digital Marketing</div>
            <p className="service-desc">AI-driven marketing campaigns that attract, qualify, and convert leads. We combine Facebook ads, content automation, social media management, and smart follow-up sequences to fill your pipeline 24/7.</p>
            <div className="service-tags">
              <span className="tag">Facebook Ads</span>
              <span className="tag">Lead Gen</span>
              <span className="tag">Content AI</span>
              <span className="tag">Social Media</span>
              <span className="tag">Email Flows</span>
            </div>
          </div>
          <div className="service-card reveal reveal-delay-3">
            <div className="service-num">04 / 04</div>
            <span className="service-icon">🧠</span>
            <div className="service-name">AI Consulting & Strategy</div>
            <p className="service-desc">Not sure where AI fits in your business? We map your operations, identify high-impact automation opportunities, and build a clear AI roadmap — then execute it. Strategy and implementation under one roof.</p>
            <div className="service-tags">
              <span className="tag">AI Roadmap</span>
              <span className="tag">Process Audit</span>
              <span className="tag">ROI Analysis</span>
              <span className="tag">Staff Training</span>
              <span className="tag">Custom GPTs</span>
            </div>
          </div>
        </div>
      </section>

      {/* VIBE AGENT */}
      <section id="vibe-agent" className="custom-section">
        <div className="section-header reveal">
          <div className="section-label">Our Flagship Platform — aimate.co.za</div>
          <h2 className="section-title">
            Meet <span className="hollow">Vibe</span> Agent
          </h2>
        </div>
        <div className="va-layout">
          <div className="va-left reveal">
            <div className="va-badge">Proprietary AI Marketing Platform — Built In-House</div>
            <h3 className="va-title">
              AI Marketing.
              <br />
              <span className="va-accent">WhatsApp Bots.</span>
              <br />
              <span className="va-hollow">All In One.</span>
            </h3>
            <p className="va-desc">
              Vibe Agent is our proprietary AI marketing platform hosted at <strong style={{ color: "var(--electric)", fontWeight: 500 }}>aimate.co.za</strong>. It gives every client a fully branded dashboard to manage their AI-powered marketing — from WhatsApp bot conversations to social posts, blog content, email sequences, SEO, lead magnets, ad creatives, and a full content calendar. Everything automated. Everything in one place.
            </p>
            <div className="va-features">
              <div className="va-feature">
                <div className="va-feature-icon">💬</div>
                <div>
                  <div className="va-feature-title">WhatsApp AI Bot</div>
                  <p className="va-feature-text">A built-in WhatsApp integration lets your AI agent qualify leads, answer customer queries, and follow up automatically — 24/7, in real conversation threads, directly in the platform.</p>
                </div>
              </div>
              <div className="va-feature">
                <div className="va-feature-icon">📅</div>
                <div>
                  <div className="va-feature-title">AI Content Calendar</div>
                  <p className="va-feature-text">Plan, generate, approve, and publish social posts, blog articles, and email sequences from a single drag-and-drop calendar. The AI writes the content — you just approve and schedule.</p>
                </div>
              </div>
              <div className="va-feature">
                <div className="va-feature-icon">🎯</div>
                <div>
                  <div className="va-feature-title">Full Marketing Suite</div>
                  <p className="va-feature-text">Social Posts, Blog Posts, Email Sequences, SEO & Keywords, Lead Magnets, Ad Creatives, Landing Pages, Media Library, and Strategy — all AI-generated, all inside one client dashboard.</p>
                </div>
              </div>
              <div className="va-feature">
                <div className="va-feature-icon">🔒</div>
                <div>
                  <div className="va-feature-title">Per-Client Branded Portals</div>
                  <p className="va-feature-text">Each business gets their own secure workspace. Switch between clients instantly. Built on Next.js + Supabase for enterprise-grade reliability, deployed on Vercel with real-time sync.</p>
                </div>
              </div>
            </div>
            <div className="va-cta-row">
              <a href="#contact" className="btn-primary">
                <span>Request a Demo</span>
              </a>
              <a href="https://aimate.co.za" target="_blank" className="va-link">
                Visit aimate.co.za →
              </a>
            </div>
          </div>
          <div className="va-right reveal reveal-delay-2">
            <div className="va-mockup">
              <div className="va-topbar">
                <div className="va-dot red"></div>
                <div className="va-dot yellow"></div>
                <div className="va-dot green"></div>
                <span className="va-topbar-title">aimate.co.za — Z-Tech Computer</span>
                <span className="va-topbar-status">Vibe Connected</span>
              </div>
              <div className="va-body">
                <div className="va-sidebar">
                  <div className="va-sidebar-icon active" title="Chat with Vibe">
                    🤖
                  </div>
                  <div className="va-sidebar-icon" title="WhatsApp">
                    💬
                  </div>
                  <div className="va-sidebar-icon" title="Overview">
                    📊
                  </div>
                  <div className="va-sidebar-icon" title="Content Ideas">
                    💡
                  </div>
                  <div className="va-sidebar-icon" title="Social Posts">
                    📱
                  </div>
                  <div className="va-sidebar-icon" title="Blog Posts">
                    📝
                  </div>
                  <div className="va-sidebar-icon" title="Emails">
                    ✉️
                  </div>
                  <div className="va-sidebar-icon" title="Calendar">
                    📅
                  </div>
                  <div className="va-sidebar-icon" title="SEO">
                    🔍
                  </div>
                  <div className="va-sidebar-icon" title="Lead Magnets">
                    🧲
                  </div>
                  <div className="va-sidebar-icon" title="Ad Creatives">
                    🎨
                  </div>
                </div>
                <div className="va-main">
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.05em", marginBottom: "4px", color: "var(--white)" }}>Z-Tech Computer</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--muted)", marginBottom: "12px", letterSpacing: "0.08em" }}>Overview of all marketing activity</div>
                  <div className="va-panel-row">
                    <div className="va-mini-panel highlight">
                      <div className="va-mini-label">Social Posts</div>
                      <div className="va-mini-val electric">92</div>
                    </div>
                    <div className="va-mini-panel">
                      <div className="va-mini-label">Blog Posts</div>
                      <div className="va-mini-val">5</div>
                    </div>
                    <div className="va-mini-panel">
                      <div className="va-mini-label">Email Sequences</div>
                      <div className="va-mini-val gold">2</div>
                    </div>
                  </div>
                  <div className="va-panel-row">
                    <div className="va-mini-panel">
                      <div className="va-mini-label">Keywords</div>
                      <div className="va-mini-val electric">58</div>
                    </div>
                    <div className="va-mini-panel">
                      <div className="va-mini-label">Content Ideas</div>
                      <div className="va-mini-val">15</div>
                    </div>
                    <div className="va-mini-panel">
                      <div className="va-mini-label">Approved</div>
                      <div className="va-mini-val gold">17</div>
                    </div>
                  </div>
                  <div className="va-mini-panel" style={{ flex: 1 }}>
                    <div className="va-mini-label" style={{ marginBottom: "10px" }}>
                      Content Calendar — February 2026
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "3px" }}>{renderCalendarDays()}</div>
                  </div>
                  {/* WhatsApp bot indicator */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", background: "rgba(37,211,102,0.07)", border: "1px solid rgba(37,211,102,0.2)", borderRadius: "2px" }}>
                    <span style={{ color: "#25d366", fontSize: "0.9rem" }}>💬</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "#25d366", letterSpacing: "0.08em" }}>WHATSAPP BOT — ACTIVE</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.52rem", color: "var(--muted)", marginTop: "2px" }}>3 conversations in progress · 12 leads qualified today</div>
                    </div>
                    <div style={{ marginLeft: "auto", width: "7px", height: "7px", background: "#25d366", borderRadius: "50%", animation: "blink 1.5s ease-in-out infinite" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="custom-section">
        <div className="section-header reveal">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">
            Built Different. <span className="hollow">Wired</span> For Results.
          </h2>
        </div>
        <div className="why-layout">
          <div className="why-visual reveal">
            <div className="hex-grid" id="hexGrid" ref={hexGridRef}></div>
          </div>
          <div className="why-points">
            <div className="why-point reveal">
              <span className="why-index">01</span>
              <div>
                <div className="why-point-title">Deep Technical Expertise</div>
                <p className="why-point-text">We don't just consult — we build. Our team has hands-on experience deploying Docker containers, configuring VPS servers, building complex n8n workflows, and integrating AI models into real production environments.</p>
              </div>
            </div>
            <div className="why-point reveal reveal-delay-1">
              <span className="why-index">02</span>
              <div>
                <div className="why-point-title">South Africa — First Mindset</div>
                <p className="why-point-text">We understand the local market. From load-shedding resilient architectures to POPIA-compliant data handling — our solutions are built for the realities of doing business in South Africa.</p>
              </div>
            </div>
            <div className="why-point reveal reveal-delay-2">
              <span className="why-index">03</span>
              <div>
                <div className="why-point-title">Proprietary Platform at aimate.co.za</div>
                <p className="why-point-text">We built Vibe Agent — a full AI marketing platform with a built-in WhatsApp bot, content calendar, SEO tools, ad creatives, lead magnets, and per-client dashboards. No competitor offers this. It's live at aimate.co.za and already serving clients today.</p>
              </div>
            </div>
            <div className="why-point reveal reveal-delay-3">
              <span className="why-index">04</span>
              <div>
                <div className="why-point-title">Always-On AI Infrastructure</div>
                <p className="why-point-text">Our solutions run 24/7 on robust cloud infrastructure. Your chatbots answer leads at 2am, your workflows process data on weekends, and your CRM updates in real-time — without you lifting a finger.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="custom-section">
        <div className="section-header reveal">
          <div className="section-label">How We Work</div>
          <h2 className="section-title">
            From Discovery <span className="hollow">to Deployed</span>
          </h2>
        </div>
        <div className="process-steps">
          <div className="process-step reveal">
            <span className="process-step-num">01</span>
            <div className="process-step-title">DISCOVER</div>
            <p className="process-step-text">We audit your current operations, map your pain points, and identify the highest-impact AI opportunities specific to your business and industry.</p>
          </div>
          <div className="process-step reveal reveal-delay-1">
            <span className="process-step-num">02</span>
            <div className="process-step-title">DESIGN</div>
            <p className="process-step-text">We architect the solution — workflows, automations, tech stack, and integrations — and present a clear roadmap with timelines and expected ROI.</p>
          </div>
          <div className="process-step reveal reveal-delay-2">
            <span className="process-step-num">03</span>
            <div className="process-step-title">BUILD</div>
            <p className="process-step-text">Our team builds and tests everything in a staging environment, ensuring reliability, security, and performance before anything goes live.</p>
          </div>
          <div className="process-step reveal reveal-delay-3">
            <span className="process-step-num">04</span>
            <div className="process-step-title">DEPLOY & GROW</div>
            <p className="process-step-text">We deploy, monitor, and continuously optimise your AI systems. Monthly reporting keeps you informed. Ongoing support keeps everything running sharp.</p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="custom-section">
        <div className="section-header reveal">
          <div className="section-label">Industries We Serve</div>
          <h2 className="section-title">
            Across Every <span className="hollow">Sector</span>
          </h2>
        </div>
        <div className="industries-list">
          <div className="industry-row reveal">
            <div className="industry-left">
              <span className="industry-icon">🚗</span>
              <span className="industry-name">Automotive Dealerships</span>
            </div>
            <span className="industry-badge">Active Client</span>
            <span className="industry-arrow">→</span>
          </div>
          <div className="industry-row reveal reveal-delay-1">
            <div className="industry-left">
              <span className="industry-icon">🏢</span>
              <span className="industry-name">Professional Services</span>
            </div>
            <span className="industry-badge">Active Client</span>
            <span className="industry-arrow">→</span>
          </div>
          <div className="industry-row reveal reveal-delay-2">
            <div className="industry-left">
              <span className="industry-icon">🔥</span>
              <span className="industry-name">Gas & Technical Installation</span>
            </div>
            <span className="industry-badge">Active Client</span>
            <span className="industry-arrow">→</span>
          </div>
          <div className="industry-row reveal reveal-delay-3">
            <div className="industry-left">
              <span className="industry-icon">🌱</span>
              <span className="industry-name">Coaching & Transformation</span>
            </div>
            <span className="industry-badge">Active Client</span>
            <span className="industry-arrow">→</span>
          </div>
          <div className="industry-row reveal">
            <div className="industry-left">
              <span className="industry-icon">🛒</span>
              <span className="industry-name">E-Commerce & Retail</span>
            </div>
            <span className="industry-badge">Available</span>
            <span className="industry-arrow">→</span>
          </div>
          <div className="industry-row reveal reveal-delay-1">
            <div className="industry-left">
              <span className="industry-icon">🏗️</span>
              <span className="industry-name">Construction & Property</span>
            </div>
            <span className="industry-badge">Available</span>
            <span className="industry-arrow">→</span>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="custom-section">
        <div className="section-header reveal">
          <div className="section-label">Our Technology Stack</div>
          <h2 className="section-title">
            Enterprise Tools. <span className="hollow">Practical</span> Delivery.
          </h2>
        </div>
        <div className="tech-content">
          <div style={{ marginBottom: "20px" }}>
            <div className="section-label" style={{ marginBottom: "12px" }}>
              Vibe Agent Core Stack
            </div>
            <div className="tech-grid reveal" style={{ marginBottom: "24px" }}>
              <span className="tech-pill hot">Next.js 14</span>
              <span className="tech-pill hot">TypeScript</span>
              <span className="tech-pill hot">Supabase</span>
              <span className="tech-pill hot">Vercel</span>
              <span className="tech-pill hot">Skills Engine</span>
              <span className="tech-pill hot">Multi-Agent Orchestration</span>
            </div>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: "12px" }}>
              Full Integration Stack
            </div>
            <div className="tech-grid reveal">
              <span className="tech-pill hot">n8n</span>
              <span className="tech-pill hot">OpenAI GPT</span>
              <span className="tech-pill hot">Claude AI</span>
              <span className="tech-pill hot">WordPress</span>
              <span className="tech-pill">Docker</span>
              <span className="tech-pill">Baserow</span>
              <span className="tech-pill">Vtiger CRM</span>
              <span className="tech-pill">Telegram API</span>
              <span className="tech-pill">Facebook Ads API</span>
              <span className="tech-pill">WooCommerce</span>
              <span className="tech-pill">VPS / Cloud</span>
              <span className="tech-pill">Nginx</span>
              <span className="tech-pill">Let's Encrypt SSL</span>
              <span className="tech-pill">REST APIs</span>
              <span className="tech-pill">Webhooks</span>
              <span className="tech-pill">Make (Integromat)</span>
              <span className="tech-pill">Custom GPTs</span>
              <span className="tech-pill">RAG Pipelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact">
        <div className="cta-label reveal">Ready to Automate Your Business?</div>
        <h2 className="cta-headline reveal">
          Let's Build
          <br />
          <span className="outline">Something</span>
          <br />
          Intelligent.
        </h2>
        <p className="cta-sub reveal">Book a free 30-minute discovery call. We'll map out where AI can save you time, money, and effort — immediately.</p>
        <div className="cta-buttons reveal">
          <a href="mailto:info@aiautomata.co.za" className="btn-large">
            Book a Free Call
          </a>
          <a href="tel:+27000000000" className="btn-outline-large">
            Call Us Directly
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="custom-footer">
        <div className="footer-logo">
          AI DYNAMIC<span>.</span>ADVISORY
        </div>
        <div className="footer-copy">© 2026 AI Dynamic Advisory. South Africa.</div>
        <ul className="footer-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#vibe-agent">Vibe Agent</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
