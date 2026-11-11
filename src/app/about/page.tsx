import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";

const skills = [
  {
    title: "Backend Engineering & APIs",
    // icon: <FaServer className="ml-1 inline" />,
    link: { text: "View Projects", href: "/projects" },
    description:
      "I build production-grade APIs, asynchronous services and data-intensive applications with Python, FastAPI, Flask and Node.js. My focus is on reliable architecture, secure integrations, clear API contracts and systems that support real users and operational needs.",
  },
  {
    title: "AI, Data & Automation",
    // icon: <FaBrain className="ml-1 inline" />,
    link: { text: "Explore My Work", href: "/projects" },
    description:
      "I combine data science, machine learning, natural language processing and AI-enabled workflows to turn complex information into useful decisions. My work includes semantic job matching, climate intelligence, nutrition planning, career support and automated research workflows.",
  },
  {
    title: "Production Systems & Impact",
    // icon: <FaDatabase className="ml-1 inline" />,
    link: { text: "Let's Collaborate", href: "/contact" },
    description:
      "I enjoy connecting engineering quality with community needs. My projects span climate, health, jobs, mobility and sustainable development, with an emphasis on automation, accessibility, measurable outcomes and solutions that create meaningful impact in Africa.",
  },
];

interface Experience {
  title: string;
  company: string;
  type?: string;
  period: string;
  location?: string;
  highlights: string[];
  skills: string[];
}

const experience: Experience[] = [
  {
    title: "Researcher",
    company: "CloudFactory",
    type: "Contract",
    period: "Nov 2025 - Present",
    location: "Remote · Nairobi County, Kenya",
    highlights: [
      "Verify public-source information through a seven-stage research, cross-checking and classification process before converting findings into operational records.",
      "Process 50+ research records per work cycle while maintaining accuracy, consistency and source traceability.",
      "Cross-check 10-15 independent sources when information conflicts, resolving discrepancies before submitting records for review.",
      "Audit research records against completeness, classification accuracy, evidence reliability and formatting consistency.",
      "Maintain source links, exception notes and verification evidence so reviewers can validate findings without repeating initial research.",
      "Submit verified records to distributed teams within project deadlines while protecting confidential data and following client guidelines.",
    ],
    skills: [
      "Research Verification",
      "Source Traceability",
      "Data Classification",
      "Quality Auditing",
    ],
  },
  {
    title: "Backend Developer",
    company: "Blueprint AI",
    type: "Part-time",
    period: "Aug 2024 - Present",
    location: "Eldoret, Kenya",
    highlights: [
      "Maintain Python and FastAPI services across authentication, business logic, data processing and frontend integration workflows.",
      "Develop 20+ FastAPI endpoints using Pydantic, SQLAlchemy and PostgreSQL, standardizing validation and API response contracts.",
      "Expose Python machine-learning outputs through REST interfaces so frontend features can use model capabilities without direct dependencies on model code.",
      "Tune database performance across SQL queries, ORM operations and serialization to reduce redundant processing in backend services.",
      "Troubleshoot failures across APIs, PostgreSQL, authentication and external services, implementing targeted fixes.",
      "Ship Python backend changes alongside React-facing features using Git-based collaboration and iterative releases.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "Pydantic",
      "SQLAlchemy",
      "PostgreSQL",
      "React Integration",
    ],
  },
  {
    title: "Data Scientist / Backend Engineer",
    company: "Blueprint AI",
    type: "Full-time",
    period: "Dec 2023 - Aug 2024",
    location: "Remote · Nairobi County, Kenya",
    highlights: [
      "Built Python data workflows covering ingestion, preprocessing, feature engineering, training and evaluation.",
      "Transformed multi-source datasets with pandas and NumPy into consistent, model-ready inputs for client analytics work.",
      "Evaluated supervised scikit-learn models through iterative validation and feature refinement to strengthen predictive performance.",
      "Standardized recurring preprocessing steps into reusable Python pipelines for cleaning, transformation and feature preparation.",
      "Presented model findings through Matplotlib and Seaborn reports, translating technical results into stakeholder-ready visuals.",
      "Supported deployments through model validation, backend integration and production monitoring.",
    ],
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "IT Automation Apprentice",
    company: "Mentor Me Collective",
    type: "Full-time apprenticeship",
    period: "Jul 2025 - Jan 2026",
    location: "Remote · United States",
    highlights: [
      "Built 10+ Python scripts for repetitive IT tasks, replacing manual steps with consistent, repeatable execution.",
      "Automated file processing, input validation and CLI utilities using functions and exception handling.",
      "Converted multi-step manual procedures into reusable scripts that were easier to rerun and troubleshoot.",
      "Collaborated through branching, pull requests and tracked revisions across remote assignments.",
      "Prototyped cloud-aware automation and infrastructure checks to assist with technical troubleshooting and operational support.",
      "Diagnosed Python script failures using debugging, configuration management and version-controlled fixes.",
    ],
    skills: [
      "Python Automation",
      "CLI Utilities",
      "Debugging",
      "Git/GitHub",
      "Configuration Management",
    ],
  },
  {
    title: "AI & Machine Learning Trainee",
    company: "Power Learn Project",
    type: "Training",
    period: "Jun 2024 - Sep 2024",
    location: "Nairobi County, Kenya",
    highlights: [
      "Produced a climate-risk prototype covering drought, flooding, food insecurity and crop yields.",
      "Prepared environmental datasets through cleaning, transformation and feature exploration using Python, pandas and NumPy.",
      "Analyzed climate-risk data using supervised machine learning and statistical methods, converting model output into decision-support insights.",
      "Translated natural-language questions into analytical queries so non-technical users could explore climate-risk findings.",
      "Unified environmental datasets, model predictions and natural-language output in an interactive East African prototype.",
      "Completed the core backend in 12 hours during a 24-hour hackathon, demonstrating rapid delivery under a fixed deadline.",
    ],
    skills: [
      "Machine Learning",
      "Climate Data",
      "Natural Language Queries",
      "Python",
      "Streamlit",
    ],
  },
  {
    title: "Software Engineering Trainee",
    company: "Power Learn Project",
    type: "Full-time",
    period: "Feb 2024 - Jun 2024",
    location: "Remote",
    highlights: [
      "Built full-stack applications across Python, JavaScript, SQL, HTML and CSS.",
      "Connected REST-style backend logic and relational data to browser interfaces, supporting data retrieval and user updates.",
      "Created Ajirawise, a job-discovery and alert platform that earned 3rd place at the Power Learn Project hackathon.",
      "Implemented vacancy collection, user-preference filtering, matching logic and notifications for job alerts.",
      "Coordinated code changes through Git/GitHub version control, collaborative debugging and iterative project reviews.",
      "Completed software engineering training across backend APIs, databases, frontend development and agile delivery.",
    ],
    skills: [
      "Python",
      "JavaScript",
      "SQL",
      "REST APIs",
      "Git/GitHub",
      "Agile Delivery",
    ],
  },
  {
    title: "Mobile App Development Trainee",
    company: "TechCrush",
    type: "Full-time",
    period: "Mar 2024 - Jun 2024",
    location: "Remote · Nigeria",
    highlights: [
      "Built React Native applications for budgeting, health information and location-aware utility use cases.",
      "Translated requirements into shared screens, components and navigation flows across mobile prototypes.",
      "Connected React Native interfaces to asynchronous APIs for reading and updating application data.",
      "Consolidated repeated screen logic into reusable components and state management to simplify maintenance.",
      "Added device and location-aware features to utility prototypes, extending functionality beyond static mobile screens.",
      "Shipped mobile features in a remote development environment using source control, debugging and iterative feedback.",
    ],
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "API Integration",
      "State Management",
    ],
  },
];

