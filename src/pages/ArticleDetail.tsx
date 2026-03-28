import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import articles from '../articles.json';

export const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <section className="container section-padding" style={{ paddingTop: '8rem', minHeight: '80vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Artikel Tidak Ditemukan</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Maaf, artikel yang Anda cari tidak tersedia.</p>
        <Link to="/artikel" className="hero-cta" style={{ display: 'inline-block' }}>Kembali ke Daftar Artikel</Link>
      </section>
    );
  }

  // Get related articles (same category, exclude current)
  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <section className="container section-padding" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <Link to="/artikel" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Kembali ke Daftar Artikel
      </Link>

      <article className="article-detail">
        {/* Hero Image */}
        <div className="article-detail-hero">
          <img src={article.image} alt={article.title} loading="eager" width={1200} height={500} />
        </div>

        {/* Meta */}
        <div className="article-detail-meta">
          <span className="article-detail-category">
            <Tag size={14} /> {article.category}
          </span>
          <span className="article-detail-date">
            <Calendar size={14} /> {article.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="article-detail-title">{article.title}</h1>

        {/* Content */}
        <div className="article-detail-body">
          {article.content.map((paragraph, idx) => {
            // Support bold markdown-style (**text**)
            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={idx}>
                {parts.map((part, pIdx) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
                  }
                  return <span key={pIdx}>{part}</span>;
                })}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="article-detail-cta glass-panel">
          <h3>Butuh Konsultasi tentang Filter Air?</h3>
          <p>Tim ahli AdenFilter® siap membantu Anda menemukan solusi terbaik untuk kebutuhan air bersih.</p>
          <a href="https://wa.me/6281294139384?text=Halo%20AdenFilter%2C%20saya%20ingin%20konsultasi%20tentang%20filter%20air" target="_blank" rel="noopener noreferrer" className="hero-cta" style={{ display: 'inline-block' }}>
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="article-related">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--primary-dark)' }}>Artikel Lainnya</h2>
          <div className="article-grid">
            {relatedArticles.map(related => (
              <div key={related.id} className="article-card glass-panel">
                <div className="article-img-wrapper">
                  <img src={related.image} alt={related.title} className="article-img" loading="lazy" width={600} height={220} />
                </div>
                <div className="article-content">
                  <h3 className="article-title">{related.title}</h3>
                  <p className="article-snippet">{related.snippet}</p>
                  <Link to={`/artikel/${related.slug}`} className="article-link">Baca Selengkapnya &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
