import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const allGalleryPhotos = [
  "/assets/images/gallery-1.jpg",
  "/assets/images/gallery-2.jpg",
  "/assets/images/gallery-3.jpg",
  "/assets/images/gallery-4.jpg",
  "/assets/images/gallery-5.jpg",
  "/assets/images/gallery-6.jpg",
  "/assets/images/gallery-7.jpg",
  "/assets/images/gallery-8.jpg"
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
