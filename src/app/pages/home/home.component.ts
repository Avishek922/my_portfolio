import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PortfolioData } from '../../core/models/portfolio.model';
import { Observable } from 'rxjs';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  template: `
    <main *ngIf="portfolioData$ | async as data">
      <app-hero [data]="data.hero" [resumeUrl]="data.about.resumeUrl"></app-hero>
      <app-about [data]="data.about"></app-about>
      <app-projects [projects]="data.projects"></app-projects>
      <app-experience [experience]="data.experience"></app-experience>
      <app-contact [socials]="data.socials"></app-contact>
    </main>
  `,
  styles: [`
    main {
      width: 100%;
    }
  `]
})
export class HomeComponent implements OnInit {
  portfolioData$: Observable<PortfolioData> | undefined;

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit() {
    this.portfolioData$ = this.portfolioService.getData();
  }
}
