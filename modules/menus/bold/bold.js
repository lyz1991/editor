import DomUtil from '../../util/util'
import Cmd from '../../cmd/cmd'
import S from '../../selections/selection'
export default {
  name: 'bold',
  tpl: '<li name="bold"><i class="i-bold"></i> </li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      if (DomUtil.getRangeInContainer(editor, editor.orirange)) {
        S.saveRange(editor.orirange)
        Cmd.do('bold', window.getSelection(), editor)
      }
    }
  }]
}