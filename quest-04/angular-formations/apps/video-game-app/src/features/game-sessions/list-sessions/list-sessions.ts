import { Component, inject, OnInit, signal } from '@angular/core';
import { GetListSessions } from '../services/get-list-sessions';
import { GameSession } from '../models';

@Component({
  selector: 'app-list-sessions',
  imports: [],
  templateUrl: './list-sessions.html',
  styleUrl: './list-sessions.css',
})
export class ListSessions implements OnInit {
  private readonly service = inject(GetListSessions);
  // protected sessions: GameSession[] = [];//Ne pourra pas être mis à jour
  protected sessions = signal<GameSession[]>([]); //Pourra être mis à jour

  ngOnInit(): void {
    this.service.getAll().then((items) => this.sessions.set(items));
  }
}
