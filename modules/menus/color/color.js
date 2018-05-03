import { $ } from '../../util/dom'
export default {
  name: 'color',
  tpl: '<li name="color"><i class="i-color"></i> </li>',
  active: false,
  events: [{
    type: 'mouseenter',
    cb (e) {
      this.active = false
      $(e.currentTarget).children(1).style.display = this.active ? 'none' : 'block'
    }
  }, {
    type: 'mouseleave',
    cb (e) {
      this.active = true
      $(e.currentTarget).children(1).style.display = this.active ? 'none' : 'block'
    }
  }],
}