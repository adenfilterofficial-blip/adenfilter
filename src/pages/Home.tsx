import { HeroCarousel } from '../components/HeroCarousel';
import { Features } from '../components/Features';
import { ProfileSnippet } from '../components/ProfileSnippet';
import { ProblemSolution } from '../components/ProblemSolution';
import { Testimonials } from '../components/Testimonials';
import { ArticlePreview } from '../components/ArticlePreview';
import { GallerySlider } from '../components/GallerySlider';
import { ProductCard } from '../components/ProductCard';
import { Packages } from '../components/Packages';
import { Link } from 'react-router-dom';

export const Home = ({ contact, products }: { contact: any, products: any[] }) => {
  const topProducts = products.slice(0, 3);

  return (
    <>
      <HeroCarousel ctaLink={contact.whatsapp_link} />
      
      <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '2rem', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '2rem', textAlign: 'center', gap: '1rem', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)' }}>1.000+</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>Instalasi Sukses</div>
          </div>
          <div style={{ width: '1px', backgroundColor: 'rgba(0,0,0,0.1)' }} className="hide-on-mobile"></div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)' }}>15+ Tahun</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>Pengalaman</div>
          </div>
          <div style={{ width: '1px', backgroundColor: 'rgba(0,0,0,0.1)' }} className="hide-on-mobile"></div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)' }}>10 Tahun</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>Garansi Tabung</div>
          </div>
        </div>
      </div>

      <div className="home-section"><Features /></div>
      <div className="home-section"><ProfileSnippet /></div>
      
      <section className="container section-padding home-section">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Produk Unggulan</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Sistem filter air premium terbaik pilihan pelanggan kami.</p>
        </div>
        <div className="product-grid">
          {topProducts.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              capacity={product.capacity_per_day_liters}
              features={product.features}
              prices={product.prices}
              image={product.images && product.images[0] ? product.images[0] : undefined}
            />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
           <Link to="/produk" className="hero-cta" style={{ display: 'inline-block' }}>Lihat Seluruh Katalog Produk</Link>
        </div>
      </section>

      <div className="home-section"><ProblemSolution /></div>
      <div className="home-section"><Packages /></div>
      <div className="home-section"><Testimonials /></div>
      <div className="home-section"><ArticlePreview /></div>
      <div className="home-section"><GallerySlider /></div>
    </>
  );
};
