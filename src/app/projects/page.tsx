"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
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
}

// James's software, AI and data projects
const projects: Project[] = [
  {
    title: "Lintech Automobile Garage",
    description:
      "A multi-application automotive operations and service management platform comprising a public business website, an administrative and workshop management system, and a customer self-service portal. The shared backend and PostgreSQL database support staff access, customer and vehicle records, appointments, work orders, mechanic assignments, inspections, inventory, invoicing, payments and financial reporting. Customers can book appointments, follow active repairs, and access invoices and service history. Automated updates use Twilio WhatsApp and BlessedTextXS SMS. SEO and Google Business Profile initiatives contributed to 300+ new clients in five months.",
    tags: [
      "Node.js",
      "Prisma",
      "REST API",
      "JWT & RBAC",
      "PostgreSQL",
      "Railway",
      "Cloudinary",
      "Twilio WhatsApp",
      "SEO",
    ],
    category: ["backend", "mobile-web"],
    liveHref: "https://lintechmobility.co.ke",
  },
  {
    title: "WorkeAfrica - AI-Powered Job Discovery Platform",
    description:
      "A job discovery and career management platform built to improve job hunting across Africa. It uses AI-powered CV parsing and intelligent job matching to deliver personalized recommendations. As part of the frontend development team, I implemented Next.js 16 features, dashboard components, AI-powered CV extraction, real-time job search and filtering, saved jobs, profile management and a tier-based recommendation engine.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "Radix UI",
      "OAuth 2.0",
      "FastAPI",
    ],
    category: ["ai-data", "mobile-web"],
  },
  {
    title: "WorkeAfrica Backend - AI-Powered Job Matching Platform",
    description:
      "A production-grade job matching platform using AI embeddings and semantic search to connect African job seekers with relevant opportunities. It automates job scraping from LinkedIn and BrighterMonday, parses CVs, delivers personalized recommendations through Free, Pay-per-use and Monthly subscriptions, and generates professional CVs and cover letters. The platform also includes Paystack payments, a natural-language chatbot, admin analytics and delivery through Telegram, Email and WhatsApp.",
    tags: [
      "Python 3.11",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "OpenAI",
      "SQLAlchemy",
      "Docker",
      "GitHub Actions",
      "Paystack API",
    ],
    category: ["backend", "ai-data"],
  },
  {
    title: "GreenPulse (Backend)",
    description:
      "An AI-powered climate intelligence platform built by a team of three during a 24-hour hackathon. I developed the entire backend system in under 12 hours. It uses FastAPI and GPT-4o to analyze climate patterns from NASA POWER and Google Weather APIs, providing real-time risk detection, regulatory compliance checking and decision support for environmental impact assessments through a REST API, web dashboard and Telegram bot.",
    tags: [
      "Python",
      "FastAPI",
      "OpenRouter (GPT-4o)",
      "NASA POWER API",
      "PostgreSQL",
      "React",
      "TailwindCSS",
      "Telegram Bot API",
    ],
    category: ["backend", "ai-data"],
    githubHref: "https://github.com/MuganziJames/greenpulse.git",
    liveHref: "https://greenpulse-vert.vercel.app/",
  },
  {
    title: "ClimateWise - AI Climate Risk System",
    description:
      "A machine learning platform predicting floods, droughts, hunger risk and crop yields using global datasets. It combines natural-language queries with real-time dashboards to make climate insights more accessible.",
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    category: ["ai-data"],
    githubHref: "https://github.com/MuganziJames/final_AI_project.git",
    liveHref: "https://finalaiproject-fexrvamcmq8p76hma3e5fy.streamlit.app/",
  },
  {
    title: "Ajirawise - Smart Job Alert Bot",
    description:
      "An automated job posting platform delivering verified internships and jobs through WhatsApp and Telegram with AI career support, helping young professionals access real opportunities quickly.",
    tags: ["Python", "Twilio API", "Supabase", "OpenRouter API"],
    category: ["backend", "ai-data"],
    githubHref: "https://github.com/MuganziJames/job-system.git",
  },
  {
    title: "my-portfolio - Developer Portfolio",
    description:
      "A fully hand-coded responsive portfolio website showcasing work and skills with a clean design, reflecting front-end expertise and the ability to build professional web experiences from scratch.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: ["mobile-web"],
    githubHref: "https://github.com/MuganziJames/my_portfolio.git",
    liveHref: "https://jamesdev.site",
  },
  {
    title: "MyStyleMag",
    description:
      "An African fashion and culture mobile app featuring style discovery, personal lookbooks and a fashion blog, with authentication via an API designed for web and mobile app developers.",
    tags: ["React Native", "Expo", "TypeScript"],
    category: ["mobile-web"],
    githubHref:
      "https://github.com/MuganziJames/mobile_team_App_techCrush.git",
  },
  {
    title: "Rider Tracker",
    description:
      "A B2B mobile app for businesses to track belongings and riders in real time with an integrated Google Maps API.",
    tags: ["React Native", "Google Maps API"],
    category: ["mobile-web"],
    githubHref: "https://github.com/MuganziJames/rider-tracker",
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
      watermarkText="Projects."
      footerCtaText="Get In Touch"
      footerCtaHref="/contact"
    >
      <div className="px-8 md:px-16 lg:px-24">
        {/* Page Title */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Projects.
        </h1>

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
            className="text-sm font-medium text-gray-400 hover:text-gray-600 ml-auto underline-link"
          >
            View GitHub
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