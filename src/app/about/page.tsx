import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";
import { FaBrain, FaDatabase, FaServer } from "react-icons/fa";

// Expertise data
const skills = [
  {
    title: "Backend Engineering & APIs",
    icon: <FaServer className="ml-1 inline" />,
    link: { text: "View Projects", href: "/projects" },
    description:
      "I build production-grade APIs, asynchronous services and data-intensive applications with Python and modern backend tools. My focus is on reliable architecture, secure integrations, clear interfaces and systems that can support real users and real operational needs.",
  },
  {
    title: "AI, Data & Automation",
    icon: <FaBrain className="ml-1 inline" />,
    link: { text: "Explore My Work", href: "/projects" },
    description:
      "I combine data science, machine learning, natural language processing and AI-enabled workflows to turn complex information into useful decisions. I have worked on intelligent job matching, climate intelligence, nutrition planning, career support and automated research workflows.",
  },
  {
    title: "Production Systems & Impact",
    icon: <FaDatabase className="ml-1 inline" />,
    link: { text: "Let's Collaborate", href: "/contact" },
    description:
      "I enjoy building technology that connects engineering quality with community needs. My projects span climate, health, jobs, mobility and sustainable development, with an emphasis on automation, accessibility, measurable outcomes and solutions that create meaningful impact in Africa.",
  },
];

// Experience data
const experience = [
  {
    title: "Researcher",
    company: "CloudFactory",
    type: "Contract",
    period: "Nov 2025 - Present",
    location: "Remote · Nairobi County, Kenya",
    description:
      "Verify public-source information through a seven-stage research, cross-checking and classification process before converting findings into operational records. Process 50+ research records per work cycle, cross-check 10-15 independent sources, audit records for completeness and maintain source links, exception notes and verification evidence for distributed teams.",
    skills: [
      "Research Verification",
      "Source Traceability",
      "Data Classification",
      "Quality Auditing",
    ],
  },
  {
    title: "Backend",
    company: "Blueprint AI",
    type: "Professional Experience",
    period: "",
    location: "",
    description:
      "Backend engineering experience contributing to AI-enabled workflows, production services and data-driven applications.",
    skills: ["Python", "APIs", "Automation"],
  },
  {
    title: "Data Science",
    company: "Blueprint AI",
    type: "Professional Experience",
    period: "",
    location: "",
    description:
      "Data science experience focused on turning complex data into insights and practical tools that support better decisions.",
    skills: ["Data Science", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Technology Contributor",
    company: "Mentor Me Collective",
    type: "Professional Experience",
    period: "",
    location: "",
    description:
      "Contributed to technology and community-focused work through collaboration, problem solving and practical software development.",
    skills: ["Collaboration", "Problem Solving", "Community"],
  },
  {
    title: "AI/ML",
    company: "PLP",
    type: "Professional Experience",
    period: "",
    location: "",
    description:
      "Applied artificial intelligence and machine learning skills through practical projects and collaborative development work.",
    skills: ["Artificial Intelligence", "Machine Learning", "Python"],
  },
  {
    title: "Developer",
    company: "PLP",
    type: "Professional Experience",
    period: "",
    location: "",
    description:
      "Built software projects while strengthening full-stack development, teamwork, version control and delivery skills.",
    skills: ["Software Development", "Git/GitHub", "Teamwork"],
  },
  {
    title: "Technology Professional",
    company: "TechCrush",
    type: "Professional Experience",
    period: "",
    location: "",
    description:
      "Worked across software and mobile development projects with a focus on building useful digital products and learning through collaborative engineering.",
    skills: ["React Native", "TypeScript", "Mobile Development"],
  },
];

// Skills grouped for the existing skills list design
const reads = [
  {
    title: "Backend & Development",
    source: "Python · Flask · Django · REST APIs",
    year: "Core stack",
    description:
      "Python, Flask, Django, REST API development, asynchronous services, JWT authentication, role-based access control and secure application architecture.",
  },
  {
    title: "AI & Machine Learning",
    source: "ML · NLP · Deep Learning",
    year: "Core stack",
    description:
      "Data Science, Machine Learning, Deep Learning, Natural Language Processing, TensorFlow, PyTorch and OpenAI-powered workflows.",
  },
  {
    title: "Data & Visualization",
    source: "SQL · Pandas · NumPy",
    year: "Core stack",
    description:
      "SQL, PostgreSQL, Pandas, NumPy, Scikit-learn, data modeling, data visualization and tools for building clear, data-driven insights.",
  },
  {
    title: "Tools & Delivery",
    source: "Cloud · Git · Streamlit",
    year: "Core stack",
    description:
      "Streamlit, Git/GitHub, cloud basics, Docker, deployment workflows and the practical tools needed to take ideas from development to usable products.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      watermarkText="About Me."
      footerCtaText="Let's Continue To Projects"
      footerCtaHref="/projects"
    >
      <div className="px-8 md:px-16 lg:px-24">
        {/* Page Title */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-bold mb-16">
          About Me.
        </h1>

        {/* Skills Section */}
        <section className="space-y-12 mb-24 relative">
          {/* Vertical Line */}
          <div className="absolute left-[4px] top-8 bottom-0 w-[1px] bg-black/10"></div>

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="border-t border-black/10 pt-8 relative"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <span className="section-bullet"></span>
                  {skill.title}
                  {skill.icon}
                </h2>
                <Link
                  href={skill.link.href}
                  className="underline-link text-sm font-medium"
                >
                  {skill.link.text}
                </Link>
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
            {/* Vertical Line */}
            <div className="absolute left-[4px] top-0 bottom-0 w-[1px] bg-black/10"></div>

            {experience.map((exp) => (
              <div
                key={exp.title + exp.company}
                className="border-t border-black/10 pt-6 relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                  <div>
                    <h4 className="text-xl font-semibold flex items-center flex-wrap gap-2">
                      <span className="section-bullet"></span>
                      {exp.title}
                      <span className="font-normal text-gray-500">
                        — {exp.company}
                      </span>
                    </h4>
                    {(exp.type || exp.location) && (
                      <p className="text-sm text-gray-500 pl-6 mt-1">
                        {[exp.type, exp.location].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  {exp.period && (
                    <div className="flex items-center gap-2 text-sm pl-6 md:pl-0">
                      <BsBriefcase />
                      {exp.period}
                    </div>
                  )}
                </div>
                <p className="text-base leading-relaxed max-w-5xl pl-6 text-gray-700 mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pl-6">
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

        {/* My Skills Section */}
        <section className="mb-24">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold mb-12">
            My Skills.
          </h3>

          <div className="space-y-8 relative">
            <div className="absolute left-[4px] top-0 bottom-0 w-[1px] bg-black/10"></div>

            {reads.map((read) => (
              <div
                key={read.title}
                className="border-t border-black/10 pt-6 relative"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold flex items-center flex-wrap">
                    <span className="section-bullet"></span>
                    {read.title}
                    <span className="font-normal text-gray-500 ml-2">
                      {read.source}
                    </span>
                  </h4>
                  <div className="flex items-center gap-2 text-sm">
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
      </div>
    </PageLayout>
  );
}