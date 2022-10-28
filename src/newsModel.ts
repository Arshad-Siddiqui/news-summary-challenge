import News from './news'

export default class NewsModel {
  news: News[];
  constructor() {
    this.news = []
  }

  setNews(data: NewsData[]) {
    data.forEach(news => {

    })
  }

  addNews (news: NewsData) {

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