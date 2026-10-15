import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto relative">
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24">

        {/* LEFT COLUMN: Narrative */}
        <div className="md:w-1/3">
          <div className="sticky top-32">
            <div className="inline-flex items-center gap-2 mb-4 text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-mono border border-emerald-200 dark:border-emerald-500/20 uppercase tracking-widest font-semibold">
              <Briefcase size={12} />
              Career Arc
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white leading-tight">
              Engineering <br />
              <span className="text-zinc-500 dark:text-zinc-600">Evolution.</span>
            </h2>

            <div className="space-y-5 text-zinc-700 dark:text-zinc-400 leading-relaxed text-[15px]">
              <p>
                My trajectory is non-linear by design. Moving from{' '}
                <strong className="text-black dark:text-zinc-100 font-bold border-b-2 border-emerald-500/30">
                  DeFi data analysis
                </strong>{' '}
                to{' '}
                <strong className="text-black dark:text-zinc-100 font-bold border-b-2 border-blue-500/30">
                  full-stack engineering
                </strong>{' '}
                gave me a rare edge: I understand the numbers <em>and</em> the code.
              </p>
              <p>
                4+ years building production systems — from legacy PHP to modern Next.js SaaS. Currently maintaining a live platform with{' '}
                <strong className="text-black dark:text-zinc-100 font-bold">447+ active users</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Timeline */}
        <div className="md:w-2/3 relative">
          <div className="absolute left-[19px] top-4 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="group relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] top-[6px] w-[17px] h-[17px] rounded-full bg-white dark:bg-[#050505] border-[3px] border-zinc-300 dark:border-zinc-700 z-10 transition-all duration-300 group-hover:border-blue-600 dark:group-hover:border-blue-400 group-hover:scale-125 shadow-sm" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.015, translateX: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/30 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/40 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1.5">
                    <h3 className="text-lg font-bold text-black dark:text-zinc-50 tracking-tight">{job.role}</h3>
                    <span className="mt-1 sm:mt-0 text-xs font-bold font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 shrink-0 ml-3">
                      {job.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-700 dark:text-blue-400 font-semibold text-sm">{job.company}</span>
                    <span className="text-zinc-300 dark:text-zinc-700">·</span>
                    <span className="flex items-center gap-1 text-xs text-zinc-400 font-mono">
                      <MapPin size={11} />
                      {job.type}
                    </span>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 mb-5 italic text-sm leading-relaxed border-l-4 border-zinc-200 dark:border-zinc-700 pl-4 py-1">
                    "{job.description}"
                  </p>

                  <ul className="space-y-2.5">
                    {job.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-400 leading-relaxed">
                        <div className="mt-[6px] w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
