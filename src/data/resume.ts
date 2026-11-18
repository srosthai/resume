export interface Profile {
  name: string;
  displayName: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  projectsUrl: string;
  site: string;
  summary: string;
  now: string;
  nowUrl: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  url?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Project {
  title: string;
  type: string;
  year: string;
  description: string;
  stack: string[];
  cover: string;
  coverAlt: string;
  fit: 'cover' | 'contain';
  links: { label: string; href: string }[];
}

export const profile: Profile = {
  name: 'Sros Thai',
  displayName: 'SROS THAI',
  role: 'Full Stack Developer',
  location: 'Siem Reap, Cambodia',
  email: 'srosthai00@gmail.com',
  github: 'https://github.com/srosthai',
  linkedin: 'https://www.linkedin.com/in/sros-thai-b491b42ab/',
  projectsUrl: 'https://projects.srosthai.me',
  site: 'https://resume.srosthai.me',
  summary:
    'Developer, driven by innovation and dedicated to creating cutting-edge solutions that make a real impact.',
  now: 'Full Stack Developer at Vehabooking.',
  nowUrl: 'https://vehabooking.com/'
};

export const approach = [
  'I like the whole stack. The schema, the API contract, and the last ten pixels of the interface all decide whether a product feels solid.',
  'Most of my work is Laravel on the backend and Vue, React, or Astro on the front. I care about software that is simple to use and honest about what it does.'
];

export const jobs: Job[] = [
  {
    company: 'Vehabooking',
    role: 'Full Stack Developer',
    period: 'Jul 2025 — Present',
    location: 'Cambodia',
    summary: 'Build the product behind a Cambodia travel booking platform.',
    points: [
      'Build and maintain full-stack features for a travel booking platform.',
      'Work across the booking flow for tours, transport, events, and tickets.',
      'Collaborate with the product team to ship and maintain production features.'
    ],
    url: 'https://vehabooking.com/'
  },
  {
    company: 'eOcambo Technology',
    role: 'Backend Laravel Developer',
    period: 'Jul 2023 — 2025',
    location: 'Siem Reap, Cambodia',
    summary: 'Build and maintain the systems behind real day-to-day operations.',
    points: [
      'Build and maintain Laravel applications for driving management, POS, and room rental systems.',
      'Design REST APIs and model relational data in MySQL, with authentication and role-based access.',
      'Work with frontend developers to ship complete features and keep integrations reliable.'
    ]
  },
  {
    company: 'eOcambo Technology',
    role: 'IT Support',
    period: 'Oct 2022 — May 2023',
    location: 'Siem Reap, Cambodia',
    summary: 'Kept hardware, software, and the people using them running.',
    points: [
      'Diagnosed and resolved hardware, software, printer, and network issues.',
      'Installed and configured operating systems and software for staff.',
      'Wrote user manuals and FAQs, and supported users remotely with TeamViewer and AnyDesk.'
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    items: ['PHP', 'Laravel', 'Blade', 'REST APIs', 'GraphQL', 'MySQL', 'Eloquent', 'Sanctum', 'Passport', 'Role-based access']
  },
  {
    label: 'Frontend',
    items: [
      'JavaScript',
      'Vue.js',
      'Nuxt',
      'Vant UI',
      'React',
      'Next.js',
      'Astro',
      'Nitro',
      'Tailwind CSS',
      'HTML',
      'CSS'
    ]
  },
  {
    label: 'Tools',
    items: ['Git', 'Postman', 'Linux', 'SSH', 'Vite']
  },
  {
    label: 'AI tools',
    items: ['Codex', 'Claude', 'OpenCode', 'Antigravity']
  },
  {
    label: 'Deploy',
    items: ['cPanel', 'DigitalOcean', 'Netlify', 'Vercel']
  },
  {
    label: 'Languages',
    items: ['Khmer (Native)', 'English (Intermediate)']
  }
];

export const projects: Project[] = [
  {
    title: 'ServerDesk',
    type: 'Desktop app',
    year: '2026',
    description:
      'A local-first desktop app for managing Linux VPS servers over SSH. Inventory, monitoring, terminals, services, and files in one workspace — with no hosted account or server agent.',
    stack: ['Tauri 2', 'Rust', 'React 19', 'TypeScript', 'SQLite', 'SSH/SFTP'],
    cover: '/projects/serdesk.webp',
    coverAlt: 'ServerDesk server inventory screen',
    fit: 'cover',
    links: [
      { label: 'View', href: 'https://serdesk.srosthai.me/' },
      { label: 'GitHub', href: 'https://github.com/srosthai/ServerDesk' }
    ]
  },
  {
    title: 'Vendly',
    type: 'Full stack',
    year: '2026',
    description:
      'A one-link online shop for small sellers, in the browser and inside Telegram. Customers browse, add to cart, and send a buy request straight to the seller’s chat.',
    stack: ['Laravel 13', 'Inertia', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    cover: '/projects/vendly.webp',
    coverAlt: 'Vendly logo',
    fit: 'contain',
    links: [{ label: 'GitHub', href: 'https://github.com/srosthai/vendly' }]
  },
  {
    title: 'RentMee',
    type: 'Full stack',
    year: '2026',
    description:
      'Rental billing for room and property owners in Cambodia. Record utilities once a month, generate QR-payable invoices, and track what has been paid.',
    stack: ['Laravel', 'React', 'MySQL', 'Tailwind CSS'],
    cover: '/projects/rentmee.webp',
    coverAlt: 'RentMee invoice icon',
    fit: 'contain',
    links: [{ label: 'View', href: 'https://rentmee.srosthai.me/' }]
  }
];

export interface Education {
  school: string;
  degree: string;
  period: string;
  detail?: string;
  location: string;
  mark: string;
  logo?: string;
  url?: string;
}

export const education: Education[] = [
  {
    school: 'Build Bright University',
    degree: 'BSc Computer Science',
    period: '2022 — 2025',
    detail: 'GPA 3.54 / 4.00',
    location: 'Siem Reap, Cambodia',
    mark: 'BBU',
    logo: '/logo-bbu.webp',
    url: 'https://web.bbu.edu.kh/siem-reap-campus-52'
  },
  {
    school: 'Kouk Doung High School',
    degree: 'High School Diploma',
    period: '2018 — 2021',
    location: 'Siem Reap, Cambodia',
    mark: 'KD'
  }
];
