import { $ } from '../../util/dom'
export default {
  name: 'color',
  tpl: '<li name="color"><i class="i-color"></i> </li>',
  events: [{
    type: 'mouseenter',
    cb (e) {
      $(e.currentTarget).children(1).style.display = 'flex'
    }
  }, {
    type: 'mouseleave',
    cb (e) {
      $(e.currentTarget).children(1).style.display = 'none'
    }
  }],
}