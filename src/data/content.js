// Resolve images from src/assets at build time so Vite bundles them correctly.
const asset = (file) => new URL(`../assets/${file}`, import.meta.url).href;

export const profile = {
  name: 'Kunal Singha',
  title: 'Full Stack Web Developer',
  headline: "Hi, I'm Kunal",
  subHeadline: 'Full Stack Web Developer',
  bio:
    'Versatile MERN developer exploring blockchain and cybersecurity, focused on reliable, scalable web apps.',
  about:
    'Full Stack Web Developer with strong MERN expertise, exploring Blockchain Development and Cybersecurity. Solid CS fundamentals (DSA, OS, CN) and a track record of shipping performant, secure solutions.',
  resume: 'https://drive.google.com/file/d/1abgFHTAhzyIx4l0nhR2sypVgAVo0xdjP/view?usp=sharing',
  heroPhoto: asset('kunal-pic.png'),
  aboutPhoto: asset('kunal-pic.png'),
  email: 'singhakunal100@gmail.com',
  github: 'https://github.com/KSingha001',
  linkedin: 'https://www.linkedin.com/in/kunal-singha-04b236222/',
};

export const skillGroups = [
  {
    title: 'Programming Languages & Tools',
    items: ['Java', 'JavaScript', 'Python', 'Html-CSS', 'Solidity'],
  },
  {
    title: 'Fraameworks & Libraries',
    items: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'NumPy', 'Pandas', 'OpenCV', 'Matplotlib', 'Seaborn'],

  },
  {
    title: 'Databases & Storage',
    items: ['SQL', 'MySQL', 'MongoDB', 'AWS S3'],
  },
  {
    title: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'Hoppscotch',
    ],
  },
  {
    title: 'Cloud - Backend - DevOps',
    items: ['Docker', 'AWS', 'Hugging Face Spaces', 'FastAPI', 'CI/CD Pipeline', 'Render', 'Vercel'],
  },
];

export const projects = [
  {
    category: 'AI/ML',
    title: 'Emotion Recognition System',
    description:
      'Real-time webcam emotion detection using CNNs on FER2013 with TensorFlow/Keras and OpenCV.',
    repo: 'https://github.com/',
    demo: '#',
    image: asset('project1-placeholder.svg'),
  },
  {
    category: 'AI/ML',
    title: 'AI Voice Assistant',
    description:
      'Python voice assistant handling speech prompts, info retrieval, and task automation with OpenAI + SpeechRecognition.',
    repo: 'https://github.com/',
    demo: '#',
    image: asset('project2-placeholder.svg'),
  },
  {
    category: 'web-2',
    title: 'Food Pickup Plate',
    description:
      'MERN platform for pre-ordering meals, reducing wait times with secure payments and vendor visibility.',
    repo: 'https://github.com/',
    demo: '#',
    image: asset('project3-placeholder.svg'),
  },
  {
    category: 'web-2',
    title: 'MERN File Management System',
    description:
      'Role-based file sharing with admin/employee dashboards, JWT auth, cookie sessions, and Mongo-backed storage.',
    repo: 'https://github.com/',
    demo: '#',
    image: asset('project4-placeholder.svg'),
  },
  {
    category: 'web-2',
    title: 'Vacation Rental Platform',
    description:
      'Node/Express MVC app for browsing, listing, and reviewing rentals with secure auth, uploads, and location features.',
    repo: 'https://github.com/',
    demo: '#',
    image: asset('project1-placeholder.svg'),
  },
];

export const highlights = [
  { icon: 'ri-window-line', label: 'MERN Application Development' },
  { icon: 'ri-shield-keyhole-line', label: 'Blockchain & Cybersecurity Explorer' },
  { icon: 'ri-brain-line', label: 'Data/ML & Analytics Projects' },
];

export const techBadges = [
  // Darker text colors for improved contrast
  { label: 'MERN', className: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/60 top-[8%] left-[14%]' },
  { label: 'AWS', className: 'bg-amber-400/20 text-amber-200 border-amber-400/60 top-[6%] right-[12%]' },
  { label: 'Security', className: 'bg-indigo-400/20 text-indigo-200 border-indigo-400/60 bottom-[6%] right-[10%]' },
];

export const socials = [
  { icon: 'ri-github-fill', href: profile.github, label: 'GitHub' },
  { icon: 'ri-mail-fill', href: `mailto:${profile.email}`, label: 'Mail' },
  { icon: 'ri-linkedin-fill', href: profile.linkedin, label: 'LinkedIn' },
];
