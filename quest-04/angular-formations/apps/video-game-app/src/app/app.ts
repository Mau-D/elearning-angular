import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MainMenu } from '../shared/menus/main-menu/main-menu';
// import { ComputePipe } from '../shared/tools/compute-pipe';
import { AutoFocus } from '../shared/tools/auto-focus';
import { OnInit } from '@angular/core';

@Component({
  imports: [
    // ComputePipe,
    MainMenu,
    MatSliderModule,
    FormsModule,
    RouterOutlet,
    AutoFocus,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  titre = 'First Title';
  value = 5;
  myFunction(a: number, b: number): number {
    console.info('Function in template !?');
    return a + b;
  }
  ngOnInit() {
    setTimeout(() => {
      console.info('avant', this.titre);
      this.titre = 'Second Title';
      console.info('après', this.titre);
    }, 1000);
  }
  public sliderValue = 15;
  protected title = 'video-game-app';
}
