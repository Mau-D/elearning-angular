import { Injectable } from '@angular/core';
import { Friend } from '../models';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetListFriends {
  getAll(): Observable<Friend[]>{
    const array: Friend[] = [
      {
        id:1,
        name: 'Momo'
      },
      {
        id:2,
        name: 'Jo'
      }
    ]
    return of(array).pipe(delay(1000));
  }
}
