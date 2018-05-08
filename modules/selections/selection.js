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
    console.log('ss')
    const range = document.createRange()
    range.selectNode(editor.container.lastChild)
    range.collapse(false)
    editor.orirange = range
    this.saveRange(range)
  }
}