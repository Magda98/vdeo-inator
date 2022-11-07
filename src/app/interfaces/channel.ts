type thumbnails = 'default' | 'high' | 'medium'

export interface Channel {
  kind: string;
  etag: string;
  id: string;
  contentDetails: {
    relatedPlaylists: {
      likes: string,
      uploads: string
    },
  }
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      [key in thumbnails]: {
        url: string,
        width: number,
        height: number,
      }
    }
  }
}


export interface ChannelResponse {
  kind: string
  etag: string
  nextPageToken: string
  items: Channel[]
}
