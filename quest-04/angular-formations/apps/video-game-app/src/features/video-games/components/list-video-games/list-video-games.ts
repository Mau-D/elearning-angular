import { Component } from '@angular/core';
import { VideoGame } from '../../../models/video-games';
import { TableVideoGames } from '../table-video-games/table-video-games';

@Component({
  selector: 'app-list-video-games',
  imports: [TableVideoGames],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css',
})
export class ListVideoGames {
  list: VideoGame[] = [
    { id: 1, label: 'Final fantasy 14', year: 2020 },
    { id: 2, label: 'Final fantasy 10', year: 2001 },
  ];
  toRemoveOneElementParent(value: string): void {
    console.log(value);
    this.list.pop();
  }
  handleDelete(item: VideoGame): void {
    console.log('handleDelete', item);
    this.list = this.list.filter((it) => it.id != item.id);
  }
}
