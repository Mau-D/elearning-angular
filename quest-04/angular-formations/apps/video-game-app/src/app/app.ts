import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MainMenu } from '../shared/menus/main-menu/main-menu';
import { ComputePipe } from '../shared/tools/compute-pipe';

@Component({
  imports: [ComputePipe, MainMenu, MatSliderModule, FormsModule, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  value=5;
  myFunction(a:number, b:number): number {
    console.info('Function in template !?');
    return a+b;
  }
  public sliderValue = 15;
  protected title = 'video-game-app';
}
