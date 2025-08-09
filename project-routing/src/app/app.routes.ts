import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./experience/experience').then((m) => m.Experience),
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects').then((m) => m.Projects),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  },
  {
    redirectTo: '',
    path: '**',
    pathMatch: 'full',
  },
];
