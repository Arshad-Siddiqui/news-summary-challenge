"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const news_1 = __importDefault(require("./news"));
class NewsModel {
    constructor() {
        this.news = [];
    }
    setNews(newsData) {
        this.news = newsData.map(data => new news_1.default(data));
    }
    getNews() {
        return this.news;
    }
}
exports.default = NewsModel;
