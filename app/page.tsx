import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
 
export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen" >
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
