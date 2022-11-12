import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';


@Injectable()
export class CanActivateGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(): boolean | UrlTree {
    console.log(this.authService.isLoggedIn)
    if (!this.authService.isLoggedIn) {
      return false;
    }

    return true;
  }

}
