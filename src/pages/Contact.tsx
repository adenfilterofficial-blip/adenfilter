import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Clock, Mail } from 'lucide-react';

export const Contact = ({ contact }: { contact: any }) => {
  return (
    <section className="container section-padding" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <Link to="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Kembali ke Beranda
      </Link>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hubungi Aden Filter</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Konsultasikan masalah air Anda secara gratis. Tim pakar kami siap memberikan solusi terbaik langsung ke lokasi Anda.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info-panel glass-panel">
          <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '2rem' }}>Informasi Kontak</h3>
          
          <div className="contact-item">
            <div className="contact-icon"><MapPin size={24} /></div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Alamat Workshop</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>Jl. Lingkar Selatan KM.1, Baru, Muncul,<br/>Kec. Setu, Kota Tangerang Selatan, Banten 15314.</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><Phone size={24} /></div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Telepon & WhatsApp</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                 CS 1: <a href="https://wa.me/6281294139384" target="_blank" rel="noreferrer" style={{color: 'var(--primary-blue)', textDecoration: 'none'}}>0812-9413-9384</a><br/>
                 CS 2: <a href="https://wa.me/6281907840248" target="_blank" rel="noreferrer" style={{color: 'var(--primary-blue)', textDecoration: 'none'}}>0819-0784-0248</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><Mail size={24} /></div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                 <a href="mailto:adeniahmad@gmail.com" target="_blank" rel="noreferrer" style={{color: 'var(--primary-blue)', textDecoration: 'none'}}>adeniahmad@gmail.com</a><br/>
                 <a href="mailto:ridwanadli@gmail.com" target="_blank" rel="noreferrer" style={{color: 'var(--primary-blue)', textDecoration: 'none'}}>ridwanadli@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><Clock size={24} /></div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Jam Operasional</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>Setiap Hari, Pukul 08.00 - 17.00 WIB</p>
            </div>
          </div>

          <a href={contact.whatsapp_link} target="_blank" rel="noreferrer" className="hero-cta" style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}>
            Konsultasi Sekarang via WhatsApp
          </a>
        </div>

        <div className="contact-map glass-panel">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15861.48342010145!2d106.670336!3d-6.345999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e56387fa1075%3A0xb3b74ff25cde04c5!2sCv.%20Rasa%20Filter%20Indonesia!5e0!3m2!1sen!2sus!4v1774481706025!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '12px', minHeight: '400px' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Aden Filter"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
