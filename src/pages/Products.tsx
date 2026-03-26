import { ProductCard } from '../components/ProductCard';

export const Products = ({ products, backwash }: { products: any[], backwash: any }) => {
  return (
    <section className="container section-padding" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Katalog Produk Lengkap</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Seluruh lini produk Aden Filter yang didesain khusus untuk mengatasi berbagai permasalahan air Anda secara efisien.</p>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
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

      <div className="glass-panel" style={{ padding: '3rem', margin: '5rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Manual Backwash</h3>
          <p style={{ lineHeight: 1.6 }}>{backwash.manual}</p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Automatic Backwash</h3>
          <p style={{ lineHeight: 1.6 }}>{backwash.automatic}</p>
        </div>
      </div>
    </section>
  );
};
