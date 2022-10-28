"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const guardianApiKey_1 = __importDefault(require("./guardianApiKey"));
class NewsClient {
    getAllHeadlines(callBack) {
        fetch('https://content.guardianapis.com/search?api-key=' + guardianApiKey_1.default)
            .then(data => data.json())
            .then(data => data.response.results)
            .then(data => callBack(data));
    }
}
exports.default = NewsClient;
