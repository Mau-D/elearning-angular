import { Routes } from '@angular/router';
import { ListStats } from './components/list-stats/list-stats';
import { OneStat } from './components/one-stat/one-stat';

export const statisticsRoutes: Routes = [
  {
    path: '',
    component: ListStats,
  },
  {
    path: 'one',
    component: OneStat,
  },
];
