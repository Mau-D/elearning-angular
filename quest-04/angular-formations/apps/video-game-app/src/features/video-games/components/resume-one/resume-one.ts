import { Component, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-resume-one',
  imports: [],
  templateUrl: './resume-one.html',
  styleUrl: './resume-one.css'
})
export class ResumeOne {
  id = input.required<number>();
  videoGame = linkedSignal(()=>({id: this.id(), title:'Exemple game'}))
  update() {
    this.videoGame.update(old=>({...old, title: 'Last of us'}))
  }
}
