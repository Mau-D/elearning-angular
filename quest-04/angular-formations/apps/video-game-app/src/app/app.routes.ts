import { Routes } from '@angular/router';
import { PageNotFound } from '../shared/page-not-found/page-not-found';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';
import { statsResolver } from '../features/statistics/resolvers/statistics.resolver';
import { requireAuthenticatedGuard } from '../features/authentication/guards/require-authenticated-guard';
import { anthenticationRoutes } from '../features/authentication/authentication.routes';

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
    canActivate: [requireAuthenticatedGuard],
    title:'Mes jeux vidéos'
  },
  {
    path: 'stats',
    loadChildren: () =>
      import('../features/statistics/statistics.routes').then(
        (item) => item.statisticsRoutes
      ),
    //Les datas peuvent être utilisés partout dans toutes les routes children
    data: {
      title: 'Mes stats de jeux',
      titleColor: '#25fde9',
    },
    // canActivate: [requireAuthenticatedGuard],
    resolve: {
      stats: statsResolver,
    },
  },
  ...anthenticationRoutes,
  // ...videoGamesRoutes,
  {
    path: '**',
    component: PageNotFound,
  },
];
