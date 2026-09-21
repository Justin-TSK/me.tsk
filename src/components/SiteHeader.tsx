"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Fermer le menu avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Empêcher le scroll arrière-plan quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/#about", label: "À propos", shortcut: "~/parcours" },
    { href: "/#projects", label: "Projets", shortcut: "~/projets" },
    { href: "/blog", label: "Articles", shortcut: "~/blog" },
    { href: "/#contact", label: "Contact", shortcut: "~/contact" },
  ];

  return (
    <>
      <header className="relative z-50 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:py-6">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="font-mono text-sm tracking-wide text-cyan-300/90 transition hover:text-cyan-200"
          onClick={() => setIsOpen(false)}
        >
          : JT // AI &amp; Code
        </Link>

        {/* Navigation Desktop (≥ 768px / md) */}
        <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bouton Hamburger Mobile (< 768px / md) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition hover:border-cyan-500/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 md:hidden"
        >
          {isOpen ? (
            <svg
              className="h-5 w-5 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>

        {/* Menu déroulant Mobile (Overlay) */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute top-full left-4 right-4 mt-2 z-50 rounded-2xl border border-zinc-800/90 bg-zinc-950/95 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-cyan-300"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-zinc-500 transition group-hover:text-cyan-400/80">
                    {link.shortcut}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Fond semi-transparent pour fermer au clic en dehors */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}