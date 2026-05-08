import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Gastronomy from './components/Gastronomy';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Rooms />
        <Gastronomy />
        <Services />
        <Gallery />
        <Testimonials />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

export default App;
