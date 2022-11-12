import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';
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

      return next.handle(modifiedReq).pipe(catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403) {
            this.authService.isLoggedIn = false;
          }
        }
        return EMPTY
      }))
    }

    return next.handle(req);
  }
}
