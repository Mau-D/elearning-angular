import { Routes } from '@angular/router';
import { ListStats } from './components/list-stats/list-stats';
import { OneStat } from './components/one-stat/one-stat';
import { AuthenticateUser } from '../authentication/services/authenticate-user';
import { requireAuthenticatedGuard } from '../authentication/guards/require-authenticated-guard';

export const statisticsRoutes: Routes = [
  {
    path: '',
    component: ListStats,
    canActivate: [requireAuthenticatedGuard],
  },
  {
    path: 'one',
    component: OneStat,
  },
];
