import { ListVideoGames } from './components/list-video-games/list-video-games';
import { EditVideoGame } from './components/edit-video-game/edit-video-game';
import { Routes } from '@angular/router';
import { getDynamicTitle } from '../../shared/tools/routes/titles/dynamic-title';
import { RouteTitle } from '../learnings/route-title/route-title';

// export const videoGamesRoutes: Route[] = [ ===>ts reconnait le type Array
export const videoGamesRoutes: Routes = [
  // '/video-game/'

  {
    path: '',
    component: ListVideoGames,
    title: 'Jeux vidéos favoris'
  },
  {
    path: ':id',
    component: EditVideoGame,
  },
  {
    path: 'title/:id',
    component: RouteTitle,
    title: getDynamicTitle,
  },
];
