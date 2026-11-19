import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-800">
        Error 404
      </p>
      <h1 className="mt-2 text-4xl font-extrabold">Página no encontrada</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        La página que buscas no existe o se ha movido. Vuelve al inicio y sigue
        explorando la tienda.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-gold-400 px-6 py-3 font-bold text-ink transition-colors hover:bg-gold-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
