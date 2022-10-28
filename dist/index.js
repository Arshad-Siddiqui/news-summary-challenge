"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsClient_1 = __importDefault(require("./newsClient"));
const newsClient = new newsClient_1.default();
newsClient.getAllHeadlines((news) => {
    console.log(news);
});
