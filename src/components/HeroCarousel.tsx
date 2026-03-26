import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&q=80&w=1920",
    title: "Air Jernih & Sehat untuk Keluarga Tercinta"
  },
  {
    image: "https://images.unsplash.com/photo-1585704146757-bc0c2fdb8afc?auto=format&fit=crop&q=80&w=1920",
    title: "Teknologi Filter Air Modern & Tahan Lama"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
    title: "Solusi Air Bersih Skala Besar untuk Bisnis Anda"
  }
];

export const HeroCarousel: React.FC<{ ctaLink: string }> = ({ ctaLink }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="hero-carousel">
      {slides.map((slide, index) => (
        <div key={index} className={`hero-slide ${index === current ? 'active' : ''}`}>
          <img 
            src={slide.image} 
            alt="Hero Background" 
            className="hero-bg-img" 
            loading={index === 0 ? "eager" : "lazy"} 
            fetchPriority={index === 0 ? "high" : ("low" as any)}
          />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-slide-title">{slide.title}</h1>
          </div>
        </div>
      ))}
      
      <div className="hero-static-cta">
         <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="hero-cta">Konsultasi Gratis Via WA</a>
      </div>

      <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous">❮</button>
      <button className="carousel-control next" onClick={nextSlide} aria-label="Next">❯</button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
