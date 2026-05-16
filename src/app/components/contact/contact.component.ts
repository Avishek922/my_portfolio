import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        
        <div class="contact-wrapper">
          <div class="contact-info">
            <h3>Let's talk about your next project.</h3>
            <p>I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</p>
            
            <div class="social-links">
              <a [href]="socials.github" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original"></i></a>
              <a [href]="socials.linkedin" target="_blank" rel="noopener noreferrer"><i class="devicon-linkedin-plain"></i></a>
              <a [href]="socials.twitter" target="_blank" rel="noopener noreferrer"><i class="devicon-twitter-original"></i></a>
              <a [href]="socials.instagram" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
              <a [href]="socials.whatsapp" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
              <a [href]="socials.Facebook" target="_blank" rel="noopener noreferrer"><i class="devicon-facebook-original"></i></a>
              <a [href]="socials.TikTok" target="_blank" rel="noopener noreferrer"><i class="bi bi-tiktok"></i></a>
            </div>
          </div>
          
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" formControlName="name" placeholder="John Doe">
              <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="error">
                Name is required.
              </div>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" formControlName="email" placeholder="john@example.com">
              <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="error">
                Please enter a valid email.
              </div>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" formControlName="message" rows="5" placeholder="Your message here..."></textarea>
              <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" class="error">
                Message is required.
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary" [disabled]="contactForm.invalid || isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
            <p *ngIf="successMessage" class="success">{{ successMessage }}</p>
            <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
    }
    
    @media (min-width: 768px) {
      .contact-wrapper {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    .contact-info h3 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    
    .contact-info p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.8;
    }
    
    .social-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
    
    .social-links a {
      font-size: 2rem;
      color: var(--text-secondary);
      transition: color 0.3s, transform 0.3s;
    }
    
    .social-links a:hover {
      color: var(--accent-color);
      transform: translateY(-3px);
    }
    
    .contact-form {
      background: var(--surface-color);
      padding: 2.5rem;
      border-radius: 12px;
      border: 1px solid var(--border-color);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    .error {
      color: #ff4d4f;
      font-size: 0.85rem;
      margin-top: 0.5rem;
    }
    
    .success {
      color: #52c41a;
      margin-top: 1rem;
      font-weight: 500;
    }
  `]
})
export class ContactComponent {
  @Input() socials: any;

  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  private formUrl = 'https://formspree.io/f/xeedjqwr'; // 👈 paste YOUR Formspree URL here

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';

      this.http.post(this.formUrl, this.contactForm.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.successMessage = '✅ Message sent successfully!';
          this.contactForm.reset();
          setTimeout(() => this.successMessage = '', 5000);
        },
        error: () => {
          this.isSubmitting = false;
          this.errorMessage = '❌ Something went wrong. Please try again.';
          setTimeout(() => this.errorMessage = '', 5000);
        }
      });

    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
