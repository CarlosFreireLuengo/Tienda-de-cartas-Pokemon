import Link from "next/link";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

/* Página provisional: se sustituirá por la versión real en pasos posteriores */
export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-extrabold text-brand-800">{title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{description}</p>
      <p className="mt-2 text-sm text-muted">Estamos trabajando en ello.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-brand-800 px-6 py-3 font-bold text-white transition-colors hover:bg-brand-900"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
