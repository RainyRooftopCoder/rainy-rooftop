export interface PersonalInfo {
  name: string;
  position: string;
  phone: string;
  email: string;
  address?: string;
  birthDate?: string;
  backgroundImage?: string;
  profileImage?: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  role: string;
  techStack: string[];
  links?: {
    github?: string;
    demo?: string;
    video?: string;
    demo2?: string;
    demo3?: string;
  };
  teamSize?: number;
}

export interface SideProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  links?: {
    github?: string;
    demo?: string;
  };
  type: 'personal' | 'team';
}
