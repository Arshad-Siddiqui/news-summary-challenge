"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class News {
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
}
exports.default = News;
