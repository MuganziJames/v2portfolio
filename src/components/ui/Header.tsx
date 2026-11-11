"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./navigation";

export default function Header() {
  const pathname = usePathname();
  const filteredLinks = navLinks.filter((link) => link.href !== pathname);
  const desktopPageLabel =
    pathname === "/about"
      ? "About"
      : pathname === "/projects"
        ? "Projects"
        : pathname === "/contact"
          ? "Contact"
          : "JM";

  const scrollToTop = () => {
    document.querySelector("main")?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Home keeps its compact mobile brand header. */}
      {pathname === "/" && (
        <header className="flex md:hidden items-center justify-between px-8 py-6 relative z-50">
          <Link href="/" className="text-3xl font-bold" aria-label="Home">
            JM
          </Link>
          <MobileMenu />
        </header>
      )}

      <header className="hidden md:flex items-center justify-between px-8 py-6 md:px-16 lg:px-24 relative z-50">
        {/* Current page label */}
        {pathname === "/" ? (
          <Link href="/" className="text-lg font-semibold" aria-label="Home">
            JM
          </Link>
        ) : (
          <button
            type="button"
            onClick={scrollToTop}
            className="text-lg font-semibold"
            aria-label={`Scroll to top of ${desktopPageLabel}`}
          >
            {desktopPageLabel}
          </button>
        )}

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
