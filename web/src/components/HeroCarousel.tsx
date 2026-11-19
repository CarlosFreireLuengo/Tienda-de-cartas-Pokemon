"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* Contenido provisional: más adelante saldrá de la base de datos */
const slides = [
  {
    id: "tienda",
    eyebrow: "Tu tienda de cartas Pokémon",
    title: "Completa tu colección",
    text: "Sobres, cartas sueltas y accesorios para entrenadores de todas las edades.",
    cta: { label: "Ver colecciones", href: "/colecciones" },
    background: "bg-zinc-900",
    photo: "/images/hero/cartas-pokemon.jpg",
  },
  {
    id: "destined-rivals",
    eyebrow: "Novedad",
    title: "Destined Rivals",
    text: "Descubre la expansión Destined Rivals del Juego de Cartas Coleccionables Pokémon.",
    cta: { label: "Ver novedades", href: "/novedades" },
    background: "bg-gradient-to-br from-zinc-900 via-brand-900 to-zinc-900",
    logo: {
      src: "/images/hero/destined-rivals-logo.png",
      alt: "Logotipo de Destined Rivals",
      width: 1200,
      height: 446,
    },
  },
  {
    id: "journey-together",
    eyebrow: "Expansión",
    title: "Journey Together",
    text: "Encuentra sobres y cartas de la expansión Journey Together.",
    cta: { label: "Ver colecciones", href: "/colecciones" },
    background: "bg-gradient-to-br from-teal-700 via-indigo-800 to-purple-900",
  },
];

const swiperTheme = {
  "--swiper-navigation-color": "#ffffff",
  "--swiper-pagination-color": "#f8c045",
  "--swiper-pagination-bullet-inactive-color": "#ffffff",
  "--swiper-pagination-bullet-inactive-opacity": "0.6",
} as CSSProperties;

export default function HeroCarousel() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  // Si la persona tiene activado "reducir animaciones", no avanza solo
  useEffect(() => {
    if (!swiper) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swiper.autoplay?.stop();
    }
  }, [swiper]);

  return (
    <section aria-roledescription="carrusel" aria-label="Novedades destacadas">
      <Swiper
        modules={[A11y, Autoplay, Navigation, Pagination]}
        onSwiper={setSwiper}
        loop
        speed={600}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{ clickable: true }}
        a11y={{
          prevSlideMessage: "Diapositiva anterior",
          nextSlideMessage: "Diapositiva siguiente",
          paginationBulletMessage: "Ir a la diapositiva {{index}}",
        }}
        style={swiperTheme}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative h-[26rem] overflow-hidden sm:h-[30rem] lg:h-[34rem] ${slide.background}`}
            >
              {/* Foto de fondo con degradado para que el texto se lea bien */}
              {slide.photo && (
                <>
                  <Image
                    src={slide.photo}
                    alt=""
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </>
              )}

              {/* Logo a la derecha (solo en pantallas medianas o grandes) */}
              {slide.logo && (
                <div className="absolute right-16 top-1/2 hidden w-2/5 max-w-xl -translate-y-1/2 md:block">
                  <Image
                    src={slide.logo.src}
                    alt={slide.logo.alt}
                    width={slide.logo.width}
                    height={slide.logo.height}
                    className="h-auto w-full"
                  />
                </div>
              )}

              {/* Texto */}
              <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-14 sm:px-20">
                <div className="max-w-xl text-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-gold-300">
                    {slide.eyebrow}
                  </p>
                  <h2 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg">{slide.text}</p>
                  <Link
                    href={slide.cta.href}
                    className="mt-6 inline-block rounded-full bg-gold-400 px-6 py-3 font-bold text-ink transition-colors hover:bg-gold-300"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}