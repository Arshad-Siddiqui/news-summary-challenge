const NewsData = require('./examples/news.json').response.results
const News = require('../news').default

describe('News', () => {
  it('constructs', () => {
    let news = new News(NewsData[1])
    expect(news.webUrl).toEqual("https://www.theguardian.com/us-news/2022/oct/28/paul-pelosi-nancy-pelosi-attack-san-francisco-home")
  })
})