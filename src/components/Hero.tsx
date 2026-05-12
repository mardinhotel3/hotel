import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const slides = [
  {
    image: banner1,
    labelKey: 'hero.slide1.label',
    titleKey1: 'hero.slide1.title1',
    titleKeyEm: 'hero.slide1.titleEm',
    titleKey2: 'hero.slide1.title2',
    subtitleKey: 'hero.slide1.subtitle',
  },
  {
    image: banner2,
    labelKey: 'hero.slide2.label',
    titleKey1: 'hero.slide2.title1',
    titleKeyEm: 'hero.slide2.titleEm',
    titleKey2: 'hero.slide2.title2',
    subtitleKey: 'hero.slide2.subtitle',
  },
  {
    image: heroBg,
    labelKey: 'hero.slide3.label',
    titleKey1: 'hero.slide3.title1',
    titleKeyEm: 'hero.slide3.titleEm',
    titleKey2: 'hero.slide3.title2',
    subtitleKey: 'hero.slide3.subtitle',
  },
];

export default function Hero() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <section className="hero">
      {/* Slider */}
      <div className="hero-slider">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
            <img src={slide.image} alt={`Slide ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content" key={current}>
        <span className="hero-label">{t(slides[current].labelKey)}</span>
        <h1 className="hero-title">
          {t(slides[current].titleKey1)}<em>{t(slides[current].titleKeyEm)}</em><br />{t(slides[current].titleKey2)}
        </h1>
        <span className="hero-ornament">✦ ✦ ✦</span>
        <p className="hero-subtitle">{t(slides[current].subtitleKey)}</p>
        <div className="hero-actions">
          <a 
            href="https://wa.me/905309298347" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            <span>{t('hero.btn.kesfet')}</span>
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="hero-controls">
        <button className="hero-control-btn" onClick={prev}><ChevronLeft size={18} /></button>
        <button className="hero-control-btn" onClick={next}><ChevronRight size={18} /></button>
      </div>

      {/* Award Badge */}
      <div className="hero-badge">
        <span className="hero-badge__label">{t('hero.badge.label')}</span>
        <span className="hero-badge__hotel">{t('hero.badge.hotel')}</span>
        <span className="hero-badge__score">9.7</span>
        <span className="hero-badge__source">Booking.com</span>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <div className="hero-scroll-line" />
        <span>{t('hero.scroll')}</span>
      </div>
    </section>
  );
}
