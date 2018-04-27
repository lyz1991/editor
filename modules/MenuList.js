import bold from './bold/bold'
import italic from './italic/italic'
import DomUtil from './util/util'
import config from './config'
export default class Menu {
  constructor (opt, mContainer) {
    this.bold = bold
    this.italic = italic
    this.init(opt, mContainer)
  }
  init (opt, mContainer) {
    let frag = document.createDocumentFragment()
    for (let key in opt ) {
      DomUtil.append(frag, DomUtil.generateNode(config[key]))
    }
    DomUtil.append(mContainer, frag)
    this.bind(mContainer)
  }
  bind (mContainer) {
    for (let i in this) {
      let dom = mContainer.querySelector(`button[name=${this[i].name}]`)
      dom.addEventListener('click',  (e) => {
        if (!this[i].active) {
         return this[i].onClick(e, window.getSelection().toString())
        }
        return document.execCommand('Redo')
      })
    }
  }
}