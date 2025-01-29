import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Translations } from './constants/translations';
import { TranslationService } from './services/translation.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = 'PortiflioGustavo';
  language: string = 'pt-br';
  constants: any = {};

  constructor(private translationService: TranslationService){}

  RedirectSocialMedias(linkMedia : string){
    window.open(linkMedia, "_blank");
  }

  ngOnInit(): void {
    this.language = this.translationService.getLanguage();
    // this.translationLoad();
  }

  // translationLoad(): void{
  //   this.constants = {
  //     socialMedia: Translations.SocialMedia[this.language]
  //   }
  // }

  // setLanguage(language: string): void{
  //   this.translationService.setLanguage(language);
  //   window.location.reload();
  // }

  getTranslationText(text: string): string {
    return Translations[text][this.language];
}
}
