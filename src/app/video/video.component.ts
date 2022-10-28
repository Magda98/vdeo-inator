import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../interfaces/video';

@Component({
  selector: 'vin-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input()
  video!: Video

  constructor() { }

  ngOnInit(): void {
  }

}
