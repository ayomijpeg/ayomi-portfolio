// ============================================================
//  Portfolio data — pure TypeScript, no JSX
//  Icons are resolved by string key in each component.
// ============================================================

export const profile = {
  name: "OPEYEMI AYOMIDE",
  role: "Full Stack Engineer",
  roleVariants: ["Full Stack Engineer", "Frontend-Heavy Developer", "React & Next.js Specialist"],
  email: "ayomitomiwa53@gmail.com",
  phone: "+2348103506816",
  whatsapp: "https://wa.me/2348103506816",
  location: "Nigeria",
  linkedin: "https://linkedin.com/in/opeyemi-ayomide",
  github: "https://github.com/ayomijpeg",
  avatarUrl: "https://avatars.githubusercontent.com/u/107340296?v=4",
  bio: "Full Stack Engineer with 4+ years building production-grade web apps. I specialize in React, Next.js, and TypeScript on the frontend, and reach into Node.js, Prisma, and PostgreSQL when the feature demands it. Currently leading frontend development on Yosola Schools — a live SaaS platform serving 447+ users.",
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Active SaaS Users", value: "447+" },
    { label: "Projects Shipped", value: "6+" },
  ],
};

export type SkillCategory = {
  category: string;
  iconKey: "layout" | "database" | "trending" | "tool";
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend Architecture",
    iconKey: "layout",
    items: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
  },
  {
    category: "Backend & Database",
    iconKey: "database",
    items: ["Node.js", "Nest.js", "PHP", "PostgreSQL", "Prisma ORM", "RESTful APIs"],
  },
  {
    category: "Tools & Practice",
    iconKey: "tool",
    items: ["Git / GitHub", "Vercel", "Postman", "Jest", "CI/CD", "Agile / Scrum"],
  },
  {
    category: "Domain Knowledge",
    iconKey: "trending",
    items: ["DeFi Protocols", "Financial Modelling", "System Research", "Cross-functional Collaboration"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Engineer Intern",
    company: "Gllidex Technologies",
    period: "Oct 2025 – Present",
    type: "Remote",
    description: "Driving frontend development cycles with a focus on high-performance interfaces and scalable design patterns.",
    achievements: [
      "Building reusable, typed React/Next.js component libraries adopted across the product, cutting time-to-ship for new UI features.",
      "Refactoring legacy client-side logic to modern React patterns, reducing layout shift and rendering lag on key pages.",
      "Partnering with backend engineers to integrate REST APIs, translating design specs into accessible, cross-browser-compatible interfaces.",
      "Participating in structured code reviews, applying feedback to keep the shared codebase consistent and maintainable.",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "McKodev Tech Lab",
    period: "Mar 2021 – Dec 2023",
    type: "Ekiti, Nigeria",
    description: "Designed and shipped dynamic web applications end-to-end using PHP, JavaScript, and AJAX in a hybrid stack environment.",
    achievements: [
      "Engineered efficient client-server request handling, cutting server load by roughly 20%.",
      "Optimized legacy codebases — asset loading, query patterns, render paths — improving page load speed by up to 30%.",
      "Debugged and resolved production issues, reducing downtime and improving day-to-day system reliability.",
      "Collaborated in Agile code reviews with the wider dev team to maintain clean, maintainable delivery standards.",
    ],
  },
  {
    role: "DeFi Data Analyst",
    company: "Pander E Currency",
    period: "Apr 2021 – Nov 2021",
    type: "Remote",
    description: "Provided data-driven insights for financial technology and crypto assets.",
    achievements: [
      "Analyzed token performance and on-chain metrics to support portfolio strategy and risk-management decisions.",
      "Researched decentralized finance protocols and market trends to identify emerging risks and opportunities.",
      "Built financial models to track and forecast asset growth, informing later work on secure fintech interfaces.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
  colorClass: string;
  iconKey: "cpu" | "code" | "server" | "book";
  featured?: boolean;
  stats?: string;
};

export const projects: Project[] = [
  {
    title: "Yosola Schools",
    subtitle: "School Management SaaS Platform",
    description:
      "A live, multi-tenant school management platform serving 447+ active users across student, parent, teacher, and admin roles. Manages 215+ student enrollments for the 2025/2026 academic year through a role-based dashboard system with type-safe state management.",
    tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    link: "https://portal.yosolaschools.com",
    repo: "#",
    colorClass: "from-violet-500/10 to-purple-500/10 border-violet-500/20",
    iconKey: "book",
    featured: true,
    stats: "447+ Active Users",
  },
  {
    title: "Project Nexus",
    subtitle: "High-Frequency E-Commerce Engine",
    description:
      "A PWA-ready product catalog built for speed. Features client-side memoization, optimistic UI updates, and a Neo-Brutalist design system to simulate real-world retail loads while keeping bundle size and re-renders tightly optimised.",
    tech: ["React 18", "Redux Toolkit", "Vite", "TypeScript"],
    link: "https://ayomi-project-nexus.vercel.app/",
    repo: "https://github.com/ayomijpeg/ayomi-project-nexus",
    colorClass: "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
    iconKey: "code",
    featured: false,
  },
  {
    title: "MedCore Hospital System",
    subtitle: "Healthcare Administration Platform",
    description:
      "A full-stack management system for booking appointments and managing doctor schedules. Structured the relational schema across patients, doctors, appointments, and billing to support future production scale-up.",
    tech: ["Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    link: "https://hospital-dashboard-henna-beta.vercel.app/",
    repo: "https://github.com/ayomijpeg/hospital-dashboard",
    colorClass: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
    iconKey: "cpu",
    featured: false,
  },
  {
    title: "Writer's Block CMS",
    subtitle: "Content Management System",
    description:
      "A custom blog platform enabling writers to publish stories and newsletters. Features a responsive writer dashboard and content analytics.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    link: "#",
    repo: "#",
    colorClass: "from-orange-500/10 to-red-500/10 border-orange-500/20",
    iconKey: "server",
    featured: false,
  },
];

export const certifications = [
  { label: "ALX Software Engineering", sub: "Backend Specialization & Pro Dev Program · 2025" },
  { label: "Meta Front-End Development", sub: "Essentials Certification · Coursera · 2023" },
  { label: "ND Computer Science", sub: "Federal Polytechnic, Ado-Ekiti · Upper Credit · 2024" },
];
