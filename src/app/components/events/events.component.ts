import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { EVENTS } from '../../data/events.data';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RevealOnScrollDirective],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  readonly events = EVENTS;

  open(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
