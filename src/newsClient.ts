import guardianApiKey from "./guardianApiKey"

export default class NewsClient {
  getAllHeadlines(callBack: Function) {
    fetch('https://content.guardianapis.com/search?api-key=' + guardianApiKey)
    .then(data => data.json())
    .then(data => callBack(data));
  }
}