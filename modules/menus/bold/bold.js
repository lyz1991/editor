import DomUtil from '../../util/util'
export default {
  name: 'bold',
  tpl: '<li name="bold"><i class="i-bold"></i> </li>',
  active: false,
  events: [{
    type: 'click',
    cb (e, editor) {
      if (DomUtil.getRangeInContainer(editor, editor.orirange)) {
        let sc = window.getSelection()
        sc.removeAllRanges()
        sc.addRange(editor.orirange)
        if (!this.active) {
          this.active = true
          return document.execCommand('bold', window.getSelection())
        }
      }
    }
  }]
}