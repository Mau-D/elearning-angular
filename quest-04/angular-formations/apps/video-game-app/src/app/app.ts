import { Component } from '@angular/core';
import { ListVideoGames } from '../features/video-games/components/list-video-games/list-video-games';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [ListVideoGames, NgbAlertModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'video-game-app';
}
