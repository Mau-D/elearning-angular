import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideoGame } from '../../../models/video-games';
import { TableVideoGames } from '../table-video-games/table-video-games';
import { AddVideoGame } from '../add-video-game/add-video-game';
import { FilterVideoGames } from '../filter-video-games/filter-video-games';

@Component({
  selector: 'app-list-video-games',
  imports: [TableVideoGames, AddVideoGame, FilterVideoGames],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css',
})
export class ListVideoGames implements OnInit, OnDestroy {
  list: VideoGame[] = [
    { id: 1, label: 'Final fantasy 14', year: 2020 },
    { id: 2, label: 'Final fantasy 10', year: 2001 },
  ];
  ngOnInit(): void {
    console.log('init');
  }
  toRemoveOneElementParent(value: string): void {
    console.log(value);
    this.list.pop();
  }
  handleDelete(item: VideoGame): void {
    console.log('handleDelete', item);
    this.list = this.list.filter((it) => it.id != item.id);
  }

  ngOnDestroy(): void {
    console.info('ngOnDestroy');
  }
}
