import color from './menus/color/color'
import bold from './menus/bold/bold'
import italic from './menus/italic/italic'
import DomUtil from './util/util'
import { $ } from './util/dom'
import strike from './menus/strike/strike'
import h from './menus/header/header'
import horizontal from './menus/horizontal/horizontal'
import DropList from './dropList/droplist'
import Color from './menus/color/colorpanel'
export default class Menu {
  constructor (editor, opt) {
    this.bold = bold
    this.italic = italic
    this.strike = strike
    this.formatBlock = h
    this.color = color
    this.horizontal = horizontal
    this.init(editor, opt)
    Color.init(DomUtil.query("li[name='color']"), editor)
  }
  init (editor, opt) {
    let frag = document.createDocumentFragment()
    for (let key in opt ) {
      DomUtil.append(frag, $(this[key].tpl)[0])
    }
    DomUtil.append(editor.configContainer, frag)
    new DropList([{
      html: 'H1',
      value: "<h1>"
    },{
      html: 'H2',
      value: "<h2>"
    },{
      html: 'H3',
      value: "<h3>"
    },{
      html: 'H4',
      value: "<h4>"
    }], editor.configContainer.querySelector("li[name='formatBlock']"), editor)
    this.bind(editor)
  }
  bind (editor) {
    let range = document.createRange()
    for (let i in this) {
      console.log(this[i])
      let dom = editor.configContainer.querySelector(`li[name=${this[i].name}]`)
      this[i].events.forEach(env => {
        dom.addEventListener(env.type, (e) => {
          env.cb(e, editor)
        })
      })
    }
  }
}