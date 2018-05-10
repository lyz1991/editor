import { $ } from '../../util/dom'
export default {
  name: 'BackColor',
  tpl: '<li name="BackColor" class="tiptop" content="背景颜色"><i class="i-bgcolor"></i><i class="i-down"></i> </li>',
  events: [{
    type: 'mouseenter',
    cb (e) {
      $(e.currentTarget).children('ul').style.display = 'flex'
    }
  }, {
    type: 'mouseleave',
    cb (e) {
      $(e.currentTarget).children('ul').style.display = 'none'
    }
  }],
}