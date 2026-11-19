import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Buscar",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Buscar"
      description="Aquí aparecerán los resultados de tu búsqueda de cartas."
    />
  );
}
