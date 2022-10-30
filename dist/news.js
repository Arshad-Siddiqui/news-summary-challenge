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
        if (data.fields == undefined) {
            data.fields = { thumbnail: 'https://media.guim.co.uk/45e7a9a3f28116c21ca07da183c7c4a9940c17af/0_44_8256_4954/500.jpg' };
        }
        this.thumbnail = data.fields.thumbnail;
    }
}
exports.default = News;
