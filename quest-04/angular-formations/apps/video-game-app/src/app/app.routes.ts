import { Route } from '@angular/router';
import { PageNotFound } from '../shared/page-not-found/page-not-found';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo:'/video-games',
    pathMatch: 'full',
    // children: videoGamesRoutes,
  },
  // ...videoGamesRoutes,
  {
    path: '**',
    component: PageNotFound,
  },
];
