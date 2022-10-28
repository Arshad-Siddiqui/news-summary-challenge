import guardianApiKey from "./guardianApiKey"

export default class NewsClient {
  getAllHeadlines(callBack: Function) {
    fetch('https://content.guardianapis.com/search?api-key=' + guardianApiKey)
      .then(res => { res.json() })
      .then(data => callBack(data))
      .catch(err => console.log('Could not fetch from Guardin API: ' + err.message))
  }
}