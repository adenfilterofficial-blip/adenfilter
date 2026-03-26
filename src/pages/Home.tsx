import { lazy, Suspense } from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { Features } from '../components/Features';
import { ProfileSnippet } from '../components/ProfileSnippet';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, MapPin, ShieldCheck } from 'lucide-react';

// Lazy load below-fold heavy components to reduce initial JS bundle
const ProblemSolution = lazy(() => import('../components/ProblemSolution').then(m => ({ default: m.ProblemSolution })));
const Testimonials = lazy(() => import('../components/Testimonials').then(m => ({ default: m.Testimonials })));
const ArticlePreview = lazy(() => import('../components/ArticlePreview').then(m => ({ default: m.ArticlePreview })));
const GallerySlider = lazy(() => import('../components/GallerySlider').then(m => ({ default: m.GallerySlider })));
const Packages = lazy(() => import('../components/Packages').then(m => ({ default: m.Packages })));

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
    {children}
  </Suspense>
);

const StatItem = ({ value, label, icon: Icon, suffix = "" }: { value: string, label: string, icon: any, suffix?: string }) => (
  <div className="stat-item" style={{ flex: '1', minWidth: '140px', padding: '1.5rem', textAlign: 'center' }}>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
      <div style={{ padding: '0.75rem', backgroundColor: 'rgba(29, 78, 216, 0.1)', borderRadius: '12px', color: '#1d4ed8' }}>
        <Icon size={28} />
      </div>
    </div>
    <div style={{ 
      fontSize: '2.5rem', 
      fontWeight: 800, 
      marginBottom: '0.25rem',
      background: 'linear-gradient(to right, #1d4ed8, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}>
      {value}{suffix}
    </div>
    <div style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>{label}</div>
  </div>
);

export const Home = ({ contact, products }: { contact: any, products: any[] }) => {
  const topProducts = products.slice(0, 3);

  return (
    <>
      <HeroCarousel ctaLink={contact.whatsapp_link} />

      <div className="container" style={{ position: 'relative', zIndex: 10, padding: '5rem 0' }}>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          backgroundColor: '#ffffff', 
          borderRadius: '24px', 
          boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)', 
          border: '1px solid rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}>
          <StatItem value="5.000" label="Instalasi Sukses" icon={CheckCircle} suffix="+" />
          <StatItem value="15" label="Tahun Pengalaman" icon={Calendar} suffix="+" />
          <StatItem value="2" label="Kantor Cabang" icon={MapPin} />
          <StatItem value="100" label="Garansi Kepuasan" icon={ShieldCheck} suffix="%" />
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

      <LazySection><div className="home-section"><ProblemSolution /></div></LazySection>
      <LazySection><div className="home-section"><Packages /></div></LazySection>
      <LazySection><div className="home-section"><Testimonials /></div></LazySection>
      <LazySection><div className="home-section"><ArticlePreview /></div></LazySection>
      <LazySection><div className="home-section"><GallerySlider /></div></LazySection>
    </>
  );
};
