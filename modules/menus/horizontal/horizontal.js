import DomUtil from '../../util/util'
import S from '../../selections/selection'
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
      if (!eidtor.orirange) {
        eidtor.container.appendChild(frag)
        return
      }
      S.saveRange(eidtor.orirange)
      if (!window.getSelection().toString() && !eidtor.orirange.commonAncestorContainer) {
        DomUtil.insertAfter(frag, eidtor.orirange.commonAncestorContainer)
        return eidtor.change()
      }
      eidtor.container.appendChild(frag)
      return eidtor.change()
    }
  }]
}