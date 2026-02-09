import { ArrowDown, GithubIcon, Linkedin, Mail, Sparkles, Code2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Full Stack Developer', 'Problem Solver', 'Clean Coder', 'Frontend Developer', 'Backend Developer', 'Continuous Learner'];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const text = titles[titleIndex];
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setTitleIndex((titleIndex + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 dark:from-teal-500/20 dark:to-cyan-500/20 border border-teal-500/20 dark:border-teal-500/30 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300">Open to Opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Kavindu Harshana
              </span>
            </h1>

            {/* Animated Subtitle */}
            <div className="h-12 md:h-14 mb-6 animate-slide-up animation-delay-200">
              <p className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed animate-slide-up animation-delay-400">
              Building scalable applications with modern technologies. Passionate about creating elegant solutions to complex problems and delivering exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8 animate-slide-up animation-delay-600">
              <a
                href="#contact"
                className="group px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-full font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Let's Connect
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full font-semibold text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <Code2 className="w-5 h-5" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start animate-slide-up animation-delay-800">
              <a
                href="https://github.com/kythonlk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full hover:bg-white dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300 group"
              >
                <GithubIcon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/kythonlk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full hover:bg-white dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
              </a>
              <a
                href="mailto:hello@kythonlk.tech"
                className="p-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full hover:bg-white dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center items-center order-1 md:order-2 animate-slide-up">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />

              {/* Rotating Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 animate-spin-slow" style={{ animationDuration: '3s' }} />

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://kythonlk.tech/s.jpg"
                  alt="Kythonlk"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-20 blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce border border-slate-400 dark:border-slate-600 rounded-full w-10 h-10 flex items-center justify-center" onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}>
          <ArrowDown className="w-6 h-6 text-slate-400 dark:text-slate-600" />
        </div>
      </div>
    </section>
  );
}
