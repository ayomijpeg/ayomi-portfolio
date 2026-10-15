import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileDown, MessageCircle } from 'lucide-react';
import { profile } from '../data';
import { useTypewriter } from '../hooks/useTypewriter';

export const Hero = () => {
  const displayRole = useTypewriter(profile.roleVariants, 80, 40, 2000);

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center px-6 max-w-5xl mx-auto pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {/* Status badges */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-100 dark:bg-emerald-500/10 rounded-full border border-emerald-200 dark:border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to Opportunities
          </span>
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-zinc-500 dark:text-zinc-400 uppercase bg-zinc-100 dark:bg-zinc-500/10 rounded-full border border-zinc-200 dark:border-zinc-500/20">
            {profile.location}
          </span>
        </div>

        {/* Avatar + Name row */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative shrink-0">
            <img
              src={profile.avatarUrl}
              alt="Opeyemi Ayomide"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-700"
              loading="eager"
            />
            <span className="absolute -bottom-1 -right-1 text-lg">🇳🇬</span>
          </div>
          <div>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mb-0.5">Hey, I'm</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
              {profile.name.split(' ')[0]} <span className="text-zinc-400 dark:text-zinc-500">{profile.name.split(' ')[1]}</span>
            </h1>
          </div>
        </div>

        {/* Typewriter role */}
        <div className="mb-5">
          <span className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-[1.1]">
            {displayRole}
            <span className="inline-block w-0.5 h-[0.85em] bg-blue-500 ml-1 align-middle animate-pulse" />
          </span>
        </div>

        {/* Bio */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
          {profile.bio}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 mb-10">
          {profile.stats.map(stat => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-black dark:text-white">{stat.value}</p>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 items-center">
          <a
            href="#work"
            onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            View Work
          </a>

          <a
            href="/Opeyemi_Ayomide_Resume.pdf"
            download="Opeyemi_Ayomide_Resume.pdf"
            aria-label="Download Opeyemi Ayomide's Resume"
            className="group px-5 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-medium rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex items-center gap-2 text-sm"
          >
            <FileDown size={16} className="text-zinc-400 group-hover:text-blue-500 transition-colors" />
            Resume
          </a>

          <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />

          {/* Social icons */}
          <div className="flex gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send Email"
              className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
