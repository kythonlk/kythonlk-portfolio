import { Mail, MapPin, Send, Github, Linkedin, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Get In Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I'm excited to hear about your projects and discuss how I can contribute to your team. Let's build something amazing together!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:hello@kythonlk.tech"
                className="group flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Email</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">hello@kythonlk.tech</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Location</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Available for remote work globally</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/kythonlk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:scale-110 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/kythonlk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 hover:scale-110 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Download Resume */}
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-lg font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-slate-800 dark:text-slate-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-slate-800 dark:text-slate-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-slate-800 dark:text-slate-200"
                  placeholder="Job Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none text-slate-800 dark:text-slate-200"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-lg font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
