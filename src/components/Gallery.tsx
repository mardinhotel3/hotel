import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import room3k from '../assets/images/3k.png';
import room2k from '../assets/images/2k.png';
import alt2k from '../assets/images/2k ana kapak.png';
import extra3k from '../assets/images/3kdevamı.png';
import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';

const photos = [heroBg, banner1, banner2, room3k, room2k, alt2k, extra3k];

export default function Gallery() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="gallery" id="galeri">
      <div className="gallery-header">
        <span className="label">{t('gallery.label')}</span>
        <h2 className="gallery-title">{t('gallery.title1')}<em>{t('gallery.titleEm')}</em>{t('gallery.title2')}</h2>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div key={i} className="gallery-item" onClick={() => setLightbox(photo)}>
            <img src={photo} alt={`Galeri ${i + 1}`} />
            <div className="gallery-item__overlay">
              <ZoomIn className="gallery-item__icon" size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery-lightbox__close" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Büyük görsel"
            className="gallery-lightbox__img"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
