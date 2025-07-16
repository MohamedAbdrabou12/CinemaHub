/**
 * Hero Slider Component
 * Featured movies carousel that:
 * - Auto-plays slides with smooth transitions
 * - Supports manual navigation (prev/next)
 * - Shows movie details and rating
 * - Responsive design for all screen sizes
 * - Includes play button and movie actions
 */
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

// Sample slides data for the hero section
const slides = [
  {
    id: 1,
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc on Gotham City, Batman must accept one of the greatest psychological and physical tests.",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    rating: "9.0",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    id: 2,
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    image: "https://images.pexels.com/photos/8263594/pexels-photo-8263594.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    rating: "8.8",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "https://images.pexels.com/photos/8983035/pexels-photo-8983035.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    rating: "8.6",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: 4,
    title: "Dune",
    description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding.",
    image: "https://images.pexels.com/photos/7991440/pexels-photo-7991440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    rating: "8.2",
    trailerUrl: "https://www.youtube.com/embed/8g18jFHCLXk"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!showTrailer) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [showTrailer]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto animate-fade-in-up">
                    {slide.description}
                  </p>
                  <div className="flex items-center justify-center space-x-4 mb-8">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                      ⭐ {slide.rating}
                    </span>
                    <button
                      onClick={() => setShowTrailer(true)}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors group"
                    >
                      <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">Watch Trailer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                  ? 'bg-blue-600 w-8'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`${slides[currentSlide].trailerUrl}?autoplay=1`}
                title={`${slides[currentSlide].title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSlider;