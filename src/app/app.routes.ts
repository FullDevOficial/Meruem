import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'sobre',
    loadComponent: () => import('./features/sobre/sobre').then((m) => m.SobreComponent),
  },
  {
    path: 'contato',
    loadComponent: () => import('./features/contato/contato').then((m) => m.ContatoComponent),
  },
  {
    path: 'voluntario',
    loadComponent: () =>
      import('./features/voluntario/voluntario').then((m) => m.VoluntarioComponent),
  },
  {
    path: 'grupos',
    loadComponent: () => import('./features/grupos/grupos').then((m) => m.GruposComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
