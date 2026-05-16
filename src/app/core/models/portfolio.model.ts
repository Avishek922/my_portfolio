export interface Project {
  id: string;
  title: string;
  description: string;
  category: string; // 'Frontend' | 'Backend' | 'Mobile' | 'All'
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  longDescription?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    tagline: string;
  };
  about: {
    bio: string;
    skills: { name: string; iconClass: string }[];
    stats: { label: string; value: string }[];
    resumeUrl: string;
  };
  projects: Project[];
  experience: Experience[];
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    whatsapp: string;
    Facebook: string;
    TikTok: string;
  };
}
