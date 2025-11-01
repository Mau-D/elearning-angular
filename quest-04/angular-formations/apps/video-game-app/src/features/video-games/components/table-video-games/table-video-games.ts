import { Component, inject, input, output } from '@angular/core';
import { VideoGame } from '../../../models/video-games';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-video-games',
  imports: [],
  templateUrl: './table-video-games.html',
  styleUrl: './table-video-games.css',
})
export class TableVideoGames {
  private readonly router = inject(Router);
  items = input.required<VideoGame[]>();
  tableTitle = input.required<string>();
  askToRemoveOneElement = output<string>();
  deleteGame = output<VideoGame>();
  editOne(item: VideoGame): void {
    this.router.navigate(['video-games', item.id]);
  }
  deleteSpecificElement(item: VideoGame): void {
    this.deleteGame.emit(item);
  }
  clickToRemove(): void {
    this.askToRemoveOneElement.emit('test');
  }
}
