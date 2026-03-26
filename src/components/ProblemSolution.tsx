import { Link } from 'react-router-dom';

export const ProblemSolution = () => {
  const problems = [
    { title: "Air Kuning & Berkarat", desc: "Kandungan Zat Besi (Fe) & Mangan tinggi yang merusak perabot.", img: "/assets/images/water-problem-yellow.jpg" },
    { title: "Air Berbau & Keruh", desc: "Terkontaminasi zat organik, klorin berlebih, atau lumpur.", img: "/assets/images/water-problem-smell.jpg" },
    { title: "Air Berkapur", desc: "Deposit kotoran putih (White Scales) menempel keras pada pipa.", img: "/assets/images/water-problem-yellow.jpg" },
    { title: "Air Berlumut/Bakteri", desc: "Paparan kuman yang sangat berbahaya jika dikonsumsi harian.", img: "/assets/images/water-problem-smell.jpg" }
  ];

  return (
    <section className="container section-padding">
      <h2 className="section-title">Solusi Untuk Masalah Air Anda</h2>
      <div className="problem-grid">
        {problems.map((p, i) => (
          <div key={i} className="problem-card glass-panel" style={{ overflow: 'hidden' }}>
            <img src={p.img} alt={p.title} className="problem-img" loading="lazy" width={600} height={200} />
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
