import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout
      watermarkText="JAMES"
      footerCtaText="See More About Me"
      footerCtaHref="/about"
      noScroll={true}
    >
      <div className="h-full flex flex-col">
        <section className="px-8 md:px-16 lg:px-24 flex-1 flex flex-col justify-center">
          {/* Large Name Heading */}
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">
            JAMES MUGANZI
          </h1>

          {/* Introduction Paragraphs */}
          <div className="max-w-4xl space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg leading-relaxed">
            <p>
              Backend Engineer with hands-on experience building production-grade
              APIs, asynchronous services, AI-enabled workflows, automation
              systems and data-intensive applications. I turn complex problems
              into reliable software through
              <Link href="/projects" className="inline-link mx-1">
                PROJECTS
              </Link>
              that solve real-world problems.
            </p>

            <p>
              I build intelligent, data-driven tools for climate, health, jobs,
              mobility and sustainable development. Explore my
              <Link href="/about" className="inline-link mx-1">
                EXPERIENCE
              </Link>
              and selected work, or
              <Link href="/contact" className="inline-link mx-1">
                CONTACT ME
              </Link>
              to discuss an idea.
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1bMkna-f8rruWpuKiILdFWCLrEnBTLKWk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-7 text-sm font-medium underline-link transition-opacity hover:opacity-60"
          >
            Download my resume
          </a>
        </section>
      </div>
    </PageLayout>
  );
}