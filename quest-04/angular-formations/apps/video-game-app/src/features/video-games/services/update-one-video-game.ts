import { Injectable } from '@angular/core';
import { VideoGame } from '../../models/video-games';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateOneVideoGame {
  updateOne(item: VideoGame): Observable<VideoGame>{
    return of(item).pipe(delay(500))
  }
}
