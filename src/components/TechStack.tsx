import { motion } from 'framer-motion';
import { Layout, Database, TrendingUp, Wrench } from 'lucide-react';
import { skills } from '../data';
import type { SkillCategory } from '../data';

const iconMap: Record<SkillCategory['iconKey'], React.ReactNode> = {
  layout: <Layout className="text-blue-500" size={20} />,
  database: <Database className="text-emerald-500" size={20} />,
  trending: <TrendingUp className="text-purple-500" size={20} />,
  tool: <Wrench className="text-orange-500" size={20} />,
};

export const TechStack = () => {
  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto border-t border-zinc-100 dark:border-zinc-800/50">
      <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Technical Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="mb-4 p-2.5 bg-zinc-50 dark:bg-zinc-800 w-fit rounded-xl">
              {iconMap[skill.iconKey]}
            </div>
            <h3 className="font-bold text-sm mb-3 text-zinc-800 dark:text-zinc-200 tracking-tight">{skill.category}</h3>
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map(item => (
                <span
                  key={item}
                  className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 px-2 py-1 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
