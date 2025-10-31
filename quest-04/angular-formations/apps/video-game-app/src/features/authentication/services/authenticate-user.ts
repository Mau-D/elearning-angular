import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { LoggedUser } from '../models/logged.user';
import { AuthUser } from '../models/authenticate.user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateUser {
  //BehaviorSubject espace mémoire réservé retournant la dernière valeur, conserver private intérieur, 'HOT!!! Observable
  private readonly userStore = new BehaviorSubject<LoggedUser | undefined>(
    undefined
  );
  logIn(authUser: AuthUser): Observable<LoggedUser> {
    //Simule le retour d'un appel API
    const user: LoggedUser = {
      nickName: 'Superman',
      firstName: 'John',
      lastName: 'Doe',
      token: 'abc123',
    };
    return of(user).pipe(
      delay(1000),
      tap((user) => this.userStore.next(user))
    );
  }
  get isAuthenticated(): boolean {
    return this.userStore.value !== undefined;
  }
  get asObservable(): Observable<LoggedUser | undefined>{
    return this.userStore.asObservable();
  }
}
