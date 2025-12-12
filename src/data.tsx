import { Code2, Database, Layout, Server, TrendingUp, Cpu } from 'lucide-react';

export const profile = {
  name: "OPEYEMI AYOMI",
  role: "Software Engineer",
  email: "ayomitomiwa53@gmail.com",
  phone: "+2348103506816",
  location: "Nigeria",
  linkedin: "https://linkedin.com/in/opeyemi-ayomide",
  bio: "I build pixel-perfect interfaces and scalable backends. With a background in both legacy PHP systems and modern JAMstack architectures (Next.js/Nest.js), I help businesses migrate to the future of the web. I also bring a unique analytical edge from the DeFi sector."
};

export const skills = [
  {
    category: "Frontend Architecture",
    icon: <Layout className="text-blue-500" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    category: "Backend & Database",
    icon: <Database className="text-emerald-500" />,
    items: ["Node.js", "Nest.js", "PHP", "PostgreSQL", "Prisma ORM", "SQL"]
  },
  {
    category: "Domain Knowledge",
    icon: <TrendingUp className="text-purple-500" />,
    items: ["DeFi Protocols", "Financial Modeling", "Agile Workflow", "System Research"]
  }
];

export const experience = [
  {
    role: "Intern Software Developer",
    company: "McKodev Tech Lab",
    period: "2021 - 2023",
    description: "Spearheaded the development of dynamic web applications using a hybrid stack.",
    achievements: [
      "Engineered scalable systems using PHP and AJAX, reducing server load by 20%.",
      "Optimized legacy codebases for performance, resulting in a 30% faster page load time.",
      "Collaborated in Agile code reviews to ensure maintainable, clean code delivery."
    ]
  },
 {
    role: "Frontend Engineer (Intern)",
    company: "Glidex Technologies",
    period: "2025 - Present",
    description: "Driving frontend development cycles with a focus on high-performance interfaces and scalable design patterns.",
    achievements: [
      "Building reusable component libraries using React/Next.js to accelerate development speed.",
      "Refactoring legacy client-side logic to modern standards, reducing layout shifts and rendering lag.",
      "Collaborating with backend teams to integrate complex APIs into a seamless user experience."
    ]
  },
  {
    role: "DeFi Data Analyst",
    company: "Pander E Currency",
    period: "2021",
    description: "Provided data-driven insights for financial technology and crypto assets.",
    achievements: [
      "Analyzed token performance to drive strategic portfolio decisions.",
      "Researched decentralized finance protocols to mitigate market risks.",
      "Built financial models to track and forecast asset growth."
    ]
  }
];

export const projects = [
  {
    title: "Project Nexus",
    subtitle: "High-Frequency E-Commerce Engine",
    description: "A PWA-ready product catalog built for speed. Features client-side memoization, optimistic UI updates, and a Neo-Brutalist design system to simulate real-world retail loads.",
    tech: ["React 18", "Redux Toolkit", "Vite", "TypeScript"],
    link: "https://ayomi-project-nexus.vercel.app/",
    repo: "https://github.com/ayomijpeg/ayomi-project-nexus",
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
    icon: <Code2 className="text-blue-500" />
  },
  {
    title: "MedCore Hospital System",
    subtitle: "Healthcare Administration Platform",
    description: "A full-stack management system for booking appointments and managing doctor schedules. Integrated secure authentication and real-time database updates.",
    tech: ["Next.js", "Prisma ORM", "PostgreSQL", "Tailwind"],
    link: "https://hospital-dashboard-henna-beta.vercel.app/",
    repo: "https://github.com/ayomijpeg/hospital-dashboard", // Double check this repo link
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
    icon: <Cpu className="text-emerald-500" />
  },
  {
    title: "Writer's Block CMS",
    subtitle: "Content Management System",
    description: "A custom blog platform enabling writers to publish stories and newsletters. Features a responsive writer dashboard and content analytics.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    link: "#", 
    repo: "#",
    color: "from-orange-500/10 to-red-500/10 border-orange-500/20",
    icon: <Server className="text-orange-500" />
  }
];
