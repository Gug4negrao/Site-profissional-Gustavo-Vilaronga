import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { LANGUAGE_OPTIONS } from '../../data/social-links.data';
import { Language } from '../../models/language.model';

interface NavItem {
  href: string;
  labelKey: 'home' | 'aboutMe' | 'skills' | 'projects' | 'contact';
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly translation = inject(TranslationService);
  readonly languageOptions = LANGUAGE_OPTIONS;
  readonly navItems: NavItem[] = [
    { href: '#hero', labelKey: 'home' },
    { href: '#about', labelKey: 'aboutMe' },
    { href: '#skills', labelKey: 'skills' },
    { href: '#projects', labelKey: 'projects' },
    { href: '#contact', labelKey: 'contact' }
  ];

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  constructor() {
    effect(() => {
      if (typeof document === 'undefined') return;
      document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  selectLanguage(code: Language): void {
    this.translation.setLanguage(code);
  }

  isActiveLanguage(code: Language): boolean {
    return this.translation.language() === code;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }
}
