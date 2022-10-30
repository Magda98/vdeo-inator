import { Component, OnInit } from '@angular/core';
import { debounceTime, delay, fromEvent, map, switchMap, tap } from 'rxjs';
import { Channel } from '../interfaces/channel';
import { Video } from '../interfaces/video';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoList!: Video[]

  channelList!: Channel[];

  onScroll$ = fromEvent(window, "scroll").pipe(debounceTime(200));

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.getVideoChannelInfo();

    // TODO: implement infinite scroll
    // this.onScroll$.subscribe(() => {
    // });
  }

  getVideoChannelInfo() {
    this.dataService.getPopularVideos().pipe(delay(500),
      tap((data) => { this.videoList = data }),
      map((data) => data.map((video) => video.snippet.channelId)),
      switchMap((channelIds) => this.dataService.getChannelInfo(channelIds))
    ).subscribe((channelList) => {
      this.channelList = channelList;
    }
    )
  }
}
