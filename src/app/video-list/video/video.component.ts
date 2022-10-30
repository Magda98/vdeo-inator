import { Component, Input } from '@angular/core';
import { Video } from '../../interfaces/video';

@Component({
  selector: 'vin-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @Input()
  video!: Video

  @Input()
  channelImg?: string

}
