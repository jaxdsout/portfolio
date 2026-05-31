import { create } from 'zustand';
import { about } from './data/about';
import { projects } from './data/projects';
import { AboutData, NavItem, Project } from './types';

interface AppState {
  projects: Record<string, Project>;
  about: AboutData;
  navItems: NavItem[];
}

export const useStore = create<AppState>(() => ({
  projects,
  about,
  navItems: [
    ...Object.keys(projects)
      .sort()
      .map(key => ({ id: projects[key].id, title: projects[key].title, type: 'PROJ', accent: projects[key].accent })),
    { id: about.id, title: about.title, type: about.type, accent: about.accent },
  ],
}));
