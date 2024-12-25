import Img1 from '../images/work-1.webp'
import Img2 from '../images/work-2.webp'
import Img3 from '../images/work-3.webp'
import Img4 from '../images/work-4.webp'
import Img5 from '../images/work-5.webp'
import Img6 from '../images/work-6.webp'
import Img7 from '../images/work-7.webp'
import Img8 from '../images/work-8.webp'
import Img9 from '../images/work-9.webp'
import Img10 from '../images/work-10.webp'
import Img11 from '../images/work-11.webp'
import Img12 from '../images/work-12.webp'
import Img13 from '../images/work-13.webp'
import Img14 from '../images/work-14.webp'
import Img15 from '../images/work-15.webp'
import Img16 from '../images/work-16.webp'
import Img17 from '../images/work-17.webp'
import Img18 from '../images/work-18.webp'
import Img19 from '../images/work-19.webp'
import Img20 from '../images/work-20.webp'
import Img21 from '../images/work-21.webp'
import Img22 from '../images/work-22.webp'
import Img23 from '../images/work-23.webp'
import Img24 from '../images/work-24.webp'
import Img25 from '../images/work-25.webp'
import Img26 from '../images/work-26.webp'
import Img27 from '../images/work-27.webp'
import Img28 from '../images/work-28.webp'

export interface Project {
  name: string
  description: string
  link: string
  tags: string[]
  image: any
}

export interface ProjectCategory {
  [key: string]: Project[]
}

export const projects: ProjectCategory = {
  office: [
    { name: "Dhabione", description: "E-commerce website built with WordPress for 10k daily users", link: "https://dhabione.com", tags: ["WordPress", "WooCommerce", "Bootstrap"], image: Img5 },
    { name: "Extraco", description: "Extraco Company website", link: "https://extraco.ae/", tags: ["WordPress", "MySQL", "PHP", "Tailwind", "jQuery"], image: Img9 },
    { name: "Albadr", description: "Albadr Company website", link: "https://albadr.ae/", tags: ["WordPress", "MySQL", "PHP", "Tailwind", "jQuery"], image: Img1 },
    { name: "Guaranteed Lowest Price", description: "A WordPress plugin for guaranteed lowest price", link: "https://github.com/Kythonlk/guaranteed_lowest_price", tags: ["WordPress", "E-commerce"], image: Img6 },
    { name: "Warranty Option For WooCommerce", description: "WooCommerce plugin that can add warranty years", link: "https://github.com/Kythonlk/Warranty-Option-For-Woocommerce", tags: ["WordPress", "WooCommerce"], image: Img7 },
    { name: "Excel to SQL", description: "Simple Excel to SQL converter in React", link: "https://excel-sql.netlify.app/", tags: ["React", "SQL", "Excel"], image: Img28 },
    { name: "Milton", description: "E-commerce website built with WordPress for 10k daily users", link: "https://milton.ae", tags: ["WordPress", "WooCommerce", "Bootstrap"], image: Img17 },
    { name: "Fixperts Quicklink", description: "Custom payment quicklink app for Fixperts company", link: "#", tags: ["React", "Next.js", "Tailwind", "Go", "MSSQL"], image: Img19 },
    { name: "LocalStorage Client", description: "TypeScript npm package for easy localStorage usage", link: "https://github.com/Kythonlk/LocalStorageClient", tags: ["TypeScript", "NPM", "State management"], image: Img15 },
  ],
  client: [
    { name: "Tinylux Ecommerce", description: "E-commerce site built with Go lang backend and React (Next.js) front end with Stripe checkout", link: "https://shop.tinylux.ae", tags: ["Go", "E-commerce", "React", "Next.js", "Postgres", "Stripe"], image: Img21 },
    { name: "Tinylux invoice", description: "An invoice generator for Babylux using React", link: "https://babylux-invoice.vercel.app", tags: ["React", "Finance", "Invoice", "PDF"], image: Img24 },
    { name: "Business Portfolio Template", description: "Astro simple business portfolio website", link: "https://dev.kythonlk.com", tags: ["Astro", "Portfolio"], image: Img27 },
    { name: "Beccakate", description: "Photography website built with WordPress", link: "https://beccakate.com", tags: ["WordPress", "Elementor", "Bootstrap"], image: Img2 },
    { name: "Grand ERP", description: "Custom ERP Built for UAE client", link: "#", tags: ["React", "Next.js", "Tailwind", "Go", "MSSQL"], image: Img8 },
    { name: "Crizal", description: "E-commerce website built with WordPress based in Sri Lanka", link: "https://crizalapparel.lk", tags: ["WordPress", "WooCommerce", "Bootstrap"], image: Img3 },
    { name: "Tinylux", description: "Services website built with WordPress", link: "https://tinylux.ae", tags: ["WordPress", "WooCommerce", "Bootstrap"], image: Img25 },
  ],
  hobby: [
    { name: "Api Testing Client", description: "API testing tool made with Go lang (TUI)", link: "https://github.com/Kythonlk/Fastreq", tags: ["Go", "CLI", "TUI"], image: Img13 },
    { name: "Task-Reminder", description: "A todo app with alarm for reminders", link: "https://kythonlk.github.io/task-reminder/", tags: ["JavaScript", "HTML", "Tailwind CSS", "localStorage"], image: Img26 },
    { name: "Finance Management", description: "Personal finance management app made with React and localStorage", link: "https://my-finance-manager.netlify.app/", tags: ["React", "Finance", "localStorage"], image: Img10 },
  ],
}

