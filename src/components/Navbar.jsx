// Navbar: renders site navigation with smooth section anchors.
// Notes:
// - Uses Tailwind utility classes for layout and hover states
// - Links target section IDs (e.g., #home, #about) for in-page navigation
// - Customize branding and menu items via content or inline arrays
import React from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => (
  <header className="sticky top-0 z-20 backdrop-blur-xl bg-bg-dark/80 border-b border-white/5">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
        Kunal<span className="text-primary-strong">&lt;/&gt;</span>
      </div>

      <nav className="hidden gap-7 text-sm font-semibold text-muted sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative pb-2 transition-colors hover:text-white"
          >
            {link.label}
            <span className="absolute inset-x-0 -bottom-[1px] h-0.5 scale-x-0 bg-gradient-to-r from-primary to-primary-strong transition-transform duration-200 ease-out group-hover:scale-x-100" />
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-white transition hover:border-primary hover:text-primary sm:inline-flex"
      >
        Let&apos;s talk
      </a>
    </div>
  </header>
);

export default Navbar;
