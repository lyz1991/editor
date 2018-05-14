import { $ } from '../../util/dom'
import DropList from '../../dropList/droplist'
import Cmd from '../../cmd/cmd'
export default {
  name: 'font',
  tpl: '<li name="font" class="tiptop" content="字体"><i class="i-font"></i><i class="i-down"></i> </li>',
  active: false,
  events: [{
    type: 'mouseenter',
    cb (e) {
      this.active = false
      $(e.currentTarget).children('ul').style.display = this.active ? 'none' : 'block'
    }
  }, {
    type: 'mouseleave',
    cb (e) {
      this.active = true
      $(e.currentTarget).children('ul').style.display = this.active ? 'none' : 'block'
    }
  }],
  init (editor) {
    new DropList({
      list: [{
        elem: $('<p>宋体</p>')[0],
        onclick: (e) => {
          this.do('宋体','FontName', editor)
        }
      },{
        elem: $('<p>微软雅黑</p>')[0],
        onclick: (e) => {
          this.do('微软雅黑','FontName', editor)
        }
      }]
    }, editor.configContainer.querySelector("li[name='font']"), editor)
  },
  do (value, name, editor) {
    Cmd.do(name, value, editor)
  }
}