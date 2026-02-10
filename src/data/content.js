// Edit this file to add your own info. Keep the same structure.

export const site = {
  title: 'Portfolio',
  name: 'Rushikesh Kshirsagar',
  // Crisp one-liner (quirky, punchy). Shows under your name.
  tagline: 'I turn ideas into things that run in a browser. And on a server. You get the idea.',
  // Short paragraph: self-aware, professional. Optional—leave empty string to hide.
  summary: "From database to DOM. I care about readable code and products that work. Not the flashiest dev, but I show up and ship.",
  // Add your photo: put an image in public/ (e.g. photo.jpg) and set photo to '/photo.jpg'. Set to null to hide.
  photo: '/photo.jpeg',
}

export const nav = [
  { id: 'hero', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'hobbies', label: 'Hobbies' },
]

export const experience = [
  {
    role: 'Fullstack Developer',
    company: 'UBS Financial Services',
    period: '2022 – Present',
    points: [
      'Engineered enterprise-grade frontend applications with React, Vite, and TypeScript, focusing on modular architecture and custom hooks to handle complex state transitions and high-frequency data updates.',
      'Designed and implemented distributed backend services using Java and Spring Boot, utilizing Netflix Eureka to manage service discovery and inter-service communication within a complex microservices mesh.',
      'Optimized performance and ensured cross-browser compatibility for various projects.',
      'Built and maintained a custom CMS for managing content and user permissions.',
      'Configured and maintained CI/CD pipelines using GitLab CI YAML and Azure DevOps pipelines, automating build, test, and deployment workflows across multiple environments.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Rises Analytics Solutions',
    period: '2018 – 2020',
    points: [
      'Built interactive dashboards and data visualizations using Power BI, creating custom DAX measures and Power Query transformations to support business reporting needs.',
      'Developed responsive React applications with TypeScript, implementing state management patterns and reusable component libraries for consistent UI across products.',
      'Designed and integrated RESTful API endpoints, handling authentication, error handling, and data transformation between frontend and backend services.',
      'Optimized application performance through code splitting, lazy loading, and bundle analysis, reducing initial load times by 30–40% on key user flows.',
      'Established frontend testing practices with Jest and React Testing Library, improving code reliability and reducing production bugs.',
    ],
  },
  
]

export const projects = [
  {
    name: 'QuickScoop (iOS)',
    description: 'Stay informed without the information overload. Get AI-powered, bite-sized news summaries with the full story just a swipe away.',
    tech: ['React Native', 'MongoDB', 'Heroku', 'AWS'],
    liveUrl: 'https://apps.apple.com/us/app/quickscoop/id6502798126',
    repoUrl: 'https://github.com/rushiKshirsagar/QuickScoop',
  },
  {
    name: 'News Aggregator Backend',
    description: 'An automated pipeline that scrapes, parses, and summarizes global headlines into a structured MongoDB database via scheduled cloud tasks.',
    tech: ['Javascript', 'Express', 'MongoDB'],
    liveUrl: 'https://quickscoop-backend-d915c315d985.herokuapp.com/search?search&countryCode=usa',
    repoUrl: 'https://github.com/rushiKshirsagar/QuickScoop-Backend',
  },
  {
    name: 'smart-api-throttle (npm)',
    description: 'A flexible, hook-based API rate limiter for frontend apps, featuring multiple throttling strategies and a universal async wrapper.',
    tech: ['React', 'Node', 'Vite'],
    liveUrl: 'https://www.npmjs.com/package/smart-api-throttle',
    repoUrl: 'https://github.com/rushiKshirsagar/smart-api-throttle',
    npmDownloads: "1000+",
  },
  {
    name: 'jsx-tsx-highlight-util (npm)',
    description: 'A lightweight React utility for dynamic text highlighting that supports custom styling and efficient DOM updates via class names.',
    tech: ['Javascript', 'React', 'Vite'],
    liveUrl: 'https://www.npmjs.com/package/jsx-tsx-highlight-util',
    repoUrl: 'https://github.com/rushiKshirsagar/jsx-tsx-highlight-util',
    npmDownloads: "600+",
  },
  {
    name: 'P2P marketplace',
    description: "A niche commerce platform dedicated to 'one-of-a-pair' items. Turn your lonely accessories into a complete set through a community-driven marketplace.",
    tech: ['Javascript', 'SQLlite','React', 'Vite', 'Railway'],
    liveUrl: 'http://oddoneout.biz/',
    repoUrl: 'https://github.com/rushiKshirsagar/odd-one-out',
    
  },
  {
    name: 'js-console-error-interceptor (npm)',
    description: "A real-time debugging companion that intercepts browser console errors and injects AI-generated solutions directly into the dev tools for instant troubleshooting.",
    tech: ['Node','OpenAI','Express'],
    liveUrl: 'https://www.npmjs.com/package/@waba/js-console-error-interceptor',
    repoUrl: 'https://github.com/rushiKshirsagar/Js-Console-Error-Interceptor',
    npmDownloads: "1200+",
  },
  {
    name: 'Public API Collection',
    description: "A collection of robust, publicly available APIs hosted on RapidAPI, providing developers with ready-to-use endpoints for specialized data processing and integration.",
    tech: ['Node','Express', 'MongoDB'],
    liveUrl: 'https://rapidapi.com/user/rushiKshirsagar',
    repoUrl: '',
    apiHits: '3000+',
  },
]


export const education = [
  {
    degree: 'B.Tech Information Technology',
    institution: 'University of Pune',
    year: '2014 – 2019',
    note: '',
    courses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
      'Android Development',
    ],
  },
  {
    degree: 'M.S. Computer Science',
    institution: 'New Jersey Institute of Technology',
    year: '2020 – 2022',
    note: '',
    courses: [
      'Distributed Systems',
      'Cloud Computing',
      'Machine Learning',
      'Advanced Algorithms',
      'Deep Learning',
      'Web Development',
    ],
  },
]

// level: 0–100, used only for the visual bar (no number shown)
export const skills = [
  { name: 'JavaScript', level: 92 },
  { name: 'TypeScript', level: 92 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Java', level: 70 },
  { name: 'Spring Boot', level: 60 },
  { name: 'REST APIs', level: 80 },
  { name: 'Azure', level: 40 },
  { name: 'Cosmos DB', level: 80 },
  { name: 'MongoDB', level: 70 },
  { name: 'Docker', level: 70 },
  { name: 'Kubernetes', level: 50 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'Git', level: 80 },
  { name: 'Honesty', level: 95 },
]

export const hobbies = [
  {
    title: 'Amateur astronomy',
    detail: 'Telescope nights, learning the sky, and early astrophotography experiments.',
  },
  {
    title: 'Chess',
    detail: 'Tactics puzzles, slow classical games, and trying not to blunder endgames.',
  },
  {
    title: 'Soccer & Cricket',
    detail: 'Weekend pickup games, mostly midfield and opening batter/occasional bowler.',
  },
  {
    title: 'Esports',
    detail: 'CS2 and FIFA — ranked grind, friendly matches, and learning from pros.',
  },
  {
    title: 'Cinematography & editing',
    detail: 'Shooting short clips, experimenting with framing, cuts, and color grading.',
  },
]

export const links = [
  { label: 'GitHub', href: 'https://github.com/rushiKshirsagar', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rushi10/', external: true },
  { label: 'npm', href: 'https://www.npmjs.com/~waba', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/rushiKshirsagar', external: true },
  // { label: 'Email', href: 'mailto:you@example.com', external: true },
]
