import { Check } from 'lucide-react';
import banner1 from '../assets/images/banner1.png';
import { useLanguage } from '../context/LanguageContext';
import './Reservation.css';

export default function Reservation() {
  const { t } = useLanguage();
  return (
    <section className="reservation" id="rezervasyon">
      <div className="reservation__bg">
        <img src={banner1} alt="Rezervasyon Arka Planı" />
      </div>

      <div className="reservation__content">
        {/* Left */}
        <div className="reservation__text">
          <span className="label">{t('reservation.label')}</span>
          <h2 className="reservation__title">
            {t('reservation.title1')}<em>{t('reservation.titleEm')}</em><br />{t('reservation.title2')}
          </h2>
          <p className="reservation__desc">
            {t('reservation.desc')}
          </p>
          <div className="reservation__features">
            {[
              t('reservation.feat1'),
              t('reservation.feat2'),
              t('reservation.feat3'),
              t('reservation.feat4'),
              t('reservation.feat5'),
              t('reservation.feat6'),
            ].map((f) => (
              <div key={f} className="reservation__feature">
                <Check size={14} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="reservation__form">
          <h3>{t('form.title')}</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{t('form.checkin')}</label>
              <input type="date" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">{t('form.checkout')}</label>
              <input type="date" className="form-input" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{t('form.guests')}</label>
              <select className="form-select form-input">
                <option>{t('form.guest1')}</option>
                <option>{t('form.guest2')}</option>
                <option>{t('form.guest3')}</option>
                <option>{t('form.guest4')}</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">{t('form.roomType')}</label>
              <select className="form-select form-input">
                <option>{t('form.room1')}</option>
                <option>{t('form.room2')}</option>
                <option>{t('form.room3')}</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{t('form.name')}</label>
              <input type="text" className="form-input" placeholder={t('form.namePlaceholder')} />
            </div>
            <div className="form-group">
              <label className="form-label">{t('form.phone')}</label>
              <input type="tel" className="form-input" placeholder="+90 ___ ___ __ __" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full">
              <label className="form-label">{t('form.email')}</label>
              <input type="email" className="form-input" placeholder={t('form.emailPlaceholder')} />
            </div>
          </div>
          <button className="form-submit">{t('form.submit')}</button>
          <p className="form-note">{t('form.note')}</p>
        </div>
      </div>
    </section>
  );
}
