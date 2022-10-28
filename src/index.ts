import NewsClient from './newsClient'

const newsClient = new NewsClient()

newsClient.getAllHeadlines((data: JSON) => {
  console.log(data)
})