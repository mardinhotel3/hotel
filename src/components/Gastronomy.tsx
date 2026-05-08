import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Gastronomy.css';

const dishes = [
  {
    nameKey: 'astro.dish1.name',
    descKey: 'astro.dish1.desc',
    image: '/assets/images/gastronomy/kaburga.png'
  },
  {
    nameKey: 'astro.dish2.name',
    descKey: 'astro.dish2.desc',
    image: '/assets/images/gastronomy/icli_kofte.png'
  },
  {
    nameKey: 'astro.dish3.name',
    descKey: 'astro.dish3.desc',
    image: '/assets/images/gastronomy/sembusek.png'
  },
  {
    nameKey: 'astro.dish4.name',
    descKey: 'astro.dish4.desc',
    image: '/assets/images/gastronomy/harire.png'
  }
];

export default function Gastronomy() {
  const { t } = useLanguage();

  return (
    <section className="gastronomy" id="gastronomi">
      <div className="gastronomy-header">
        <span className="label">{t('astro.label')}</span>
        <h2 className="gastronomy-title">
          {t('astro.title1')}<em>{t('astro.titleEm')}</em>{t('astro.title2')}
        </h2>
        <p className="gastronomy-desc">{t('astro.desc')}</p>
      </div>

      <div className="gastronomy-grid">
        {dishes.map((dish, i) => (
          <motion.div 
            key={i} 
            className="dish-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="dish-card__image">
              <img src={dish.image} alt={t(dish.nameKey)} />
              <div className="dish-card__overlay" />
            </div>
            <div className="dish-card__content">
              <h3 className="dish-card__name">{t(dish.nameKey)}</h3>
              <div className="dish-card__divider" />
              <p className="dish-card__text">{t(dish.descKey)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
