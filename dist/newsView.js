"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NewsView {
    constructor(newsModel, newsClient) {
        this.model = newsModel;
        this.client = newsClient;
        this.mainContainerEl = document.querySelector('.headlines-container');
    }
    displayNewsFromApi() {
        this.client.getAllHeadlines((data) => {
            this.model.setNews(data);
            this.display();
        });
    }
    display() {
        this.model.getNews().forEach((news) => {
            let newsEl = document.createElement('div');
            newsEl.className = 'news-container';
            let image = document.createElement('img');
            image.src = news.thumbnail;
            let heading = document.createElement('h2');
            heading.textContent = news.webTitle;
            let link = document.createElement('a');
            link.href = news.webUrl;
            link.textContent = 'Lets go check it out!';
            newsEl.append(image);
            newsEl.append(heading);
            newsEl.append(link);
            if (this.mainContainerEl === null)
                throw new Error('Main container does not exist');
            this.mainContainerEl.append(newsEl);
        });
    }
}
exports.default = NewsView;
