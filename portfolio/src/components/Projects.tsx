import { useState, useEffect, useCallback } from 'react';
import Img1 from '../images/work-1.webp' // albadr, php , wordpress , boostrap5 , ACF , jQuery , js
import Img2 from '../images/work-2.webp' // becacakate, php , wordpress , boostrap5 , ACF , jQuery , js
import Img3 from '../images/work-3.webp' // crizalapparel, php , wordpress , boostrap5 , ACF , jQuery , js , 
import Img4 from '../images/work-4.webp' // advance wordpress search , php , Tailwind , jQuery , htmx , php
import Img5 from '../images/work-5.webp' // dhabione , php , boostrap5 , jQuery  , php , wordpress , react , sass , ts , ts
import Img6 from '../images/work-6.webp' // guaranteed_lowest_price , php , wordpress , boostrap5 , ACF , jQuery , js
import Img7 from '../images/work-7.webp' // Warranty-Option-For-Woocommerce , php , wordpress , boostrap5 , ACF , jQuery , js
import Img8 from '../images/work-8.webp' // erp React , nextjs , tailwind , go , mongodb , Postgres ,Docker , aws , github ci /cd
import Img9 from '../images/work-9.webp' // extraco , php , boostrap5 , jQuery  , php , wordpress , react , sass , ts , ts
import Img10 from '../images/work-10.webp' // my finance manager React  , tailwind , localStorage , js , ts
import Img11 from '../images/work-11.webp' // fixperts dashbord React  , tailwind , js , ts , go , c++ win api , Postgres , sqlite , focus crm api
import Img12 from '../images/work-12.webp' // flymax Global React  , tailwind , localStorage , js , ts , Astro
import Img13 from '../images/work-13.webp' // fast req Go , Rust, json
import Img14 from '../images/work-14.webp' // beverlyvilla.lk , php , wordpress , boostrap5 , ACF , jQuery , js
import Img15 from '../images/work-15.webp' // localStorage client js , ts
import Img17 from '../images/work-17.webp' // milton, php , wordpress , boostrap5 , ACF , jQuery , js
import Img18 from '../images/work-18.webp' // nexcode  React  , tailwind , localStorage , js , ts
import Img19 from '../images/work-19.webp' // fixperts quicklink nextjs , tailwind , js , ts , go  , Postgres , focus crm api , telr api
import Img20 from '../images/work-20.webp' // ruwanijayarathnejuwelaries, php , wordpress , boostrap5 , ACF , jQuery , js
import Img21 from '../images/work-21.webp' // shop.tinylux.ae nextjs , tailwind , js , ts , Postgres , Stripe
import Img22 from '../images/work-22.webp' // terminal my portfolio in terminal like posix  , tailwind , js  , go , wasm
import Img23 from '../images/work-23.webp' // used  texasfurniture uae, php , wordpress , boostrap5 , ACF , jQuery , js
import Img24 from '../images/work-24.webp' // tinylux invoice React  , tailwind , localStorage , js , ts
import Img25 from '../images/work-25.webp' // Tinylux , php , wordpress , Tailwind , jQuery , js , react
import Img26 from '../images/work-26.webp' // task-reminder React  , tailwind , localStorage , js , ts
import Img27 from '../images/work-27.webp' // dev.kythonlk.com React  , tailwind , localStorage , js , ts
import Img28 from '../images/work-28.webp' // excel to sql React  , tailwind , localStorage , js , ts
import Img29 from '../images/work-29.webp' // Real estate website ,  React  , tailwind, ts , nextjs ,js , property.kythonlk.com
import Img30 from '../images/work-30.webp'
import Img31 from '../images/work-31.webp'
import Img32 from '../images/work-32.webp'
import { ExternalLink, Eye } from 'lucide-react';

interface Project {
  name: string
  description: string
  link: string
  tags: string[]
  image: any
}

