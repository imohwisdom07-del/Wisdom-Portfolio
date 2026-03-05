// src/App.jsx
import { useState } from 'react';
import Cursor   from './components/Cursor';
import Loader   from './components/Loader';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Projects from './components/Projects';
import Skills   from './components/Skills';
import Footer   from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Cursor />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
