import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateUser } from '../services/authenticate-user';
import { inject } from '@angular/core';

export const requireAuthenticatedGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthenticateUser);
  const router = inject(Router);
  if (!service.isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
