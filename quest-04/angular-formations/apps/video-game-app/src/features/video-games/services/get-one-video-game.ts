import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { VideoGame } from '../../models/video-games';

@Injectable({
  providedIn: 'root'
})
export class GetOneVideoGame {
  getOne(id:number):Observable<VideoGame>{
    return of({id:id, label:'Test Game', year:2000}).pipe(delay(500));
  }
}
