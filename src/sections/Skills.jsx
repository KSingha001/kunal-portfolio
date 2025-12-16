import React from 'react';
import { skillGroups } from '../data/content';

const Skills = () => (
  <section id="skills" className="section-wrap">
    <h3 className="heading-xl mb-10 text-center">Technical Skills</h3>
    <div className="space-y-8">
      {skillGroups.map((group) => (
        <div key={group.title} className="glass-panel p-6 md:p-7">
          <h4 className="text-xl font-semibold bg-gradient-to-r from-[#b05cff] to-[#ff4fb1] bg-clip-text text-transparent mb-4">{group.title}</h4>
          <div className="flex flex-wrap gap-3">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-sm border border-white/10 hover:border-primary transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
