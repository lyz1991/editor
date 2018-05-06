import { $ } from '../../util/dom'
export default {
  name: 'BackColor',
  tpl: '<li name="BackColor"><i class="i-bgcolor"></i><i class="i-down"></i> </li>',
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