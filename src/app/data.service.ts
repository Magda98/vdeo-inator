import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideosResponse } from './interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getPopularVideos() {
    const params = {
      key: 'AIzaSyADY0aZ2uJH7fVAQeCPQxYqlw3t2KYbPQY',
      regionCode: 'pl',
      chart: 'mostPopular',
      part: ['player', 'statistics', 'snippet', 'status', 'topicDetails']
    }

    return this.http.get<VideosResponse>('https://www.googleapis.com/youtube/v3/videos', { params })
  }

  getChannelInfo() {
    const params = {
      key: 'AIzaSyADY0aZ2uJH7fVAQeCPQxYqlw3t2KYbPQY',
      id: ['UCTIyVgnTO9gGZBFq6GRJvUQ'],
      part: ['snippet']
    }

    return this.http.get(' https://www.googleapis.com/youtube/v3/channels', { params })
  }
}
