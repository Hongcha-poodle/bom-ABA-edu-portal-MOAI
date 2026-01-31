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
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-primary-500">
              ABA <span className="text-neutral-800">Edu Portal</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              className="rounded-xl p-2 text-neutral-600 hover:bg-neutral-100 transition-colors"
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
