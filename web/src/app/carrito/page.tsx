import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Carrito",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Carrito"
      description="Aquí verás las cartas que has añadido a tu compra."
    />
  );
}
