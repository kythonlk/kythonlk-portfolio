import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Pr from './components/Pr';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div
          className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200/20 dark:border-slate-700/50 shadow-xl hover:scale-110 transition-all duration-300 group"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 group-hover:-rotate-180 transition-transform duration-500" />
        )}
      </button>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Pr />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2025 kythonlk.tech • Crafted with passion
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/kythonlk" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/kythonlk" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@kythonlk.tech" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
