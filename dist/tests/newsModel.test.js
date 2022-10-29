const NewsModel = require('../newsModel').default
const newsArr = require('./examples/news.json').response.results
const News = require('../news').default

describe('NewsModel', () => {
  describe('.setNews/.getNews', () => {
    it('should parse an array of objects and store necessary information in an array of News objects', () => {
      let newsModel = new NewsModel();
      newsModel.setNews(newsArr)
      expect(newsModel.getNews().length).toEqual(10)
      expect(newsModel.getNews()[0].webTitle).toEqual("Man who attacked speaker’s husband Paul Pelosi shouted ‘Where’s Nancy’ – live")
      expect(newsModel.getNews()[4]).toBeInstanceOf(News);
    })
  }) 
})