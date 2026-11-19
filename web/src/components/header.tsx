"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import type { ReactNode } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/colecciones", label: "Colecciones" },
  { href: "/novedades", label: "Novedades" },
];

/* ---------- Iconos (SVG en línea, sin librerías externas) ---------- */

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const SearchIcon = () => (
  <Icon>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Icon>
);

const UserIcon = () => (
  <Icon>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icon>
);

const CartIcon = () => (
  <Icon>
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" />
  </Icon>
);

const MenuIcon = () => (
  <Icon>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Icon>
);

const CloseIcon = () => (
  <Icon>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

/* ---------- Buscador ---------- */

function SearchForm({ className = "" }: { className?: string }) {
  const id = useId();

  return (
    <form
      action="/buscar"
      method="get"
      role="search"
      className={`items-center overflow-hidden rounded-full bg-white text-ink focus-within:ring-2 focus-within:ring-gold-300 ${className}`}
    >
      <label htmlFor={id} className="sr-only">
        Buscar cartas
      </label>
      <input
        id={id}
        type="search"
        name="q"
        placeholder="Buscar cartas…"
        className="w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="px-4 py-2 text-brand-800 hover:text-brand-900"
      >
        <SearchIcon />
      </button>
    </form>
  );
}

/* ---------- Header ---------- */

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `block rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-gold-300 focus-visible:outline-gold-300 ${
      isActive(href) ? "text-gold-300" : "text-white"
    }`;

  const iconButtonClass =
    "rounded-full p-2 text-white transition-colors hover:bg-white/15 focus-visible:outline-gold-300";

  return (
    <header className="sticky top-0 z-50 bg-brand-800 text-white shadow-md">
      {/* Enlace para saltar al contenido (accesibilidad con teclado) */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded-md focus:bg-gold-300 focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-gold-300"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo-pokemaniaco.png"
            alt=""
            width={48}
            height={48}
            priority
            className="h-12 w-12"
          />
          <span className="text-xl font-extrabold tracking-tight">
            Pokemaniaco
          </span>
        </Link>

        {/* Navegación (escritorio) */}
        <nav aria-label="Principal" className="ml-4 hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={linkClass(link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Buscador (escritorio) */}
        <SearchForm className="ml-auto hidden w-full max-w-sm md:flex" />

        {/* Cuenta, carrito y botón del menú móvil */}
        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <Link href="/cuenta" aria-label="Mi cuenta" className={iconButtonClass}>
            <UserIcon />
          </Link>
          <Link href="/carrito" aria-label="Carrito" className={iconButtonClass}>
            <CartIcon />
          </Link>
          <button
            type="button"
            className={`${iconButtonClass} md:hidden`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menú desplegable (móvil) */}
      {menuOpen && (
        <div id="menu-movil" className="border-t border-white/20 md:hidden">
          <div className="mx-auto max-w-7xl space-y-3 px-4 py-4 sm:px-6">
            <SearchForm className="flex" />
            <nav aria-label="Principal">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={linkClass(link.href)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}