import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Shield, Map } from 'lucide-react';

export const About = () => {
  return (
    <section className="container section-padding" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Kembali ke Beranda
      </Link>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Tentang Aden Filter</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
          Aden Filter, yang dikelola secara legal di bawah naungan CV. Rasa Filter Indonesia, adalah pelopor solusi penjernihan air terintegrasi yang berdedikasi tinggi untuk menghadirkan kualitas air bersih standar premium bagi seluruh lapisan masyarakat.
        </p>
      </div>

      <div className="profile-snippet-layout" style={{ marginBottom: '5rem', alignItems: 'center' }}>
        <img src="https://images.unsplash.com/photo-1581092921461-7031e4bf0e5f?auto=format&fit=crop&w=1000&q=80" alt="Tim Aden Filter" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        <div>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>Sejarah & Dedikasi Kami</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            Berdiri sejak lebih dari satu dekade lalu dengan langkah awal di Setu, Kota Tangerang Selatan, AdenFilter® lahir dari pengamatan mendalam terhadap krisis kualitas air konsumsi dan sanitasi. Kami memulai dengan misi sederhana: setiap rumah berhak atas air yang tidak berwarna, tidak berbau, dan aman untuk kesehatan keluarga.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            Seiring tingginya kepercayaan masyarakat, kami terus melakukan ekspansi. Kini kami telah hadir dan memiliki Kantor Cabang di Kota Yogyakarta guna melayani langsung kebutuhan air bersih masyarakat di wilayah Jawa Tengah dan sekitarnya.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Dengan legalitas CV. Rasa Filter Indonesia, <strong>jangkauan layanan kami mencakup seluruh Indonesia, dari Aceh hingga Papua</strong>, dengan basis pelanggan terbesar yang terus bertumbuh di wilayah Jabodetabek.
          </p>
          
          <div style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'var(--primary-dark)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '50px', fontWeight: 600, boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)' }}>
            <Map size={20} /> Melayani Pengiriman & Instalasi ke Seluruh Indonesia
          </div>
        </div>
      </div>

      <div className="features-grid" style={{ marginBottom: '4rem' }}>
        <div className="feature-card glass-panel" style={{ textAlign: 'left', padding: '2rem' }}>
          <Eye className="feature-icon" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Visi Perusahaan</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Menjadi penyedia solusi filtrasi air paling terpercaya di Indonesia yang menggabungkan inovasi teknologi dengan layanan pelanggan terbaik yang berkelanjutan.</p>
        </div>
        <div className="feature-card glass-panel" style={{ textAlign: 'left', padding: '2rem' }}>
          <Target className="feature-icon" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Misi Kami</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Menghadirkan sistem penjernihan air yang efektif dan efisien, memberikan edukasi perawatan air kepada masyarakat, serta menjamin ketersediaan spare-part dan teknisi kapanpun dibutuhkan.</p>
        </div>
        <div className="feature-card glass-panel" style={{ textAlign: 'left', padding: '2rem' }}>
          <Shield className="feature-icon" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Nilai Inti (Core Values)</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Harga yang jujur, ketepatan waktu instalasi, profesionalisme teknisi lapangan, dan dedikasi penuh pada layanan purna jual (after-sales service).</p>
        </div>
      </div>
    </section>
  );
};
