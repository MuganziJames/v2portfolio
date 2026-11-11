import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

interface FooterProps {
  ctaText?: string;
  ctaHref?: string;
}

export default function Footer({ ctaText, ctaHref }: FooterProps) {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/jamesmuganzi/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/MuganziJames",
      label: "GitHub",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/_muganzi",
      label: "X",
    },
    {
      icon: SiUpwork,
      href: "https://www.upwork.com/freelancers/~01272550c440f21a6f",
      label: "Upwork",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/254798848862",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative z-10 px-8 pb-12 md:px-16 lg:px-24">
      {/* CTA Link */}
      {ctaText && ctaHref && (
        <div className="mb-8">
          <Link href={ctaHref} className="arrow-link">
            {ctaText}
            <span className="text-xl">→</span>
          </Link>
        </div>
      )}

      {/* Resume Link */}
      <div className="mb-8">
        <a
          href="https://drive.google.com/file/d/1bMkna-f8rruWpuKiILdFWCLrEnBTLKWk/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium underline-link transition-opacity hover:opacity-60"
        >
          Download Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg transition-opacity hover:opacity-60"
            aria-label={social.label}
            title={social.label}
          >
            <social.icon />
          </a>
        ))}
      </div>
    </footer>
  );
}