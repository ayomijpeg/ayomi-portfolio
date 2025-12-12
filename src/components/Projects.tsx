import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';

export const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Selected Work</h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-xl">
            A showcase of full-stack applications focusing on performance, complex logic handling, and intuitive design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`group flex flex-col justify-between p-8 rounded-2xl border bg-gradient-to-br ${project.color} hover:shadow-2xl transition-all duration-500 dark:hover:bg-zinc-900/50 bg-white dark:bg-zinc-900/20`}
          >
            <div>
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700">
                        {project.icon}
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a 
                          href={project.repo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="p-2 bg-white dark:bg-zinc-800 rounded-full hover:text-blue-600 dark:hover:text-blue-400 shadow-sm"
                        >
                          <Github size={18} />
                        </a>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label={`View live demo of ${project.title}`}
                          className="p-2 bg-white dark:bg-zinc-800 rounded-full hover:text-blue-600 dark:hover:text-blue-400 shadow-sm"
                        >
                          <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-1 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">{project.subtitle}</p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 text-sm">
                    {project.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-100 dark:border-white/5">
                {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {t}
                    </span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
