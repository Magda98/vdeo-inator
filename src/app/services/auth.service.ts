import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token?: string;

  isLoggedIn: boolean = false

  constructor(private http: HttpClient, private router: Router, private storage: StorageService) {
    const token = this.storage.getData("access_token");

    if (token) {
      this.token = token;
      this.isLoggedIn = true
    }
  }

  login() {
    const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = '924790292261-ujrh85ef0d19h9uqrad1h0edvt2saq5b.apps.googleusercontent.com';
    const responseType = 'token'
    const scopes = new Array(
      'https://www.googleapis.com/auth/youtube.readonly'
    );
    const scope = scopes.join('%20');

    window.location.href = `${baseUrl}?&client_id=${clientId}&scope=${scope}&redirect_uri=${environment.redirectUri}&response_type=${responseType}`;
  }

  getToken() {
    const url = location.hash.slice(1);
    const token = new URLSearchParams(url).get("access_token")
    if (token) {
      this.token = token;
      this.storage.setData('access_token', token)
    }
    this.isLoggedIn = true
    this.router.navigate(['']);
  }

}
