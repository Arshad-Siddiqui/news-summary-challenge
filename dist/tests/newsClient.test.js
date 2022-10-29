const NewsClient = require("../newsClient").default;
const apiResponse = require('./examples/news.json')
require("jest-fetch-mock").enableMocks();

describe("NewsClient", () => {
  describe(".getAllHeadlines", () => {
    it("Gets all the news data and returns an array", () => {
      fetch.mockResponseOnce(
        JSON.stringify(apiResponse)
      );

      let newsClient = new NewsClient()
      newsClient.getAllHeadlines((data) => {
        expect(data.length).toBe(10)
        expect(data[0].sectionId).toEqual('football')
      })
    });
  });
});
