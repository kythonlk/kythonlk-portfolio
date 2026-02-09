import { Code2, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Vue.js', 'HTML5', 'CSS3']
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-teal-500 to-emerald-500',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL', 'Microservices', 'WebSockets']
    },
    {
      icon: Database,
      title: 'Database',
      color: 'from-cyan-500 to-blue-500',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'MySQL', 'Firebase', 'Prisma', 'TypeORM']
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      color: 'from-emerald-500 to-teal-500',
      skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Nginx', 'GitHub Actions', 'Vercel']
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      color: 'from-violet-500 to-purple-500',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Mobile-First Design']
    },
    {
      icon: Code2,
      title: 'Other',
      color: 'from-orange-500 to-amber-500',
      skills: ['Testing', 'Agile', 'UI/UX', 'System Design', 'Problem Solving', 'Clean Code', 'TDD', 'Security']
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bar Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-8">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Full Stack Development', level: 95 },
              { name: 'Problem Solving', level: 98 },
              { name: 'System Architecture', level: 90 },
              { name: 'Code Quality & Testing', level: 92 },
            ].map((competency, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {competency.name}
                  </span>
                  <span className="text-sm font-bold text-teal-600 dark:text-teal-400">
                    {competency.level}%
                  </span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${competency.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
