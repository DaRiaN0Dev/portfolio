export type ProjectCategory = "personal" | "client" | "organizational";

export type ProjectStatus = "live" | "in-progress" | "archived";

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface CompanyExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
}

export interface FreelanceExperience {
  id: string;
  client: string;
  project: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: { label: string; href: string }[];
  status: ProjectStatus;
  category: ProjectCategory;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  email: string;
  location: string;
  resumeUrl: string;
  bannerImage: string;
  profileImage: string;
  interests: string[];
  languages: { name: string; level: string }[];
  biography: string;
  stats: Stat[];
}
