import { $ } from '../../util/dom'
import DropList from '../../dropList/droplist'
import Cmd from '../../cmd/cmd'
export default {
  name: 'formatBlock',
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
  tpl: '<li name="formatBlock" class="tiptop" content="标签"><i class="i-header"></i><i class="i-down"></i> </li>',
  init (editor) {
    new DropList([{
      elem: $('<p>H1</p>')[0],
      onclick: (e) => {
        this.do('<h1>', 'formatBlock', editor)
      }
    },{
      elem: $('<p>H2</p>')[0],
      onclick: (e) => {
        this.do('<h2>', 'formatBlock', editor)
      }
    },{
      elem: $('<p>H3</p>')[0],
      onclick: (e) => {
        this.do('<h3>','formatBlock', editor)
      }
    },{
      elem: $('<p>H4</p>')[0],
      onclick: (e) => {
        this.do('<h4>', 'formatBlock', editor)
      }
    }], editor.configContainer.querySelector("li[name='formatBlock']"), editor)
  },
  do (value, name, editor) {
    Cmd.do(name, value, editor)
  }
}