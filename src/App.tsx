import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Database, Cloud, Code, Wrench, CheckCircle2 } from 'lucide-react';

// --- DATA ---
const portfolioData = {
  hero: {
    headline: "Engineering trusted cloud-native data platforms.",
    technologies: ["AWS", "Databricks", "Apache Iceberg", "PySpark"],
    profile: {
      role: "Data Engineer",
      company: "Old Mutual",
      focus: "DHA Data Platform",
      location: "South Africa"
    }
  },
  experience: [
    {
      company: "Old Mutual",
      role: "Data Engineer",
      period: "Jul 2025 - Present",
      achievements: [
        {
          title: "Raw & Bronze Ingestion",
          desc: "Engineered scalable pipelines using PySpark and Apache Iceberg for structured and semi-structured HANIS batch data."
        },
        {
          title: "Airflow Orchestration",
          desc: "Developed and maintained Airflow DAGs for complex batch response processing and delta data loads."
        },
        {
          title: "Schema & Traceability Foundation",
          desc: "Implemented dynamic partitioning, schema validation, and injected unique source record keys and ingestion event IDs for full auditability."
        },
        {
          title: "Enterprise CI/CD",
          desc: "Driven delivery workflows through Azure DevOps, utilizing pull requests, build pipelines, and flake8 pre-commit validations."
        }
      ]
    }
  ],
  skills: [
    {
      category: "Cloud & Compute",
      icon: Cloud,
      items: ["AWS", "Databricks", "Azure OpenAI"]
    },
    {
      category: "Data Engineering",
      icon: Database,
      items: ["PySpark", "Apache Spark", "Apache Iceberg", "Airflow", "Matillion"]
    },
    {
      category: "Programming",
      icon: Code,
      items: ["Python", "SQL", "Java", "C++", "TypeScript"]
    },
    {
      category: "Tools & DevOps",
      icon: Wrench,
      items: ["Jira", "Azure DevOps", "Git", "Linux (Ubuntu)", "Docker"]
    }
  ],
};

