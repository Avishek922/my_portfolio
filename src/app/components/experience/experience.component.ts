import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        
        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of experience">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>{{ exp.role }}</h3>
                <span class="company">{{ exp.company }}</span>
                <span class="period">{{ exp.period }}</span>
              </div>
              <ul class="timeline-desc">
                <li *ngFor="let desc of exp.description">{{ desc }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  `,
  styles: [`
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 0;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 14px;
      width: 2px;
      background: var(--border-color);
    }
    
    .timeline-item {
      position: relative;
      padding-left: 3rem;
      margin-bottom: 3rem;
    }
    
    .timeline-item:last-child {
      margin-bottom: 0;
    }
    
    .timeline-dot {
      position: absolute;
      left: 0;
      top: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--bg-color);
      border: 4px solid var(--accent-color);
      z-index: 1;
      transition: transform 0.3s;
    }
    
    .timeline-item:hover .timeline-dot {
      transform: scale(1.2);
    }
    
    .timeline-content {
      background: var(--surface-color);
      padding: 2rem;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .timeline-item:hover .timeline-content {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      border-color: var(--accent-color);
    }
    
    .timeline-header {
      margin-bottom: 1.5rem;
    }
    
    .timeline-header h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }
    
    .company {
      font-size: 1.1rem;
      color: var(--accent-color);
      font-weight: 500;
      display: block;
      margin-bottom: 0.5rem;
    }
    
    .period {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
    
    .timeline-desc {
      list-style: none;
    }
    
    .timeline-desc li {
      color: var(--text-secondary);
      margin-bottom: 0.8rem;
      position: relative;
      padding-left: 1.5rem;
      line-height: 1.6;
    }
    
    .timeline-desc li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent-color);
    }
  `]
})
export class ExperienceComponent {
  @Input() experience: any[] = [];
}
