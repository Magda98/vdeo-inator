import { Component, OnInit } from '@angular/core';
import { Video } from './interfaces/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vdeo-inator';

  videoList!: Video[]

  constructor() {
  }

  ngOnInit() {
  }
}
