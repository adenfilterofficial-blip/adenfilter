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
import { CheckCircle, Calendar, MapPin, ShieldCheck } from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const StatCounter = ({ value, label, icon: Icon, suffix = "" }: { value: number, label: string, icon: any, suffix?: string }) => {
  const count = useMotionValue(0);
  const formattedCount = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2 });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="stat-item" 
      style={{ flex: '1', minWidth: '200px', padding: '1.5rem', textAlign: 'center' }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          style={{ padding: '0.75rem', backgroundColor: 'rgba(29, 78, 216, 0.1)', borderRadius: '12px', color: '#1d4ed8' }}
        >
          <Icon size={28} />
        </motion.div>
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
        <motion.span>{formattedCount}</motion.span>{suffix}
      </div>
      <div style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>{label}</div>
    </motion.div>
  );
};

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
          <StatCounter value={5000} label="Instalasi Sukses" icon={CheckCircle} suffix="+" />
          <StatCounter value={15} label="Tahun Pengalaman" icon={Calendar} suffix="+" />
          <StatCounter value={2} label="Kantor Cabang" icon={MapPin} />
          <StatCounter value={100} label="Garansi Kepuasan" icon={ShieldCheck} suffix="%" />
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
