import { useState, useEffect } from 'react';
import { Phone, Mail, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import wpIcon from '../assets/icons/wp1.png';
import igIcon from '../assets/icons/instagram.svg';
import './Navbar.css';

const navLinksLeft = [
  { key: 'nav.mardin', href: '#' },
  { key: 'nav.konak', href: '#hakkimizda' },
  { key: 'nav.vip', href: '#hizmetler' },
  { key: 'nav.odalar', href: '#odalar' },
];

const navLinksRight = [
  { key: 'nav.gastronomi', href: '#gastronomi' },
  { key: 'nav.galeri', href: '#galeri' },
  { key: 'nav.iletisim', href: '#iletisim' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}>
        {/* Top Bar */}
        <div className="navbar-topbar">
          <div className="navbar-topbar__inner">
            <div className="navbar-topbar__contacts">
              <a className="navbar-topbar__contact" href="tel:08503770882">
                <Phone size={12} />
                0 (850) 377 08 82
              </a>
              <a className="navbar-topbar__contact" href="tel:+905309298347">
                <Phone size={12} />
                +90 (530) 929 83 47
              </a>
              <a className="navbar-topbar__contact" href="mailto:terracemerdin@gmail.com">
                <Mail size={12} />
                terracemerdin@gmail.com
              </a>
            </div>
            <div className="navbar-topbar__right">
              <div className="navbar-topbar__social">
                <a href="https://wa.me/905309298347" target="_blank" rel="noopener noreferrer" className="navbar-topbar__social-link" title="WhatsApp">
                  <img src={wpIcon} alt="WhatsApp" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                </a>
                <a href="https://www.instagram.com/terracemerdinotel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="navbar-topbar__social-link" title="Instagram">
                  <img src={igIcon} alt="Instagram" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                </a>
              </div>
              <div className="navbar-topbar__lang">
                <span className={lang === 'TR' ? 'active' : ''} onClick={() => setLang('TR')} style={{ cursor: 'pointer' }}>TR</span>
                <span>|</span>
                <span className={lang === 'EN' ? 'active' : ''} onClick={() => setLang('EN')} style={{ cursor: 'pointer' }}>EN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="navbar-main">
          {/* Left Links */}
          <ul className="navbar-links">
            {navLinksLeft.map(link => (
              <li key={link.key} className="navbar-links__item">
                <a href={link.href}>{t(link.key)}</a>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <div className="navbar-logo">
            <div className="navbar-logo__inner">
              <span className="navbar-logo__ornament">✦</span>
              <div className="navbar-logo__name">TERRACE MARDİN</div>
              <div className="navbar-logo__subtitle">{t('nav.subtitle')}</div>
            </div>
          </div>

          {/* Right Links */}
          <ul className="navbar-links navbar-links--right">
            {navLinksRight.map(link => (
              <li key={link.key} className="navbar-links__item">
                <a href={link.href}>{t(link.key)}</a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button className="navbar-mobile-toggle" onClick={() => setMobileOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="navbar-mobile-close" onClick={() => setMobileOpen(false)}>
          <X size={28} />
        </button>
        {[...navLinksLeft, ...navLinksRight].map(link => (
          <a key={link.key} href={link.href} onClick={() => setMobileOpen(false)}>
            {t(link.key)}
          </a>
        ))}
        <button className="btn-primary" onClick={() => setMobileOpen(false)}>
          <span>{t('nav.rezervasyonYap')}</span>
        </button>
      </div>
    </>
  );
}
