import React from "react";
import { Clock, ExternalLink, GitBranch, Lock } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 relative z-10"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2
              id="projects-heading"
              className="font-heading text-4xl md:text-5xl font-bold mb-4"
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-400">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              A selection of my best work, focusing on robust architecture and
              premium user interfaces.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto lg:auto-rows-[320px]">
          {projects.map((project, index) => {
            const demoUrl = project.links?.demo?.trim();
            const githubUrl = project.links?.github?.trim();

            return (
              <article
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_60px_rgba(168,85,247,0.12)] ${project.colSpan}`}
                aria-label={project.title}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.image} opacity-60`}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full group-hover:shadow-purple-500/10" />
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex h-full flex-col">
                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="
              rounded-full border border-white/10
              bg-white/5 px-3 py-1
              text-xs font-medium text-zinc-300
              backdrop-blur-md
            "
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Status */}
                    <div
                      className="
          flex shrink-0 items-center gap-2
          rounded-full border border-emerald-500/20
          bg-emerald-500/10
          px-3 py-1 text-xs font-medium
          text-emerald-300
        "
                    >
                      <span className="relative flex h-2 w-2">
                        <span
                          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${project.status.color} opacity-75`}
                        />
                        <span
                          className={`relative inline-flex h-2 w-2 rounded-full ${project.status.color}`}
                        />
                      </span>

                      {project.status.label}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="h-10" />

                  {/* Bottom Content */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-300">
                      {project.title}
                    </h3>

                    <p className=" mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-zinc-300/90 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {demoUrl ? (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={demoUrl}
                          className="
              inline-flex items-center gap-2
              rounded-full border border-white/10
              bg-white/5 px-5 py-2.5
              text-sm font-medium text-white
              transition-all duration-300
              hover:bg-white hover:text-black"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      ) : (
                        <span
                          className="
              inline-flex cursor-not-allowed items-center gap-2
              rounded-full border border-white/10
              bg-white/5 px-5 py-2.5
              text-sm font-medium text-zinc-400 opacity-60
            "
                        >
                          <Clock size={16} />
                          Deployment Pending
                        </span>
                      )}

                      {githubUrl ? (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={githubUrl}
                          className="
              inline-flex items-center gap-2
              rounded-full border border-white/10
              px-5 py-2.5
              text-sm font-medium text-zinc-300
              transition-all duration-300
              hover:border-purple-400/50
              hover:text-white
            "
                        >
                          <GitBranch size={16} />
                          Source Code
                        </a>
                      ) : (
                        <span
                          className="
              inline-flex cursor-not-allowed items-center gap-2
              rounded-full border border-white/10
              bg-white/5 px-5 py-2.5
              text-sm font-medium text-zinc-400 opacity-60
            "
                        >
                          <Lock size={16} />
                          Private / WIP
                        </span>
                      )}
                    </div>
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
