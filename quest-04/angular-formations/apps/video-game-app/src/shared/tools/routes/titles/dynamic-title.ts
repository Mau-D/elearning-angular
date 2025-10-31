import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { GetCurrentTitle } from './services/get-current-title';

// export const getDynamicTitle: ResolveFn<string> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<string> =>{}
export const getDynamicTitle: ResolveFn<string> = (route): Observable<string> => {
  const getTitle = inject(GetCurrentTitle);
  const id = route.paramMap.get('id');
  return getTitle.get(id);
};
