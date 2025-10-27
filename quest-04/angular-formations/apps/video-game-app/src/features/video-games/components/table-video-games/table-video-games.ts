import { Component, input, output } from '@angular/core';
import { VideoGame } from '../../../models/video-games';

@Component({
  selector: 'app-table-video-games',
  imports: [],
  templateUrl: './table-video-games.html',
  styleUrl: './table-video-games.css',
})
export class TableVideoGames {
  items = input.required<VideoGame[]>();
  tableTitle = input.required<string>();
  askToRemoveOneElement = output<string>();
  deleteGame = output<VideoGame>();

  deleteSpecificElement(item: VideoGame): void {
    this.deleteGame.emit(item);
  }
  clickToRemove(): void {
    this.askToRemoveOneElement.emit('test');
  }
}
