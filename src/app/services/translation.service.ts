import { Injectable, signal, computed } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Translations, TranslationKey } from '../constants/translations';
import { Language } from '../models/language.model';

const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE: Language = 'pt-br';
const VALID_LANGUAGES: Language[] = ['pt-br', 'en-us', 'es-es'];

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly languageSubject = new BehaviorSubject<Language>(this.readStoredLanguage());
  readonly language$: Observable<Language> = this.languageSubject.asObservable();

  readonly language = signal<Language>(this.languageSubject.value);
  readonly t = computed(() => (key: TranslationKey) => this.translate(key, this.language()));

  get currentLanguage(): Language {
    return this.languageSubject.value;
  }

  setLanguage(language: Language): void {
    if (!VALID_LANGUAGES.includes(language) || language === this.currentLanguage) {
      return;
    }
    localStorage.setItem(STORAGE_KEY, language);
    this.languageSubject.next(language);
    this.language.set(language);
  }

  translate(key: TranslationKey, language: Language = this.currentLanguage): string {
    return Translations[key]?.[language] ?? key;
  }

  private readStoredLanguage(): Language {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    return stored && VALID_LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE;
  }
}
