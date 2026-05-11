import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'UmaCausa',
    descriptionKey: 'umaCausaDescription',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    preview: {
      kind: 'iframe',
      src: 'https://uma-causa-estatico.vercel.app'
    },
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Gug4negrao/umaCausa',
        icon: 'fa-brands fa-github'
      },
      {
        label: 'visitProject',
        url: 'https://uma-causa-estatico.vercel.app',
        primary: true
      }
    ]
  },
  {
    title: 'Portfólio',
    descriptionKey: 'portfolioDescription',
    tags: ['Angular', 'TypeScript', 'CSS'],
    accent: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Gug4negrao/portifolioGustavo',
        icon: 'fa-brands fa-github'
      }
    ]
  }
];
