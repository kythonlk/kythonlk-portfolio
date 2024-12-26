import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
const tools = [
  { name: 'Arch Linux', icon: 'archlinux.svg', category: 'OS' },
  { name: 'Httpie', icon: 'httpie.svg', category: 'API Testing' },
  { name: 'Figma', icon: 'figma.svg', category: 'Designing' },
  { name: 'LibreOffice', icon: 'libreoffice.svg', category: 'Management' },
];
const programmingLanguages = [
  { name: 'JavaScript', icon: 'javascript.svg' },
  { name: 'PHP', icon: 'php.svg' },
  { name: 'Python', icon: 'python.svg' },
  { name: 'Bash', icon: 'gnubash.svg' },
];
const mainTool = [
  { name: 'Go', icon: 'go.svg' },
  { name: 'TypeScript', icon: 'typescript.svg' },
  { name: 'Postgres', icon: 'postgresql.svg' },
  { name: 'React', icon: 'react.svg' },
  { name: 'Git', icon: 'git.svg' },
  { name: 'Tailwindcss', icon: 'tailwindcss.svg' },
  { name: 'NeoVim', icon: 'neovim.svg' },
  { name: 'Express.js', icon: 'express.svg' },
  { name: 'GitHub', icon: 'github.svg' },
];
const databases = [
  { name: 'Mysql', icon: 'mysql.svg' },
  { name: 'Firebase', icon: 'firebase.svg' },
  { name: 'SQLite', icon: 'sqlite.svg' },
  { name: 'Mongodb', icon: 'mongodb.svg' },
];
const frameworks = [
  { name: 'Wordpress', icon: 'wordpress.svg' },
  { name: 'Next.js', icon: 'nextdotjs.svg' },
  { name: 'React Native', icon: 'react.svg' },
  { name: 'Strapi', icon: 'strapi.svg' },
];
const stylingMarkup = [
  { name: 'less', icon: 'less.svg' },
  { name: 'Bootstrap', icon: 'bootstrap.svg' },
  { name: 'Shadcn', icon: 'shadcnui.svg' },
  { name: 'Mdx', icon: 'mdx.svg' },
];
const devOps = [
  { name: 'Docker', icon: 'docker.svg' },
  { name: 'Nginx', icon: 'nginx.svg' },
  { name: 'Aws', icon: 'amazon.svg' },
  { name: "Cloudflare", icon: 'cloudflare.svg' },
];
const outerCategories = [
  {
    title: 'Programming Languages',
    items: programmingLanguages,
  },
  {
    title: 'Databases',
    items: databases,
  },
  {
    title: 'Frameworks',
    items: frameworks,
  },
  {
    title: 'Styling & Markup',
    items: stylingMarkup,
  },
  {
    title: 'DevOps Tools',
    items: devOps,
  },
  {
    title: 'Tools',
    items: tools,
  },
];
const TechStackVenn = () => {
  const baseUrl = "https://simpleicons.org/icons";

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-16">My Tech Stack</h1>

        <div className="relative w-full aspect-square max-w-4xl mx-auto">
          {/* Main central circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/20 rounded-full border-2 border-indigo-500/40 flex flex-col items-center justify-center z-10">
            <h3 className="text-white font-semibold mb-4">Main Stack</h3>
            <div className="grid grid-cols-3 gap-4 p-4">
              {mainTool.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center group">
                  <img
                    src={`${baseUrl}/${tech.icon}`}
                    alt={tech.name}
                    className="w-8 h-8 invert transition-transform hover:scale-110"
                  />
                  <span className="text-xs text-white mt-1 opacity-0 group-hover:opacity-100">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Outer circles */}
          {outerCategories.map((category, index) => {
            const positions = [
              'top-0 left-1/2 -translate-x-1/2',          // top
              'top-1/4 right-0 translate-y-1/2',          // top right
              'bottom-1/4 right-0 -translate-y-1/2',      // bottom right
              'bottom-0 left-1/2 -translate-x-1/2',       // bottom
              'bottom-1/4 left-0 -translate-y-1/2',       // bottom left
              'top-1/4 left-0 translate-y-1/2',          // top left
            ];

            return (
              <div
                key={category.title}
                className={`absolute ${positions[index]} w-56 h-56 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex flex-col items-center justify-center transition-transform hover:scale-105`}
              >
                <h3 className="text-white text-sm font-semibold mb-2">{category.title}</h3>
                <div className="grid grid-cols-2 gap-3 p-2">
                  {category.items.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center group">
                      <img
                        src={`${baseUrl}/${tech.icon}`}
                        alt={tech.name}
                        className="w-6 h-6 invert transition-transform hover:scale-110"
                      />
                      <span className="text-xs text-white mt-1 opacity-0 group-hover:opacity-100">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStackVenn;
