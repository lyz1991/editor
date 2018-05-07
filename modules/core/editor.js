import DomUtil from '../util/util'
import { $ } from '../util/dom'
import Menu from '../MenuList'
import S from '../selections/selection'
export default class Editor {
  constructor (selector, menuContainer, opt = {}) {
    this.container = DomUtil.query(selector)
    this.id = this.container.id
    this.configContainer = DomUtil.query(menuContainer)
    this.change = opt.change
    this.publish = opt.publish
    new Menu(this, opt)
    this._initDom(selector)
    this._bindEvent(this)
  }
  _initDom (selector) {
    DomUtil.append(this.container, $('<p><br></p>')[0])
  }
  _bindEvent (editor) {
    this.container.addEventListener('mousedown', e => {
      this.container.addEventListener('mouseleave', e => {
        this.orirange = window.getSelection().getRangeAt(0)
      })
      this.container.addEventListener('keyup', e => {
        this.orirange = window.getSelection().getRangeAt(0)
        if (DomUtil.trim(this.container.innerHTML) == '') {
          const $p = $('<p><br></p>')[0]
          DomUtil.append(editor.container, $p)
          S.createRange($p, false, editor)
        }
      })
    })
    this.container.addEventListener('keydown', e => {
      this.orirange = window.getSelection().getRangeAt(0)
      if (e.keyCode == 8) {
        if (DomUtil.trim(this.container.innerHTML) == '<p><br></p>') {
          e.preventDefault()
        }
      }
      if (e.keyCode == 13) {
        e.preventDefault()
        const $p = $('<p><br></p>')[0]
        console.log(this.orirange.commonAncestorContainer)
        DomUtil.insertAfter($p, this.orirange.commonAncestorContainer)
        S.createRange($p, false, editor)
      }
    })

  }
}