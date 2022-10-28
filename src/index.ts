import NewsClient from './newsClient'

const newsClient = new NewsClient()
newsClient.getAllHeadlines((news: any) => {
  console.log(news)
})