import { motion } from 'framer-motion';
import { ExternalLink, Github, Users } from 'lucide-react';
import { Code2, Cpu, Server, BookOpen } from 'lucide-react';
import { projects } from '../data';
import type { Project } from '../data';

const iconMap: Record<Project['iconKey'], React.ReactNode> = {
  cpu: <Cpu size={20} className="text-emerald-500" />,
  code: <Code2 size={20} className="text-blue-500" />,
  server: <Server size={20} className="text-orange-500" />,
  book: <BookOpen size={20} className="text-violet-500" />,
};

export const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-3 text-zinc-900 dark:text-white">Selected Work</h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm leading-relaxed">
          A showcase of full-stack applications focusing on performance, complex logic handling, and intuitive design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const isWip = project.link === '#' && project.repo === '#';

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`group relative flex flex-col justify-between p-7 rounded-2xl border bg-gradient-to-br ${project.colorClass} bg-white dark:bg-zinc-900/20 hover:shadow-2xl transition-all duration-500`}
            >
              {/* Featured badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/30">
                  Featured
                </span>
              )}

              <div>
                {/* Icon + links row */}
                <div className="flex justify-between items-start mb-5">
                  <div className="p-2.5 bg-white dark:bg-zinc-800 rounded-xl shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700">
                    {iconMap[project.iconKey]}
                  </div>

                  {!isWip && (
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.repo !== '#' && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="p-2 bg-white dark:bg-zinc-800 rounded-full hover:text-blue-600 dark:hover:text-blue-400 shadow-sm transition-colors"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        className="p-2 bg-white dark:bg-zinc-800 rounded-full hover:text-blue-600 dark:hover:text-blue-400 shadow-sm transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  )}

                  {isWip && (
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                      Private
                    </span>
                  )}
                </div>

                {/* Stats badge */}
                {project.stats && (
                  <div className="flex items-center gap-1.5 mb-3">
                    <Users size={12} className="text-violet-500" />
                    <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">{project.stats}</span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1 text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3">{project.subtitle}</p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 text-sm">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-zinc-100 dark:border-white/5">
                {project.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
