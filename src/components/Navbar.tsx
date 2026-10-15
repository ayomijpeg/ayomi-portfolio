import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-bold text-sm font-mono tracking-widest text-zinc-900 dark:text-white uppercase"
          >
            OA<span className="text-blue-500">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleLink(link.href); }}
                className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Opeyemi_Ayomide_Resume.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
            >
              <FileDown size={15} />
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleLink(link.href); }}
                  className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Opeyemi_Ayomide_Resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center gap-2 px-5 py-3 font-semibold bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg w-fit"
              >
                <FileDown size={16} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
