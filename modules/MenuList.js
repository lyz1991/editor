import bold from './bold/bold'
import DomUtil from './util/util'
import config from './config'
export default class Menu {
  constructor (opt, mContainer) {
    this.bold = bold
    this.init(opt, mContainer)
  }
  init (opt, mContainer) {
    let frag = document.createDocumentFragment()
    for (let key in opt ) {
      DomUtil.append(frag, DomUtil.generateNode(config[key].tpl))
    }
    DomUtil.append(mContainer, frag)
  }
}