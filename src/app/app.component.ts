import { Component, OnInit } from '@angular/core';
import { Video } from './interfaces/video';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'video-inator';

  videoList!: Video[]

  constructor(public authService: AuthService) {
  }

  logIn() {
    this.authService.login();
  }

  ngOnInit() {
  }
}
