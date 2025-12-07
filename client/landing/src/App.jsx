import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import PricingPlans from './components/PricingPlans';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <PricingPlans />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
