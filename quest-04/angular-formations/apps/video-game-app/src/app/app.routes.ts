import { Route } from '@angular/router';
import { PageNotFound } from '../shared/page-not-found/page-not-found';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   redirectTo:'video-games',
  //   pathMatch: 'full',
  //   // children: videoGamesRoutes,
  // },
  {
    path: 'video-games',
    loadChildren: ()=>import('../features/video-games/video-games.routes').then(item => item.videoGamesRoutes)
  },
  // ...videoGamesRoutes,
  {
    path: '**',
    component: PageNotFound,
  },
];
