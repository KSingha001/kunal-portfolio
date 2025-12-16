// Hero section: top-of-page intro with portrait and badges.
// - Text block on the left, circular portrait on the right.
// - Framer Motion animates the tech badges subtly.
// - The portrait container uses `aspect-square` + `overflow-hidden` to clip the image perfectly into a circle.
import React from 'react';
import { motion } from 'framer-motion';
import { profile, techBadges, socials } from '../data/content';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

const Hero = () => {
  return (
    <section id="home" className="section-wrap grid items-center gap-10 lg:grid-cols-2">
      <div className="space-y-5">
        
        {/* Title, headline and bio pulled from profile content */}
        {/* <p className="subtle-text">{profile.title}</p> */}

        {/* Typewriter intro replacing static headline/subheadline */}
        <div className="mt-2">
          <TypewriterEffect
            className="heading-xl text-left text-4xl md:text-5xl"
            words={[
              { text: "Hi, ", className: 'text-white' },
              { text: "I'm", className: 'text-white' },
              { text: "Kunal", className: 'text-white' },
            ]}
          />
        </div>

        {/* <h1 className="heading-xl text-4xl md:text-5xl">{profile.headline}</h1> */}
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#b05cff] to-[#ff4fb1] bg-clip-text text-transparent drop-shadow-md">
          {profile.subHeadline}
        </h2>

        <p className="text-muted max-w-xl leading-relaxed text-slate-300">
          {profile.bio}
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Open resume in a new tab; no direct download option */}
          <a
            className="btn-primary"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume <i className="ri-external-link-line" />
          </a>
          <div className="flex items-center gap-2">
            {/* Social icons: darker hover for clearer contrast */}
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:border-primary-strong hover:text-primary-strong hover:bg-white/10 hover:shadow-glow"
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Portrait container: square aspect + max width; inner circle clips the image */}
      <div className="relative mx-auto aspect-square w-full max-w-[440px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/30 via-bg-dark to-bg-dark blur-3xl" />
        <div className="relative grid h-full place-items-center rounded-full border border-white/10 bg-gradient-to-b from-primary/10 via-bg-dark to-bg-dark shadow-glow overflow-hidden">
          <img
            src={profile.heroPhoto}
            alt="Portrait"
            className="block h-full w-full object-cover object-[50%_42%] md:object-[50%_40%]"
          />
        </div>

        {/* Animated tech badges orbiting the portrait */}
        {techBadges.map((badge) => (
          <motion.div
            key={badge.label}
            className={`badge absolute grid h-16 w-16 place-items-center rounded-full border text-sm font-bold ${badge.className}`}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            {badge.label}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
