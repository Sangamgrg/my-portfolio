import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Analytics />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default App;
