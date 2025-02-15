import { Component, OnInit } from '@angular/core';
import { Translations } from './constants/translations';
import { TranslationService } from './services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'PortiflioGustavo';
  language: string = 'pt-br';
  menuOpen = false;
  constants: any = {};

  constructor(private translationService: TranslationService){}

  redirectSocialMedias(linkMedia : string){
    window.open(linkMedia, "_blank");
  }

  ngOnInit(): void {
    this.language = this.translationService.getLanguage();
  }

  getTranslationText(text: string): string {
    return Translations[text][this.language];
  }

  setLanguage(language: string): void{
    this.translationService.setLanguage(language);
    this.language = this.translationService.getLanguage();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }
}
