import { Navbar } from './components/Navbar';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Noise Texture — self-hosted SVG to avoid 3rd-party dependency */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-soft-light"
        style={{ backgroundImage: "url('/noise.svg')", backgroundRepeat: 'repeat' }}
      />

      {/* Grid Pattern */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Navbar />
      <ThemeToggle />

      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative z-10 py-10 border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-400 dark:text-zinc-500 text-xs font-mono">
          <p>© {new Date().getFullYear()} Opeyemi Ayomide. Built with React 19, Tailwind & Framer Motion.</p>
          <a
            href="https://github.com/ayomijpeg/ayomi-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            View Source ↗
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
