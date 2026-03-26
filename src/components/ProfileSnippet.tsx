import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ProfileSnippet = () => {
  return (
    <section className="container section-padding" style={{ paddingBottom: '2rem' }}>
      <div className="profile-snippet-layout">
        <div className="profile-snippet-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.2rem' }}>Pakar Penjernih Air Terpercaya di Bogor & Sekitarnya</h2>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'rgba(56, 189, 248, 0.1)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <ShieldCheck size={24} color="var(--primary-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ color: 'var(--primary-dark)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
              <strong>AdenFilter®</strong> adalah merk dagang resmi yang telah terdaftar di Direktorat Jenderal Kekayaan Intelektual (HAKI) di bawah manajemen CV. Rasa Filter Indonesia.
            </p>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Berawal dari kepedulian terhadap kualitas air bersih untuk rumah tangga dan industri, kami hadir memberikan solusi filtrasi air yang teruji klinis dan tahan lama. Kami tidak sekadar menjual alat, melainkan memberikan ketenangan pikiran bagi setiap keluarga.
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
            {['Teknisi Berpengalaman & Profesional', 'Material Tabung & Media Berkualitas Tinggi', 'Purna Jual & Garansi Terjamin'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--text-main)', fontWeight: 500 }}>
                <CheckCircle2 color="var(--primary-blue)" size={20} /> {item}
              </li>
            ))}
          </ul>
          <Link to="/tentang-kami" className="hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem' }}>
            Kenali Kami Lebih Dekat <ArrowRight size={18} />
          </Link>
        </div>
        <div className="profile-snippet-image">
          <img src="https://images.unsplash.com/photo-1581092921461-7031e4bf0e5f?auto=format&fit=crop&w=800&q=80" alt="Workshop Aden Filter" className="profile-img" loading="lazy" />
          <div className="experience-badge glass-panel">
            <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-dark)' }}>10+</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tahun<br/>Pengalaman</span>
          </div>
        </div>
      </div>
    </section>
  );
};
