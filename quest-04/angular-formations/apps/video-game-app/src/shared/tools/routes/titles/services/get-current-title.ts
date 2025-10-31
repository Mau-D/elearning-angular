import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetCurrentTitle {
  //Simulation d'appel API

  private readonly http = inject(HttpClient);
  get(key: string | null): Observable<string> {
    return of(`Mes jeux vidéos préférés:`+ key).pipe(delay(500));
  }
}
