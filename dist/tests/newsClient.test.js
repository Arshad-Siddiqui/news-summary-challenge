const NewsClient = require("../newsClient").default;
require("jest-fetch-mock").enableMocks();

describe("NewsClient", () => {
  describe(".getAllHeadlines", () => {
    it("Gets all the news data and returns an array", () => {
      fetch.mockResponseOnce(
        JSON.stringify({
          response: {
            results: [
              {
                id: "us-news/live/2022/oct/28/democrats-obama-midterms-republicans-us-politics-live-updates",
                type: "liveblog",
                sectionId: "us-news",
                sectionName: "US news",
                webPublicationDate: "2022-10-28T17:42:29Z",
                webTitle:
                  "Man who attacked speaker’s husband Paul Pelosi shouted ‘Where’s Nancy’ – live",
                webUrl:
                  "https://www.theguardian.com/us-news/live/2022/oct/28/democrats-obama-midterms-republicans-us-politics-live-updates",
                apiUrl:
                  "https://content.guardianapis.com/us-news/live/2022/oct/28/democrats-obama-midterms-republicans-us-politics-live-updates",
                isHosted: false,
                pillarId: "pillar/news",
                pillarName: "News",
              },
              {
                id: "us-news/2022/oct/28/paul-pelosi-nancy-pelosi-attack-san-francisco-home",
                type: "article",
                sectionId: "us-news",
                sectionName: "US news",
                webPublicationDate: "2022-10-28T17:36:50Z",
                webTitle:
                  "Paul Pelosi, husband of Nancy Pelosi, in hospital after being attacked at home",
                webUrl:
                  "https://www.theguardian.com/us-news/2022/oct/28/paul-pelosi-nancy-pelosi-attack-san-francisco-home",
                apiUrl:
                  "https://content.guardianapis.com/us-news/2022/oct/28/paul-pelosi-nancy-pelosi-attack-san-francisco-home",
                isHosted: false,
                pillarId: "pillar/news",
                pillarName: "News",
              },
              {
                id: "music/2022/oct/28/jerry-lee-lewis-obituary",
                type: "article",
                sectionId: "music",
                sectionName: "Music",
                webPublicationDate: "2022-10-28T17:33:09Z",
                webTitle: "Jerry Lee Lewis obituary",
                webUrl:
                  "https://www.theguardian.com/music/2022/oct/28/jerry-lee-lewis-obituary",
                apiUrl:
                  "https://content.guardianapis.com/music/2022/oct/28/jerry-lee-lewis-obituary",
                isHosted: false,
                pillarId: "pillar/arts",
                pillarName: "Arts",
              },
            ],
          },
        })
      );

      let newsClient = new NewsClient()
      newsClient.getAllHeadlines((data) => {
        expect(data.length).toBe(3)
        expect(data[0].sectionId).toEqual('us-news')
      })
    });
  });
});
