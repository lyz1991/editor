import DomUtil from '../../util/util'
import S from '../../selections/selection'
import Cmd from '../../cmd/cmd'
export default {
  name: 'quote',
  tpl: '<li name="quote" class="tipright" content="引用"><i  class="i-quote"></i> </li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      if (DomUtil.getRangeInContainer(editor, editor.orirange)) {
        S.saveRange(editor.orirange)
        Cmd.do('formatBlock', '<BLOCKQUOTE>', editor)
      }
    }
  }]
}