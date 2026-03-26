import { Link } from 'react-router-dom';

const galleryPhotos = [
  "https://images.unsplash.com/photo-1585704146757-bc0c2fdb8afc?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1510525695844-486a2ffdb81d?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"
];

export const GallerySlider = () => {
  return (
    <section className="container section-padding" style={{ paddingBottom: '3rem' }}>
      <h2 className="section-title">Dokumentasi Instalasi Lapangan</h2>
      <div className="gallery-slider">
        {galleryPhotos.map((img, i) => (
          <img key={i} src={img} alt={`Instalasi ${i+1}`} className="gallery-slide-img" loading="lazy" />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/galeri" className="hero-cta" style={{ display: 'inline-block' }}>Lihat Galeri Selengkapnya</Link>
      </div>
    </section>
  );
};
