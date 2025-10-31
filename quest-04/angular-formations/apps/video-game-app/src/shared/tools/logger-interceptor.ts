import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export const loggerInterceptor: (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => Observable<HttpEvent<unknown>> = (req, next) => {
  console.info(req.url);
  return next(req);
};
export const loggerWarnInterceptor: (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => Observable<HttpEvent<unknown>> = (req, next) => {
  console.warn('warn',req);
  return next(req);
};
