import React from 'react';
import { profile } from '../data/content';

const Contact = ({ socials }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Hey Meriem, let's talk");
    const body = encodeURIComponent(`${form.get('name')} | ${form.get('email')}\n\n${form.get('message')}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-wrap">
      <h3 className="heading-xl mb-8 text-center">Contact</h3>
      <div className="glass-panel p-8 md:p-10">
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-slate-300">
            <span>Name</span>
            <input
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <label className="grid gap-2 text-slate-300">
            <span>Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <label className="grid gap-2 text-slate-300">
            <span>Message</span>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tell me about your project"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </label>
          <button type="submit" className="btn-primary w-fit px-6">
            Send a message
          </button>
        </form>
        <div className="mt-8 flex flex-wrap gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:border-primary hover:shadow-glow"
              aria-label={social.label}
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
