import { Routes } from '@angular/router';
import { PageNotFound } from '../shared/page-not-found/page-not-found';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';

// export const appRoutes: Route[] = [ ===> ===>ts reconnait le type Array
export const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo:'video-games',
  //   pathMatch: 'full',
  //   // children: videoGamesRoutes,
  // },
  {
    path: 'video-games',
    children: videoGamesRoutes,
    
  },
  {
    path: 'stats',
    loadChildren: () =>
      import('../features/statistics/statistics.routes').then(
        (item) => item.statisticsRoutes
      ),
  },
  // ...videoGamesRoutes,
  {
    path: '**',
    component: PageNotFound,
  },
];
