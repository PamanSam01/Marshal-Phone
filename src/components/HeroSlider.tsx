'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '@/data/products';

interface HeroSliderProps {
  onShopClick: () => void;
}

export default function HeroSlider({ onShopClick }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      id="beranda" 
      className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r ${slide.gradient} shadow-lg text-white min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex items-center transition-all duration-700`}>
        
        {/* Subtle Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 items-center p-4 sm:p-8 lg:p-12 gap-5 sm:gap-6">
          
          {/* Left Text & CTA */}
          <div className="md:col-span-7 flex flex-col items-start gap-2.5 sm:gap-4 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-[11px] sm:text-xs font-semibold tracking-wide text-white border border-white/20">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
              <span>{slide.tag}</span>
            </div>

            {/* Heading */}
            <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight leading-[1.18] sm:leading-[1.15] text-white drop-shadow-sm whitespace-pre-line">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-blue-50/90 max-w-xl font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
              {slide.description}
            </p>

            {/* Action Button & Extra Perk */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4">
              <button
                onClick={onShopClick}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-[#0066FF] hover:bg-blue-50 font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-xl hover:scale-102 active:scale-98 transition-all cursor-pointer group"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>

              <span className="text-[11px] sm:text-xs lg:text-sm font-medium text-blue-100 flex items-center gap-1 sm:gap-1.5 bg-black/15 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-xs">
                🏷️ {slide.badge}
              </span>
            </div>
          </div>

          {/* Right Product Showcase Graphic */}
          <div className="md:col-span-5 flex items-center justify-center relative mt-2 md:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 transform hover:scale-102 transition-transform duration-500 bg-white/5 backdrop-blur-xs">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black/25 hover:bg-black/45 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-20 border border-white/10"
          aria-label="Slide sebelumnya"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-black/25 hover:bg-black/45 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-20 border border-white/10"
          aria-label="Slide berikutnya"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlide 
                  ? 'w-5 sm:w-7 bg-white' 
                  : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
