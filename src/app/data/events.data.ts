import { Event } from '../models/event.model';

const INSTAGRAM_HIGHLIGHT =
  'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDU3OTIzNjQyMjc2MDY2?story_media_id=3620401359884044203_8015582216&igsh=OHc5aTV0c3F0anR0';

export const EVENTS: Event[] = [
  {
    name: 'Web Summit Rio',
    date: 'Abr 2025',
    location: 'Rio de Janeiro, RJ',
    url: INSTAGRAM_HIGHLIGHT,
    accent: 'linear-gradient(135deg, #16a34a, #facc15)',
    logoUrl: 'images/wb_rio.png'
  },
  {
    name: 'AWS Summit',
    date: 'Ago 2025',
    location: 'São Paulo, SP',
    url: INSTAGRAM_HIGHLIGHT,
    accent: 'linear-gradient(135deg, #f97316, #fbbf24)',
    icon: 'fa-brands fa-aws'
  }
];
