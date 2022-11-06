import { DataService } from './../services/data.service';
import { Component, Input, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, switchMap, tap } from 'rxjs';
import { Video } from '../interfaces/video';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import DOMPurify from 'dompurify';
import { Channel } from '../interfaces/channel';

@Component({
  selector: 'vin-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  videoDetails?: Video;

  channelDetails?: Channel

  relatedVideos?: Video[]

  videoIframe!: SafeHtml;

  constructor(private route: ActivatedRoute, public dataService: DataService, protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map((params) => params['id']),
      switchMap((id: string) => {
        return this.dataService.getVideoDetails(id)
      })).pipe(
        tap(([video]) => {
          this.videoDetails = video;
          this.sanitizeHtml(this.videoDetails.player.embedHtml)
        }),
        switchMap(([video]) => this.dataService.getChannelInfo([video.snippet.channelId])),
        tap(([channel]) => {
          this.channelDetails = channel;
        }),
        switchMap((_) => this.dataService.getRelatedVideos(this.videoDetails?.id as string)),
        tap((relatedVideos) => {
          this.relatedVideos = relatedVideos
        })
      ).subscribe()
  }

  public sanitizeHtml(value: string) {
    const sanitizedContent = DOMPurify.sanitize(value, { ADD_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] });
    this.videoIframe = this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
  }
}
