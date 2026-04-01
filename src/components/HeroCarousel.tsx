import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const slides = [
  {
    image: "/assets/images/hero-slide-1.jpg",
    title: "Air Kuning, Bau Besi, atau Berkapur? Selesai dalam 1x Instalasi!",
    subtitle: "Solusi Air Bersih Terpercaya • Terdaftar HAKI • Gratis Konsultasi & Cek Kualitas Air.",
    overlayBg: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)",
    desktopObjectPosition: "center",
    mobileObjectPosition: "75% center"
  },
  {
    image: "/assets/images/hero-slide-2.jpg",
    title: "Teknologi Media Carbon & Resin Import",
    subtitle: "Filtrasi maksimal untuk air bening, bebas kuman, dan tidak meninggalkan noda pada peralatan rumah tangga.",
    overlayBg: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)",
    desktopObjectPosition: "center",
    mobileObjectPosition: "center"
  },
  {
    image: "/assets/images/hero-slide-3.jpg",
    title: "Melayani Aceh hingga Papua, Pusat di Tangsel & Jogja",
    subtitle: "Sudah dipercaya lebih dari 5.000+ pelanggan residensial dan industri di seluruh Indonesia.",
    overlayBg: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)",
    desktopObjectPosition: "center",
    mobileObjectPosition: "center"
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
        <div 
          key={index} 
          className={`hero-slide ${index === current ? 'active' : ''}`}
          style={{
            '--desktop-bg-pos': slide.desktopObjectPosition || 'center',
            '--mobile-bg-pos': slide.mobileObjectPosition || 'center'
          } as React.CSSProperties}
        >
          <img
            src={slide.image}
            alt="Hero Background"
            className="hero-bg-img"
            width={1920}
            height={1080}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : ("low" as any)}
          />
          <div className="hero-overlay" style={{ background: slide.overlayBg }}></div>
          <div className="hero-content">
            <h1 className="hero-slide-title">{slide.title}</h1>
            
            {index === 0 && (
              <div className="hero-badge">
                <Shield size={16} color="var(--primary-color, #fff)" />
                <span>Brand Terdaftar Resmi HAKI</span>
              </div>
            )}

            {slide.subtitle && (
              <p className="hero-slide-subtitle">
                {slide.subtitle}
              </p>
            )}

            <div className="hero-cta-group">
              <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="hero-cta wa-cta">
                Konsultasi Gratis (WA)
              </a>
              <Link to="/produk" className="hero-cta outline-cta">
                Lihat Katalog Produk
              </Link>
            </div>
          </div>
        </div>
      ))}

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
