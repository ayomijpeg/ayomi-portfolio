import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Noise Texture */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <ThemeToggle />
      
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
      </main>

      <footer className="relative z-10 py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left text-zinc-500 dark:text-zinc-500 text-sm font-mono">
          <p>© {new Date().getFullYear()} Opeyemi Ayomide. Built with React 18, Tailwind & Motion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
