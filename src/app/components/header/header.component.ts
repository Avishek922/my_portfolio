import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled">
      <div class="container header-content">
        <a href="#home" class="logo"><span class="highlight">Avishek.</span></a>
        
        <nav [class.open]="isMenuOpen">
          <ul>
            <li><a href="#about" (click)="closeMenu()">About</a></li>
            <li><a href="#projects" (click)="closeMenu()">Projects</a></li>
            <li><a href="#experience" (click)="closeMenu()">Experience</a></li>
            <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
          </ul>
          <button class="theme-toggle" (click)="toggleTheme()" aria-label="Toggle theme">
            <i class="fas" [class.fa-moon]="!isDarkMode" [class.fa-sun]="isDarkMode"></i>
          </button>
        </nav>
        
        <button class="mobile-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
          <div class="hamburger" [class.active]="isMenuOpen">
            <span></span><span></span><span></span>
          </div>
        </button>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: var(--nav-height);
      z-index: 1000;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      background: var(--surface-color);
      border-bottom: 1px solid var(--border-color);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
    
    /* Support for modern glassmorphism if backdrop-filter works */
    @supports (backdrop-filter: blur(10px)) {
      header {
        background: transparent;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
      }
      
      header.scrolled {
        background: var(--surface-color);
        opacity: 0.95;
      }
    }
    
    header.scrolled {
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      height: 70px;
    }
    
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-family: var(--font-display);
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    
    .highlight {
      color: var(--accent-color);
    }
    
    nav {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      gap: 2rem;
    }
    
    nav a {
      font-weight: 500;
      font-size: 1rem;
      color: var(--text-primary);
      position: relative;
    }
    
    nav a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: var(--accent-color);
      transition: width 0.3s ease;
    }
    
    nav a:hover::after {
      width: 100%;
    }
    
    .theme-toggle {
      background: transparent;
      border: none;
      color: var(--text-primary);
      font-size: 1.2rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: background 0.3s;
    }
    
    .theme-toggle:hover {
      background: var(--surface-color);
    }
    
    .mobile-toggle {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 1001;
    }
    
    .hamburger {
      width: 24px;
      height: 20px;
      position: relative;
    }
    
    .hamburger span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: var(--text-primary);
      border-radius: 2px;
      transition: 0.3s ease-in-out;
    }
    
    .hamburger span:nth-child(1) { top: 0px; }
    .hamburger span:nth-child(2) { top: 9px; }
    .hamburger span:nth-child(3) { top: 18px; }
    
    .hamburger.active span:nth-child(1) {
      top: 9px;
      transform: rotate(45deg);
    }
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
      top: 9px;
      transform: rotate(-45deg);
    }
    
    @media (max-width: 768px) {
      .mobile-toggle {
        display: block;
      }
      
      nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 400px;
        height: 100vh;
        background: var(--surface-color);
        flex-direction: column;
        justify-content: center;
        transition: 0.4s cubic-bezier(0.77, 0, 0.175, 1);
        box-shadow: -10px 0 30px rgba(0,0,0,0.1);
      }
      
      nav.open {
        right: 0;
        z-index: 999;
      }
      
      nav ul {
        flex-direction: column;
        align-items: center;
        gap: 3rem;
      }
      
      nav a {
        font-size: 1.5rem;
      }
      
      .theme-toggle {
        margin-top: 2rem;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;
  isDarkMode = false;

  constructor() {
    this.initTheme();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
}
