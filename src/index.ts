import NewsClient from './newsClient'
import NewsModel from './newsModel'
import NewsView from './newsView'

let newsModel = new NewsModel()
let newsClient = new NewsClient()

let newsView = new NewsView(newsModel, newsClient);

// Below commented out to stop using the API as I build other parts of the app.
// newsView.displayNewsFromApi();