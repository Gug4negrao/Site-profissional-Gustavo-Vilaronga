import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RevealOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly pictures = [
    { src: 'images/picture1.png', visibility: 'always' as const },
    { src: 'images/picture2.png', visibility: 'tablet' as const },
    { src: 'images/picture3.png', visibility: 'desktop' as const }
  ];
}
