"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "PROJECTS", path: "/projects" },
  { name: "ABOUT", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed z-50 mix-blend-difference text-safety-yellow top-0 left-0 w-full h-16 px-6 border-b-2 border-current bg-black/10 backdrop-blur-sm flex items-center justify-between lg:top-8 lg:right-8 lg:left-auto lg:w-auto lg:h-auto lg:flex-col lg:items-end lg:gap-4 lg:p-6 lg:border-2 lg:bg-industrial-black lg:border-safety-yellow">
      {/* Brand */}
      <div className="font-mono font-bold text-xl tracking-tighter lg:mb-4 lg:border-b lg:border-safety-yellow lg:pb-2">
        PORTFOLIO_V2
      </div>

      {/* Links */}
      <div className="flex gap-6 lg:flex-col lg:gap-2 lg:text-right">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`font-oswald text-lg tracking-widest hover:text-white transition-colors
              ${
                pathname === item.path
                  ? "underline decoration-2 underline-offset-4"
                  : "opacity-70"
              }
            `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
