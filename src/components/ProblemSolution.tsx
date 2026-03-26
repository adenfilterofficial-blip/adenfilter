import { Link } from 'react-router-dom';

export const ProblemSolution = () => {
  const problems = [
    { title: "Air Kuning & Berkarat", desc: "Kandungan Zat Besi (Fe) & Mangan tinggi yang merusak perabot.", img: "https://images.unsplash.com/photo-1582234372722-50d7cec426ee?auto=format&fit=crop&q=80&w=600" },
    { title: "Air Berbau & Keruh", desc: "Terkontaminasi zat organik, klorin berlebih, atau lumpur.", img: "https://images.unsplash.com/photo-1548842525-2b4de09087ea?auto=format&fit=crop&q=80&w=600" },
    { title: "Air Berkapur", desc: "Deposit kotoran putih (White Scales) menempel keras pada pipa.", img: "https://images.unsplash.com/photo-1510525695844-486a2ffdb81d?auto=format&fit=crop&q=80&w=600" },
    { title: "Air Berlumut/Bakteri", desc: "Paparan kuman yang sangat berbahaya jika dikonsumsi harian.", img: "https://images.unsplash.com/photo-1519781541467-f70dafb0a2ea?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <section className="container section-padding">
      <h2 className="section-title">Solusi Untuk Masalah Air Anda</h2>
      <div className="problem-grid">
        {problems.map((p, i) => (
          <div key={i} className="problem-card glass-panel" style={{ overflow: 'hidden' }}>
            <img src={p.img} alt={p.title} className="problem-img" />
            <div className="problem-content">
              <h3 className="problem-title">{p.title}</h3>
              <p className="problem-desc">{p.desc}</p>
              <Link to="/produk" className="problem-btn">Lihat Solusi</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
