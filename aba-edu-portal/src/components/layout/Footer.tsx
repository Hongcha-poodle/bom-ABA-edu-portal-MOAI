import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const footerLinks = NAV_LINKS.filter((link) => link.href !== "#");

  return (
    <footer className="bg-neutral-800 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:justify-between md:px-8">
        <div>
          <Link href="/" className="mb-4 inline-block text-xl font-bold">
            ABA <span className="text-primary-300">Edu Portal</span>
          </Link>
          <p className="max-w-xs text-sm text-neutral-400">
            발달지연 아동과 가족을 위한 교육 포털입니다. <br />
            함께 성장하는 미래를 만들어갑니다.
          </p>
        </div>

        <nav>
          <ul className="flex flex-col gap-4 text-sm text-neutral-400 sm:flex-row sm:gap-8">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-neutral-700 px-4 pt-8 text-center text-xs text-neutral-500 md:px-8 md:text-left">
        © 2025 ABA 에듀 포털. All rights reserved.
      </div>
    </footer>
  );
}
