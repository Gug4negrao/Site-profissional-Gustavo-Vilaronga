import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly navItems: Array<{ href: string; key: 'aboutMe' | 'skills' | 'events' | 'projects' | 'contact' }> = [
    { href: '#about', key: 'aboutMe' },
    { href: '#skills', key: 'skills' },
    { href: '#events', key: 'events' },
    { href: '#projects', key: 'projects' },
    { href: '#contact', key: 'contact' }
  ];

  readonly socials = [
    { icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/gustavo-negr%C3%A3o', label: 'LinkedIn' },
    { icon: 'fa-brands fa-github', url: 'https://github.com/Gug4negrao', label: 'GitHub' }
  ];
}
