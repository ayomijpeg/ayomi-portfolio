import { motion } from 'framer-motion';
import { skills } from '../data';

export const TechStack = () => {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto border-t border-zinc-100 dark:border-zinc-800/50">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Technical Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                    <div className="mb-4 p-3 bg-zinc-50 dark:bg-zinc-800 w-fit rounded-xl">
                        {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-zinc-800 dark:text-zinc-200">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skill.items.map(item => (
                            <span key={item} className="text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 px-2 py-1 rounded">
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
