import NewsModel from "./newsModel";
import NewsClient from "./newsClient";
import { NewsData } from "./newsModel";
import News from "./news";

export default class NewsView {
  mainContainerEl: HTMLElement| null;
  model: NewsModel;
  client: NewsClient;
  
  constructor(newsModel: NewsModel, newsClient: NewsClient) {
    this.model = newsModel;
    this.client = newsClient;
    this.mainContainerEl = document.querySelector('.headlines-container')
  }

  displayNewsFromApi () {
    this.client.getAllHeadlines((data: NewsData[]) => {
      this.model.setNews(data)
      this.display()
    })
  }

  display() {
    this.model.getNews().forEach((news: News) => {
      let newsEl = document.createElement('div');
      newsEl.className = 'news-container'
      // some cool stuff to present!

      let image = document.createElement('img')
      image.src = news.thumbnail;
      image.alt = news.webTitle;

      let heading = document.createElement('h2')
      heading.textContent = news.webTitle;

      let link = document.createElement('a')
      link.href = news.webUrl
      link.textContent = 'Checkout article'

      newsEl.append(image)
      newsEl.append(heading)
      newsEl.append(link)

      if(this.mainContainerEl === null) throw new Error('Main container does not exist')
      this.mainContainerEl.append(newsEl)
    } )
  }
}