import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with real-time inventory, payment integration, and admin dashboard. Built for scalability and performance.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management application with real-time updates, task tracking, and team communication features.',
      tags: ['TypeScript', 'Next.js', 'Supabase', 'Tailwind'],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization, custom reports, and automated insights for business intelligence.',
      tags: ['React', 'D3.js', 'Express', 'MongoDB'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Social Media App',
      description: 'Modern social networking platform with posts, messaging, notifications, and content discovery algorithms.',
      tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool using GPT models for generating blog posts, social media content, and marketing copy.',
      tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness application with workout plans, nutrition tracking, progress analytics, and social features.',
      tags: ['Flutter', 'Firebase', 'ML Kit', 'REST API'],
      image: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="mx-40">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building modern, scalable applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white text-xs font-semibold shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-3 bg-white dark:bg-slate-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Github className="w-5 h-5 text-slate-800 dark:text-slate-200" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-white dark:bg-slate-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink className="w-5 h-5 text-slate-800 dark:text-slate-200" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kythonlk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-full font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105"
          >
            View More on GitHub
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
