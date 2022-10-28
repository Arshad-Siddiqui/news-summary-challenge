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
          fetch("https://content.guardianapis.com/search?api-key=" + guardianApiKey_1.default).then((data) => data.json()).then((data) => callBack(data));
        }
      };
      exports.default = NewsClient;
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
      var newsClient = new newsClient_1.default();
      newsClient.getAllHeadlines((news) => {
        console.log(news);
      });
    }
  });
  require_dist();
})();
