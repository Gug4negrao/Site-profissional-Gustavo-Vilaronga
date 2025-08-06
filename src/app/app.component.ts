import { Component, OnInit} from '@angular/core';
import { Translations } from './constants/translations';
import { TranslationService } from './services/translation.service';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  docLink: string;
}

interface Project {
  name: string;
  description: string;
  staticLink: string | null;
  gitHubLink: string | null;
  image: string | null;
  skills: string | null;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  showSplash = true;
  language: string = 'pt-br';
  menuOpen = false;
  constants: any = {};
  skills: Skill[] = [];
  projects: Project[] = [];


  constructor(private translationService: TranslationService){}

  ngOnInit(): void {
    this.language = this.translationService.getLanguage();
    this.skills = this.getListSkills();
    this.projects = this.getListProjects();

     setTimeout(() => {
      this.showSplash = false;
    }, 3000);
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
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      docLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
      name: 'AngularJs',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      docLink: 'https://docs.angularjs.org/api'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      docLink: 'https://www.typescriptlang.org/docs/'
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      docLink: 'https://angular.io/docs'
    },
    {
      name: 'HTML/CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      docLink: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      docLink: 'https://getbootstrap.com/docs/'
    },
    {
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      docLink: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
    },
    {
      name: 'ASP.NET',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      docLink: 'https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-7.0'
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      docLink: 'https://dev.mysql.com/doc/'
    },
    {
      name: 'SQL Server',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      docLink: 'https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16'
    }
  ];
}

  getListProjects(): Project[] {
    return [
      {
        name: 'UmaCausa',
        description: 'umaCausaDescription',
        staticLink: 'https://uma-causa-estatico.vercel.app',
        gitHubLink: 'https://github.com/Gug4negrao/umaCausa',
        image: null,
        skills: null
      },
      {
        name: 'Entendendo sua mente',
        description: 'entendendoSuaMenteDescription',
        staticLink: 'https://entendendosuamente.com.br',
        gitHubLink: null,
        image: null,
        skills: null
      },
      {
        name: this.getTranslationText('portfolio'),
        description: 'portfolioDescription',
        staticLink: null,
        gitHubLink: 'https://github.com/Gug4negrao/portifolioGustavo',
        image: null,
        skills: null
      }
    ];
  }
}


