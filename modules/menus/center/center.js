import { $ } from '../../util/dom'
import DropList from '../../dropList/droplist'
import Cmd from '../../cmd/cmd'
export default {
  name: 'center',
  events: [{
    type: 'mouseenter',
    cb (e) {
      $(e.currentTarget).children('ul').style.display = 'block'
    }
  },{
    type: 'click',
    cb (e) {
      $(e.currentTarget).children('ul').style.display = 'block'
    }
  },
    {
      type: 'mouseleave',
      cb (e) {
        $(e.currentTarget).children('ul').style.display = 'none'
      }
    }],
  tpl: '<li name="center" class="tiptop" content="标签"><i class="i-justfyleft"></i><i class="i-down"></i> </li>',
  init (editor) {
    new DropList({
      title: '对齐方式',
      list: [{
        elem: $('<p><i class="i-justfyleft"></i> 居左</p>')[0],
        onclick: (e) => {
          this.do('justifyLeft', '', editor)
        }
      },{
        elem: $('<p><i class="i-justfycenter"></i>居中</p>')[0],
        onclick: (e) => {
          this.do('justifyCenter', '', editor)
        }
      },{
        elem: $('<p><i class="i-justfyright"></i>居右</p>')[0],
        onclick: (e) => {
          this.do('justifyRight', '', editor)
        }
      }]
    }, editor.configContainer.querySelector("li[name='center']"), editor)
  },
  do (name, value, editor) {
    Cmd.do(name, value, editor)
  }
}