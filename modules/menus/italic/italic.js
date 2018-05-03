import DomUtil from '../../util/util'
export default {
  name: 'italic',
  tpl: '<li name="italic"><i class="i-italic"></i> </li>',
  events: [{
    type: 'click',
    cb (e, editor) {
      if (DomUtil.getRangeInContainer(editor, editor.orirange)) {
        let sc = window.getSelection()
        sc.removeAllRanges()
        sc.addRange(editor.orirange)
        if (!this.active) {
          this.active = true
          return document.execCommand('italic', window.getSelection())
        }
      }
    }
  }],
  active: false
}