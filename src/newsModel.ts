import News from './news'

export default class NewsModel {
  news: News[];
  constructor() {
    this.news = []
  }

  setNews(newsData: NewsData[]) {
    this.news = newsData.map(data => new News(data))
  }

  getNews() {
    return this.news;
  }
}

export interface NewsData {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}