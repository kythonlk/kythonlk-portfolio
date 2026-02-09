import { Briefcase, Calendar } from 'lucide-react';
import { motion } from "framer-motion";

export default function Experience() {

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Extra Co Group",
      period: "Sep 2023 - Present (On Site)",
      location: "Sharjah, UAE",
      description: "Full Stack Development: Create, Revamped and maintained websites , Mobile Apps and Softwares",
      skills: ["Go", "React Native", "WordPress", "jQuery", "PHP", "Git", "React", "GitHub", "MS SQL", "PostgreSQL", "Tailwind CSS", "TypeScript", "Node.js", "Web socket", "Docker", "Portainer"]
      , achievements: [
        "Developed 3 websites, revamped 5, and maintained all.",
        "Architected and deployed microservices integrated with CRM & ERP.",
        "Secured servers post ransomware attack with advanced monitoring.",
        'Maintained multiple Windows & Linux servers and deployed containers using Docker , Portainer , Hyper-v with improved and modern ci/cd pipeline',
      ]
    },
    {
      title: "Software Engineer",
      company: "Dhabione",
      location: "Abu Dhabi, UAE",
      period: "Feb 2023 - Sep 2023 (On Site)",
      description: "Created and maintained software",
      skills: ["Next.js", "Go", "git", "express.js", , "Wordpress", "+10 others"]
      , achievements: [
        'Architected and deployed ecommerce website handling 10k+ daily requests',
        'Improved seo, load time, UX, design to reach AED 50k monthly orders to AED 2Mil+ orders',
        'Led team of 7 including 3 developers'
      ]
    },
    {
      title: "Associate Software Engineer",
      location: "New Zealand",
      company: "Iclick Online / Lead Lanka International",
      period: "Jul 2022 - Feb 2023 (Hybrid)",
      description: "Wordpress development",
      skills: ["Next.js", "Php", "Laravel", "git", "+7 others"]
      , achievements: [
      ]
    },
    {
      title: "Wordpress Developer",
      company: "Cyber Concepts Sri Lanka",
      location: "Colombo, Sri Lanka",
      period: "Aug 2021 - Jun 2022 (On Site)",
      description: "Designed and developed websites",
      skills: ["Mysql", "Php", "Laravel", "git", "+7 others"]
      , achievements: [
      ]
    },
    {
      title: "Trainee Web Developer",
      company: "SATASME HOLDINGS PVT LTD",
      location: "Awissawella, Sri Lanka",
      period: "Jan 2020 - Dec 2021 (On Site)",
      description: "Worked as trainee web developer",
      skills: ["Php", "Wordpress Development", "ftp", "Elementor", "+5 others"]
      , achievements: [
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-b from-slate-50/70 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto rounded-full shadow-md" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal-400 to-cyan-500 -translate-x-1/2" />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-12 items-center`}
              >
                {/* Content Card */}
                <div
                  className={`${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                    }`}
                >
                  <div className="group backdrop-blur-md bg-white/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 dark:hover:bg-slate-800/80">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-teal-600 dark:text-teal-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">
                        {exp.company}
                      </p>

                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-600 dark:text-slate-400 flex gap-2"
                          >
                            <span className="text-teal-500 dark:text-cyan-400">
                              ▹
                            </span>
                            {a}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-5">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-700 dark:text-cyan-300 border border-teal-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div
                  className={`${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                    }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
