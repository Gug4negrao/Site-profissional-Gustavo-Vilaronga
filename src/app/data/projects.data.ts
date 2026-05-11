import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'Atelier Rosa de Sicar',
    descriptionKey: 'atelierRosaDescription',
    tags: ['React', 'Tailwind'],
    accent: 'linear-gradient(135deg, #f43f5e, #f59e0b)',
    preview: {
      kind: 'image',
      src: 'images/projects/atelier-rosa-de-sicar.jpg',
      alt: 'Atelier Rosa de Sicar'
    },
    links: [
      {
        label: 'visitProject',
        url: 'https://atelierosadesicar.com.br',
        primary: true
      }
    ]
  },
  {
    title: 'Entendendo sua Mente',
    descriptionKey: 'entendendoSuaMenteDescription',
    tags: ['Angular', 'TypeScript', 'Tailwind'],
    accent: 'linear-gradient(135deg, #14b8a6, #0ea5e9)',
    preview: {
      kind: 'image',
      src: 'images/projects/entendendo-sua-mente.jpg',
      alt: 'Entendendo sua Mente - site profissional'
    },
    links: [
      {
        label: 'visitProject',
        url: 'https://entendendosuamente.com.br',
        primary: true
      }
    ]
  },
  {
    title: 'UmaCausa',
    descriptionKey: 'umaCausaDescription',
    tags: ['C#', 'JavaScript', 'HTML', 'CSS'],
    accent: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    preview: {
      kind: 'image',
      src: 'images/projects/umacausa.jpg',
      alt: 'UmaCausa - plataforma de doações'
    },
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/Gug4negrao/umaCausa',
        icon: 'fa-brands fa-github'
      }
    ]
  }
];
