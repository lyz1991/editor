import DomUtil from '../util/util'
import { $ } from '../util/dom'
import Menu from '../MenuList'
import S from '../selections/selection'
export default class Editor {
  constructor (selector, menuContainer, opt = {}) {
    this.container = DomUtil.query(selector)
    this.id = this.container.id
    this.configContainer = DomUtil.query(menuContainer)
    this.change = DomUtil.debounce(() => {
      if (this.container.innerHTML != this.record[this.record.length - 1]) {
        console.log('变了')
        this.record.push(this.container.innerHTML)
        opt.change && opt.change()
      } else {
        console.log('没变')
      }
    }, 500)
    this.publish = opt.publish
    this.container.focus()
    this.record = ['<p><br></p>']
    this.orirange = window.getSelection().getRangeAt(0)
    new Menu(this, opt)
    this._initDom(selector)
    this._bindEvent(this)
  }
  _initDom (selector) {
    DomUtil.append(this.container, $('<p><br></p>')[0])
    console.log(this.container.children)
  }
  _bindEvent (editor) {
    let composition
    this.container.addEventListener('mousedown', e => {
      this.container.addEventListener('mouseleave', e => {
        this.orirange = window.getSelection().getRangeAt(0)
      })
    })
    this.container.addEventListener('compositionstart', () => {
      composition = true
    })
    this.container.addEventListener('compositionend', () => {
      composition = false
      if (!composition) {
        this.checkHtml(editor)
      }
    })
    this.container.addEventListener('keyup', e => {
      if (!composition) {
        this.checkHtml(editor)
      }
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
       if (this.orirange.commonAncestorContainer.nodeName.toUpperCase() == 'P' &&
         this.orirange.commonAncestorContainer.parentNode.nodeName.toUpperCase() == 'BLOCKQUOTE') {
         DomUtil.append(editor.container, $p)
       } else {
          if (this.orirange.commonAncestorContainer.id == this.id) {
            DomUtil.append(this.container, $p)
          } else {
            DomUtil.insertAfter($p, this.orirange.commonAncestorContainer)
          }

       }
        if (this.orirange.commonAncestorContainer.nodeName.toUpperCase() == 'BLOCKQUOTE') {
          DomUtil.remove(editor.container, 'BLOCKQUOTE')
        }
        S.createRange($p, false, editor)
      }
    })
  }
  checkHtml (editor) {
    this.orirange = window.getSelection().getRangeAt(0)
    if (DomUtil.trim(this.container.innerHTML) == '') {
      const $p = $('<p><br></p>')[0]
      DomUtil.append(editor.container, $p)
      S.createRange($p, false, editor)
    }
    this.change()
  }

}