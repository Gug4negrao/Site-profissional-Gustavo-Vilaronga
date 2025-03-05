import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
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

  ngOnInit(): void {
    this.language = this.translationService.getLanguage();
    // this.checkButtonsVisibility();
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

//    checkButtonsVisibility(): void {
//     const container = document.querySelector(".skills"); // Container que envolve os cards
//     const cards = document.querySelectorAll(".skill"); // Todos os cards
//     const prevButton = document.querySelector(".arrow-left"); // Botão esquerdo
//     const nextButton = document.querySelector(".arrow-right"); // Botão direito
//     const screenWidth = window.innerWidth; // Largura da tela
//     const cardWidth = 300; // Largura de cada card
//     const gap = 20; // Espaçamento entre os cards
//     const totalCards = cards.length; // Quantidade total de cards
    
//     // Largura total necessária para exibir todos os cards corretamente
//     const requiredWidth = totalCards * (cardWidth + gap) - gap;
    
//     // Verifica se os cards cabem na tela
//     if (requiredWidth <= screenWidth) {
//           prevButton.style.display = "none";
//         nextButton.style.display = "none";
//     } else {
//         prevButton.style.display = "block";
//         nextButton.style.display = "block";
//     }
// }

  @ViewChild('skillsContainer') skillsContainer!: ElementRef;
  scrollLeft(): void {
    if (this.skillsContainer?.nativeElement) { this.skillsContainer.nativeElement.scrollBy({ left: -300, behavior: "smooth" }) }
  }

  scrollRight(): void {
    if (this.skillsContainer?.nativeElement) { this.skillsContainer.nativeElement.scrollBy({ left: 300, behavior: "smooth" }) }
  }

}


