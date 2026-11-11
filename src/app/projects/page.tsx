"use client";

import { type ReactNode, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import MobileMenu from "@/components/ui/MobileMenu";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

// Project categories
type Category = "all" | "backend" | "ai-data" | "mobile-web";


interface Project {
  title: string;
  description: string;
  tags: string[];
  category: Category[];
  githubHref?: string;
  liveHref?: string;
  impact?: ReactNode;
}

// James's software, AI and data projects
const projects: Project[] = [
  {
    title: "Lintech Mobility - Automotive Operations & Service Platform",
    description:
      "A multi-application automotive operations and service management platform comprising a public business website, workshop administration system and customer self-service portal. A shared Node.js REST API and PostgreSQL database power vehicle records, appointments, work orders, mechanic assignments, inspections, inventory, invoicing, payments and service history. Automated updates use Twilio WhatsApp and BlessedTextXS SMS.",
    impact: (
      <>
        Led SEO and Google Business Profile initiatives that contributed to{" "}
        <strong>300+ new clients in five months</strong>. From June to October
        2026, the business profile received <strong>1,206 views</strong>,
        including 937 mobile views.
      </>
    ),
    tags: [
      "Node.js",
      "REST API",
      "Prisma",
      "PostgreSQL",
      "JWT/RBAC",
      "Railway",
      "Twilio WhatsApp",
      "SEO",
    ],
    category: ["backend", "mobile-web"],
    liveHref: "https://lintechmobility.co.ke",
  },  {
    title: "MyStyleMag - African Fashion & Culture App",
    description:
      "A comprehensive React Native and Expo mobile application celebrating African fashion, culture and style. Users can discover curated outfits, create personal lookbooks, read fashion and culture articles, save favorite content, search by title or category, manage profiles and export their collections. The app integrates with the TechCrush REST API for authentication and content while using Context API and AsyncStorage for state and persistence.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "REST API",
      "Axios",
      "Context API",
      "AsyncStorage",
      "Expo Vector Icons",
    ],
    category: ["mobile-web"],
    githubHref:
      "https://github.com/MuganziJames/mobile_team_App_techCrush.git",
  },  {
    title: "Smart Rider Tracking App",
    description:
      "A React Native and Expo logistics application for delivery riders in Nigeria. It combines high-accuracy GPS tracking, Google Maps route visualization, WebSocket communication and dynamic ETA calculations using the Google Distance Matrix and Directions APIs. Location updates run every 7 seconds, ETA refreshes every 30 seconds, and the WebSocket client reconnects automatically with exponential backoff.",
    tags: [
      "React Native",
      "Expo",
      "Google Maps",
      "WebSocket",
      "Google Distance Matrix",
      "Google Directions API",
      "AsyncStorage",
      "GPS Tracking",
    ],
    category: ["mobile-web", "backend"],
    githubHref: "https://github.com/MuganziJames/rider-tracker",
  },
  {
    title: "WorkeAfrica - AI-Powered Job Discovery Platform",
    description:
      "A job discovery and career management platform built to improve job hunting across Africa. It uses AI-powered CV parsing and intelligent job matching to deliver personalized recommendations. As part of the frontend development team, I implemented the Next.js dashboard, AI-powered CV extraction, real-time job search and filtering, saved jobs, profile management and a tier-based recommendation engine.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "Radix UI",
      "OAuth 2.0",
    ],
    category: ["ai-data", "mobile-web"],
  },
  {
    title: "WorkeAfrica Backend - AI-Powered Job Matching Platform",
    description:
      "A production-grade FastAPI platform spanning job ingestion, candidate profiles, CV parsing, semantic matching, payments and alerts. It uses OpenAI embeddings, PostgreSQL/pgvector and HNSW similarity indexing to connect African job seekers with relevant opportunities. Background CV parsing, recommendations and notifications run through Celery and Redis, with Paystack payments and delivery through Telegram, email and WhatsApp.",
    tags: [
      "Python 3.11",
      "FastAPI",
      "PostgreSQL",
      "pgvector/HNSW",
      "Redis",
      "Celery",
      "OpenAI",
      "Docker",
      "GitHub Actions",
      "Paystack API",
    ],
    category: ["backend", "ai-data"],
  },
  {
    title: "GreenPulse - AI Climate Intelligence Platform",
    description:
      "An AI-powered climate intelligence platform assessing drought, flood, food-security and crop-yield risks. I built the core FastAPI backend in under 12 hours during a 24-hour hackathon, combining NASA POWER data with GPT-4o to produce natural-language risk insights and a Streamlit interface for climate-risk queries.",
    tags: [
      "Python",
      "FastAPI",
      "GPT-4o",
      "NASA POWER API",
      "PostgreSQL",
      "Streamlit",
      "Telegram Bot API",
    ],
    category: ["backend", "ai-data"],
    githubHref: "https://github.com/MuganziJames/greenpulse.git",
    liveHref: "https://greenpulse-vert.vercel.app/",
  },
  {
    title: "Betly Aviator Backend",
    description:
      "An educational FastAPI and PostgreSQL backend demonstrating how real-time crash-game systems work. It includes JWT authentication, user balances, transaction history, bet tracking, game history and WebSocket events for betting phases, live multipliers, crashes and cash-outs. The rigged game engine is explicitly for education about house edges and the risks of online gambling, not real-money use.",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "WebSockets",
      "JWT",
      "Async Python",
    ],
    category: ["backend", "ai-data"],
  },
  {
    title: "Sharp Bets - Sports Betting & Aviator App",
    description:
      "A React Native and Expo mobile betting application combining sports-betting interfaces with a real-time Aviator crash-game experience. The app includes live match cards, odds and match details, bet history, account management, JWT authentication, secure storage, animated multipliers and WebSocket integration with the Betly backend. Sports data is presented as demonstration/mock data and the project is for educational purposes.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Axios",
      "WebSocket",
      "AsyncStorage",
      "Reanimated",
    ],
    category: ["mobile-web", "backend"],
  },
  {
    title: "COTRE - Automated CV Generation Web App",
    description:
      "A Flask-powered application that transforms user details into downloadable PDF CVs through reusable templates. The backend validates input, transforms data and generates documents while the HTML, CSS and JavaScript frontend connects to the document-generation routes. User inputs remain local on the client to minimize account setup and unnecessary data collection.",
    tags: [
      "Python",
      "Flask",
      "PDF Generation",
      "HTML/CSS/JavaScript",
      "Railway",
      "Netlify",
    ],
    category: ["backend", "mobile-web"],
  },
  {
    title: "ClimateWise - AI Climate Risk System",
    description:
      "A machine learning platform predicting floods, droughts, hunger risk and crop yields using global datasets. It combines natural-language queries with interactive dashboards to make climate insights more accessible.",
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    category: ["ai-data"],
    githubHref: "https://github.com/MuganziJames/final_AI_project.git",
    liveHref: "https://finalaiproject-fexrvamcmq8p76hma3e5fy.streamlit.app/",
  },
  {
    title: "Ajirawise - Smart Job Alert Bot",
    description:
      "An automated job-discovery platform delivering verified internships and jobs through WhatsApp and Telegram with AI career support. It assembles vacancy collection, preference filtering, matching logic and notifications to help young professionals access real opportunities quickly.",
    tags: ["Python", "Twilio API", "Supabase", "OpenRouter API"],
    category: ["backend", "ai-data"],
    githubHref: "https://github.com/MuganziJames/job-system.git",
  },
  {
    title: "Portfolio Version 1",
    description:
      "A fully hand-coded responsive portfolio website showcasing work and skills with a clean design, reflecting front-end expertise and the ability to build professional web experiences from scratch.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: ["mobile-web"],
    githubHref: "https://github.com/MuganziJames/my_portfolio.git",
    liveHref: "https://jamesdev.site",
  },
  {
    title: "NutriAI",
    description:
      "An AI-powered nutrition planning system generating culturally appropriate, budget-optimized meal plans for East African families.",
    tags: ["Python", "Streamlit", "NLP", "Data Modeling"],
    category: ["ai-data"],
    githubHref: "https://github.com/MuganziJames/nutriAI.git",
  },
  {
    title: "Umoja",
    description:
      "A mental health and social justice platform integrating AI for story and article generation with Supabase for secure storage.",
    tags: ["HTML", "CSS", "JavaScript", "OpenRouter API", "Supabase"],
    category: ["ai-data", "mobile-web"],
    githubHref: "https://github.com/MuganziJames/Umoja-AI.git",
  },
  {
    title: "COVID-19 Global Data Tracker",
    description:
      "A Jupyter Notebook project analyzing global COVID-19 cases, deaths and vaccinations using Our World in Data datasets.",
    tags: ["Python", "Pandas", "Matplotlib", "Plotly"],
    category: ["ai-data"],
    githubHref:
      "https://github.com/MuganziJames/my_covid_data_analysis_project.git",
  },
  {
    title: "Library Management System (MySQL)",
    description:
      "A pure-SQL database schema covering cataloguing, circulation, events, fines, patrons and audit trails for public libraries.",
    tags: ["MySQL", "ERD", "SQL Scripts"],
    category: ["backend", "ai-data"],
    githubHref: "https://github.com/MuganziJames/Library_management.git",
  },
];

