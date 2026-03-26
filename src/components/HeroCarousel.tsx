import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const slides = [
  {
    image: "/assets/images/hero-slide-1.jpg",
    title: "Air Kuning, Bau Besi, atau Berkapur? Selesai dalam 1x Instalasi!",
    subtitle: "Solusi Air Bersih Terpercaya • Terdaftar HAKI • Gratis Konsultasi & Cek Kualitas Air.",
    overlayBg: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)"
  },
  {
    image: "/assets/images/hero-slide-2.jpg",
    title: "Teknologi Media Carbon & Resin Import",
    subtitle: "Filtrasi maksimal untuk air bening, bebas kuman, dan tidak meninggalkan noda pada peralatan rumah tangga.",
    overlayBg: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)"
  },
  {
    image: "/assets/images/hero-slide-3.jpg",
    title: "Melayani Aceh hingga Papua, Pusat di Tangsel & Jogja",
    subtitle: "Sudah dipercaya lebih dari 1.000+ pelanggan residensial dan industri di seluruh Indonesia.",
    overlayBg: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)"
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
          <div className="hero-overlay" style={{ background: slide.overlayBg }}></div>
          <div className="hero-content" style={{ padding: '120px 1.5rem 60px', width: '100%', top: '45%' }}>
            {index === 0 && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.15)', padding: '0.4rem 1rem', borderRadius: '50px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
                <Shield size={16} color="var(--primary-color, #fff)" />
                <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>Brand Terdaftar Resmi HAKI</span>
              </div>
            )}
            <h1 className="hero-slide-title" style={{ marginBottom: '1rem' }}>{slide.title}</h1>
            {slide.subtitle && (
              <p style={{ fontSize: '1.2rem', color: '#e2e8f0', maxWidth: '800px', margin: '0 auto 2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                {slide.subtitle}
              </p>
            )}
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', pointerEvents: 'auto', flexWrap: 'wrap' }}>
               <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="hero-cta" style={{ backgroundColor: '#25D366', color: '#fff' }}>
                 Konsultasi Gratis (WA)
               </a>
               <Link to="/produk" className="hero-cta" style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '2px solid #fff', color: '#fff', backdropFilter: 'blur(4px)' }}>
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
