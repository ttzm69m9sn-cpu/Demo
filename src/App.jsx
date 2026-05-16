import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Soluciones from './components/Soluciones.jsx';
import Nosotros from './components/Nosotros.jsx';
import PorQue from './components/PorQue.jsx';
import Marcas from './components/Marcas.jsx';
import FAQ from './components/FAQ.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import useReveal from './lib/useReveal.js';

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Soluciones />
        <Nosotros />
        <PorQue />
        <Marcas />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
