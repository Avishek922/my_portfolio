import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioData, Project } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private data: PortfolioData = {
    hero: {
      name: 'Avishek Kumar Gupta',
      title: 'Laravel Developer | Full-Stack Web Development',
      tagline: 'Results-driven Software Engineer with hands-on experience building and maintaining Laravel-based web applications.'
    },
    about: {
      bio: 'I am a results-driven Software Engineer with hands-on experience building and maintaining Laravel-based web applications. I am proficient in Laravel MVC architecture, Eloquent ORM, Blade templating, RESTful API integration, and MySQL database management. I am skilled at converting UI/UX designs into clean, maintainable code. I hold a Bachelors degree in Information Technology and am eager to deepen my expertise in Laravel while exploring React and Angular for modern full-stack development.',
      skills: [
        { name: 'Laravel', iconClass: 'devicon-laravel-plain' },
        { name: 'PHP', iconClass: 'devicon-php-plain' },
        { name: 'MySQL', iconClass: 'devicon-mysql-plain' },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain' },
        { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain' },
        { name: 'React', iconClass: 'devicon-react-original' },
        { name: 'Angular', iconClass: 'devicon-angularjs-plain' }
      ],
      stats: [
        { label: 'Years Experience', value: '1.5+' },
        { label: 'Degree', value: 'Bachelor of Information Technology' },
        { label: 'Completed', value: '2026' }
      ],
      resumeUrl: '/assets/resume.pdf'
    },
    projects: [
      {
        id: 'task-management-system',
        title: 'Task Management System',
        description: 'A full-stack task management application with user authentication, role-based access, and real-time progress tracking.',
        category: 'Fullstack',
        imageUrl: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        tags: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
        githubUrl: 'https://github.com/Avishek922/Task-Management-System',
        liveUrl: 'https://github.com/Avishek922/Task-Management-System', // Placeholder: Add your live link here
        longDescription: 'Built a full-stack task management application using Laravel MVC with user authentication (Laravel Auth), role-based access, and CRUD operations. Designed and managed a normalized MySQL database schema with migrations and Eloquent relationships for tasks, users, and categories. Implemented real-time progress tracking and responsive UI using Blade templates, Bootstrap, and JavaScript. Consumed RESTful API endpoints for seamless frontend-backend data interaction and dynamic page updates.'
      },
      {
        id: 'time -sheet-management-system',
        title: 'Time Sheet Management System',
        description: 'A full-stack calender time sheet management application with user authentication, role-based access, and real-time progress tracking.',
        category: 'Fullstack',
        imageUrl: '/assets/time-sheet-management-system.png',
        tags: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
        githubUrl: 'https://github.com/Avishek922/Task-Management-System',
        liveUrl: 'https://github.com/Avishek922/Task-Management-System', // Placeholder: Add your live link here
        longDescription: 'Built a full-stack calender time sheet management application using Laravel MVC with user authentication (Laravel Auth), role-based access, and CRUD operations. Designed and managed a normalized MySQL database schema with migrations and Eloquent relationships for tasks, users, and categories. Implemented real-time progress tracking and responsive UI using Blade templates, Bootstrap, and JavaScript. Consumed RESTful API endpoints for seamless frontend-backend data interaction and dynamic page updates.'
      },

      {
        id: 'VetBazzar-Premium-Pet-Care',
        title: 'VetBazzar - Premium Pet Care',
        description: 'A premium pet-care platform that delivers veterinary products, specialized pet foods, and care items directly to pet owners, with a focus on trusted quality and personalized service',
        category: 'Fullstack',
        imageUrl: '/assets/VetBazzar-Premium-Pet-Care.png',
        tags: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'React', 'Tailwind CSS', 'Laravel Auth'],
        githubUrl: 'https://github.com/Avishek922/Vetnary_bazar.git',
        liveUrl: 'https://vetbazzar.com/', // Placeholder: Add your live link here
        longDescription: 'VetBazzar - Premium Pet Care is an e-commerce platform dedicated to high-quality pet products and care essentials. It connects pet owners with vet-approved foods, medicines, grooming supplies, and accessories, all curated for safety and performance. The platform emphasizes trusted quality, convenient home delivery, and a user-friendly shopping experience tailored to different pet types and needs.<br>As the backend developer, I built and maintained the core server-side logic using PHP and Laravel, designing the database schema, implementing user authentication, and developing key features like product catalog management, search and filtering, cart functionality, and an admin dashboard for managing products and orders. The system follows Laravel’s MVC architecture, uses MySQL for data storage, and applies security best practices such as CSRF protection, input validation, and secure password hashing to ensure a safe platform for users and their pets.'
      },

      {
        id: 'Restopialot-Restaurant-Management-System',
        title: 'Restopialot - Restaurant Management System',
        description: 'A full-featured restaurant management platform that streamlines restaurant operations including order processing, billing, kitchen workflow, inventory management, and staff administration through a centralized digital system.',
        category: 'Fullstack',
        imageUrl: '/assets/Restopialot_Restaurant_Management_System.png',
        tags: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Laravel Auth', 'Repository & Service Design Pattern', 'REST API Ready Structure'],
        githubUrl: 'https://github.com/Avishek922/Restaurant-management-system.git',
        liveUrl: 'https://github.com/Avishek922/Restaurant-management-system.git', // Placeholder: Add your live link here
        longDescription: 'Restopialot is a modern web-based Restaurant Management System designed to automate and simplify daily restaurant operations. The platform provides a centralized solution for managing orders, billing, kitchen workflow, inventory, staff roles, and restaurant settings. The system was developed with scalability, security, and usability in mind to help restaurants improve operational efficiency and reduce manual work.The project focuses on real-time order handling, role-based access control, and streamlined communication between restaurant departments such as billing, kitchen, and management. Built using Laravel and MySQL, the application follows clean architecture principles and modular development practices for maintainability and future expansion.'
      },
    ],
    experience: [
      {
        company: 'Lele Venture Pvt. Ltd. — Kupandol Kathmandu, Nepal',
        role: 'Junior Full Stack Laravel Developer ',
        period: 'April 2026 - Present',
        description: [
          'Developed and maintained a HR Management System with role-based access control supporting multiple user roles including Super Admin, Admin, Employee, and Staff',
          'Built a dynamic Profile Module that allows each role to view and manage their own profile data with role-specific permissions and UI customization',
          'Implemented role-based dashboards ensuring secure data visibility and access restriction across all user levels',
          'Designed and developed RESTful APIs for profile management including profile update, avatar upload, and role assignment features',
          'Collaborated with the HR team to gather requirements and translate business logic into scalable technical solutions',
          'Ensured responsive and user-friendly UI using Angular with optimized component architecture for different role views'
        ]
      },
      {
        company: 'WebLight IT Solutions — India, Bangalore',
        role: 'Associate Software Engineer Intern',
        period: 'November 2025 - March 2026',
        description: [
          'Developed and maintained dynamic web applications using Laravel (MVC, Blade templates, Eloquent ORM) with MySQL as the primary database.',
          'Integrated third-party and internal RESTful APIs to connect frontend interfaces with backend services, ensuring reliable data flow.',
          'Designed responsive, cross-device UI components using HTML5, CSS3, Bootstrap, and vanilla JavaScript.',
          'Wrote and optimized MySQL queries for data retrieval, updates, and relationship management across relational schemas.',
          'Participated in debugging, testing, and deployment workflows to maintain stable and reliable production releases.',
          'Collaborated with senior developers in an Agile team environment to deliver features on schedule.'
        ]
      },
      {
        company: 'WebLight IT Solutions — India, Bangalore',
        role: 'Frontend Developer Intern',
        period: 'November 2024 - August 2025',
        description: [
          'Developed responsive web interfaces using HTML5, CSS3, JavaScript, and Bootstrap across multiple client projects.',
          'Collaborated with backend developers to integrate APIs and ensure seamless frontend-backend data flow',
          ' Improved UI responsiveness and frontend performance contributing to smoother cross-device user experiences.',

        ]
      }
    ],
    socials: {
      github: 'https://github.com/Avishek922',
      linkedin: 'https://www.linkedin.com/in/avishek-kumar-gupta-090376252',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/dev.avhishek?igsh=dTYybGN0dmh3c3Vp',
      whatsapp: 'https://wa.me/message/2QSJS6Y6LBRSL1',
      Facebook: 'https://www.facebook.com/share/1GhPF8huJG/',
      TikTok: 'https://www.tiktok.com/@avishekguptakalwar05?_r=1&_t=ZS-96P3z4yELbj',

    }
  };

  constructor() { }

  getData(): Observable<PortfolioData> {
    return of(this.data);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.data.projects.find(p => p.id === id);
    return of(project);
  }
}
