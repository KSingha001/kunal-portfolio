import React, { useMemo, useState } from 'react';
import { projects } from '../data/content';

const tabs = [
  { key: 'web-2', label: 'Web 2.0' },
  { key: 'web-3', label: 'Web 3.0' },
  { key: 'AI/ML', label: 'AI/ML' },
];

const ProjectCard = ({ project }) => (
  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-lg">
    <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
    <div className="flex flex-1 flex-col gap-3 p-4">
      <h4 className="text-lg font-semibold">{project.title}</h4>
      <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
      <div className="mt-auto flex gap-2">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-primary"
        >
          <i className="ri-github-fill mr-2" />Repository
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-lg border border-white/10 bg-gradient-to-r from-[#b05cff] to-[#ff4fb1] px-3 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-glow"
        >
          <i className="ri-play-circle-fill mr-2" />Demo
        </a>
      </div>
    </div>
  </article>
);

const Projects = () => {
  // Default selected tab set to 'web-2'
  const [active, setActive] = useState('web-2');
  const filtered = useMemo(() => projects.filter((p) => p.category === active), [active]);

  return (
    <section id="projects" className="section-wrap">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="heading-xl">My Projects</h3>
        <div className="flex gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === tab.key
                  ? 'bg-gradient-to-r from-[#b05cff] to-[#ff4fb1] text-white shadow-glow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
