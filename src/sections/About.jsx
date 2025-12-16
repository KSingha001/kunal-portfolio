import React from 'react';
import { profile, highlights } from '../data/content';

const About = () => (
// About section: circular portrait + bio and highlights.
// - Left: clipped circular image with gradient glow background.
// - Right: text content and highlight badges derived from `profile` and `highlights`.
  <section id="about" className="section-wrap">
    <div className="glass-panel grid gap-10 p-8 md:grid-cols-[1.1fr_1fr] md:p-10">
      {/* Circular image container: square aspect, inner circle clips the image */}
      <div className="relative mx-auto aspect-square w-full max-w-[380px] md:max-w-[420px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent/25 via-bg-dark to-bg-dark blur-3xl" />
        <div className="relative grid h-full place-items-center rounded-full border border-white/10 bg-gradient-to-b from-accent/15 via-bg-dark to-bg-dark shadow-glow overflow-hidden">
          {/* Image fills and centers inside the circle; object-position nudges focal point */}
          <img src={profile.aboutPhoto} alt="About" className="block h-full w-full object-cover object-[50%_36%] md:object-[50%_34%]" />
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="heading-xl">About Me</h3>
        <h4 className="text-2xl font-semibold text-primary">I'm Kunal Singha</h4>
        {/* Bio text sourced from content profile */}
        <p className="leading-relaxed text-slate-300">{profile.about}</p>
        <div className="grid gap-3">
          {/* Highlight list: icon + label badges */}
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
            >
              <i className={`${item.icon} text-primary text-xl`} />
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
