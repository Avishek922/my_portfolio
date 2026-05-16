import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="home">
      <!-- Dynamic Background -->
      <div class="hero-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>

      <div class="container hero-content">
        <div class="hero-text">
          <h1 class="hero-title" @fadeUp>
            Hello, I'm <span class="highlight">{{ data.name }}</span>
          </h1>
          <h2 class="hero-subtitle" @fadeUpDelay>{{ data.title }}</h2>
          <p class="hero-tagline" @fadeUpDelay2>{{ data.tagline }}</p>
          
          <div class="hero-actions" @fadeUpDelay3>
            <a href="#projects" class="btn btn-primary">View Work</a>
            <a [href]="resumeUrl" download class="btn btn-outline">
              <i class="fas fa-file-download"></i> Download CV
            </a>
            <a href="#contact" class="btn btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div class="hero-image-wrapper" @fadeUpDelay>
          <div class="hero-image">
            <img src="/assets/profile.jpg" alt="Avishek Kumar Gupta">
            <div class="image-backdrop"></div>
          </div>
        </div>
      </div>
      
      <!-- Optional animated element (e.g. subtle scroll indicator) -->
      <a href="#about" class="scroll-indicator">
        <span class="mouse">
          <span class="wheel"></span>
        </span>
      </a>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding: calc(var(--nav-height) + 3rem) 0 6rem;
      overflow: hidden;
    }
    
    .hero-bg {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      z-index: 1;
      pointer-events: none;
    }

    .blob {
      position: absolute;
      filter: blur(100px);
      border-radius: 50%;
      opacity: 0.2;
      animation: float 15s infinite ease-in-out alternate;
      background: var(--accent-color);
      will-change: transform;
    }
    
    :host-context([data-theme="dark"]) .blob {
      opacity: 0.15;
      filter: blur(120px);
    }

    .blob-1 {
      top: -10%; left: -10%;
      width: 45vw; height: 45vw;
      min-width: 400px; min-height: 400px;
      animation-duration: 12s;
    }

    .blob-2 {
      bottom: -20%; right: -10%;
      width: 55vw; height: 55vw;
      min-width: 500px; min-height: 500px;
      animation-delay: -2s;
      background: var(--accent-hover);
    }

    .blob-3 {
      top: 30%; left: 45%;
      width: 35vw; height: 35vw;
      min-width: 300px; min-height: 300px;
      animation-duration: 20s;
      animation-delay: -5s;
    }

    @keyframes float {
      0% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(6%, 8%) scale(1.05); }
      66% { transform: translate(-4%, 4%) scale(0.95); }
      100% { transform: translate(0, 0) scale(1); }
    }
    .hero-content {
      z-index: 10;
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: center;
      width: 100%;
      text-align: center; /* Center text on mobile */
    }
    
    @media (min-width: 900px) {
      .hero-content {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        text-align: left; /* Left align text on desktop */
      }
    }
    
    .hero-text {
      max-width: 600px;
    }
    
    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      margin-bottom: 0.5rem;
    }
    .highlight {
      color: var(--accent-color);
    }
    .hero-subtitle {
      font-size: clamp(1.2rem, 3vw, 2rem);
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      font-weight: 500;
      line-height: 1.3;
    }
    .hero-tagline {
      font-size: 1.1rem;
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
      max-width: 600px;
    }
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
    
    @media (min-width: 900px) {
      .hero-actions {
        justify-content: flex-start;
      }
    }
    
    /* Hero Image */
    .hero-image-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    
    .hero-image {
      position: relative;
      width: 100%;
      max-width: 320px;
      aspect-ratio: 1;
      border-radius: 30px 4px 30px 4px;
      z-index: 2;
      margin: 0 auto;
    }
    
    @media (min-width: 900px) {
      .hero-image {
        max-width: 450px;
      }
    }
    
    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      position: relative;
      z-index: 2;
      border: 1px solid var(--border-color);
    }
    
    .image-backdrop {
      content: '';
      position: absolute;
      top: 20px;
      right: -20px;
      bottom: -20px;
      left: 20px;
      border: 2px solid var(--accent-color);
      border-radius: 20px;
      z-index: 1;
      transition: transform 0.3s ease;
    }
    
    .hero-image:hover .image-backdrop {
      transform: translate(-10px, -10px);
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0.7;
      transition: opacity 0.3s;
      display: none; /* Hide by default on mobile to save space */
    }
    @media (min-width: 900px) {
      .scroll-indicator {
        display: flex;
      }
    }
    .scroll-indicator:hover {
      opacity: 1;
    }
    .mouse {
      width: 26px;
      height: 42px;
      border: 2px solid var(--text-secondary);
      border-radius: 20px;
      position: relative;
    }
    .wheel {
      width: 4px;
      height: 8px;
      background: var(--text-secondary);
      border-radius: 2px;
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 1.5s infinite;
    }
    @keyframes scroll {
      0% { top: 6px; opacity: 1; }
      100% { top: 22px; opacity: 0; }
    }
  `],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeUpDelay', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s 0.2s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeUpDelay2', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s 0.4s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeUpDelay3', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s 0.6s cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeroComponent {
  @Input() data: any;
  @Input() resumeUrl: string = '';
}
