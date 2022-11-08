import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { Channel, ChannelResponse } from '../interfaces/channel';
import { Video, VideosResponse } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  videosParams = {
    regionCode: 'pl',
  }

  constructor(private http: HttpClient) {
  }

  getPopularVideos() {
    const params =
    {
      ...this.videosParams,
      maxResults: 48,
      chart: 'mostPopular',
      part: ['statistics', 'snippet', 'status']
    };

    return this.http.get<VideosResponse>('https://www.googleapis.com/youtube/v3/videos', { params }).pipe(map((data) => {
      return data.items
    }))
  }

  getVideoDetails(id: string) {
    const params = {
      ...this.videosParams,
      id: [id],
      maxResults: 48,
      part: ['player', 'statistics', 'snippet', 'status']
    }

    return this.http.get<VideosResponse>('https://www.googleapis.com/youtube/v3/videos', { params }).pipe(map((data) => {
      return data.items
    }))
  }

  getChannelInfo(idList: string[]) {
    const params = {
      ...this.videosParams,
      id: idList,
      part: ['snippet', 'contentDetails']
    }

    return this.http.get<ChannelResponse>(' https://www.googleapis.com/youtube/v3/channels', { params }).pipe(map((data) => data.items))
  }

  getChannelVideos(playlistId: string) {
    const params = {
      ...this.videosParams,
      playlistId,
      maxResults: 6,
      part: ['snippet']
    }

    return this.http.get<VideosResponse>(' https://www.googleapis.com/youtube/v3/playlistItems', { params }).pipe(map((data) => {
      return data.items
    }))
  }
}
