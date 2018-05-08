export default {
  saveRange (range) {
    if (!range) {
      return
    }
    let sc = window.getSelection()
    sc.removeAllRanges()
    sc.addRange(range)
  },
  createRange (node, iscontent = false, editor) {
    const range = document.createRange()
    if (iscontent) {
      range.selectNode(node)
    } else {
      range.selectNodeContents(node)
    }
    range.collapse(iscontent)
    editor.orirange = range
    this.saveRange(range)
  },
  initRange (editor) {
    const range = document.createRange()
    /*有hr，最后一个是<p><br></p>*/
    range.selectNode(editor.container.lastChild)
    range.collapse(false)
    editor.orirange = range
    this.saveRange(range)
  }
}