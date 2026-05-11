import { SocialLink } from '../models/social-link.model';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'WhatsApp',
    icon: 'fa-brands fa-whatsapp',
    url: 'https://wa.me/5513991255771',
    colorFrom: '#65c436',
    colorTo: '#1baf16'
  },
  {
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
    url: 'https://www.linkedin.com/in/gustavo-negr%C3%A3o',
    colorFrom: '#2087c4',
    colorTo: '#5ee3d4'
  },
  {
    label: 'GitHub',
    icon: 'fa-brands fa-github',
    url: 'https://github.com/Gug4negrao',
    colorFrom: '#3878fa',
    colorTo: '#281a77'
  },
  {
    label: 'Gmail',
    icon: 'fa-regular fa-envelope',
    url: 'mailto:guieguganegrao@gmail.com?subject=Contato&body=Olá, Gustavo! Gostaria de saber mais!',
    colorFrom: '#e92a2a',
    colorTo: '#490404'
  }
];

export const LANGUAGE_OPTIONS = [
  { code: 'pt-br' as const, label: 'Português', flag: 'images/brazil.png' },
  { code: 'en-us' as const, label: 'English', flag: 'images/eua.png' },
  { code: 'es-es' as const, label: 'Español', flag: 'images/spain.png' }
];
