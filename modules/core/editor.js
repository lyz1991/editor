import DomUtil from '../util/util'
import { $ } from '../util/dom'
import Menu from '../MenuList'
export default class Editor {
  constructor (selector, selector2, opt = {}) {
    this.container = DomUtil.query(selector)
    this.id = this.container.id
    this.configContainer = DomUtil.query(selector2)
    new Menu(this, opt)
    this._initDom(selector)
    this._bindEvent(this)
  }
  _initDom (selector) {
    DomUtil.append(this.container, $('<p><br></p>')[0])
  }
  _bindEvent (editor) {
    this.container.addEventListener('blur', (e) => {
      this.orirange = window.getSelection().getRangeAt(0)
    })
  }
}