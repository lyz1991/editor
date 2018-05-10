import DomUtil from '../../util/util'
import Cmd from '../../cmd/cmd'
import S from '../../selections/selection'
export default {
  name: 'face',
  tpl: '<li name="face" class="tipright" content="插入表情"><i class="i-face"></i> </li>',
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