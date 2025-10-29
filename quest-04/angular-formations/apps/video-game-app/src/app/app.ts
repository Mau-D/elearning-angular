import { Component } from '@angular/core';
import { ListVideoGames } from '../features/video-games/components/list-video-games/list-video-games';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from "@angular/forms";


@Component({
  imports: [ListVideoGames, MatSliderModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public sliderValue = 15;
  protected title = 'video-game-app';
}
