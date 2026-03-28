import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Droplets, PenTool, ShieldQuestion, Wrench } from 'lucide-react';
import articles from '../articles.json';

// Map category names to icons
const categoryIcons: Record<string, typeof BookOpen> = {
  'Edukasi Air': Droplets,
  'Tips Produk': ShieldQuestion,
  'Perawatan': PenTool,
  'Kasus Lapangan': Wrench,
};

export const Articles = () => {
  const [activeCategory, setActiveCategory] = useState('Semua Artikel');

  // Build categories dynamically from data
  const categoryCounts = articles.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = [
    { name: 'Semua Artikel', icon: BookOpen, count: articles.length },
    ...Object.entries(categoryCounts).map(([name, count]) => ({
      name,
      icon: categoryIcons[name] || BookOpen,
      count,
    }))
  ];

  // Filter articles by active category
  const filteredArticles = activeCategory === 'Semua Artikel'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <section className="container section-padding" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Kembali ke Beranda
      </Link>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Edukasi & Artikel</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Pusat informasi komprehensif untuk memastikan keluarga dan bisnis Anda selalu mendapatkan air bersih standar premium.</p>
      </div>
      
      <div className="articles-layout">
        {/* Sidebar Kategori */}
        <aside className="articles-sidebar">
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--primary-dark)' }}>Kategori Topik</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <li key={idx} style={{ marginBottom: '1rem' }}>
                    <button
                      className={`category-btn ${activeCategory === cat.name ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.name)}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Icon size={18} /> {cat.name}</span>
                      <span className="category-count">{cat.count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Daftar Artikel Utama */}
        <div className="articles-feed">
          {filteredArticles.length === 0 ? (
            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Belum ada artikel di kategori ini.</p>
            </div>
          ) : (
            filteredArticles.map(article => (
              <div key={article.id} className="article-card glass-panel list-view">
                <div className="article-img-wrapper">
                  <img src={article.image} alt={article.title} className="article-img" loading="lazy" width={600} height={220} />
                </div>
                <div className="article-content" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{article.category}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{article.date}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-snippet" style={{ flexGrow: 1 }}>{article.snippet}</p>
                  <Link to={`/artikel/${article.slug}`} className="article-link" style={{ marginTop: '1rem', display: 'inline-block' }}>Lanjut Membaca &rarr;</Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
