import { $ } from '../../util/dom'
export default {
  name: 'color',
  tpl: '<li name="color" class="tiptop" content="字体颜色"><i class="i-color"></i> <i class="i-down"></i> </li>',
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