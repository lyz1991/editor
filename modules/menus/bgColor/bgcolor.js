import { $ } from '../../util/dom'
export default {
  name: 'BackColor',
  tpl: '<li name="BackColor"><i class="i-bgcolor"></i> </li>',
  events: [{
    type: 'mouseenter',
    cb (e) {
      console.log($(e.currentTarget).children(1))
      $(e.currentTarget).children(1).style.display = 'flex'
    }
  }, {
    type: 'mouseleave',
    cb (e) {
      console.log(22)
      $(e.currentTarget).children(1).style.display = 'none'
    }
  }],
}