import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Video } from './interfaces/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vdeo-inator';

  videosList!: Video[]

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getChannelInfo().subscribe((data) => {
      console.log(data);

    })

    this.dataService.getPopularVideos().subscribe((data) => {
      this.videosList = data.items;
    })
  }
}
