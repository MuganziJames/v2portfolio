"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { navLinks } from "./navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    document.querySelector("main")?.scrollTo({ top: 0, behavior: "auto" });
    setIsMenuOpen(false);
  };

  const handleNavigation = () => {
    document.querySelector("main")?.scrollTo({ top: 0, behavior: "auto" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsMenuOpen((open) => !open)}
        className="relative md:hidden shrink-0 mt-2 text-2xl leading-none z-50"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <HiX aria-hidden="true" />
        ) : (
          <span className="flex flex-col gap-1" aria-hidden="true">
            <span className="block h-[2px] w-6 bg-current" />
            <span className="block h-[2px] w-6 bg-current" />
            <span className="block h-[2px] w-6 bg-current" />
          </span>
        )}
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => {
              const className = `text-3xl font-[family-name:var(--font-playfair)] font-bold transition-opacity hover:opacity-60 ${
                pathname === link.href ? "opacity-40" : ""
              }`;

              return pathname === link.href ? (
                <button
                  key={link.href}
                  type="button"
                  onClick={scrollToTop}
                  className={className}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavigation}
                  className={className}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
