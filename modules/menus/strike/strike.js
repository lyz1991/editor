import DomUtil from '../../util/util'
import S from '../../selections/selection'
import Cmd from '../../cmd/cmd'
export default {
  name: 'strike',
  tpl: '<li name="strike" class="tipright" content="删除线"><i  class="i-strike"></i> </li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      if (DomUtil.getRangeInContainer(editor, editor.orirange)) {
        S.saveRange(editor.orirange)
        Cmd.do('StrikeThrough', window.getSelection(), editor)
      }
    }
  }]
}