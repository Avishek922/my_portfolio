import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        
        <div class="about-grid">
          <div class="about-bio">
            <p>{{ data.bio }}</p>
            
            <div class="stats-container">
              <div class="stat-item" *ngFor="let stat of data.stats">
                <span class="stat-label">{{ stat.label }}</span>
                <span class="stat-value highlight">{{ stat.value }}</span>
              </div>
            </div>

            <div class="about-action">
              <a [href]="data.resumeUrl" download class="btn btn-primary">
                <i class="fas fa-download"></i> Download CV
              </a>
            </div>
          </div>
          
          <div class="about-skills">
            <h3>Core Technologies</h3>
            <div class="skills-grid">
              <div class="skill-item" *ngFor="let skill of data.skills">
                <i [class]="skill.iconClass"></i>
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
    }
    
    @media (min-width: 768px) {
      .about-grid {
        grid-template-columns: 1.2fr 0.8fr;
        align-items: start;
      }
    }

    .about-bio p {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin-bottom: 3rem;
      line-height: 1.8;
    }

    .stats-container {
      display: flex;
      gap: 3rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .about-action {
      margin-top: 2rem;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
    }

    .stat-value {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-family: var(--font-display);
      font-weight: 700;
      line-height: 1.1;
    }

    .stat-label {
      color: var(--text-secondary);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .about-skills h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1.5rem;
    }

    .skill-item {
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      padding: 1.5rem;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .skill-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      border-color: var(--accent-color);
    }

    .skill-item i {
      font-size: 2.5rem;
      color: var(--accent-color);
    }
    
    .skill-item span {
      font-size: 0.9rem;
      font-weight: 500;
    }
  `]
})
export class AboutComponent {
  @Input() data: any;
}
