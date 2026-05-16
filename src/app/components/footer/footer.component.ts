import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <p>&copy; {{ currentYear }} Avishek Kumar Gupta. Built with Angular.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 2rem 0;
      text-align: center;
      border-top: 1px solid var(--border-color);
      margin-top: 4rem;
    }
    
    p {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
