const NewsData = require('./examples/news.json').response.results
const News = require('../news').default

describe('News', () => {
  it('constructs', () => {
    let news = new News(NewsData[1])
    expect(news.webUrl).toEqual("https://www.theguardian.com/world/live/2022/oct/29/russia-ukraine-war-live-moscow-says-draft-completed-un-chief-appeals-for-renewed-grain-deal")
  })
})