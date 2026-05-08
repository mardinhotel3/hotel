import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

const reviews = [
  { textKey: 'test1.text', name: 'Zeynep K.', from: 'İstanbul, TR', initials: 'ZK', platform: 'Booking.com', score: 5 },
  { textKey: 'test2.text', name: 'Michael R.', from: 'London, UK', initials: 'MR', platform: 'TripAdvisor', score: 5 },
  { textKey: 'test3.text', name: 'Fatma S.', from: 'Ankara, TR', initials: 'FS', platform: 'Google', score: 5 },
  { textKey: 'test4.text', name: 'Ahmet Y.', from: 'İzmir, TR', initials: 'AY', platform: 'Booking.com', score: 5 },
  { textKey: 'test5.text', name: 'Elena D.', from: 'Berlin, DE', initials: 'ED', platform: 'TripAdvisor', score: 5 },
  { textKey: 'test6.text', name: 'Caner M.', from: 'Bursa, TR', initials: 'CM', platform: 'Google', score: 5 },
  { textKey: 'test7.text', name: 'Sarah J.', from: 'New York, US', initials: 'SJ', platform: 'Booking.com', score: 5 },
  { textKey: 'test8.text', name: 'Murat B.', from: 'Antalya, TR', initials: 'MB', platform: 'Expedia', score: 5 },
  { textKey: 'test9.text', name: 'Sophie L.', from: 'Paris, FR', initials: 'SL', platform: 'TripAdvisor', score: 5 },
  { textKey: 'test10.text', name: 'Kaan Ö.', from: 'Eskişehir, TR', initials: 'KÖ', platform: 'Google', score: 5 },
  { textKey: 'test11.text', name: 'David W.', from: 'Sydney, AU', initials: 'DW', platform: 'Booking.com', score: 5 },
  { textKey: 'test12.text', name: 'Selin A.', from: 'Muğla, TR', initials: 'SA', platform: 'TripAdvisor', score: 5 },
  { textKey: 'test13.text', name: 'Hans K.', from: 'Vienna, AT', initials: 'HK', platform: 'Google', score: 5 },
  { textKey: 'test14.text', name: 'Derya G.', from: 'Adana, TR', initials: 'DG', platform: 'Booking.com', score: 5 },
  { textKey: 'test15.text', name: 'Luca B.', from: 'Rome, IT', initials: 'LB', platform: 'TripAdvisor', score: 5 },
  { textKey: 'test16.text', name: 'Burak V.', from: 'Trabzon, TR', initials: 'BV', platform: 'Google', score: 5 },
  { textKey: 'test17.text', name: 'Emma S.', from: 'Toronto, CA', initials: 'ES', platform: 'Booking.com', score: 5 },
  { textKey: 'test18.text', name: 'Ömer F.', from: 'Konya, TR', initials: 'ÖF', platform: 'Expedia', score: 5 },
  { textKey: 'test19.text', name: 'Marta P.', from: 'Madrid, ES', initials: 'MP', platform: 'TripAdvisor', score: 5 },
  { textKey: 'test20.text', name: 'Ceyda U.', from: 'Samsun, TR', initials: 'CU', platform: 'Google', score: 5 },
  { textKey: 'test21.text', name: 'Robert H.', from: 'Amsterdam, NL', initials: 'RH', platform: 'Booking.com', score: 5 },
  { textKey: 'test22.text', name: 'Gözde T.', from: 'Kayseri, TR', initials: 'GT', platform: 'TripAdvisor', score: 5 },
  { textKey: 'test23.text', name: 'Yuki T.', from: 'Tokyo, JP', initials: 'YT', platform: 'Google', score: 5 },
  { textKey: 'test24.text', name: 'Emre Ç.', from: 'Denizli, TR', initials: 'EÇ', platform: 'Booking.com', score: 5 },
  { textKey: 'test25.text', name: 'Nina W.', from: 'Zurich, CH', initials: 'NW', platform: 'TripAdvisor', score: 5 },
  { textKey: 'test26.text', name: 'Bülent E.', from: 'Kocaeli, TR', initials: 'BE', platform: 'Google', score: 5 },
  { textKey: 'test27.text', name: 'Alice M.', from: 'Brussels, BE', initials: 'AM', platform: 'Booking.com', score: 5 },
  { textKey: 'test28.text', name: 'Kerem D.', from: 'Mersin, TR', initials: 'KD', platform: 'Expedia', score: 5 },
  { textKey: 'test29.text', name: 'Isabelle V.', from: 'Stockholm, SE', initials: 'IV', platform: 'TripAdvisor', score: 5 },
  { textKey: 'test30.text', name: 'Deniz S.', from: 'Çanakkale, TR', initials: 'DS', platform: 'Google', score: 5 },
];

export default function Testimonials() {
  const { t } = useLanguage();
  
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <span className="label">{t('test.label')}</span>
        <h2 className="testimonials-title">{t('test.title1')}<em>{t('test.titleEm')}</em></h2>
      </div>

      <div className="testimonials-slider">
        <motion.div 
          className="testimonials-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 220, // Daha sakin bir akış için süre artırıldı
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Sonsuz döngü için listeyi iki kez render ediyoruz */}
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__quote-mark">&ldquo;</div>
              <div className="testimonial-card__stars">
                {Array.from({ length: review.score }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-card__text">{t(review.textKey)}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{review.initials}</div>
                <div>
                  <div className="testimonial-card__name">{review.name}</div>
                  <div className="testimonial-card__from">{review.from}</div>
                </div>
                <span className="testimonial-card__platform">{review.platform}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
