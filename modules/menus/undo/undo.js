import DomUtil from '../../util/util'
import S from '../../selections/selection'
import Cmd from '../../cmd/cmd'
export default {
  name: 'undo',
  tpl: '<li name="undo"><i class="i-undo"></i> </li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      if (DomUtil.getRangeInContainer(editor, editor.orirange)) {
        S.saveRange(editor.orirange)
        Cmd.do('Undo', window.getSelection(), editor)
      }
    }
  }]
}