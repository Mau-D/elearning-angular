import { Route } from '@angular/router';
import { ListVideoGames } from './components/list-video-games/list-video-games';
import { EditVideoGame } from './components/edit-video-game/edit-video-game';

export const videoGamesRoutes: Route[] = [
  // '/video-game/'
  {
    path: '',
    component: ListVideoGames,
  },
  {
    path: ':id',
    component: EditVideoGame,
  },
];
