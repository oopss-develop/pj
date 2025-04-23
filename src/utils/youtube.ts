import { YouTubeResponse, YouTubeVideo } from '../types/youtube';

const API_KEY = 'AIzaSyBuhF5rV9Q9VIbkbNY_8BUwHOtwT5ZcXVo'; // 실제 API 키로 교체 필요

// 채널 ID를 찾는 함수
export const getChannelId = async (): Promise<string> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=muhakHLYBRG&type=channel&part=id`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch channel ID');
    }

    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items[0].id.channelId;
    }
    throw new Error('Channel not found');
  } catch (error) {
    console.error('Error fetching channel ID:', error);
    return '';
  }
};

export const fetchLatestVideos = async (): Promise<YouTubeVideo[]> => {
  try {
    const channelId = await getChannelId();
    if (!channelId) {
      throw new Error('Channel ID not found');
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4&type=video`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch videos');
    }

    const data: YouTubeResponse = await response.json();
    
    return data.items.map(item => ({
      id: item.id.videoId,
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnailUrl: item.snippet.thumbnails.high.url
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}; 