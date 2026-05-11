import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { PROJECTS } from '../../data/projects.data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly projects = PROJECTS;

  constructor(private readonly sanitizer: DomSanitizer) {}

  trustUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  open(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
