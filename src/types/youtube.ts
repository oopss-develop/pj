export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  videoId: string;
}

export interface YouTubeResponse {
  items: {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
    };
  }[];
} 