"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NewsModel {
    constructor() {
        this.news = [];
    }
    setNews(data) {
        data.forEach(news => {
        });
    }
    addNews(news) {
    }
    getNews() {
        return this.news;
    }
}
exports.default = NewsModel;
