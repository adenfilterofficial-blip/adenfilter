import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "5 Ciri Air di Rumah Anda Mengandung Zat Besi Tinggi",
    snippet: "Air kuning, berbau tak sedap, hingga bercak karat pada pakaian adalah tanda utama resiko kesehatan dari zat besi tinggi.",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Perbedaan Filter Air Manual vs Otomatis: Mana yang Lebih Hemat?",
    snippet: "Pelajari perbedaan mendasar pada sistem backwash manual dan kepala otomatis untuk menentukan efisiensi dan kemudahan jangka panjang.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Cara Mudah Merawat Media Filter Air Agar Awet Bertahun-tahun",
    snippet: "Siklus backwash yang rutin dan penggantian media berkala menjadi rahasia utama umur panjang filter air Anda. Simak panduannya.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
  }
];

export const ArticlePreview = () => {
  return (
    <section className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Edukasi & Artikel</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Panduan dan informasi mendalam seputar instalasi, perawatan, dan kualitas air minum terbaik.</p>
      </div>
      <div className="article-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card glass-panel">
            <div className="article-img-wrapper">
              <img src={article.image} alt={article.title} className="article-img" loading="lazy" width={600} height={220} />
            </div>
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-snippet">{article.snippet}</p>
              <Link to="/artikel" className="article-link">Baca Selengkapnya &rarr;</Link>
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
