import { useState } from 'react';
import { Users, Maximize2, Eye } from 'lucide-react';
import tripleRoom from '../assets/images/3k.png';
import doubleRoom from '../assets/images/2k.png';
import { useLanguage } from '../context/LanguageContext';
import './Rooms.css';

const rooms = [
  {
    id: 'tarihi-suit',
    categoryKey: 'room1.category',
    nameKey: 'room1.name',
    size: '65 m²',
    guestsKey: 'room1.guests',
    viewKey: 'room1.view',
    price: '₺ 8.500',
    image: tripleRoom,
    featured: true,
  },
  {
    id: 'teras-suit',
    categoryKey: 'room3.category',
    nameKey: 'room3.name',
    size: '80 m²',
    guestsKey: 'room3.guests',
    viewKey: 'room3.view',
    price: '₺ 12.000',
    image: doubleRoom,
    featured: false,
  },
];

export default function Rooms() {
  const { t } = useLanguage();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="rooms" id="odalar">
      <div className="rooms-header">
        <span className="label">{t('rooms.label')}</span>
        <h2 className="rooms-title">{t('rooms.title1')}<em>{t('rooms.titleEm')}</em></h2>
        <p className="rooms-subtitle">
          {t('rooms.subtitle')}
        </p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img 
              src={room.image} 
              alt={t(room.nameKey)} 
              className="room-card__img" 
              onClick={() => setSelectedImg(room.image)}
              style={{ cursor: 'zoom-in' }}
            />
            <div className="room-card__overlay" onClick={() => setSelectedImg(room.image)} style={{ cursor: 'zoom-in' }} />
            <div className="room-card__content">
              <span className="room-card__category">{t(room.categoryKey)}</span>
              <h3 className="room-card__name">{t(room.nameKey)}</h3>
              <div className="room-card__features">
                <span className="room-card__feature">
                  <Users size={11} /> {t(room.guestsKey)}
                </span>
                <span className="room-card__feature">
                  <Eye size={11} /> {t(room.viewKey)}
                </span>
              </div>
              <div className="room-card__price-row" style={{ justifyContent: 'flex-end' }}>
                <a 
                  href="https://wa.me/905309298347" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="room-card__cta"
                >
                  {t('rooms.incele')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="rooms-lightbox" 
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <img 
            src={selectedImg} 
            alt="Room Zoom" 
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90vh', 
              objectFit: 'contain',
              boxShadow: '0 0 50px rgba(0,0,0,0.5)',
              border: '2px solid var(--color-gold)'
            }} 
          />
          <button 
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedImg(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
