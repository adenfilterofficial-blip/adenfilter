import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Shield } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Gallery } from './pages/Gallery';
import { Articles } from './pages/Articles';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ContactCTA } from './components/ContactCTA';
import data from './products.json';
import './index.css';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar glass-panel" style={{ padding: '0.75rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" className="navbar-brand">
          {data.main_images && data.main_images[0] && (
             <img src={data.main_images[0]} alt="AdenFilter" style={{ height: '40px', objectFit: 'contain' }} />
          )}
          AdenFilter®
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Beranda</Link>
          <Link to="/produk" className={`nav-link ${location.pathname === '/produk' ? 'active' : ''}`}>Produk</Link>
          <Link to="/galeri" className={`nav-link ${location.pathname === '/galeri' ? 'active' : ''}`}>Galeri</Link>
          <Link to="/artikel" className={`nav-link ${location.pathname === '/artikel' ? 'active' : ''}`}>Artikel</Link>
          <Link to="/tentang-kami" className={`nav-link ${location.pathname === '/tentang-kami' ? 'active' : ''}`}>Tentang Kami</Link>
          <Link to="/kontak" className={`nav-link ${location.pathname === '/kontak' ? 'active' : ''}`}>Kontak</Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <h3 className="footer-brand">CV. Rasa Filter Indonesia<br/><small style={{fontSize: '0.9rem', color: '#94a3b8'}}>(Brand: AdenFilter®)</small></h3>
          <p className="footer-desc">Spesialis solusi perakitan dan instalasi penjernihan air terpercaya untuk skala residensial maupun industri dengan perlindungan garansi terbaik.</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Navigasi Utama</h4>
          <ul className="footer-links">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/produk">Katalog Produk</Link></li>
            <li><Link to="/galeri">Galeri Instalasi</Link></li>
            <li><Link to="/artikel">Artikel Edukasi</Link></li>
            <li><Link to="/tentang-kami">Tentang Kami</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Hubungi Kami</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} style={{ marginTop: '4px', flexShrink: 0 }} />
              <span>Jl. Lingkar Selatan KM.1, Baru, Muncul, Kec. Setu, Kota Tangerang Selatan, Banten 15314.</span>
            </li>
            <li>
              <Phone size={18} style={{ marginTop: '4px', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="https://wa.me/6281294139384">0812-9413-9384 (CS 1)</a>
                <a href="https://wa.me/6281907840248">0819-0784-0248 (CS 2)</a>
              </div>
            </li>
            <li>
              <Mail size={18} style={{ marginTop: '4px', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="mailto:adeniahmad@gmail.com">adeniahmad@gmail.com</a>
                <a href="mailto:ridwanadli@gmail.com">ridwanadli@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{ color: '#e2e8f0', fontWeight: 600, marginBottom: '1rem', fontSize: '1.05rem' }}>Pusat: Tangerang Selatan | Cabang: Yogyakarta</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Shield size={16} color="#94a3b8" />
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>© 2026 AdenFilter®. All Rights Reserved. Terdaftar di HAKI. Dikelola oleh CV. Rasa Filter Indonesia.</span>
        </div>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home contact={data.contact} products={data.products} />} />
            <Route path="/produk" element={<Products products={data.products} backwash={data.backwash} />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/artikel" element={<Articles />} />
            <Route path="/tentang-kami" element={<About />} />
            <Route path="/kontak" element={<Contact contact={data.contact} />} />
          </Routes>
        </main>
        <Footer />
        <ContactCTA whatsappLink={data.contact.whatsapp_link} />
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
}
