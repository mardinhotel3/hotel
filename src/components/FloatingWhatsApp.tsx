import './FloatingWhatsApp.css';
import whatsappIcon from '../assets/icons/whatsapp.png';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/905309298347" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="WhatsApp ile İletişime Geçin"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
      <span className="tooltip">Bize Yazın</span>
    </a>
  );
}
