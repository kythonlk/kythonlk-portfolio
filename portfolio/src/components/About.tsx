import { Code2, Zap, Target, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and design patterns'
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks to deliver cutting-edge solutions'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that exceed expectations and drive business value'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams to achieve common goals'
    }
  ];

  function yearsSince2020() {
    const start = new Date(2020, 0); // January 2020 (month index 0)
    const now = new Date();

    const years = now.getFullYear() - start.getFullYear();
    const months = now.getMonth() - start.getMonth();

    // Total months difference
    const totalMonths = years * 12 + months;

    const yearsPart = Math.floor(totalMonths / 12);
    const monthsPart = totalMonths % 12;

    // Format like 5.9 (years.months)
    return `${yearsPart}.${monthsPart}`;
  }

  // Example:
  console.log(yearsSince2020()); // → "5.9" (as of Oct 2025)

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a passionate developer who loves transforming ideas into elegant, functional applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that users love.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My approach combines technical excellence with creative problem-solving. I believe in writing code that's not just functional, but also clean, efficient, and maintainable.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Currently seeking opportunities where I can contribute to innovative projects, collaborate with talented teams, and continue growing as a developer.
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-800/50 dark:to-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {yearsSince2020()}+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  30+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Commitment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
