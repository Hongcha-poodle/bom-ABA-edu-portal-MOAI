"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b-2 border-primary-200/50 bg-gradient-to-r from-white via-primary-50/30 to-secondary-50/30 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight font-display">
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">ABA</span>{" "}
              <span className="text-neutral-900">Edu Portal</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-bold text-neutral-700 transition-all duration-300 hover:text-primary-500 hover:scale-110"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              className="rounded-2xl p-3 text-neutral-700 bg-primary-100 hover:bg-primary-200 transition-all duration-300"
              onClick={() => setIsNavOpen(true)}
              aria-label="메뉴 열기"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <MobileNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  );
}
