import DomUtil from '../../util/util'
import { $ } from '../../util/dom'
export default {
  name: 'horizontal',
  tpl: '<li name="horizontal"><i class="i-horizontal"></i> </li>',
  events: [{
    type: 'click',
    cb (e, eidtor) {
      let frag = document.createDocumentFragment()
      let hr = document.createElement('hr')
      frag.appendChild(hr)
      DomUtil.append(frag, $('<p><br></p>')[0])
      DomUtil.insertAfter(frag, eidtor.orirange.commonAncestorContainer)

    }
  }]
}