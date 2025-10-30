import { Routes } from '@angular/router';
import { PageNotFound } from '../shared/page-not-found/page-not-found';
import { videoGamesRoutes } from '../features/video-games/video-games.routes';
import { StatisticsResolver } from '../features/statistics/resolvers/statistics.resolver';
import { Title } from '@angular/platform-browser';

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
        (item) => item.statisticsRoutes),
        //Les datas peuvent être utilisés partout dans toutes les routes children
        data:{
          title: 'Mes stats de jeux',
          titleColor: '#25fde9' 
        },
    resolve: {
      stats: StatisticsResolver,
    },
  },
  // ...videoGamesRoutes,
  {
    path: '**',
    component: PageNotFound,
  },
];
