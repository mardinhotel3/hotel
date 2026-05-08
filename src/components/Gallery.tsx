import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';
import roomHero from '../assets/images/room-hero.jpg';
import terrace from '../assets/images/terrace.jpg';
import spa from '../assets/images/spa.jpg';
import suite from '../assets/images/suite.jpg';
import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';

const photos = [heroBg, roomHero, terrace, spa, suite];

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
