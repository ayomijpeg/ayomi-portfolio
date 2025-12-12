import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto relative">
      <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Narrative */}
        <div className="md:w-1/3">
            <div className="sticky top-32">
                <div className="inline-flex items-center gap-2 mb-4 text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-mono border border-emerald-200 dark:border-emerald-500/20 uppercase tracking-widest font-semibold">
                    <Briefcase size={12} />
                    Career Arc
                </div>
                
                {/* Fixed Contrast: Pure Black for Light Mode */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white leading-tight">
                    Engineering <br/> <span className="text-zinc-500 dark:text-zinc-600">Evolution.</span>
                </h2>
                
                {/* Fixed Contrast: Zinc-700 instead of 600 for better readability */}
                <div className="space-y-6 text-zinc-700 dark:text-zinc-400 leading-relaxed text-[15px]">
                    <p>
                        My trajectory is non-linear by design. Transitioning from 
                        <strong className="text-black dark:text-zinc-100 font-bold border-b-2 border-emerald-500/20"> Data Analysis in FinTech</strong> to 
                        <strong className="text-black dark:text-zinc-100 font-bold border-b-2 border-blue-500/20"> Full Stack Engineering</strong> gave 
                        me a rare advantage: I understand the numbers <em>and</em> the code.
                    </p>
                    <p>
                        I don't just build features; I engineer systems that handle complex business logic while maintaining pixel-perfect usability at scale.
                    </p>
                </div>
            </div>
        </div>
        
        {/* RIGHT COLUMN: Timeline */}
        <div className="md:w-2/3 relative">
            <div className="absolute left-[19px] top-4 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"></div>

            <div className="space-y-12">
                {experience.map((job, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="group relative pl-12 sm:pl-16"
                    >
                        {/* Dot Connector */}
                        <div className="absolute left-[11px] top-[6px] w-[17px] h-[17px] rounded-full bg-white dark:bg-[#050505] border-[3px] border-zinc-300 dark:border-zinc-700 z-10 transition-colors duration-300 group-hover:border-blue-600 dark:group-hover:border-blue-400 group-hover:scale-125 shadow-sm"></div>
                        
                        {/* High Contrast Card */}
                        <motion.div 
                            whileHover={{ scale: 1.02, translateX: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            // Light Mode: Pure White BG + Shadow | Dark Mode: Zinc-900
                            className="relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/30 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/40 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-black dark:text-zinc-50 tracking-tight">{job.role}</h3>
                                {/* Sharper date badge */}
                                <span className="mt-1 sm:mt-0 text-xs font-bold font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
                                    {job.period}
                                </span>
                            </div>
                            
                            <div className="text-blue-700 dark:text-blue-400 font-semibold mb-4 text-sm tracking-wide flex items-center gap-2">
                                {job.company}
                            </div>
                            
                            {/* Improved Readability: Darker grey, more spacing */}
                            <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic text-sm leading-relaxed border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 py-1">
                                "{job.description}"
                            </p>
                            
                            <ul className="space-y-3">
                                {job.achievements.map((achievement, i) => (
                                    // Bullet Points: Zinc-700 is easier to read than 500
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-400 font-medium leading-relaxed">
                                        <div className="mt-[6px] w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors shrink-0"></div>
                                        <span>{achievement}</span>
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