// --- COMPONENTS ---
const AnimatedPipeline = () => {
  const stages = [
    { 
      name: 'IOP Gateway & Routing', 
      desc: 'Cache Check & DHA/HANIS API Calls', 
      tech: 'Microservices' 
    },
    { 
      name: 'Pre-Raw (Landing Zone)', 
      desc: 'Landed As-Is & Event Triggers', 
      tech: 'AWS S3 & Lambda' 
    },
    { 
      name: 'Raw Layer', 
      desc: 'Traceability, Event IDs & Orchestration', 
      tech: 'Airflow & Apache Iceberg' 
    },
    { 
      name: 'Bronze Layer', 
      desc: 'Schema Enforcement & Partitioning', 
      tech: 'PySpark & Databricks' 
    },
    { 
      name: 'Conform / Gold / Consumption', 
      desc: 'Analytics-Ready Verified Identities', 
      tech: 'Athena & DynamoDB' 
    }
  ];
  
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-8 shadow-2xl">
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#94A3B8]">DHA Platform Architecture</h3>
      <div className="flex flex-col gap-2">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.name}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-2 rounded-xl border border-white/5 bg-[#111827] p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-[#F8FAFC]">{stage.name}</span>
                <Database className="h-4 w-4 text-[#06B6D4]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#94A3B8]">{stage.desc}</span>
                <span className="rounded bg-[#2563EB]/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#2563EB]">
                  {stage.tech}
                </span>
              </div>
            </motion.div>
            
            {/* Animated Connector Arrow */}
            {index < stages.length - 1 && (
              <div className="flex justify-center py-1">
                <motion.div
                  animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.2 }}
                >
                  <ArrowRight className="h-5 w-5 rotate-90 text-[#2563EB]" />
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-32">
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
        </span>
        {portfolioData.hero.profile.role} @ {portfolioData.hero.profile.company}
      </motion.div>
      
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
        {portfolioData.hero.headline}
      </motion.h1>
      
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg leading-relaxed text-[#94A3B8]">
        Hi, I'm <span className="font-semibold text-white">Siyabonga Ngcobo</span>. I specialize in building scalable, analytics-ready foundations using <span className="text-[#06B6D4]">AWS, Databricks, Apache Iceberg, and PySpark</span>.
      </motion.p>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
        <a href="#experience" className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
          View Enterprise Experience <ArrowRight className="h-4 w-4" />
        </a>
        {/* Updated CV Link */}
        <a href="/Siyabonga_Ngcobo_Resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
          <Download className="h-4 w-4" /> Download CV
        </a>
      </motion.div>
    </div>
    
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
      <AnimatedPipeline />
    </motion.div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 border-t border-white/10">
    <div className="grid gap-12 md:grid-cols-3">
      <div>
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="mt-2 text-[#06B6D4] font-medium">Bridging rigorous engineering and STEM education.</p>
      </div>
      
      <div className="md:col-span-2 space-y-4 text-[#94A3B8] leading-relaxed">
        <p>
          I'm a Data Engineer currently building robust, event-driven data platforms at Old Mutual for the Department of Home Affairs (DHA) initiative. My day-to-day focus centers on writing clean PySpark logic, orchestrating reliable workflows with Airflow, and enforcing schema integrity and traceability across Apache Iceberg layers.
        </p>
        <p>
          My foundation spans formal studies in Computer Science and Mathematics at North West University, software engineering training through WeThinkCode_, and hands-on cloud certifications (AWS Certified Cloud Practitioner). 
        </p>
        <p>
          Outside of enterprise data engineering, I run online tutoring services and share educational content on TikTok to make Mathematics and Physical Science more accessible to students. Whether I'm optimizing backend data ingestion or breaking down complex STEM concepts, I am driven by a commitment to problem-solving and clarity.
        </p>
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white">Enterprise Experience</h2>
      <p className="mt-2 text-[#94A3B8]">Delivering reliable data foundations at scale.</p>
    </div>
    
    <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-8 shadow-xl">
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-8 md:flex-row md:items-center">
        <div>
          <h3 className="text-2xl font-bold text-white">Old Mutual</h3>
          <p className="text-lg text-[#06B6D4]">Data Engineer • DHA Data Platform</p>
        </div>
        <span className="inline-flex rounded-full bg-[#111827] px-4 py-2 text-sm font-medium text-[#94A3B8]">
          Jul 2025 - Present
        </span>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.experience[0].achievements.map((item, i) => (
          <div key={i} className="flex items-start gap-4 rounded-xl bg-[#111827] p-5 border border-white/5 transition hover:border-white/10 hover:bg-[#1A2235]">
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2563EB]" />
            <div>
              <h4 className="font-bold text-[#F8FAFC]">{item.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
      <p className="mt-2 text-[#94A3B8]">The tools I use to build scalable data platforms.</p>
    </div>
    
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {portfolioData.skills.map((skillGroup, index) => (
        <div key={index} className="rounded-3xl border border-white/10 bg-[#0F172A] p-6 shadow-xl hover:border-white/20 transition-colors">
          <div className="mb-4 inline-flex rounded-xl bg-[#111827] p-3 text-[#06B6D4]">
            <skillGroup.icon className="h-6 w-6" />
          </div>
          <h3 className="mb-4 text-lg font-bold text-white">{skillGroup.category}</h3>
          <ul className="space-y-2">
            {skillGroup.items.map((item, i) => (
              <li key={i} className="text-sm font-medium text-[#94A3B8]">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-20 border-t border-white/10 py-12 text-center">
    <h2 className="text-2xl font-bold text-white">Let's build trusted data platforms.</h2>
    <div className="mt-8 flex justify-center gap-4">
      <a href="mailto:siya18ngcobo@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
        <Mail className="h-4 w-4" /> Email Me
      </a>
      <a href="https://www.linkedin.com/in/siyabonga-ngcobo-90a518257/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
         LinkedIn
      </a>
      <a href="https://github.com/mashebhebs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
         GitHub
      </a>
    </div>
  </footer>
);

// --- MAIN APP ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] selection:bg-[#2563EB]/30 font-sans">
      <main className="mx-auto max-w-6xl px-6">
        <header className="flex items-center justify-between py-6">
          <div className="text-xl font-black tracking-tighter text-white">SN.</div>
          <a href="mailto:siya18ngcobo@gmail.com" className="text-sm font-medium text-[#94A3B8] hover:text-white transition">Contact</a>
        </header>
        
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <Footer />
      </main>
    </div>
  );
}