"use client";

import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { clsx } from "clsx";

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
            {/* Header Area in Menu to match main header height/layout */}
            <div className="flex h-16 items-center justify-between px-4 border-b border-neutral-100">
                <span className="text-xl font-bold text-primary-500">Menu</span>
                <button
                    onClick={onClose}
                    className="rounded-full p-2 hover:bg-neutral-100"
                    aria-label="메뉴 닫기"
                >
                    <X className="h-6 w-6 text-neutral-900" />
                </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-8">
                <ul className="space-y-6">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={onClose}
                                className="flex items-center justify-between py-2 text-xl font-medium text-neutral-900 hover:text-primary-500"
                            >
                                {link.label}
                                <ChevronRight className="h-5 w-5 text-neutral-400" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer Area in Menu */}
            <div className="border-t border-neutral-100 p-6 bg-neutral-50">
                <p className="mb-4 text-sm text-neutral-500">
                    © 2025 ABA 에듀 포털. <br /> All rights reserved.
                </p>
            </div>
        </div>
    );
}
