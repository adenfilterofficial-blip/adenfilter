import { HeroCarousel } from '../components/HeroCarousel';
import { Features } from '../components/Features';
import { ProfileSnippet } from '../components/ProfileSnippet';
import { ProblemSolution } from '../components/ProblemSolution';
import { Testimonials } from '../components/Testimonials';
import { ArticlePreview } from '../components/ArticlePreview';
import { GallerySlider } from '../components/GallerySlider';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';

export const Home = ({ contact, products }: { contact: any, products: any[] }) => {
  const topProducts = products.slice(0, 3);

  return (
    <>
      <HeroCarousel ctaLink={contact.whatsapp_link} />
      <Features />
      <ProfileSnippet />
      
      <section className="container section-padding">
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

      <ProblemSolution />
      <Testimonials />
      <ArticlePreview />
      <GallerySlider />
    </>
  );
};
