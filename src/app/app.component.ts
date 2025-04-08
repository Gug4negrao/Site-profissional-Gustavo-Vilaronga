import { Component, OnInit} from '@angular/core';
import { Translations } from './constants/translations';
import { TranslationService } from './services/translation.service';
import { CommonModule } from '@angular/common';

interface Skill {
  nome: string;
  icon: string;
  docLink: string;
}

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
  skills: Skill[] = [];

  constructor(private translationService: TranslationService){}

  ngOnInit(): void {
    this.language = this.translationService.getLanguage();
    this.skills = this.getListSkills();
  }

  redirectSocialMedias(linkMedia : string){
    window.open(linkMedia, "_blank");
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

  getListSkills(): Skill[] {
    return [
      {
        nome: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        docLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
      },
      {
        nome: 'AngularJs',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        docLink: 'https://docs.angularjs.org/api'
      },
      {
        nome: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        docLink: 'https://www.typescriptlang.org/docs/'
      },
      {
        nome: 'Angular',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
        docLink: 'https://angular.io/docs'
      },
      {
        nome: 'HTML/CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        docLink: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
      },
      {
        nome: 'C#',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        docLink: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
      },
      {
        nome: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        docLink: 'https://getbootstrap.com/docs/'
      }
    ];
  }
}