const reads = [
  {
    title: "Backend Engineering",
    source: "Python · FastAPI · Flask · Node.js",
    year: "Core stack",
    description:
      "Python, FastAPI, Flask, async/await, asyncio, Pydantic, SQLAlchemy, REST APIs, Node.js and Express.js.",
  },
  {
    title: "Databases & Search",
    source: "PostgreSQL · pgvector · Redis",
    year: "Core stack",
    description:
      "PostgreSQL, pgvector, HNSW, vector embeddings, semantic search, Redis, Supabase, Alembic and SQL optimization.",
  },
  {
    title: "Security & Reliability",
    source: "JWT · OAuth2 · RBAC · Testing",
    year: "Core stack",
    description:
      "JWT, OAuth2, RBAC, API rate limiting, pytest, caching, Celery, background workers and validation.",
  },
  {
    title: "AI & Data",
    source: "OpenAI · RAG · NLP · ML",
    year: "Core stack",
    description:
      "OpenAI APIs, LLM integration, RAG patterns, NLP, scikit-learn, pandas and NumPy.",
  },
  {
    title: "Frontend & Delivery",
    source: "React · Next.js · Docker · CI/CD",
    year: "Core stack",
    description:
      "React, Next.js, TypeScript, JavaScript, Tailwind CSS, React Native, Docker, GitHub Actions, CI/CD, DigitalOcean and AWS.",
  },
];
const education = [
  {
    title: "Associate Degree in Computer Science",
    source: "University of the People",
    description:
      "Relevant coursework includes object-oriented programming, algorithms, data structures, programming foundations, databases, SQL, statistics and computer systems.",
  },
  {
    title: "B.E. Civil & Structural Engineering",
    source: "University of Eldoret",
    description:
      "Bachelor of Engineering in Civil & Structural Engineering, with study in engineering mathematics, structural analysis, numerical methods and technical modelling-training that continues to strengthen my analytical approach to software and data problems.",
  },
];

