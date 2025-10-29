import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";


@Component({
  imports: [MatSliderModule, FormsModule, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  public sliderValue = 15;
  protected title = 'video-game-app';
}
