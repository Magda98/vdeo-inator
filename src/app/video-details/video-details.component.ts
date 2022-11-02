import { DataService } from './../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Video } from '../interfaces/video';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Component({
  selector: 'vin-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  videoDetails?: Video;

  videoIframe!: SafeHtml;

  constructor(private route: ActivatedRoute, private dataService: DataService, protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.pipe(map((params) => params['id']), switchMap((id: string) => {
      return this.dataService.getVideoDetails(id)
    })).subscribe(([video]) => {
      this.videoDetails = video;
      this.sanitizeHtml(this.videoDetails.player.embedHtml)
    })
  }

  public sanitizeHtml(value: string) {
    const sanitizedContent = DOMPurify.sanitize(value, { ADD_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] });
    this.videoIframe = this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
  }

}
