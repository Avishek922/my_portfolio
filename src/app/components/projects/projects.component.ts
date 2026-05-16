import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../core/models/portfolio.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Selected Works</h2>
        
        <div class="filter-controls">
          <button 
            *ngFor="let filter of filters" 
            class="filter-btn" 
            [class.active]="activeFilter === filter"
            (click)="setFilter(filter)"
          >
            {{ filter }}
          </button>
        </div>
        
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of filteredProjects" @fadeUp>
            <div class="project-image">
              <img [src]="project.imageUrl" [alt]="project.title">
              <div class="project-overlay">
                <a [routerLink]="['/project', project.id]" class="btn btn-primary">View Details</a>
                <a *ngIf="project.liveUrl" [href]="project.liveUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white">Live Demo</a>
              </div>
            </div>
            <div class="project-info">
              <span class="project-category">{{ project.category }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
              <div class="project-links">
                <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer"><i class="devicon-github-original"></i> Code</a>
                <a *ngIf="project.liveUrl" [href]="project.liveUrl" target="_blank" rel="noopener noreferrer">Live Demo <i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .filter-controls {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }
    
    .filter-btn {
      background: transparent;
      border: none;
      color: var(--text-secondary);
      font-size: 1rem;
      font-family: var(--font-body);
      cursor: pointer;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      transition: all 0.3s;
    }
    
    .filter-btn:hover, .filter-btn.active {
      color: var(--text-primary);
      background: var(--surface-color);
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    @media (min-width: 768px) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    .project-card {
      background: var(--surface-color);
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border-color);
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
    
    .project-card:hover .project-image img {
      transform: scale(1.05);
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-image {
      width: 100%;
      height: 250px;
      overflow: hidden;
      position: relative;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    
    .project-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(5, 10, 17, 0.8);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .btn-outline-white {
      background: transparent;
      color: white;
      border: 1px solid white;
      padding: 0.5rem 1.5rem;
      font-size: 0.9rem;
      border-radius: 4px;
      transition: all 0.3s;
    }
    
    .btn-outline-white:hover {
      background: white;
      color: var(--bg-color);
    }
    
    .project-info {
      padding: 2rem;
    }
    
    .project-category {
      color: var(--accent-color);
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
      display: block;
    }
    
    .project-info h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .project-info p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    
    .project-links {
      display: flex;
      gap: 1.5rem;
      border-top: 1px solid var(--border-color);
      padding-top: 1.5rem;
    }
    
    .project-links a {
      font-size: 0.9rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-primary);
    }
    
    .project-links a:hover {
      color: var(--accent-color);
    }
  `],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[] = [];
  
  filters: string[] = ['All', 'Frontend', 'Backend', 'Fullstack', 'Mobile'];
  activeFilter: string = 'All';
  filteredProjects: Project[] = [];

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    if (filter === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === filter);
    }
  }
}