const filterTabs: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Backend", value: "backend" },
  { label: "AI & Data", value: "ai-data" },
  { label: "Mobile & Web", value: "mobile-web" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <PageLayout
      watermarkText="Selected Work."
      footerCtaText="Get In Touch"
      footerCtaHref="/contact"
      subtleGrid
    >
      <div className="px-8 pt-6 md:px-16 md:pt-0 lg:px-24">
        {/* Page Title */}
        <div className="flex items-start justify-between mb-8">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-6xl lg:text-7xl font-bold">
            Selected Work.
          </h1>
          <MobileMenu />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`text-sm font-medium transition-all ${
                activeFilter === tab.value
                  ? "text-foreground"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}

          <a
            href="https://github.com/MuganziJames"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center text-xl text-gray-400 transition-colors hover:text-gray-900"
            aria-label="View James Muganzi on GitHub"
            title="View GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="border-t border-black/10 pt-6 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="text-sm text-gray-400 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-bold leading-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {project.impact && (
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.impact}
                </p>
              )}


              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {(project.githubHref || project.liveHref) && (
                <div className="flex flex-wrap items-center gap-5 mt-auto pt-4 border-t border-black/5">
                  {project.githubHref && (
                    <a
                      href={project.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium underline-link transition-opacity hover:opacity-60"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className="text-base" aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                  {project.liveHref && (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium underline-link transition-opacity hover:opacity-60"
                      aria-label={`Visit ${project.title}`}
                    >
                      <HiOutlineExternalLink
                        className="text-base"
                        aria-hidden="true"
                      />
                      Visit website
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
