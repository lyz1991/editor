import { $ } from '../../util/dom'
export default {
  name: 'formatBlock',
  events: [{
    type: 'mouseenter',
    cb (e) {
      $(e.currentTarget).children('ul').style.display = 'block'
    }
  }, {
    type: 'mouseleave',
    cb (e) {
      $(e.currentTarget).children('ul').style.display = 'none'
    }
  }],
  tpl: '<li name="formatBlock" class="tiptop" content="标签"><i class="i-header"></i><i class="i-down"></i> </li>'
}