import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Droplets, PenTool, ShieldQuestion } from 'lucide-react';

export const Articles = () => {
  const articles = [
    {
      id: 1,
      category: 'Edukasi Air',
      title: "5 Ciri Air di Rumah Anda Mengandung Zat Besi Tinggi",
      snippet: "Air kuning, berbau tak sedap, hingga bercak karat pada pakaian adalah tanda utama resiko kesehatan dari zat besi tinggi.",
      image: "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=600&q=80",
      date: "12 Okt 2026"
    },
    {
      id: 2,
      category: 'Tips Produk',
      title: "Perbedaan Filter Air Manual vs Otomatis: Mana yang Lebih Hemat?",
      snippet: "Pelajari perbedaan mendasar pada sistem backwash manual dan kepala otomatis untuk menentukan efisiensi dan kemudahan jangka panjang.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      date: "05 Nov 2026"
    },
    {
      id: 3,
      category: 'Perawatan',
      title: "Cara Mudah Merawat Media Filter Air Agar Awet Bertahun-tahun",
      snippet: "Siklus backwash yang rutin dan penggantian media berkala menjadi rahasia utama umur panjang filter air Anda. Simak panduannya.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      date: "18 Nov 2026"
    },
    {
      id: 4,
      category: 'Kasus Lapangan',
      title: "Mengatasi Air Berkapur (White Scales) di Daerah Pegunungan",
      snippet: "Tips dan pengalaman lapangan mengatasi kerak putih pada perabotan akibat deposit kalsium dan magnesium pada air sumber.",
      image: "https://images.unsplash.com/photo-1510525695844-486a2ffdb81d?auto=format&fit=crop&w=600&q=80",
      date: "22 Des 2026"
    }
  ];

  const categories = [
    { name: 'Semua Artikel', icon: BookOpen, count: 12 },
    { name: 'Edukasi Air', icon: Droplets, count: 5 },
    { name: 'Perawatan', icon: PenTool, count: 4 },
    { name: 'Tips & Konsultasi', icon: ShieldQuestion, count: 3 }
  ];

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
                    <button className="category-btn">
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
          {articles.map(article => (
            <div key={article.id} className="article-card glass-panel list-view">
              <div className="article-img-wrapper">
                <img src={article.image} alt={article.title} className="article-img" loading="lazy" />
              </div>
              <div className="article-content" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{article.category}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{article.date}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-snippet" style={{ flexGrow: 1 }}>{article.snippet}</p>
                <Link to="/artikel" className="article-link" style={{ marginTop: '1rem', display: 'inline-block' }}>Lanjut Membaca &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
