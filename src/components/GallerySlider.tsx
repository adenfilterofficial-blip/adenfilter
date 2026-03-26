import { Link } from 'react-router-dom';

const galleryPhotos = [
  "/assets/images/gallery-1.jpg",
  "/assets/images/gallery-2.jpg",
  "/assets/images/gallery-3.jpg",
  "/assets/images/gallery-4.jpg",
  "/assets/images/gallery-5.jpg"
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
