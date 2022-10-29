"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // dist/guardianApiKey.js
  var require_guardianApiKey = __commonJS({
    "dist/guardianApiKey.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = "62b6e0b9-f1c0-4b2a-a4d4-4aec34d5678f";
    }
  });

  // dist/newsClient.js
  var require_newsClient = __commonJS({
    "dist/newsClient.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var guardianApiKey_1 = __importDefault(require_guardianApiKey());
      var NewsClient = class {
        getAllHeadlines(callBack) {
          fetch("https://content.guardianapis.com/search?api-key=" + guardianApiKey_1.default + "&show-fields=thumbnail").then((data) => data.json()).then((data) => data.response.results).then((data) => callBack(data));
        }
      };
      exports.default = NewsClient;
    }
  });

  // dist/news.js
  var require_news = __commonJS({
    "dist/news.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var News = class {
        constructor(data) {
          this.id = data.id;
          this.type = data.type;
          this.sectionName = data.sectionName;
          this.webPublicationDate = data.webPublicationDate;
          this.webTitle = data.webTitle;
          this.webUrl = data.webUrl;
          this.apiUrl = data.apiUrl;
          this.thumbnail = data.fields.thumbnail;
        }
      };
      exports.default = News;
    }
  });

  // dist/newsModel.js
  var require_newsModel = __commonJS({
    "dist/newsModel.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var news_1 = __importDefault(require_news());
      var NewsModel = class {
        constructor() {
          this.news = [];
        }
        setNews(newsData) {
          this.news = newsData.map((data) => new news_1.default(data));
        }
        getNews() {
          return this.news;
        }
      };
      exports.default = NewsModel;
    }
  });

  // dist/newsView.js
  var require_newsView = __commonJS({
    "dist/newsView.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var NewsView = class {
        constructor(newsModel, newsClient) {
          this.model = newsModel;
          this.client = newsClient;
          this.mainContainerEl = document.querySelector(".headlines-container");
        }
        displayNewsFromApi() {
          this.client.getAllHeadlines((data) => {
            this.model.setNews(data);
            this.display();
          });
        }
        display() {
          this.model.getNews().forEach((news) => {
            let newsEl = document.createElement("div");
            newsEl.className = "news-container";
            let image = document.createElement("img");
            image.src = news.thumbnail;
            image.alt = news.webTitle;
            let heading = document.createElement("h2");
            heading.textContent = news.webTitle;
            let link = document.createElement("a");
            link.href = news.webUrl;
            link.textContent = "Checkout article";
            newsEl.append(image);
            newsEl.append(heading);
            newsEl.append(link);
            if (this.mainContainerEl === null)
              throw new Error("Main container does not exist");
            this.mainContainerEl.append(newsEl);
          });
        }
      };
      exports.default = NewsView;
    }
  });

  // dist/index.js
  var require_dist = __commonJS({
    "dist/index.js"(exports) {
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var newsClient_1 = __importDefault(require_newsClient());
      var newsModel_1 = __importDefault(require_newsModel());
      var newsView_1 = __importDefault(require_newsView());
      var newsModel = new newsModel_1.default();
      var newsClient = new newsClient_1.default();
      var newsView = new newsView_1.default(newsModel, newsClient);
    }
  });
  require_dist();
})();
