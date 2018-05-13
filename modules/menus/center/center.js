import { $ } from '../../util/dom'
import DropList from '../../dropList/droplist'
export default {
  name: 'center',
  events: [{
    type: 'mouseenter',
    cb (e) {
      $(e.currentTarget).children('ul').style.display = 'block'
    }
  },{
    type: 'click',
    cb (e) {
      $(e.currentTarget).children('ul').style.display = 'block'
    }
  },
    {
      type: 'mouseleave',
      cb (e) {
        $(e.currentTarget).children('ul').style.display = 'none'
      }
    }],
  tpl: '<li name="center" class="tiptop" content="标签"><i class="i-justfyleft"></i><i class="i-down"></i> </li>'
}