interface ProjectCategory {
  [key: string]: Project[]
}


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const projects: ProjectCategory = {
    office: [
      { name: "Dhabione", description: "A high-traffic e-commerce platform built with WordPress, serving over 10k daily users.", link: "https://dhabione.com", tags: ["WordPress", "WooCommerce", "Bootstrap", "PHP", "MySQL", "JavaScript", "jQuery", "PHP", "ACF"], image: Img5 },
      { name: "Extraco", description: "Corporate website for Extraco, showcasing their services and expertise.", link: "https://extraco.ae/", tags: ["WordPress", "MySQL", "PHP", "Bootstrap", "jQuery", "PHP", "ACF", "JavaScript"], image: Img9 },
      { name: "Albadr", description: "Business website for Albadr Company, featuring a modern design and dynamic content.", link: "https://albadr.ae/", tags: ["WordPress", "MySQL", "PHP", "Bootstrap", "jQuery", "PHP", "ACF", "JavaScript"], image: Img1 },
      { name: "Terracore", description: "Business website for Terracore, showcasing their services and expertise.", link: "https://terracoreme.ae/", tags: ["React", "Vite", "Nginx", "Tailwind", "TypeScript"], image: Img31 },
      { name: "GOC", description: "Business website for GOC, showcasing their services and expertise.", link: "https://goc.ae/", tags: ["React", "Vite", "Nginx", "Tailwind", "TypeScript"], image: Img32 },
      { name: "Guaranteed Lowest Price", description: "A WordPress plugin to ensure customers receive the lowest possible price on products.", link: "https://github.com/Kythonlk/guaranteed_lowest_price", tags: ["WordPress", "E-commerce"], image: Img6 },
      { name: "Warranty Option For WooCommerce", description: "WooCommerce plugin to add and manage product warranty options seamlessly.", link: "https://github.com/Kythonlk/Warranty-Option-For-Woocommerce", tags: ["WordPress", "WooCommerce"], image: Img7 },
      { name: "Excel to SQL", description: "React-based tool to convert Excel data into SQL queries effortlessly.", link: "https://excel-sql.netlify.app/", tags: ["React", "SQL", "Excel", "JavaScript", "jQuery", "PHP", "ACF"], image: Img28 },
      { name: "Milton", description: "Robust e-commerce website tailored for Milton, managing 10k daily users.", link: "https://milton.ae", tags: ["WordPress", "WooCommerce", "Bootstrap", "MySQL", "JavaScript", "jQuery", "PHP", "ACF"], image: Img17 },
      { name: "Fixperts Quicklink", description: "Custom payment quicklink application developed for Fixperts company operations.", link: "#", tags: ["React", "Next.js", "Tailwind", "Go", "MSSQL", "Postgres"], image: Img19 },
      { name: "LocalStorage Client", description: "An npm package for simplified localStorage management in TypeScript.", link: "https://github.com/Kythonlk/LocalStorageClient", tags: ["TypeScript", "NPM", "State management"], image: Img15 },
      {
        name: "Ruwani Jayarathne Jewelry",
        description: "E-commerce website for Ruwani Jayarathnejuwelaries, showcasing their products.",
        link: "https://ruwinijayarathnejewelry.com",
        tags: ["WordPress", "WooCommerce", "Bootstrap", "PHP", "MySQL", "JavaScript", "jQuery", "PHP", "ACF"],
        image: Img20

      },
      {
        name: "Beverlyvilla.lk",
        description: "Local Hotel Website for Beverlyvilla.lk, showcasing local accommodations. and booking via this website.",
        link: "https://beverlyvilla.lk",
        tags: ["WordPress", "WooCommerce", "Bootstrap", "PHP", "MySQL", "JavaScript", "jQuery", "PHP", "ACF"],
        image: Img14
      },
      {
        name: "Fixperts Dashboard",
        description: "Comprehensive dashboard for Fixperts company with advanced APIs integration for CRM and Postgres data management.",
        tags: ["React", "Tailwind CSS", "Go", "C++", "Postgres", "SQLite", "Focus CRM API"],
        link: "#",
        image: Img11,
      },
    ],
    client: [
      { name: "Woodberry Designs Project Management System", description: "A project management system for Woodberry Designs, including projects, item, company, client and many managment in one place daily pending project reminder via whatsapp for managment and workers.", link: "https://woodberry-designs.vercel.app/", tags: ["React", "Tailwind", "Go", "Whatsapp", "Express.js", "Postgres"], image: Img30 },
      { name: "Tinylux Ecommerce", description: "Next.js-powered e-commerce platform with Go backend and Stripe integration.", link: "https://tinylux.ae", tags: ["Go", "E-commerce", "React", "Next.js", "Postgres", "Stripe"], image: Img21 },
      { name: "Tinylux", description: "Service-focused website for Tinylux, built with WordPress and WooCommerce.", link: "https://tinylux.ae/services/", tags: ["WordPress", "WooCommerce", "Bootstrap"], image: Img25 },
      { name: "Tinylux Invoice", description: "Invoice generator app for Tinylux, built with React and optimized for efficiency.", link: "https://babylux-invoice.vercel.app", tags: ["React", "Finance", "Invoice", "PDF"], image: Img24 },
      { name: "Beccakate", description: "Photography portfolio website for Beccakate, featuring elegant designs.", link: "https://beccakate.com", tags: ["WordPress", "Elementor", "Bootstrap"], image: Img2 },
      {
        name: "Flymax Global",
        description: "Interactive global service website built with modern React and Astro frameworks for high performance and responsiveness.",
        tags: ["React", "Tailwind CSS", "Astro", "LocalStorage"],
        link: "https://flymaxglobal.com/",
        image: Img12,
      },
      { name: "Grand ERP", description: "A custom ERP solution tailored for a UAE client, enhancing operational efficiency.", link: "#", tags: ["React", "Next.js", "Tailwind", "Go", "MSSQL"], image: Img8 },
      { name: "Crizal", description: "E-commerce platform for Sri Lanka-based Crizal, built on WordPress.", link: "https://crizalapparel.lk", tags: ["WordPress", "WooCommerce", "Bootstrap"], image: Img3 },
      {
        name: "Advanced WordPress Search",
        description: "Custom WordPress search feature built with advanced technologies for better accuracy and user experience.",
        tags: ["WordPress", "PHP", "Tailwind CSS", "jQuery", "HTMX"],
        link: "https://spuiterijpres.nl/product/spuitbus//",
        image: Img4,
      },
      {
        name: "Texas Furniture UAE",
        description: "E-commerce site for UAE-based furniture retailer, crafted with WordPress and advanced customization using ACF.",
        tags: ["WordPress", "Bootstrap", "ACF", "jQuery", "JavaScript"],
        link: "https://usedfurnituretexas.com/",
        image: Img23,
      },
      { name: "Nexcode", description: "An a Web designing Company based on UK", link: "https://www.nexcode.co.uk/", tags: ["React", "Tailwind CSS", "TypeScript", "Next.js", "JavaScript", "jQuery"], image: Img18 },
      { name: "Business Portfolio Template", description: "Astro-based portfolio website template, ideal for businesses.", link: "https://dev.kythonlk.com", tags: ["Astro", "Portfolio"], image: Img27 },
    ],
    hobby: [
      { name: "API Testing Client", description: "A command-line API testing tool built with Go, featuring a terminal UI.", link: "https://github.com/Kythonlk/Fastreq", tags: ["Go", "CLI", "TUI", "JSON"], image: Img13 },
      {
        name: "Terminal Portfolio",
        description: "A unique portfolio website mimicking a terminal experience with interactive POSIX-like commands.",
        tags: ["Tailwind CSS", "JavaScript", "Go", "WASM"],
        link: "https://kythonlk.github.io/terminal/",
        image: Img22,
      },
      {
        name: "Property Website",
        description: "Real estate website for Property.Kythonlk.com, showcasing properties for sale.",
        link: "https://property-finder-ky.vercel.app",
        tags: ["React", "Tailwind CSS", "TypeScript", "Next.js", "JavaScript", "jQuery", "PHP", "ACF"],
        image: Img29
      },
      { name: "Task-Reminder", description: "A task management app with built-in reminders, built using JavaScript and Tailwind CSS.", link: "https://kythonlk.github.io/task-reminder/", tags: ["JavaScript", "HTML", "Tailwind CSS", "localStorage"], image: Img26 },
      { name: "Finance Management", description: "Personal finance management app using React and localStorage for tracking expenses.", link: "https://my-finance-manager.netlify.app/", tags: ["React", "Finance", "localStorage"], image: Img10 },
    ],
  };

  const allTags = [...new Set(
    Object.values(projects)
      .flat()
      .map(project => project.tags)
      .flat()
  )].sort();

  const getFilteredProjects = () => {
    let filtered = activeTab === 'all'
      ? Object.values(projects).flat()
      : projects[activeTab] || [];

    if (selectedTags.length > 0) {
      filtered = filtered.filter(project =>
        selectedTags.every(tag => project.tags.includes(tag))
      );
    }
    return filtered;
  };

  const count = Object.values(projects).flat().length;
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    if (document.startViewTransition) {
      await document.startViewTransition(async () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
      }).ready;
    } else {
      setIsModalOpen(false);
      setSelectedProject(null);
    }
  };

  const handleClickOutside = useCallback((event: any) => {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && !modalContent.contains(event.target)) {
      closeModal();
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, handleClickOutside]);

  return (
    <section className="py-12 bg-gray-900/20 text-gray-900 mt-[-120px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-[100px]">
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-lg bg-gray-900 p-1 text-sm md:text-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md ${activeTab === 'all'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-300 hover:text-gray-100'
                }`}
            >
              All Projects
            </button>
            {Object.keys(projects).map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-md capitalize ${activeTab === category
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-300 hover:text-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-8 hidden lg:block">
          <div className="flex justify-between mb-4 items-center">
            <h4 className="text-lg font-semibold mb-3">Filter by Technologies:</h4>
            <h4 className="text-sm font-semibold mb-3">Project Count: {count}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredProjects().map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100 dark:bg-slate-700">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    className="p-3 bg-white dark:bg-slate-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                    onClick={() => openModal(project)}
                  >
                    <Eye className="w-5 h-5 text-slate-800 dark:text-slate-200" />
                  </a>
                  <a
                    className="p-3 bg-white dark:bg-slate-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 text-slate-800 dark:text-slate-200" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
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
      </div>
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="modal-content bg-white rounded-lg p-10 max-w-3xl w-full relative motion-scale-in-[0.5] motion-translate-x-in-[-20%] motion-translate-y-in-[20%] motion-opacity-in-[0%] motion-blur-in-[10px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 text-4xl"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-full max-h-96 object-cover rounded-t-lg mb-4"
              style={{ viewTransitionName: 'project-image' }}
            />
            <h4
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ viewTransitionName: 'project-title' }}
            >
              {selectedProject.name}
            </h4>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {selectedProject.link && selectedProject.link !== '#' && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700"
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
