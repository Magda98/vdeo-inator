import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private authService: AuthService) {

  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.token) {
      let modifiedReq = req;

      if (!req.url.includes('/login')) {
        modifiedReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${this.authService.token}`),
        });
      }

      return next.handle(modifiedReq);
    }

    return next.handle(req);
  }
}
