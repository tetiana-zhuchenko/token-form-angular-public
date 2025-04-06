import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/main-page/main-page.component').then(
        (m) => m.MainPageComponent
      ),
  },
  {
    path: 'tokens',
    loadComponent: () =>
      import('./pages/tokens-page/tokens-page.component').then(
        (m) => m.TokensPageComponent
      ),
  },
];
