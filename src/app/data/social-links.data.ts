import { SocialLink } from '../models/social-link.model';

export const SOCIAL_LINKS: SocialLink[] = [
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
  },
  {
    label: 'Instagram',
    icon: 'fa-brands fa-instagram',
    url: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDU3OTIzNjQyMjc2MDY2?story_media_id=3620401359884044203_8015582216&igsh=OHc5aTV0c3F0anR0',
    colorFrom: '#a94ce7',
    colorTo: '#e1306c'
  }
];

export const LANGUAGE_OPTIONS = [
  { code: 'pt-br' as const, label: 'Português', flag: 'images/brazil.webp' },
  { code: 'en-us' as const, label: 'English', flag: 'images/eua.webp' },
  { code: 'es-es' as const, label: 'Español', flag: 'images/spain.webp' }
];
