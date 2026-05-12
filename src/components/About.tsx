import banner2 from '../assets/images/banner2.png';
import heroBg from '../assets/images/hero-bg.jpg';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  return (
    <section className="about" id="hakkimizda">
      <div className="about-inner">
        {/* Images */}
        <div className="about-images">
          <div className="about-images__main">
            <img src={banner2} alt="Tarihi Oda İç Mekânı" />
          </div>
          <div className="about-images__accent">
            <img src={heroBg} alt="Mardin Şehir Manzarası" />
          </div>
          <div className="about-images__badge">
            <span className="about-images__badge-num">{t('about.badge.num')}</span>
            <span className="about-images__badge-text" dangerouslySetInnerHTML={{ __html: t('about.badge.text') }} />
          </div>
        </div>

        {/* Text */}
        <div className="about-text">
          <div className="about-header">
            <span className="label">{t('about.label')}</span>
            <h2 className="about-title">
              {t('about.title1')}<em>{t('about.titleEm')}</em><br />{t('about.title2')}
            </h2>
            <div className="about-divider" />
          </div>

          <p className="about-description">
            {t('about.desc1')}
          </p>
          <p className="about-description">
            {t('about.desc2')}
          </p>

          <div className="about-quote">
            <p>{t('about.quote')}</p>
            <cite>— National Geographic Türkiye</cite>
          </div>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat__num">5</span>
              <span className="about-stat__label">{t('about.stat.oda')}</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__num">312</span>
              <span className="about-stat__label">{t('about.stat.tarih')}</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__num">9.7</span>
              <span className="about-stat__label">{t('about.stat.puan')}</span>
            </div>
          </div>

          <a href="#odalar" className="btn-ghost">
            {t('about.btn')}
          </a>
        </div>
      </div>
    </section>
  );
}
