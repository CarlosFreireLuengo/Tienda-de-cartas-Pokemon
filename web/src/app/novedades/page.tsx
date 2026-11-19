import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Novedades",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Novedades"
      description="Aquí encontrarás las últimas expansiones y lanzamientos."
    />
  );
}
