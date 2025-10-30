import { Route } from '@angular/router';
import { PageNotFound } from '../shared/page-not-found/page-not-found';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';

export const appRoutes: Route[] = [
  { 
    path: '', 
    children: videoGamesRoutes },
  {
    path: '**',
    component: PageNotFound,
  },
];
