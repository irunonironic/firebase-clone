import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Card */}
      <Card title={slides[current].title} img={slides[current].img} />

      {/* Controls */}
      <div className="flex items-center justify-between w-full max-w-sm mt-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 shadow bg-white hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 shadow bg-white hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-gray-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
