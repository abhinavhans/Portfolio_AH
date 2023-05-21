import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  java,
  html,
  tailwind,
  whimsical,
  git,
  sql,
  figma,
  postgresql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  dcc,
  kelhel,
  nutanix,
  hsbc,
  nextleap,
  bangalore,
  skillupenginex,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: frontend,
  },
  {
    title: 'E2E production lifecycle and planning',
    icon: backend,
  },
  {
    title: 'Product enthusiast',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'C++',
    icon: javascript,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'whimsical',
    icon: whimsical,
  },
];

const experiences = [
  {
    title: 'Intern- Member of Technical Staff',
    company_name: 'Nutanix',
    icon: nutanix,
    iconBg: '#333333',
    date: 'Jun 2019 - Dec 2019',
  },
  {
    title: 'Software Engineer',
    company_name: 'HSBC Software Dev India',
    icon: hsbc,
    iconBg: '#333333',
    date: 'Sept 2020 - Feb 2022',
  },
  {
    title: 'NextLeap APM Fellowship',
    company_name: 'NextLeap',
    icon: nextleap,
    iconBg: '#333333',
    date: 'Feb 2023',
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'HSBC Software Dev India',
    icon: hsbc,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2023',
  },
  {
    title: 'Student- PGPBA',
    company_name: 'IIM Bangalore',
    icon: bangalore,
    iconBg: '#333333',
    date: 'June 2023 - Current',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'SkillupEngineX',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: skillupenginex,
    repo: 'https://drive.google.com/file/d/1m5iM7PmcYeRQqi2WgFha658TLLuF523s/view?usp=sharing',
    demo: 'https://drive.google.com/file/d/1m5iM7PmcYeRQqi2WgFha658TLLuF523s/view?usp=sharing',
  },
  // {
  //   id: 'project-2',
  //   name: 'Leaderboard',
  //   description:
  //     'A leaderboard list app that displays scores submitted by different players.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: leaderboard,
  //   repo: 'https://github.com/shaqdeff/Leaderboard',
  //   demo: 'https://shaqdeff.github.io/Leaderboard/',
  // },
  // {
  //   id: 'project-3',
  //   name: 'Math Magicians',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
