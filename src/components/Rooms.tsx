import { Users, Maximize2, Eye } from 'lucide-react';
import roomHero from '../assets/images/room-hero.jpg';
import suite from '../assets/images/suite.jpg';
import terrace from '../assets/images/terrace.jpg';
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
    image: roomHero,
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
    image: terrace,
    featured: false,
  },
];

export default function Rooms() {
  const { t } = useLanguage();
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
            <img src={room.image} alt={t(room.nameKey)} className="room-card__img" />
            <div className="room-card__overlay" />
            <div className="room-card__content">
              <span className="room-card__category">{t(room.categoryKey)}</span>
              <h3 className="room-card__name">{t(room.nameKey)}</h3>
              <div className="room-card__features">
                <span className="room-card__feature">
                  <Maximize2 size={11} /> {room.size}
                </span>
                <span className="room-card__feature">
                  <Users size={11} /> {t(room.guestsKey)}
                </span>
                <span className="room-card__feature">
                  <Eye size={11} /> {t(room.viewKey)}
                </span>
              </div>
              <div className="room-card__price-row">
                <div>
                  <div className="room-card__price">
                    {room.price} <span>{t('rooms.gece')}</span>
                  </div>
                </div>
                <span className="room-card__cta">{t('rooms.incele')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
