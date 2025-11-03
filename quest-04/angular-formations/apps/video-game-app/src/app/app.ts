import { Component, inject, signal } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MainMenu } from '../shared/menus/main-menu/main-menu';
// import { ComputePipe } from '../shared/tools/compute-pipe';
import { AutoFocus } from '../shared/tools/auto-focus';
import { OnInit } from '@angular/core';
import { Title } from '../app/stores/title';
import { Child } from '../features/learnings/pocs/child/child';
import { ResumeOne } from "../features/video-games/components/resume-one/resume-one";

@Component({
  imports: [
    // ComputePipe,
    MainMenu,
    MatSliderModule,
    FormsModule,
    RouterOutlet,
    AutoFocus,
    Child,
    ResumeOne
],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly service = inject(Title);
  // titreS = signal('First Title');
  id = signal(0);
  titreS = this.service.titleAsSignalS;
  value = 5;
  update(): void {
    this.id.update((old) => old + 1);
  }

  myFunction(a: number, b: number): number {
    console.info('Function in template !?');
    return a + b;
  }
  ngOnInit() {
    setTimeout(() => {
      console.info('avant', this.titreS);
      this.service.dispatch('Titre par dispatch');
      // this.titreS.set('Second Title');
      // this.titreS.update((oldValue)=>`${oldValue}!!!`);
      console.info('après', this.titreS);
    }, 1000);
  }
  public sliderValue = 15;
  protected title = 'video-game-app';
}
