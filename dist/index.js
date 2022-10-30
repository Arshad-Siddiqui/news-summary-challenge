"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsClient_1 = __importDefault(require("./newsClient"));
const newsModel_1 = __importDefault(require("./newsModel"));
const newsView_1 = __importDefault(require("./newsView"));
let newsModel = new newsModel_1.default();
let newsClient = new newsClient_1.default();
let newsView = new newsView_1.default(newsModel, newsClient);
newsView.displayNewsFromApi();
