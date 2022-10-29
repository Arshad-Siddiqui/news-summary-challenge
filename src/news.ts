import { NewsData } from "./newsModel";

export default class News {
  id: string;
  type: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  thumbnail: string;
  constructor(data: NewsData) {
    this.id = data.id;
    this.type = data.type;
    this.sectionName = data.sectionName;
    this.webPublicationDate = data.webPublicationDate;
    this.webTitle = data.webTitle;
    this.webUrl = data.webUrl;
    this.apiUrl = data.apiUrl;
    this.thumbnail = data.fields.thumbnail;
  }
}

