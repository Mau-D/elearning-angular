import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { VideoGame } from '../../../models/video-games';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-video-game',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-video-game.html',
  styleUrl: './add-video-game.css',
})
export class AddVideoGame {
  videoGame: VideoGame = {
    label: '',
    year: new Date().getFullYear(),
  };
  form = viewChild<NgForm>('videoGameForm');
  save(): void {
    console.log(this.form()?.valid);
    console.log(this.form()?.controls['label'].errors);
    console.info(this.videoGame);
  }
}
