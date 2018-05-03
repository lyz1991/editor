import { $ } from '../../util/dom'
export default {
  name: 'formatBlock',
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
  tpl: '<li name="formatBlock"><i class="i-header"></i> </li>',
  active: false
}