import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "/images/WhatsApp Image 2025-08-28 at 20.57.58 (1).jpeg",
    overlayText: {
      line1: "Live and Work",
      line2: "with Dignity,",
      line3: "Everywhere"
    }
  },
  {
    id: 2,
    image: "/images/WhatsApp Image 2025-08-28 at 20.57.58.jpeg",
    overlayText: {
      line1: "Live and Work",
      line2: "with Dignity,",
      line3: "Everywhere"
    }
  },
  {
    id: 3,
    image: "/images/WhatsApp Image 2025-08-28 at 21.09.32.jpeg",
    overlayText: {
      line1: "Live and Work",
      line2: "with Dignity,",
      line3: "Everywhere"
    }
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <img 
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load image: ${slide.image}`);
              console.error('Error details:', e);
            }}
          />
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Text Overlay - Left Side */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-md">
                <div className="text-white space-y-4">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
                    {slide.overlayText.line1}
                  </h1>
                  <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
                    {slide.overlayText.line2}
                  </h2>
                  <h3 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight text-orange-500">
                    {slide.overlayText.line3}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors duration-300 z-20 bg-black/20 hover:bg-black/40 p-3 rounded-full"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors duration-300 z-20 bg-black/20 hover:bg-black/40 p-3 rounded-full"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}