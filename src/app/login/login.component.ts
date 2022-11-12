import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'vin-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(private authService: AuthService) {
    this.authService.getToken();
  }

}
