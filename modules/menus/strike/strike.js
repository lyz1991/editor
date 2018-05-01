import DomUtil from '../../util/util'
export default {
  name: 'strike',
  tpl: '<li name="strike"><i  class="i-strike"></i> </li>',
  active: false,
  onClick (e, editor) {
    if (DomUtil.getRangeInContainer(editor, editor.orirange)) {
      let sc = window.getSelection()
      sc.removeAllRanges()
      sc.addRange(editor.orirange)
      if (!this.active) {
        this.active = true
        return document.execCommand('StrikeThrough', window.getSelection())
      }
    }
  }
}