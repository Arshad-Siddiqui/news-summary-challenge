export default class NewsView {
  mainContainerEl: HTMLElement| null;
  
  constructor() {
  this.mainContainerEl = document.querySelector('#headlines-container')
  }
}