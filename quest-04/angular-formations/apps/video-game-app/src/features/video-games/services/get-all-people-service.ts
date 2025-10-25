import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleApiResult } from './models';

@Injectable({
  providedIn: 'root', //au début de l'application, donc singleton
})
export class GetAllPeopleService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<PeopleApiResult> {
    return this.http.get<PeopleApiResult>('https://swapi.tech/api/people');
    // return new Observable((Subscriber) => {
    //   setTimeout(() => {
    //     const result: PeopleApiResult = {
    //       results: [
    //         { name: 'test1', uid: '1' },
    //         { name: 'test2', uid: '2' },
    //       ],
    //     };
    //     Subscriber.next(result);
    //   }, 1500);
    //   setTimeout(() => {
    //     const result: PeopleApiResult = {
    //       results: [
    //         { name: 'test10', uid: '10' },
    //         { name: 'test20', uid: '20' },
    //       ],
    //     };
    //     Subscriber.next(result);
    //   }, 3000);
    // });
  }
}
