import color from './menus/color/color'
import bold from './menus/bold/bold'
import italic from './menus/italic/italic'
import DomUtil from './util/util'
import { $ } from './util/dom'
import strike from './menus/strike/strike'
import h from './menus/header/header'
import horizontal from './menus/horizontal/horizontal'
import DropList from './dropList/droplist'
import BgColor from './menus/bgColor/bgcolor'
import Color from './colorpanel'
import face from './menus/face/face'
import Href from './menus/href/href'
export default class Menu {
  constructor (editor, opt) {
    this.bold = bold
    this.italic = italic
    this.strike = strike
    this.formatBlock = h
    this.color = color
    this.horizontal = horizontal
    this.BgColor = BgColor
    this.href = Href
    this.face = face
    this.init(editor, opt)
    Color.init(DomUtil.query("li[name='color']"), editor, 'ForeColor')
    Color.init(DomUtil.query("li[name='BackColor']"), editor, 'BackColor')
  }
  init (editor, opt) {
    let frag = document.createDocumentFragment()
    for (let value of opt['menus'] ) {
      console.log(value)
      DomUtil.append(frag, $(this[value].tpl)[0])
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
      let dom = editor.configContainer.querySelector(`li[name=${this[i].name}]`)
      this[i].events.forEach(env => {
        dom.addEventListener(env.type, (e) => {
          env.cb(e, editor)
        })
      })
    }
  }
}