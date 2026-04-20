import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'SMT Fruit Shop Management System',
    description: 'Production-ready backend and mobile app with JWT authentication, offline-first data sync, and WhatsApp billing integration.',
    tech: ['Django', 'Flutter', 'SQLite'],
    colSpan: 'col-span-1 md:col-span-2',
    image: 'bg-gradient-to-br from-purple-900/40 to-indigo-900/40',
    status: { label: 'Completed', color: 'bg-green-500' },
    links: {
      demo: "https://smtapp.vercel.app/",
      github: "https://github.com/navafv/smt_project"
    }
  },
  {
    title: 'Noor Stitching Institute',
    description: 'Full-stack institute logistics including student registrations, attendance tracking, and payment management.',
    tech: ['React', 'Django REST', 'PostgreSQL'],
    colSpan: 'col-span-1',
    image: 'bg-gradient-to-br from-pink-900/40 to-rose-900/40',
    status: { label: 'Completed', color: 'bg-green-500' },
    links: {
      demo: "https://noorinstitute.vercel.app/",
      github: "https://github.com/navafv/noor-backend"
    }
  },
  {
    title: 'ETS2 Mods Platform',
    description: 'Gaming community hub. Custom-built platform for uploading, managing, and downloading Euro Truck Simulator 2 game modifications.',
    tech: ['React', 'Django', 'PostgreSQL'],
    colSpan: 'col-span-1',
    image: 'bg-gradient-to-br from-teal-900/40 to-emerald-900/40',
    status: { label: 'Completed', color: 'bg-green-500' },
    links: {
      demo: "https://ets2mods.vercel.app/",
      github: "https://github.com/navafv/ets2mods"
    }
  },
  {
    title: 'Family Plus (StyleStock)',
    description: 'A comprehensive full-stack e-commerce application for a retail clothing shop. Currently architecting custom UI templates and configuring a production-ready Django backend for future deployment.',
    tech: ['Python', 'Django', 'Tailwind'],
    colSpan: 'col-span-1 md:col-span-2',
    image: 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40',
    status: { label: 'In Development', color: 'bg-amber-500' }, links: {
      demo: "#",
      github: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              A selection of my best work, focusing on robust architecture and premium user interfaces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group glass-card rounded-3xl overflow-hidden relative flex flex-col justify-end p-8 glass-card-hover ${project.colSpan} ${project.image}`}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-0"></div>

              {/* Status Badge */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${project.status.color} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status.color}`}></span>
                </span>
                <span className="text-xs font-medium text-gray-300">{project.status.label}</span>
              </div>

              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  {project.links.demo && (
                    <a target='_blank' rel='noopener noreferrer' href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a target='_blank' rel='noopener noreferrer' href={project.links.github} className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors">
                      <GitBranch size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
