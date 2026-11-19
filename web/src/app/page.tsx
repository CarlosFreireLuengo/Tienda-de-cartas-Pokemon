import { Suspense } from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Pokemaniaco: tienda de cartas Pokémon</h1>

      <Suspense
        fallback={
          <div
            aria-hidden="true"
            className="h-[26rem] bg-zinc-900 sm:h-[30rem] lg:h-[34rem]"
          />
        }
      >
        <HeroCarousel />
      </Suspense>
    </>
  );
}