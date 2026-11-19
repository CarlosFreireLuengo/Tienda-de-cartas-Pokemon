import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Mi cuenta",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Mi cuenta"
      description="Aquí podrás iniciar sesión, consultar tus pedidos y gestionar tus datos."
    />
  );
}
