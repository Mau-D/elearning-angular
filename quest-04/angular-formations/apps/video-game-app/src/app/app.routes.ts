import { Route } from '@angular/router';
import { ListVideoGames } from '../features/video-games/components/list-video-games/list-video-games';
import { EditVideoGame } from '../features/video-games/components/edit-video-game/edit-video-game';
import { App } from './app';

export const appRoutes: Route[] = [
  {
    path: 'video-games',
    component: ListVideoGames,
  },
  {
    path: 'video-games/:id',
    component: EditVideoGame,
  },
];
