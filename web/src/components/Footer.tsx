import Image from "next/image";
import Link from "next/link";

const shopLinks = [
  { href: "/", label: "Inicio" },
  { href: "/colecciones", label: "Colecciones" },
  { href: "/novedades", label: "Novedades" },
];

const accountLinks = [
  { href: "/cuenta", label: "Mi cuenta" },
  { href: "/carrito", label: "Carrito" },
];

const linkClass =
  "text-white/80 transition-colors hover:text-gold-300 focus-visible:outline-gold-300";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Marca */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 focus-visible:outline-gold-300"
          >
            <Image
              src="/images/logo-pokemaniaco.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-lg font-extrabold">Pokemaniaco</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/80">
            Tu tienda de cartas Pokémon: sobres, cartas sueltas y colecciones.
          </p>
        </div>

        {/* Tienda */}
        <nav aria-label="Tienda">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-300">
            Tienda
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {shopLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cuenta */}
        <nav aria-label="Cuenta">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold-300">
            Mi cuenta
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {accountLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Aviso legal */}
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl space-y-2 px-4 py-6 text-xs text-white/70 sm:px-6">
          <p>
            Pokémon y los nombres de personajes y cartas son marcas registradas
            de Nintendo, Creatures Inc. y GAME FREAK Inc. Pokemaniaco es un
            proyecto personal con fines educativos, sin ánimo de lucro y sin
            afiliación con The Pokémon Company.
          </p>
          <p>© 2026 Pokemaniaco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}