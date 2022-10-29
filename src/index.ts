import NewsClient from './newsClient'
import NewsModel from './newsModel'
import NewsView from './newsView'

let newsModel = new NewsModel()
let newsClient = new NewsClient()

let newsView = new NewsView(newsModel, newsClient);

newsView.displayNewsFromApi();