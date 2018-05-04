import DomUtil from '../../util/util'
import Cmd from '../../cmd/cmd'
import S from '../../selections/selection'
export default {
  name: 'italic',
  tpl: '<li name="italic"><i class="i-italic"></i> </li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      if (DomUtil.getRangeInContainer(editor, editor.orirange)) {
        S.saveRange(editor.orirange)
        if (!this.active) {
          this.active = true
          Cmd.do('italic', window.getSelection(), editor)
        }
      }
    }
  }],
  active: false
}