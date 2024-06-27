import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service'; // Adjust the path as per your service location

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private router: Router, private service: ServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.service.isUserLoggedIn() && this.service.userType() === 'user') {
      return true; // User is logged in and is of type 'user'
    }

    // Redirect to the login page and return false to block navigation
    return this.router.createUrlTree(['/login']);
  }
}
