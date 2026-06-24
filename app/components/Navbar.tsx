import Link from "next/link";
import { Home } from "lucide-react";
import { site } from "@/app/data/site";
const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Contact", href: "#contact" },
];
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111111]/75 backdrop-blur-xl">
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          <Home size={16} />
          GitHub
        </a>
      </nav>
    </header>
  );
}