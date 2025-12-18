import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileDown } from 'lucide-react';
import { profile } from '../data';

export const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-100 dark:bg-emerald-500/10 rounded-full border border-emerald-200 dark:border-emerald-500/20">
              Open to Opportunities
            </span>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-zinc-500 dark:text-zinc-400 uppercase bg-zinc-100 dark:bg-zinc-500/10 rounded-full border border-zinc-200 dark:border-zinc-500/20">
              {profile.location}
            </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-black dark:text-white">
          {profile.name}.<br />
          <span className="text-zinc-500 dark:text-zinc-600">{profile.role}.</span>
        </h1>
        
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
          {profile.bio}
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
            {/* Primary Action: View Work */}
            <a href="#work" className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">
                View Work
            </a>
{/* Secondary Action: Download Resume */}
            <a 
                href="/OPEYEMI AYOMIDE.pdf" 
                download="Opeyemi_Ayomi_Resume.pdf"
                aria-label="Download Opeyemi Ayomi's Resume"
                className="group px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-medium rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center gap-2"
            >
                <FileDown size={18} className="text-zinc-400 group-hover:text-blue-500 transition-colors" />
                <span>Resume</span>
            </a>

            {/* Separator line */}
            <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800 mx-2 hidden sm:block"></div>

            {/* Social Icons */}
            <div className="flex gap-2">
                <a 
                  href={profile.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                    <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${profile.email}`} 
                  aria-label="Send Email"
                  className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 hover:text-emerald-600 dark:hover:text-white transition-colors"
                >
                    <Mail size={20} />
                </a>
                <a 
                  href="https://github.com/ayomijpeg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                >
                    <Github size={20} />
                </a>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
