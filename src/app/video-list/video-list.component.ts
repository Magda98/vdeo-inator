import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../interfaces/video';

@Component({
  selector: 'vin-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input()
  videoList!: Video[]


  constructor() { }

  ngOnInit(): void {
  }

}
