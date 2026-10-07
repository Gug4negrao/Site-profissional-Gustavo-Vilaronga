import { Event } from '../models/event.model';

export const EVENTS_HIGHLIGHT_URL =
  'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDU3OTIzNjQyMjc2MDY2?story_media_id=3620401359884044203_8015582216&igsh=OHc5aTV0c3F0anR0';

export const EVENTS: Event[] = [
  {
    name: 'Web Summit Rio 2025',
    date: 'Abr 2025',
    location: 'Rio de Janeiro, RJ',
    accent: 'linear-gradient(135deg, #c026d3, #f43f5e)',
    coverUrl: 'images/web_summit_rio_2025.webp'
  },
  {
    name: 'AWS Summit 2025',
    date: 'Ago 2025',
    location: 'São Paulo, SP',
    accent: 'linear-gradient(135deg, #2563eb, #7c3aed, #ec4899)',
    coverUrl: 'images/aws_summit_sp_2025.webp'
  },
  {
    name: 'AWS Summit 2026',
    date: 'Set 2026',
    location: 'São Paulo, SP',
    accent: 'linear-gradient(135deg, #f97316, #e1306c, #7c3aed)',
    coverUrl: 'images/aws_summit_sp_2026.webp'
  }
];
