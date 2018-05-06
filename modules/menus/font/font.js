import DomUtil from '../../util/util'
import Cmd from '../../cmd/cmd'
import { $ } from '../../util/dom'
import S from '../../selections/selection'
export default {
  name: 'font',
  tpl: '<li name="font"><i class="i-font"></i> </li>',
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
  }]
}