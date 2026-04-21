import React from 'react';
import { Clock, ExternalLink, GitBranch, Lock } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10" aria-labelledby="projects-heading">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="projects-heading" className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              A selection of my best work, focusing on robust architecture and premium user interfaces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[auto] lg:auto-rows-[320px]">
          {projects.map((project, index) => {
            const demoUrl = project.links?.demo?.trim();
            const githubUrl = project.links?.github?.trim();

            return (
              <article
                key={index}
                className={`group glass-card rounded-3xl overflow-hidden relative flex flex-col justify-end p-6 md:p-8 glass-card-hover ${project.colSpan} ${project.image}`}
                aria-label={project.title}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent z-0"></div>

                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${project.status.color} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status.color}`}></span>
                  </span>
                  <span className="text-xs font-medium text-gray-300">{project.status.label}</span>
                </div>

                <div className="relative z-10 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300 mt-14 lg:mt-0">
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

                  <p className="text-gray-300 text-sm mb-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    {demoUrl ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={demoUrl}
                        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-purple-400/50 hover:text-purple-300"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    ) : (
                      <span
                        className="inline-flex min-h-10 cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 opacity-60"
                        aria-disabled="true"
                      >
                        <Clock size={16} /> Deployment Pending
                      </span>
                    )}
                    {githubUrl ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={githubUrl}
                        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-purple-400/50 hover:text-purple-300"
                      >
                        <GitBranch size={16} /> Source Code
                      </a>
                    ) : (
                      <span
                        className="inline-flex min-h-10 cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 opacity-60"
                        aria-disabled="true"
                      >
                        <Lock size={16} /> Private / WIP
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
