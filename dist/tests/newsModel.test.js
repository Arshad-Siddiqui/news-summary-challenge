const NewsModel = require('../newsModel').default
const newsArr = require('./examples/news.json').response.results
const News = require('../news').default

describe('NewsModel', () => {
  describe('.setNews/.getNews', () => {
    it('should parse an array of objects and store necessary information in an array of News objects', () => {
      let newsModel = new NewsModel();
      newsModel.setNews(newsArr)
      expect(newsModel.getNews().length).toEqual(10)
      expect(newsModel.getNews()[0].webTitle).toEqual("Brighton v Chelsea, Newcastle v Aston Villa: Premier League – live")
      expect(newsModel.getNews()[4]).toBeInstanceOf(News);
    })

    it('should store the thumbnail into the news object', () => {
      let newsModel = new NewsModel();
      newsModel.setNews(newsArr)
      expect(newsModel.getNews()[0].thumbnail).toEqual("https://media.guim.co.uk/0336c07d050be410bed406809e863f2dcec06bbc/0_111_3794_2277/500.jpg")
      expect(newsModel.getNews()[9].thumbnail).toEqual("https://media.guim.co.uk/d847af0d914fa14f30e9097d3130f597f9548aef/179_5_4727_2836/500.jpg")
    })
  }) 
})