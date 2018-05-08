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
        S.initRange(eidtor)
        return eidtor.change(false)
      }
      if (!window.getSelection().toString() && !eidtor.orirange.commonAncestorContainer) {
        DomUtil.insertAfter(frag, eidtor.orirange.commonAncestorContainer)
        S.initRange(eidtor)
        return eidtor.change(false)
      }
      eidtor.container.appendChild(frag)
      S.initRange(eidtor)
      return eidtor.change(false)
    }
  }]
}