export const Testimonials = () => {
  const tests = [
    { quote: "Air di rumah kami semula bau besi sangat menyengat. Sehari sesudah dipasang Aden Filter sumur kami langsung jernih total dan segar untuk dipakai mandi dan cuci!", name: "Kel. Bpk. Sudirman", location: "Perumahan Bekasi" },
    { quote: "Pelayanannya cepat ramah, dan hasil instalasinya sangat rapi. Kualitas air untuk produksi di pabrik kami sangat tertolong. Solusi terbaik komersial.", name: "PT. Maju Bersama", location: "Kawasan Industri Delta Cikarang" },
    { quote: "Saya paling puas dengan garansinya. Waktu ada kendala kecil, teknisi datang begitu cepat walau sekadar untuk pengecekan rutin dan dibantu gratis.", name: "Ibu Ratna Dewi", location: "Sentul City, Bogor" }
  ];
  
  return (
    <section className="container section-padding" style={{ paddingBottom: '7rem' }}>
      <h2 className="section-title">Testimoni Klien & Pelanggan</h2>
      <div className="testi-grid">
        {tests.map((t, i) => (
          <div key={i} className="glass-panel testi-card">
            <div className="testi-quote">"{t.quote}"</div>
            <div className="testi-author">
              <strong style={{ color: 'var(--primary-dark)' }}>{t.name}</strong><br/>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
