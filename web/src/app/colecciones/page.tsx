import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Colecciones",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Colecciones"
      description="Aquí podrás explorar todas las colecciones de cartas Pokémon."
    />
  );
}
