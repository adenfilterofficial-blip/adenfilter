export const Testimonials = () => {
  const tests = [
    { quote: "Air di rumah kami semula bau besi sangat menyengat. Sehari sesudah dipasang Aden Filter sumur kami langsung jernih total dan segar untuk dipakai mandi dan cuci!", name: "Kel. Bpk. Sudirman", location: "Perumahan Bekasi", image: "/assets/images/testi-budi-tangerang.jpg" },
    { quote: "Air di BSD yang tadinya kuning karat, sekarang jernih total. Pelayanan AdenFilter sangat rapi!", name: "Pak Budi", location: "Tangerang", image: "/assets/images/testi-budi-tangerang.jpg" },
    { quote: "Saya paling puas dengan garansinya. Waktu ada kendala kecil, teknisi datang begitu cepat walau sekadar untuk pengecekan rutin dan dibantu gratis.", name: "Ibu Ratna Dewi", location: "Sentul City, Bogor", image: "/assets/images/testi-budi-tangerang.jpg" }
  ];
  
  return (
    <section className="container section-padding" style={{ paddingBottom: '7rem' }}>
      <h2 className="section-title">Testimoni Klien & Pelanggan</h2>
      <div className="testi-grid">
        {tests.map((t, i) => (
          <div key={i} className="glass-panel testi-card">
            <div className="testi-quote">"{t.quote}"</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={t.image} alt={t.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary-color)' }} />
              <div className="testi-author">
                <strong style={{ color: 'var(--primary-dark)' }}>{t.name}</strong><br/>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
