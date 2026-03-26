import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const allGalleryPhotos = [
  "https://images.unsplash.com/photo-1585704146757-bc0c2fdb8afc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1510525695844-486a2ffdb81d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1582234372722-50d7cec426ee?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1548842525-2b4de09087ea?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519781541467-f70dafb0a2ea?auto=format&fit=crop&q=80&w=800"
];

export const Gallery = () => {
  return (
    <section className="container section-padding" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Kembali ke Beranda
      </Link>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Galeri Instalasi Lapangan</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Dokumentasi hasil pengerjaan tim Aden Filter di berbagai lokasi komersial dan rumah tangga.</p>
      </div>
      
      <div className="gallery-grid">
        {allGalleryPhotos.map((img, i) => (
          <img key={i} src={img} alt={`Dokumentasi Aden Filter ${i+1}`} className="gallery-grid-img" loading="lazy" />
        ))}
      </div>
    </section>
  );
};
