import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../models/user';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})

/* -------  redirects authenticated users to /dashboard   -------- */
export class PublicGuard implements CanActivate {

  currentUser: User;

  constructor(private authService: AuthenticationService,
              private router: Router) {
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.currentUser) {
      return true;
    }
    this.router.navigate(['/dashboard'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
