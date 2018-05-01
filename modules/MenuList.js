
import bold from './menus/bold/bold'
import italic from './menus/italic/italic'
import DomUtil from './util/util'
import { $ } from './util/dom'
import strike from './menus/strike/strike'
import h from './menus/header/header'
import horizontal from './menus/horizontal/horizontal'
import DropList from './dropList/droplist'
export default class Menu {
  constructor (editor, opt) {
    this.bold = bold
    this.italic = italic
    this.strike = strike
    this.formatBlock = h
    this.horizontal = horizontal
    this.init(editor, opt)
  }
  init (editor, opt) {
    let frag = document.createDocumentFragment()
    for (let key in opt ) {
      DomUtil.append(frag, $(this[key].tpl)[0])
    }
    DomUtil.append(editor.configContainer, frag)
    new DropList([{
      html: 'H1'
    },{
      html: 'H2'
    },{
      html: 'H3'
    },{
      html: 'H4'
    }], editor.configContainer.querySelector("li[name='formatBlock']"), editor)
    this.bind(editor)
  }
  bind (editor) {
    let range = document.createRange()
    for (let i in this) {
      let dom = editor.configContainer.querySelector(`li[name=${this[i].name}]`)
      dom.addEventListener('click',  (e) => {
        return this[i].onClick(e, editor)
      })
    }
  }
}