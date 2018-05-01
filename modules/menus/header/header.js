import { $ } from '../../util/dom'
export default {
  name: 'formatBlock',
  tpl: '<li name="formatBlock"><i class="i-header"></i> </li>',
  active: false,
  onClick (e) {
    this.active = !this.active
    $(e.currentTarget).children(1).style.display = this.active ? 'none' : 'block'
  }
}