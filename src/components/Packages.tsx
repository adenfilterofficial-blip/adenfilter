import { Check } from 'lucide-react';

export const Packages = () => {
  const packages = [
    {
      name: "Basic (FRP 1054)",
      subtitle: "Cocok untuk rumah tangga kecil",
      features: ["Kapasitas 2000L/hari", "Menghilangkan Bau Besi", "Menghilangkan Air Kuning", "Garansi Tabung 10 Tahun"],
      popular: false
    },
    {
      name: "Standard (FRP 1354)",
      subtitle: "Pilihan favorit keluarga modern",
      features: ["Kapasitas 4000L/hari", "Filtrasi Lebih Cepat", "Menghilangkan Kaporit & Minyak", "Garansi Tabung 10 Tahun"],
      popular: true
    },
    {
      name: "Premium (FRP 1665 / 1865)",
      subtitle: "Untuk kebutuhan komersial / kos",
      features: ["Kapasitas 8000L - 12000L/hari", "Cocok untuk Debit Air Besar", "Bahan Lebih Tebal", "Garansi Tabung 10 Tahun"],
      popular: false
    }
  ];

  return (
    <section className="container section-padding" style={{ backgroundColor: 'rgba(248,250,252,0.5)', borderRadius: '24px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Paket Solusi Populer</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 600 }}>Tersedia berbagai pilihan. Harga mulai dari <span style={{ color: 'var(--primary-color)' }}>Rp 2.750.000</span></p>
      </div>
      
      <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {packages.map((pkg, i) => (
          <div key={i} className="glass-panel" style={{ position: 'relative', padding: '2rem', display: 'flex', flexDirection: 'column', border: pkg.popular ? '2px solid var(--primary-color)' : '1px solid rgba(255,255,255,0.7)', transform: pkg.popular ? 'scale(1.02)' : 'none', zIndex: pkg.popular ? 2 : 1 }}>
            {pkg.popular && (
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--primary-color)', color: 'white', padding: '0.2rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                PALING LAKU
              </div>
            )}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>{pkg.name}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{pkg.subtitle}</p>
            <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.05)', marginBottom: '1.5rem' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
              {pkg.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                  <Check size={18} color="var(--primary-color)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem' }}>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
