import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import wpIcon from '../assets/icons/wp1.png';
import igIcon from '../assets/icons/instagram.svg';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer" id="iletisim">
      <div className="footer-ornament">✦ ✦ ✦</div>
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-brand__logo">{t('hero.badge.hotel')}</span>
          <span className="footer-brand__tagline">{t('footer.tagline')}</span>
          <p className="footer-brand__desc">
            {t('footer.desc')}
          </p>
          <div className="footer-brand__social">
            <a href="https://wa.me/905309298347" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="WhatsApp">
              <img src={wpIcon} alt="WhatsApp" style={{ width: '25px', height: '25px', objectFit: 'contain', filter: 'invert(1)' }} />
            </a>
            <a href="https://www.instagram.com/terracemerdinotel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Instagram">
              <img src={igIcon} alt="Instagram" style={{ width: '25px', height: '25px', objectFit: 'contain', filter: 'invert(1)' }} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-col">
          <span className="footer-col__title">{t('footer.col1.title')}</span>
          <ul className="footer-col__links">
            <li><a href="#hakkimizda">{t('footer.col1.link1')}</a></li>
            <li><a href="#odalar">{t('footer.col1.link2')}</a></li>
            <li><a href="#hizmetler">{t('footer.col1.link3')}</a></li>
            <li><a href="#gastronomi">{t('footer.col1.link4')}</a></li>
            <li><a href="#galeri">{t('footer.col1.link5')}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <span className="footer-col__title">{t('footer.col3.title')}</span>
          <div className="footer-contact__item">
            <MapPin size={14} />
            <span dangerouslySetInnerHTML={{ __html: t('footer.address') }} />
          </div>
          <div className="footer-contact__item">
            <Phone size={14} />
            <a href="tel:08503770882">0 (850) 377 08 82</a>
          </div>
          <div className="footer-contact__item">
            <Phone size={14} />
            <a href="tel:+905309298347">+90 (530) 929 83 47</a>
          </div>
          <div className="footer-contact__item">
            <Mail size={14} />
            <a href="mailto:terracemerdin@gmail.com">terracemerdin@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="footer-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12692.839851375893!2d40.734351882560915!3d37.31385391960286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400a896e4177d3f9%3A0xfe956158265c4673!2sTerrace%20Merdin%20Butik%20otel%20%26%20Konak!5e0!3m2!1str!2str!4v1778236555780!5m2!1str!2str" 
          width="100%" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Terrace Merdin Location"
        ></iframe>
      </div>

      <div className="footer-bottom">
        <span className="footer-bottom__copy">
          {t('footer.copy', { year: new Date().getFullYear().toString() })}
        </span>
        <ul className="footer-bottom__links">
          <li><a href="#">{t('footer.bottom1')}</a></li>
          <li><a href="#">{t('footer.bottom2')}</a></li>
          <li><a href="#">{t('footer.bottom3')}</a></li>
        </ul>
      </div>
    </footer>
  );
}
