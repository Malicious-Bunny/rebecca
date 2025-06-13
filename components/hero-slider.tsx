'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://ext.same-assets.com/1788609594/2815027378.jpeg',
    title: 'Discover our Boutique',
    subtitle: 'unique designs for your baby',
    description: 'Experience the artistry of lifelike reborn dolls, meticulously handcrafted with love and care.',
    cta: {
      text: 'VISIT IT >',
      href: '/search'
    }
  },
  {
    id: 2,
    image: 'https://ext.same-assets.com/1788609594/44409836.jpeg',
    title: 'Personalize the baby of your dreams',
    subtitle: 'discover Rebecca\'s Reborn babies',
    description: 'Create a one-of-a-kind reborn doll tailored to your heart\'s desire with our custom artistry.',
    cta: {
      text: 'CUSTOMIZE >',
      href: '/search/new-arrivals'
    }
  },
  {
    id: 3,
    image: 'https://ext.same-assets.com/1788609594/2452770428.jpeg',
    title: 'Your Rebecca\'s Reborn',
    subtitle: 'one more in the family',
    description: 'Each doll becomes a cherished family member, bringing joy and wonder to your home.',
    cta: {
      text: 'AVAILABLE BABIES >',
      href: '/search/dolls'
    }
  },
  {
    id: 4,
    image: 'https://ext.same-assets.com/1788609594/3894237938.jpeg',
    title: 'We want to take care of your baby',
    subtitle: 'as much as you do. Repair insurance included',
    description: 'Complete peace of mind with our comprehensive care and repair insurance for your precious reborn.',
    cta: {
      text: 'MORE INFO >',
      href: '/search/trending'
    }
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] min-h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Cocoreborn-style gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/40 via-transparent to-[var(--color-accent)]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Floating Text Overlay Elements */}
          <div className="absolute inset-0 z-5 overflow-hidden">
            <div className="absolute top-20 right-10 font-satoshi text-white/20 text-8xl font-light rotate-12 select-none">
              DREAMS
            </div>
            <div className="absolute bottom-32 left-16 font-satoshi text-white/15 text-6xl font-light -rotate-6 select-none">
              LOVE
            </div>
            <div className="absolute top-1/3 right-1/4 font-satoshi text-white/10 text-5xl font-light rotate-45 select-none">
              REBORN
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="mb-4 font-satoshi text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                <h2 className="mb-6 font-elegant text-xl font-light italic text-white/90 sm:text-2xl lg:text-3xl">
                  {slide.subtitle}
                </h2>
                <p className="mb-8 font-body text-lg leading-relaxed text-white/80 sm:text-xl max-w-2xl">
                  {slide.description}
                </p>
                <Link
                  href={slide.cta.href}
                  className="inline-block rounded-full bg-white/95 backdrop-blur-sm px-10 py-4 font-satoshi font-semibold text-[var(--color-primary)] transition-all hover:bg-white hover:shadow-2xl hover:scale-105 transform"
                >
                  {slide.cta.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Side Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
