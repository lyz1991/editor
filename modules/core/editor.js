import DomUtil from '../util/util'
import Menu from '../MenuList'
export default class Editor {
  constructor (selector, selector2, opt = {}) {
    this.id = DomUtil.query(selector)
    this.configContainer = DomUtil.query(selector2)
    new Menu(opt, this.configContainer)
  }
}