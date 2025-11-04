import { Component, inject, OnInit, resource, signal } from '@angular/core';
import { GetListSessions } from '../services/get-list-sessions';
import { GameSession, GameSteam } from '../models';
import { rxResource } from '@angular/core/rxjs-interop';
import { GetListFriends } from '../services/get-list-friends';
import { VideoGame } from '../../models/video-games';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-list-sessions',
  imports: [],
  templateUrl: './list-sessions.html',
  styleUrl: './list-sessions.css',
})
export class ListSessions implements OnInit {
  private readonly service = inject(GetListSessions);
  private readonly serviceFriends = inject(GetListFriends);
  // protected sessions: GameSession[] = [];//Ne pourra pas être mis à jour
  // protected sessions = signal<GameSession[]>([]); //Pourra être mis à jour
  protected sessionRessource = resource({
    defaultValue: [],
    loader: () => this.service.getAll()
  })

  //rxResource
  protected friendsResource = rxResource({
    defaultValue:[],
    stream:()=> this.serviceFriends.getAll()
  })
  //httpResource
  protected gamesCriticResource = httpResource<GameSteam[]>(()=>'https://api.opencritic.com/api/game', {
    defaultValue:[]
  })

  ngOnInit(): void {
    // this.service.getAll().then((items) => this.sessions.set(items));
    console.info('ngOnInit')
  }
}
