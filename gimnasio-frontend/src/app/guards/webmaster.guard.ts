import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const WebMasterGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated() && authService.getUserType() === 'WebMaster') {
    return true;
  }
  else if (authService.isAuthenticated()) {
    return router.navigate(['/actividades']);
  }
  else {
    return router.navigate(['/']);
  }
};
