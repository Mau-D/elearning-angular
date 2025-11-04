import { Injectable } from '@angular/core';
import { GameSession } from '../models';
import { resolve } from '@angular-devkit/core';

@Injectable({
  providedIn: 'root',
})
export class GetListSessions {
  getAll(): Promise<GameSession[]> {
    return new Promise<GameSession[]>((resolve) => {
      setTimeout(() => {
        const array: GameSession[] = [
          {
            videoGame: { id: 1, label: 'Zelda', year: 2000 },
            beginDate: new Date('2023-01-01T00:00:00'),
            endDate: new Date('2023-07-01T00:00:00'),
            players: [{id:1, name: 'Paul'},{id:2, name: 'Pauline'}],
            status: 'completed',
          },
          {
            videoGame: { id: 1, label: 'Zelda', year: 2000 },
            beginDate: new Date('2025-01-01T00:00:00'),
            endDate: new Date('2025-10-01T00:00:00'),
            players: [{id:3, name: 'Joe'},{id:4, name: 'Johan'}],
            status: 'in-progress',
          },
        ];
        resolve(array);
      }, 1000);
    });
  }
}
