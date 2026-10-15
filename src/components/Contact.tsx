import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { profile, certifications } from '../data';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-100 dark:border-zinc-800/50">
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Left: Get in touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mb-4 text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-black dark:text-white leading-tight">
            Let's Build<br />
            <span className="text-zinc-400 dark:text-zinc-600">Something Great.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[15px] mb-8 max-w-sm">
            I'm currently open to new opportunities — full-time, freelance, or contract. 
            Whether you have a project in mind or just want to connect, my inbox is always open.
          </p>

          {/* Email copy button */}
          <button
            onClick={copyEmail}
            className="group flex items-center gap-3 w-full px-5 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-blue-500/50 transition-all text-left"
          >
            <Mail size={18} className="text-zinc-400 group-hover:text-blue-500 transition-colors shrink-0" />
            <span className="flex-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 font-mono">{profile.email}</span>
            <span className="text-zinc-400 group-hover:text-blue-500 transition-colors">
              {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
            </span>
          </button>
          {copied && (
            <p className="mt-2 text-xs text-emerald-500 font-mono pl-1">Email copied to clipboard!</p>
          )}
        </motion.div>

        {/* Right: Links + Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Social links */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-blue-500/40 hover:bg-blue-50/50 dark:hover:bg-blue-500/5 transition-all group"
            >
              <Linkedin size={18} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-zinc-400/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all group"
            >
              <Github size={18} className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">GitHub</span>
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-green-500/40 hover:bg-green-50/50 dark:hover:bg-green-500/5 transition-all group"
            >
              <MessageCircle size={18} className="text-zinc-400 group-hover:text-green-500 transition-colors" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">WhatsApp</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-emerald-500/40 hover:bg-emerald-50/50 dark:hover:bg-emerald-500/5 transition-all group"
            >
              <Mail size={18} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</span>
            </a>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Certifications & Education</h3>
            <ul className="space-y-3">
              {certifications.map(cert => (
                <li key={cert.label} className="flex items-start gap-3">
                  <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{cert.label}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">{cert.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
