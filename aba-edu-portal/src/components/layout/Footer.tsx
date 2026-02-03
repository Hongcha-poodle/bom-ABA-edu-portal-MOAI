import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const footerLinks = NAV_LINKS.filter((link) => link.href !== "#");

  return (
    <footer className="bg-gradient-to-br from-secondary-100 via-primary-100 to-tertiary-100 py-16 border-t-4 border-primary-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:justify-between md:px-8">
        <div>
          <Link href="/" className="mb-4 inline-block text-2xl font-black font-display">
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">ABA</span>{" "}
            <span className="text-neutral-900">Edu Portal</span>
          </Link>
          <p className="max-w-xs text-base text-neutral-700 font-medium leading-relaxed">
            발달지연 아동과 가족을 위한 교육 포털입니다. <br />
            함께 성장하는 미래를 만들어갑니다. ✨
          </p>
        </div>

        <nav>
          <ul className="flex flex-col gap-4 text-base font-bold text-neutral-700 sm:flex-row sm:gap-8">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-all duration-300 hover:text-primary-600 hover:scale-110 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t-2 border-primary-200 px-4 pt-8 text-center text-sm text-neutral-600 md:px-8 md:text-left font-medium">
        © 2025 ABA 에듀 포털. All rights reserved.
      </div>
    </footer>
  );
}
