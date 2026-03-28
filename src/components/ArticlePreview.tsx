import { Link } from 'react-router-dom';
import articles from '../articles.json';

export const ArticlePreview = () => {
  // Show the 3 most recent articles
  const previewArticles = articles.slice(0, 3);

  return (
    <section className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Edukasi & Artikel</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Panduan dan informasi mendalam seputar instalasi, perawatan, dan kualitas air minum terbaik.</p>
      </div>
      <div className="article-grid">
        {previewArticles.map(article => (
          <div key={article.id} className="article-card glass-panel">
            <div className="article-img-wrapper">
              <img src={article.image} alt={article.title} className="article-img" loading="lazy" width={600} height={220} />
            </div>
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-snippet">{article.snippet}</p>
              <Link to={`/artikel/${article.slug}`} className="article-link">Baca Selengkapnya &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/artikel" className="hero-cta" style={{ display: 'inline-block' }}>Baca Artikel Lainnya</Link>
      </div>
    </section>
  );
};
