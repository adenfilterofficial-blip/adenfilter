import { Droplet, Award, Wrench, ShieldCheck } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Droplet size={32} />,
      title: "Gratis Cek Kualitas Air",
      desc: "Kami pastikan Anda mendapat solusi yang tepat sesuai dengan rincian kondisi air di lokasi Anda."
    },
    {
      icon: <Award size={32} />,
      title: "Teknologi Media Terbaru",
      desc: "Filter kami menggunakan material dan media filtrasi kualitas terbaik industri untuk hasil seketika."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Layanan Purna Jual",
      desc: "Nikmati perlindungan garansi tabung resmi serta jaminan ketersediaan teknisi untuk perawatan terpadu."
    },
    {
      icon: <Wrench size={32} />,
      title: "Instalasi Profesional",
      desc: "Pengerjaan pipa dan filter ekstra rapi serta mulus yang diarsiteki langsung oleh tim pakar kami."
    }
  ];

  return (
    <section className="container section-padding">
      <h2 className="section-title">Kenapa Harus Aden Filter?</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="glass-panel feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