const recognition = [
  {
    title: "Google IT Automation with Python Professional Certificate",
    source: "Google / Coursera",
    year: "Nov 2025",
    description:
      "Completed the six-course professional program covering Python scripting, Git/GitHub, troubleshooting, debugging, configuration management, automation and IT operations.",
  },
  {
    title: "Intermediate Python",
    source: "DataCamp",
    year: "Sep 2025",
    description:
      "Practical training in Python programming, functions, data structures, control flow and data-processing techniques.",
  },
  {
    title: "University of the People Scholarship",
    source: "$2,400 scholarship",
    year: "Nov 2024",
    description:
      "Awarded scholarship funding toward completion of the Associate Degree in Computer Science.",
  },
  {
    title: "Global UGRAD Program Finalist",
    source: "U.S. Department of State",
    year: "Mar 2025",
    description:
      "Selected as a finalist for the competitive international academic exchange program, with placement at the University of Wyoming. (Didn't attend due to funding shortages).",
  },
  {
    title: "PLP Hackathon - 3rd Place",
    source: "Ajirawise",
    year: "2024",
    description:
      "Recognized for a practical approach to improving job discovery and access to employment opportunities.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      watermarkText="Beyond the Code."
      footerCtaText="Let's Continue To Projects"
      footerCtaHref="/projects"
      subtleGrid
    >
      <div className="px-8 pt-6 md:px-16 md:pt-0 lg:px-24">
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-6xl lg:text-7xl font-bold">
            Beyond the Code.
          </h1>
        </div>

        {/* Expertise Section */}
        <section className="space-y-12 mb-24 relative">
          <div className="hidden md:block absolute left-[4px] top-8 bottom-0 w-[1px] bg-black/10"></div>

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="border-t border-black/10 pt-8 relative"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold flex items-start">
                  <span className="section-bullet"></span>
                  <span>{skill.title}</span>
                </h2>
                {skill.link.text && (
                  <Link
                    href={skill.link.href}
                    className="underline-link text-sm font-medium block pl-6 mt-3"
                  >
                    {skill.link.text}
                  </Link>
                )}
              </div>
              <p className="text-lg leading-relaxed max-w-5xl pl-6">
                {skill.description}
              </p>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold mb-12">
            Experience.
          </h3>

          <div className="space-y-10 relative">
            <div className="hidden md:block absolute left-[4px] top-0 bottom-0 w-[1px] bg-black/10"></div>

            {experience.map((exp) => (
              <div
                key={exp.title + exp.company + exp.period}
                className="border-t border-black/10 pt-6 relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-semibold flex items-start">
                      <span className="section-bullet"></span>
                      <span>
                        {exp.title}{" "}
                        <span className="font-normal text-gray-500">
                          - {exp.company}
                        </span>
                      </span>
                    </h4>
                    <p className="text-sm text-gray-500 pl-6 mt-1">
                      {[exp.type, exp.location].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm pl-6 md:pl-0">
                    <BsBriefcase />
                    {exp.period}
                  </div>
                </div>

                <ul className="pl-10 max-w-5xl space-y-2 text-base leading-relaxed text-gray-700 list-disc marker:text-gray-400">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pl-6 mt-4">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-24">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold mb-12">
            Technical Skills.
          </h3>

          <div className="space-y-8 relative">
            <div className="hidden md:block absolute left-[4px] top-0 bottom-0 w-[1px] bg-black/10"></div>

            {reads.map((read) => (
              <div
                key={read.title}
                className="border-t border-black/10 pt-6 relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                  <h4 className="text-xl font-semibold flex items-start">
                    <span className="section-bullet"></span>
                    <span>
                      {read.title}{" "}
                      <span className="font-normal text-gray-500">
                        {read.source}
                      </span>
                    </span>
                  </h4>
                  <div className="flex items-center gap-2 text-sm pl-6 md:pl-0">
                    <BsCodeSlash />
                    {read.year}
                  </div>
                </div>
                <p className="text-lg leading-relaxed max-w-5xl pl-6 text-gray-700">
                  {read.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Education Section */}
        <section className="mb-24">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold mb-12">
            Education.
          </h3>

          <div className="space-y-8 relative">
            <div className="hidden md:block absolute left-[4px] top-0 bottom-0 w-[1px] bg-black/10"></div>

            {education.map((item) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-6 relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                  <h4 className="text-xl font-semibold flex items-start">
                    <span className="section-bullet"></span>
                    <span>
                      {item.title}{" "}
                      <span className="font-normal text-gray-500">
                        {item.source}
                      </span>
                    </span>
                  </h4>
                </div>
                <p className="text-lg leading-relaxed max-w-5xl pl-6 text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications and Recognition Section */}
        <section className="mb-24">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold mb-12">
            Certifications & Recognition.
          </h3>

          <div className="space-y-8 relative">
            <div className="hidden md:block absolute left-[4px] top-0 bottom-0 w-[1px] bg-black/10"></div>

            {recognition.map((item) => (
              <div
                key={item.title}
                className="border-t border-black/10 pt-6 relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                  <h4 className="text-xl font-semibold flex items-start">
                    <span className="section-bullet"></span>
                    <span>
                      {item.title}{" "}
                      <span className="font-normal text-gray-500">
                        {item.source}
                      </span>
                    </span>
                  </h4>
                  <div className="flex items-center gap-2 text-sm pl-6 md:pl-0">
                    <BsCodeSlash />
                    {item.year}
                  </div>
                </div>
                <p className="text-lg leading-relaxed max-w-5xl pl-6 text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
