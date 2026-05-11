import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    _honey: ['']
  });

  readonly state = signal<SubmitState>('idle');

  get f() { return this.form.controls; }

  hasError(field: keyof typeof this.f): boolean {
    const ctrl = this.f[field];
    return ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }

  firstErrorKey(field: keyof typeof this.f): string | null {
    const ctrl = this.f[field];
    if (!ctrl.errors) return null;
    if (ctrl.errors['required']) return 'fieldRequired';
    if (ctrl.errors['email']) return 'invalidEmail';
    if (ctrl.errors['minlength']) return 'minChars';
    return null;
  }

  async onSubmit(): Promise<void> {
    if (this.form.controls._honey.value) {
      this.state.set('success');
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state.set('submitting');
    const { name, email, subject, message } = this.form.getRawValue();

    try {
      const res = await fetch('https://formsubmit.co/ajax/guieguganegrao@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          Nome: name,
          Email: email,
          Assunto: subject,
          Mensagem: message,
          _template: 'table',
          _captcha: 'false'
        })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.state.set('success');
      this.form.reset();
    } catch {
      this.state.set('error');
    }
  }

  resetForm(): void {
    this.state.set('idle');
    this.form.reset();
  }
}
