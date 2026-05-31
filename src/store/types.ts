export interface Project {
  id: number;
  colorScheme: string[];
  title: string;
  github?: string;
  deploy?: string;
  thumbnail: string;
  accent: string;
  body: string[];
  type?: string;
  links?: string[];
}

export type ColorScheme = [string, string, string, string, string, string, string];

export type NavItem = Pick<Project, 'id' | 'title' | 'accent' | 'type'>;

export interface AboutData {
  id: number;
  title: string;
  type: string;
  accent: string;
  links: string[];
  body: string[];
}
