import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Project } from '../../core/models/portfolio.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="project-detail" *ngIf="project; else loading">
      <div class="container">
        <button (click)="goBack()" class="back-btn"><i class="fas fa-arrow-left"></i> Back to Projects</button>
        
        <header class="project-header">
          <span class="category">{{ project.category }}</span>
          <h1>{{ project.title }}</h1>
          <div class="tags">
            <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
          </div>
        </header>
        
        <div class="project-image">
          <img [src]="project.imageUrl" [alt]="project.title">
        </div>
        
        <div class="project-content">
          <div class="project-description">
            <h2>Overview</h2>
            <p>{{ project.longDescription || project.description }}</p>
          </div>
          
          <div class="project-sidebar">
            <div class="sidebar-card">
              <h3>Links</h3>
              <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-block">
                <i class="devicon-github-original"></i> View Source
              </a>
              <a *ngIf="project.liveUrl" [href]="project.liveUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">
                View Live Site <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
    
    <ng-template #loading>
      <div class="loading-container">
        <h2>Loading Project...</h2>
      </div>
    </ng-template>
  `,
  styles: [`
    .project-detail {
      padding: 120px 0 6rem;
      min-height: 100vh;
    }
    
    .back-btn {
      background: transparent;
      border: none;
      color: var(--text-secondary);
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 3rem;
      font-family: var(--font-body);
      transition: color 0.3s;
    }
    
    .back-btn:hover {
      color: var(--accent-color);
    }
    
    .project-header {
      margin-bottom: 3rem;
    }
    
    .category {
      color: var(--accent-color);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1rem;
      display: block;
      font-weight: 500;
    }
    
    h1 {
      font-size: clamp(2.5rem, 4vw, 4rem);
      margin-bottom: 1.5rem;
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .project-image {
      width: 100%;
      height: 60vh;
      min-height: 400px;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 4rem;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .project-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
    }
    
    @media (min-width: 768px) {
      .project-content {
        grid-template-columns: 2fr 1fr;
      }
    }
    
    .project-description h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    
    .project-description p {
      font-size: 1.1rem;
      color: var(--text-secondary);
      line-height: 1.8;
      white-space: pre-wrap;
    }
    
    .sidebar-card {
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      padding: 2rem;
      border-radius: 12px;
    }
    
    .sidebar-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .btn-block {
      display: flex;
      width: 100%;
      margin-bottom: 1rem;
    }
    
    .loading-container {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioService: PortfolioDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.portfolioService.getProjectById(id || '');
      })
    ).subscribe(project => {
      if (project) {
        this.project = project;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
