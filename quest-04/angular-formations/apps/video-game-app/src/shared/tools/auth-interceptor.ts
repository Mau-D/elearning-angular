import { inject } from '@angular/core';
import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { AuthenticateUser } from '../../features/authentication/services/authenticate-user';

export const authInterceptor: (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => Observable<HttpEvent<unknown>> = (req, next) => {
  const auth = inject(AuthenticateUser);
  return auth.asObservable.pipe(
    take(1),
    switchMap((user) => {
      const token = user?.token;
      if (!token) {
        return next(req);
      }
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(authReq)
      return next(authReq);
    })
  );
};
