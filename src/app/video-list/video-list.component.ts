import { Component, Input, OnInit } from '@angular/core';
import { Channel } from '../interfaces/channel';
import { Video } from '../interfaces/video';

@Component({
  selector: 'vin-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input()
  videoList!: Video[]

  @Input()
  channelList!: Channel[];

  skeletonArray = Array.from({ length: 48 })

  public getChannelImg(channelId: string) {
    const channel = this.channelList.find((channel) => channel.id === channelId);
    return channel?.snippet.thumbnails.high.url;
  }

}
