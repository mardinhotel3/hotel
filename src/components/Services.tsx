import { Car, UtensilsCrossed, ParkingSquare, Star, Wifi, Coffee, Camera, Map } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const services = [
  { icon: <Car size={26} />, nameKey: 'service1.name', descKey: 'service1.desc' },
  { icon: <UtensilsCrossed size={26} />, nameKey: 'service2.name', descKey: 'service2.desc' },
  { icon: <ParkingSquare size={26} />, nameKey: 'service3.name', descKey: 'service3.desc' },
  { icon: <Star size={26} />, nameKey: 'service4.name', descKey: 'service4.desc' },
  { icon: <Wifi size={26} />, nameKey: 'service5.name', descKey: 'service5.desc' },
  { icon: <Coffee size={26} />, nameKey: 'service6.name', descKey: 'service6.desc' },
  { icon: <Camera size={26} />, nameKey: 'service7.name', descKey: 'service7.desc' },
  { icon: <Map size={26} />, nameKey: 'service8.name', descKey: 'service8.desc' },
];

export default function Services() {
  const { t } = useLanguage();
  return (
    <section className="services" id="hizmetler">
      <div className="services-header">
        <span className="label">{t('services.label')}</span>
        <h2 className="services-title">{t('services.title1')}<em>{t('services.titleEm')}</em>{t('services.title2')}</h2>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <div className="service-card__icon">
              {service.icon}
            </div>
            <h3 className="service-card__name">{t(service.nameKey)}</h3>
            <p className="service-card__desc">{t(service.descKey)}</p>
          </div>
        ))}
      </div>

      <div className="services-banner">
        <div className="services-banner__inner">
          <div className="services-banner__text">
            <span className="label">{t('services.banner.label')}</span>
            <h3 className="services-banner__title">
              {t('services.banner.title1')}<em>{t('services.banner.titleEm')}</em>{t('services.banner.title2')}
            </h3>
            <p className="services-banner__desc">
              {t('services.banner.desc')}
            </p>
          </div>
          <div>
            <a 
              href="https://wa.me/905309298347" 
              className="btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              <span>{t('services.banner.btn')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
