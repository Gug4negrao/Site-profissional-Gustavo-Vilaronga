import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() {}

  setLanguage(language: string): void {
    localStorage.setItem('language', language);
  }

  getLanguage(): string {
    return localStorage.getItem('language') ?? 'pt-br';
  }
}
