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
import Font from './menus/font/font'
import Undo from './menus/undo/undo'
import quote from './menus/quote/quote'
import publish from './menus/publish/publish'
import upload from './menus/upload/upload'
export default class Menu {
  constructor (editor, opt) {
    this.bold = bold
    this.italic = italic
    this.strike = strike
    this.formatBlock = h
    this.color = color
    this.horizontal = horizontal
    this.BackColor = BgColor
    this.href = Href
    this.upload = upload
    this.face = face
    this.undo = Undo
    this.font = Font
    this.quote = quote
    this.publish = publish
    this.init(editor, opt)
    Color.init(DomUtil.query("li[name='color']"), editor, 'ForeColor')
    Color.init(DomUtil.query("li[name='BackColor']"), editor, 'BackColor')
  }
  init (editor, opt) {
    if (opt.extend) {
      for (let key in opt.extend) {
        this[key] = opt.extend[key]
        opt.menus.splice(opt.extend[key].index, 0, key)
      }
    }
    let frag = document.createDocumentFragment()
    for (let value of opt['menus'] ) {
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
    }], editor.configContainer.querySelector("li[name='formatBlock']"), editor ,'formatBlock')
    new DropList([{
      html: '宋体',
      value: "宋体"
    },{
      html: '微软雅黑',
      value: "微软雅黑"
    },{
      html: 'Arial',
      value: "Arial"
    }], editor.configContainer.querySelector("li[name='font']"), editor, 'FontName')
    this.bind(editor, opt)
  }
  bind (editor, opt) {
    for (let value of opt['menus']) {
      let dom = editor.configContainer.querySelector(`li[name=${value}]`)
      this[value].events.forEach(env => {
        dom.addEventListener(env.type, (e) => {
          env.cb &&  env.cb(e, editor)

        })
      })
    }
  }
}